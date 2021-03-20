using System;
namespace Youtube
{
    public class Cars
    {
        public string ModelName { get; set; }
        public string Maker { get; set; }
        public string CType { get; set; }
        public string Level { get; set; }

        public string getDetail()
        {
            return ModelName + " is from " + Maker + " and Type is " + CType + "and the car level is " + Level;
        }
    }

   
}
