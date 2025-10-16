# javascript-calculator-precourse

---

## 문서 목록

- [npm 설치 에러](./markdown/error/01_npm_install_error.md)
- [Git Commit Convention](./markdown/study/01_AngularJS_Git_Commit_Message_Conventions.md)
- [JavsScript Style Guide](./markdown/study/02_JavaScript_Style_Guide.md)
- [기능 목록](./markdown/feature/featureList.md)
- [정규식 생성 이슈](./markdown/issue/01_RegExp_custom_create.md)

---

## 작업 순서

1. 미션 저장소에서 fork
2. github 저장소의 페키지를 로컬 저장소에 clone
3. package 설치
    - [npm install 중에 발생한 error 및 해결 방법](./markdown/error/01_npm_install_error.md)
4. commit 규칙 학습-정리
    - [AngularJS Git Commit Conventions](./markdown/study/01_AngularJS_Git_Commit_Message_Conventions.md)
5. coding 컨벤션 학습-정리
    - [JavaScript Style Guide](./markdown/study/02_JavaScript_Style_Guide.md)
    - 전부 숙지하기에는 시간이 부족할 것이라 판단하여, 미션을 구현하면서 필요한 부분을 읽어가면서 추가적인 학습-정리하여 제출 전까지 지속적으로 최신화하는 방식으로 진행하기로 결정
6. 기능 목록 문서 작성
    1. 전체적인 기능의 흐름 작성
7. `App.js`에 기능의 흐름을 기반으로 구현
    - [기능목록](./markdown/feature/featureList.md)에 전체적인 기능의 흐름을 기반으로 하여 각 기능들의 상세 설명을 우선 작성 후 기능 추가
    - 구현 순서
        1. 입력 `async userInput()`
        2. 구분자 `getPattern()`
            - 발생한 이슈: [정규식 생성방식](./markdown/issue/01_RegExp_custom_create.md) 
        3. 분리-변환 `getNumbers()`
        4. 유효성 검사 `checkInput()`
        5. 계산 `addNumber()`
        6. 출력 `printResult()`

---

## 기능 흐름

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
