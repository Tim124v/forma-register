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

      <div className="flex min-h-screen flex-row-reverse">
        <div className="relative min-h-[50vh] min-w-0 flex-1">
          <SplineScene scene={SPLINE_SCENE} className="h-full min-h-[400px] w-full" />
        </div>

        <div className="flex w-full flex-shrink-0 items-center justify-center px-6 py-8 md:w-[42%] md:min-w-[380px] md:max-w-[480px]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-[340px] md:max-w-[400px]"
          >
            <div className="rounded-2xl bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-[1px] shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]">
              <div className="rounded-2xl bg-neutral-950/90 px-8 py-8 backdrop-blur-xl">
                <div className="mb-6 h-px w-12 bg-gradient-to-r from-white/40 to-transparent" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">Log in</h2>
                <p className="mt-2 text-sm text-neutral-400">Enter your email and password</p>

                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-neutral-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      disabled={isLoading}
                      className="h-10 border-white/15 bg-white/5 text-white transition-all placeholder:text-neutral-500 hover:border-white/25 focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20"
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
                      className="h-10 border-white/15 bg-white/5 text-white transition-all placeholder:text-neutral-500 hover:border-white/25 focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20"
                    />
                  </div>
                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-11 w-full bg-white font-medium text-black shadow-lg shadow-white/10 transition-all hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-white/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-80"
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
              className="absolute -bottom-2 left-2 right-2 h-16 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </Card>
  )
}
