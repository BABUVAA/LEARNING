package LearningDSA;
public class Sorting {
    public static void bubbleSort(int []arr)
        {
            /*
             * BUBBLE SORTING
             * int arr[]={7,8,1,3,2}
             *STEP 1:- COMPARE ARR[0] TO ARR[1]
                        IF ARR[0] GREATER THEN SWAP POSITIONS  {7,8,1,3,2} ELSE DO NOTHING
                        ITERATE THE PROCESS {7,1,8,3,2}->{7,1,3,8,2}->{7,1,3,2,8}
              STEP 2:- ITERATE STEP 1 
                        ARRAY WILL SORT {1,2,3,7,8}        
             */
            //TIME COMPLEXITY O(n^2)

            for(int i = 0; i < arr.length-1; i++)//ITERATING ARRAY 
                {
                for(int j = 0; j < arr.length-i-1; j++) //ITERATING ARRAY OVER UNSETTLED POSITIONS
                   {
                    int light = arr[j];//TAKING INDEX J AS SMALLER
                    int nxt=arr[j+1];// VALUE NEXT TO INDEX J
                    if(light>nxt)// COMPARING BOTH IF TRUE THEN SWAP
                        {
                        //swap
                        int temp=light;
                        arr[j] = arr[j+1];
                        arr[j+1]=temp;
                        }

                   }
                }
                //PRINTING SORTED ARRAY
                for (int i : arr) {
                    System.out.print(i+"-");
                }
                System.out.println();
        }
        public static void insertSort(int[]arr)
        {
            /*
             * INSERT SORTING
             * int arr[]={7,8,1,3,2}
             *STEP 1:- ASSUME ARRAY INTO TWO PART ONE IS SORTED OTHER IS UNSORTED
                       TAKE VALUE FROM UNSORTED PART AND COMPARE TO SORTED PART 
                       AND PUT UNSORTED VALUE INTO SORTED PART 
                       ASSUME {7} SORTED {8,1,3,2} UNSORTED
                       TAKE 8 AND COMPARE TO SORTED VALUES AND PUT IT IN SORTED {7,8}{1,3,2} -> {1,7,8}{3,2}->{1,3,7,8}{2}->{1,2,3,7,8}
              STEP 2:- ITERATE STEP 1 FROM NEXT POSITION
                        ARRAY WILL SORT {1,2,3,7,8}        
             */
            //TIME COMPLEXITY O(n^2)
            for(int i=1;i<arr.length-1;i++)//ITERATING UNSORTED PART
                  {
                    for(int j=i-1;j>=0;j--) //ITERATION IN SORTED PART
                        {
                            if(arr[i]<arr[j])//COMAPRISION 
                            {
                                //SWAPPING VALUES
                                int temp=arr[j];
                                arr[j]=arr[i];
                                arr[i]=temp;
                            }
                        }
                }
                //PRINTING ARRAY
                for (int i : arr) {
                    System.out.print(i+"-");
                }
        }
        public static void selectionSort(int[]arr)
        {
             /*
             * SELECTION SORTING
             * int arr[]={7,8,1,3,2}
             *STEP 1:- TAKE INDEX 0 AS SMALLEST
                        COMPARE TO NXT NUMBER IF NEXT NUMBER IS LESS THAN CURRENT SMALLEST THEN SET NEXT NUMBER AS SMALLEST
                        COMPARE SMALLEST TILL END OF ARRAY 
                        NOW SWAP SMALLEST WITH INDEX 0
                        
              STEP 2:- ITERATE STEP 1 FROM NEXT POSITION
                        ARRAY WILL SORT {1,2,3,7,8}        
             */
            //TIME COMPLEXITY O(n^2)
            for(int i=0;i<arr.length-1;i++) //ITERATING ARRAY 
                {   
                    int smallest=i;  //TAKING i AS SMALLEST INDEX
                    for(int j=i+1;j<arr.length-1;j++)      //ITERATION FOR FINDING SMALLEST
                        {
                            if(arr[smallest]>arr[j]) //COMPARISION
                            {
                                smallest=j;          //SETTING j as SMALLEST INDEX                    
                            }                            
                        }
                    int temp=arr[smallest]; //SWAPPING PART
                    arr[smallest]=arr[i];
                    arr[i]=temp;    
                }

                //PRINT SORTED ARRAY
                for (int i : arr) {
                    System.out.print(i+"-");
                }
                System.out.println();

            
            
        }
    public static void main(String[] args) {
        int []arr={7,8,3,1,2,6};
        System.out.println("BUBBLE SORTING");
        bubbleSort(arr);
        System.out.println("SELECTION  SORTING");
         selectionSort(arr);
         System.out.println("INSERT SORTING");
         insertSort(arr);
    }
    
}
