// Crear interfaces
interface auto{
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface guasonProps{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: guasonProps = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: guasonProps ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface ciudadGoticaFn{
  (ciudadanos:string[]): number;
}

const ciudadGotica: ciudadGoticaFn = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface PersonaInterface{
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}
class Persona implements PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio(): void {
    console.log(`${this.nombre}, ${this.edad} años, ${this.sexo}, estado civil: ${this.estadoCivil}`);
  }
}