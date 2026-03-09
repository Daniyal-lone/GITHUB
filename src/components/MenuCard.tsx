import { MenuItem } from "@/data/menu";
import { Plus, Box } from "lucide-react";

const MenuCard = ({ item, onAdd, onViewAR, index }) => (
  <div className="glass-card rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="flex justify-between items-start mb-2">
      <div>
        <span className="text-[9px] text-gold tracking-[0.2em] font-bold uppercase">{item.tag}</span>
        <h3 className="text-lg font-display text-foreground mt-1">{item.name}</h3>
      </div>
      <span className="text-gold font-bold">₹{item.price}</span>
    </div>
    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
    <div className="flex gap-2">
      <button onClick={() => onViewAR(item)} className="flex-1 py-2.5 rounded-xl border border-gold/20 text-gold flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider">
        <Box size={14} /> View 3D
      </button>
      <button onClick={() => onAdd(item)} className="px-4 py-2.5 rounded-xl bg-gold text-black flex items-center justify-center">
        <Plus size={18} />
      </button>
    </div>
  </div>
);

export default MenuCard;
