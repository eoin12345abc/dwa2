public class BankAccount 
{
    private Person own=new Person();
    private long bal,rat;
    private double dep,wit;
    public BankAccount(Person owner, double balance, double rate) 
    {own=owner; bal=balance; rat=rate;

    }

    public BankAccount( BankAccount other)
    {   BankAccount.own=other.own;
	BankAccount.bal=other.bal;
	BankAccount.rat=other.rat;	
    }

    public void Deposit(double amount)
    {amount=amount+dep;
    }
    
    public void withdraw(double amount)
    {amount=amount-wit;
    }

    public void addMonthlyInterest()
    {amount=amount*(1+rat);
    }

    public Person  getOwner()
    {return owner;
    }

    public double getBalance()
    {return bal;
    }

    public double getRate()
    {return rat;
    }

    public void setRate(double rate)
    {Scanner input= new Scanner(System.in);
	rate=input.nextDouble();
    }

    public String toString()
    {String info;
	String rbal=String.format("%.2g%n",Bankaccount.getBalance());
	info=(
	      "Name: "+owner.toString()+"/n"+
	      "Account Balance: $"+rbal+"/n"+
	      "Annual Interest Rate: "+BankAccount.getBalance()+" %");
	return info;
}

    public boolean equals(Object other)
    { if (! (other instanceof BankAccount)) return false;
	BankAccount bother=(BankAccount) other;
	return (((this.own).equals(bother.own))&&
                ((this.bal).equals(bother.bal))&&
                ((this.rat).equals(bother.rat)))
		 //test if same owner, balance, interest
    }

public static void main(String args[])
  {



  }


}