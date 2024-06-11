import React, { Dispatch, useState } from 'react'
import S from './dropdown.styles'
import { MdKeyboardArrowDown } from "react-icons/md";

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
        <S.SelectedOption onClick={() => setShowOptions(prev => !prev)}>
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
