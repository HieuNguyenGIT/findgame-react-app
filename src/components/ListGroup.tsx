// use <></> ti rende multiple element
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["hanoi", "nha trang", "Da nang", "Phu quoc", "Binh Duong"];
  items = ["hanoi", "nha trang", "Da nang", "Phu quoc", "Binh Duong"];
  const getitemsCheck = () => {
    console.log("this run", items.length);
    return items.length === 0 ? <p>no item are found</p> : null;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      {getitemsCheck()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} onClick={handleClick} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
