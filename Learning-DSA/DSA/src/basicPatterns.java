public class basicPatterns {
    
    public static void main(String[] args) {
       System.out.println("PATTERN 1");
        //PATTERN 1 ALL STAR
        for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=5;j++)
            {
                System.out.print("*");

            }
            System.out.println();
        } 
        
        System.out.println("PATTERN 2");

        //PATTERN 2
        for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=5;j++)
            {
                if(j==1||j==5||i==1||i==5) 
                System.out.print("*");
                else
                System.out.print(" ");
                
            }
            System.out.println();
        } 

        //PATTERN 3
        System.out.println("PATTERN 3");
        for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print("*");

            }
            System.out.println();
        } 
        
        //PATTERN 4
        System.out.println("PATTERN 4");
        for(int i=1;i<=5;i++)
        {
            for(int j=5;j>=i;j--)
            {
                System.out.print("*");

            }
            System.out.println();
        } 
        //PATTERN 5
        System.out.println("PATTERN 5");
        for(int i=5;i>=1;i--)
        {
            for(int j=1;j<=5;j++)
            {
                if(j>=i)
                System.out.print("*");
                else
                System.out.print(" ");

            }
            System.out.println();
        } 
         //PATTERN 6
         System.out.println("PATTERN 6");
         for(int i=1;i<=5;i++)
         {
             for(int j=1;j<=i;j++)
             {
              
                 System.out.print(j);
                  
 
             }
             System.out.println();
         } 
           //PATTERN 7
           System.out.println("PATTERN 7");
           for(int i=5;i>=1;i--)
           {
               for(int j=1;j<=i;j++)
               {              
                   System.out.print(j);              
               }
               System.out.println();
           } 
           //PATTERN 8
           System.out.println("PATTERN 8");
           int z=1;
            for(int i=1;i<=5;i++)
            {
                for(int j=1;j<=i;j++)
                {
                    System.out.print(z+" ");
                    z++;
                }
                System.out.println();
            }    
            //PATTERN 9
           System.out.println("PATTERN 9");
         
            for(int i=1;i<=5;i++)
            {
                for(int j=1;j<=i;j++)
                {
                    if((i+j)%2==0)
                    System.out.print(1);
                    else
                    System.out.print(0);
                }
                System.out.println();
            }            
    }
}
