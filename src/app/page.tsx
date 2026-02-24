import { AssetManager } from '@/components/AssetManager';
import { LayoutDashboard, ShieldCheck, Activity, Cloud } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-10 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent rounded-xl shadow-inner">
              <LayoutDashboard className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">IT Assets API</h1>
              <p className="text-primary-foreground/70 font-medium">Control de infraestructura & DevOps</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
              <Cloud className="h-4 w-4 text-accent" />
              <span>Cloud Firestore</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
              <Activity className="h-4 w-4 text-accent" />
              <span>Status: Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-border">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              Inventario de Activos
            </h2>
            <p className="text-muted-foreground">Gestiona y monitorea los recursos tecnológicos de la organización con persistencia global en tiempo real.</p>
          </div>
          
          <AssetManager />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground border-t bg-white">
        <div className="container mx-auto px-4">
          <p className="text-sm">Asset API v1.1.0 • Prueba Técnica Senior Backend/Cloud</p>
          <p className="text-xs mt-2 opacity-50">Infraestructura: Next.js + Google Cloud Firestore + Firebase App Hosting</p>
        </div>
      </footer>
    </div>
  );
}
