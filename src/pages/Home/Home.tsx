import AssetTag from '../../components/AssetTag/AssetTag'
import Header from '../../components/Header/Header'
import { Container, BodyContainer, BreadcrumbContainer } from './Home.styles'


function Home() {
  return (
    <Container>
        <Header/>
        <BodyContainer>
            <BreadcrumbContainer>
                <div>
                    <span className="strong-ref-page-text">Ativos</span>
                    <span className="ref-page-text">/ Apex Unit</span>
                </div>
                <div>
                    <AssetTag isSensor isActive>
                        Sensor de Energia
                    </AssetTag>
                    <AssetTag isCritical>
                        Crítico
                    </AssetTag>
                </div>
            </BreadcrumbContainer>
            <div></div>
        </BodyContainer>
    </Container>
  )
}

export default Home