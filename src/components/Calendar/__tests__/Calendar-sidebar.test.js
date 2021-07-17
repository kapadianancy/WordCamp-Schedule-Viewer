/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CalendarSidebar from '../Calendar-sidebar'
import renderer from 'react-test-renderer'

describe('#Calendar Sidebar', () => {
  const props = {
    themeClass: 'dark'
  }
  it('should render without crashing', () => {
    const { getByTestId } = render(<CalendarSidebar {...props}/>)
    const component = getByTestId('calendar-sidebar-test')
    expect(component).toBeInTheDocument()
  })
  it('should render theme correctly', () => {
    const { getByTestId } = render(<CalendarSidebar {...props}/>)
    const component = getByTestId('calendar-sidebar-test')
    expect(component.firstElementChild.classList.contains('dark')).toBe(true)
  })
  it('should match snapshot', () => {
    const tree = renderer.create(<CalendarSidebar {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
