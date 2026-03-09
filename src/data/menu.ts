export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  tag: string;
  modelSrc: string;
}

export const menuItems: MenuItem[] = [
  { id: 1, name: "Artisan Cappuccino", description: "Rich espresso with velvet micro-foam", price: 250, tag: "SIGNATURE", modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: 2, name: "Truffle Mushroom Burger", description: "Brioche bun, aged cheddar, truffle aioli", price: 450, tag: "CHEF'S PICK", modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: 3, name: "Matcha Lava Cake", description: "Warm matcha center with vanilla bean dust", price: 350, tag: "DESSERT", modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: 4, name: "Iced Hazelnut Macchiato", description: "Cold brew base, roasted hazelnut, sweet cream", price: 300, tag: "COLD BREW", modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
];
