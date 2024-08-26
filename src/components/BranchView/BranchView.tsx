import { Container, Icon, TitleBox, ArrowButton } from "./BranchView.styles";
import BoltIcon from "../../assets/icons/bolt.svg";
import GreenDotIcon from "../../assets/icons/Ellipse6.svg";
import GoLocationIcon from "../../assets/icons/GoLocation.svg";
import IoCubeOutline from "../../assets/icons/IoCubeOutline.svg";
import CodepenIcon from "../../assets/icons/Codepen.svg";
import DownIcon from "../../assets/icons/Down.svg";
import { ReactSVG } from "react-svg";

function BranchView({ type, status, branchType = "", isActive }: any) {
  let branchIcon;

  switch (branchType) {
    case "location":
      branchIcon = GoLocationIcon;
      break;

    case "asset":
      branchIcon = IoCubeOutline;
      break;
    default:
      branchIcon = CodepenIcon;
      break;
  }

  return (
    <Container>
      <ArrowButton type="button">
        <ReactSVG src={DownIcon} />
      </ArrowButton>
      <TitleBox isActive={isActive}>
        <span>
          <ReactSVG src={branchIcon} />
        </span>
        <div>
          <span>MOTORS H120 - Stage 3</span>
          {type && (
            <Icon status={status}>
              <ReactSVG src={type === "energy" ? BoltIcon : GreenDotIcon} />
            </Icon>
          )}
        </div>
      </TitleBox>
    </Container>
  );
}

export default BranchView;
