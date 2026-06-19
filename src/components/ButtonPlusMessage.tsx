import { useState } from "react";

const ButtonPlusMessage = () => {
  const Messages = [
    "",
    "Hey, what are you doing?",
    "It says not to press that button!",
    "Ugh! You're so annoying.",
    "I guess I'll just have to take matters into my own hands.",
    "AHA! Take that! I won! I won! But... now there's nothing to press. (Click the text)",
    "And... There's no point to anything...",
    "So... What should I do?",
    "You can go about your life... but...",
    "I'm stuck here forever...",
    "...",
  ];
  const [MessageIndex, SetMessageIndex] = useState(0);
  return (
    <div className="text-center">
      <p>{Messages.slice(MessageIndex, MessageIndex + 1)}</p>
      {MessageIndex < 5 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            SetMessageIndex(MessageIndex + 1);
          }}
        >
          Don't Press Me!
        </button>
      )}
      {MessageIndex > 4 && MessageIndex < 10 && (
        <p
          onClick={() => {
            SetMessageIndex(MessageIndex + 1);
          }}
        >
          No Button Found
        </p>
      )}
      {MessageIndex > 9 && <p>No Button Found</p>}
    </div>
  );
};

export default ButtonPlusMessage;
