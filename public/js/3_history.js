function start(){
	$.ajax({
        'url': 'http://localhost:3000/get_info',
        'method': 'get',
        'success': onResponseSuccess
    });
}
function onResponseSuccess(data){
	data = data.slice(1, data.length);
	console.log(data);
	//var svg = d3.select("#svg");
	// <svg id="svg" width='150' height='300'></svg>
	console.log(svg);
	
	// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
		  
	// Line graph
	var width = 280;
	var height = 280;
	
	// X axis
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.timestamp; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return parseInt(d.moisture); })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
	  
	svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#210535")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.timestamp) })
        .y(function(d) { return y(parseInt(d.moisture)) })
        )

}

start();