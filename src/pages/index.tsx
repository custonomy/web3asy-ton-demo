import TONConnectDemo from './tonconnect_demo';
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import { TonConnectUIProvider} from "@tonconnect/ui-react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header>
        <h1 className="text-2xl font-bold mb-4">TON Connect Wallet Demo</h1>
      </header>
      <main className="flex flex-col gap-8 items-center">
        <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "custonomyBridge",
                name: "custonomyBridge",
                imageUrl: "https://static.wixstatic.com/media/1ccfb2_91bc46aa9ae04367a550ba06e50b93c1~mv2.png",
                aboutUrl: "https://custonomy.io",
                jsBridgeKey: "custonomyBridge",
                platforms: ["chrome"]
              }
            ]
        }}
        >
          <TONConnectDemo />
          <Toaster />
        </TonConnectUIProvider>
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        TON Connect Wallet Demo © 2023
      </footer>
    </div>
  );
}
