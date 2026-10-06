export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.edwardvale.co.uk',
).origin;
