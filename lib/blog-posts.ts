export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "stop-renting-your-traffic",
    title: "Stop Renting Your Traffic: Why Owning 'Exact Match Domains' Beats Google Ads",
    excerpt: "Every month, you pay Google for the same keywords. When you stop paying, the leads stop. Here is why the smartest businesses are buying the keywords instead.",
    date: "February 23, 2026",
    readTime: "4 min read",
    content: `
      <h2>The Rental Trap</h2>
      <p>Imagine renting a storefront where the landlord charges you every single time a customer walks through the door. If 100 people enter, you pay 100 fees. If nobody buys anything, you still pay.</p>
      <p>This is Google Ads (PPC). You are renting traffic. You do not own the asset; you are merely leasing the attention for a few milliseconds.</p>
      
      <h2>The Equity of Exact Match Domains (EMDs)</h2>
      <p>An Exact Match Domain (EMD) is a domain name that precisely matches the keyword your customers are searching for. Examples include <strong>AustinApartmentsForRent.com</strong> or <strong>FriscoEmergencyDentist.com</strong>.</p>
      <p>When you own this asset, you stop paying rent. You own the digital land where the customers are already looking.</p>
      
      <h3>The Math of Ownership vs. Renting</h3>
      <ul>
        <li><strong>PPC Cost:</strong> "Emergency Dentist Frisco" costs ~$15 per click. To get 100 visitors, you pay $1,500. Next month? You pay $1,500 again.</li>
        <li><strong>Asset Cost:</strong> You buy the domain for a one-time fee (e.g., $250 - $3,500). You own the traffic forever.</li>
      </ul>
      
      <h2>Why It Works in 2026</h2>
      <p>Trust. Users instinctively trust domains that describe exactly what they are looking for. A generic brand name requires explanation. "HoustonApartmentsRental.com" requires zero explanation.</p>
      <p>Stop feeding the ad machine. Start building equity in your own digital infrastructure.</p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
