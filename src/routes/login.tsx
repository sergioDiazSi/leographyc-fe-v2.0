import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión — PREX ERP" },
      { name: "description", content: "Accede a tu panel de control de imprenta." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("operador@prex.mx");
  const [password, setPassword] = useState("••••••••");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-paper text-ink">
      {/* Left: focal panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-ink text-paper overflow-hidden">
        <div className="absolute bottom-[-15%] right-[-10%] size-[28rem] bg-cyan-press/20 blur-[120px] rounded-full" />
        <div className="absolute top-[-15%] right-[20%] size-[24rem] bg-magenta-press/15 blur-[120px] rounded-full" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="size-9 bg-paper rounded flex items-center justify-center text-ink font-display font-bold text-xs tracking-tighter">
            PX
          </div>
          <span className="font-display font-bold tracking-tight text-lg">PREX ERP</span>
        </div>

        <div className="relative z-10 space-y-6 max-w-md">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-cyan-press" />
            <span className="size-2.5 rounded-full bg-magenta-press" />
            <span className="size-2.5 rounded-full bg-yellow-press" />
            <span className="size-2.5 rounded-full bg-paper" />
          </div>
          <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance">
            Cada pliego, bajo control.
          </h2>
          <p className="text-paper/60 text-sm leading-relaxed max-w-sm">
            Gestiona producción, inventario y cotizaciones desde un solo lugar.
            Diseñado para imprentas que respetan la precisión.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between text-[10px] font-mono uppercase tracking-widest text-paper/40">
          <span>v1.0 · Edición Taller</span>
          <span>CMYK · 2026</span>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
              Acceso al panel
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              Iniciar sesión
            </h1>
            <p className="text-sm text-ink/60">
              Ingresa tus credenciales para continuar.
            </p>
          </div>

          <div className="space-y-4">
            <Field
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <Field
              label="Contraseña"
              type="password"
              value={password}
              onChange={setPassword}
              hint={
                <a href="#" className="text-ink/40 hover:text-ink underline-offset-4 hover:underline">
                  ¿Olvidaste?
                </a>
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-ink text-paper font-medium text-sm py-3 rounded-md hover:bg-ink/90 transition-colors uppercase tracking-widest"
          >
            Entrar al taller
          </button>

          <p className="text-xs text-ink/50 text-center">
            ¿Sin cuenta?{" "}
            <Link to="/dashboard" className="text-ink font-semibold underline-offset-4 hover:underline">
              Solicitar acceso
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  hint,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  hint?: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink/40">
        <span>{label}</span>
        {hint}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 bg-white border border-ink/10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-press/40 focus:border-cyan-press transition"
      />
    </label>
  );
}
