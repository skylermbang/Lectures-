using System;
namespace Youtube
{
    public class Person
    {
        //string _middlesName = "Minsu"; // field 
        public string FirstName { get; set; } // property
        public string LastName { get; set; }  // property
        public string FullName
        {
            get
            {
                return FirstName +" " + LastName;
            }

        }


        public string GetFullName()
        {
            return FirstName + " " + LastName;
        }
    }
}


// can add members (property / methodes /field /constructor
// property - sotres value;
//                acess data from outside
// field - store data inside
// methode - do something

