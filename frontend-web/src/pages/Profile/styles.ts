import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    background: #28262E;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: -176px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 340px;
    margin: 80px 0;

    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color:  ${shade(0.2, '#F4EDE8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  margin-bottom: 32px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: none;
    background: #FF9000;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #313E38;
    }

    &:hover {
      background: ${shade(0.2, '#FF9000')}
    }
  }
`;
