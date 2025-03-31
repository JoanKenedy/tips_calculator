import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem } : MenuItemProps) {
  return (
    <>
      <button 
      className=" rounded-lg border-2 border-teal-400 w-full p-2 flex justify-between mb-5 hover:bg-teal-400"
      onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
      </button>
    </>
  );
}
