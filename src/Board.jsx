import { useState } from "react";
import Square from "./Square";
export default function Board() {
    const [board, setBoard] = useState(Array(9).fill("X"));
    const HandleSquareClick = (index) => {};
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
