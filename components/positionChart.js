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
          width={'600px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={ data }
          options={{ 
            chart: {
              title: 'Probabilities of Winning Card',
              subtitle: 'as shuffle number increases',
            },
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