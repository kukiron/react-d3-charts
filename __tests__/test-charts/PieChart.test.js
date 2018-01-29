import { expect } from "chai"
import React from "react"
import ReactTestUtils from "react-dom/test-utils"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import PieChart from "../../src/pie-chart"
import ResponsiveWrapper from "../../src/ResponsiveWrapper"
import { generatePartsOfWhole as generateData } from "../utils/datagen"

Enzyme.configure({ adapter: new Adapter() })

describe("PieChart", () => {
  const data = generateData(),
    values = data.map(item => item.value)

  it("renders piechart", () => {
    // Render a piechart using array data
    const piechart = ReactTestUtils.renderIntoDocument(<PieChart data={data} />)

    // Verify that it has rendered the main chart svg
    const pie = ReactTestUtils.findRenderedDOMComponentWithClass(
      piechart,
      "vizzlo-pie"
    )
    expect(pie).to.exist
    expect(pie.tagName).to.equal("g")

    // Verify that it has the same number of pies as the array's length
    const pieGroup = ReactTestUtils.scryRenderedDOMComponentsWithClass(
      piechart,
      "pie-chart"
    )
    expect(pieGroup.length).to.equal(values.length)
  })
})

describe("ResponsiveWrapper", () => {
  let piechart
  const data = generateData()

  beforeEach(() => {
    piechart = () => <PieChart data={data} />
  })

  // Testing HOC that it renders it's child component
  it("renders it's children", () => {
    const WrapperComponent = ResponsiveWrapper(piechart),
      wrapper = mount(<WrapperComponent />)

    wrapper.setState({ containerWidth: 900 })
    expect(wrapper.find(piechart).length).to.equal(1)
  })

  // HOC doesn't render when containerWidth is null
  it("doesn't render it's children", () => {
    const WrapperComponent = ResponsiveWrapper(piechart),
      wrapper = mount(<WrapperComponent />)

    wrapper.setState({ containerWidth: null })
    expect(wrapper.find(piechart).length).to.equal(0)
  })
})
