import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import BarChart from "./bar-chart/BarChart";
import PieChart from "./pie-chart/PieChart";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }

  randomize(arr) {
    return arr.map(elem => ({
      title: elem.title,
      value: Math.floor(Math.random() * 2 * elem.value)
    }));
  }

  onValueChange() {
    console.log(this.randomize(data));
    this.setState({
      data: this.randomize(data)
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to the</h2>
          <h1>BAD ASS CHART</h1>
        </div>
        <Tabs>
          <TabList>
            <Tab>Bar Chart</Tab>
            <Tab>Pie Chart</Tab>
            <span className="tab-btn" onClick={this.onValueChange.bind(this)}>
              Randomize
            </span>
          </TabList>
          <TabPanel>
            <div className="chart-container">
              <BarChart data={this.state.data} />
            </div>
          </TabPanel>
          <TabPanel>
            <PieChart data={this.state.data} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
