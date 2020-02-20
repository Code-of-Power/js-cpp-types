using namespace std;
#include <fstream>
#include <limits.h>

void short_shifts() {
  ofstream file;
  file.open("char");
  file << static_cast<short>(SHRT_MAX << 1) << endl;
  file << static_cast<short>(SHRT_MAX >> 1) << endl;
  file << static_cast<short>(SHRT_MIN << 1) << endl;
  file << static_cast<short>(SHRT_MIN >> 1) << endl;
  file.close();
}
