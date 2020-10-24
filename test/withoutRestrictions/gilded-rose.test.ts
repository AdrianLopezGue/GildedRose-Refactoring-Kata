
import { GildedRose } from '../../src/withoutRestrictions/gilded-rose';
import AgedBrieItem from '../../src/withoutRestrictions/items/AgedBrieItem';
import BackStagePass from '../../src/withoutRestrictions/items/BackstagePass';
import CommonItem from '../../src/withoutRestrictions/items/CommonItem';
import ConjuredItem from '../../src/withoutRestrictions/items/ConjuredItem';
import SulfurasItem from '../../src/withoutRestrictions/items/SulfurasItem';

let quality;
let sellIn;

describe('Common Item', () => {
  it('should decrease sellIn value and quality', () => {
    quality = 10;
    sellIn = 10;

    const gildedRose = new GildedRose([new CommonItem('item', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);
  });

  it('quality cannot be negative', () => {
    quality = 0;
    sellIn = 10;

    const gildedRose = new GildedRose([new CommonItem('item', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(9);
  });

  it('should degrade quality by 2 if sellIn is equal or less than 0', () => {
    quality = 10;
    sellIn = 0;

    const gildedRose = new GildedRose([new CommonItem('item', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});

describe('Aged Brie', () => {
  it('should increase quality when update', () => {
    quality = 10;
    sellIn = 10;

    const gildedRose = new GildedRose([new AgedBrieItem('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it('should not increase quality more than 50 when update', () => {
    quality = 50;
    sellIn = 10;

    const gildedRose = new GildedRose([new AgedBrieItem('Aged Brie', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe('Sulfuras', () => {
  it('should never decreases quality when update', () => {
    quality = 50;
    sellIn = 10;

    const gildedRose = new GildedRose([new SulfurasItem('Sulfuras', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(9);
  });
});

describe('Backstage Pass', () => {
  it('should increase quality when update', () => {
    quality = 20;
    sellIn = 20;

    const gildedRose = new GildedRose([new BackStagePass('Backstage Pass', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it('should increase by 2 when there are 10 days or less in quality when update', () => {
    quality = 20;
    sellIn = 10;

    const gildedRose = new GildedRose([new BackStagePass('Backstage Pass', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it('should increase by 3 when there are 10 days or less in quality when update', () => {
    quality = 20;
    sellIn = 5;

    const gildedRose = new GildedRose([new BackStagePass('Backstage Pass', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it('quality should drop to 0 when concert has passed (sell in <= 0)', () => {
    quality = 20;
    sellIn = 0;

    const gildedRose = new GildedRose([new BackStagePass('Backstage Pass', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('Conjured Item', () => {
  it('should decrease quality by 2 when update', () => {
    quality = 20;
    sellIn = 0;

    const gildedRose = new GildedRose([new ConjuredItem('Conjured', sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});
