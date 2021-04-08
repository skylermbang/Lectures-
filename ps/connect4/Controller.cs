using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IFN563_Assignment
{

    /// controller controls the logic of game

    public class Controller
    {

        public Board PlayAgainPrompt()
        {
            Board board = null;

            Console.WriteLine("Do you want to play again?  Press Y to play again N to finish the game");
            if (Console.ReadLine().ToUpper().StartsWith("Y"))
            {
                board = new Board();
                //print board
                Console.WriteLine(board.ToString());
            }

            return board;
        }


        /// check win condition


        public bool WinCondition(Board board, int currentplayerSymbol)
        {
            bool win_vertical = false;
            bool win_horizontal = false;
            bool win_digo1 = false;
            bool win_digo2 = false;
            bool win = false;

            for (int i = 0; i < Board.ROWS; i++)
            {
                for (int j = 0; j < Board.COLUMNS - 3; j++)


                {
                    if (

                        board.board[i, j] == currentplayerSymbol && board.board[i, j + 1] == currentplayerSymbol &&
                        board.board[i, j + 2] == currentplayerSymbol && board.board[i, j + 3] == currentplayerSymbol
                        )
                    {

                        Console.WriteLine(" \n\n Horizontal Connect 4  ");
                        win_horizontal = true;

                    }
                }


            }


            for (int i = 0; i < Board.ROWS - 3; i++)
            {
                for (int j = 0; j < Board.COLUMNS; j++)
                {

                    if (

                        board.board[i, j] == currentplayerSymbol && board.board[i + 1, j] == currentplayerSymbol &&
                        board.board[i + 2, j] == currentplayerSymbol && board.board[i + 3, j] == currentplayerSymbol
                        )
                    {

                        Console.WriteLine(" \n\n Vertical Connect 4  ");
                        win_horizontal = true;

                    }




                }


            }

            for (int i = 0; i < Board.ROWS - 3; i++)
            {
                for (int j = 0; j < Board.COLUMNS - 3; j++)
                {

                    if (

                        board.board[i, j] == currentplayerSymbol && board.board[i + 1, j + 1] == currentplayerSymbol &&
                        board.board[i + 2, j + 2] == currentplayerSymbol && board.board[i + 3, j + 3] == currentplayerSymbol
                        )
                    {

                        Console.WriteLine(" \n\n Uppder Digonal Connect 4  ");
                        win_digo1 = true;

                    }
                }
            }

            for (int i = 6; i > 3; i--)
            {
                for (int j = 0; j < 3; j++)
                {


                    if (
                         board.board[i, j] == currentplayerSymbol && board.board[i - 1, j + 1] == currentplayerSymbol &&
                         board.board[i - 2, j + 2] == currentplayerSymbol && board.board[i - 3, j + 3] == currentplayerSymbol
                        )

                    {

                        Console.WriteLine(" \n\n Uppder Digonal Connect 4  ");
                        win_digo2 = true;

                    }
                }
            }

            if (win_vertical || win_horizontal || win_digo1 || win_digo2)
            {
                win = true;
            }

            return win;
        }


        /// place in column

        public void PlaceInColumn(Board board, int columnNumber, int symbol)
        {
            int index = Board.ROWS - 1;  // index = 0 is the top 
            int cc = board.board[index, columnNumber];
            while ((cc == 1 || cc == 2) && index >= 0)
            {
                index--;
                if (index >= 0) cc = board.board[index, columnNumber];
            }

            if (index < 0) board.columnFull[columnNumber] = true;

            if (!board.columnFull[columnNumber])
            {
                board.board[index, columnNumber] = symbol;
                //print board
                Console.WriteLine(board.ToString());
            }
            else
            {
                Console.WriteLine(" The column is full please try again. ");
            }
        }


        public void PlayerMode2(Board board, int columnNumber, int symbol, int determineFirstPlayer, int currentplayerSymbol, int chosenColumn, bool done)
        {
            if (determineFirstPlayer == 0) currentplayerSymbol = 1;
            else currentplayerSymbol = 2;

            do
            {
                if (currentplayerSymbol == 1) Console.WriteLine("player 1 :"); else Console.WriteLine("Player 2 :");
                Console.WriteLine("Choose your coulmn number  from 0 to 5");

                try
                {
                    chosenColumn = int.Parse(Console.ReadLine());

                    if (chosenColumn >= 0 && chosenColumn <= 6)
                    {
                        PlaceInColumn(board, chosenColumn, currentplayerSymbol);
                    }

                    if (WinCondition(board, currentplayerSymbol))
                    {
                        Console.WriteLine("player {0} has won !  \n\n", currentplayerSymbol);
                        board = PlayAgainPrompt();

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
                        board = PlayAgainPrompt();

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
        }
        public void PlayerMode1(Board board, int columnNumber, int symbol, int determineFirstPlayer, int currentplayerSymbol, int chosenColumn, bool done, int level)
        {
            if (determineFirstPlayer == 0) currentplayerSymbol = 1;
            else currentplayerSymbol = 2;

            do
            {
                if (currentplayerSymbol == 1) Console.WriteLine("player 1 :"); else Console.WriteLine("Player 2 :");
                Console.WriteLine("Choose your coulmn number  from 0 to 5");

                try
                {
                    chosenColumn = int.Parse(Console.ReadLine());

                    if (chosenColumn >= 0 && chosenColumn <= 6)
                    {
                        PlaceInColumn(board, chosenColumn, currentplayerSymbol);
                    }

                    if (WinCondition(board, currentplayerSymbol))
                    {
                        Console.WriteLine("player {0} has won !  \n\n", currentplayerSymbol);
                        board = PlayAgainPrompt();

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

                            if (currentplayerSymbol == 2 && level == 1)
                            {



                          
                                chosenColumn = new Random().Next(6);
                                PlaceInColumn(board, chosenColumn, currentplayerSymbol);
                                if (board.columnFull[chosenColumn])
                                {
                                    chosenColumn = new Random().Next(6);
                                }


                                   
                                currentplayerSymbol = 1;
                         

                            




                            }







                            else if(currentplayerSymbol == 2 && level == 2)
                            {
                                int smart = new Random().Next(-1, 1);





                                for (int i = 0; i < Board.ROWS; i++)
                                {
                                    for (int j = 0; j < Board.COLUMNS - 3; j++)


                                    {
                                        if (

                                            board.board[i, j] == 1 && board.board[i, j + 1] == 1 && board.board[i, j + 2] == 0

                                            )
                                        {


                                            Console.WriteLine("testing");
                                            if(chosenColumn <= 3) smart =  1;

                                        }
                                       
                                    }


                                }

                               

                                if (chosenColumn == 0)
                                {
                                     smart = new Random().Next(0,3);
                                }else if(chosenColumn == 5)
                                {
                                     smart = new Random().Next(-2,1);
                                }
                                int smartColumn = chosenColumn + smart;

                                
                         
                                PlaceInColumn(board, smartColumn, currentplayerSymbol);
                                if (board.columnFull[smartColumn])
                                {
                                    smartColumn = smartColumn + 1;
                                    PlaceInColumn(board, smartColumn, currentplayerSymbol);
                                }

                                currentplayerSymbol = 1;

                     
                            }
                        }
                    }


                    if (board.BoardIsFull())
                    {
                        Console.WriteLine(" All the board is full");
                        board = PlayAgainPrompt();

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
        }



    }
}
