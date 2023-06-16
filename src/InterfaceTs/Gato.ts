import Animal from "./Animal";
class Gato implements Animal {
    nombre: string;
    tipo: string;
    constructor(nombre: string) {
      this.nombre = nombre;
      this.tipo = "gato";
  
    }
    hacerSonido(): void {
      console.log("Miau miau");
  
    }
  
  }

export default Gato;
  