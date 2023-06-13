import { useEffect } from "react";

type EscapeKeyCallback = () => void;

const useEscapeKey = (callback: EscapeKeyCallback): void => {
  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [callback]);
};

export default useEscapeKey;
