const closeDropdown = () => {
  const elem = document.activeElement

  if (elem instanceof HTMLElement) {
    elem?.blur()
  }
}

export default closeDropdown
