import { observable, reaction, computed, autorun } from 'mobx';

/**
 * 1. Observable State (관찰 받고 있는 상태)
 * 관찰 할 수 있는 상태
 * 쉽게 관찰 받고 있는 상태 => 변화면 어떤 부분이 변했는지 알 수 있음
 */
// **** Observable State 만들기
const calculator = observable({
    a: 1,
    b: 2
});
console.log('calculator', calculator);

/**
 * 2. Computed Value (연산된 값)
 * 값이 바뀔때만 새로 연산하게 하고, 바뀌지 않았다면 그냥 기존의 값을 사용
 */

/**
 * 3. Reaction (반응)
 *
 */
