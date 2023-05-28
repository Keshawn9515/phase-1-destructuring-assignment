const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

const [moo, neigh, baa, oink, cluck] = ["cow", "horse", "sheep", "pig", "chicken"];
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
const [blackAndWhite, black, pink] = ["cow", "sheep", "pig"];
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const [r, o, y, g, b, indg, v] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const {
  muppetName,
  color,
  song,
  job,
  partner,
  songs: [, song2, , song4],
  nested: { job: nestedJob, partner: nestedPartner }
} = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: ["Rainbow Connection", "Moving Right Along", "Bein' Green", "I Hope That Something Better Comes Along"],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

// Testing the variables
console.log(moo); // "cow"
console.log(neigh); // "horse"
console.log(baa); // "sheep"
console.log(oink); // "pig"
console.log(cluck); // "chicken"

console.log(bessie); // "cow"
console.log(dolly); // "sheep"
console.log(babe); // "pig"
console.log(little); // "chicken"

console.log(blackAndWhite); // "cow"
console.log(black); // "sheep"
console.log(pink); // "pig"

console.log(red); // "red"
console.log(orange); // "orange"
console.log(yellow); // "yellow"
console.log(green); // "green"
console.log(blue); // "blue"
console.log(indigo); // "indigo"
console.log(violet); // "violet"

console.log(r); // "red"
console.log(o); // "orange"
console.log(y); // "yellow"
console.log(g); // "green"
console.log(b); // "blue"
console.log(v); // "violet"

console.log(indg); // "indigo"

console.log(muppetName); // "Miss Piggy"
console.log(color); // "pink"
console.log(song); // "Never Before, Never Again"
console.log(job); // "Cast member of The Muppet Show"
console.log(partner); // "Kermit"

console.log(song2); // "Moving Right Along"
console.log(song4); // "I Hope That Something Better Comes Along"
console.log(nestedJob); // "Host of The Muppet Show"
console.log(nestedPartner); // "Miss Piggy"


// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coo
// p, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner