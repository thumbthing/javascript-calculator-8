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

  async run() {
    const USER_INPUT = await this.userInput();
    const SEPARATOR_REGEXP = this.getPattern(USER_INPUT);
    console.log(SEPARATOR);
  }
}

export default App;
