export const metadata = {
  title: "Dr. Serhat Erol",
  description: "Sağlık danışmanlığı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
