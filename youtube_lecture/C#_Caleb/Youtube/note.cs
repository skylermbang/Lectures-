/*
 * 
  you can ren the code from CLI
by "dotnot run "




### lecture 3 ###

using System;

namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("i am skyler!");
            System.Console.WriteLine("blach"); // this is the full qulified name
        }
    }
}


//  this is the basci structure:
name space -> classes -> members -> methode -> statment


#### lecture 4 ####


static -  directly call
nostatic -  have to create instance before call it

       if you want to creat instance :
                        object test = new object();
                        test. methode name





#### lecture 5 ####


namespace Youtube// a namespace - used for organizatoin 
{
    class Program // class -has member (ex. methode)
    {
        static void Main(string[] args)  //methode contains a block of code
        {
            Program myProgram = new Program();
            myProgram.Print();
         }

        void Print()
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("i am skyler!");
            System.Console.WriteLine("blah"); // this is the full qulified name
        }
    }
    
}

##### variable ####

argument
// dotnet run -- -h // flag



user input

 static void Main(string[] args)  //methode contains a block of code
        {
            Console.WriteLine("yo what's your input?");
            var input = Console.ReadLine();
            Console.WriteLine("Your input is : {0}", input);
            Console.WriteLine($"Your input is : {input}");

        }



variable

//  variable - store some value
// literal - actual value 
// identifier - what we call the variable 
// variable start with _ or character ;  var, int ,string ,
// operator  + - * %  work on operands
// operands the thigns that the operator works on





//  wehen we create variable ;
//  declaration +  initializatoin 
//  you cant use un initailized variable;
//        int? z = null;




data type

  // simple type 
            int a = -5;
            uint b = 5;
            char c = 'C'; //charcter
            float d = 5.5F;
            double e = 5.5; //most used 
            decimal f = 5.5M; //more precisie
            bool g = true;

            //reference type 
            string h = "hello"; 



/  data type : value type ,
//  array  -reference type 
//  
//          int[] a = { -5 };
            int[] b = a;

            Console.WriteLine(a[0]);

            Console.WriteLine(b[0]);


            b[0] = 10;

            Console.WriteLine(a[0]);

            Console.WriteLine(b[0]);




static void Main(string[] args)  //methode contains a block of code
        {
            int[] a = { -5 };
            Test1(a);
            Console.WriteLine(a[0]);
            int b = 5;
            Test2(b);
            Console.WriteLine(b);


        }

        static void Test1(int[] b)
        {
            b[0] = 100;
        }

        static void Test2(int b)
        {
            b = 100;
        }

simply reference type can be change cuz they are point to one signle thing
while the value type is one thing 




C# using .NET  which is like libray
any language using .NET , they are all sharing this libarary ;

built in type

int = int32





 numeric data type

         unit.Max
         int.Max  /  int. Min
         long.MaxValue


 numbers after decimal ;
floating point data type .
becareful the percision of the number value ;  search percision of double ;


float ;
             float  x= 5.5f; // have to put "f"
                             // when you have limited memory; 
double ;
             double x = 5.5; // dont nedd f
                             // most of time you use this
              double a = double.Nan; // check if this is not a number  NaN;


'''
            double a = double.NaN;
            Console.WriteLine(double.IsNaN(a));

            double b = 10.5;
            Console.WriteLine(double.IsNaN(b));

'''

decimal ;    decmial x = 10.5M; // percisie like money 

many methode  like decimal.xx  double.xx ...


Math object

double x = 50.6;
double y = 30.2;
         
Console.WriteLine(Math.Round(x));
Math.Round(y);
Console.WriteLine(Math.Round(y));
Math.Floor(x); //  always round down
Math.Ceiling(x); // always round up

Math.Max(y, x);// choose bigger one ;
Math.Sign(x) // postive = 1  negative = -1 0 = 0;


character data type

char letter = 'a' ; // single quote is for character
                    // from AsciiTable
                    so you can  use it with int interchangleale
      char letter = (char) 97;  character 0-255; 

      int  x = 'a' ; // fine
      int y = '\t' // space 

string data type


string name = "Skyler";
string name2 = name;
name += " Youme";
Console.WriteLine(name);
Console.WriteLine(name2);


char[] characters = { 'h', 'e', 'l', 'l', 'o' };
string greeting = new string(characters);
Console.WriteLine(greeting);


property : give us value;
name.Length: return how many

{get : set} :get  only read ;
            :set  only write ;


 string name = "Skyler";

string name2 = name;
name += " Youme";
Console.WriteLine(name);
Console.WriteLine(name2);


char[] characters = { 'h', 'e', 'l', 'l', 'o' };
string greeting = new string(characters);
Console.WriteLine(greeting);

Console.WriteLine(name.Length);
Console.WriteLine(name.CompareTo("Skyler Bang"));  // 0 is same 1,-1 is not sam e  

string hi = "hi this is skyler";

string [] abc = hi.Split(' ');
Console.WriteLine(abc[0]);
//name.IndexOf( variable , nubmer );
//name.Remove();


string Escape Sequence ;
    string name = "hello \\ world \"skyler\" ";
    Console.WriteLine(name);

    string name = @"hello  world ""skyler"" ";        

    \n : new line 







###  Lecture 19 Creating Basic Class, Methode  #####



New class -

[person class]

public class Person
    {
        string _middlesName = "Minsu"; // field 
        public string FirstName { get; set; } // property
        public string LastName { get; set; }  // property
        public string FullName
        {
            get
            {
                return FirstName +" " + LastName;
            }

        }


        public string GetFullName()
        {
            return FirstName + " " + LastName;
        }
    }

// can add members (property / methodes /field /constructor
// property - sotres value;
//                acess data from outside
// field - store data inside
// methode - do something




[program.cs]

 static void Main(string[] args)  //methode contains a block of code
        {
            Person person = new Person(); // create new object of type (person type)
            person.FirstName = "Skyler";
            person.LastName = "Bang";



            Console.WriteLine(person.GetFullName());

            Console.WriteLine(person.FullName);
        }




### control logic ###

using if + loop for name guessing game:
Person potato = new Person();
            potato.FirstName = "Skyler";
            potato.LastName = "Bang";

            

            Console.WriteLine("Guess the name : ");
            string nameGuess = Console.ReadLine();

            bool checker = false;
            while (checker == false)
            {
               if(potato.FullName == nameGuess)
                {
                    Console.WriteLine("You son of bitch got the answer");
                    checker = true;
                }
                else
                {
                    Console.WriteLine("fuck off");
                    Console.WriteLine("Guess the name : ");
                    nameGuess = Console.ReadLine();
                }
        
            }


### Logical and comparison ###


&& and
|| or


### switch ##
   switch(name)
            {

                case "Skyler":
                    Console.WriteLine("yo skyler wtf ?");
                    return; 

                case "Jhon":
                    Console.WriteLine("yo Jhon wtf ?");
                    return;
                    
                default:
                    Console.WriteLine(" whaat the fuck ?");
                    break;
            }






### ternary coniditional  ###

  //expression ? true :  false
    //if(expression){}



    bool correct = true;

    int pointsEarned = correct ? 10 : 0;


 this is same ams


bool correct = ture;
int points;
if(correct){
points += 10;
}else
{points += 5;
}


## single line if ##

## for loop ##
## array ##

multi dimensional array :

int[x,y] studentGrades = x row/ y colum
or
int[][] studentGrades = new int[][];   // jagged array



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




















*/