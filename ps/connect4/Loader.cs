using IFN563_Assignment;
using System;
using System.IO;

namespace connect4
{
    public class Loader
    {
        public Loader()
        {
        }

        public static void Load( Board board, int Sequence )
        {
            StreamReader sr = new StreamReader( new FileStream( "saveFile.dat", FileMode.Open ) );

            string loadStr = string.Empty;

            loadStr = sr.ReadLine();

            string[] loadStrSplit = loadStr.Split( ',' );

            Cell._column = new System.Collections.Generic.List<int>();
            Cell._column.Clear();

            for(int i = 0;i < loadStrSplit.Length;i++)
            {
                Cell._column.Add( int.Parse(loadStrSplit[ i ]) );
            }

            // Enumerlator
            // Array, List => GetEnumerlator()

            foreach ( string element in loadStrSplit )
            {
                Cell._column.Add( int.Parse( element ) );
            }

            /*
            for (int i = 0; i < Board.ROWS; i++)
            {
                string saveStr = string.Empty;

                for (int j = 0; j < Board.COLUMNS; j++)
                {
                    saveStr += board.board[i, j].ToString() + "," + Sequence.ToString() + ":";
                }

                sw.WriteLine(saveStr);
            }*/

            sr.Close();
            Console.WriteLine( " testing " );
        }
    }
}
