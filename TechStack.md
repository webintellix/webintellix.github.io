# Webintellix Website - Complete Tech Stack Analysis

## **What the App Is**
Webintellix is a **boutique software development and technology services company website** that serves as their primary online presence. The site is designed to:
- Showcase their 6 core services (AI integration, UX/UI design, web/mobile development, modernization, testing, and maintenance)
- Convert visitors into leads through prominent "Book a call" CTAs
- Integrate with Zoho Bookings for consultation scheduling
- Present the company as a trusted technology partner

## **Complete Tech Stack Breakdown**

### **🏗️ Core Framework & Build System**
- **Static Site Generator**: Bridgetown 1.3.4 (Ruby-based, similar to Jekyll)
- **Template Engine**: Liquid templating system
- **Build Tool**: esbuild 0.25.0 for JavaScript/CSS bundling
- **Package Manager**: Yarn for Node.js dependencies
- **Ruby Version**: 3.1.4
- **Node.js Version**: 22.12.0

### **🎨 Frontend & Styling**
- **CSS Framework**: Bulma 1.0.2 (imported via CDN)
- **CSS Processing**: PostCSS with plugins:
  - postcss-preset-env 9.1.2 (modern CSS features)
  - postcss-flexbugs-fixes 5.0.2
  - postcss-import 15.1.0
- **Custom CSS**: Extensive custom styling with CSS variables for theming
- **Responsive Design**: Mobile-first approach with Bulma's grid system

### **⚡ JavaScript & Interactivity**
- **JavaScript**: Vanilla ES6+ JavaScript (no frameworks like React/Vue)
- **Main Functionality**: Mobile navigation burger menu toggle
- **Module System**: ES6 imports with custom path aliases (`$styles`, `$components`)
- **Component Loading**: Dynamic import of all component JS/CSS files

### **🏛️ Architecture & Organization**

#### **Component-Based Structure**:
- `navbar.liquid` - Navigation with logo and booking CTA
- `hero.liquid` - Main landing section with value proposition
- `services.liquid` - Service offerings grid (6 services)
- `about.liquid` - Company information section
- `footer.liquid` - Footer with contact info and social links
- `head.liquid` - HTML head with meta tags
- `google_analytics.liquid` - GA4 tracking integration
- `zoho_salesiq_chat.liquid` & `zoho_salesiq_visitor.liquid` - Live chat widget

#### **Layout System**:
- `default.liquid` - Base layout template
- `home.liquid` - Homepage-specific layout
- `post.liquid` & `page.liquid` - Content page layouts

#### **Data Management**:
- `site_metadata.yml` - Global site configuration and branding
- `services.yml` - Structured data for the 6 service offerings

### **🚀 Deployment & CI/CD**
- **Hosting**: GitHub Pages
- **Domain**: webintellix.com (configured via CNAME)
- **CI/CD**: GitHub Actions workflow
- **Build Process**: Automated on push to main branch
- **Build Command**: `bin/bridgetown deploy`
- **Output Directory**: `./output`

### **🔧 Third-Party Integrations**
- **Analytics**: Google Analytics 4 (G-2X7C9HCYVQ)
- **Live Chat**: Zoho SalesIQ widget integration
- **Booking System**: Zoho Bookings for consultation scheduling
- **Social Media**: Prepared for social media integration

### **🎯 Key Features & Functionality**
- **Responsive Design**: Mobile-first with collapsible navigation
- **Service Showcase**: Grid layout displaying 6 core services with 3D icons
- **Lead Generation**: Multiple "Book a call" CTAs throughout the site
- **Live Chat**: Zoho SalesIQ for real-time visitor engagement
- **Analytics Tracking**: Comprehensive visitor tracking with GA4
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### **📁 Asset Management**
- **Images**: Multiple logo variants (black/white text versions)
- **Service Icons**: 3D-style PNG icons for each service
- **Optimization**: Static asset optimization through esbuild

### **🔄 Development Workflow**
- **Local Development**: `bin/bridgetown start` with live reload
- **Build Process**: esbuild handles JS/CSS bundling with PostCSS processing
- **Deployment**: Fully automated via GitHub Actions
- **Environment**: Production builds use `BRIDGETOWN_ENV=production`

## **Architecture Highlights**
The site follows a **modern JAMstack architecture** with:
- Static generation for performance and security
- Component-based organization for maintainability  
- Modern CSS with custom properties for theming
- Minimal JavaScript for optimal loading speed
- Integrated third-party services for business functionality

## **File Structure Overview**

```
webintellix.github.io/
├── src/
│   ├── _components/          # Reusable Liquid components
│   ├── _data/               # YAML data files
│   ├── _layouts/            # Page layout templates
│   ├── images/              # Static assets and logos
│   └── index.md             # Homepage content
├── frontend/
│   ├── javascript/          # ES6+ JavaScript modules
│   └── styles/              # CSS with PostCSS processing
├── .github/workflows/       # CI/CD automation
├── bridgetown.config.yml    # Site configuration
├── package.json             # Node.js dependencies
├── Gemfile                  # Ruby dependencies
└── esbuild.config.js        # Build configuration
```

## **Key Dependencies**

### **Ruby Gems**
- bridgetown (~> 1.3.0)
- bridgetown-builder
- bridgetown-paginate

### **Node.js Packages**
- esbuild (^0.25.0)
- postcss (^8.4.29)
- postcss-preset-env (^9.1.2)
- glob (^10.3.3)

This is a well-architected, modern static website optimized for lead generation and business growth, built with enterprise-grade tools and deployment practices.
