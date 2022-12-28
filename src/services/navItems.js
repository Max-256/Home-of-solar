const navItems = [
  {
    id: 1,
    path: "/home",
    component: "Home",
  },

  {
    id: 2,
    path: "/products",
    component: "Products",
  },

  {
    id: 3,
    path: "/about",
    component: "About",
  },

  {
    id: 4,
    path: "/contact",
    component: "Contact",
  },
];

export function getNavItems() {
  return navItems;
}
