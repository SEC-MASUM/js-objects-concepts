const BoroVai = {
  id: 101,
  balance: 8000,
  name: "Jhakanaka Vai",
  treatCai: function (expence, boksis, tax) {
    this.balance = this.balance - expence - boksis - tax;
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
// Call
console.log("-----Result using call--------");
BoroVai.treatCai.call(BoroApu, 800, 300, 100);
BoroVai.treatCai.call(BoroMama, 800, 400, 200);

// Apply
console.log("-----Result using apply--------");
BoroVai.treatCai.apply(BoroApu, [800, 300, 100]);
BoroVai.treatCai.apply(BoroMama, [800, 400, 200]);
