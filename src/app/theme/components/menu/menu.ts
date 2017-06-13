export const menuItems = [
  {
    title: 'Rewards',
    routerLink: 'rewards',
    icon: 'fa-home',
    selected: false,
    expanded: false,
    order: 0
  }, 
  {
    title: 'Customers',
    routerLink: 'customers',
    icon: 'fa fa-group',
    selected: false,
    expanded: false,
    order: 200
  },
  {
    title: 'Products',
    routerLink: 'products',
    icon: 'fa-product-hunt',
    selected: false,
    expanded: false,
    order: 300  
  },
  {
    title: 'Transaction Workbench',
    routerLink: 'transaction',
    icon: 'fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 330
  },
  {
    title: 'Security',
    routerLink: 'security',
    icon: 'fa-lock',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'User Management',
        routerLink: 'usermanagement'
      },
      {
        title: 'API Keys',
        routerLink: 'apikeys'
      }
    ]
  },  
  {
    title: 'System Log',
    routerLink: 'systemlog',
    icon: 'fa-list-ul',
    selected: false,
    expanded: false,
    order: 500
  }
  
];
