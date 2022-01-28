# 정규표현식

정규식

## 역할

- 문자 검색
- 문자 대체
- 문자 추출

### 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')
// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제

```js
const str = `
010 0100 1020
ssj@naver.com
https://www
the lazy
abbcccdddd
`
```

## 플래그

