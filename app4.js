let a = ["quần", "áo", "tất"]
    while(true) {
        let b = prompt("Chào bạn, chào mừng bạn đến với bảng quản trị của shop, bạn muốn gì (C, R, U, D) ?")
        if (b === "r" || b === "R"){
            console.log("Các mặt hàng hiện tại là :")
            for(i = 0; i < a.length; i++) {
                console.log(`${i+1}. ${a[i]}`)
            }
        } else if (b == "c") {
            let newItem = prompt("Nhập tên của mặt hàng mới")
            alert("xong")
            a.push(newItem)
        } else if (b == "u" ) {
            let newPosition = Number(prompt("Nhập vị trí bạn muốn cập nhật"))
            let newName = prompt("Nhập tên mới")
            alert("xong")
            a[newPosition -1] = newName
        } else if (b == "d") {
            let deletePosition = Number(prompt("Nhập vị trí bạn muốn xóa"))
            alert("xong")
            a.splice(deletePosition -1, 1)
        } else {
            alert("Lệnh này không được hỗ trợ")
            break;
        }
    }


