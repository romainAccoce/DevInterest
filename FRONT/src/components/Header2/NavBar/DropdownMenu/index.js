import './dropdown-menu.scss';
import { RiShutDownLine } from '@react-icons/all-files/ri/RiShutDownLine';
import { BsReverseLayoutTextSidebarReverse } from '@react-icons/all-files/bs/BsReverseLayoutTextSidebarReverse';
import { GiTechnoHeart } from '@react-icons/all-files/gi/GiTechnoHeart';
import { BsPen } from '@react-icons/all-files/bs/BsPen';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DropdownItem from './DropdownItem';
import { userApiLogout, userLogout } from '../../../../action/userCurrent';

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode } = useSelector((state) => state.displayOptions);

  const { username, id } = useSelector((state) => state.userCurrent);

  return (
    <div className={darkMode ? 'dropdown dropdown--dark' : 'dropdown'}>

      <div className={darkMode ? 'menu menu--dark' : 'menu'}>
        <DropdownItem
          leftIcon={<GiTechnoHeart />}
          onClick={() => history.push(`/${username.toLowerCase()}/${id}/bookmarks/favorites`)}
        >
          <p>Favoris</p>
        </DropdownItem>
        <DropdownItem
          leftIcon={<BsPen />}
          onClick={() => history.push(`/${username.toLowerCase()}/${id}/bookmarks/contributions`)}
        >
          <p>Mes contributions</p>
        </DropdownItem>
        <DropdownItem
          leftIcon={<BsReverseLayoutTextSidebarReverse />}
          onClick={() => history.push(`/${username.toLowerCase()}/account`)}
        >
          <p>Paramètres de compte</p>
        </DropdownItem>

        <DropdownItem
          leftIcon={<RiShutDownLine />}
          onClick={() => dispatch(userApiLogout())}
        >
          <p>Déconnexion</p>
        </DropdownItem>
      </div>

    </div>
  );
};

export default DropdownMenu;
