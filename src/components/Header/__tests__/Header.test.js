/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */

import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
// import renderer from 'react-test-renderer'
import Header from '../Header'

afterEach(() => {
  cleanup()
})

it('should render successfully', () => {
  const { getByTestId } = render(<Header></Header>)
  const component = getByTestId('header-test')
  expect(component).toBeInTheDocument()
})

it('should render theme and hieght correctly', () => {
  const { getByTestId } = render(<Header themeClass="dark"></Header>)
  const component = getByTestId('header-test')
  expect(component.classList.contains('dark')).toBe(true)
  expect(component.style.height).toBe('70px')
})

it('should render title correctly', () => {
  const { getByTestId } = render(<Header themeClass="dark"></Header>)
  const component = getByTestId('header-text-test')
  expect(component).toHaveTextContent('W-ScheduleViewer')
  expect(component.classList.contains('dark')).toBe(true)
  expect(component.style.fontWeight).toBe('bold')
})

it("should contain today's date correctly", () => {
  const { getByTestId } = render(<Header></Header>)
  const component = getByTestId('today-test')
  expect(component).toHaveTextContent(new Date().toDateString())
})

it('should render profile img correctly', () => {
  const { getByTestId } = render(<Header></Header>)
  const component = getByTestId('profile-img-test')
  expect(component).toBeInTheDocument()
  expect(component).toHaveAttribute('height', '34')
  expect(component.getAttribute('src')).not.toBe(null)
})

// it('should change theme to:full-moon', () => {
//   const component = render(<Header themeClass="dark"></Header>)
//   const changeTheme = jest.fn()
//   const testID = component.getByTestId('full-moon-test')
//   fireEvent.click(testID)
//   expect(changeTheme).toHaveBeenCalledTimes(1)
// })

// test('calls onClick prop when clicked', () => {
//   const handleClick = jest.fn()
//   render(<Button onClick={handleClick}>Click Me</Button>)
//   fireEvent.click(screen.getByText(/click me/i))
//   expect(handleClick).toHaveBeenCalledTimes(1)
// })
