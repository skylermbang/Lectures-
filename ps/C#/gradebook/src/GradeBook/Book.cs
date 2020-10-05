using System.Collections.Generic;
using System;

namespace GradeBook
{

    pubulic class Book
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

        public Statistics GetStatistics()
        {
            var result = new Statistics();
            result.Average = 0.0;
            result.High = double.MinValue;
            result.Low = double.MaxValue;

            foreach (var grade in grades)
            {

                result.High = Math.Max(grade, result.High);
                result.Low = Math.Min(grade, result.Low);
                result.Average += grade;

            }
            result.Average /= grades.Count;

            return result;
        }



        //list here 
        private List<double> grades;//cant use var , using System.Collections.Generic;
        private string name;
    }

}