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
    default: "Apex Corrugated Solutions | Premium Industrial Packaging Manufacturer India",
    template: "%s | Apex Corrugated Solutions"
  },
  description: "Leading B2B industrial corrugated packaging manufacturer in Gujarat, India. Providing precision 3-ply, 5-ply, and heavy-duty 7-ply corrugated boxes, export shipping cartons, and custom engineered packaging solutions.",
  keywords: [
    "Corrugated Box Manufacturer India",
    "Industrial Packaging Company India",
    "Corrugated Packaging Solutions",
    "Packaging Manufacturer India",
    "Custom Corrugated Packaging",
    "Export Packaging Manufacturer",
    "Heavy Duty Corrugated Boxes",
    "Premium Packaging Solutions",
    "Packaging Company Gujarat",
    "Industrial Corrugated Packaging"
  ],
  authors: [{ name: "Apex Corrugated Solutions Engineering Team" }],
  openGraph: {
    title: "Apex Corrugated Solutions | Engineered Industrial Packaging",
    description: "Premium Corrugated Packaging Solutions Designed For Performance, Protection, And Business Growth.",
    url: "https://apexcorrugated.co.in",
    siteName: "Apex Corrugated Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apex Corrugated Solutions Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Corrugated Solutions | Industrial Packaging Manufacturer",
    description: "Engineered packaging solutions for high-burst strength and export security.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Apex Corrugated Solutions",
    "image": "https://apexcorrugated.co.in/logo.png",
    "@id": "https://apexcorrugated.co.in",
    "url": "https://apexcorrugated.co.in",
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
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F6F8] text-[#202020]">
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
