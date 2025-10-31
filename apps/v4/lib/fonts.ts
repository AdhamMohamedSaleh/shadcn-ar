import {
  IBM_Plex_Sans_Arabic as FontSans,
  IBM_Plex_Mono as FontMono,
} from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
})

export const fontVariables = cn(fontSans.variable, fontMono.variable)
