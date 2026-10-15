import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- a static SVG mark, nothing to optimize */}
          <img src="/alcor-icon.svg" alt="" width={16} height={22} />
          <span className="font-semibold">Alcor</span>
          <span className="text-fd-muted-foreground font-normal">Docs</span>
        </>
      ),
    },
    links: [
      { text: 'Launch App', url: 'https://alcor.exchange', external: true },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
