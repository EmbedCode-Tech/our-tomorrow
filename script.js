const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),700));

const nav=document.querySelector(".nav nav"),menu=document.querySelector(".menu-btn");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const modal=document.getElementById("modal");
document.getElementById("surprise").onclick=()=>{modal.classList.add("open");document.body.classList.add("no-scroll")};
document.getElementById("close").onclick=()=>{modal.classList.remove("open");document.body.classList.remove("no-scroll")};
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("open");document.body.classList.remove("no-scroll")}});

document.getElementById("year").textContent=new Date().getFullYear();

window.addEventListener("scroll",()=>{
  const hero=document.querySelector(".hero-bg");
  if(hero) hero.style.transform=`scale(1.04) translateY(${window.scrollY*.08}px)`;
});
