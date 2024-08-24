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

function AssetDetails({ status, assetName, type, ...props }: any) {
  return (
    <Container>
      <Header>
        <span className="asset-title">{assetName || "-"}</span>
        {type && (
          <Icon status={status}>
            <ReactSVG src={type === "energy" ? BoltIcon : GreenDotIcon} />
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
              <span>{props.deviceType || "-"}</span>
            </div>
            <span className="divider" />
            <div>
              <strong>Responsáveis</strong>
              <span>{props.owners || "-"}</span>
            </div>
          </RightInfoContainer>
        </div>
        <span className="divider" />
        <div>
          <BottomInfoContainer>
            <div>
              <strong>Sensor</strong>
              <span><img src={SensorIcon} alt="sensor icon" />{props.sensor || "-"}</span>
            </div>
            <div>
              <strong>Receptor</strong>
              <span><img src={RouterIcon} alt="router icon" />{props.router || "-"}</span>
            </div>
          </BottomInfoContainer>
        </div>
      </Content>
    </Container>
  );
}

export default AssetDetails;
