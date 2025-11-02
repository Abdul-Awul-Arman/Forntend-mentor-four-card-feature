import './globals.css';

export const metadata = {
  title: 'RizqTray',
  description: 'Healthy, Halal & Hygienic Meal Delivery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
