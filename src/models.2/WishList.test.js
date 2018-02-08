import { WishListItem, WishList } from './WishList'

it('can create a instance of model', () => {
  const item = WishListItem.create({
    'name': 'PlayStation 4 Pro',
    'price': 499.00,
  })

  expect(item.price).toBe(499.00)
  expect(item.image).toBe('')

  item.changeName('XBox One')
  expect(item.name).toBe('XBox One')
})

it('can cteat a wishist', () => {
  const list = WishList.create({
    items: [{
      'name': 'PlayStation 4 Pro',
      'price': 499.00,
    }]
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(499.00)
})

it('can add a items', () => {
  const list = WishList.create()
  const item = WishListItem.create({
    'name': 'XBox One',
    'price': 399.00,
  })
  list.add(item)

  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe('XBox One')
  
  list.items[0].changeName('Nintendo Switch')
  expect(list.items[0].name).toBe('Nintendo Switch')
})
