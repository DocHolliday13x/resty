import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 data-test-id="header-h1" >RESTy</h1>
    </header>
  );
}

// function Header() {
//   return (
//     <header>
//       <h1>RESTy</h1>
//     </header>
//   );
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <h1>RESTy</h1>
//       </header>
//     );
//   }
// }

export default Header;
