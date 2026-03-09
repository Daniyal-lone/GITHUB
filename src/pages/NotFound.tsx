import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-display text-gold mb-4">404</h1>
      <p className="text-silver mb-8">System breach: Page not found.</p>
      <Link to="/" className="px-8 py-3 bg-gold text-black font-bold rounded-xl">Return to SHINRA</Link>
    </div>
  );
}
