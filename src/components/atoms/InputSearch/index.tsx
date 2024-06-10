import React, { FC } from "react";
import icon from "@/assets/search-icon.svg";
import "./styles.css";

type InputSearchProps = {
  value: string;
  placeholder?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputSearch: FC<InputSearchProps> = ({
  value,
  onKeyDown,
  onChange,
  placeholder = "Search a character...",
}) => (
  <div className="search">
    <button type="submit" className="search__button" aria-label="Search">
      <img src={icon} alt="search icon" width={12} height={12} />
    </button>

    <input
      data-testid="search-input"
      id="searchInput"
      className="search__input"
      type="text"
      placeholder={placeholder}
      defaultValue={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  </div>
);
