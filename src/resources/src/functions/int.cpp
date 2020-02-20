using namespace std;
#include <fstream>
#include <limits.h>

void int_shifts() {
  ofstream file;
  file.open("char");
  file << static_cast<int>(INT32_MIN << 1) << endl;
  file << static_cast<int>(INT32_MIN >> 1) << endl;
  file << static_cast<int>(INT32_MAX << 1) << endl;
  file << static_cast<int>(INT32_MAX >> 1) << endl;
  file.close();
}
