import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 768px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 14px;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }){
  return <TemplateBlock>{children}</TemplateBlock>
}

export default TodoTemplate;