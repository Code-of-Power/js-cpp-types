using namespace std;
#include <iostream>
#include <limits.h>

void signed_char_shifts()
{
  ofstream file;
  file.open("char");
  cout << static_cast<signed char>(CHAR_MAX << 1) << endl;
  cout << static_cast<signed char>(CHAR_MAX >> 1) << endl;
  cout << static_cast<signed char>(CHAR_MIN << 1) << endl;
  cout << static_cast<signed char>(CHAR_MIN >> 1) << endl;
  file.close();
}
