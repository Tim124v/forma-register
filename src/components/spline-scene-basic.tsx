'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"

export function SplineSceneBasic() {
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <Card className="relative min-h-screen w-full overflow-hidden rounded-none border-0 bg-black/95">
      <Spotlight className="-top-40 right-0 md:right-40 md:-top-20 md:left-auto" fill="white" />

      {/* Mobile: column (form top, scene bottom). Tablet/desktop: row (scene left, form right) */}
      <div className="flex min-h-screen flex-col md:flex-row-reverse">
        {/* 3D scene: below form on mobile, left side on tablet+ */}
        <div className="relative min-h-[40vh] min-w-0 flex-1 sm:min-h-[45vh] md:min-h-[50vh]">
          <SplineScene scene={SPLINE_SCENE} className="h-full min-h-[280px] w-full sm:min-h-[320px] md:min-h-[400px]" />
        </div>

        {/* Form: top on mobile, right column on tablet+ */}
        <div className="flex w-full flex-shrink-0 items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:w-[42%] md:min-w-[380px] md:max-w-[480px] md:px-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[340px] sm:max-w-[360px] md:max-w-[400px]"
          >
            <div className="rounded-2xl bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-[1px] shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]">
              <div className="rounded-2xl bg-neutral-950/90 px-6 py-6 backdrop-blur-xl sm:px-8 sm:py-8">
                <div className="mb-4 h-px w-12 bg-gradient-to-r from-white/40 to-transparent sm:mb-6" />
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Log in</h2>
                <p className="mt-1.5 text-sm text-neutral-400 sm:mt-2">Enter your email and password</p>

                <form className="mt-5 space-y-4 sm:mt-6 sm:space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-neutral-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      disabled={isLoading}
                      className="h-11 border-white/15 bg-white/5 text-white transition-all placeholder:text-neutral-500 hover:border-white/25 focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20 sm:h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm text-neutral-300">Password</Label>
                      <a href="#" className="text-xs text-neutral-400 transition-colors hover:text-white">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      disabled={isLoading}
                      className="h-11 border-white/15 bg-white/5 text-white transition-all placeholder:text-neutral-500 hover:border-white/25 focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20 sm:h-10"
                    />
                  </div>
                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-11 min-h-[44px] w-full bg-white font-medium text-black shadow-lg shadow-white/10 transition-all hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-white/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-80 sm:min-h-0"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Log in"
                      )}
                    </Button>
                  </div>
                  <p className="text-center text-sm text-neutral-400">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-white transition-colors hover:underline">Sign up</a>
                  </p>
                </form>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-2 left-2 right-2 h-12 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent blur-sm sm:h-16"
            />
          </motion.div>
        </div>
      </div>
    </Card>
  )
}
