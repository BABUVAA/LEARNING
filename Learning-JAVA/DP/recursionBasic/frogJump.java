package DP.recursionBasic;

public class frogJump {
    public boolean canCross(int[] stones) {
        return canCrossPath(stones,1,1);
    }

    public static boolean canCrossPath(int[] stones,int position,int k)
    {   
        if(position==stones.length-1)
            return true;

        
        if(stones[position+1]-stones[position] == k)
            return canCrossPath(stones,position+1,k);

        if(stones[position+1]-stones[position] == k+1)
            return canCrossPath(stones,position+1,k+1);
        
        if(k-1 != 0)
        if(stones[position+1]-stones[position] == k-1)
            return canCrossPath(stones,position+1,k-1);

            return false;    
    }




    //Driver Code
     public static void main(String[] args) {
        int[] dp={0,1,3,5,6,8};

        System.out.println(canCrossPath(dp,1,1));
    }
    
}
