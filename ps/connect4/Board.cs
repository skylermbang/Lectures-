using System;

namespace IFN563_Assignment
{
    /// <summary>
    /// Board class represents a board
    /// </summary>
    public class Board
    {
     
        public const int ROWS = 6;
        public const int COLUMNS = 7;         
        public int[,] board = new int[ROWS, COLUMNS];
        public bool[] columnFull = new bool[COLUMNS];

        public Board()
        {
            InitializeBoard();
        }



        private void InitializeBoard()
        {
            for (int i = 0; i < ROWS; i++)
            {

                for (int j = 0; j < COLUMNS; j++)
                {
                    board[i, j] = 0;
                }
            }

            //reset column full
            for (int i = 0; i < COLUMNS; i++)
            {
                columnFull[i] = false;
            }
        }


        public override string ToString()
        {
            string msg = ("     Columns\n");
            msg += ("      012345\n");
            msg += ("    _________\n");

            for (int i = 0; i < ROWS; i++)
            {
                msg += ("Row ");
                msg += (i);
                msg += ("|");

                for (int j = 0; j < COLUMNS; j++)
                {
                    msg += (board[i, j]);
                }

                msg += "\n";
            }

            return msg;
        }

        public bool BoardIsFull()
        {
            //check each column
            for (int i = 0; i < COLUMNS; i++)
            {
                if (!columnFull[i])
                {
                    return false;
                }
            }

            //board is full
            return true;
        }

        public void PlaceInColumn( int columnNumber, int symbol )
        {
            int index = ROWS - 1;  // index = 0 is the top 
            int cc = board[ index, columnNumber ];
            while ( ( cc == 1 || cc == 2 ) && index >= 0 )
            {
                index--;
                if ( index >= 0 ) cc = board[ index, columnNumber ];
            }

            if ( index < 0 ) columnFull[ columnNumber ] = true;

            if ( !columnFull[ columnNumber ] )
            {
                board[ index, columnNumber ] = symbol;
                //print board
                Console.WriteLine(board.ToString());
            }
            else
            {
                Console.WriteLine( " The column is full please try again. " );
            }
        }

        public void UpdateBoard()
        {
            InitializeBoard();

            for ( int i = 0; i < Cell._column.Count; i++ )
            {
                if ( i % 2 == 0 )
                {
                    PlaceInColumn( Cell._column[ i ], 1 );
                }
                else
                {
                    PlaceInColumn( Cell._column[ i ], 2 );
                }
            }
        }
    }
}
