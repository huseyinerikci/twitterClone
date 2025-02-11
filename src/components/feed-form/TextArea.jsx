import React from "react";

const TextArea = () => {
  return (
    <textarea
      name="text"
      className="w-full bg-transparent mb-2 md:text-lg text-zinc-300 outline-none resize-y min-h-[40px] max-h-[300px]"
      placeholder="Neler Oluyor?"
    />
  );
};
//herhangi bir prop almadığı ve gereksiz yere render olduğu için react.memo kullandık
export default React.memo(TextArea);
