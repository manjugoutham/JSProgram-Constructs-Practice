function LeapYear(Array) {

    for (let index = 0; index < year.length; index++) {

        const element = year[index];

        if ((0 == element % 4) && (0 != element % 100) || (0 == element % 400)) {
            console.log(element + " Is lear year");
        } else {
            console.log(element + " is not leap year");
        }
    };
}


let year = new Array(1900, 2100, 2200, 2020, 2024, 2028, 2000);
LeapYear(year);