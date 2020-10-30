using System;

namespace youtube_lecture
{
    class Program
    {
        static void Main(string[] args)

        {
            // ########### lecture of string ###########
            /*
            string name = "cute baby";
            Console.WriteLine( name.ToUpper());
            Console.WriteLine(name.Substring(phrase.IndexOf("baby")));
            */

            // ########### lecture of number ###########
            /*
            Console.WriteLine( 5 % 2 ); // mode  ; and give us the reminder
            int num = 6;
            num++;
            Console.WriteLine(num);
            num--;
            Console.WriteLine(num);

            //using methode
            Console.WriteLine(Math.Abs(-4));    // absolute value 
            Console.WriteLine(Math.Pow(4, 2));  // power   4^2 
            Console.WriteLine(Math.Sqrt(36 ));  // squareroot of 36
            Console.WriteLine(Math.Max(4, 22 ));  // need to find out the biggest
            Console.WriteLine(Math.Min (4, 22));  // find out the smalletst
            Console.WriteLine(Math.Round(4.7));  // round off
            */
            // ########### Math.methode name  ###########

            // ########### Getting input name  ###########
            /*
            string name;
            Console.Write("Type your name :");  //  smae line
            name = Console.ReadLine();
            Console.WriteLine(" Whats upp "+ name);
            Console.Write("Enter your age:");
            string age = Console.ReadLine();
            Console.WriteLine(" Whats upp " + name + " you so old damm you are " + age + "years old");
            Console.ReadLine(); // to keep the terminal
            */
            // ########### Calculator project  ###########
            /*
            Console.Write("Enter your first number :");
            int num4 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter your second  number :");
            double num5 = Convert.ToDouble(Console.ReadLine());
            double num6 = num4 + num5;
            Console.WriteLine("The addition reulst is " + num6);
            Console.ReadLine(); // to keep the terminal
            */

            // ########### Mad Lib game  ###########
            /*

            string adj, celeb, noun;
            Console.Write("pleae enter adj :  ");
            adj = Console.ReadLine();
            Console.Write("pleae enter celebratiy :  ");
            celeb = Console.ReadLine();
            Console.Write("pleae enter any noun :  ");
            noun = Console.ReadLine();
            Console.WriteLine("Scareltt is" + adj);
            Console.WriteLine( celeb + " is hot ");
            Console.WriteLine("I want to eat " +  noun +  " nuggey");
            Console.ReadLine();

            */
            // ########### Array ###########

            /*
            int[] luckynumbers = { 3, 7, 19, 12, 25 }; // array
            string[] friends = new string[5]; // create empty string  ; this array will hold 5 values 


            friends[0] = "kelly";
            friends[1] = "james";


            luckynumbers[0] = 900; // updating 

            Console.WriteLine(luckynumbers[0]);


            Console.ReadLine();

            */
            // ###########  Methods##########

            /*
            SayHi("skyler", 12);
            SayHi("James", 55);
            SayHi("scarlett", 21);

            Console.ReadLine();

            */

            // ###########  Return types ##########

            /*
            Console.WriteLine(CubeNumber(3));

            int test1 = CubeNumber(4);

            Console.WriteLine(test1);
            */

            // #### if ####
            /*
            bool isMale = false;
            bool isTall = false;

            if (isMale && isTall)  // (ismale || isTall) => or operator 
            { 
                Console.WriteLine("You are a tall male");   // if the boolean is ture this will printed 


            } else if (isMale && !isTall)
            {
                Console.WriteLine("Your are short male");
            }
            else if (!isMale && isTall)
            {
                Console.WriteLine("Your are tall female");
            }
            else
            {
                Console.WriteLine("You are short female");  // if the boolean is false this will printed 

            }

            */

            // ###############if ( comparison operator >= ,<= ,< ,>  ,== , != )#####################
            /*
            Console.WriteLine(GetMax(20,100,30));
            /*

            // ############## full function calculator####################

           */

            /*
            Console.WriteLine(" Enter a number : ");
            double number11 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine(" Enter second number : ");
            double number12 = Convert.ToDouble(Console.ReadLine());



            Console.WriteLine(" Enter the operator ");

            string op = Console.ReadLine();
            if (op == "+")
            {
                Console.WriteLine(number11 + number12);

            }
            else if (op == "-")
            {
                Console.WriteLine(number11 - number12);
            }
            else if (op == "*")
            {
                Console.WriteLine(number11 * number12);
            }
            else if (op == "/")
            {
                Console.WriteLine(number11 / number12);
            }
            else
            {
                Console.WriteLine("Invailed operator");
            }
            */

        }


        /*
    static int GetMax(int numb1, int numb2, int numb3 )
    {
        int result10;

        if (numb1 >= numb2 && numb1 >= numb3)
        {
            result10 = numb1;
        }
        else if (numb2 >= numb1 && numb2 >= numb3)
        {
            result10 = numb2;
        }
        else
        {
            result10 = numb3;
        }
        return result10;

        */
    }

    /*
    static void SayHi(string fname, int age)  // paragmeters inside pass down the inforamtion
    {

        Console.WriteLine(" Wat sup bruh   " +  fname + "you fucking old like "  + age) ;
    }
    */


    /*
    static int CubeNumber(int fnumber)
    {
        int result = fnumber * fnumber * fnumber;
        return result;
    }

    */
}

 