import { Item } from './Item';

export default class SulfurasItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, 80)
  }

  update(): void {
    this.decreaseSellInByOne();
  }
}
