using System;
namespace Youtube
{
    public class Student : User1, ITalk
    {

        public Student()
        {
            Console.WriteLine("Creating Student");
        }

        public Student(string firstname, string lastname) : base(firstname, lastname)

        {
            

        }

      
        /*
        public override void HelloToConsole()
        {
           Console.WriteLine(" Yo I an student name :{0}?", FullName );
        }
        */

    }

}
