    console.log("(Exercises XP)");
    
    //exercise 1
    console.log("\nExercises 1 : Your Favorite Food");
    let favoriteFood = "noodles";
    let favoriteMeal = "lunch";

    console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

    console.log("\nExercises 2 : Series");
    console.log("Part 1");
    
    let myWatchedSeries = ["black mirror","money heist","the big bang theory"];

    let myWatchedSeriesLenght = myWatchedSeries.length;
    console.log(`1. ${myWatchedSeriesLenght}`);

    let myWatchedSeriesSentence = myWatchedSeries[0] +", " +myWatchedSeries[1] + ", and " +myWatchedSeries[2];
    console.log(`2. ${myWatchedSeriesSentence}`);

    console.log(`3. I watched ${myWatchedSeriesLenght} series: ${myWatchedSeriesSentence}`);

    console.log("Part 2");
    let i = myWatchedSeries.indexOf("the big bang theory");
    myWatchedSeries[i] = "friends";
    console.log(`1. ${myWatchedSeries}`);
    myWatchedSeries.push("flash");
    console.log(`2. ${myWatchedSeries}`);
    myWatchedSeries.unshift("lost");
    console.log(`3. ${myWatchedSeries}`);
    delete myWatchedSeries[1];
    console.log(`4. ${myWatchedSeries}`);

    console.log(`5. ${myWatchedSeries[2][2]}`);
    console.log(`6. ${myWatchedSeries}`);

    console.log("\nExercises 3 : The Temperature Converter");

    let temperatureValue = 28;
    let conversion = [(temperatureValue / 5) * 9] + 32;
    console.log(`${temperatureValue} °C is ${conversion} °F`);

    // console.log("\nExercises 4 : Guess The Answer #1");

    let c;
    let a = 34;
    let b = 21;

    // 1.
    //console.log(a+b) //first expression
    // Prediction: It will output 55, because a and b are numbers
    // Actual: 5

    a = 2;

    // 2.
    //console.log(a+b) //second expression
    // Prediction: It will output 23, because a and b are numbers
    // Actual: 23

    // 3.
    // what is the value of c
    // Prediction: It will output undefined, because c is not assigned with a value or string
    // Actual: undefined

    // 4.
    //console.log(3 + 4 + '5');
    // Prediction: It will output 75, because 3 and 4 are number and 5 is a string
    // Actual: 75

    // console.log("\nExercises 5 : Guess The Answer #2");
    

    