console.log('First constructor is to see whether a musician is hireable based on if he is on tour')
console.log('travis, justin, jkwon')
console.log('travis.hireable()')

console.log('Second constructor is a MusicVenue and is used to see whether there is a sound guy...')
console.log('Jakes, TinRoof, Rue77')
console.log('Rue77.nosound()')

console.log('Pets')
console.log('bernard')
console.log('corrie')
console.log('kraken')
console.log('kraken.legs = 6')
console.log('kraken.notmammal()')

// Constructor One

function Musician (name,genre) {
	this.name = name || '?';
	this.touring = true;
	this.genre = genre;
	this.alotexperience = true;
	this.studiotime = true;
	this.album = 2;

	this.hireable = function(){
	this.touring = false;
	return name + ' is hireable to play'
	}
}

var travis = new Musician ("Travis","Country")

travis.hireable()

var justin = new Musician ("Justin","Pop")

var jkwon = new Musician ("Jkwon","Rap")



// Constructor Two

function MusicVenue (name) {
	this.name = name || '?';
	this.stage = 1;
	this.bathrooms = 2;
	this.soundguy = true;

	this.nosound = function (){
	this.soundguy = false;
	return name + ' has no sound guy';
	}
}

var Jakes = new MusicVenue ("Jakes")

var TinRoof = new MusicVenue ("TinRoof")

var Rue77 = new MusicVenue ("Rue77")

Rue77.nosound()


// Constructor Three

function Pet (name,type) {
	this.name = name;
	this.mammal = true;
	this.legs = 4;
	this.cute = true;
    this.type = type;

    this.notmammal = function (){
    this.mammal = false;
    return name + ' is not a mammal';
    }
}

var bernard = new Pet("bernard","dog")

var corrie = new Pet("corrie","cat")

var kraken = new Pet("kraken","butterfly")
kraken.legs = 6;
kraken.notmammal()



















