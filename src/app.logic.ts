import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';
const { b: base, l: limit, s: showTable } = yarg;
//Una opcion
const message = "======================================="; 
const message1 = "              Tabla del 5";
console.log( message );
console.log( message1 );
console.log( message );

for (let index = 1; index <= 9; index++) {
    const multiplicacion = 5 * index;
    console.log("5 x " + index + " = " + multiplicacion);
}

console.log(yarg);

//Otra opcion
let outputMessage = '';
const headerMessage = `
=======================================
              Tabla del ${ base }
=======================================
`;
for (let index = 1; index <= limit; index++) {
    outputMessage +=`${base} x ${index} = ${ base * index}\n`;
}

console.log(headerMessage + outputMessage);
if(showTable){
    console.log(outputMessage);
}
const outputPath = `outputs`;
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);