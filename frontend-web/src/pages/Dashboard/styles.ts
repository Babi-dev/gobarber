import styled from 'styled-components';
import { shade } from 'polished';

import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

export const Container = styled.div`
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;

    background: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;

  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    line-height: 24px;

    display: flex;
    flex-direction: column;

    span {
      color: #F4EDE8;
    }

    a {
      text-decoration: none;
      color: #FF9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;

  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;

    display: flex;
    align-items: center;

    font-weight: 500;
    color: #FF9000;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #FF9000;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    font-size: 20px;
    font-weight: 400;
    color: #999591;
  }

  div {
    position: relative;
    margin-top: 24px;
    padding: 16px 24px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background: #3E3B47;

    &::before {
      position: absolute;
      content: '';
      width: 2px;
      height: 80%;
      top: 10%;
      left: 0;
      background: #FF9000;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #FFF;
    }

    span {
      margin-left: auto;

      display: flex;
      align-items: center;

      color: #999591;

      svg {
        margin-right: 8px;
        color: #FF9000;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    margin-bottom: 16px;
    padding-bottom: 16px;

    display: block;

    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3E3B47;
    color: #999591;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    width: 70px;
    margin-left: auto;

    display: flex;
    align-items: center;

    color: #F4EDE8;

    svg {
      margin-right: 8px;
      color: #FF9000;
    }
  }

  div {
    flex: 1;
    margin-left: 24px;
    padding: 16px 24px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background: #3E3B47;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      font-size: 20px;
      color: #FFF;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 10px;
    font-size: 16px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeft}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRight}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #666360;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fff;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 0.6rem;
    color: #232129 !important;
  }
`;
