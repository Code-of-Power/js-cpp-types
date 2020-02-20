using namespace std;
#include <fstream>
#include <limits.h>

void unsigned_int_shifts() {
  ofstream file;
  file.open("char");
  file << static_cast<unsigned int>(UINT32_MAX << 1) << endl;
  file << static_cast<unsigned int>(UINT32_MAX >> 1) << endl;
  file << static_cast<unsigned int>(0 << 1) << endl;
  file << static_cast<unsigned int>(0 >> 1) << endl;
  file.close();
}
