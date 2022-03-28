#!/usr/bin/env zx
import { chalk } from "zx";
let componentName = first_char_to_upperCase(
  await question("please input your component name\n")
);
await cd("zx/.local");
await $`mkdir ${componentName}`;
await cd(`${componentName}`);
await $`touch index.tsx`;
await $`touch ${componentName}.tsx`;

let c1 = Index_TSX(componentName);
let c2 = ComponentName_TSX(componentName);
await $`echo ${c1} >index.tsx`;
await $`echo ${c2} >${componentName}.tsx`;
console.log(
  chalk.blue("successfully create component: " + chalk.redBright(componentName))
);

// first char to UpperCase
function first_char_to_upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//create file content
function Index_TSX(fileName) {
  return `export {default} from './${fileName}'`;
}

function ComponentName_TSX(fileName) {
  return `export default function ${fileName}() {
  return (
	<div>${fileName}</div>
  )
}`;
}
