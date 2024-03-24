package DSA;

import java.util.ArrayList;

/* 
 * OUTLINE
 * (A)  DISCUSSIONS AND EXAMPLES ABOUT ARRAYS 
 *      1.WHAT IS AN ARRAY?
 *          -> A STATIC ARRAY IS A FIXED LENGTH CONTAINER CONTAINING n ELEMENTS "indexable" from range [0, n-1].
 *          -> indexable means that each slot/index in the array can be referenced wuth a number.
 *      2.WHEN AND WHERE IS A ARRAY IS USED?
 *          -> STORING AND ACCESSSING SEQUENTIAL DATA
 *          -> TEMPORARILY STORING OBJECTS
 *          -> USED BY IO ROUTINES AS BUFFERS
 *          -> LOOKUP TABLES AND INVERSE LOOKUP TABLES
 *          -> CAN BE USED TO RETURN MULTIPLE VALUES FROM A FUNCTION
 *          -> USED IN DYNAMMIC PROGRAMMING TO CACHE ANSWERS TO SUBPROBLEMS
 *      3.COMPLEXITY
 *              -----------------------------------------------
 *              | FUNCTION    |  STATIC ARRAY |  DYAMIC ARRAY |   
 *              -----------------------------------------------
 *              | ACCESS      |  O(1)         |  O (1)        |
 *              -----------------------------------------------
 *              | SEARCH      |  O(n)         |  O (n)        |
 *              -----------------------------------------------
 *              | INSERTION   |  N/A          |  O (n)        |
 *              -----------------------------------------------
 *              | APPENDING   |  N/A          |  O (1)        |
 *              -----------------------------------------------
 *              | DELETION    |  N/A          |  O (n)        |
 *              -----------------------------------------------    
 *      4.STATIC ARRAY USAGE EXAMPLE
 *             ---------------------------------
 *          A= | 44 | 12 | -5 | 17 | 6 | 0 | 3 |
 *             ---------------------------------
 *                |    |   |     |   |   |   |
 *             ---------------------------------
 *     INDEX() | 0  |  1 | 2  |  3 | 4 | 5 | 6 |
 *             ---------------------------------
 *             
 *              ELEMENTS IN A ARE REFERENCED BY THEIR INDEX.
 *              THERE IS NO OTHER WAY TO ACCESS ELEMENTS IN AN ARRAY.
 *              ARRAY INDEXING IS ZERO-BASED, MEANING THE FIRST ELEMENT IS FOUND IN POSITION ZERO.
 *              A[0] = 44
 *              A[1] = 12
 *              A[2] = -5
 *              A[6] = 3
 *              A[9] = INDEX OUT OF BOUNDS [ERROR]
 * (B)  DYNAMIC ARRAY IMPLEMENTATION DETAILS
 *       
 *      THE DYNAMIC ARRAY CAN GROW AND SHRINK IN SIZE
 *                  A =  {34,4}
 *      A.add(-7)   A =  {34,4,-7}
 *      A.add(34)   A =  {34,4,-7,34}
 *      A.remove(4) A =  {34,-7,34}
 *      
 *      IMPLEMENTATION
 *         -> ONE WAY IS TO USE A STATIC ARRAY!
 *              1. CREATE A STATIC ARRAY WITH AN INITIAL CAPACITY.
 *              2. ADD ELEMENTS TO THE UNDERLYING STATIC ARRAY, KEEPING TRACK OF THE NUMBER OF ELEMENTS.
 *              3. IF ADDING ANOTHER ELEMENT WILL EXCEED THE CAPACITY, THEN CREATE A NEW STATIC ARRAY WITH
 *                 TWICE THE CAPACITY AND COPY THE ORIGINAL ELEMENTS INTO IT.
 *        
 * (C)  CODE IMPLEMENTATION.
 */
public class arrays {
    
    public static void main(String[] args) {
      //STATIC ARRAY
        int []arr={1,2,3,4,5,6};
        System.out.println("VALUE AT INDEX 1 : "+arr[1]);
        System.out.println("ARRAY LENGTH : "+arr.length);

      //DYNAMIC ARRAY
        ArrayList<Integer> d_arr= new ArrayList<>();
        d_arr.add(34);
        d_arr.add(4);
        d_arr.add(-7);
        d_arr.add(34);
        d_arr.remove(1);
    }
        
        
}
