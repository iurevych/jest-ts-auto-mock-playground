import * as React from 'react'
import { createMock } from 'ts-auto-mock'

interface CartItem {
  id: number
  price: number
  status: string
}

describe('<CartItem />', () => {
  const cartItem: CartItem = createMock<CartItem>()

  describe('Render', () => {
    it('should have price', () => {
      expect(cartItem).toHaveProperty('price')
    })
  })
})
