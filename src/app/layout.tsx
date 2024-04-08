import type { LayoutBaseProp } from '@/interfaces/layoutProps';
import '@/assets/styles/index.css';

export default function RootLayout({ children }: LayoutBaseProp) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
