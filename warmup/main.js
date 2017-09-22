var x = 0;
var total = 0;
var lastSecond = 0;


var mutationRate = 0.01;    // Mutation rate
var totalPopulation = 150;      // Total Population

var population;             // Array to hold the current population
var matingPool;    // ArrayList which we will use for our "mating pool"
var populationTarget;                // Target phrase

function setup() {
	createCanvas(640, 480);
	populationTarget = 10000;
	generatePopulation(populationTarget);
}

function draw() {
	background(204);
	x = x + 0.1;
	if (x > width) {
		x = 0;
	}
	line(x, 0, x, height);  
	var s = second();
	if(s - lastSecond || lastSecond - s >= 1) {
		total++;
		lastSecond = s;
		doAction();
	}
	text("Current second: \n" + total, 5, 50);
}

function generatePopulation(target) {
	var totalPopulation = 50;
	population = [];

	for (var i = 0; i < totalPopulation; i++) {
		population[i] = new DNA(populationTarget);
	}
}

function doAction() {
  for (var i = 0; i < population.length; i++) {
    population[i].calcFitness();
  }	
  print("lolol");
  var matingPool = [];  // ArrayList which we will use for our "mating pool"

  for (var i = 0; i < population.length; i++) {
    var nnnn = floor(population[i].fitness * 100);  // Arbitrary multiplier, we can also use monte carlo method
    for (var j = 0; j <nnnn; j++) {              // and pick two random numbers
      matingPool.push(population[i]);
    }
  }

  for (var i = 0; i < population.length; i++) {
    var a = floor(random(matingPool.length));
    var b = floor(random(matingPool.length));
    var partnerA = matingPool[a];
    var partnerB = matingPool[b];
    var child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    population[i] = child;
  }
  
  var everything = "";
  for (var i = 0; i < population.length; i++) {
    if (i % 4 == 0) everything += "<br>";
    everything += population[i].getStats() + "    ";
  }
  textFont("Courier");
  display.html(everything);
}

