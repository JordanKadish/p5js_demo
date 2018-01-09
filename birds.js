//the setup() and draw() functions are part of the p5 api
function setup(){
    loadJSON("birds.json", fetchData);//asynchronous call to load the json stored data in birds.json
}

function fetchData(data){//when this func is called, "data" contains the info sent from the calling object
    console.log(data)
}

function draw(){

}