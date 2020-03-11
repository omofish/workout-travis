import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import EquipmentForm from './EquipmentForm'

test('You can select menu items', () => {
  const selectEqm = jest.fn()

  const {getByTestId} = render(<EquipmentForm />)

  fireEvent.click(getByTestId('eqmcheck'))
  expect(selectEqm).toHaveBeenCalledTimes(1)
})