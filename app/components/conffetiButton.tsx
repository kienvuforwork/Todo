"use client";

import confetti from "canvas-confetti";

interface ConfettiButtonProp {
  onClick: () => void;
  complete: boolean;
}

const ConfettiButton: React.FC<ConfettiButtonProp> = ({
  onClick,
  complete,
}) => {
  const triggerConfetti = () => {
    onClick();
    !complete &&
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <button
      onClick={triggerConfetti}
      className="border-[1px] border-blue-100 bg-blue-100 hover:opacity-80 rounded-full px-4 py-2"
    >
      {complete ? "Finished" : "Finish"}
    </button>
  );
};

export default ConfettiButton;
