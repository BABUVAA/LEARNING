package BitManupulation;

public class bitManipulation {
    public static void getBit(int num ,int pos)
    {
     //Bit mask
    int bitMAsk= 1<<pos;
    if((bitMAsk & num)!=0)
    System.out.println("BIT WAS 1");
    else
    System.out.println("Bit was 0");

    
    }
    public static void setBit(int num ,int pos)
    {
     //Bit mask
    int bitMAsk= 1<<pos;
    int newNum= bitMAsk | num;
    System.out.println("Number is :"+newNum);
    
    }
    private static void clearBit(int num , int pos) {
        int bitMAsk= 1<<pos;
        int notBitMask= ~bitMAsk;
        int  newNum= num & notBitMask;
        System.out.println("Number is :"+newNum);
    }
    private static void updateBit(int num ,int pos, int operaton) {
        int bitMAsk= 1<<pos;
        if(operaton==0)
        {
            //clearBit method
        int notBitMask= ~bitMAsk;
        int  newNum= num & notBitMask;
        System.out.println("Number is :"+newNum);
        }
        if(operaton==1)
        {
            //setBit method
            int newNum= bitMAsk | num;
            System.out.println("Number is :"+newNum);
        }
    }
    public static void main(String[] args) {
        
        getBit(6, 2);
        setBit(6,3);
        clearBit(6,1);
        updateBit(1, 1, 1);
    }
  
}