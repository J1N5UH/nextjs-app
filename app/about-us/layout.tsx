export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      &copy;Next JS is Great! 2222222
    </div>
  );
}
