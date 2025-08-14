import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div>
      <h1>This is a contact page</h1>

      <Script>
        {`
      alert("welcome  to contact page")
      
      `}
      </Script>
    </div>
  );
};

export default page;
