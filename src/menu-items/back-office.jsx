// assets
import { IconUsers, IconSpy } from '@tabler/icons-react';

// constant
const icons = { IconUsers, IconSpy };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const BackOffice = {
  id: 'back-office',
  title: '后台管理',
  type: 'group',
  children: [
    {
      id: 'users',
      title: '用户列表',
      type: 'item',
      url: '/users',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
        id: 'invite-code',
        title: '邀请码',
        type: 'item',
        url: '/invitecode',
        icon: icons.IconSpy,
        breadcrumbs: false
    }
  ]
};

export default BackOffice;