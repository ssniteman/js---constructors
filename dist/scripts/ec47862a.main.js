function Musician(a,b){this.name=a||"?",this.touring=!0,this.genre=b,this.alotexperience=!0,this.studiotime=!0,this.album=2,this.hireable=function(){return this.touring=!1,a+" is hireable to play"}}function MusicVenue(a){this.name=a||"?",this.stage=1,this.bathrooms=2,this.soundguy=!0,this.nosound=function(){return this.soundguy=!1,a+" has no sound guy"}}function Pet(a,b){this.name=a,this.mammal=!0,this.legs=4,this.cute=!0,this.type=b,this.notmammal=function(){return this.mammal=!1,a+" is not a mammal"}}console.log("First constructor is to see whether a musician is hireable based on if he is on tour"),console.log("travis, justin, jkwon"),console.log("travis.hireable()"),console.log("Second constructor is a MusicVenue and is used to see whether there is a sound guy..."),console.log("Jakes, TinRoof, Rue77"),console.log("Rue77.nosound()"),console.log("Pets"),console.log("bernard"),console.log("corrie"),console.log("kraken"),console.log("kraken.legs = 6"),console.log("kraken.notmammal()");var travis=new Musician("Travis","Country");travis.hireable();var justin=new Musician("Justin","Pop"),jkwon=new Musician("Jkwon","Rap"),Jakes=new MusicVenue("Jakes"),TinRoof=new MusicVenue("TinRoof"),Rue77=new MusicVenue("Rue77");Rue77.nosound();var bernard=new Pet("bernard","dog"),corrie=new Pet("corrie","cat"),kraken=new Pet("kraken","butterfly");kraken.legs=6,kraken.notmammal();