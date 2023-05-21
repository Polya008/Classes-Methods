let users = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
	constructor(name, type, health, level, attack, defence) {
	this.name = name;
		if((!name instanceof String && Object.prototype.toString.call(name) === '[object String]') &&
		  (name.length <= 2 && name.length >= 10)) {
		  	 throw new Error('некорректное имя игрока');
		}
  
	this.type = type;
	 if(!users.includes(type)){
	  	throw new Error('тип игрока не определён');
	  }
	
	this.health = 100;
	this.level = 1;
 }	

 levelUp(){
 	if(this.health != 0){
 	 	this.level += 1;
 		this.attack *= 0.2;
 		this.health =100;	
 	}else{
 		throw new Error('нельзя повысить левел умершего');
 	}
 }


 damage(points){
 	if(this.health >=0){
 		this.health -= points * (1 - defence / 100);
 	}
}

}




class Bowerman extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 25;
		this.defence = 25;
	}
}


class Undead extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 25;
		this.defence = 25;
	}
}

class Swordsman extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 40;
		this.defence = 10;
	}
}

class Zombie extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 40;
		this.defence = 10;
	}
}

class Magician extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 10;
		this.defence = 40;
	}
}

class Daemon extends Character {
	constructor(name,type){
		super(name,type);
		this.attack = 10;
		this.defence = 40;
	}
}


/*
let premier = new Swordsman('Yo', 'Swordsman');
let player = new Zombie(789, 'Zombie');



console.log(premier)
premier.levelUp();
console.log(premier)
console.log(player)*/