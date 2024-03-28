package DSA;

import java.util.Stack;

/*
 *  OUTLINE
 * (A)  DISCUSSIONS AND EXAMPLES ABOUT STACKS
 *      1.WHAT IS STACK?
 *        -> A STACK IS A ONE-ENDED LINEAR DATA STRUCTURE WHICH MODELS A REAL WOIRLD STACK BY HACING TWO
 *           PRIMARY OPERATIONS, NAMELY "PUSH" & "POP".
 *
 *      2.WHEN AND WHERE IS A STACK USED?
 *        -> USED BY UNDO MECHANISMS IN TEXT EDITORS.
 *        -> USED IN COMPILER SYNTEX CHECKING FOR MATCHING BRACKETS AND BRACES.
 *        -> CAN BE USED TO MODEL A PILE OF BOOKS OR PLATES.
 *        -> USED BEHIND THE SCENES TO SUPPORT RECURSION BY KEEPING TRACK OF PREVIOUS  FUNCTION CALLS.
 *        -> CAN BE USED TO DO A DEPTH FIRST SEARCH(DFS) ON A GRAPH.
 *      3.COMPLEXITY ANALYSIS
 *              ---------------------------------------
 *              | FUNCTION           |  STACKS        |  
 *              ---------------------------------------
 *              | PUSHING            |  O(1)          |  
 *              ---------------------------------------
 *              | POPPING            |  O(1)          |  
 *              ---------------------------------------
 *              | PEEKING            |  O(1)          |  
 *              ---------------------------------------
 *              | SEARCHING          |  O(n)          |  
 *              ---------------------------------------
 *              | SIZE               |  O(1)          |  
 *              ---------------------------------------        
 * (B) IMPLEMENTATION DETAILS
 *      1.PUSHING ELEMENTS ON STACK
 *      2.POPPING ELEMENTS FROM STACK
 * (C) CODE IMPLEMENTATION
 */
public class stacks {
    static String getRevBracString(String str)
    {
        switch (str) {
            case "{":
                return "}";
            case "[":
                    return "]";
            case "(":
                    return ")";       
            default:
                break;
        }

        return "";
    }
    public static void main(String[] args) {
        Stack<String> stc =new Stack<>();
        stc.push("onion");
        stc.push("celery");
        stc.push("watermelon");
        stc.pop();
        stc.push("lettuce");



        /*  EXAMPLE- BRACKETS
        PROBLEM: GIVEN S STRING MADE UP OF THE FOLLOWING BRACKETS: ()[]{},
        DETERMINE WHETHER THE BRACKETS PROPERLY MATCH.
        [{}]         ->     VALID
        [()()]       ->     VALID
        {]           ->     INVALID
        [()]))()     ->     INVALID
        []{}({})     ->     VALID
        */
      //  Stack<String> bracStack=new Stack<>();
        String brac ="[{}]";
       // String curBrac="";
        if (brac.equals(null)) {
            System.out.println("INVALID");
            return;
        }
        for (int i = 0; i < brac.length(); i++) {
                 
            if(!stc.isEmpty())
                    stc.push(brac.substring(i, i));
                //   curBrac=brac.substring(i, i);     
        }
    }
    
}
