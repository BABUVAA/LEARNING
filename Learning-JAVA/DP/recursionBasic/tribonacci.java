package DP.recursionBasic;

import java.util.HashMap;

public class tribonacci {
    private static int tribonacciOptimal(int i) {
      return tribonacciSolution(i,new HashMap<>());
    }
    
    
    
    private static int tribonacciSolution(int i, HashMap<Integer,Integer> hashMap) {
       if(i==1||i==2)
       {
        return 0;
       }
       if(i==3)
       {
        return 1;
       }
       if(hashMap.containsKey(i))
       {
        return hashMap.get(i);
       }
       int result=tribonacciSolution(i-1, hashMap)+tribonacciSolution(i-2, hashMap)+tribonacciSolution(i-3, hashMap);
       hashMap.put(i, result);
       return hashMap.get(i);
        }



    public static void main(String[] args) {
            int result=tribonacciOptimal(10);    
            System.out.println(result);
            System.out.print(System.currentTimeMillis());
    }

   
}
//tribonacci numbers
//0 0 1 1 2 4 7 13 24 44