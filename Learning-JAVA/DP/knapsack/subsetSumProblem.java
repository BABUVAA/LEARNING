package DP.knapsack;

import java.util.HashMap;


public class subsetSumProblem {
    
private static boolean subsetSumProblemBrute(int[] nums, int target, int n,HashMap<Integer,Boolean> hashMap)
{  
    if(target==0)
        return true;
    if( n-1 == -1)
        return false;    
    if(hashMap.containsKey(target))
        return hashMap.get(target);

if(nums[n-1]<=target)
   {
    hashMap.put(target, (subsetSumProblemBrute(nums, target-nums[n-1], n-1, hashMap) || subsetSumProblemBrute(nums, target, n-1, hashMap)))     ;
    return hashMap.get(target);}
else
   { hashMap.put(target, subsetSumProblemBrute(nums, target, n-1, hashMap));
    return  hashMap.get(target);}
}




//Driver Code
    public static void main(String[] args) {
    HashMap <Integer, Boolean>hashMap=new HashMap<>();
      int []nums={2,3,7,8,10};
      int target=2;  
        int n=nums.length;
        System.out.println(subsetSumProblemBrute(nums,target,n,hashMap));

    }
}
