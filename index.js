import { observable, reaction, computed, autorun } from 'mobx';

/**
 * 1. Observable State (관찰 받고 있는 상태)
 * 관찰 할 수 있는 상태
 * 쉽게 관찰 받고 있는 상태 => 변화면 어떤 부분이 변했는지 알 수 있음
 */

/**
 * 2. Computed Value (연산된 값)
 * 값이 바뀔때만 새로 연산하게 하고, 바뀌지 않았다면 그냥 기존의 값을 사용
 */

/**
 * 3. Reaction (반응)
 * Reaction 과 computed Value 는 비슷하다.
 * Computed Value: 우리가 특정 값을 연산 해야 될 때에만 처리
 * Reaction: 값이 바뀜에 따라 해야 할 일을 정하는 것을 의미
 */

/**
 * 4. Action (행동)
 * 상태의 변화를 일으키는 것
 * 예시로 calculator의 내부 값이 변화를 일으키는 코드를 호출한다.
 * 리덕스와 달리 액션을 객체형태로 만들지 않는다.
 */

/**
 * 리액트 없이 MOBX 사용 하기
 */

// 1. Observable State 만들기
// calculator 변화가 일어나면 감지
const calculator = observable({
    a: 1,
    b: 2
});
console.log('calculator', calculator);

// 2. reaction
// 특정 값이 바뀔 때 어떤 잓업을 하고 싶다면 reaction 함수 사용
reaction(
    () => {
      return calculator.a
    },
    (value, reaction) => {
        console.log(value, `a 값이 [${value}]로 바뀌었다.`);
    }
)

calculator.a = 300;
calculator.a = calculator.a + 100;

// 3. computed
// 연산된 값을 사용해야 할 때 사용
// 조회할 때 만다 특정 작업을 처리하는 것이 아니라
// 이 값에서 의존하는 값이 바뀔 때 미리 값을 계산해놓고 조회힐 때는 캐싱된 데이터를 사용

// 특정 값 캐싱
const sum = computed(()=>  {
    console.log('계산중이에요!');
    return calculator.a + calculator.b;
})
sum.observe(() => calculator.a); // a 값을 주시
sum.observe(() => calculator.b); // b 값을 주시

// 여러번 조회해도 computed 안의 함수를 다시 호출 하지 않음
console.log(sum.value);
console.log(sum.value);
console.log(sum.value);

// 내분 값이 바뀌면 다시 호출 함
calculator.b = 2000;
console.log(sum.value);

console.log('------------ autorun 시작---------------');
