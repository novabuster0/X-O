//
//
//     0   1   2
//     3   4   5
//     6   7   8
//
//
//    0  1  2   |    3  4  5   |    6   7  8
//    0  3  6   |    1  4  7   |    2   5  8
//    0  4  8   |    2  4  6
//
//

export default function GetWinner(Board) {
    let result;
    //
    //
    if (Board[0] && Board[0] == Board[1] && Board[0] == Board[2]) {
        result = Board[0];
        return result;
    }
    if (Board[0] && Board[0] == Board[3] && Board[0] == Board[6]) {
        result = Board[0];
        return result;
    }
    if (Board[0] && Board[0] == Board[4] && Board[0] == Board[8]) {
        result = Board[0];
        return result;
    }
    //
    //
    if (Board[4] && Board[4] == Board[3] && Board[4] == Board[5]) {
        result = Board[4];
        return result;
    }
    if (Board[4] && Board[4] == Board[1] && Board[4] == Board[7]) {
        result = Board[4];
        return result;
    }
    if (Board[4] && Board[4] == Board[2] && Board[4] == Board[6]) {
        result = Board[4];
        return result;
    }
    //
    //
    if (Board[8] && Board[8] == Board[6] && Board[8] == Board[7]) {
        result = Board[8];
        return result;
    }
    if (Board[8] && Board[8] == Board[2] && Board[8] == Board[5]) {
        result = Board[8];
        return result;
    }
}
