import { MenuItem } from "@/data/menu";
import { X } from "lucide-react";

const ARViewer = ({ item, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
    <div className="p-6 flex justify-between items-center border-b border-white/5">
      <h3 className="font-display text-gold">{item.name}</h3>
      <button onClick={onClose} className="text-white"><X size={24} /></button>
    </div>
    <div className="flex-1 relative">
      {/* @ts-ignore */}
      <model-viewer
        src={item.modelSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  </div>
);

export default ARViewer;
