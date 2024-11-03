#include <iostream>
#include <string.h>
using namespace std;
int main()
{
    string S, S1, S2;
    cout << "Enter a sentence" << "\n"; 
    getline(cin, S);                             // wasn't working when getlin was after cin
    cout << S << "\n";
    cout << "Enter a two word sentence" << "\n";
    cin >> S1;
    cin >> S2;
    cout << S1 << " " << S2 << "\n";
    return 0;
}