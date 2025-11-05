import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);
export default function Square({ value, ExternalHandleClick }) {
    //
    const [isClicked, setisClicked] = useState(false);
    const parentRef = useRef();
    //
    //
    //
    const timeLine = gsap.timeline();
    const HandleClick = () => {
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
            <div className="child border-2 rounded-xl transition-all duration-300 flex justify-center h-full items-center ">
                {isClicked ? value : null}
            </div>
        </div>
    );
}
