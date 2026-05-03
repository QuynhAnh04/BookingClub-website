import React from "react";
import "./SearchBar.css";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="searchbar-wrapper">
      <input
        className="searchbar-input"
        placeholder="Tìm tên sân hoặc vị trí (ví dụ: Quận 1)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search courts"
      />
      <button className="searchbar-button" onClick={() => onChange(value)}>Tìm</button>
    </div>
  );
};

export default SearchBar;
