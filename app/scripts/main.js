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
}

var bernard = new Pet("bernard","dog")

var corrie = new Pet("corrie","cat")

var kraken = new Pet("kraken","butterfly")
kraken.mammal = false
kraken.legs = 6



















