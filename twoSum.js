var twoSum = function (nums, target) {
    var counter = nums.length;
    var res = [];
    for (i = 0; i < nums.length -1; i++) {
        counter--;
        for (j = 1; j <= counter; j++) {
            if (nums[i] + nums[i+j] === target) {
                res.push(i, i+j);
                return res;
            }
        }
    }
};

var arr = [2, 11, 7, 15];
// twoSum(arr, 9);
console.log(twoSum(arr, 9))

/*  round 1: arr[0] + arr[0+1]
    round 2: arr[0] + arr[0+2]
    round 3: arr[0] + arr[0+3]
    round 4: arr[1] + arr[1+1]
    round 5: arr[1] + arr[1+2]
    round 6: arr[2] + arr[2+1]
*/

