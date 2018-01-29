import React from "react"
import renderer from "react-test-renderer"

import BarChart from "../../src/bar-chart"
import PieChart from "../../src/pie-chart"

describe("Snapshot of the Charts", () => {
  const data = [
    { title: "Plane Ticket", value: 640 },
    { title: "Hotel", value: 135 },
    { title: "Rental Car", value: 40 },
    { title: "Dinner", value: 55 },
    { title: "Postcards", value: 4 }
  ]

  const createNodeMock = element => {
    if (element.type === "div") {
      return {
        getBoundingClientRect() {
          return { width: 900 }
        }
      }
    }
    return null
  }
  const options = { createNodeMock }

  // Snapshot of BarChart
  it("bar chart renders correctly", () => {
    const tree = renderer.create(<BarChart data={data} />, options).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Snapshot of PieChart
  it("pie chart renders correctly", () => {
    const tree = renderer.create(<PieChart data={data} />, options).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
