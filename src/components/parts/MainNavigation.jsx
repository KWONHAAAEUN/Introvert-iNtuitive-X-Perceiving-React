import React, { useState } from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';

import 'react-pro-sidebar/dist/css/styles.css';
import 'css/Navigation.css';

import { HashLink, NavHashLink } from 'react-router-hash-link';

function MainNavigation() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const handleMouseEnter = () => {
    setMenuCollapse(false);
  };

  const handleMouseLeave = () => {
    setMenuCollapse(true);
  };

  return (
    <div id="header">
      <ProSidebar
        collapsed={menuCollapse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon="🏠">
              <NavHashLink
                smooth
                activeStyle={{ fontWeight: 'bold' }}
                to={'/#main'}
                className="hover:text-lg"
              >
                <h1 className="text-indigo-900">Home</h1>
              </NavHashLink>
            </MenuItem>

            <MenuItem icon="🏆">
              <HashLink smooth to={'/#rank'} className="hover:text-lg">
                <h1 className="text-indigo-900">인기 도서</h1>
              </HashLink>
            </MenuItem>

            <MenuItem icon="😎">
              <HashLink smooth to={'/#top-reader'} className="hover:text-lg">
                <h1 className="text-indigo-900">다독왕</h1>
              </HashLink>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
export default MainNavigation;
