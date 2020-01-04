#include <cstdlib>
#include <iostream>
#include <stdio.h>
#include <numeric>
#include <limits>

using namespace std;

int main(int argc, char *argv[])
{
  int a;
  cin >> a;
  if (a > std::numeric_limits<char>::max())
    cout << "error";
  return 0;
}
