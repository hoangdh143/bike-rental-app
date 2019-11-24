import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
    .ant-layout-header {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .login-header {
      color: #f0f2f5;
    }
    
    .login-form {
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;
    }
    
    .error-message {
      color: #f5222d;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    
    .login-form-forgot {
      float: right;
    }
    .login-form-button {
      width: 100%;
    }
`;
