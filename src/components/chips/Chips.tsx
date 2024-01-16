import { ChipI } from "../../data";
import "./Chips.css";

interface Props {
  chip: ChipI;
  highlightedChip: number | null;
  handleChipRemove: Function;
}

const Chips = (props: Props) => {
  const { chip, highlightedChip, handleChipRemove } = props;

  return (
    <>
      <div
        className={`chip ${highlightedChip === chip.id ? "highlighted" : ""}`}
      >
        <img src={chip.avatar} alt="" />
        <span>{chip.name}</span>

        <span className="close" onClick={() => handleChipRemove(chip.id)}>
          &#x2715;
        </span>
      </div>
    </>
  );
};

export default Chips;
