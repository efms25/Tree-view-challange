import React, { useContext } from "react";
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import AssetTag from "../../components/AssetTag/AssetTag";
import Header from "../../components/Header/Header";
import TreeView from "../../components/TreeView/TreeView";
import { AppContext } from "../../contexts/AppContext";
import {
  Container,
  BodyContainer,
  BreadcrumbContainer,
  TreeViewContainer,
  DetailsContainer,
  ContentContainer,
} from "./Home.styles";

function Home(): React.FC {
  const { companyId, filter, setFilter }: any = useContext(AppContext);

  const handleSelectFilter = (elementFilter: string) => {
    if(filter === elementFilter) {
      setFilter(null)
      return
    }
    setFilter(elementFilter);
    
  }

  return (
    <Container>
      <Header />
      <BodyContainer>
        <BreadcrumbContainer>
          <div>
            <span className="strong-ref-page-text">Ativos</span>
            <span className="ref-page-text">/ Apex Unit</span>
          </div>
          <div>
            <AssetTag isSensor onClick={() => handleSelectFilter('sensor')} isActive={filter === 'sensor'}>
              Sensor de Energia
            </AssetTag>
            <AssetTag isCritical onClick={() => handleSelectFilter('critical')} isActive={filter === 'critical'}>Crítico</AssetTag>
          </div>
        </BreadcrumbContainer>
        <ContentContainer>
          <TreeViewContainer>{companyId ? <TreeView /> : "Selecione uma companhia na barra de navegação."}</TreeViewContainer>
          <DetailsContainer>
            <AssetDetails type="energy" status="operating" />
          </DetailsContainer>
        </ContentContainer>
      </BodyContainer>
    </Container>
  );
}

export default Home;
