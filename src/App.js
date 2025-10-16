import { Console } from "@woowacourse/mission-utils";

class App {

  // 입력 기능
  async userInput() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return INPUT;
  } 

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

  // 검증 완료된 입력값을 전부 계산
  addNumber(numbers) {
    const RESULT = numbers.reduce((acc, cur) => acc + cur, 0);

    return RESULT;
  }

  async run() {
    try {
      const USER_INPUT = await this.userInput();
      const SEPARATOR_REGEXP = this.getPattern(USER_INPUT);
      const NUMBERS = this.getNumbers(USER_INPUT, SEPARATOR_REGEXP);
      this.checkInput(NUMBERS);
      const RESULT = this.addNumber(NUMBERS);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
