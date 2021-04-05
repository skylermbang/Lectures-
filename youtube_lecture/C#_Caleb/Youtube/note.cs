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



for ( int i =0; i< grades3.GetLength(0 ); i++)   // GetLength(0) : row 
{
    for (int k = 0; k < grades3.GetLength(1); k++) // GetLength(1) : column ;
        {
    Console.Write(grades3[i, k] + " ");
        }Console.WriteLine();
}




Console.WriteLine(grades3[1, 3]);

int[][] grades4 =   // jagged array
    {
    new int[]{1,2 },
    new int[]{3,4,5,6,7 },
    new int[]{ 8,9}
};
Console.WriteLine(grades4[1][4]);
}




for ( int i = 0; i < grades4.Length; i++)
{
    for( int k=0; k < grades4[i].Length; k++)
    {
        Console.Write(grades4[i][k] + "  ");
    }
    Console.WriteLine();
}




## list ##

List<int> grades =  new List <int>(); generic ; generic program : create class  


grades.add(5); // this size can be adjustable by computer automatically;

greade.count;  give how many elements
gread[0] ; get the first element

List<int> grades = new List<int>();

grades.Add(5);
grades.Add(10);

Console.WriteLine(grades[0]);


grades.Insert(2, 15);
Console.WriteLine(grades[2]);
grades.Clear(); // clear the whole list
grades.Remove(10); // remvoe grade 10 ;


// List = 5 15 10
if (grades.Contains(5))  // Contains = return boolean True /False 
{
    Console.WriteLine("found!"); 
    Console.WriteLine(grades.IndexOf(15));  // Indexof = tell you which location

}

// grades1.SequenceEqual(grades2)   tell you if they are equal 




### getting element by loops ##


for(int i = 0; i < grades.Count; i++)
{
Console.WriteLine(grades[i]);
}
// for loop you can modify the element like  grades *= 2 

foreach( int potato in grades)
{
Console.WriteLine(potato);
}

// foreach : cant update or modifiy only can read the elements 



in the declartion , if the subject has IEnumerable , which mean you can use foreach

## foreach with multi dimensional listed or jaggered array? ##

2d array => just use nested for loop
jaggard array, list => use nested foreach loop

List<List<int>> grades = new List<List<int>>() {
new List<int> {5, 10 ,14},
new List<int> { 20, 80, 100, 50, 40 },
new List<int> {0,10,50 } };
     



foreach (List<int> potato in grades)
{
foreach(int sweetPotato in potato)
{
    Console.Write(sweetPotato+ "  ");
}Console.WriteLine();
}

you can use

Listname.ToArray(); = change list to array
you better put this in variable like

int[] array_form = Listname.ToArray();

work vice versa

List<int> Listform = ArrayName[0].ToList();



## sorting list / reverse order of list ####
List<int> grades = new List<int>() { 10, 50, 20, 60, 70 };


grades.Sort(); // sorting 
grades.Reverse(); // no return just reverse;

foreach (int potato in grades)
{
    Console.WriteLine(potato);
}


###########################     OOP     ################################


functional progreaming ;


oop :   class & object:

        desgin a strucutre and make a copy of the same structure;


        class : blueprint ,  cookie cutter ;
        objects : cookie
        instanticate :  make cookie from class  ( object =instance of the class )

        field : variable in class level;
        property :  public facing   ;  auto implemented property  ;
                     will do the same thing as field but do more functionality ?


        generally use property rather than field ;
        property can customize how the data treated or stored;

        private vs public :

        priave : for the internal usage ;   can only accessible in side the parenthesis
        public : anyone can acess ; 

        so using property and methode to gain access to the privae field ;

        method : allow us to do something with the object;
                 it can access the private field in the class; 



{
Program myProgram = new Program(); // instantiate the class
myProgram.doSomething(); // how to use the methode 
}



public void doSomething()
{
// do something 
}


void (no return) / string or integer for the return + return

public string Fullname(int number)
{

string message = "";
for (int i = 0; i < number; i++)
{
    message += FirstName + " " + LastName + "\n";
               
}
return message;
}



####### encapsulation ######



property act as gate to the field ;



 public string FirstName {
get
{

    return _firstName.ToLower()+"\n";



}
set
{
    _firstName = value;
}

}  // this is detaield version of the auto implemented property 




// list of usres ? // 



List<string> firstNames = new List<string>() { "Skyler", "Youme", "Jordan", "Leilei" };
List<string> lasttNames = new List<string>() { "Bang", "Kim", "Park", "White" };

            
List<User> users = new List<User>();

for (int i = 0; i < firstNames.Count; i++)  // count as you knw both lits have same length 
{
    User user = new User();
    user.FirstName = firstNames[i];
    user.LastName = lasttNames[i];
    users.Add(user);
}
foreach (User individual in users)
{
    Console.WriteLine(individual.Fullname2);
}

## passing  variable## 

