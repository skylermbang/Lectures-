using System;
namespace Youtube
{
    public abstract class User1
    {
        public User1()
        {
           Console.WriteLine("Creating User");
        }

        public User1(string firstname, string lastname)

        {
            FirstName = firstname;
            LastName = lastname;
        }


        public bool Verified { get; set; } = false; //verifiy default false;
      
        public string FirstName { get; }
        public string LastName { get; }
        public string FullName
        {

            get
            {
                return FirstName + " " + LastName;

            }
        }


        public abstract void HelloToConsole();
        


    }
}
