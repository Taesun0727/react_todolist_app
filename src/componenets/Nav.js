import styled from "styled-components";
import { Link } from 'react-router-dom'

const NavBlock = styled.div`
  margin: 0 auto;

  button {
    width: 128px;
    height: 32px;

    border-radius: 12px;
    border-color: white;
  }
  .mywork {
    margin-right: 36px;
  }
`;

function nav() {
  return (
    <NavBlock>
      <Link to='/'>
        <button className="mywork">내 할일</button>
      </Link>
      <Link to='/Calendar'>
        <button className="schedule">스케줄</button>
      </Link>
    </NavBlock>
  )
}

export default nav;