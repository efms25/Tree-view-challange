import { Container, Header, Icon, Content } from "./AssetDetails.styles";
import { ReactSVG } from "react-svg";
import GreenDotIcon from "../../assets/icons/Ellipse6.svg";
import BoltIcon from "../../assets/icons/bolt.svg";

function AssetDetails({ status, type }: any) {
  return (
    <Container>
      <Header>
        <span className="asset-title">MOTOR RT COAL AF01</span>
        {type && (
          <Icon status={status}>
            <ReactSVG src={type === "energy" ? BoltIcon : GreenDotIcon} />
          </Icon>
        )}
      </Header>
      <Content>
        <div>test</div>
      </Content>
    </Container>
  );
}

export default AssetDetails;
