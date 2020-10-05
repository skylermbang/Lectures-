using System;
using Xunit;

namespace GradeBook.Tests
{
    public class BookTests
    {
        [Fact]
        public void Test1()
        {
            //arange
            var book = new Book("");
            book.AddGrade(89.1);
            book.AddGrade(90.5);
            book.AddGrade(77.3);


            //act
            var restult = book.GetStatistics();



            //assert
            Assert.Equal(85.6, restult.avg);



        }
    }
}
