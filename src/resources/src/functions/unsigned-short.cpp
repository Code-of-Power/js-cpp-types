using namespace std;
#include <fstream>
#include <limits.h>

void unsigned_short_shifts()
{
  ofstream file;
  file.open("char");
  file << static_cast<unsigned short>(USHRT_MAX << 1) << endl;
  file << static_cast<unsigned short>(USHRT_MAX >> 1) << endl;
  file << static_cast<unsigned short>(0 << 1) << endl;
  file << static_cast<unsigned short>(0 >> 1) << endl;
  file.close();
}
