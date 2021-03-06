import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree'
import { reaction } from 'mobx'
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

it('can creat a wishist', () => {
  const list = WishList.create({
    items: [{
      'name': 'PlayStation 4 Pro',
      'price': 499.00,
    }]
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(499.00)
})

it('can add new items', () => {
  const list = WishList.create()
  const states = []
  onSnapshot(list, snapshot => {
    states.push(snapshot)
  })

  list.add({
    'name': 'XBox One',
    'price': 399.00,
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe('XBox One')
  
  list.items[0].changeName('Nintendo Switch')
  expect(list.items[0].name).toBe('Nintendo Switch')

  expect(getSnapshot(list)).toMatchSnapshot()
  expect(states).toMatchSnapshot()
})

it('can add new items - 2', () => {
  const list = WishList.create()
  const patches = []
  onPatch(list, patch => {
    patches.push(patch)
  })

  list.add({
    'name': 'XBox One',
    'price': 399.00,
  })

  list.items[0].changeName('Nintendo Switch')

  expect(patches).toMatchSnapshot()
})

it('can calculate the totalPrice of a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Switch',
        price: 350.00
      },
      {
        name: 'Lego Techinc',
        price: 349.99
      }
    ]
  })

  expect(list.totalPrice).toBe(699.99)

  let changed = 0
  reaction(() => list.totalPrice, () => changed++)
  expect(changed).toBe(0)

  list.items[0].changeName('XBox One')
  expect(changed).toBe(0)
  list.items[0].changePrice(200)
  expect(changed).toBe(1)
})
