import { decorate, observable, computed, autorun } from 'mobx';

class Convenience {
    constructor(data = []) {
        this.basket = data;
    }
    get total () {
        console.log('계산 중 입니다..!');
        return this.basket.reduce((prev, curr) => prev + curr.price, 0);
    }
    select(name, price) {
        this.basket.push({ name, price });
    }
}

decorate(Convenience, {
    basket: observable,
    total: computed
})

const gs25 = new Convenience();
autorun(() => gs25.total);
gs25.select('물', 800);
console.log(gs25.total);
gs25.select('콜라', 1250);
console.log(gs25.total);
