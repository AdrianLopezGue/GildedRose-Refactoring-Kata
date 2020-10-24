import GildedRose from "../../src/withRestrictions/gilded-rose";
import Item from "../../src/withRestrictions/item";

let quality;
let sellIn;


describe('Gilded Rose', function () {

    it('Normal item should decrease quality and sell In date when update', () => {
        quality = 10;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('item', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(9);
        expect(items[0].sellIn).toBe(9);
    });

    it('Normal item should divide its quality in a half if sell in is 0', () => {
        quality = 10;
        sellIn = 0;

        const gildedRose = new GildedRose([new Item('item', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(8);
    });

    it('Normal item quality attribute cannot be negative', () => {
        quality = 0;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('item', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).not.toBeLessThan(0);
    });

    it('Normal item quality cannot be up to 50', () => {
        quality = 50;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('item', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).not.toBeGreaterThan(50);
    });

    it('Aged Brie quality should increase when update', () => {
        quality = 10;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('Aged Brie', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(11);
    });

    it('Sulfuras quality cannot decrease and it is always 80', () => {
        quality = 70;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('Sulfuras', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(80);
    });

    it('Backstage pass quality should increase when update', () => {
        quality = 20;
        sellIn = 20;

        const gildedRose = new GildedRose([new Item('Backstage pass', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(21);
    });

    it('Backstage pass quality should increase by 2 when there are 10 days or less', () => {
        quality = 10;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('Backstage pass', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(12);
    });

    it('Backstage pass quality should increase by 3 when there are 5 days or less', () => {
        quality = 10;
        sellIn = 5;

        const gildedRose = new GildedRose([new Item('Backstage pass', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(13);
    });

    it('Backstage pass quality should drops to 0 after the concert', () => {
        quality = 10;
        sellIn = 0;

        const gildedRose = new GildedRose([new Item('Backstage pass', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
    });

    it('Conjured item quality should decrease by 2', () => {
        quality = 10;
        sellIn = 10;

        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(8);
    })
});