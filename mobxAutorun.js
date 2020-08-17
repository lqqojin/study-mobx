import { observable, reaction, computed, autorun } from 'mobx';

// Observable State 만들기
const calculator = observable({
    a: 1,
    b: 2
});

// computed 로 특정 값 캐싱
const sum = computed(() => {
    console.log('계산중이예요!');
    return calculator.a + calculator.b;
});

/**
 * autorun
 * reaction 이나 computed 의 observe 대신에 사용 될 수 있다.
 * autorun 으로 전달 해주는 함수에서 사용되는 값이 있으면 자동으로 그 값을 감찰하
 * 그 값이 바뀔 때 마다 함수가 주시되도록 해줍니다. 여
 * 여기서 만약에 computed 로 만든 값의 .get() 함수를 호출해주면, 일일이 observe 해주지 않아도 됩니다.
 */
autorun(() => console.log(`a 값이 [${calculator.a}]  로 바뀌었다.`));
autorun(() => console.log(`b 값이 [${calculator.b}]  로 바뀌었다.`));
autorun(() => sum.get());

calculator.a = 10;
calculator.b = 20;

// 여러번 조회해도 computed 안의 함수를 다시 호출하지 않지만..
console.log(sum.value);
console.log(sum.value);

calculator.a = 100;

// 내부의 값이 바뀌면 다시 호출 함
console.log(sum.value);
calculator.b = 200;
console.log(sum.value);
