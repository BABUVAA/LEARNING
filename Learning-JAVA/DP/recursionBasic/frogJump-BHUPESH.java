package DP.recursionBasic;

public class frogJump {
    public boolean canCross(int[] stones) {
        return canCrossPath(stones,1,1);
    }

    public static boolean canCrossPath(int[] stones,int position,int k)
    {   
        boolean OP1=false,OP2=false,OP3=false;
        if(position==stones.length-1)
            return true;

       OP1=canCrossPath(stones,position+1,k);
        OP2=canCrossPath(stones,position+1,k+1);
        if(k!=0)
        OP3=canCrossPath(stones,position+1,k-1);


        // if(stones[position+1]-stones[position] == k)
        //     return canCrossPath(stones,position+1,k);

        // if(stones[position+1]-stones[position] == k+1)
        //     return canCrossPath(stones,position+1,k+1);
        
        // if(k-1 != 0)
        // if(stones[position+1]-stones[position] == k-1)
        //     return canCrossPath(stones,position+1