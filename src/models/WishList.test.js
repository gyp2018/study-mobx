import { WishListItem, WishList } from './WishList'

it('can create a instance of model', () => {
  const item = WishListItem.create({
    'name': 'PlayStation 4 Pro',
    'price': 499.00,
  })

  expect(item.price).toBe(499.00)
  expect(item.image).toBe('')
})

it('can cteat a wishist', () => {
  const item = WishListItem.create({
    'name': 'PlayStation 4 Pro',
    'price': 499.00,
  })
  const list = WishList.create({
    items: [{
      'name': 'PlayStation 4 Pro',
      'price': 499.00,
    }]
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(499.00)
})
