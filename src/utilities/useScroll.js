import { useRef } from "react";

export default function useScroll() {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
    console.log("hello");
    return [executeScroll, elRef];
  };