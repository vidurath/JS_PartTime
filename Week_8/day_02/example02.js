const personString = '{"firstName": "vidurath", "lastName": "fortuno"}';

const personObj = JSON.parse(personString);

console.log(personObj.firstName);
