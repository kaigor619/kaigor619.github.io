let links=document.getElementsByClassName('menu_link');

const getCoords=(elem)=>{
    let box=elem.getBoundingClientRect();

    return {
        top:box.top,
        left: box.left,
    }
}

for(let i=0;i<links.length;i++){
    links[i].onclick=function(e){
        e.preventDefault();
        let to=this.getAttribute('to');
        let elem=document.getElementById(to);
        let {left , top}=getCoords(elem);
        window.scrollBy({ 
            top, // could be negative value
            left,
            behavior: 'smooth' 
          });
          
    }
}
