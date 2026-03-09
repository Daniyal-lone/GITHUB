export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  tag: string;
  modelSrc: string;
}

export const menuItems: MenuItem[] = [
  { 
    id: 1, 
    name: "Truffle Mushroom Burger", 
    description: "Brioche bun, aged cheddar, truffle aioli", 
    price: 450, 
    tag: "CHEF'S PICK", 
    modelSrc: "/burger.glb" 
  },
  { 
    id: 2, 
    name: "Artisan Cappuccino", 
    description: "Rich espresso with velvet micro-foam", 
    price: 250, 
    tag: "SIGNATURE", 
    modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" 
  }
];
