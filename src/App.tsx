import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import "./App.css";
import Chips from "./components/chips/Chips";
import { ChipI, DataArr, DataI } from "./data";
import List from "./components/list/List";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<DataI[]>(DataArr);
  const [chips, setChips] = useState<ChipI[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [highlightedChip, setHighlightedChip] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (inputValue.length > 0) {
      setActive(true);
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setActive(false);
  };

  const handleItemClick = (item: DataI) => {
    const newChips: ChipI[] = [
      ...chips,
      {
        id: Date.now(),
        name: item.name,
        avatar: item.avatar,
        email: item.email,
      },
    ];
    setChips(newChips);
    setItems(items.filter((i) => i !== item));
    setInputValue("");
    setActive(false);
  };

  const handleChipRemove = (id: number) => {
    const removedChip = chips.find((chip) => chip.id === id);
    if (removedChip) {
      setChips(chips.filter((chip) => chip.id !== id));
      setItems([
        ...items,
        {
          name: removedChip.name,
          avatar: removedChip.avatar,
          email: removedChip.email,
        },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      // Highlight the last chip
      setHighlightedChip(chips[chips.length - 1].id);
    }

    if (
      e.key === "Backspace" &&
      inputValue === "" &&
      highlightedChip !== null
    ) {
      // Delete the last chip if it's highlighted
      handleChipRemove(highlightedChip);
      setHighlightedChip(null);
    }
  };

  return (
    <div className="App">
      <div className="input-container">
        {chips.map((chip) => (
          <Chips
            key={chip.id}
            chip={chip}
            highlightedChip={highlightedChip}
            handleChipRemove={handleChipRemove}
          />
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type to search..."
        />
      </div>

      {active && (
        <div className="dataResult">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <List
                key={index}
                item={item}
                handleItemClick={handleItemClick}
                inputValue={inputValue}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
