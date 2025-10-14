# AngularJS Git Commit Message Conventions

[참고자료](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

---

## Format

### 기본 작성 양식

> <[type](#type)>(<[scope](#scope)>): <[subject](#subject)>
>
> <[body](#body)>
>
> <[footer](#footer)>

### type

해당하는 작업을 커밋할 때 아래의 허용된 type을 지정  

  1. `feat`: (feature) 기능 개발, 추가  
  2. `fix`: (bug fix) 버그 수정  
  3. `docs`: (documentation) `.md`파일 등 문서를 수정  
  4. `style`: (formatting, missing semi colons...) 기능의 수정이 아닌, 코드의 작성 스타일 수정
  5. `refactor`: 코드의 외부 기능을 유지하면서 내부 구조의 개선시
  6. `test`: (add test) 테스트 케이스 추가  
  7. `chore`: (maintain) 개발 환경 설정, 빌드, 배포, 패키지 관리, 의존성 업데이트 시  

### scope  

commit의 범위를 지정. (ex: calculate, validate...)

### subject  

commit 할 작업의 제목  

- 명령형-현재 시제로 제목을 작성  
- 첫 글짜에 대문자 사용 x  
- 문장의 끝에 `.` 사용 x  

### body  

commit 할 작업의 상세 내용  

- 50자 내로 작성
- 명령형-현재 시제로 작성

### footer  

중대한 변경사항 명시  

- 모든 변경 사항에 대한 설명, 변경 사유, 마이그레이션 안내를 명시해야함  
- `issues` 명시  
  - 해결된 버그가 존재할 경우 `Closes` 키워드를 포함한 한줄을 추가하여 이슈 코드(ex: `#131420`...)도 같이 명시
  - 여러개의 issue가 해결되었을 경우 여러개의 이슈 코드를 작성 가능  

#### example

```zsh

git commit -m 'feat(validate): 터미널 입력 텍스트 유효성

입력값에 대한 유효성 처리
- 정수 이외의 값 (음수, 한글, 영어, 특수문자 포함) 포함시 예외처리

Closes #111
Breaks input.validate, input.run 으로 대체해서 사용해야함 

```
