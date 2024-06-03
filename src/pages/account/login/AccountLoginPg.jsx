import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'utils/const/routes';
import LayoutCp from 'components/layout/LayoutCp';
import { apiLogin } from 'apis/account';
import { funcRuleEmail, funcRulePassword } from 'utils/rules/rules';
import { session } from 'utils/storage/storage';

const AccountLoginPg = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location?.state?.email ? location.state.email : '');
  const [password, setPassword] = useState('');

  const onClickSubmit = () => {
    const apiSucc = (res) => {
      const { data, success } = res;
      if (success) {
        const { authToken, email, name, cellNumber, birthDate, socialLogin } = data;
        if (authToken?.accessToken) session.setToken(authToken?.accessToken);
        if (authToken?.refreshToken) session.setRefreshToken(authToken?.refreshToken);
        session.setLoginUser({ email, name, cellNumber, birthDate, socialLogin });
        navigate(ROUTES.MAIN);
      } else {
        alert('로그인에 실패하였습니다');
      }
    };
    apiLogin(email, password, apiSucc);
  };
  const onClickValidationLogin = (e) => {
    e.preventDefault();

    const checkEmail = funcRuleEmail(email);
    const checkPassword = funcRulePassword(password);

    if (!checkEmail) console.log('아이디 형식에 어긋납니다.');
    if (!checkPassword) console.log('비밀번호 형식에 어긋납니다.');

    if (checkEmail && checkPassword) onClickSubmit();
  };

  return (
    <LayoutCp headerTitle="로그인" button="close" onClickClose={() => navigate(ROUTES.LOGIN_MAIN)}>
      <section className="content_body">
        <div className="wrap">
          (
          <dl className="login_title_dl">
            <dt className="FontS28B">
              아이디와 비밀번호를
              <br />
              입력해 주세요.
            </dt>
            <dd className="FontS14">회원가입시 입력한 메일주소를 입력해 주세요.</dd>
          </dl>
          <ul className="join_ul">
            <li>
              <h3 className="FontS16B">아이디(이메일)</h3>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="영문 이메일 주소를 입력해 주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <h3 className="FontS16B">비밀번호</h3>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="영문, 숫자 포함 8자 이상"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
          </ul>
        </div>

        <button className="Bfix_btn" onClick={onClickValidationLogin}>
          로그인
        </button>
      </section>
    </LayoutCp>
  );
};

export default AccountLoginPg;
