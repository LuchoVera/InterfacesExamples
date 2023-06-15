
import Animal from "./Animal";
class Perro implements Animal {
    nombre: string;
    tipo: string;
    constructor(nombre: string) {
      this.nombre = nombre; 
      this.tipo = "perro";
    }
  
    hacerSonido(): void {
      console.log("Guau guau");
    }
  }

export default Perro; 

  