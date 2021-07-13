/* eslint-disable no-undef */
/**
 * @jest-environment  jsdom
 */

import React from 'react'
import Sidebar from '../Sidebar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('should render without crashing', () => {
  const { getByTestId } = render(<Sidebar></Sidebar>)
  const component = getByTestId('sidebar-test')
  expect(component).toBeInTheDocument()
})
