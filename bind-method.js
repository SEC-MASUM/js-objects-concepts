const BoroVai = {
  id: 101,
  balance: 8000,
  name: "Jhakanaka Vai",
  treatCai: function (expence) {
    this.balance = this.balance - expence;
    console.log(this);
    return this.balance;
  },
};

const BoroApu = {
  id: 101,
  balance: 5000,
  name: "Dorodi Apu",
};

const BoroMama = {
  id: 101,
  balance: 10000,
  name: "Abdarer Mama",
};

BoroVai.treatCai(500);
// Bind and Call in the same line
// BoroApu.treatCai(500); // error
BoroVai.treatCai.bind(BoroApu)(500);
// BoroMama.treatCai(500); // error
BoroVai.treatCai.bind(BoroMama)(500);

// Ai ta ektu part part kore lekha jay.
// Step-1 Bind the object
// Step-2 Call the function (with parameter if needed)

const ApuTreatCai = BoroVai.treatCai.bind(BoroApu);
ApuTreatCai(800);

const MamaTreatCai = BoroVai.treatCai.bind(BoroMama);
MamaTreatCai(800);
