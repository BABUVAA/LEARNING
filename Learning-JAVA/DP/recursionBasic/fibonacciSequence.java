package DP.recursionBasic;
import java.util.HashMap;


public class fibonacciSequence {
    //Iterative Approach
    private static int fibonacciSequenceIterative(int num,int nextNum,int number)
    {
        if( number==1 || number==2)
           return number-1;
            
        // Here num and nextNum is first two number of fibinacci series.
        for (int i = 2; i < number; i++) {
            int temp=num+nextNum;
             num=nextNum;
             nextNum=temp;
         }
    
         return nextNum;
    }


    // Using Recursion
    private static int fibonacci(int[]fib,int number)
    {
        //Base case
        if(number==1||number==2)
            return fib[number-1] ;
        
          fib[number]=fibonacci(fib, number-1)+fibonacci(fib, number-2);

       return fib[number];
    }




  //Memoization Technique  
private static int fibonacciNumber(int number)
{
    return fibonacciOptimal(new HashMap<>(), number);
}

    private static int fibonacciOptimal(HashMap<Integer,Integer>fib,int number)
    {
        if(number==1||number==2)
        {
           return number-1;
        }
        
        if(fib.containsKey(number))
            return fib.get(number);


        fib.put(number,fibonacciOptimal(fib, number-1)+fibonacciOptimal(fib, number-2));


         return fib.get(number);
    }

 
    //Driver Code
    public static void main(String[] args) {
        
        //Iterative Approach
        int nums=fibonacciSequenceIterative(0, 1, 40);
        System.out.println(nums);
       

        //Recursive Method
        int number=42;
        int[]fib=new int[number+2];
        fib[0]=0;
        fib[1]=1;
        System.out.println(fibonacci(fib,number));
        
       
        //Recursion using Memoization
        System.out.println(fibonacciNumber(45));
    
     
    }
}
