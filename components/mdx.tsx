import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { HomeHero } from '@/components/home-hero';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    HomeHero,
    Tab,
    Tabs,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
