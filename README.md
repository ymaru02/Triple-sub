# Triple 2022 Frontend 과제

## Description

> 2022.07.04 - 2022.07.12



### 실행 방법

```shell
git clone https://github.com/ymaru02/Triple-sub.git

npm install
npm start
```



### 사용 기술

- TypeScript
  - 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거합니다.
  - 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있습니다.
  
- styled-components
  - Javascript 안에 CSS 를 작성 가능합니다.
  - CSS 가 전역으로 중첩되지 않도록 만들어 줍니다.
  - 컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있다.



## Usage파일 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜badge-apple4x.png
 ┃ ┣ 📜play-store2x.png
 ┃ ┗ 📜triple2x.png
 ┣ 📂components
 ┃ ┣ 📜Awards.tsx				---> 수상내역 파일
 ┃ ┣ 📜ContentImg.tsx			---> 서비스 로고 파일
 ┃ ┗ 📜Metrics.tsx				---> 통계 텍스트 파일
 ┣ 📂hooks
 ┃ ┗ 📜useCountUp.tsx			---> 숫자 올림 제어 파일
 ┣ 📂styles
 ┃ ┣ 📜Animation.ts				---> keyframes 파일
 ┃ ┗ 📜KeyFrames.ts				---> Animation 파일
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

#### hooks

`useCountUp.tsx`

> FPS (Frames Per Second)
>
>- 60fps 지정
>
>**[Easing 함수](https://easings.net/ko)**는 시간 흐름에 따른 매개변수의 변화율을 지정 
>
>- easeOutExpo
>
>```typescript
>  function easeOutExpo(x: number): number {
>    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
>  }
>```
>

#### styles

`Animation.ts` 

```typescript
export const FadeInContainer = styled.div<{ y: number }>`
  animation-name: ${opacity}, ${(props) => translateY(props.y)};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`
```

`KeyFrames.ts`

```typescript
export const translateY = (y: number) => keyframes`
  0% {
    transform: translateY(${y}px);
  }
  100% {
    transform: translateY(0);
  }
`

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
```

- 개별적 keyframes을 이용하여 Animation 재생

