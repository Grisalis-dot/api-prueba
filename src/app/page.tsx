import { AssetManager } from '@/components/AssetManager';
import { LayoutDashboard, ShieldCheck, Activity, Cloud, Server } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-10 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent rounded-xl shadow-inner">
              <Server className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">IT Assets Management</h1>
              <p className="text-primary-foreground/70 font-medium">Infraestructura & DevOps Dashboard</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <Cloud className="h-4 w-4 text-accent" />
              <span>Cloud Firestore</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Secured API</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-border">
          <div className="mb-8 border-b pb-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6 text-accent" />
              Inventario de Recursos IT
            </h2>
            <p className="text-muted-foreground mt-2">Gestiona y monitorea los activos tecnológicos de la organización con persistencia global en tiempo real.</p>
          </div>
          
          <AssetManager />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground border-t bg-white">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium">Asset Management System v1.2.0 • Prueba Técnica Senior</p>
          <p className="text-xs mt-2 opacity-60">Tech Stack: Next.js + Cloud Firestore + Firebase App Hosting</p>
        </div>
      </footer>
    </div>
  );
}
