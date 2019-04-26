/*
 * @Author: snail
 * @Date: 2019-04-25 17:28:25
 * @Last Modified by: snail
 * @Last Modified time: 2019-04-26 09:33:28
 */

interface Person {
  name: string;
  age: number;
}


const tom: Person = {
    name: 'Tom',
    age: 253,
};

if (tom.age === 25) {
    console.log(`${tom.name} is 25 years old.`);
}

export { Person };
