package DP.knapsack.ZeroOneKnapSack;

public class bottomUpKnapSack {
    
   
    // A utility function that returns
    // maximum of two integers
    static int max(int a, int b) { return (a > b) ? a : b; }

    // Returns the maximum value that can
    // be put in a knapsack of capacity W
    static int knapSack(int W, int wt[], int val[], int n)
    {
        int i, w;
        int K[][] = new int[n + 1][W + 1];

/*
 *          0 1  2   3   4   5 
 *       0  0 0  0   0   0   0
 *       1  0 60 60  60  60  60 
 *       2  0 60 100 160 160 160  
         3  0 60 100 120 180 220
 */ 


        // Build table K[][] in bottom up manner
        for (i = 0; i <= n; i++) {
            for (w = 0; w <= W; w++) {
                if (i == 0 || w == 0)
                    K[i][w] = 0;
                else if (wt[i - 1] <= w)
                    K[i][w]
                        = max(val[i - 1] + K[i - 1][w - wt[i - 1]],  K[i - 1][w]);
                        //max(val[0]     + k[0][0],  K[2][2]) 
                        //max(60 + 60 ,60)
                        else
                    K[i][w] = K[i - 1][w];
            }
        }

        return K[n][W];
    }
//Driver code
    public static void main(String[] args) {
        int profit[] = new int[] { 60, 100, 120 };
        int weight[] = new int[] { 1, 2, 3 };
        int W = 5;
        int n = profit.length;
        System.out.println(knapSack(W, weight, profit, n));
    }

    
}
/*
Time Complexity: O(N * W). where ‘N’ is the number of elements and ‘W’ is capacity. 
Auxiliary Space: O(N * W). The use of a 2-D array of size ‘N*W’.
 */