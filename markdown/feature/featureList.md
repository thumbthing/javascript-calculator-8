# Feature List

---

## 기능 목록

- [입력: async userInput()](#입력)
- [구분자: getPattern()](#구분자)
- [분리-변환: getNumbers()](#분리-변환)
- [유효성 검사: checkInput()](#유효성-검사)
- [계산: addNumber()](#계산)
- [출력: printResult()](#출력)

---

## 전체적인 기능 흐름

1. 사용자에게 안내 문구가 출력된다.
2. 사용자에게 입력을 받는다.
3. 입력 받은 문자에서 커스텀 구분자 문자를 검사한다.  
    1. 커스텀 구분자가 존재하는지 검사한다.
    2. 커스텀 구분자가 유효한 형식으로 입력되었는지 검사한다.
    3. 커스텀 구분자가 존재하고, 유효할 경우 기본 구분자에 커스텀 구분자를 추가한다.
    4. 구분자들의 패턴을 명시하는 정규식을 반환한다.
4. 구분자들을 기준으로 입력값을 분리한다.
5. 분리된 입력값을 검사한다.
    1. 양의 정수 이외의 값이 존재하는지 검사한다.
        - 유효한 입력값
            1. 양의 정수
            2. 빈값
        - 유효하지 않은 입력값
            1. 소수
            2. 음수
            3. 문자
    2. 기본 구분자-커스텀 구분자 이외의 구분자 존재를 파악한다.
    3. 1,2 중에 해당하는 케이스가 존재할 경우 에러를 발생시킨다.
    4. 전부 유효할 경우 분리된 숫자들을 반환한다.
6. 유효성 검사를 통과하여 변환된 입력 값들을 더한다.
7. 더해진 결과값을 출력한다.

---

## 입-출력

### 입력

1. 사용자에게 안내 문구를 화면에 출력한다.
2. 사용자에게 입력받은 문자를 반환한다.

```javascript
  // 입력 기능
  async userInput() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return INPUT;
  } 
```

### 출력

1. 생성된 결과로 출력할 문자열을 생성한다.
2. 생성된 문자열을 화면에 출력한다.

```javascript
  // 결과 출력
  printResult(result) {
    const RESULT_STRING = `결과 : ${result}`;
    Console.print(RESULT_STRING);
  }
```

---

### 구분자

1. 기본 구분자를 선언한다.
2. 입력값에 커스텀 구분자가 입력되었는지 확인한다.
    1. 커스텀 구분자 서식의 시작과 맞게 입력 되었는지 확인한다.
    2. 커스텀 구분자 서식의 시작과 끝 사이의 문자를 잘라낸다.
    3. 잘라낸 커스텀 구분자에 포함된 특수 문자를 escape 한다.
    4. 기본 구분자 배열에 최종 변환된 커스텀 구분자를 추가한다.
3. 최종적으로 정의된 구분자 배열로 정규식을 생성한다.
4. 생성된 정규식을 반환한다.

```javascript
  // 구분자 정의
  getPattern(userInput) {
    const SEPARATOR_LIST = [':', ','];

    if (userInput.startsWith('//')) {
      const START_INDEX = 2;
      const END_POSITION = userInput.lastIndexOf('\\n');
      const END_INDEX = END_POSITION === -1 ? undefined : END_POSITION;

      const CUSTOM_SEPARATOR = userInput.slice(START_INDEX, END_INDEX);
      const ESCAPED_SEPARATOR = [...CUSTOM_SEPARATOR].map((char) => char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

      SEPARATOR_LIST.push(ESCAPED_SEPARATOR.join(''));
    }

    const SEPARATOR_REGEXP = new RegExp(`(?:${SEPARATOR_LIST.join('|')})`)
  
    return SEPARATOR_REGEXP;
  }
```

---

### 분리-변환

1. 입력값을 자른다.
    - 커스텀 구분자 입력 부분을 제외한 문자열로 자른다.
        1. '\n'의 마지막 인덱스값을 구한다.
        2. '\n' 의 마지막 인덱스 값을 검사한다.
            - 인덱스 값이 -1 일 경우 자를 위치를 0으로 설정
            - 인덱스 값이 -1이 아닐 자를 위치를 '\n' 마지막 인덱스 + 2로 설정
2. 잘라진 입력값을 구분자 정규식으로 분리한다.
3. 분리된 입력값들을 숫자로 변환한다.
4. 변환된 입력값을 반환한다.

```javascript

  // 계산할 숫자 반환
  getNumbers(userInput, separatorRegexp) {
    const SEPARATOR_LAST_INDEX = userInput.lastIndexOf('\\n');
    let sliceIndex = 0;

    if (SEPARATOR_LAST_INDEX !== -1) {
      sliceIndex = SEPARATOR_LAST_INDEX + 2;
    }

    const STRING_NUMBERS = userInput.slice(sliceIndex);
    const NUMBER_LIST = STRING_NUMBERS.split(separatorRegexp);
    const NUMBERS = NUMBER_LIST.map((num) => Number(num));
    
    return NUMBERS
  }
```

---

### 유효성 검사

1. 구분자로 분리된 숫자로 변환된 입력값들을 순회한다.
2. 순회시 3가지를 검사한다.
    1. 변환된 요소의 값이 숫자가 아닌 경우
    2. 음수인 경우
    3. 소수인 경우
3. 검사된 3가지 경우 중에 하나라도 해당하는 경우 error를 생성해서 던진다.

```javascript
  // 유효성 검사
  checkInput(numbers) {
    numbers.forEach((num) => {
      // 숫자가 아닐 경우
      const IS_NOT_NUMBER = Number.isNaN(num);

      // 음수일 경우
      const IS_NEGATIVE = num < 0;

      // 소수일 경우
      const IS_DICIMAL = (Math.floor(num) !== num || Math.ceil(num) !== num);

      if (IS_NOT_NUMBER || IS_NEGATIVE || IS_DICIMAL) {
        throw new Error('[ERROR]');
      }
    });
  }
```

## 계산

1. 검증이 완료된 입력값들을 전부 더한다.
2. 더해진 결과값을 반환한다.

```javascript
  // 검증 완료된 입력값을 전부 계산
  addNumber(numbers) {
    const RESULT = numbers.reduce((acc, cur) => acc + cur, 0);

    return RESULT;
  }
```
