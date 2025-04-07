import { Button, GuiderLayout, Hero, Frame } from '@neato/guider/client';
import logoUrl from '../public/transparent-logo.png';
import { HoverEffect } from '../components/ui/hover-card-effect';

export default function LandingPage() {
  const featureCards = [
    {
      title: 'Open Source',
      description:
        'P-Stream is open source and free to use. You can host it yourself or use our hosted version.',
      link: '/self-hosting/hosting-intro',
    },
    {
      title: 'Custom Player',
      description:
        'Enjoy a fully custom video player including streaming integration, subtitle customization and easy TV season navigation.',
      link: '/features/custom-player',
    },
    {
      title: 'Saves your progress',
      description:
        'Will remember your progress in movies and TV shows, so you can easily continue where you left off.',
      link: '/features/progress-tracking',
    },
    {
      title: 'Bookmarking',
      description:
        'Allows you to bookmark your favorite movies and TV shows, so you can easily find them again.',
      link: '/features/bookmarks',
    },
    {
      title: 'Syncing across devices',
      description:
        'Enjoy uninterrupted streaming as your progress, proxies, and bookmarks sync effortlessly across all your devices.',
      link: '/features/sync',
    },
    {
      title: 'Modular by design',
      description:
        "Mix and match different parts of the P-Stream service, host your backend or use ours, it'll work either way.",
      link: '/features/modular',
    },
    {
      title: 'Multiple Languages',
      description:
        'Supports over 25 languages, including English, German, French, Spanish, Italian, Czech, Hindi, Arabic, Hebrew and more.',
      link: '/features/languages',
    },
    {
      title: 'Customizable',
      description:
        'Supports various themes, subtitle colors and subtitle sizes so you can make it look however you want.',
      link: '/features/customization',
    },
    {
      title: 'Progressive Web App Support',
      description:
        'Supports PWA, so you can install it on your phone and use it just like a native app.',
      link: '/features/pwa',
    },
  ];

  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <div style={{ paddingBottom: '0.7em' }}>
          <Frame>
            <img src={logoUrl.src} alt="Logo of P-Stream" />
          </Frame>
        </div>
        <Hero.Title>P-Stream</Hero.Title>
        <Hero.Subtitle>
          A cutesy app for watching your favorite movies and shows. Totally free
          and open source, forever!
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/self-hosting/hosting-intro">Get Started</Button>
          <Button to="https://github.com/sussy-code/smov" type="secondary">
            Open on GitHub
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={featureCards} />
        </div>
      </Frame>
    </GuiderLayout>
  );
}
