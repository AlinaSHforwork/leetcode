/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let numTogether = nums1.concat(nums2)
    numTogether = numTogether.sort(function(a, b){return a - b});
    midI = numTogether.length / 2
    if (Number.isInteger(midI)){
        return (numTogether[midI] + numTogether[midI-1])/2
    }
    else {
        return numTogether[Math.floor(midI)]
    }    
};