inside the methodes you can chagne the value
anytime you pass the object , its able to change in the methode;
but you cant assigne new objects from outside. 

takeUser(users[0]); // take first user 
}


public void takeUser (User user)
{
user.FirstName = "skyler";
Console.WriteLine(user.Fullname2);
}


##    ##   ##   ##   ## 



class - objects  (instance) 
     


instance way :
user u = new User();
u.talk ();

or


static methode
user.findInList();


Static methode;

you can directly use Classname.Static_methode_name 

[program.cs]
User user = new User();
user.FirstName = "a";
user.LastName = "b"; 
User.Waka(user);

User user2 = new User();
user2.FirstName = "giuag";
user2.LastName = "bba";

List<User> users = new List<User>();

users.Add(user);
users.Add(user2);

User.PrintUsers(users);


[user class]
public string Output(int times)
{
    string msg = "";
    for(int i=0; i< times; i++)
    {
        msg += Fullname2 + "\n";
    }
    return msg;
}

public static void PrintUsers(List<User> users)
{
    foreach (User user in users)
    {
        Console.WriteLine(user.Output(1));

    }
}



## method overloading ## 



method overloading .

ex) Obj.Test() -> invoke other test() //    Test(int x) -> invoke Test(int x)
        one test method but actualy two different vesion / maybe differenct functionality or parameters;


so bascially, one methode name ; but differnet variable intake;

optional parameters :
overloading :  create different version of methode but similar functionality but still some difference;


Console.WriteLine(User.Find(users, "ab"));
public static int Find(List<User> users, string fullName)
{
            
for(int i =0; i<users.Count; i++)
{

if (users[i].Fullname2 == fullName)
{
    return i;
}
}
return -1;
            
}


#####            overwriting methode ;               ####

overriting exisitng methode to our customized version of the method; 


"toString" => lets modify
"Equals" =>


public override string ToString()
{
return Fullname2;
}

public override bool Equals(object obj)
{

if (Fullname2 == ((User)obj).Fullname2)  return true;  // important line  this take the User object;

return false;
}


-------- overload different methods --------


GetHashCode () ;

public override int GetHashCode()
{
return Fullname2.GetHashCode();
}
// if two objects have same data( first name / last name) in theory they are equal;
// 


### return custom types from methods  ##

public static User GetUserFromList(List<User> users, User user)
{
foreach(User potato in users)
{
    if (potato.Equals(user))
    {
        return potato;
    }
}
return null;
}
}


value type vs reference type ;
 


from the methode you can change the user's name but you cant not make new users;


###########  inheritance ############

you can steal from other class;

object;  ToString ;  => but we made chagne of the ToString ; 


if you want inheritance just simply         child class name : parent class name;

in order to overide the methode child methods ; use virtual from the parent ;
"virtual" keyword : let you override in the child class

"abstract" keyword : prevent instatantiate by raw
                     work similar to the virtual + have to overrite by adding own implementatoin



###        polymorphism            ###

encapsulation ;
inheritance;
polymorphism ;  


Student Skyler = new Student();
Skyler.FirstName = "Skyler";
Skyler.Verified = true;
Console.WriteLine(Skyler.Fullname);
Skyler.HelloToConsole();


Teacher Youme = new Teacher();
Youme.FirstName = "Youme";

List<User1> users = new List<User1>() { Skyler, Youme };

foreach (User1 u in users)
{
    u.HelloToConsole();
}


#### constructor ####

default constructor ;




### read only property ###

[program.cs]
Student Skyler = new Student("GUGU", "GAGA");
//Skyler.FirstName = "Skyler";
//Skyler.Verified = true;
//Console.WriteLine(Skyler.Fullname);
//Skyler.HelloToConsole();


//Teacher Youme = new Teacher();
//Youme.FirstName = "Youme";

//List<User1> users = new List<User1>() { Skyler, Youme };

//foreach (User1 u in users)
//{
//   u.HelloToConsole();
//}


Skyler.HelloToConsole();


[user1 class]

public abstract class User1
{
public User1()
{
Console.WriteLine("Creating User");
}

public User1(string firstname, string lastname)

{
FirstName = firstname;
LastName = lastname;
}


public bool Verified { get; set; } = false; //verifiy default false;
      
public string FirstName { get; }
public string LastName { get; }
public string FullName
{

get
{
    return FirstName + " " + LastName;

}
}


public abstract void HelloToConsole();
        


}
[student class]
public class Student : User1
{

public Student()
{
Console.WriteLine("Creating Student");
}

public Student(string firstname, string lastname) : base(firstname, lastname)

{
            

}

public override void HelloToConsole()
{
Console.WriteLine(" Yo I an student name :{0}?", FullName );
}




### interface ###

collection of things that we promised we put in our class to instatntiate it?
you can only get interface from only one parent 



you can add proeprty or methode in the interface usualy name as I + somthing 


 public class Student : Users, ITalk  // to use the interface of Italk














*/