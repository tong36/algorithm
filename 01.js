const LIST = [3, 30, 34, 5, 9]
const LIST2 = [9, 909, 91]
function getMax(list) {
    let length = -Infinity
    let arr = []
    let result = ''
    for(let i = 0; i < list.length; i++) {
        let len = String(list[i]).length
        length = length < len ? len : length
    }
    for(let i = 0; i < list.length; i++) {
        let obj = {}
        obj.str = String(list[i])
        let a = obj.str - 1
        obj.newStr = String(list[i]).padEnd(length, a)
        obj.k = length - obj.str.length
        arr.push(obj)
    }
    arr.sort((a, b) => {
        if(a.newStr === b.newStr) {
            return b.k - a.k
        }
        else {
            return a.newStr > b.newStr ? -1 : 1
        }
    })
    for(let i = 0; i < arr.length; i++) {
        result += arr[i]['str']
    }
    console.log(result)
}
getMax(LIST)
getMax(LIST2)