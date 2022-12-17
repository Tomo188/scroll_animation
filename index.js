import "./styles.scss"
const body=document.querySelector("body")
const h1=document.createElement("h1")
h1.classList.add("heading")
h1.innerText="Animacija scrolling";
body.appendChild(h1)
const boxes=[]
for(let i=0;i<100;i++){
    const div=document.createElement("div")
    const h2=document.createElement("h2")
    div.classList.add("content_container","box")
    h2.classList.add("content_container_div_heading")
    h2.textContent="CONTENT"
    if(i%2===0)
    {
        div.classList.add("left")
    }
    div.appendChild(h2)
    body.appendChild(div)
    boxes.push(div)
    
}
window.addEventListener("scroll",()=>{
    const triggerBottom=(window.innerHeight/5)*4
    boxes.map((box)=>{
    const boxTop=box.getBoundingClientRect().top
    if(boxTop<triggerBottom){
        box.classList.add("show")
    }else{
        box.classList.remove("show")
    }
    })
    
})