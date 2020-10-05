var drawPlot=function(data,screen,xScale,yscale )
{   
console.log("data", data)
  d3.select("#graph")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(data)
  { 
      return xScale(data.divp)})
  .attr("cy", function(data)
  {return yscale(data.gdp)})
   .attr("r",2)
    .attr("fill", "blue")
    

}

 var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
 
 var drawAxes = function(graphDim,margins,
                         xScale,yscale)
{

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yscale);

  var axes = d3.select("svg")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top+graphDim.height)+")")
      .call(xAxis)
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top)+")")
      .call(yAxis)

}

 var drawLabels = function(graphDim,margins)
{
  var labels = d3.select("svg")
  .append("g")
  .classed("labels",true)

labels.append("text")
  .text("GDP")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",margins.top)

labels.append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",screen.height)

labels.append("g")
  .attr("transform","translate(20,"+
        (margins.top+(graphDim.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph=function(data)
{ var screen= {width:250, height:300}
d3.select("#graph")
.attr("width", screen.width)
.attr("height", screen.height)

  var margins = {left:65,right:30,top:20,bottom:20} 
 
var xScale=d3.scaleLinear()
.domain([27,35])
.range([0,screen.width])

var yscale=d3.scaleLinear()
.domain([16,20])
.range([screen.height,0])


 
 
var createAxes = function(screen,margins,counties,
                           target,xScale,yscale)
{
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var axes = d3.select(target)
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top)+")")
        .call(yAxis)
}   

    var createLabels = function(screen,margins,
data,target)
{
        var labels = d3.select("target")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("GDP")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
    
    labels.append("text")
        .text("Minority Percentage")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",screen.height)
    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("GDP")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph =
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);

    d3.select("#graph")
    .attr("width",screen.width)
    .attr("height",screen.height)

    var target = d3.select("svg")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");

 
    d3.select("#graph")
     .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
      .x(function(data)
  { 
      return xScale(data.divp)})
      .y (function(data)
  {return yscale(data.gdp)}))
 
 drawAxes(graph,margins,xScale,yscale)
 drawPlot(data,screen,xScale,yscale)
 drawLabels(graph,margins)
 createLabels(screen,margins,
data,target)
}

intialgraph(data)

var colors=function(mapdata){
    console.log("stategdp", mapdata)
    return mapdata
}

var drawMap=function(stategdp,target,pathGen, projection)

{ console.log("gdp", stategdp)
    target.selectAll("path")
    .data(stategdp)
    .enter()
    .append("path")
    .attr("d",pathGen)
    .attr("fill", colors)
}

var makeTranslateString2=function(x,y)
{
    return "translate("+x+", "+y+")"
}

var  joinData= function(stategdp)
{
    var  shapes={};
    stategdp[1].features.forEach(function(feature)
                            { shapes[feature.properties.STATE]=feature;})
    stategdp[0].forEach(function(state)
                    {shapes[state.states.properties.data=state]})
}

joinData(stategdp)
console.log(stategdp)

var intialgraph2= function(stategdp)



{
    var screen2= {width:800, height:600}
    var margins2=  { left:30, right:20, top:20, bottom:30}


var graph2=
    {
        width:screen2.width-margins2.left-margins2.right,
        heigth:screen2.height-margins2.top-margins2.bottom
    }

    
 console.log(graph2);

    
     var moneyScale = d3.scaleSequential()
     .domain([25,3000])
   .interpolator(d3.interpolateGreens)

d3.select("#graph2")
.attr("width", screen2.width)
.attr("height", screen2.height)
.attr("fill", "green")
.attr("stroke", "black")

var target=d3.select("#graph2")
.append("g")
.attr("id", "#graph2")
.attr("transform",
     "translate("+margins2.left+","+ margins2.top+")");

    var projection=d3.geoAlbersUsa()
    
    var pathGen=d3.geoPath()
                     .projection(projection)
    
    
drawMap(stategdp, target, pathGen, projection, moneyScale);
    
    

}


var successFCN = function(stategdp)
{
    console.log("stategdp",stategdp);
    intialgraph2(stategdp);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var gdpPromise = d3.csv("stategdp.csv")
var geopromise=d3.json("usstates.json")
var promises=[gdpPromise,geopromise];
Promise.all(promises).then(successFCN,failFCN);

