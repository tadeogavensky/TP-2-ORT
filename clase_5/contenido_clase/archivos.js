const fs = require("node:fs");

const escribirEnArchivo = (ruta, datos) => {
  console.log(`Escribiendo ${datos} en ${ruta}`);
  fs.writeFileSync(ruta, datos);
};

const leerDeArchivo = async(ruta) => {
  console.log(`Leyendo en ${ruta}`);
  const data = await fs.promises.readFile(ruta)
  console.log('data :>> ', data.toString());
};

const crearCarpeta = (ruta) => {
  fs.mkdirSync(ruta);
};

module.exports = { escribirEnArchivo, leerDeArchivo, crearCarpeta };
