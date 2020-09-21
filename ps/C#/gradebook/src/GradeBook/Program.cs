using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book();

            double avg_grades;
            var grades = new List<double>() { 1.1, 2.2, 3.3, 4.4 };
            grades.Add(56.1);
            // list and array very similary but list let me add thingy more free 
            var results2 = 0.0;
            foreach (double number in grades)
            {
                results2 += number;
            }
            float i = grades.Count;
            Console.WriteLine(i);
            avg_grades = results2 / grades.Count;
            Console.WriteLine(results2);
            Console.WriteLine($"The average grade is {avg_grades:N1} !");

        }
    }



