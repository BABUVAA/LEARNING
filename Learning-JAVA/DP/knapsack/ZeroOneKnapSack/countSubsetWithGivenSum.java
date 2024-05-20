package DP.knapsack.ZeroOneKnapSack;

public class countSubsetWithGivenSum {
    

    private static int countSubsetWithGivenSumSol(int[] arr, int target,int n) {
       
        int ways=0;
       
        //Base case
        if(target == 0)
        return 1;
        if(n == 0)
        return 0;
        
        //Code for counting all subset with given target
        if(arr[n-1]<=target)
        ways=ways+countSubsetWithGivenSumSol(arr, target-arr[n-1], n-1)+countSubsetWithGivenSumSol(arr, target, n-1);
        else
        ways=ways+countSubsetWithGivenSumSol(arr, target, n-1);
    
    
        return ways;
    }


    //Driver Code
    public static void main(String[] args) {
        int []arr={1,7,1,1,1,1,1,1,1};
        int target=8;
        System.out.println(countSubsetWithGivenSumSol(arr,target,arr.length));
    }

    
}
