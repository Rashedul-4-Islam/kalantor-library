import React from "react";

const Writer = ({ writer }) => {
  return (
    <div className="writer text-center py-3">
      <img className="m-auto" src={writer.writerImg} alt="" />
      <h6 className="pt-2">{writer.writerName}</h6>
    </div>
  );
};

export default Writer;
