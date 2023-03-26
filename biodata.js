const level = ["Beginner", "Advanced", "Expert"];

const biodata = {
  name: "Galuh",
  age: 25,
  hobbies: ["Badminton", "Gaming", "Jogging"],
  isMarried: false,
  schoolList: [
    {
      name: "Universitas Indonesia",
      yearIn: 2018,
      yearOut: 2022,
      major: "Computer Science",
    },
  ],
  skills: [
    {
      skillName: "PHP",
      level: level[0],
    },
    {
      skillName: "JavaScript",
      level: level[2],
    },
    {
      skillName: "Golang",
      level: level[1],
    },
  ],
  interestInCoding: true,
};

console.log(biodata);
