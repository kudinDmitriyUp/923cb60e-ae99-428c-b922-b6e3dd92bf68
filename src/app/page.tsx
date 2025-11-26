"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Wine, Users, Clock, Star, Wine as Bottle, Beer, UtensilsCrossed, Wine as Martini, Music, Flame, Handshake, Trophy, Heart, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="DuckBar"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Events", id: "testimonials" },
            { name: "Contact", id: "contact" },
            { name: "Reserve", id: "pricing" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Welcome to DuckBar"
          title="Your Favorite Ukrainian Bar in Town"
          description="Experience authentic Ukrainian hospitality with premium spirits, traditional cuisine, and unforgettable moments with friends"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141749259-1pn0wedu.jpg"
          imageAlt="DuckBar warm interior with wooden tables and dim lighting"
          buttons={[
            { text: "Make a Reservation", href: "contact" },
            { text: "Explore Menu", href: "features" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutMetric
          title="DuckBar brings together the best of Ukrainian culture, premium drinks, and warm hospitality in a space where every guest feels at home"
          metrics={[
            { icon: Wine, label: "Premium Spirits", value: "50+" },
            { icon: Users, label: "Happy Customers", value: "1000+" },
            { icon: Clock, label: "Years of Tradition", value: "15+" },
            { icon: Star, label: "Local Favorite", value: "4.9★" }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFour
          title="Our Menu Highlights"
          description="Discover our carefully selected offerings"
          tag="Premium Selection"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              icon: Bottle,
              title: "Authentic Ukrainian Vodka",
              description: "Premium selection of traditional and craft Ukrainian vodkas, each with its own unique character and heritage story"
            },
            {
              icon: Beer,
              title: "Local & Craft Beers",
              description: "Curated collection of local Ukrainian breweries and international craft beers to complement every taste"
            },
            {
              icon: UtensilsCrossed,
              title: "Traditional Cuisine",
              description: "Authentic Ukrainian dishes including varenyky, borsch, and hearty platters prepared with traditional recipes"
            },
            {
              icon: Martini,
              title: "Signature Cocktails",
              description: "Creative bar specials crafted by our talented bartenders, blending Ukrainian ingredients with modern techniques"
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose DuckBar"
          description="Experience what makes us special"
          tag="The DuckBar Difference"
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          metrics={[
            { id: "1", icon: Music, title: "Live Events", value: "Weekly" },
            { id: "2", icon: Flame, title: "Cozy Atmosphere", value: "Always" },
            { id: "3", icon: Handshake, title: "Friendly Staff", value: "Expert" },
            { id: "4", icon: Trophy, title: "Quality First", value: "Always" }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real stories from our DuckBar community"
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="opacity"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Olena Kovalenko",
              role: "Regular Guest",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141758788-9z76qoga.jpg",
              imageAlt: "Olena smiling"
            },
            {
              id: "2",
              name: "Dmytro Shevchenko",
              role: "Food Lover",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141759556-sratapbc.jpg",
              imageAlt: "Dmytro portrait"
            },
            {
              id: "3",
              name: "Sophia Marchenko",
              role: "Event Organizer",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141760441-3gzo2cp3.jpg",
              imageAlt: "Sophia smiling"
            },
            {
              id: "4",
              name: "Andriy Bondarenko",
              role: "Weekly Visitor",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141762188-1zuxcd5p.jpg",
              imageAlt: "Andriy portrait"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Reservation Options"
          description="Choose the perfect experience for your group"
          tag="Book Your Table"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "intimate",
              badge: "Cozy Night",
              badgeIcon: Heart,
              price: "For 2-4",
              subtitle: "Perfect for couples or small gatherings",
              features: [
                "Intimate corner seating",
                "Personalized drink recommendations",
                "Complimentary appetizer",
                "Private conversation space"
              ]
            },
            {
              id: "group",
              badge: "Most Popular",
              badgeIcon: Users,
              price: "For 5-8",
              subtitle: "Great for friend groups",
              features: [
                "Best table locations",
                "Reserved seating",
                "Group drink specials",
                "Priority kitchen service"
              ]
            },
            {
              id: "celebration",
              badge: "Special Occasions",
              badgeIcon: Sparkles,
              price: "For 9+",
              subtitle: "Celebrate with us",
              features: [
                "Full bar access",
                "DJ or live music option",
                "Custom menu arrangement",
                "Dedicated server"
              ]
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Join Us?"
          description="Make a reservation or send us a message. We look forward to welcoming you to DuckBar"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit or any special requests",
            rows: 4,
            required: false
          }}
          buttonText="Reserve My Table"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "DuckBar",
              items: [
                { label: "About Us", href: "about" },
                { label: "Menu", href: "features" },
                { label: "Events", href: "testimonials" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Hours: Tue-Sun 6PM-2AM", href: "#" },
                { label: "Closed Mondays", href: "#" },
                { label: "Private Events Available", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reserve Now", href: "contact" },
                { label: "Follow Us", href: "#" },
                { label: "Feedback", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 DuckBar. All rights reserved. Authentic Ukrainian hospitality."
        />
      </div>
    </ThemeProvider>
  );
}