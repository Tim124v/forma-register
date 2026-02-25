'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function SplineSceneBasic() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Имитация запроса — потом заменить на реальный API
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <Card className="w-full h-full min-h-screen bg-black/[0.97] relative overflow-hidden rounded-none border-0 border-neutral-800/50">
      {/* Spotlight справа — подсвечивает зеркальную форму */}
      <Spotlight
        className="-top-40 right-0 md:right-40 md:-top-20 md:left-auto"
        fill="white"
      />

      {/* Зеркальная композиция: 3D слева, форма справа */}
      <div className="flex h-full min-h-screen flex-row-reverse">
        {/* Левая зона (визуально): 3D сцена */}
        <div className="relative min-h-[50vh] flex-1 min-w-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full min-h-[400px]"
          />
        </div>

        {/* Правая зона (визуально): форма с премиум-оформлением */}
        <div className="flex w-full flex-shrink-0 items-center justify-center px-6 py-8 md:w-[42%] md:min-w-[380px] md:max-w-[480px]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[340px] md:max-w-[400px]"
          >
            {/* Градиентная рамка + стекло */}
            <div className="rounded-2xl bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-[1px] shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]">
              <div className="rounded-2xl bg-neutral-950/90 px-8 py-8 backdrop-blur-xl">
                <div className="mb-6 h-px w-12 bg-gradient-to-r from-white/40 to-transparent" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Вход
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Введите email и пароль
                </p>

                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-neutral-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      disabled={isLoading}
                      className="h-10 border-white/15 bg-white/5 text-white placeholder:text-neutral-500 transition-all focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20 hover:border-white/25"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm text-neutral-300">
                        Пароль
                      </Label>
                      <a
                        href="#"
                        className="text-xs text-neutral-400 transition-colors hover:text-white"
                      >
                        Забыли пароль?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      disabled={isLoading}
                      className="h-10 border-white/15 bg-white/5 text-white placeholder:text-neutral-500 transition-all focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20 hover:border-white/25"
                    />
                  </div>
                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-11 w-full bg-white text-black font-medium shadow-lg shadow-white/10 transition-all hover:bg-neutral-100 hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-80"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Вход...
                        </>
                      ) : (
                        "Войти"
                      )}
                    </Button>
                  </div>
                  <p className="text-center text-sm text-neutral-400">
                    Нет аккаунта?{" "}
                    <a href="#" className="text-white transition-colors hover:underline">
                      Регистрация
                    </a>
                  </p>
                </form>
              </div>
            </div>

            {/* Мягкое «отражение» под карточкой */}
            <div
              aria-hidden
              className="absolute -bottom-2 left-2 right-2 h-16 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </Card>
  )
}
