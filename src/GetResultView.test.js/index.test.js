import React from 'react'
import {render, findByText, queryByText} from '@testing-library/react'

import GetResultView from '../GetResultView'

test('renders not found message', async () => {
  const {container} = render(<GetResultView />)

  const notFoundMessage = await findByText(
    container,
    'IT IS DRAW',
    'YOU LOSE',
    'YOU WON',
  )

  expect(notFoundMessage).toBeInTheDocument()
  expect(notFoundMessage.tagName).toBe('P')
})
