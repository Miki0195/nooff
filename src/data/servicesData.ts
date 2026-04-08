import type { Translations } from '../i18n/translations';

export interface ServicePackage {
  name: string;
  subtitle?: string;
  // price: string;
  features?: string[];
  highlight?: boolean;
}

export interface ServiceSubCategory {
  name: string;
  slug: string;
  packages: ServicePackage[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  bestSeller: boolean;
  warm: boolean;
  packages?: ServicePackage[];
  subCategories?: ServiceSubCategory[];
  // addOns?: { name: string; price: string }[];
  addOns?: { name: string; }[];
}

// const PRICES = {
//   content: ['160.000 Ft', '280.000 – 320.000 Ft', '360.000 – 480.000 Ft', '650.000 – 780.000 Ft'],
//   promo: ['120.000 – 150.000 Ft', '180.000 – 220.000 Ft', '260.000 – 320.000 Ft', '350.000 Ft-tól'],
//   wedding: ['260.000 – 300.000 Ft', '320.000 – 380.000 Ft', '420.000 – 480.000 Ft'],
//   bemutatkozo: ['160.000 Ft', '190.000 Ft', '220.000 Ft'],
//   landing: ['280.000 Ft', '330.000 Ft', '380.000 Ft'],
//   ceges: ['590.000 Ft', '740.000 Ft', '920.000 Ft'],
//   webshop: ['1.290.000 Ft', '1.890.000 Ft', '2.590.000 Ft'],
// };

export function getServicesData(t: Translations): ServiceDetail[] {
  return [
    {
      id: 'content',
      title: t.services.content.title,
      subtitle: t.services.content.subtitle,
      description: t.services.content.description,
      bullets: t.services.content.bullets,
      bestSeller: true,
      warm: false,
      packages: t.services.content.packages.map((pkg, i) => ({
        name: pkg.name,
        subtitle: pkg.subtitle,
        // price: PRICES.content[i],
        features: pkg.features,
        highlight: i === 1,
      })),
    },
    {
      id: 'promo',
      title: t.services.promo.title,
      subtitle: t.services.promo.subtitle,
      description: t.services.promo.description,
      bullets: t.services.promo.bullets,
      bestSeller: false,
      warm: false,
      packages: t.services.promo.packages.map((pkg, i) => ({
        name: pkg.name,
        // price: PRICES.promo[i],
        features: pkg.features,
        highlight: i === 1,
      })),
    },
    {
      id: 'wedding',
      title: t.services.wedding.title,
      subtitle: t.services.wedding.subtitle,
      description: t.services.wedding.description,
      bullets: t.services.wedding.bullets,
      bestSeller: false,
      warm: true,
      packages: t.services.wedding.packages.map((pkg, i) => ({
        name: pkg.name,
        subtitle: pkg.subtitle,
        // price: PRICES.wedding[i],
        highlight: i === 1,
      })),
    },
    {
      id: 'web',
      title: t.services.web.title,
      subtitle: t.services.web.subtitle,
      description: t.services.web.description,
      bullets: t.services.web.bullets,
      bestSeller: false,
      warm: false,
      subCategories: t.services.web.subCategories.map((sub, si) => {
        const slugs = ['bemutatkozo', 'landing', 'ceges', 'webshop'] as const;
        // const priceKeys = ['bemutatkozo', 'landing', 'ceges', 'webshop'] as const;
        return {
          name: sub.name,
          slug: slugs[si],
          packages: sub.packages.map((pkg, pi) => ({
            name: pkg.name,
            subtitle: pkg.subtitle,
            // price: PRICES[priceKeys[si]][pi],
            features: pkg.features,
            highlight: pi === 1,
          })),
        };
      }),
      addOns: t.services.web.addOns,
    },
  ];
}
