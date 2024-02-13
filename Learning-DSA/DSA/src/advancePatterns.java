public class advancePatterns {

    public static void butterfly()
    {
 //BUTTERFLY PATTERN
 System.out.println("BUTTERFLY PATTERN");
 //first half
 
 for(int i = 1; i <=4;i++)
 {
     for(int j=1;j<=i;j++) //PRINT STARS
     {
      System.out.print("*");
     }
     for(int j=1;j<=(4-i)*2;j++) // PRINT SPACES
     {System.out.print(" ");}
    
     for(int j=1;j<=i;j++) // PRINT STARS
     {
     System.out.print("*");
     }          
     System.out.println();
 }        
 //second half butterfly
 for(int i = 4; i >=1;i--) 
 {
     for(int j=1;j<=i;j++) //PRINT STARS
     {
      System.out.print("*");
     }
     for(int j=1;j<=(4-i)*2;j++) //PRINT SPACES
     {System.out.print(" ");}
    
     for(int j=1;j<=i;j++) //PRINT STARS
     {
     System.out.print("*");
     }          
     System.out.println();
 }       
    }

    public static void rhombus(int n)
    {
        System.out.println("PATTERN RHOMBUS");
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n-i;j++) //PRINT SPACES
            {System.out.print(" ");}
            for(int j=1;j<=5;j++)  //PRINT STARS
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void emptyRhombus(int n)
    {
        System.out.println("PATTERN EMPTY RHOMBUS");
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n-i;j++) //PRINT SPACES
            {System.out.print(" ");}
            for(int j=1;j<=n;j++)   //RHOMBUS ITERATON
            {
                if(j==1||j==n||i==1||i==n) //RHOMBUS OUTSIDE STARS
                System.out.print("*");
                else
                System.out.print(" "); //RHOMBUS INSIDE SPACES
            }
            System.out.println();
        }
    }
    public static void  numberPyramid(int n){
        System.out.println("PATTERN NUMBERPYRAMID");
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n-i;j++) // PRINT SPACES
            {
                System.out.print(" "); 
            }
            for(int j=1;j<=i;j++) //PRINT NUMBER PYRAMID
            {
                System.out.print(i+" ");
            }
            System.out.println();
        }
    }
    public static void pallindromeNumberPyramid(int n)
   {
    System.out.println("PATTERN PALLINDROME NUMBER PYRAMID");
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n-i;j++)  //PRINT SPACES
            {
                System.out.print(" ");
            }
            for(int j=i;j>=1;j--)  //PRINT HALF NUMBER PYRAMID
            {
                System.out.print(j);
            }
            for(int j=2;j<=i;j++) // PRINT OTHER HALF PYRAMID
            {
                System.out.print(j);
            }
            System.out.println();
        }
   }
    public static void diamond()
    {
        System.out.println(" PATTERN DIAMOND");
        int n=4;
       
        for(int i=1;i<=n;i++) // PRINTING FIRST UPPER HALF  
        {
            for(int j=1;j<=n-i;j++)  // PRINT SPACES
            {
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++)  //PRINT LEFT HALF STAR PYRAMID
            {
                System.out.print("*");
            }
            
            for(int j=2;j<=i;j++)  //PRINT RIGHT HALF STAR PYRAMID
            {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=1;i<=n-1;i++) //PRINTING LOWER HALF PYRAMID
        {
            for(int j=n;j>n-i;j--) //PRINTING SPACES
            {
                System.out.print(" ");
            }
            for(int j=i;j<=n-1;j++) //PRINT LEFT HALF STAR PYRAMID
            {
                System.out.print("*");
            }
            for(int j=i;j<n-1;j++) // PRINT RIGHT HALF STAR PYRAMID
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
     public static void main(String[] args) {
        butterfly(); 
        rhombus(5);     
        emptyRhombus(6);
        numberPyramid(7);
        pallindromeNumberPyramid(5);
        diamond();
    }
    
}
