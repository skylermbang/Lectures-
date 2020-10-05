using System.Collections.Generic;
using System;

namespace GradeBook
{

    class Book
    {

        public Book(string name)  //should have same name as the class and no void
        {
            grades = new List<double>();
            this.name = name; // implicit variable, refer to the object currently operate on 
        }

        public void AddGrade(double grade)
        {
            //List<double> grades;  this is only the local variable  so it should be out side 
            grades.Add(grade);

        }

        public void ShowStatistics()
        {
            var result = 0.0;
            var highGrade = double.MinValue;
            var lowGrade = double.MaxValue;

            foreach (var number in grades)
            {

                highGrade = Math.Max(number, highGrade);
                lowGrade = Math.Min(number, lowGrade);
                result += number;

            }
            result /= grades.Count;
            Console.WriteLine($"The average grade is {result:N1}");
            Console.WriteLine($"The lowest grade is {lowGrade:N1}");
            Console.WriteLine($"The highest grade is {highGrade:N1}");
        }



        //list here 
        private List<double> grades;//cant use var , using System.Collections.Generic;
        private string name;
    }

}