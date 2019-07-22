// var prev=document.getElementsByTagName('button')[0];
// var next=document.getElementsByTagName('button')[1];
// var ul=document.getElementsByTagName('ul')[0];
// var li=ul.getElementsByTagName('li');
// var ol=document.getElementsByTagName('ol')[0];
// var oli=ol.getElementsByTagName('li');
// var odiv=document.getElementsByTagName('div')[0];
// var index=0;
// var timer;
// next.onclick=function(){
// 	index++;
// 	for(var i=0;i<li.length;i++){
// 		oli[i].className='';
// 		li[i].style.opacity=0;
// 	}
// 	if(index>li.length-1){
// 		index=0;
// 	}
// 	for(var j=0;j<li.length;j++){
// 		oli[index].className='active';
// 		li[index].style.opacity=1;
// 	}
// }
// prev.onclick=function(){
// 	index--;
// 	for(var i=0;i<li.length;i++){
// 		oli[i].className='';
// 		li[i].style.opacity=0;
// 	}
// 	if(index<0){
// 		index=li.length-1;
// 	}
// 	for(var j=0;j<li.length;j++){
// 		oli[index].className='active';
// 		li[index].style.opacity=1;
// 	}
// }
// for(var i=0;i<li.length;i++){
// 	oli[i].index=i;
// 	oli[i].onclick=function(){
// 		index=oli[this.index].index;
// 		for(var j=0;j<li.length;j++){
// 			oli[j].className='';
// 			li[j].style.opacity=0;
// 		}
// 		oli[this.index].className='active';
// 		li[this.index].style.opacity=1;
// 	}
// }
// var lunbo=function(){
// 	index++;
// 	for(var i=0;i<li.length;i++){
// 		oli[i].className='';
// 		li[i].style.opacity=0;
// 	}
// 	if(index>li.length-1){
// 		index=0;
// 	}
// 	for(var j=0;j<li.length;j++){
// 		oli[index].className='active';
// 		li[index].style.opacity=1;
// 	}
// }
// timer=setInterval(lunbo,3000)
// odiv.onmouseout=function(){
// 	timer=setInterval(lunbo,3000);
// }
// odiv.onmouseover=function(){
// 	clearInterval(timer);
// }
var prev=document.getElementsByTagName('button')[0];
var next=document.getElementsByTagName('button')[1];
var oul=document.getElementsByTagName('ul')[0];
var li=oul.getElementsByTagName('li');
var ool=document.getElementsByTagName('ol')[0];
var oli=ool.getElementsByTagName('li');
var index;
index=0;
var timer;
var div=document.getElementsByTagName('div')[0];
next.onclick=function(){
	index++;
	for(var i=0;i<li.length;i++){
		li[i].style.opacity=0;
		oli[i].className='';
	}
	if(index>li.length-1){
		index=0;
	}
	for(var j=0;j<li.length;j++){
		li[index].style.opacity=1;
		oli[index].className='active';
	}
}
prev.onclick=function(){
	index--;
	for(var i=0;i<li.length;i++){
		li[i].style.opacity=0;
		oli[i].className='';
	}
	if(index<0){
		index=li.length-1;
	}
	for(var j=0;j<li.length;j++){
		li[index].style.opacity=1;
		oli[index].className='active';
	}
}
for(var i=0;i<oli.length;i++){
	oli[i].index=i;
	oli[i].onclick=function(){
		index=oli[this.index].index;
		for(var j=0;j<oli.length;j++){
			oli[j].className='';
			li[j].style.opacity=0;
		}
		oli[index].className='active';
		li[index].style.opacity=1;
	}
}
var lunbo=function(){
	index++;
	for(var i=0;i<li.length;i++){
		li[i].style.opacity=0;
		oli[i].className='';
	}
	if(index>li.length-1){
		index=0;
	}
	for(var j=0;j<li.length;j++){
		li[index].style.opacity=1;
		oli[index].className='active';
	}
}
var timer=setInterval(lunbo,3000);
div.onmouseover=function(){
	clearInterval(timer)
}
div.onmouseout=function(){
	timer=setInterval(lunbo,3000)
}