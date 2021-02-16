import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "orgMembers",
          type: "bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
      OrgMembers: [
        {
          name: "Org Members",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
  updateCharts() {
    const min = 30;
    const newBarSeries = [];
    this.state.seriesBar.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min;
      });
      newBarSeries.push({ data, name: s.name });
    });
    this.setState({
      seriesBar: newBarSeries,
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    });
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.OrgMembers}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
