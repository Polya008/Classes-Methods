import Character from '..src/Character';
import Bowerman from '..src/Bowerman';
import Daemon from '..src/Daemon';
import Undead from '..src/Undead';
import Magician from '..src/Magician';
import Swordsman from '..src/Swordsman';
import Zombie from '..src/Zombie';


test('testing validation of the character name less than 2 characters', () => {
  function createNewCharacter() {
    return new Bowman('A');
  }
  expect(createNewCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Validation of the character name more than 10 characters', () => {
  function createCharacter() {
    return new Bowman('Очень длинное имя персонажа');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});


test('Character level up', () => {
  const persona = new Bowman('Some Name');
  persona.levelUp();
  const expected = {
    name: 'Some Name', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(persona).toEqual(expected);
});

test('Raising the level of a dead character', () => {
  const persona = new Bowman('Some Name');
  persona.damage(1000);

  expect(() => {
    persona.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего');
});

test('Checking for damage to a live character', () => {
  const persona = new Bowman('Some Name');
  persona.damage(50);
  const expected = {
    name: 'Some Name', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
  };
  expect(persona).toEqual(expected);
});

test('creation new Swordsman', () => {
	let premier = new Swordsman('Yo', );
	let expected = {
		 name: 'Yo',
		 type: 'Swordsman',
		 health : 100,
	     level : 1,
		 attack : 40, 
		 defence : 10
		};
	expect(premier).toBe(expected);	
}

test('creation new Bowerman', () => {
	let premier = new Bowerman('Yo');
	let expected = {
		 name: 'Yo',
		 type: 'Bowerman',
		 health : 100,
	     level : 1,
		 attack : 25, 
		 defence : 25
		};
	expect(premier).toBe(expected);	
}

test('creation new Daemon', () => {
	let premier = new Daemon('Yo');
	let expected = {
		 name: 'Yo',
		 type: 'Daemon',
		 health : 100,
	     level : 1,
		 attack : 10, 
		 defence : 40
		};
	expect(premier).toBe(expected);	
}

test('creation new Magician', () => {
	let premier = new Magician('Yo');
	let expected = {
		 name: 'Yo',
		 type: 'Magician',
		 health : 100,
	     level : 1,
		 attack : 10, 
		 defence : 40
		};
	expect(premier).toBe(expected);	
}

test('creation new Undead', () => {
	let premier = new Undead('Yo');
	let expected = {
		 name: 'Yo',
		 type: 'Undead',
		 health : 100,
	     level : 1,
		 attack : 25, 
		 defence : 25
		};
	expect(premier).toBe(expected);	
}

test('creation new Zombie', () => {
	let premier = new Zombie('Yo', );
	let expected = {
		 name: 'Yo',
		 type: 'Zombie',
		 health : 100,
	     level : 1,
		 attack : 40, 
		 defence : 10
		};
	expect(premier).toBe(expected);	
}