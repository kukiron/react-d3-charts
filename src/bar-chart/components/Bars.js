import React, { Component } from "react";
import { scaleOrdinal } from "d3-scale";

class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleOrdinal().range([
      "#E74C3C",
      "#3498DB",
      "#2ECC71",
      "#F1C40F",
      "#9B59B6"
    ]);
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props,
      { xScale, yScale } = scales,
      { height } = svgDimensions;

    const bars = data.map((datum, i) => (
      <rect
        key={i}
        className="bar-chart"
        x={xScale(datum.title)}
        y={yScale(datum.value)}
        height={height - margins.bottom - scales.yScale(datum.value)}
        width={xScale.bandwidth()}
        fill={this.colorScale(i)}
      >
        <title>€{datum.value}</title>
      </rect>
    ));

    return <g>{bars}</g>;
  }
}

export default Bars;
