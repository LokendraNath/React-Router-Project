import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-blue-600 py-20 text-3xl text-center">
      <p>User: {userid}</p>
    </div>
  );
};

export default User;
