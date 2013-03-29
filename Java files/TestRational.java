import java.util.Scanner;


public class TestRational
{ 

    public static void main (String [] arg) 
    {
	
	long kill=1;   //set up menu loop ends when kill =0
	while(kill!=0) {  //get choices 
	 	   
System.out.println("Please input --1-- to multiply two numbers, --2-- divide, --3-- add, --4-- subtract,--5-- test for equality, --6-- reduce the first fraction, --0--quit");
	 
            Scanner input =new Scanner(System.in);
	    long i= input.nextLong();
	
		{ 
		    System.out.println("Please enter the first numerator");
             	      Scanner i2 =new Scanner(System.in);
 		      long n1= i2.nextLong();

		    System.out.println("Please enter the first denomenator.");
		      Scanner i3 =new Scanner(System.in);
		      long d1= i3.nextLong();
		   
                    System.out.println("Please enter the second numerator");
             	      Scanner i4 =new Scanner(System.in);
 		      long n2= i4.nextLong();

		    System.out.println("Please enter the second denomenator.");
		      Scanner i5 =new Scanner(System.in);
		      long d2= i5.nextLong();
//declare or create any necessary variables		 
		      Rational nx = new Rational(n1,d1);
         	      Rational ny = new Rational(n2,d2);
		      Rational rs=nx.subtract(ny); Rational rm=nx.multiply(ny);
		      Rational ra=nx.add(ny);  Rational rd=nx.divideby(ny);
		      Rational nxc=nx; Rational nyc=ny; /*make copy of nx cause reduce changes it. */
		      nxc.reduce();  nyc.reduce();
                      Boolean b=nxc.equals(nyc);  


//implement function based on menu choice.  All pretty much work the same.  Output original choices, as well.

      if (i==1)
	  {long nu=rm.getNumerator(); long de=rm.getDenominator();
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "*("+ny.getNumerator()+"/"+ny.getDenominator()+")="+nu+"/"+de); }


      if (i==2)
	  {long nu=rd.getNumerator(); long de=rd.getDenominator();
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "/("+ny.getNumerator()+"/"+ny.getDenominator()+")="+nu+"/"+de); }

      if (i==3)
	  {long nu=ra.getNumerator(); long de=ra.getDenominator();
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "+("+ny.getNumerator()+"/"+ny.getDenominator()+")="+nu+"/"+de);  }

      if (i==4)
	  {long nu=rs.getNumerator(); long de=rs.getDenominator();
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "-("+ny.getNumerator()+"/"+ny.getDenominator()+")="+nu+"/"+de) ;}





      if (i==5)
	  {if (b=true) 

		  { System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "="+ny.getNumerator()+"/"+ny.getDenominator()+" (equal)");}
          else	 
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")"+ "!="+ny.getNumerator()+"/"+ny.getDenominator()+" (not equal)" );}

      if (i==6)
	  {long nu=nxc.getNumerator(); long de=nxc.getDenominator();
	      System.out.println("("+nx.getNumerator()+"/"+nx.getDenominator()+")="+nu+"/"+de);}


     
      i=0;  //reset menu choice i.  probably not necessary.

		

		System.out.println("Shall we dance the dance again?  0--No.  Any other number--Yes.");
	        Scanner z= new Scanner(System.in);
		kill=z.nextLong();
	} //end kill-loop
    } //end main
    } } //end class