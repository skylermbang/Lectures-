using System;

namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Console.WriteLine("yo what's your input?");
            var input = Console.ReadLine();
            Console.WriteLine("Your input is : {0}", input);
            Console.WriteLine($"Your input is : {input}");

        }

    }
    
}

// dotnet run -- -h // flag 

