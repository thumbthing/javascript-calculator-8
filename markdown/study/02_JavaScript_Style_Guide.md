# JavaScript style guide

[Airbnb JavsScript style guide](https://github.com/airbnb/javascript)

---

## 우아한테크코스 스타일 가이드

### 네이밍 컨벤션

---

#### 기본

- 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.  
- 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않는다.  

##### Bad case

```javascript
function $doSomething() {
  ...
}

const isTrue = true;

```

##### Good case

```javascript

function doSomething() {
  ...
}

const IS_TRUE = true;

```

---

## Airbnb 스타일 가이드

### References

1. `const`를 사용하고, `var`의 사용은 지양한다.
2. 값을 다시 할당해야할 경우, `let`을 사용한다.

### Objects

1. literal 방식으로 object를 사용해라.  
2. 동적으로 할당되는 요소의 경우 object literal 안에서 정의해라.
3. object 메서드는 shorthand로 작성해라.
4. property 값은 shorthand로 작성해라.
5. shorthand로 작성된 properties는 구룹을 지어서 object의 선언부에 작성해라
6. Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf
7. Prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted.

### Arrays

1. 배열을 선얼할때 literal 방식으로 선언해라.  
2. 배열에 요소를 추가할 경우, `push()` 메서드를 사용해라.  
3. 배열을 복사할 경우 spreads `...`를 사용해라.  
4. iterable한 obejct를 배열로 변환할 때 `...`를 사용해라.  
5. 배열과 유사한 object를 배열로 변환할 경우 `Array.from`을 사용해라.
6. iterable한 것을 변환할 때 `...`를 사용하는 대신 `Array.from`을 사용해서 중간 생성 배열의 생성을 방지해라  
7. Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects,  
8. Use line breaks after opening array brackets and before closing array brackets, if an array has multiple lines  

---

### Destructing

1. Use object destructuring when accessing and using multiple properties of an object  
2. Use array destructuring  
3. Use object destructuring for multiple return values, not array destructuring  

---

### Strings

1. Use single quotes '' for strings  
2. Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.  
3. When programmatically building up strings, use template strings instead of concatenation  
4. Never use eval() on a string; it opens too many vulnerabilities  
5. Do not unnecessarily escape characters in strings  

---

### Functions

1. Use named function expressions instead of function declarations  
2. Wrap immediately invoked function expressions in parentheses  
3. Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears  
4. Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.
5. Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.
6. Never use arguments, opt to use rest syntax ... instead  
7. Use default parameter syntax rather than mutating function arguments.  
8. Avoid side effects with default parameters.  
9. Always put default parameters last.
10. Never use the Function constructor to create a new function.  
11. Spacing in a function signature.
12. Never mutate parameters  
13. Never reassign parameters  
14. Prefer the use of the spread syntax ... to call variadic functions  
15.  Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.