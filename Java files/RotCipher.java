import java.io.*;
import java.util.*;

public class RotCipher
{
    private int num; //number
    private char let; //letter

    //constructors for Rotation 
    public RotCipher(int rotation)
    {num = rotation;}
    public RotCipher()
    {num=13;}

    //accessor for the amount it has rotated
    public int rotation()
    {return num;}


    // apply rot cypher to string s, return resultant string
    //I use modular arithmetic to get base 26 (alphabet), 
    //however, you must add 97 or 65, depending, to make sure
    //you wind up in the original range.  
    public String encrypt(String s)
    {
     String words="";
     //int i=0;
     int length=s.length(); 
     int e=0;
     for (int i=0;i<=length;i++)
	       {char result=s.charAt(i);
		   int n=result;
		   if ((n>=97) && (n<=122)) 
		       {n= (((n+this.num-97)%26)+97);} //wrap around lower case ascii
                   if ((n>=65)&&(n<=90))
		       {n= (((n+this.num-65)%26)+65);} //wrap uppercase
		   char  ch=(char)((int)n);
                words=words+ch;
                //i++;
              }
    return words;
    }


    //apply negative rotation to s.  same as above but +Rotation -> (-1)Rotation
    public  String decrypt(String s)
    {
     String words="";
     // int i=0;
     int length=s.length(); 
     for (int i=0; i<=length; i++)
	 {char result=s.charAt(i);
		 
      		   int n=result;
		   if ((n>=97) && (n<=122)) 
		       {n= (((n+this.num*(-1)-97)%26)+97);} //wrap around lower case ascii
                   if ((n>=65)&&(n<=90))
		       {n= (((n+this.num*(-1)-65)%26)+65);
		       }   //wrap uppercase
		   char ch=(char)((int)n);
                words=words+ch;
		//                i++;
              }
    return words;
    }


    //encrypt a whole file, scanning line by line.  
    //end when there are no more lines.
    public void encryptFile(String infile, String outfile) throws IOException
    {
	throws InputMismatchException;
	Scanner sc= new Scanner (infile);
	PrintStream pw= new PrintStream (outfile);
	while ( sc.hasNextLine()) 
	    {
		pw.println(encrypt(sc.nextLine()));
	    }
	pw.close();
    }

    //decrypt a whole file, scanning line by line...
    public  void decryptFile(String infile, String outfile) throws IOException
    {
	throws InputMismatchException;
	Scanner sc= new Scanner (infile);
	PrintStream pw= new PrintStream (outfile);
	while ( sc.hasNextLine()) 
	    {
		pw.println(decrypt(sc.nextLine()));
	    }
	pw.close();


    }


	

}