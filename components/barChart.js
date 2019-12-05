import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class barChart extends React.Component {
  render() {
    var data = [
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
    
    console.log(this.props.pts)
    if (this.props.pts && this.props.pts.length === 0) {
      data.push(['Left', 0, 'blue', null]);
      data.push(['Middle', 1, 'red', null]);
      data.push(['Right', 0, 'yellow', null]);
    }
    else if (this.props.pts) {
      var idx = this.props.shuffleIndex;
      console.log(idx)
      data.push(['Left', this.props.pts[idx]["p_0"], 'blue', null]);
      data.push(['Middle', this.props.pts[idx]["p_1"], 'red', null]);
      data.push(['Right', this.props.pts[idx]["p_2"], 'yellow', null]);
    }

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'700px'}
          height={'400px'}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={ data }
          options={{
            title: 'Probabilities of Each Card Being the Winning Card',
            titleTextStyle: { fontSize: 20, },
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
            hAxis: {
              title: 'Number of shuffles',
            },
            vAxis: {
              title: 'Probability',
              format: 'percent',
              maxValue: '1.0',
            },
            animation:{
              duration: 400,
              easing: 'out',
            },
            chartArea: { width: "80%", height: "80%" },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    );
  }
}
module.exports = barChart;