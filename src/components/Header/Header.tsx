import UnitButton from '../UnitButton/UnitButton';
import tractianLogo from '../../assets/LOGO_TRACTIAN.svg'
import GoldIcon from '../../assets/icons/Gold.svg'
import { Container, UnitButtonsContainer } from "./Header.styles";

function Header() {
  return (
    <Container>
      <a href="#">
        <img src={tractianLogo} className="logo" alt="Vite logo" />
      </a>
      <UnitButtonsContainer>
        <UnitButton icon={GoldIcon} isActive>Apex Unit</UnitButton>
        <UnitButton icon={GoldIcon}>Tobias Unit</UnitButton>
        <UnitButton icon={GoldIcon}>Jaguar Unit</UnitButton>
      </UnitButtonsContainer>
    </Container>
  );
}

export default Header;
