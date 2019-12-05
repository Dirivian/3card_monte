import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class positionChart extends React.Component {
  render() {
    let data = [[
      'Number of Shuffles',
      'Left Probability',
      'Middle Probability',
      'Right Probability'
    ]];
    for (let i = 0; this.props.pts && i < this.props.pts.length; i++) {
      let point = [(i).toString()];
      point.push(this.props.pts[i]["p_0"]);
      point.push(this.props.pts[i]["p_1"]);
      point.push(this.props.pts[i]["p_2"]);

      data.push(point);
    }
    console.log("--------------");
    console.log(data);
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'700px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={ data }
          options={{ 
            title: 'Probabilities of Each Card Being the Winning Card',
            titleTextStyle: { fontSize: 20, },
            legend: { position: 'top' },
            hAxis: {
              title: 'Number of shuffles',
            },
            vAxis: {
              title: 'Probability',
              format: 'percent',
            },
            chartArea: { width: "80%", height: "80%" },
            pointSize: 8,
            pointShape: 'circle',
            animation:{
              duration: 400,
              easing: 'out',
            },
          }}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    );
  }
}
module.exports = positionChart;