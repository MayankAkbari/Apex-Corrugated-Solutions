import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apexcorrugated.in"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    default: "Apex Corrugated Solutions | Premium B2B Industrial Packaging Manufacturer India",
    template: "%s | Apex Corrugated Solutions"
  },
  description: "Leading ISO 9001:2015 and FSC certified B2B industrial corrugated packaging manufacturer in Gujarat, India. Engineered 3-ply, 5-ply, and heavy-duty 7-ply boxes, ISPM-15 export cartons, and bespoke CAD packaging solutions.",
  keywords: [
    "Corrugated Box Manufacturer India",
    "Industrial Packaging Company India",
    "Corrugated Packaging Solutions",
    "Packaging Manufacturer Gujarat",
    "Custom Corrugated Packaging",
    "Export Packaging Manufacturer",
    "Heavy Duty Corrugated Boxes",
    "7-Ply Corrugated Pallet Boxes",
    "FSC Certified Packaging India",
    "ISO 9001 Corrugated Manufacturer"
  ],
  authors: [{ name: "Apex Corrugated Solutions Engineering Team", url: "https://apexcorrugated.in" }],
  creator: "Apex Corrugated Solutions",
  publisher: "Apex Corrugated Solutions",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Apex Corrugated Solutions | Engineered Industrial Packaging",
    description: "Premium Corrugated Packaging Solutions Designed For Performance, Protection, And Global Logistics Reliability.",
    url: "https://apexcorrugated.in",
    siteName: "Apex Corrugated Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apex Corrugated Solutions - Industrial Packaging Manufacturer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Corrugated Solutions | Industrial Packaging Manufacturer",
    description: "Engineered packaging solutions with ultra-high Edge Crush Test (ECT) ratings and burst strength.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Entity Schema for GEO (Generative Engine Optimization) & AEO
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apexcorrugated.in/#organization",
        "name": "Apex Corrugated Solutions",
        "legalName": "Apex Corrugated Solutions Private Limited",
        "url": "https://apexcorrugated.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://apexcorrugated.in/logo.png",
          "width": "600",
          "height": "150"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919820011223",
          "contactType": "customer service",
          "areaServed": ["IN", "US", "EU", "AE", "GB"],
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/apex-corrugated-solutions",
          "https://www.facebook.com/apexcorrugated"
        ]
      },
      {
        "@type": "ManufacturingBusiness",
        "@id": "https://apexcorrugated.in/#business",
        "name": "Apex Corrugated Solutions",
        "description": "ISO 9001:2015 & FSC Certified B2B industrial corrugated packaging manufacturer specializing in precision 3-ply, 5-ply, and heavy-duty 7-ply shipping boxes.",
        "url": "https://apexcorrugated.in",
        "logo": "https://apexcorrugated.in/logo.png",
        "image": "https://apexcorrugated.in/logo.png",
        "telephone": "+919820011223",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 42-45, Industrial Zone Phase III, GIDC",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380015",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.0225,
          "longitude": 72.5714
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:30"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Continent", "name": "Europe" },
          { "@type": "Continent", "name": "North America" },
          { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "knowsAbout": [
          "Industrial Corrugated Packaging",
          "Heavy-Duty 7-Ply Pallet Boxes",
          "Edge Crush Test (ECT) Optimization",
          "Cobb Sizing Moisture Resistance",
          "ISPM 15 Export Shipping Containers",
          "CAD Die-Cut Packaging Design"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://apexcorrugated.in/#website",
        "url": "https://apexcorrugated.in",
        "name": "Apex Corrugated Solutions",
        "publisher": {
          "@id": "https://apexcorrugated.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#0F172A] selection:bg-[#002E73] selection:text-white">
        <AppProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWidgets />
        </AppProvider>
      </body>
    </html>
  );
}
