use client
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

const theme: SiteTheme = { styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/tmp/design-a-simple-high-contrast-logo-for-p-1759176610698-c91d1f45.jpg"
          logoAlt="Peak logo"
          buttonText="Join Peak"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Peak"
          subtitle="Your Futuristic Meme Hub"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="Peak is the ultimate hub for memes and community engagement. Join us!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understanding our token distribution and usage is vital for everyone."
          kpiItems={[{ value: "1M", description: "Total Supply" }, { value: "500K", description: "Circulating Supply" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/tmp/design-a-simple-high-contrast-logo-for-p-1759176610698-c91d1f45.jpg"
          logoAlt="Peak logo"
          logoText="Peak"
          className="footer"
          svgClassName="footer-logo"
        />
      </div>
    </SiteThemeProvider>
  );
}