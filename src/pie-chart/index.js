import React, { Component } from "react";

import Pies from "./components//Pies";
import ResponsiveWrapper from "../ResponsiveWrapper";

class PieChart extends Component {
  render() {
    const width = window.innerWidth,
      height = window.innerHeight,
      minViewportSize = Math.min(width, height),
      ratio = 0.8,
      radius = minViewportSize * ratio / 2,
      x = width / 2,
      y = height / 2;

    const { data } = this.props;

    return (
      <svg width={width} height={height}>
        <g className="vizzlo-pie" transform={`translate(${x}, ${y})`}>
          <Pies data={data} radius={radius} />
        </g>
      </svg>
    );
  }
}

export default ResponsiveWrapper(PieChart);
