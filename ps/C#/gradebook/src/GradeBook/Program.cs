using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            /*var p = new Program();
            Program.Main(args);*/  //infinite loop

            var book = new Book("Skyler's Grade book");
            book.AddGrade(89.1);
            book.AddGrade(90.5);
            book.AddGrade(77.5);
            book.ShowStatistics();
        }
    }
}


