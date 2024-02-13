public class recursionPoblems {

    public static void reverseString(String str)
    {
        StringBuilder sb=new StringBuilder("");
        for (int i=str.length();i>0;i--) {
            sb.append(str.charAt(i-1));
        }
       System.out.println(sb);
    }
    public static void main(String[] args) {
       reverseString("hello");
       
    }
    
}
