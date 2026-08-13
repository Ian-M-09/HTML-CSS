const tipoFruta = "Manzanas"; 
switch (tipoFruta) { 
    case "Naranjas": 
      console.log("Las Naranjas cuestan $5"); 
      break; 
    case "Manzanas": 
      console.log("Las Manzanas cuestan $10"); 
      break; 
    case "Fresas": 
      console.log("Las Fresas cuestan $15"); 
      break; 
    default: 
      console.log(`Disculpa, no comercializamos: ${tipoFruta}`); 
      break; 
}