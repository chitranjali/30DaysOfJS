const dog = {
    name: 'scooby',
    color: 'white',
}

dog.breed = 'labrador'
console.log(dog);

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

has_Skills = Object.values(users);

console.log(Object.values(has_Skills));

//Find the person who has many skills in the users object.
let total =  0,
    name = '';

for (const element of Object.entries(users)) {
  // console.log(element[1]);
  if (element[1].skills.length > total){
    name = element[0];
    total = element[1].skills.length;

    // element[1].skills.every()

  }
  console.log(name)
}

// WIP
// people who are MERN stack developer from the users object

//Set your name in the users object without modifying the original users object
let users_copy = Object.assign({}, users)

users_copy.chitra = {}
console.log(users_copy)

