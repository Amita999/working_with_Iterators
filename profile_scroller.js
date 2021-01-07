const data = [
  {
    name: "iPhone",
    model: 7,
    img: "./imgs/ipH7.jpg",
    available:true
  },
  {
    name: "iPhone",
    model: "X",
    img: "./imgs/iphX.jpg",
    available:false
  },
  {
    name: "iPhone",
    model: "XR",
    img: "./imgs/iphX.jpg",
    available:true
  },
  {
    name: "iPhone",
    model: 11,
    img: "./imgs/iph11.jpg",
    available:true
  },
  {
    name: "iPhone",
    model: "Eleven-Pro",
    img: "./imgs/ipH11Pro.jpg",
    available:true
  },
];

//Instantiating the iterator function
let profiles = profileIterator(data);

// call a profile manually 
nextProfileDisplay();
//next event
document.getElementById("next").addEventListener("click", nextProfileDisplay);

//next mobile display
function nextProfileDisplay(){
    
//calling of next function
const currentProf = profiles.next().value;
if(currentProf != undefined){
    document.getElementById("profileDisplay").innerHTML = `
    <ul class = "list-group">
    <li class ="list-group-item">
    Name: ${currentProf.name}
    </li>
    <li class ="list-group-item">
    Model: ${currentProf.model}
    </li>
    <li class ="list-group-item">
    Available: ${currentProf.available} 
    </li>
    </ul>
    `;
    document.getElementById("imageDisplay").innerHTML = 
    `<img src = ${currentProf.img}></img>`;
}
else{
    //No More Profiles
    window.location.reload();
}
}

//profile iterator
function profileIterator(data){
    //Our counter
    let nextIndex = 0;
  
    return {
      next: function(){
        return nextIndex < data.length
          ? {
              value: data[nextIndex++],
              //flag set to false
              done: false,
            }
          : { done: true };
      },
    }
  }
  





