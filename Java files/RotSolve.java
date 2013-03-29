import java.util.*;
import java.io.*;


public class RotSolve
{
    //this is a method to count # of e`s in a string
    private static int count( String s)
    {
	int length =s.length();
	int e=0;
	for (int i=0;i<=length;i++)
	    {
		char result =s.charAt(i);
		int n=result;
		if ((n==69)||(n==101))  //if ascii code is e or E, count + 1
		    {e=e+1;}	
       
	    }
        return e;
    }

    //this is a method to rename x.something files to x.dec files
    private static String renamez( String s)
    {
	String copyz= null;
	int length = s.lastIndexOf(".");
	for(int j=0; j<length; j++)
	    {copyz = copyz +s.charAt(j);}
	return (copyz+".dec");
    } 

    
public static void main (String[] args) throws IOException
{

    String inFileName=args[0];
    String outFileName=renamez(inFileName);
    Scanner sca= new Scanner ( new File(inFileName));

    //here we make a string copy of the contents of file
    String theCopy=null; 
    while (sca.hasNextLine())
      {
	  theCopy=theCopy+(sca.nextLine());
      }

    //here we test out all 26 rotations for decryption.
    //we see which one has the most e`s.
    //(loop)...
    //then we set the decrypt number correspondingly.
     int d=0; int f=0;
     for (int i=0; i<26;i++)
       {RotCipher r = new RotCipher(i);
	   //r= RotCipher(i);
	   d=count(r.decrypt(theCopy));
	   if (d>f)
	       {f=d;}
       }
   RotCipher r= new RotCipher(f);

   //This decrypts the file again, with the proper key,
   //and saves is as originalName.dec
   r.decryptFile(theCopy,outFileName);


}
    
}