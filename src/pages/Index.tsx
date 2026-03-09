import { useState } from "react";
import { menuItems, MenuItem } from "@/data/menu";
import MenuCard from "@/components/MenuCard";
import ARViewer from "@/components/ARViewer";
import CartView from "@/components/CartView";

const Index = () => {
  const [tab, setTab] = useState("menu");
  const [cart, setCart] = useState([]);
  const [arItem, setArItem] = useState(null);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) => prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity + delta } : c)).filter((c) => c.quantity > 0));
  };

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {arItem && <ARViewer item={arItem} onClose={() => setArItem(null)} />}
      
      <header className="p-8 text-center animate-fade-up">
        <h1 className="text-4xl font-display text-gold tracking-tight">SHINRA</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-silver mt-2">Architecting the digital layer of reality</p>
      </header>

      <nav className="flex gap-2 px-6 mb-8">
        <button onClick={() => setTab("menu")} className={`flex-1 py-3 glass-card rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${tab === "menu" ? "text-gold border-gold" : "opacity-40"}`}>Menu</button>
        <button onClick={() => setTab("cart")} className={`flex-1 py-3 glass-card rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${tab === "cart" ? "text-gold border-gold" : "opacity-40"}`}>Cart ({cartCount})</button>
      </nav>

      <main className="px-6">
        {tab === "menu" ? (
          <div className="grid gap-4">
            {menuItems.map((item, i) => (
              <MenuCard key={item.id} item={item} onAdd={addToCart} onViewAR={setArItem} index={i} />
            ))}
          </div>
        ) : (
          <CartView cart={cart} onUpdate={updateQuantity} total={cart.reduce((s, i) => s + i.price * i.quantity, 0)} />
        )}
      </main>
    </div>
  );
};

export default Index;
