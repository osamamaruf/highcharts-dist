/*
 Highcharts JS v8.1.2 (2020-06-24)
 Organization chart series type

 (c) 2019-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/organization",["highcharts","highcharts/modules/sankey"],function(f){b(f);b.Highcharts=f;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function f(b,m,f,r){b.hasOwnProperty(m)||(b[m]=r.apply(null,f))}b=b?b._modules:{};f(b,"modules/organization.src.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,f){var m=
f.css,r=f.pick,u=f.seriesType,v=f.wrap,q=b.seriesTypes.sankey.prototype;u("organization","sankey",{borderColor:"#666666",borderRadius:3,linkRadius:10,borderWidth:1,dataLabels:{nodeFormatter:function(){function a(a){return Object.keys(a).reduce(function(c,d){return c+d+":"+a[d]+";"},'style="')+'"'}var c={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},g={"max-height":"100%","border-radius":"50%"},d={width:"100%",padding:0,"text-align":"center",
"white-space":"normal"},e={margin:0},t={margin:0},b={opacity:.75,margin:"5px"};this.point.image&&(g["max-width"]="30%",d.width="70%");this.series.chart.renderer.forExport&&(c.display="block",d.position="absolute",d.left=this.point.image?"30%":0,d.top=0);c="<div "+a(c)+">";this.point.image&&(c+='<img src="'+this.point.image+'" '+a(g)+">");c+="<div "+a(d)+">";this.point.name&&(c+="<h4 "+a(e)+">"+this.point.name+"</h4>");this.point.title&&(c+="<p "+a(t)+">"+(this.point.title||"")+"</p>");this.point.description&&
(c+="<p "+a(b)+">"+this.point.description+"</p>");return c+"</div></div>"},style:{fontWeight:"normal",fontSize:"13px"},useHTML:!0},hangingIndent:20,linkColor:"#666666",linkLineWidth:1,nodeWidth:50,tooltip:{nodeFormat:"{point.name}<br>{point.title}<br>{point.description}"}},{pointAttribs:function(a,c){var g=this,d=q.pointAttribs.call(g,a,c),e=g.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},t=a.options,b=e.states&&e.states[c]||{};c=["borderRadius","linkColor","linkLineWidth"].reduce(function(a,
c){a[c]=r(b[c],t[c],e[c],g.options[c]);return a},{});a.isNode?c.borderRadius&&(d.r=c.borderRadius):(d.stroke=c.linkColor,d["stroke-width"]=c.linkLineWidth,delete d.fill);return d},createNode:function(a){a=q.createNode.call(this,a);a.getSum=function(){return 1};return a},createNodeColumn:function(){var a=q.createNodeColumn.call(this);v(a,"offset",function(a,g,d){a=a.call(this,g,d);return g.hangsFrom?{absoluteTop:g.hangsFrom.nodeY}:a});return a},translateNode:function(a,c){q.translateNode.call(this,
a,c);a.hangsFrom&&(a.shapeArgs.height-=this.options.hangingIndent,this.chart.inverted||(a.shapeArgs.y+=this.options.hangingIndent));a.nodeHeight=this.chart.inverted?a.shapeArgs.width:a.shapeArgs.height},curvedPath:function(a,c){for(var g=[],d=0;d<a.length;d++){var e=a[d][1],b=a[d][2];if("number"===typeof e&&"number"===typeof b)if(0===d)g.push(["M",e,b]);else if(d===a.length-1)g.push(["L",e,b]);else if(c){var h=a[d-1],k=a[d+1];if(h&&k){var f=h[1];h=h[2];var l=k[1];k=k[2];if("number"===typeof f&&"number"===
typeof l&&"number"===typeof h&&"number"===typeof k&&f!==l&&h!==k){var n=f<l?1:-1,p=h<k?1:-1;g.push(["L",e-n*Math.min(Math.abs(e-f),c),b-p*Math.min(Math.abs(b-h),c)],["C",e,b,e,b,e+n*Math.min(Math.abs(e-l),c),b+p*Math.min(Math.abs(b-k),c)])}}}else g.push(["L",e,b])}return g},translateLink:function(a){var c=a.fromNode,b=a.toNode,d=Math.round(this.options.linkLineWidth)%2/2,e=Math.floor(c.shapeArgs.x+c.shapeArgs.width)+d,f=Math.floor(c.shapeArgs.y+c.shapeArgs.height/2)+d,h=Math.floor(b.shapeArgs.x)+
d,k=Math.floor(b.shapeArgs.y+b.shapeArgs.height/2)+d,m=this.options.hangingIndent;var l=b.options.offset;var n=/%$/.test(l)&&parseInt(l,10),p=this.chart.inverted;p&&(e-=c.shapeArgs.width,h+=b.shapeArgs.width);l=Math.floor(h+(p?1:-1)*(this.colDistance-this.nodeWidth)/2)+d;n&&(50<=n||-50>=n)&&(l=h=Math.floor(h+(p?-.5:.5)*b.shapeArgs.width)+d,k=b.shapeArgs.y,0<n&&(k+=b.shapeArgs.height));b.hangsFrom===c&&(this.chart.inverted?(f=Math.floor(c.shapeArgs.y+c.shapeArgs.height-m/2)+d,k=b.shapeArgs.y+b.shapeArgs.height):
f=Math.floor(c.shapeArgs.y+m/2)+d,l=h=Math.floor(b.shapeArgs.x+b.shapeArgs.width/2)+d);a.plotY=1;a.shapeType="path";a.shapeArgs={d:this.curvedPath([["M",e,f],["L",l,f],["L",l,k],["L",h,k]],this.options.linkRadius)}},alignDataLabel:function(a,c,f){if(f.useHTML){var d=a.shapeArgs.width,e=a.shapeArgs.height,g=this.options.borderWidth+2*this.options.dataLabels.padding;this.chart.inverted&&(d=e,e=a.shapeArgs.width);e-=g;d-=g;if(g=c.text)m(g.element.parentNode,{width:d+"px",height:e+"px"}),m(g.element,
{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"});c.getBBox=function(){return{width:d,height:e}};c.width=d;c.height=e}b.seriesTypes.column.prototype.alignDataLabel.apply(this,arguments)}});""});f(b,"masters/modules/organization.src.js",[],function(){})});
//# sourceMappingURL=organization.js.map