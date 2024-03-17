// assets
import { IconUsers, IconSpy } from '@tabler/icons-react';

// constant
const icons = { IconUsers, IconSpy };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Block = {
  id: 'block',
  title: '板块信息',
  type: 'group',
  children: [
    {
      id: 'block-kuaishou',
      title: '快手',
      type: 'item',
      url: '/users',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
        id: 'block-jvneng',
        title: '聚能',
        type: 'item',
        url: '/invitecode',
        icon: icons.IconSpy,
        breadcrumbs: false
    }
  ]
};

export default Block;