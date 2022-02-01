import styled from "styled-components";

const HeadBlock = styled.div`
  margin-top: 100px;
  h1 {
    font-size: 100px;
    color: #54BAB9;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h1>Sun Todolist</h1>
    </HeadBlock>
  )
}

export default Head;