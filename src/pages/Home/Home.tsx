import React from 'react'
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import AssetTag from "../../components/AssetTag/AssetTag";
import Header from "../../components/Header/Header";
import TreeView from "../../components/TreeView/TreeView";
import {
  Container,
  BodyContainer,
  BreadcrumbContainer,
  TreeViewContainer,
  DetailsContainer,
  ContentContainer
} from "./Home.styles";

function Home(): React.FC {
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
            <AssetTag isSensor isActive>
              Sensor de Energia
            </AssetTag>
            <AssetTag isCritical>Crítico</AssetTag>
          </div>
        </BreadcrumbContainer>
        <ContentContainer>
          <TreeViewContainer>
            <TreeView />
          </TreeViewContainer>
          <DetailsContainer>
            <AssetDetails type="energy" status="operating"/>
          </DetailsContainer>
        </ContentContainer>
      </BodyContainer>
    </Container>
  );
}

export default Home;
