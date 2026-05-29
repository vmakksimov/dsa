//Given an integer array nums, 
// return all the triplets [nums[i], nums[j], nums[k]]
//  where nums[i] + nums[j] + nums[k] == 0,
//  and the indices i, j and k are all distinct.

//The output should not contain any duplicate triplets. 
// You may return the output and the triplets in any order.

// the sum of 3 digits should be equal to 0 !!! and the indexes are unique

function threeSum(nums: number[]){

    const pairs = new Map();
    const sortednums = nums.sort()
    for (let i=0; i< sortednums.length; i++){
        for (let j= i+1; j<sortednums.length; j++){
            for (let k= j+1; k<sortednums.length; k++){
                let sum = sortednums[i] + sortednums[j] + sortednums[k];
                const unique = i !== j && i !==k && j !== k
                const key = `${nums[i]}-${nums[j]}-${nums[k]}`;
                if (sum === 0 && unique && !pairs.has(key)){
                    pairs.set(key, [sortednums[i], sortednums[j], sortednums[k]]);
                }

            }   
        }
    }
    return [...pairs.values()]


}
// output [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1,0,1,2,-1,-4]))