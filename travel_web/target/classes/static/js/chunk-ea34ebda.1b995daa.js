(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea34ebda"],{1540:function(t,e,a){},"61bb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"chart"}}),a("div",{attrs:{id:"container"}})])}],o={data:function(){return{myChart:null}},mounted:function(){this.initChart(),this.initMap(),console.log("设置正北方向......")},methods:{initChart:function(){var t={xAxis:{type:"category",axisLine:{lineStyle:{color:"#fff"}},data:["豪华车","拼车","专车","出租车","顺风车"]},yAxis:{type:"value",axisLine:{lineStyle:{color:"#fff"}}},series:[{data:[{value:60,itemStyle:{color:"#EEEEEE"}},{value:200,itemStyle:{color:"#1E54C1"}},{value:150,itemStyle:{color:"#FFA70F"}},{value:80,itemStyle:{color:"#FE430E"}},{value:70,itemStyle:{color:"#00A0E8"}}],type:"bar"}]};this.myChart=this.$echarts.init(document.getElementById("chart")),this.myChart.setOption(t)},initMap:function(){var t=new AMap.Map("container",{resizeEnable:!0,rotateEnable:!0,pitchEnable:!1,zoom:17,pitch:65,rotation:45,viewMode:"3D",expandZoomRange:!0,zoomToAccuracy:!0,center:[116.333926,39.997245],mapStyle:"amap://styles/34eee3392325080eabb764ca4af5f2ab"});AMap.plugin(["AMap.ControlBar"],(function(){t.addControl(new AMap.ControlBar)}))}}},r=o,l=(a("e02b"),a("5511")),c=Object(l["a"])(r,n,i,!1,null,"13e1bcf7",null);e["default"]=c.exports},e02b:function(t,e,a){"use strict";var n=a("1540"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-ea34ebda.1b995daa.js.map