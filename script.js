//1> i need to get the current positon of the mouse everu time i move
// moveBy(x axis ,y axis) 

// ================>>>

// 2> i need to set those x and y values to the circular div 
// every time mouse move we should ge notified  = mouseMove listner 
// every time listner gets notified, we need to get the values for x and y axis  and update  it to the circle 
let circle= document.querySelector('#circle')
const btn=document.querySelector('#btn');
const svgelem =document.querySelector('svg');








window.addEventListener('mousemove',function(details){
   let xValue=details.clientX;
   let yValue=details.clientY;

    this.setTimeout(function(){
        circle.style.top=`${yValue }px`;
        circle.style.left=`${xValue}px`;
    }
    ,10)
});
// btn
btn.addEventListener('click',function(){
tl.reverse();
setTimeout(function(){
    svgelem.classList.add('animate')
},3500)

})




let  tl=gsap.timeline();

tl
.from("#wrapper",{
    duration:3,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0

})
.from("#whitestrip ",{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',
},'-=1.8')

.from("#blackcard ",{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0,
},'-=1')
.from("#linelem ",{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0,
},'-=1')
// += means time period ko bada rahe hai 
// -=1 means that animnation will strt 1sec earlier 
.from("#linelem .line",{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0,
},'-=1')

.from("#blackcard p",{
    duration:1.2,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0,
},'-=2')
.from("#sidelem ",{
    duration:2,
    x:30,
    ease:'Expo.easeInOut',
    opacity:0,
},'-=2')