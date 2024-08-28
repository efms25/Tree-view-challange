import { useContext, useEffect, useState } from 'react';
import UnitButton from '../UnitButton/UnitButton';
import tractianLogo from '../../assets/LOGO_TRACTIAN.svg'
import GoldIcon from '../../assets/icons/Gold.svg'
import { Container, UnitButtonsContainer } from "./Header.styles";
import { AppContext } from '../../contexts/AppContext';
import { fetchCompanies } from '../../services/contentService';
import { ICompanies } from '../../types/content.type';

function Header(): any {
  const [companies, setCompanies] = useState<ICompanies|null>(null)
  const {setCompanyId, companyId}: any = useContext(AppContext)

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const response = await fetchCompanies();
        setCompanies(response)

      } catch (err) {
        console.log('fetch companies error: ', err)
      }
    }
    fetchCompaniesData();
  },[])

  const handleSelectCompany = (id: string) => {
    setCompanyId(id);
  }

  return (
    <Container>
      <a href="#">
        <img src={tractianLogo} className="logo" alt="Vite logo" />
      </a>
      <UnitButtonsContainer>
        {companies && companies.map(({name, id}: ICompanies) => {
          return <UnitButton onClick={() => handleSelectCompany(id)} icon={GoldIcon} isActive={id === companyId}>{name}</UnitButton>
        })}
        
      </UnitButtonsContainer>
    </Container>
  );
}

export default Header;
