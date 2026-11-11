import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Earth Regenerative Inc. — Regeneration at scale', template: '%s | Earth Regenerative Inc.' },
  description: 'Earth Regenerative Inc. was founded to address land degradation and plastic pollution through the Cell Regeneration Formula and long-term stewardship.',
};
const nav = [['About us','/about'],['The Cell','/the-cell'],['Economic model','/economic-model'],['REI','/rei'],['Governance','/governance']];
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en"><body><header className="site-header"><div className="shell header-inner"><Link href="/" className="wordmark" aria-label="Earth Regenerative Inc., home"><span className="mark">E<span className="mark-stroke">/</span>R<span className="mark-stroke">/</span>I</span><span className="wordmark-name">EARTH<br/>REGENERATIVE<br/>INC.</span></Link><nav className="desktop-nav" aria-label="Main navigation">{nav.map(([n,u])=><Link key={u} href={u}>{n}</Link>)}</nav><Link href="/contact" className="contact-nav">Contact <span>↗</span></Link><details className="mobile-nav"><summary aria-label="Open navigation">Menu <span>＋</span></summary><div className="mobile-links">{nav.map(([n,u])=><Link key={u} href={u}>{n}</Link>)}<Link href="/contact">Contact ↗</Link></div></details></div></header>{children}<footer className="footer"><div className="shell"><div className="footer-top"><Link href="/" className="footer-brand">EARTH<br/>REGENERATIVE<br/>INC.</Link><p>We seek, we sow, we bind —<br/>to balance the extraction of mankind.</p><div className="footer-links"><Link href="/about">About us</Link><Link href="/the-cell">The Cell</Link><Link href="/economic-model">Economic model</Link><Link href="/rei">REI</Link><Link href="/governance">Governance</Link><Link href="/contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Earth Regenerative Inc.</span><span>Founded in Singapore · Built for a global mandate</span><a href="#top">Back to top ↑</a></div></div></footer></body></html>
}
