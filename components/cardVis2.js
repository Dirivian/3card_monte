const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 650;
const height = 300;
const cardWidthMultiplier = 7.5;
const cardHeightMultiplier = 10.5;
const cardSize = 15;

const cardPrimitives = ['2','A',  '3'];
const suits = ["♠"];
let propsUpdated = false;

function makeCards(suits, cardPrimitives) {
  let cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cardPrimitives.length; j++) {
      cards.push(cardPrimitives[j] + suits[i]);
    }
  }
  return cards;
}

let cards = makeCards(suits, cardPrimitives);

class cardVis extends D3Component {

  initialize(node, props) {

    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${height}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg.selectAll('rect')
      .data(cards)
      .enter()
      .append('rect')
      .attr('class', 'card')
      .attr('x', function (d, i) {
        return 40 + i % 13 * 135 - 10;
      })

      .attr('y', function (d, i) {
        if (1<2) {
          return height * (1 / 5) - 16;
        }
        if (i > (cards.length - 1) * (1 / 4) && i < (cards.length - 1) * (2 / 4)) {
          return height * (2 / 5) - 16;
        }
        if (i > (cards.length - 1) * (2 / 4) && i < (cards.length - 1) * (3 / 4)) {
          return height * (3 / 5) - 16;
        }
        if (i > (cards.length - 1) * (3 / 4) && i <= (cards.length - 1) * (4 / 4)) {
          return height * (4 / 5) - 16;
        }
      })
      .attr('width', cardSize * cardWidthMultiplier)
      .attr('height', cardSize * cardHeightMultiplier)
      .attr('fill', function (d) {
        if (props.static === "True") {
          return '#FFFFFF'
        } else {
          if (d === 'K♦') {
            return '#f44336';
          } else {
            return '#FFFFFF';
          }
        }
      })

      .attr('rx', 3)
      .attr('ry', 3)
      .attr('stroke', '#444444')
      .attr('stroke-width', 1)
    // .on('mouseover', function(d) { d3.select(this).attr('fill', '#F0F0F0'); })
    // .on('mouseout', function(d) { d3.select(this).attr('fill', '#FFFFFF'); });

    svg.selectAll('text')
      .data(cards)
      .enter()
      .append('text')
      .attr('class', 'card-text')
      .attr('x', function (d, i) { return 35 + i % 13 * 135; })
      .attr('y', function (d, i) {
        if (1<2) {
          return height * (1 / 5);
        }
        if (i > (cards.length - 1) * (1 / 4) && i < (cards.length - 1) * (2 / 4)) {
          return height * (2 / 5);
        }
        if (i > (cards.length - 1) * (2 / 4) && i < (cards.length - 1) * (3 / 4)) {
          return height * (3 / 5);
        }
        if (i > (cards.length - 1) * (3 / 4) && i <= (cards.length - 1) * (4 / 4)) {
          return height * (4 / 5);
        }
      })
      // .attr('x', function(d,i) { return 20 + i*20 })
      .text(function (d) { return d; })
      .attr('text-anchor', 'start')
      .attr('fill', function (d) {
        if (props.static === "True") {

          if (d === 'A♠') {
            return '#f44336';
          }
          else{
            return 'black';
          }
        }
      })
      .style('font-size', '14px')
      .style('font-weight', 700);
  }

  update(props) {

    if (propsUpdated === false) {

      if (props.iterVar === 0) {
        cards = makeCards(suits, cardPrimitives);
        // console.log(cards)
      }

      let lastPoint = props.points[props.points.length - 1];

      if (lastPoint.y !== 1) {          let randCardIndex = Math.floor(Math.random() * cards.length);
        propsUpdated = true;

        // console.log('riffle', props.iterVar);

        function riffle(cards, randCardIndex) {


          if (randCardIndex == 0){
            var index_1 =1
            var index_2 =2
                      }
          else if (randCardIndex == 1){
            var index_1 =0
            var index_2 =2
                      }
          else if(randCardIndex == 2){
            var index_1 =0
            var index_2 =1
           }
           console.log(index_1, index_2 )

          let a = cards[index_1]
          cards[index_1] = cards[index_2]
          cards[index_2] = a
          return cards;
        }

        if (props.shuffleswitch == 0){
            console.log('idea')
        }
        if (props.flipswitch == 1){
          this.svg.selectAll('.card')
          .data(cards)
          .transition()
          .duration(2000)
          .attr('fill', 'teal')

        this.svg.selectAll('.card-text')
          .data(cards)
          .transition()
          .duration(2000)
          .text(function (d) { return d; })
          .style( "opacity", 0 )
          }
        else{
          this.svg.selectAll('.card')
          .data(cards)
          .transition()
          .duration(2000)
          .attr('fill', 'transparent')

        this.svg.selectAll('.card-text')
          .data(cards)
          .transition()
          .duration(2000)
          .text(function (d) { return d; })
          .style( "opacity", 1 )
        }


        if (props.shuffleswitch == 0){
          console.log(cards)
          let randCardIndex = Math.floor(Math.random() * cards.length);
          if (randCardIndex == 0){
            var index_1 =1
            var index_2 =2
                      }
          else if (randCardIndex == 1){
            var index_1 =0
            var index_2 =2
                      }
          else if(randCardIndex == 2){
            var index_1 =0
            var index_2 =1
           }
          this.svg.selectAll('.card')
                  .data(cards)
                  .transition()
                  .duration(200)
                  .attr('x', function (d, i) {
                    if (i == randCardIndex)
                      {return 30 + i % 13 * 135;}
                    else if (i == index_1){
                       return  30 + index_2 % 13 * 135;
                        }
                    else if (i == index_2){
                       return  30 + index_1 % 13 * 135;
                            }
                        })

                this.svg.selectAll('.card-text')
                  .data(cards)
                  .transition()
                  .duration(200)
                  .text(function (d) { return d; })
                  .attr('x', function (d, i) {
                    if (i == randCardIndex)
                      {return 35 + i % 13 * 135;}
                    else if (i == index_1){
                       return  35 + index_2 % 13 * 135;
                        }
                    else if (i == index_2){
                       return  35 + index_1 % 13 * 135;
                            }
                        })
          cards = riffle(cards, randCardIndex)
          console.log(cards)
          this.svg.selectAll('.card')
                  .data(cards)

                  .attr('x', function (d, i)   {return 30 + i % 13 * 135;}
                    )

                this.svg.selectAll('.card-text')
                  .data(cards)
                  .text(function (d) { return d; })
                  .attr('x', function (d, i) {
                    return 35 + i % 13 * 135;}
                        )
          }

        const newXValue = props.iterVar;
        const newYValue = cards.indexOf('K♦') + 1;
        // console.log('updateprops');

        // Make sure you put this code in a conditional
        // so that it doesn't loop infinitely
        props.updateProps({
          points: props.points.concat([{
            x: newXValue,
            y: newYValue
          }])
        });
      }
    } else {
      propsUpdated = false;
    }
  }
}

module.exports = cardVis;
