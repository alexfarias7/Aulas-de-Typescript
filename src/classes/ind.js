function Controleremoto(powerStatus = false) {
  return {
    turnOn() {
      powerStatus = true;
    },
    turnOff() {
      powerStatus = false;
    },
    getStatus() {
      return powerStatus;
    },
  };
}

const controle = Controleremoto();
controle.turnOn();
console.log(controle.getStatus());
