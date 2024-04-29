package DP.knapsack;

public class subsetSumProblem {
    
private static boolean subsetSumProblemBrute(int[] nums, int target, int n)
{  
    if(target==0)
        return true;
    if( n-1 == -1)
        return false;    
   
if(nums[n-1]<=target)
    return subsetSumProblemBrute(nums, target-nums[n-1], n-1) || subsetSumProblemBrute(nums, target, n-1) ;
else
    return subsetSumProblemBrute(nums, target, n-1);
}




//Driver Code
    public static void main(String[] args) {
      int []nums={2,3,7,8,10};
      int target=0;  
        int n=nums.length;
        System.out.println(subsetSumProblemBrute(nums,target,n));

    }
}
