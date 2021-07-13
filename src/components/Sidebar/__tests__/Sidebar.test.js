/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */

import React from 'react'
import Sidebar from '../Sidebar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

it('should render without crashing', () => {
  const { getByTestId } = render(<Sidebar></Sidebar>)
  const component = getByTestId('sidebar-test')
  expect(component).toBeInTheDocument()
})

it('should matches the snapshot', () => {
  const tree = renderer.create(<Sidebar></Sidebar>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should have correct theme class', () => {
  const { getByTestId } = render(<Sidebar themeClass="dark"></Sidebar>)
  const component = getByTestId('sidebar-test')
  expect(component.classList.contains('dark')).toBe(true)
})

it('should render image correctly', () => {
  const { getByTestId } = render(<Sidebar></Sidebar>)
  const component = getByTestId('sidebar-img-test')
  expect(component).toBeInTheDocument()
  expect(component).toHaveAttribute('height', '38')
  expect(component).toHaveAttribute('width', '38')
  expect(component.getAttribute('src')).not.toBe(null)
})
