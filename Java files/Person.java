public class Person
{
    private String first;  private String last; 
    public Person(String firstname, String lastname)
    {first=firstname;
     last=lastname; 
    }

    public String getFirstName()  {return first;}
    public String getLastName() {return last;}
    
    public boolean equals(Object other)
    { if ( ! (other instanceof Person)) return false;
	Person pother=(Person) other;
	return ((this.first).equals(pother.first)&&(this.last).equals(pother.last)); 	
    }
    public String toString()
	    {String fullname=(first+" "+last);
		return fullname;
	    } 

//String pf=pother.getFirstName(); 
	//String pl=pother.getLastName();
	//String of=other.getFirstName();
	//String ol=other.getLastName();
	///if ( ((this.lastname).equals(pl)&&(this.firstname).equals(pf))) 
	//  return true;
	//   else return false;

    
    //    public void main(String args[])
    //{}
    


}