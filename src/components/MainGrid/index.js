import styled from 'styled-components';
const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto; /*para centralizar o css*/
  margin-right: auto; /*para centralizar o css*/
  max-width: 500px; /*para em um celular/tablet não eticar tanto*/
  padding: 16px;

  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width:860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
     "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
  
`;

export default MainGrid;