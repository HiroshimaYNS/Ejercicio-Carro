class Carro{
    constructor(marca, color, placa, precio) {
      this.marca = marca;
      this.color = color;
      this.placa = placa;
      this.precio = precio;
      }
  
     encender(){
       console.log(`El carro enciende`)
       
       return this;
  }
  
  
    cambios(){
      console.log(`El carro mete cambios`)
      return this;
    }
    
    cambio1(){
      setTimeout(() => console.log(`Carro mete primera`),1000)
      return this;
    }
  
    acelerar(){
      setTimeout(() => console.log(`El carro acelera`),2000)
      return this;
    }
  
    cambios2(){
      setTimeout(() => console.log(`carro mete segunda`),3000)
      return this;
    }
    
  
    cambios3(){
    setTimeout(() => console.log(`El carro mete tercera `), 4000)
    return this;
    }
    
    cambios4(){
      setTimeout(() => console.log(`El carro mete cuarta socio`),5000)
      return this;
      }
    
    frenar(){
      setTimeout(() =>console.log(`el carro frenara`),6000)
      return this;
    }
    estrellar(){
     setTimeout(() =>console.log(`El carro se estrellara, que man tan loco`),7000)
    }
    
  }
  
  const carritojiundai = new Carro('hyunday', 'Azul', `HHY236`, `200'000.000`)
  console.log(carritojiundai.encender());
  console.log(carritojiundai.cambios());
  console.log(carritojiundai.acelerar());
  console.log(carritojiundai.cambios2());
  console.log(carritojiundai.cambios3());
  console.log(carritojiundai.cambios4());
  console.log(carritojiundai.frenar());
  console.log(carritojiundai.estrellar());