window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

const words = ["Python Learner","Data Science Enthusiast","DSA Explorer"];
let i=0,j=0,del=false;

function type(){
  let t=words[i];
  document.getElementById("text").innerText=t.substring(0,j);

  if(!del){
    j++;
    if(j>t.length){del=true;setTimeout(type,1000);return;}
  }else{
    j--;
    if(j==0){del=false;i=(i+1)%words.length;}
  }

  setTimeout(type,del?50:100);
}
type();

// Cursor glow
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// Floating bg
const bg=document.querySelector(".bg");
const code=["import pandas","df.head()","model.fit()","return x"];

setInterval(()=>{
  let span=document.createElement("span");
  span.innerText=code[Math.floor(Math.random()*code.length)];
  span.style.left=Math.random()*100+"vw";
  bg.appendChild(span);
  setTimeout(()=>span.remove(),12000);
},120);