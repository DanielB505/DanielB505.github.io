const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "#87CEEB");  
gradient.addColorStop(1, "#1E90FF");  
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);



var circleGradient = ctx.createRadialGradient(window.innerWidth / 2, 100, 0, window.innerWidth / 2, 100, 100);
circleGradient.addColorStop(0, "gold");  
circleGradient.addColorStop(1, "orange");  

 
ctx.fillStyle = circleGradient;
ctx.beginPath();
ctx.arc(window.innerWidth / 2, 100, 100, Math.PI, 0);
ctx.fill();
ctx.stroke();

 
var rectGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
rectGradient.addColorStop(0, "gold");  
rectGradient.addColorStop(1, "orange");  

 
ctx.fillStyle = rectGradient;
ctx.beginPath();
ctx.rect(window.innerWidth / 2 - 102, 100, 204, 75);
ctx.fill();
ctx.stroke();
 
// middle area
var gradienet = ctx.createLinearGradient(0, 0, canvas.width, 0);


gradienet.addColorStop(0, "#FFFFFF"); 
gradienet.addColorStop(1, "#C0C0C0"); 


ctx.fillStyle = gradienet;


ctx.beginPath();
ctx.rect(window.innerWidth / 2 - 252, 175, 504, 300);
ctx.fill();
 


var circleGradient = ctx.createRadialGradient(window.innerWidth / 2, 400, 0, window.innerWidth / 2, 400, 75);
circleGradient.addColorStop(0, "orange");  
circleGradient.addColorStop(1, "gold"); 

 
ctx.fillStyle = circleGradient;
ctx.beginPath();
ctx.arc(window.innerWidth / 2, 400, 75, Math.PI, 0);
ctx.fill();
ctx.stroke();

 
var lineGradient = ctx.createLinearGradient(0, 400, 0, 475);
lineGradient.addColorStop(0, "gold");  
lineGradient.addColorStop(1, "orange");  

 
ctx.fillStyle = lineGradient;
ctx.fillRect(window.innerWidth / 2 - 75, 400, 150, 75);
ctx.fill();







 

 
ctx.fillStyle = "green";
ctx.fillRect(0, 475, canvas.width, 500);

 
ctx.fillStyle = "brown";

 
ctx.fillRect(90, 425, 20, 50);
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(100, 395, 40, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = "brown";

 
ctx.fillRect(810, 425, 20, 50);
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(820, 395, 40, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = "brown";

 
ctx.fillStyle = "gray";

 
ctx.fillRect(window.innerWidth / 2- 75, 470,150, 450);









 
ctx.fillStyle = "gold";
ctx.beginPath();
ctx.arc(window.innerWidth / 2-300, 100, 80, 0, Math.PI * 2);  
ctx.fill();

//Mouse Code 
let mouse = {
  isDown: false,
  x: 0,
  y: 0
};
canvas.addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  if (mouse.isDown){
      ctx.lineTo(mouse.x, mouse.y, 3, 0, 2 * Math.PI);
      ctx.stroke();
    
     }else{
       ctx.beginPath()
     }
  
     
  
canvas.addEventListener("mousedown", event => {
  mouse.isDown = true;

});
  // console.log(mouse);
});
canvas.addEventListener("mouseup", event => {
  mouse.isDown = false;
  
});
