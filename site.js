var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(n){io.observe(n)});
//twinkly star sky with twinkles and shooting stars

(function(){
  var cv=document.getElementById("sky"),c=cv.getContext("2d"),S=[],sh=null,W,H,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cols=["255,241,214","255,184,107","185,162,255","255,143,163"];
  
  function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=[];
    for(var k=0;k<Math.min(220,W*H/7000);k++)S.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,p:Math.random()*6.28,s:Math.random()*.02+.005,c:cols[Math.floor(Math.random()*cols.length)]})}
  addEventListener("resize",size);size();
  
  
  function draw(){
    c.clearRect(0,0,W,H);
    S.forEach(function(s){s.p+=s.s;var a=.35+.65*Math.abs(Math.sin(s.p));
      c.fillStyle="rgba("+s.c+","+a+")";c.beginPath();c.arc(s.x,s.y,s.r,0,6.283);c.fill()});
    
    if(!sh&&Math.random()<.004)sh={x:Math.random()*W*.8,y:Math.random()*H*.4,l:0};
    
    if(sh){sh.x+=9;sh.y+=4.5;sh.l++;
      var g=c.createLinearGradient(sh.x,sh.y,sh.x-90,sh.y-45);g.addColorStop(0,"rgba(255,241,214,.9)");g.addColorStop(1,"rgba(255,184,107,0)");
      c.strokeStyle=g;c.lineWidth=1.6;c.beginPath();c.moveTo(sh.x,sh.y);c.lineTo(sh.x-90,sh.y-45);c.stroke();
      if(sh.l>70)sh=null}
    if(!rm)requestAnimationFrame(draw)}
  draw();
})();


(function(){var ps=document.querySelectorAll(".piece");if(!ps.length)return;
var lb=document.createElement("div");lb.className="lb";document.body.appendChild(lb);
function close(){lb.classList.remove("open");lb.innerHTML=""}
ps.forEach(function(p){p.addEventListener("click",function(e){if(e.target.closest("audio"))return;
var m=p.querySelector("img,video,.art");lb.innerHTML='<div class="box">'+m.outerHTML+'<p>'+p.querySelector("b").textContent+'</p></div>';lb.classList.add("open")})});
lb.addEventListener("click",close);addEventListener("keydown",function(e){if(e.key==="Escape")close()})})();
