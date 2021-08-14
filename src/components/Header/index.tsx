import { FiPlusSquare } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';
import { IProps } from './IProps';
import { Container } from './styles';

const Header = ({ openModal }: IProps) => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
