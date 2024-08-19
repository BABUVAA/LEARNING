package DP.knapsack.ZeroOneKnapSack;

import DSA.arrays;

public class minimumSubsetSum {
    
    //finding Minimum method
    public static int min(int A, int B){return A<B?A:B;}


    //Driver code
    public static void main(String[] args) {
        int[]arr={1,6,11,5};
        
        System.out.println(minimumSubsetSumSol(arr,arr.length));
    }

    
    private static int minimumSubsetSumSol(int[] arr, int n) {
   int sum=0;
        for (int i = 0; i < n; i++) {
        sum+=arr[i];
    }

        return minimumSubsetSumSolution(arr, n, sum);   
    }


    private static int minimumSubsetSumSolution(int[] arr, int n, int sum) {
        int target =sum/2;
        boolean condition =true;
        int sum=0;
        while(condition)
        {
            
            if(arr[n-1]<target)
                sum+=arr[n-1];




        }
    
        
    }
}
