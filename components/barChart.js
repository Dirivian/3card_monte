<<<<<<< HEAD
import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class barChart extends React.Component {
  render() {
    let data = [
      [
        'Card Position',
        'Probability',
        { role: 'style' },
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'string',
          calc: 'stringify',
        },
      ]
    ];
    if (this.props.pts) {
      let idx = this.props.shuffleIndex;
      data.push(['Left', this.props.pts[idx]["p_0"], 'blue', null]);
      data.push(['Middle', this.props.pts[idx]["p_1"], 'red', null]);
      data.push(['Right', this.props.pts[idx]["p_2"], 'yellow', null]);
    }

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={ data }
          options={{
            title: 'Density of Precious Metals, in g/cm^3',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
            vAxis: { maxValue: '1.0' },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    );
  }
}
module.exports = barChart;
||||||| merged common ancestors
=======
import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class barChart extends React.Component {
  render() {
    let data = [
      [
        'Card Position',
        'Probability',
        { role: 'style' },
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'string',
          calc: 'stringify',
        },
      ]
    ];
    if (this.props.pts) {
      let idx = this.props.shuffleIndex;
      data.push(['Left', this.props.pts[idx][0], 'blue', null]);
      data.push(['Middle', this.props.pts[idx][1], 'red', null]);
      data.push(['Right', this.props.pts[idx][2], 'yellow', null]);
    }

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={ data }
          options={{
            title: 'Density of Precious Metals, in g/cm^3',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    );
  }
}
module.exports = barChart;
>>>>>>> e971de541320c173c5065c26e7e2d44cbba146c8
