"use client";

import HeaderLayout from "@/components/layout/user/header";
import FooterLayout from "@/components/layout/user/footer";
import HeroCarousel from "@/components/layout/HeroCarousel";
import ProductGrid from "@/components/products/ProductGrid";
import CategorySection from "@/components/layout/CategorySection";
import PromoSection from "@/components/home/PromoSection";
import ExploreSection from "@/components/home/ExploreSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedTreats from "@/components/home/FeaturedTreats";

import { carouselImages } from "@/constants/images";
import { featuredProducts, popularProducts } from "@/data/products";
import { breadCategories } from "@/data/categories";

import { Divider } from "antd";

const HomeLayout = () => {
  return (
    <>
      <HeaderLayout />
      <div style={{ width: "100%", maxWidth: "1152px", margin: "20px auto" }}>
        <HeroCarousel images={carouselImages} />

        <CategorySection categories={breadCategories} />

        <Divider style={{ margin: "50px 0" }} />

        <h1 style={{ margin: "50px 0", textAlign: "center" }}>TOP PRODUCTS</h1>

        <div style={{ margin: "30px 0" }}>
          <div style={{ margin: "30px 0" }}>
            <ProductGrid products={featuredProducts} />
          </div>
          <ProductGrid products={popularProducts} />
        </div>
      </div>
      <PromoSection />

      <ExploreSection />

      <AboutSection />

      <FeaturedTreats />

      <FooterLayout />
    </>
  );
};

export default HomeLayout;
