// import React from "react";
// import styled from "styled-components";

// const Last = () => {
//   return (
//     <div className="bottom-bar">
//       <p>&copy; 2023 JustMove Global . All rights reserved</p>
//     </div>
//   );
// };

// const bottom-bar = styled.div``;

// export default Last;
import React from "react";
import styled from "styled-components";

const Last = () => {
  const currentYear = new Date().getFullYear();
  const StyledBottomBar = styled.div`
    background-color: #252525; /* Example background color */
    color: #fff; /* Example text color */
    padding: 10px;
    text-align: center;
  `;

  return (
    <StyledBottomBar>
      <p>&copy; {currentYear} JustMove Global. All rights reserved</p>
    </StyledBottomBar>
  );
};

export default Last;
