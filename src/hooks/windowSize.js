import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);
    useLayoutEffect(() => {
        const updateSize = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('resize', updateSize)
        };
    }, []);
    return windowSize;
};