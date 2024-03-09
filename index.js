class Cupstick {
    constructor(material, color, capacityMl, stickLengthCm) {
      this.material = material;
      this.color = color;
      this.capacityMl = capacityMl;
      this.stickLengthCm = stickLengthCm;
      this.contentsMl = 0;
    }
  
    fillCup(amountMl) {
      if (amountMl <= 0) {
        console.log("Please fill the cup with a positive amount.");
      } else if (this.contentsMl + amountMl > this.capacityMl) {
        console.log("Cup overflow! Cannot fill beyond capacity.");
      } else {
        this.contentsMl += amountMl;
        console.log(`Cup filled with ${amountMl} ml of liquid.`);
      }
    }
  
    stirContent() {
      if (this.contentsMl > 0) {
        console.log(`Stirring the contents with the stick (${this.stickLengthCm} cm).`);
      } else {
        console.log("The cup is empty. Nothing to stir.");
      }
    }
  
    displayCupInfo() {
      console.log(`
        Cupstick Information:
        Material: ${this.material}
        Color: ${this.color}
        Capacity: ${this.capacityMl} ml
        Contents: ${this.contentsMl} ml
        Stick Length: ${this.stickLengthCm} cm
      `);
    }
  }
  
  // Example usage
  const myCupstick = new Cupstick('Plastic', 'Blue', 300, 10);
  
  myCupstick.fillCup(200);
  myCupstick.stirContent();
  myCupstick.displayCupInfo();
  