import Header from '../../components/Header/Header'
import { Container, BodyContainer, BreadcrumbContainer } from './Home.styles'


function Home() {
  return (
    <Container>
        <Header/>
        <BodyContainer>
            <BreadcrumbContainer>
                <div>
                    <span class="strong-ref-page-text">Ativos</span>
                    <span>/ Apex Unit</span>
                </div>
                <div>
                    tags
                </div>
            </BreadcrumbContainer>
            <div></div>
        </BodyContainer>
    </Container>
  )
}

export default Home