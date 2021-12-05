let sum = function(para1) {
    let a = function(para2) {
        let b = function(para3) {
            let add = para1 + para2 + para3;
            console.log(add)
        }
        return b;
    }
    return a;
}

sum(10)(20)(30)