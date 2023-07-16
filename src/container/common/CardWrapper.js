import styled from "styled-components";

const CardWrapperComp = ({ children, wt,ht }) => {
  const CardWrapper = styled.div`
    height: ${ht};
    width: ${wt};
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
  `;

  return (
    <CardWrapper>
      {children}
    </CardWrapper>
  );
};

export default CardWrapperComp;
