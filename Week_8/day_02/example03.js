//Part 1
//date 1
//date 2
//display the number of days between the 2 days

var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");

var DiffTime = date2.getTime() - date1.getTime();

var DiffDays = DiffTime / (1000 * 3600 * 24);

console.log(DiffDays);

const daysElapsed = {
  value: DiffDays,
};

console.log(JSON.stringify(DiffDays));
