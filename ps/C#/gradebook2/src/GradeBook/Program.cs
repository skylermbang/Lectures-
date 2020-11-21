using System;
using System.Collections.Generic;



namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {

            var grades = new List<double>() { 12.7, 22.7, 32.7 };
            grades.Add(56.1);

            //grades.ForEach(Console.WriteLine); show all the list 
            var result = 0.0;
            foreach (var grade in grades)
            {
                result += grade;
            }

            double avg = result / grades.Count;
            System.Console.WriteLine($"the average score is {avg}");
            System.Console.WriteLine(result);





            /*
            double x = 12.4;
            double y = 11.4;
            double z = x + y;
            
            Console.WriteLine("x + y :" + z);

            if (args.Length > 0)
            {
                // Console.WriteLine("Hello" + args[0] + "!");
                Console.WriteLine($"Hello  {args[0]} !");
            }
            else
            {
                Console.WriteLine($"Hello  IDK !");
            }
            */
        }
    }
}
