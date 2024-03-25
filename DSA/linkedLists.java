package DSA;
/*
 *  
 * OUTLINE
 * (A)  DISCUSSIONS AND EXAMPLES ABOUT SINGLY & DOUBLY LINKED LISTS
 *      1.WHAT IS A LINKED LIST?
 *          A LINKED LIST IS A SEQUENTIAL LIST OF NODES THAT HOLD DATA WHICH POINT TO OTHER NODES ALSO CONTAINING DATA.
 * 
 *      2.WHERE ARE LINKED LISTS USED?
 *          -> USED IN MANY List, Queue & Stack IMPLEMENTATIONS.
 *          -> GREAT FOR CREATING CIRCULAR LISTS.
 *          -> CAN EASILY MODEL REAL WORLD OBJECTS SUCH AS TRAINS.
 *          -> USED IN SEPERATE CHAINING, WHICH IS PRESENT CERTAIN Hashtable IMPLEMENTATIONS TO DEAL WITH HASHING COLLISIONS.
 *          -> OFTEN USED IN THE IMPLEMENTATIONS OF ADJACENCY LISTS FOR GRAPHS.
 *      
 *       3.TERMINOLOGY
 *         HEAD:    THE FIRST NODE IN A LINKED LIST
 *         TAIL:    THE LAST NODE IN A LINKED LIST
 *         POINTER: REFERENCE TO ANOTHER NODE
 *         NODE:    AN OBJECT CONTAINING DATA AND POINTERS
 * 
 *      4.SINGLY LINKED vs. DOUBLY LINKED LIST
 *          -> SINGLY LINKED LISTS ONLY HOLD A REFERENCE TO THE NEXT NODE. IN THE IMPLEMENTATION YOU ALWAYS MAINTAIN A REFERENCE
 *             TO THE HEAD TO THE LINKED LIST AND A REFERENCE TO THE TAIL FOR QUICK ADDITIONS/REMOVALS.
 *          -> WITH A DOUBLY LINKED LIST EACH NODE HOLDS A REFERENCE TO THE NEXT AND PREVIOUS NODE. IN THE IMPLEMENTATION YOU
 *             ALWAYS MAINTAIN A REFERENCE TO THE HEAD AND THE TAIL OF THE DOUBLY LINKED LIST TO DO QUICK ADDITIONS/REMOVALS FROM
 *             BOTH ENDS OF YOUR LIST.
 *                                  PROS                        CONS
 *                         ------------------------------------------------------
 *          SINGLY LINKED |  USES LESS MEMORY         |   CANNOT EASILY ACCESS  |
 *                        | SIMPLER IMPLEMENTATION    |   PREVIOUS ELEMENTS     |
 *                        ------------------------------------------------------- 
 *          DOUBLY LINKED |  USES LESS MEMORY         |   CANNOT EASILY ACCESS  |
 *                        | SIMPLER IMPLEMENTATION    |   PREVIOUS ELEMENTS     |
 *                        -------------------------------------------------------                  
 * (B)  IMPLEMENTATION DETAILS
 *      1.HOW TO INSERT NEW ELEMENTS
 *           
 *      2.HOW TO REMOVE ELEMENTS
 * 
 * (C) COMPLEXITY ANALYSIS
 *               -------------------------------------------------------
 *              | FUNCTION           |  SINGLY LINKED |  DOUBLY LINKED |   
 *              --------------------------------------------------------
 *              | SEARCH             |  O(n)          |  O (n)         |
 *              --------------------------------------------------------
 *              | INSERT AT HEAD     |  O(1)          |  O (1)         |
 *              --------------------------------------------------------
 *              | INSERT AT TAIL     |  O(1)          |  O (1)         |
 *              --------------------------------------------------------
 *              | REMOVE AT HEAD     |  O(1)          |  O (1)         |
 *              --------------------------------------------------------
 *              | REMOVE AT TAIL     |  O(n)          |  O (1)         |
 *              --------------------------------------------------------
 *              | REMOVE IN MIDDLE   |  O(n)          |  O (n)         |
 *              --------------------------------------------------------
 */
public class linkedLists {
    public static void main(String[] args) {
        
    }
}
