import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)``;

export const Container = styled.div`
  background: #cccccc;
  margin: 0 auto;
  padding: 20px 20px;

  .links {
    margin-top: 20px;

    .link {
      border: solid 1px;
      padding: 10px 15px;
      color: blue;
      border-radius: 8px;
      text-decoration: none;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: orange;
      }
    }
  }

  .createButton {
    margin: 38px 0 30px 0;
    align-self: flex-end;

    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }

  h2 {
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & > div {
    flex: 1 1 190px;
  }
`;