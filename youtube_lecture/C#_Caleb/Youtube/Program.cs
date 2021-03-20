using System;

namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {

            int[] grades = new int[5]; // 5 element in a single array

            int[,] grades2 = new int[3, 4]; // 3row and 4colums
            grades2[0, 2] = 5;
            Console.WriteLine(grades2[0, 2]);


            int[,] grades3 = new int[3, 4] 
            {
                { 1,2,3,4},
                { 5,6,7,8},
                { 9,10,11,12}
            };

            Console.WriteLine(grades3[1, 3]);

            int[][] grades4 =   // jagged array
             {
                new int[]{1,2 },
                new int[]{3,4,5,6,7 },
                new int[]{ 8,9}
            };
            Console.WriteLine(grades4[1][4]);
        }
      
        

    }

}

//  
//  
//  
//          
//        
//         
