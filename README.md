# PIKAR-FRONT-CUSTOMER

## [Project 생성/세팅]()

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
