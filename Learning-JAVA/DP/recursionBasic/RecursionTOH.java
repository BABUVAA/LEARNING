package DP.recursionBasic;
public class RecursionTOH {
    public static void towerOfHanoi(int n,String src,String helper,String dest)
    {   
        if(n==1)
        {
            System.out.println("TRANSFER: "+n+" FROM "+src+" TO "+dest);
            return;
        }
        towerOfHanoi(n-1, src,dest, helper);
        System.out.println("TRANSFER: "+n+" FROM "+src+" TO "+dest);
        towerOfHanoi(n-1, helper, src, dest);
        
    }



    public static void main(String[] args) {
        towerOfHanoi(3, "S","H","D");
    }
}
