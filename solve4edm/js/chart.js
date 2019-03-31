var loadHistogram = function(jsonFileName){
  var d3 = window.d3version4;
  var highlight = (d) => {
    if (d.current) { return 'current'; }
    if (d.average) { return 'average'; }
  };
  
  var render = (selector, settings, data) => {
    // remove previous chart info
    document.getElementById('chart-neg-pos').innerHTML = '';
    /**
     * prepare sizes
     */
    
    var { size, margin, padding, format } = settings;
    
    var top = margin.top || 0;
    var right = margin.right || 0;
    var bottom = margin.bottom || 0;
    var left = margin.left || 0;
    
    var width = size.width - left - right;
    var height = size.height - top - bottom;
    
    var BAR_HEIGHT = 10;
    
    /**
     * declare scales
     */
      
    var x = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.value).concat(0)))
      .range([0, width]);
    
    var y = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, height])
      .padding(1/3);
    
    /**
     * declare axis
     */
    
    var yAxis = d3.axisLeft(y)
      .tickSize(0)
      .tickPadding(x(0) + padding.yAxisLabel);
      
    /**
     * setup chart
     */
    
    var svg = d3.select(selector)
      .attr('width', size.width)
      .attr('height', size.height);
      
    var chart = svg.append('g')
      .attr('class', 'canvas')
      .attr('transform', `translate(${ left }, ${ top })`);
    
    /**
     * add bars and bar values
     */
    
    var bar = chart.selectAll('g')
      .data(data)
      .enter().append('g')
        .attr('class', d => `bar ${ d.value < 0 ? 'negative': 'positive' }`);
      
    bar.append('rect')
      .attr('x', d => x(Math.min(0, d.value)))
      .attr('y', d => y(d.name))
      .attr('width', d => Math.abs(x(d.value) - x(0)))
      .attr('height', BAR_HEIGHT)
      .attr('class', highlight);
        
    bar.append('text')
      .attr('x', d => d.value < 0 ? x(d.value) - padding.barValue : x(d.value) + padding.barValue)
      .attr('y', d => y(d.name) + BAR_HEIGHT / 2)
      .attr('dy', '.35em')
      .text(d => format(d.value));
    
    /**
     * add axis
     */
      
    chart.append('g')
      .attr('class', 'axis y')
      .attr('transform', `translate(${ x(0) }, 0)`)
      .call(yAxis);
      
    chart.selectAll('.tick text')
      .attr('class', d => {
        var item = data.filter(item => item.name === d)[0];
        return highlight(item);
      });
  };
  
  d3.json(jsonFileName, data => {
    var BAR_VALUE_WIDTH = 16;
    var BAR_VALUE_PADDING = 4;
    var Y_AXIS_LABEL_WIDTH = 56;
    var Y_AXIS_LABEL_PADDING = BAR_VALUE_WIDTH + BAR_VALUE_PADDING;
    
    var MARGIN_LEFT = Y_AXIS_LABEL_WIDTH + Y_AXIS_LABEL_PADDING;
    var MARGIN_RIGHT = BAR_VALUE_WIDTH + BAR_VALUE_PADDING;
    
    var settings = {
      size: { width: 180, height: 165 },
      margin: { left: MARGIN_LEFT, right: MARGIN_RIGHT },
      padding: { barValue: BAR_VALUE_PADDING, yAxisLabel: Y_AXIS_LABEL_PADDING },
      format: d => `${ d }%`.replace('.', ',')
    };
    
    render('#chart-neg-pos', settings, data);
  });
}