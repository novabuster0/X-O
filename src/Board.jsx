import { useState } from "react";
import Square from "./Square";
import GetWinner from "./winnerCheck";

export default function Board() {
    const [playerTurn, setPlayerTurn] = useState("X");
    const [board, setBoard] = useState(Array(9).fill(undefined));
    const [winner, setWinner] = useState();
    const HandleSquareClick = (index) => {
        // Board
        //
        //
        //
        let newBoard = [...board];
        newBoard[index] = playerTurn;
        // Winner
        //
        //
        //
        let tempWinner = GetWinner(newBoard);
        if (tempWinner) {
            setWinner(tempWinner);
            setPlayerTurn(undefined);
            setBoard(Array(9).fill(tempWinner));
            return;
        }
        // Updating the Board and Player Turn if the Game is still running
        setBoard(newBoard);
        //
        //
        setPlayerTurn(playerTurn == "X" ? "O" : "X");
    };
    return (
        <div className=" border-2 border-black w-135 justify-around p-3 gap-3 rounded-xl h-100 flex">
            <div
                className="flex justify-center items-center flex-wrap gap-2  border-2 p-2 flex-2 rounded-xl"
                id="squares"
            >
                {/* rendering the squares */}
                {board.map((value, index) => {
                    return (
                        <Square
                            value={value}
                            ExternalHandleClick={() => {
                                HandleSquareClick(index);
                            }}
                            isgameEnded={winner ? true : false}
                        />
                    );
                })}
            </div>
            <div className="border-2 bg-violet-50 flex flex-1 text-center p-1.5 rounded-xl">
                <p className="border-2 text-lg font-bold rounded-2xl h-max p-1">
                    back to starting position
                </p>
            </div>
        </div>
    );
}
