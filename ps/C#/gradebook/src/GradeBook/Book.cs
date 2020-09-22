using System.Collections.Generic;

namespace GradeBook
{

    class Book
    {
        public Book()
        {
            grades = new List<double>;
        }
        pubulic void AddGrade(double grade)
        {
            grades.Add(grade);
        }
    }
    List<double> grades;

}