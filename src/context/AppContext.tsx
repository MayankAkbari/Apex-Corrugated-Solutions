'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, INDUSTRIES, INITIAL_REVIEWS, BLOG_POSTS, ProductItem, ReviewItem, BlogPost } from '@/data/mockData';

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  productReq: string;
  quantity: string;
  message: string;
  date: string;
  status: string;
}

interface AppContextType {
  products: ProductItem[];
  reviews: ReviewItem[];
  blogPosts: BlogPost[];
  posts: BlogPost[];
  inquiries: InquiryItem[];
  addReview: (review: any) => void;
  updateReviewStatus: (id: string, status: 'approved' | 'pending' | 'rejected') => void;
  toggleReviewFeatured: (id: string) => void;
  toggleReviewApproval: (id: string) => void;
  deleteReview: (id: string) => void;
  addInquiry: (inquiry: any) => void;
  updateInquiryStatus: (id: string, status: any) => void;
  addProduct: (product: any) => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductItem[]>(PRODUCTS);
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [inquiries, setInquiries] = useState<InquiryItem[]>([
    {
      id: 'inq-101',
      name: 'Harshvardhan Singhania',
      email: 'h.singhania@apexindustries.co.in',
      phone: '+91 98200 11223',
      company: 'Singhania Heavy Engineering',
      productReq: 'Heavy Duty Packaging (7-Ply Pallet Boxes)',
      quantity: '5,000 Units / Month',
      message: 'Need seaworthy moisture-proof bulk pallet boxes for European machine export.',
      date: '02 July 2026',
      status: 'new'
    },
    {
      id: 'inq-102',
      name: 'Priyanka Nambiar',
      email: 'priyanka@biomedit.com',
      phone: '+91 98450 99887',
      company: 'BioMedit Pharma Ltd',
      productReq: 'Duplex Board & Folding Cartons',
      quantity: '25,000 Units',
      message: 'Requiring food-grade odorless folding cartons with Braille embossing.',
      date: '01 July 2026',
      status: 'quoted'
    }
  ]);

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem('apex_reviews');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        console.error(e);
      }
    }
    const savedInquiries = localStorage.getItem('apex_inquiries');
    if (savedInquiries) {
      try {
        setInquiries(JSON.parse(savedInquiries));
      } catch (e) {
        console.error(e);
      }
    }
    const adminAuth = sessionStorage.getItem('apex_admin');
    if (adminAuth === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const addReview = (reviewData: any) => {
    const newRev: ReviewItem = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'pending',
      approved: false,
      featured: false
    };
    const updated = [newRev, ...reviews];
    setReviews(updated);
    localStorage.setItem('apex_reviews', JSON.stringify(updated));
  };

  const updateReviewStatus = (id: string, status: 'approved' | 'pending' | 'rejected') => {
    const updated = reviews.map(r => r.id === id ? { ...r, status, approved: status === 'approved' } : r);
    setReviews(updated);
    localStorage.setItem('apex_reviews', JSON.stringify(updated));
  };

  const toggleReviewFeatured = (id: string) => {
    const updated = reviews.map(r => r.id === id ? { ...r, featured: !r.featured } : r);
    setReviews(updated);
    localStorage.setItem('apex_reviews', JSON.stringify(updated));
  };

  const toggleReviewApproval = (id: string) => {
    const updated = reviews.map(r => {
      if (r.id === id) {
        const nextApproved = !(r.approved ?? (r.status === 'approved'));
        return {
          ...r,
          approved: nextApproved,
          status: nextApproved ? 'approved' : 'pending'
        } as ReviewItem;
      }
      return r;
    });
    setReviews(updated);
    localStorage.setItem('apex_reviews', JSON.stringify(updated));
  };

  const deleteReview = (id: string) => {
    const updated = reviews.filter(r => r.id !== id);
    setReviews(updated);
    localStorage.setItem('apex_reviews', JSON.stringify(updated));
  };

  const addInquiry = (inqData: any) => {
    const newInq: InquiryItem = {
      ...inqData,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Pending'
    };
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('apex_inquiries', JSON.stringify(updated));
  };

  const updateInquiryStatus = (id: string, status: any) => {
    const updated = inquiries.map(i => i.id === id ? { ...i, status } : i);
    setInquiries(updated);
    localStorage.setItem('apex_inquiries', JSON.stringify(updated));
  };

  const addProduct = (prodData: any) => {
    const newProd: ProductItem = {
      ...prodData,
      id: `prod-${Date.now()}`
    };
    setProducts([newProd, ...products]);
  };

  const loginAdmin = (pass: string) => {
    if (pass === 'apex2026' || pass === 'admin') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('apex_admin', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('apex_admin');
  };

  return (
    <AppContext.Provider value={{
      products,
      reviews,
      blogPosts,
      posts: blogPosts,
      inquiries,
      addReview,
      updateReviewStatus,
      toggleReviewFeatured,
      toggleReviewApproval,
      deleteReview,
      addInquiry,
      updateInquiryStatus,
      addProduct,
      isAdminAuthenticated,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
