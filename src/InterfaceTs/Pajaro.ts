import Animal from "./Animal";
class Pajaro implements Animal {
    nombre: string;
    tipo: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.tipo = "pájaro";
    }
  
    hacerSonido(): void {
      console.log("Pío pío");
    }
  }

export default Pajaro;
  