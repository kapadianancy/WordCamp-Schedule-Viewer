/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */

import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('#Header', () => {
  const props = {
    themeClass: 'dark',
    themes: ['full-moon'],
    changeTheme: jest.fn()
  }

  afterEach(() => {
    cleanup()
  })

  it('should render successfully', () => {
    const { getByTestId } = render(<Header></Header>)
    const component = getByTestId('header-test')
    expect(component).toBeInTheDocument()
  })

  it('should render theme and height correctly', () => {
    const { getByTestId } = render(<Header {...props}></Header>)
    const component = getByTestId('header-test')
    expect(component.classList.contains('dark')).toBe(true)
    expect(component.style.height).toBe('70px')
  })

  it('should render title correctly', () => {
    const { getByTestId } = render(<Header {...props}></Header>)
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

  it('should change theme to:full-moon', () => {
    const component = render(<Header {...props}></Header>)
    const testID = component.getByTestId('full-moon-test')
    fireEvent.click(testID)
    expect(props.changeTheme).toHaveBeenCalledTimes(1)
  })

  it('should match the snapshot', () => {
    const tree = renderer.create(<Header {...props}></Header>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
