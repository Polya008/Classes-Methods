let users = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
	constructor(name, type) {
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










/*
let premier = new Swordsman('Yo', 'Swordsman');
let player = new Zombie(789, 'Zombie');



console.log(premier)
premier.levelUp();
console.log(premier)
console.log(player)*/