import { Console } from "@woowacourse/mission-utils";

class App {
  async userInput() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return INPUT;
  } 

  async run() {
    const USER_INPUT = await this.userInput();
  }
}

export default App;
