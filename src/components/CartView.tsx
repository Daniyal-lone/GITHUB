export default function CartView({ cart, onUpdate, total }: any) {
  if (cart.length === 0) return <div className="text-center text-muted-foreground mt-20 opacity-50">Your cart is empty</div>;
  return (
    <div className="space-y-4 animate-fade-up">
      {cart.map((item: any) => (
        <div key={item.id} className="glass-card p-4 rounded-2xl flex justify-between items-center">
          <div>
            <h4 className="text-foreground font-medium">{item.name}</h4>
            <p className="text-gold text-sm font-bold">₹{item.price}</p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 rounded-xl px-3 py-2">
            <button onClick={() => onUpdate(item.id, -1)} className="text-lg text-muted-foreground">-</button>
            <span className="font-bold w-4 text-center">{item.quantity}</span>
            <button onClick={() => onUpdate(item.id, 1)} className="text-lg text-gold">+</button>
          </div>
        </div>
      ))}
      <div className="pt-6 border-t border-white/10 flex justify-between items-center">
        <span className="text-silver uppercase tracking-widest text-[10px]">Total</span>
        <span className="text-2xl font-display text-gold">₹{total}</span>
      </div>
    </div>
  );
}
