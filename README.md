# Fix-It Forward: Broken Store Challenge
# BYTEBAZAAR | Glow Tech Beauty
Empowering the next generation of beauty through immersive commerce.
ByteBazaar is a futuristic, high-performance e-commerce platform built for the Fix-It Forward Challenge. The website contains aesthetics and seamless user functionality, featuring an automated Eid discount system and an AI-driven concierge.
---

# 🔗 Project Links
Deployment Link: (https://byte-bazaar-chi.vercel.app/)

Demo Video:

# 🛠️ Technologies Used
*HTML5/CSS3:* Utilized CSS Variables for the design system and Flexbox for the adaptive cart layout.

*JavaScript:* Core logic for state management (cart), dynamic sorting, and the chatbot's decision tree.

*Intersection Observer API:* Used for high-performance scroll-triggered animations.

*YouTube Data API Interface:* Background hero video integration for immersive branding.

# ✨ Key Enhancements & Features
*Eid Special Logic:* A global price processor that automatically applies a 30% discount across the store, displaying both original and sale prices.

*Dynamic Sorting Engine:* A custom sorting algorithm that rearranges the DOM without page refreshes (Price: Low to High, High to Low, and Recommended).

*AI Beauty Concierge:* A built-in chat interface that responds to user keywords (e.g., "discount", "lip") to drive conversions.

Immersive Micro-interactions:

*Custom Glowing Cursor:* A blurring follower that enhances the "Glow Tech" theme.

*Holographic Product Cards:* CSS-based light-sweep animations on hover.

*Confetti Checkout*:* A celebratory visual feedback system upon order completion.

# 🛠️ Key Fixes
*Cart Layout Overflow:* Fixed a critical UI bug where the "Total" and "Checkout" button were being pushed off-screen. Implemented a Flexbox-column strategy with a scrollable cart__body to ensure the checkout area remains sticky at the bottom regardless of item count.

*Animation Persistence:* Resolved an issue where sorting products caused the scroll animations to break. Re-initialized the IntersectionObserver within the render function to ensure new elements are properly tracked.

*Unique ID Conflict:* Replaced standard array indexing with a Date.now() + Math.random() generator for cart items to prevent multiple items from being deleted simultaneously when clicked.

# 🚀 Setup & Installation
*Fork the Repository:* Use the "Fork" button on GitHub to create your own copy.

*Clone the Project:*

Bash
git clone https://github.com/[your-username]/bytebazaar.git
No Dependencies Required: This project uses pure Vanilla JS. You do not need to run npm install.

Live Server: Open index.html in your browser. (Recommended: Use the "Live Server" extension in VS Code for the best experience).
