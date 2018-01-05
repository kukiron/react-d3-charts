import React from "react"
import renderer from "react-test-renderer"

import BarChart from "../../src/bar-chart"
import PieChart from "../../src/pie-chart"

describe("Snapshot of the Charts", () => {
  const data = [
    { title: "Plane Ticket", value: 268 },
    { title: "Hotel", value: 199 },
    { title: "Rental Car", value: 49 },
    { title: "Dinner", value: 112 },
    { title: "Postcards", value: 3 }
  ]

  // Snapshot of BarChart
  it("bar chart renders correctly", () => {
    function createNodeMock(element) {
      if (element.type === "div") {
        return {
          getBoundingClientRect() {
            return { width: 600 }
          }
        }
      }
      return null
    }
    const options = { createNodeMock }
    const tree = renderer.create(<BarChart data={data} />, options).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Snapshot of PieChart
  it("pie chart renders correctly", () => {
    function createNodeMock(element) {
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
    const tree = renderer.create(<PieChart data={data} />, options).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
