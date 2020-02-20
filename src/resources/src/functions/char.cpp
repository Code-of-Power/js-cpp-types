using namespace std;
#include <fstream>
#include <limits.h>

void char_shifts()
{
  ofstream file;
  file.open("char");
  file << static_cast<char>(UCHAR_MAX << 1) << endl;
  file << static_cast<char>(UCHAR_MAX >> 1) << endl;
  file << static_cast<char>(0 << 1) << endl;
  file << static_cast<char>(0 >> 1) << endl;
  file.close();
}
