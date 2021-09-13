import React from "react";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
