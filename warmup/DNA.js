// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a pseudo-DNA, i.e. genotype
//   Here, a virtual organism's DNA is an array of character.
//   Functionality:
//      -- convert DNA into a string
//      -- calculate DNA's "fitness"
//      -- mate DNA with another set of DNA
//      -- mutate DNA

// Constructor (makes a random DNA)
function DNA(num) {
  // The genetic sequence
  this.food = 100;
  this.populationCount = 1;
  this.farms = 0;
  this.totalTime = 0;
  this.genes = [];
  this.fitness = 0; 
  

  // Fitness function (returns floating point % of "correct" characters)
  this.calcFitness = function() {
	this.totalTime++;
	this.fitness = this.populationCount/this.totalTime;
	this.fitness = pow(this.fitness, 5);
  }

  // Crossover
  this.crossover = function(partner) {
    // A new child
    var child = new DNA(num);
    
    var midpoint = floor(random(this.genes.length)); // Pick a midpoint
    
    // Half from one, half from the other
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else              child.genes[i] = partner.genes[i];
    }
    return child;
  }

  // Based on a mutation probability, picks a new random character
  this.mutate = function(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] =  random(0,4)
      }
    }
  }
  
  this.getStats = function() {
	 return "population: " + populationCount + ", food: " + food;
	  
  }
}
