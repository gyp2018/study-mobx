import { types } from 'mobx-state-tree'

export const WishListItem = types
  .model({
      price: types.number,
      name: types.string,
    image: types.optional(types.string, '')
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeImage(newImage) {
      self.image = newImage
    }
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))
