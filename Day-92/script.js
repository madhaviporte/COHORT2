
const mouseFollower = document.querySelector(".mouse-follower")

let x =0 , y=0;

addEventListener("mousemove" , (e)=>{
    const{clientX, clientY} = e 
    console.log(clientX,clientY);
    
    mouseFollower.style.top = clientY + "px"
    mouseFollower.style.left = clientX + "px"
})

function far(){
    mouseFollower.style.transform = `translate(${x}px, ${y}px)`
    // console.log("helo");
    
    requestAnimationFrame(far)
}

far()