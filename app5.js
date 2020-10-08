let a = prompt("nhập số(,)")
    let aNumber = a.split(",").map(Number)
    let s = 0
    for (i = 0; i < aNumber.length; i++) {
        s += aNumber[i]
    }
    console.log(`Tổng các số nhập vào là : ${s}`)
