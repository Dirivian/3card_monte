import * as React from "react";
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
    
    if (this.props.pts && this.props.pts.length === 0) {
      data.push(['Left', 0, '#FF9900', null]);
      data.push(['Middle', 1, '#3366CC', null]);
      data.push(['Right', 0, '#109618', null]);
    }
    else if (this.props.pts) {
      console.log('from bar');
      console.log(this.props.pts);
      var idx = this.props.shuffleIndex;
      data.push(['Left Probability', this.props.pts[idx]["p_0"], '#FF9900', null]);
      data.push(['Middle Probability', this.props.pts[idx]["p_1"], '#3366CC', null]);
      data.push(['Right Probability', this.props.pts[idx]["p_2"], '#109618', null]);
    }

    return (
      <div className={"bar-container"}>
        <svg className={"probability-line"}>
          <line x1="0" y1="0" x2="1000" y2="0" transform="translate(70, 150)"  stroke="#DC3912" strokeWidth="2" strokeDasharray="10 4" />
        </svg>
        <Chart
          width={'700px'}
          height={'300px'}
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
            chartArea: { width: "80%", height: "70%" },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </div>
    );
  }
}
module.exports = barChart;
