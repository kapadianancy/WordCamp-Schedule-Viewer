/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import CalendarBody from '../Calendar-body'

describe('#Calendar Body', () => {
  const props = {
    themeClass: 'dark'
  }
  const originalFetch = global.fetch

  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        value: 'Testing something!'
      })
    }))
  })

  // Part 3
  afterAll(() => {
    global.fetch = originalFetch
    cleanup()
  })

  it('should render without crashing', () => {
    const { getByTestId } = render(<CalendarBody {...props}/>)
    const component = getByTestId('calendar-body-test')
    expect(component).toBeInTheDocument()
  })

  it('should render theme correctly', () => {
    const component = render(<CalendarBody {...props}/>)
    expect(component.container.querySelector('.card').classList.contains('dark')).toBe(true)
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<CalendarBody {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
