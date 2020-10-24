const MINIMUM_QUALITY = 0;
const MAXIMUM_QUALITY = 50;

export abstract class Item {
  constructor(private _name: string, private _sellIn: number, private _quality: number) {}

  get name() {
    return this._name;
  };

  get sellIn() {
    return this._sellIn;
  }

  get quality() {
    return this._quality;
  }

  protected decreaseQualityByOne() {
    this.isGreaterThanMinimum() ? this._quality-- : this._quality;
  }

  protected increaseQualityByOne() {
    this.isLessThanMaximum() ? this._quality++ : this._quality;
  }

  protected decreaseSellInByOne() {
    this._sellIn--;
  }

  protected increaseSellInByOne() {
    this._sellIn++;
  }

  protected loseQuality() {
    this._quality = 0;
  }

  private isLessThanMaximum() {
    return this._quality < MAXIMUM_QUALITY;
  }

  private isGreaterThanMinimum() {
    return this._quality > MINIMUM_QUALITY;
  }

  abstract update();
}