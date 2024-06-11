import React, { Dispatch, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import S from './dropdown.styles'

interface IDropdown {
  title: string
  options: string[]
  selectedFilterOption: string
  setSelectedFilterOption: Dispatch<string>
}

const Dropdown = ({
  title,
  options,
  setSelectedFilterOption,
  selectedFilterOption
}: IDropdown) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  return (
    <S.Dropdown>
      <S.DropdownContents>
        <S.Title>
          {title}:
        </S.Title>
        <S.SelectedOption
          onClick={() => setShowOptions(prev => !prev)}
          aria-label='Show filter options'
        >
          {selectedFilterOption}
          <MdKeyboardArrowDown
            style={{
              rotate: showOptions ? '360deg' : '180deg',
            }}
          />
        </S.SelectedOption>
          {
            showOptions &&
            <S.DropdownOptions>
              {options.map(option => (
                <S.Options
                  aria-label='Choose option and close'
                  onClick={() => {
                    setSelectedFilterOption(option)
                    setShowOptions(false)
                  }}
                >
                  {option}
                </S.Options>
              ))}
            </S.DropdownOptions>
          }
      </S.DropdownContents>
    </S.Dropdown>
  )
}

export default Dropdown
