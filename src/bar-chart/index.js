import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";

import Axes from "./components/Axes";
import Bars from "./components/Bars";
import ResponsiveWrapper from "../ResponsiveWrapper";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 },
      svgDimensions = {
        width: Math.max(this.props.parentWidth, 300),
        height: 500
      },
      maxValue = Math.max(...this.props.data.map(d => d.value)),
      xScale = this.xScale
        .padding(0.5)
        .domain(this.props.data.map(d => d.title))
        .range([margins.left, svgDimensions.width - margins.right]),
      yScale = this.yScale
        .domain([0, maxValue])
        .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <svg
        className="vizzlo-bar"
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.props.data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    );
  }
}

export default ResponsiveWrapper(BarChart);
