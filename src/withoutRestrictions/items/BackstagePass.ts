import { Item } from './Item';

export default class BackstageItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update(): void {    
    this.sellIn <= 0 ? this.loseQuality() : this.increaseBackstageQuality();
    
    this.decreaseSellInByOne();
  }

  private increaseBackstageQuality() {
    this.increaseQualityByOne();
    if (this.sellIn <= 10) this.increaseQualityByOne();
    if (this.sellIn <= 5) this.increaseQualityByOne();
  }
}
