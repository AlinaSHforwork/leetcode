/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let fillteredArr = []
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            fillteredArr.push(arr[i])
        }               
    }
    return fillteredArr;
};