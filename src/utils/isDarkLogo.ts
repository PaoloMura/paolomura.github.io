export function isDarkLogo(logo: string): boolean {
  const darkLogos = [
    "flask",
    "nextjs",
    "unity",
  ];

  return darkLogos.includes(logo);
}
