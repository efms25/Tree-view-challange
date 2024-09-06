import { useContext } from "react";
import {
  Container,
  Header,
  Icon,
  Content,
  DropdownArea,
  RightInfoContainer,
  BottomInfoContainer,
} from "./AssetDetails.styles";
import { ReactSVG } from "react-svg";
import GreenDotIcon from "../../assets/icons/Ellipse6.svg";
import BoltIcon from "../../assets/icons/bolt.svg";
import ImboxIcon from "../../assets/icons/Inbox.svg";
import RouterIcon from "../../assets/icons/MdOutlineRouter.svg";
import SensorIcon from "../../assets/icons/Sensor.svg";
import { AppContext } from "../../contexts/AppContext";

function AssetDetails() {

  const appContext = useContext(AppContext);


  return (
    <Container>
      <Header>
        <span className="asset-title">{appContext?.selectedBranch?.name || "-"}</span>
        {appContext?.selectedBranch?.sensorType && (
          <Icon status={appContext?.selectedBranch?.status}>
            <ReactSVG src={appContext?.selectedBranch?.sensorType === "energy" ? BoltIcon : GreenDotIcon} />
          </Icon>
        )}
      </Header>
      <Content>
        <div>
          <DropdownArea>
            <img src={ImboxIcon} alt="add image dropdown area" />
            <span>Adicionar imagem do ativo</span>
          </DropdownArea>
          <RightInfoContainer>
            <div>
              <strong>Tipo de Equipamento</strong>
              <span>{"-"}</span>
            </div>
            <span className="divider" />
            <div>
              <strong>Responsáveis</strong>
              <span>{"-"}</span>
            </div>
          </RightInfoContainer>
        </div>
        <span className="divider" />
        <div>
          <BottomInfoContainer>
            <div>
              <strong>Sensor</strong>
              <span><img src={SensorIcon} alt="sensor icon" />{ "-"}</span>
            </div>
            <div>
              <strong>Receptor</strong>
              <span><img src={RouterIcon} alt="router icon" />{"-"}</span>
            </div>
          </BottomInfoContainer>
        </div>
      </Content>
    </Container>
  );
}

export default AssetDetails;
