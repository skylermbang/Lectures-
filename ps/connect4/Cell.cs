using System;
namespace connect4
{
    public class Cell
    {
          #region Private Varibales

            private int _player;
            private int _sequence;

            #endregion

            #region Consturctors

            public Cell()
            {
                _player = 0;
                _sequence = -1;
            }

            public Cell(int player, int sequence)
            {
                _player = player;
                _sequence = sequence;
            }

            #endregion

            #region Public Properties

            public int Player
            {
                get => _player;
                set => _player = value;
            }

            public int Sequence
            {
                get => _sequence;
                set => _sequence = value;
            }

            #endregion
    }
}
