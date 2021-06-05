import rocketImg from '../assets/snorlax.png'
import CreateForm from '../components/CreateForm'
import styled from 'styled-components';
import { InnerLayout } from "../styles/Layouts";
import Header from '../components/Header'

function createPage() {
  return (
   <div>
<Header />
<Container>

<ContactPageStyled>

<InnerLayout className={"contact-section"}>
          <div className="left-content">   
 <CreateForm/>
</div>
<div className="right-content">

  <Image  src={rocketImg} alt=""/>
  </div>
        </InnerLayout>
      </ContactPageStyled>
</Container>
</div>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }   
      
    }
  
`;


const Image = styled.img`
display: block;
max-width: 60%;
width: 100%;
background-color: transparent;
color: transparent;
`;
const Title = styled.div`
justify-content: center;
align-items: center;
`;

export default createPage;