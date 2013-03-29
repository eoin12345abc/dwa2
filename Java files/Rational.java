public class Rational
{
  
  private long num; private long den;

    //constructors of the Rational class
    
    public Rational()
    { num=0; den=1;} 
    public Rational(long num)
    { this.num = num;  den=1;} 	
    public Rational(long num, long den)
    { this.num = num;  this.den=den;}

   


    public static void main(String args[])
    {
	//declare neccesary variables   
    Rational r1=new Rational(); Rational r2=new Rational(); 
    Rational rs=r1.subtract(r2);
    Rational rm=r1.multiply(r2);
    Rational ra=r1.add(r2);
    Rational rd=r1.divideby(r2);
    }

    long getNumerator() 
      {return num;}
    long getDenominator() 
      {return den;}
    //simple arithmetic on fractions.  Creating common denominator, etc...  Use this function to acess num
    // or denom as neccesary.    
    Rational subtract(Rational r2)
      {Rational rs=new Rational();
	  rs.num = this.num*r2.den-this.den*r2.num; 
	  rs.den =this.den*r2.den;
	  return rs;  }

    Rational add(Rational r2)
      {Rational ra=new Rational();
	  ra.num = this.num*r2.den+this.den*r2.num; 
	  ra.den =this.den*r2.den;
	  return ra; }
    
    Rational multiply(Rational r2)
    {Rational rm=new Rational();
	  rm.num = this.num*r2.num;
          rm.den = this.den*r2.den;
	  return rm;}


    Rational divideby(Rational r2)
      {Rational rd=new Rational();
	  rd.num = this.num*r2.den; 
	  rd.den =this.den*r2.num;
	  return rd;}
    
     public String toString()
    { return  this.num+"/"+this.den;}

    public Double toDouble()
    {   double nu=this.num;  double de=this.den;
        double f=nu/de; 
        return f;}
    
    public boolean equals(Object other)
    {   if ( ! (other instanceof Rational))return false; 
	  Rational rother=(Rational) other; 
        return true;}

    public void reduce()
    {double n= this.num; double d=this.den;
	double n1=n; double d1=d; 

	//logical expression for both not reduced and not the same
	
	while( ( ( n%n1 != 0)||(d%d1 !=0) )&&(n1!=d1))  
	    {while(n%n1 !=0) {n1=n1-1;} 
	     while(d%d1 !=0) {d1=d1-1;}  
	     while(n1!=d1)
		 {if (n1>d1) n1=n1-1; else d1=d1-1;} 
	    }
 
  /*   For loops are hard.  need help.  I tried this but got errors... 
         {for(double nx=n1;(n%nx != 0); nx--); 
		for(double dx=d1;(d&dx !=0); dx--);
		while (dx != nx)
		    if (dx >nx) d1=dx-1;
		    else n1=nx-1;		
		    }*/
	n=n/n1 ;  d=d/d1;
    }

}


