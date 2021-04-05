using System;
using System.Collections.Generic;

namespace Youtube
{
    public class User
    {

        string _firstName = "SKYLER";
       //private string _firstName; //  
       //public string FirstName; //
        public string FirstName {
            get
            {

                return _firstName.ToLower();



            }
            set
            {
                _firstName = value;
            }

        }  // proper way to handle data ;
        public string LastName  { get; set; }  // proper way to handle data ;
        
        public string Fullname2
        {
            get
            {
                return FirstName +  LastName;
            }
        }

     

        public string Fullname(int number)
        {

            string message = "";
            for (int i = 0; i < number; i++)
            {
                message += FirstName + " " + LastName + "\n";
               
            }
            return message;
        }


     

        public static void Waka(User user)
        {
            Console.WriteLine("Static methode , Print the user : ");
            user.Fullname(1);
        }

        /*
        public string Output()
        {
            return "My name is" + Fullname2;
        }
        */
        public string Output(int times= 3)
        {
            string msg = "";
            for(int i=0; i< times; i++)
            {
                msg += Fullname2 + "\n";
            }
            return msg;
        }



        public static void PrintUsers(List<User> users)
        {
            foreach (User user in users)
            {
                Console.WriteLine(user.Output(1));

            }
        }

        public static int Find(List<User> users, string fullName)
        {
            
                for(int i =0; i<users.Count; i++)
                {

                    if (users[i].Fullname2 == fullName)
                    {
                        return i;
                    }
                }
                return -1;
            
        }


        public static int Find(List<User> users, User user)
        {
            for (int i = 0; i < users.Count; i++)
            {

                if (users[i].Equals(user))
                {
                   }
            }
            return -1;


        }



        public override int GetHashCode()
        {
            return Fullname2.GetHashCode();
        }
        // if two objects have same data( first name / last name) in theory they are equal;
        // 



        public override string ToString()
        {
            return Fullname2;
        }

        public override bool Equals(object obj)
        {

            if (Fullname2 == ((User)obj).Fullname2) return true;  // important line  this take the User object;

            return false;
        }




        public static User GetUserFromList(List<User> users, User user)
        {
            foreach(User potato in users)
            {
                if (potato.Equals(user))
                {
                    return potato;
                }
            }
            return null;
        }
    }
}
