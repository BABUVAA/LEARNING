package DP.knapsack.ZeroOneKnapSack;

public class spaceOptbottomUpKnapSack {
    
    static int knapSack(int W, int wt[], int val[], int n)
    {
        // Making and initializing dp array
        int[] dp = new int[W + 1];

        for (int i = 1; i < n + 1; i++) {
            for (int w = W; w >= 0; w--) {

                if (wt[i - 1] <= w)

                    // Finding the maximum value
                    dp[w]
                        = Math.max(dp[w], dp[w - wt[i - 1]]
                                              + val[i - 1]);
            }
        }
        // Returning the maximum value of knapsack
        return dp[W];
    }

    // Driver code
    public static void main(String[] args)
    {
        int profit[] = { 60, 100, 120 };
        int weight[] = { 10, 20, 30 };
        int W = 50;
        int n = profit.length;
        System.out.print(knapSack(W, weight, profit, n));
    }
}

/*
 *   Time Complexity: O(N * W). As redundant calculations of states are avoided
 *   Auxiliary Space: O(W) As we are using a 1-D array instead of a 2-D array
 */