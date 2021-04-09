using System;

namespace IFN563_Assignment
{

    public class Connect4Game
    {

        private static int currentplayerSymbol;
        private static int chosenColumn = 0;
        private static bool done = false; //win
        private static int gameMode;
        private static int level;
        private static Board board = new Board();
        private static Controller controller = new Controller();

    
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Connect 4 game !");

            //print board
            //Console.WriteLine(board.ToString());


            Console.WriteLine("Choose the game mode :  [1] Player1 vs Computer !");
            Console.WriteLine("                     :  [2] Player1 vs Player 2 !");

          
            gameMode = Convert.ToInt32(Console.ReadLine());
            switch (gameMode)
            {
                case 1:

                    Console.WriteLine("   This is Game mode 1  :  Player vs Computer !  \n\n");

                    Console.WriteLine("Choose the difficulty :  [1] Easy Mode !");
                    Console.WriteLine("                      :  [2] Normal Mode ");


                    level = Convert.ToInt32(Console.ReadLine());


                 
                    if ( level == 1)
                    {
                        Console.WriteLine(board.ToString());
                        controller.PlayerMode1(board, 6, 1, 0, 1, 0, false, 1);
                    }
                    else
                    {
                        Console.WriteLine(board.ToString());
                        controller.PlayerMode1(board, 6, 1, 0, 1, 0, false, 2);

                    }



           
                    break;
                case 2:
                    Console.WriteLine("    This is Game mode 2  :  Player1 vs Player2 !  \n\n");
                    Console.WriteLine(board.ToString());
                    controller.PlayerMode2(board, 6, 1, 0, 1, 0, false);
                   

                    break;
            }
            

        }

    }
}
