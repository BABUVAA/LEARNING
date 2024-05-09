package DP.knapsack;

import java.util.HashMap;


public class subsetSumProblem {
    
private static boolean subsetSumProblemBrute(int[] nums, int target, int n,HashMap<Integer,Boolean> hashMap)
{  
    //Base Case
    if(target==0)
        return true;
    
    if( n-1 == -1)
        return false;    

    //Case LookUp    
    if(hashMap.containsKey(target))
        return hashMap.get(target);

    //If element smaller or equal to Target
    if(nums[n-1]<=target)
    {
    hashMap.put(target, (subsetSumProblemBrute(nums, target-nums[n-1], n-1, hashMap) || subsetSumProblemBrute(nums, target, n-1, hashMap)))     ;
    return hashMap.get(target);}
    
    //If element greater than Target
    else
    { hashMap.put(target, subsetSumProblemBrute(nums, target, n-1, hashMap));
    return  hashMap.get(target);}
}




//Driver Code
    public static void main(String[] args) {
    HashMap <Integer, Boolean>hashMap=new HashMap<>();
      int []nums={2,3,7,8,10};
      int target=15;  
        int n=nums.length;
        System.out.println(subsetSumProblemBrute(nums,target,n,hashMap));

    }
}
