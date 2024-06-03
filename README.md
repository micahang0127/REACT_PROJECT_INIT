# REACT-PROJECT-INIT

    : React Project를 구성할 때 기본적으로 사용하는 것으로 세팅해 놓은 project의 init.
      [package.json]에 설치된 사용할 모듈들은 최신 버전으로 새로 install 하여 사용하도록 한다.

<br/>

## [구성]()

    ```

        CRA   : create-react-app
        Route : react-router-dom
        Store : redux, react-redux, @readuxjs/toolkit
        Api   : axios, 공통 api index, refreshToken 사용 로직
        utils : 자주사용하는 함수
                날짜계산(moment), 정규식 rule, 자주사용하는 함수들
        coding convention : prettier설정, 저장 시 자동 반영되도록 설정함(.vscode/settings.json)
        폴더구성 : 기본적인 폴더 구성을 한 상태

    ```

## [React Project 생성 및 세팅하기]()

1. creat-react-app 설치
   ```
       $  npx create-react-app pikar-front-customer
   ```

<br/>

2. 불필요 파일 삭제 <br/>

   ```
       /src
           App.css
           App.test.js
           index.css
           logo.svg
   ```

<br/>

3.  기본 파일 수정 <br/>

    - [App.js] <br/>

    ```
        function App() {

        return (
                <>App</>
        );
        }

        export default App;

    ```

    - [index.js] <br/>

    ```

        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        // 렌더링 최적화 확인 시, 잠시 주석처리
        // <React.StrictMode>
            <App />
        // </React.StrictMode>
        );

    ```

    4. coding convention <br/>

       1. Prettier 설치

          - VSC의 경우)
            Prettier -Code formatter

         <br/>

       2. 규칙정의 파일 생성 <br/>

       [.prettierrc.json]

       ```
           // [root/.prettierrc.json]

           {
             "trailingComma": "es5",
             "semi": true,
             "singleQuote": true,
             "tabWidth": 2,
             "useTabs": false,
             "quoteProps": "as-needed",
             "printWidth": 120
             }

       ```

     <br/>

    3. 파일 저장 시, 코드규칙 자동 적용 설정 <br/>

       (1) 폴더생성 <br/>

       ```
           [root/.vscode]
       ```

       (2) 파일생성 <br/>

       [.vscode/settings.json]

       ```
           // [settings.json]
           {
              "editor.formatOnSave": true,
              "editor.defaultFormatter": "esbenp.prettier-vscode"
           }

       ```
