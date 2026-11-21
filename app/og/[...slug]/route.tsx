import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';
import { appName, getPageImageUrl } from '@/lib/shared';

export const revalidate = false;

// Brand tokens, as in app/alcor.css (dark).
const BACKGROUND = '#0b0c0d';
const FOREGROUND = '#f6fefd';
const MUTED = '#878c8f';
const MINT = '#39d998';

const icon = `data:image/svg+xml;base64,${readFileSync(join(process.cwd(), 'public/alcor-icon.svg')).toString('base64')}`;

// A long title gets a smaller size, so two lines always fit; longer still is cut, not overlapped.
const titleSize = (title: string) => (title.length <= 26 ? 80 : title.length <= 44 ? 66 : 56);

export async function GET(_req: Request, { params }: RouteContext<'/og/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const { title, description } = page.data;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '64px 72px',
          backgroundColor: BACKGROUND,
          color: FOREGROUND,
          borderBottom: `10px solid ${MINT}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <img src={icon} width={34} height={48} alt="" />
          <div style={{ fontSize: 32, fontWeight: 600, color: MINT }}>{appName}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
          <div
            style={{
              display: 'block',
              fontSize: titleSize(title),
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              lineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: 'block',
                marginTop: 28,
                fontSize: 32,
                lineHeight: 1.4,
                color: MUTED,
                lineClamp: 3,
                overflow: 'hidden',
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        <div style={{ fontSize: 26, color: MUTED }}>docs.alcor.exchange</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImageUrl(page).segments,
  }));
}
