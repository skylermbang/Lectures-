using System;
using System.Collections.Generic;

namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Program myProgram = new Program(); // instantiate the class
            myProgram.doSomething(); // how to use the methode
        }    


        public void doSomething()
        {
            Student Skyler = new Student("GUGU", "GAGA");
            //Skyler.FirstName = "Skyler";
            //Skyler.Verified = true;
            //Console.WriteLine(Skyler.Fullname);
            //Skyler.HelloToConsole();


            //Teacher Youme = new Teacher();
            //Youme.FirstName = "Youme";

            //List<User1> users = new List<User1>() { Skyler, Youme };

            //foreach (User1 u in users)
            //{
            //   u.HelloToConsole();
            //}


            Skyler.HelloToConsole();



        }        
    }
     
}

//  
//  
//  
//          
//        
//         
