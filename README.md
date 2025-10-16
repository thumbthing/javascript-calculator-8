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
