import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navItems = [
  { to: "/dashboard", label: "Tablero", code: "01" },
  { to: "/cotizaciones", label: "Cotizaciones", code: "02" },
  { to: "/inventario", label: "Inventario", code: "03" },
  { to: "/usuarios", label: "Usuarios", code: "04" },
] as const;

interface AppShellProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function AppShell({ title, action, children }: AppShellProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-paper text-ink">
      <aside className="w-64 border-r border-ink/5 flex flex-col p-6 gap-8 bg-white/50 sticky top-0 h-screen">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="size-8 bg-ink rounded flex items-center justify-center text-paper font-display font-bold text-xs tracking-tighter">
            PX
          </div>
          <span className="font-display font-bold tracking-tight text-lg">PREX ERP</span>
        </Link>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                  (active
                    ? "bg-ink text-paper"
                    : "text-ink/60 hover:bg-ink/5 hover:text-ink")
                }
              >
                <span className="text-[10px] font-mono opacity-50">{item.code}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3">
          <div className="p-4 rounded-xl bg-ink/5 border border-ink/5">
            <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-2">
              Estado del sistema
            </p>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-press animate-pulse" />
              <span className="text-xs font-medium">Prensas en línea</span>
            </div>
          </div>
          <Link
            to="/login"
            className="block text-[10px] font-mono uppercase tracking-widest text-ink/40 hover:text-ink transition-colors px-2"
          >
            ← Cerrar sesión
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-ink/5 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <h1 className="font-display font-bold text-xl uppercase tracking-tight">{title}</h1>
          <div className="flex items-center gap-4">
            {action}
            <div className="size-8 rounded-full bg-cyan-press/20 ring-1 ring-cyan-press/30 grid place-items-center">
              <span className="text-[10px] font-bold text-ink">JD</span>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
