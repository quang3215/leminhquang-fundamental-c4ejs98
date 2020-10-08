let a = prompt("nhập số(,)")
    let aNumber = a.split(",").map(Number)
    let sum = 0
    for (i = 0; i < aNumber.length; i++) {
        sum += aNumber[i]
    }
    console.log(`Tổng các số nhập vào là : ${sum}`)