import { DataI } from "../../data";
import "./List.css";

interface Props {
  item: DataI;
  inputValue: string;
  handleItemClick: Function;
}

const List = (props: Props) => {
  const { item, handleItemClick, inputValue } = props;

  const getHighlightedText = (item: string) => {
    if (inputValue && item.toLowerCase().includes(inputValue.toLowerCase())) {
      const index = item.toLowerCase().indexOf(inputValue.toLowerCase());
      return (
        <div>
          {item.substring(0, index)}
          <span className="highlightStr">
            {item.substring(index, index + inputValue.length)}
          </span>
          {item.substring(index + inputValue.length)}
        </div>
      );
    }
    return item;
  };

  return (
    <>
      <div
        className="dataItem"
        onClick={() => handleItemClick(item)}
      >
        <div className="data">
          <img className="avatar" src={item.avatar} alt="" />
          <div className="name">{getHighlightedText(item.name)}</div>
          <div className="email">{item.email}</div>
        </div>
      </div>
    </>
  );
};

export default List;
