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
            


            /*
            int determineFirstPlayer = 0; //  payer 1 = 0 ;  payer 2 = 1;

            if (determineFirstPlayer == 0) currentplayerSymbol = 1;
            else currentplayerSymbol = 2;

            do
            {
                if (currentplayerSymbol == 1) Console.WriteLine("player 1 :"); else Console.WriteLine("Player 2 :");
                Console.WriteLine("Choose your coulmn number  from 0 to 6");

                try
                {
                    chosenColumn = int.Parse(Console.ReadLine());

                    if (chosenColumn >= 0 && chosenColumn <= 6)
                    {
                        controller.PlaceInColumn(board, chosenColumn, currentplayerSymbol);
                    }

                    if (controller.WinCondition(board, currentplayerSymbol))
                    {
                        Console.WriteLine("player {0} has won !  \n\n", currentplayerSymbol);
                        board = controller.PlayAgainPrompt();

                        //player wants to exit
                        if (board == null)
                        {
                            break;
                        }
                    }
                    else
                    {
                        if (!board.columnFull[chosenColumn])
                        {
                            currentplayerSymbol = (currentplayerSymbol == 1 ? 2 : 1);
                        }
                    }


                    if (board.BoardIsFull())
                    {
                        Console.WriteLine(" All the board is full");
                        board = controller.PlayAgainPrompt();

                        //player wants to exit
                        if (board == null)
                        {
                         Console.WriteLine(" Bye ");
                            break;
                        
                        }
                    }

                }
                catch (Exception)
                {
                    Console.WriteLine(" Unknwon Error  Please try again");
                }

            } while (!done); // do -while loop continuous til done = true;
            */
        }

    }
}
