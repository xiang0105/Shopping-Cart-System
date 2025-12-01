import { createApp } from './vue.esm-browser.js';

const app = createApp({
    data() {
        const categories = [
            { name: '美味麵食' },
            { name: '人氣商品' },
            { name: '台灣特色' },
            { name: '精致點心' },
            { name: '期間限定' }
        ];

        const goods = [
            { index: 0, name: "巧克力可頌", image: "./images/01.jpg", price: 90, unit: "2入每袋", stock: 3, categories: [0, 1], ingredients: ["麵粉", "可可粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "巧克力"], introduction: "醇香巧克力裹覆的可頌。" },
            { index: 1, name: "牛奶可頌", image: "./images/02.jpg", price: 90, unit: "3入每袋", stock: 3, categories: [0], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋"], introduction: "純淨牛奶味的可頌。" },
            { index: 2, name: "楓糖可頌", image: "./images/03.jpg", price: 110, unit: "4入每袋", stock: 6, categories: [0], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "楓糖"], introduction: "楓糖風味的精緻可頌。" },
            { index: 3, name: "經典菠蘿", image: "./images/04.jpg", price: 60, unit: "顆", stock: 4, categories: [0, 1, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水"], introduction: "口感酥脆的經典菠蘿麵包。" },
            { index: 4, name: "巧克力菠蘿", image: "./images/05.jpg", price: 60, unit: "顆", stock: 5, categories: [0, 2], ingredients: ["麵粉", "可可粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "巧克力", "水"], introduction: "巧克力與菠蘿的完美組合。" },
            { index: 5, name: "原味生吐司", image: "./images/06.jpg", price: 120, unit: "12片每包", stock: 5, categories: [0, 1, 4], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水"], introduction: "簡單純淨的原味吐司。" },
            { index: 6, name: "火腿起司吐司", image: "./images/07.jpg", price: 145, unit: "12片每包", stock: 5, categories: [0, 1, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水", "乳酪絲", "起司片", "火腿片"], introduction: "美味火腿與芝士的絕妙搭配。" },
            { index: 7, name: "蔥花麵包", image: "./images/08.jpg", price: 50, unit: "顆", stock: 4, categories: [0, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水", "蔥花"], introduction: "蔥香四溢的麵包。" },
            { index: 8, name: "肉鬆麵包", image: "./images/09.jpg", price: 50, unit: "顆", stock: 3, categories: [0, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水", "肉鬆", "美奶滋"], introduction: "經典可口的肉鬆麵包。" },
            { index: 9, name: "香草麩奶甲", image: "./images/10.jpg", price: 60, unit: "6入每袋", stock: 5, categories: [1, 2, 3], ingredients: ["麵粉", "糖", "鹽", "雞蛋", "水", "奶油", "煉乳", "香草香精"], introduction: "香草風味的麩奶甲。" },
            { index: 10, name: "草莓麩奶甲", image: "./images/11.jpg", price: 60, unit: "6入每袋", stock: 3, categories: [1, 2, 3, 4], ingredients: ["麵粉", "糖", "鹽", "雞蛋", "水", "奶油", "煉乳", "香草香精", "草莓香精", "草莓果醬"], introduction: "新鮮草莓的酸甜滋味。" },
            { index: 11, name: "奶酥起酥麵包", image: "./images/12.jpg", price: 50, unit: "顆", stock: 6, categories: [0, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水", "奶粉", "酥皮", "白芝麻"], introduction: "酥脆的奶酥與麵包的完美融合。" },
            { index: 12, name: "肉鬆起酥麵包", image: "./images/13.jpg", price: 50, unit: "顆", stock: 5, categories: [0, 2], ingredients: ["麵粉", "奶油", "糖", "酵母", "牛奶", "鹽", "雞蛋", "水", "酥皮", "白芝麻", "肉鬆"], introduction: "鬆脆肉鬆的口感與酥脆麵包的絕妙組合。" },
            { index: 13, name: "奶油虎皮蛋糕", image: "./images/14.jpg", price: 120, unit: "個", stock: 2, categories: [3, 4], ingredients: ["雞蛋", "糖", "水", "沙拉油", "麵粉", "蛋黃", "玉米粉"], introduction: "香濃奶油與鬆軟蛋糕的極致享受。" },
            { index: 14, name: "巧克力虎皮蛋糕", image: "./images/15.jpg", price: 100, unit: "個", stock: 1, categories: [3], ingredients: ["雞蛋", "糖", "水", "沙拉油", "麵粉", "蛋黃", "玉米粉", "可可粉", "巧克力"], introduction: "濃郁巧克力裹覆的虎皮蛋糕。" },
            { index: 15, name: "經典千層派", image: "./images/16.jpg", price: 80, unit: "個", stock: 3, categories: [3], ingredients: ["雞蛋", "糖", "水", "沙拉油", "麵粉", "蛋黃"], introduction: "層次分明的經典口味派。" },
            { index: 16, name: "巧克力千層派", image: "./images/17.jpg", price: 80, unit: "個", stock: 3, categories: [3], ingredients: ["雞蛋", "糖", "水", "沙拉油", "麵粉", "蛋黃", "可可粉", "巧克力"], introduction: "巧克力愛好者的不二選擇。" },
        ];

        const cart = Array(goods.length).fill(0);

        return {
            categories, goods, cart,
            openDetail: false,
            currentCategory: null,
            currentGood: 0,
            filter: ''
        };
    },

    computed: {
        filteredGoods() {
            let goods = this.goods;
            if (this.currentCategory != null) {
                goods = goods.filter(item => item.categories.includes(this.currentCategory));
            }
            for (const keyword of this.filter.split(' ')) {
                goods = goods.filter(item => (item.name + item.introduction).includes(keyword) || item.ingredients.includes(keyword));
            }
            return goods;
        },

        total() {
            let total = 0;
            for (const index in this.goods) {
                total += this.goods[index].price * this.cart[index];
            }

            return total;
        }
    }
});

app.mount('#app');