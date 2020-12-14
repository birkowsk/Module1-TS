import { data, pageSettings, paginateArray } from './task';

function main() {
  console.log(paginateArray(data, pageSettings));
}

export default main;
