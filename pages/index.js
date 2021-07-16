/*import styled from 'styled-components'*/
/*Para importar não precisa por o index, pois 
ele assume que dentro dessa pasta está o index */
import MainGrid from '../src/components/MainGrid' 
import Box from '../src/components/Box' 
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'anapriscilla';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <div>
      <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio}/>
      </div>
      
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`http://github.com/${itemAtual}.png`}/>
                  <span>{itemAtual}</span>
                </a>
              </li>
              
            )
            })}
          </ul>
          
        </ProfileRelationsBoxWrapper>
       
      </div>
      
    </MainGrid>
    </div>
  )
}
