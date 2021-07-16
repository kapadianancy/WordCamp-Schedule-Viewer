/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */
import React from 'react'
import { render, cleanup, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CalendarBody from '../Calendar-body'

describe('#Calendar Body', () => {
  const props = {
    themeClass: 'dark'
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve('data')
    })
  )

  afterEach(() => {
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

  it('should click event once', () => {
    const component = render(<CalendarBody {...props}/>)
    const event = component.container.querySelector('.card-body').firstElementChild
    console.log('event--', event)
    fireEvent.click(event)
    expect(event.).toHaveBeenCalledTimes(1)
  })
})
