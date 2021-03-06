var birdData;
//the setup() and draw() functions are part of the p5 api
function setup(){//this gets injected into the body tag
    noCanvas();//ensure no instantiation of a canvas element
    loadJSON("birds.json", fetchData);//asynchronous call to load the json stored data in birds.json
                                      //this could be done with via a preload, but I wanted to test asynch (will replace with url...)
}

function fetchData(data){//when this func is called, "data" contains the info sent from the calling object
    birdData=data;
        var birds = birdData.birds;
        var birdObjs = birds.length;//efficiency, don't repeatedly check birds.length...
        for (var loopFam = 0;loopFam < birdObjs; loopFam++) {
            createElement('h1',birds[loopFam].family);//p5 way to create headings
            var members = birds[loopFam].members;
            for (member in members) {//loop through the array of birds in each family
                createDiv(members[member]);//create a p5.dom.min.js div for each one
            }
        }
}

function draw(){//this looping function constantly renders to screen for animations etc
}