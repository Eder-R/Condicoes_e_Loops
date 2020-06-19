for (let i = 1; i <= 100; i++) {
    let display = "";
    if (i % 3 == 0 && i % 5 == 0) {
        display = "FizzBuzz";
    } else if (i % 3 == 0) {
        display = "Fizz";
    } else if (i % 5 == 0) {
        display = "Buzz";
    } else {display = i}
    console.log(display)
}