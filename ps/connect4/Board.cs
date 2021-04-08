using System;

namespace IFN563_Assignment
{
    /// <summary>
    /// Board class represents a board
    /// </summary>
    public class Board
    {
        /// <summary>
        /// number of columns
        /// </summary>
        public const int ROWS = 7;

        /// <summary>
        /// number of rows
        /// </summary>
        public const int COLUMNS = 6;

        /// <summary>
        /// board
        /// </summary>
        public int[,] board = new int[ROWS, COLUMNS];

        /// <summary>
        /// flags show the the column is full
        /// </summary>
        public bool[] columnFull = new bool[COLUMNS];

        /// <summary>
        /// constructor
        /// </summary>
        public Board()
        {
            InitializeBoard();
        }


        /*
         * 
         * optional chagne for class atribute 
        public int getCell(int row, int col)
        {
            return board[row, col];
        }
        */

        /// <summary>
        /// initialize board
        /// </summary>
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

        /// <summary>
        /// return a string to show the board
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// check if board is full
        /// </summary>
        /// <returns></returns>
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

    }
}
