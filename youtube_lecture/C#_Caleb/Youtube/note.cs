/*
 * 
  you can ren the code from CLI
by "dotnot run "




### lecture 3 ###

using System;

namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("i am skyler!");
            System.Console.WriteLine("blach"); // this is the full qulified name
        }
    }
}


//  this is the basci structure:
name space -> classes -> members -> methode -> statment


#### lecture 4 ####


static -  directly call
nostatic -  have to create instance before call it

       if you want to creat instance :
                        object test = new object();
                        test. methode name





#### lecture 5 ####


namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Program myProgram = new Program();
            myProgram.Print();
         }

        void Print()
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("i am skyler!");
            System.Console.WriteLine("blah"); // this is the full qulified name
        }
    }
    
}

#### lecture 6 ####

argument

#### lecture 7 ####

user input

 static void Main(string[] args)  //methode contains a block of code
        {
            Console.WriteLine("yo what's your input?");
            var input = Console.ReadLine();
            Console.WriteLine("Your input is : {0}", input);
            Console.WriteLine($"Your input is : {input}");

        }

#### lecture 8 ####

variable




















*/