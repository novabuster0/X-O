import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);
export default function Square({ value, ExternalHandleClick, isgameEnded }) {
    //+
    const [isClicked, setisClicked] = useState(false);
    const parentRef = useRef();
    //
    //
    //
    const timeLine = gsap.timeline();

    const HandleClick = () => {
        if (!isClicked) {
            timeLine.to(parentRef.current, {
                duration: 0.1,
                rotate: "+=20",
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    setisClicked(true);
                },
            });
            timeLine.to(parentRef.current, {
                duration: 0.1,
                rotate: -10,
                yoyo: true,
                repeat: 1,
            });
            ExternalHandleClick();
        } else {
            timeLine.to(parentRef.current, {
                x: "-=5",
                duration: 0.02,
                repeat: 2,
                yoyo: true,
                clearProps: "x",
            });

            timeLine.to(parentRef.current, {
                x: "+=5",
                duration: 0.02,
                repeat: 2,
                yoyo: true,
                clearProps: "x",
            });
            timeLine.to(parentRef.current, {
                x: "-=2",
                duration: 0.02,
                repeat: 1,
                yoyo: true,
                clearProps: "x",
            });
            timeLine.to(parentRef.current, {
                x: "+=2",
                duration: 0.02,
                repeat: 1,
                yoyo: true,
                clearProps: "x",
            });
        }
    };
    //
    //
    //
    return (
        <div
            ref={parentRef}
            onClick={HandleClick}
            className="parent hover:[&>.child]:scale-115 rounded-xl min-w-22 max-w-23 h-18  flex-2"
        >
            <div className="child border-2 rounded-xl transition-all duration-300 flex justify-center h-full items-center text-6xl font-[seguo]">
                {isClicked || isgameEnded ? value : undefined}
            </div>
        </div>
    );
}
