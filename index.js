let btn = document.getElementById("mybutton")
let elements=document.querySelectorAll('.innerElement')
let show=true

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(elements)
    
    for(element of elements){
        
        show?element.style.display="none":element.style.display="block"
    }

    show=!show
    
})