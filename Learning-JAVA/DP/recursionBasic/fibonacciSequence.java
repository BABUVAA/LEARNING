package DP.recursionBasic;
import java.util.HashMap;


public class fibonacciSequence {
    private static int fibonacciSequenceIterative(int num,int nextNum,int number)
    {
        for (int i = 2; i < 10; i++) {
            int temp=num+nextNum;
             num=nextNum;
             nextNum=temp;
         }
         return nextNum;
    }

    private static int fibonacci(int[]fib,int number)
    {
        if(number==1||number==2)
        {
            return fib[number-1] ;
        }
        if(fib[number]>0)
            return fib[number];


        fib[number]=fibonacci(fib, number-1)+fibonacci(fib, number-2);


       return fib[number];
    }

private static int fibonacciNumber(int number)
{
    return fibonacciOptimal(new HashMap<>(), number);
}

    private static int fibonacciOptimal(HashMap<Integer,Integer>fib,int number)
    {
        if(number==0||number==1)
        {
           return number;
        }
        if(fib.containsKey(number))
            return fib.get(number);


        fib.put(number,fibonacciOptimal(fib, number-1)+fibonacciOptimal(fib, number-2));


       return fib.get(number);
    }

 
    public static void main(String[] args) {
        int nums=fibonacciSequenceIterative(0, 1, 10);
        System.out.println(nums);
       

        int number=10;
        int[]fib=new int[number+2];
        fib[0]=0;
        fib[1]=1;
        System.out.println(fibonacci(fib,number));
        
       
        System.out.println(fibonacciNumber(9));
    
     
   
    }
}
