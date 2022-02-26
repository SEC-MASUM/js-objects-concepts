const student = {
  id: 101,
  balance: 5000,
  name: "Mujahid",
  major: "cse",
  isRich: false,
  subjects: ["programming with c", "data structure", "operating system"],
  bestFriend: {
    name: "Fahim",
    major: "eee",
  },
  takeExam: function () {
    console.log(this.name + " taking exam");
  },
  treatDey: function (expense) {
    this.balance = this.balance - expense;
    return this.balance;
  },
};

student.takeExam();
const reamianing1 = student.treatDey(800);
const remaining2 = student.treatDey(300);
console.log(reamianing1);
console.log(remaining2);
