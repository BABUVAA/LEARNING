package DP.knapsack.ZeroOneKnapSack;

public class equalSumPartition {

    //Firstly, if array sum is odd then equal sum partition not possible
    private static boolean equalSumPartitionSol(int[] arr, int n) {
        //Calculating Array sum
        int sum=0;
        for (int i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }      

        //If sum is EVEN we directly conclude it false case
        if(sum%2==1)
            return false;

        //If sum is ODD, we return a method to check Can we partition Array in two equal part   
        else
        return equalSumPartitionSolution(arr, n,sum/2);
    }


    //This is method for checking equal sum partition
    //Basic approach is that above we checked that is Sum is EVEN,
    //If we find any elements in Array have sum equals to half of Sum of Array(Sum/2)
    private static boolean equalSumPartitionSolution(int[] arr, int n, int sum) {
        //Base case
        if(sum == 0)
        return true;
        if(n == -1)
        return false;
        
        //Code for finding possibilities TargetSum sum 
        if(arr[n]<=sum)
        return equalSumPartitionSolution(arr, n-1, sum-arr[n]) || equalSumPartitionSolution(arr, n-1,sum);
        else
       return equalSumPartitionSolution(arr, n-1, sum);
    
    }

    //Driver Code
    public static void main(String[] args) {
        int []arr={5,4,9,6};
        int n=arr.length;
        System.out.println(equalSumPartitionSol(arr,n-1));

    }


    
    
}
