import Link from 'next/link';
import { AlcorRobot } from './alcor-robot';

export function HomeHero() {
  return (
    <div className="not-prose flex flex-col-reverse items-center gap-8 py-6 sm:flex-row sm:items-center">
      <div className="flex-1">
        <p className="mb-2 text-sm font-medium text-fd-primary">Alcor Documentation</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Trade, provide liquidity and build on Alcor
        </h1>
        <p className="mb-6 text-fd-muted-foreground">
          Alcor is a decentralized exchange on WAX, XPR, EOS and Telos: an on-chain order book,
          concentrated-liquidity pools, farms and a bridge to Ethereum, BNB Smart Chain and Polygon. These docs cover
          how to use it and how to build on its contracts and API.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/what-is-alcor-exchange"
            className="rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="/api"
            className="rounded-lg border border-fd-border px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            API Reference
          </Link>
        </div>
      </div>
      <AlcorRobot className="w-44 shrink-0 sm:w-56" />
    </div>
  );
}
