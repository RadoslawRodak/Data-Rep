//array with ages
const ages = [25, 31, 42, 77];

let d = ages.map((item) => {

    //multiply if number less than 70
    if (item < 70) {
        return item * 2;
    }

    //else return
    else {
        return item;
    }
})

//invoke function
console.log(d);