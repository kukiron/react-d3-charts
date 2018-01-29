import { expect } from "chai"
import React from "react"
import ReactTestUtils from "react-dom/test-utils"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import BarChart from "../../src/bar-chart"
import ResponsiveWrapper from "../../src/ResponsiveWrapper"
import { generatePartsOfWhole as generateData } from "../utils/datagen"

Enzyme.configure({ adapter: new Adapter() })

describe("BarChart", () => {
  const data = generateData(),
    values = data.map(item => item.value)

  it("renders barchart", () => {
    // Render a barchart using array data
    const barchart = ReactTestUtils.renderIntoDocument(<BarChart data={data} />)

    // Verify that it has rendered the main chart svg
    const bars = ReactTestUtils.findRenderedDOMComponentWithClass(
      barchart,
      "vizzlo-bar"
    )
    expect(bars).to.exist
    expect(bars.tagName).to.equal("svg")

    // Verify that it has the same number of bars as the array's length
    var barGroup = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      barchart,
      "rect"
    )
    expect(barGroup.length).to.equal(values.length)
  })
})

describe("ResponsiveWrapper", () => {
  let barchart
  const data = generateData()

  beforeEach(() => {
    barchart = () => <BarChart data={data} />
  })

  // Testing HOC that it renders it's child component
  it("renders it's children", () => {
    const WrapperComponent = ResponsiveWrapper(barchart),
      wrapper = mount(<WrapperComponent />)

    wrapper.setState({ containerWidth: 900 })
    expect(wrapper.find(barchart).length).to.equal(1)
  })

  // HOC doesn't render when containerWidth is null
  it("doesn't render it's children", () => {
    const WrapperComponent = ResponsiveWrapper(barchart),
      wrapper = mount(<WrapperComponent />)

    wrapper.setState({ containerWidth: null })
    expect(wrapper.find(barchart).length).to.equal(0)
  })
})
