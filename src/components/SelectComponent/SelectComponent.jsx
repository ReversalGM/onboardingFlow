import { useState } from "react"
import "./SelectComponent.css"
import { useClickOutside } from "/src/hooks/useClickOutside.js"
export function SelectComponent({ placeholder, valueList, updateValue }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(placeholder)
  const dropdownRef = useClickOutside(() => {
    setOpen(false)
  })
  const formName = crypto.randomUUID()

  function changeValue(newVal) {
    setValue(newVal)
    updateValue(newVal)
  }

  return (
    <div ref={dropdownRef} className={"select " + (open ? "select--open" : "")}>
      <button
        className="select__button"
        onClick={(e) => {
          setOpen(!open)
        }}
      >
        <span className="select__selected-value">{value}</span>
        <span
          className={"select__arrow " + (open ? "select__arrow--open" : "")}
        ></span>
      </button>
      <ul
        className={"select__dropdown " + (open ? "select__dropdown--open" : "")}
        id="select__dropdown"
      >
        {valueList.map((element) => {
          const elemId = crypto.randomUUID()
          return (
            <li
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  changeValue(element.value)
                  setOpen(false)
                }
              }}
              onClick={(e) => {
                changeValue(element.value)
                setOpen(false)
              }}
              key={elemId}
              className="select__item"
            >
              <input
                onClick={(e) => {
                  e.stopPropagation()
                }}
                type="radio"
                id={elemId}
                name={formName}
              />
              <label htmlFor={elemId}>{element.value}</label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
