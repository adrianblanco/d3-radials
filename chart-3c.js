import * as d3 from 'd3'

var margin = { top: 30, left: 30, right: 30, bottom: 30 }

var height = 400 - margin.top - margin.bottom

var width = 1080 - margin.left - margin.right

var svg = d3
  .select('#chart-3c')
  .append('svg')
  .attr('height', height + margin.top + margin.bottom)
  .attr('width', width + margin.left + margin.right)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
  'Blah'
]

d3.csv(require('./data/all-temps.csv'))
  .then(ready)
  .catch(err => console.log('Failed on', err))

function ready(datapoints) {

}
