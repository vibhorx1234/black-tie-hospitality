import file_text from "../vectors/file_text.svg";
import users from "../vectors/users.svg";
import indian_rupee from "../vectors/indian_rupee.svg";
import wrench from "../vectors/wrench.svg";
import bar_chart from "../vectors/bar_chart.svg";
import shield from "../vectors/shield.svg";
import badge_check from "../vectors/badge_check.svg";
import trending_up from "../vectors/trending_up.svg";
import smile from "../vectors/smile.svg";
import monitor from "../vectors/monitor.svg";
import award from "../vectors/award.svg";
import heart from "../vectors/heart.svg";

export const SERVICES = [
  {
    id: 's01',
    title: 'Lease Management',
    shortDesc: 'End-to-end lease handling for hassle-free occupancy and compliance.',
    fullDesc: 'Comprehensive lease lifecycle management including drafting, renewals, and legal compliance. We handle every document, timeline, and tenant interaction so you never miss a detail.',
    icon: file_text,
  },
  {
    id: 's02',
    title: 'Tenant Management',
    shortDesc: 'Finding the right tenants and ensuring long-term tenant satisfaction.',
    fullDesc: 'Rigorous background checks, credit assessments, and reference verifications to secure quality tenants. We manage ongoing relationships to ensure low churn and high satisfaction.',
    icon: users,
  },
  {
    id: 's03',
    title: 'Rent Collection',
    shortDesc: 'Timely rent collection with transparency and reporting.',
    fullDesc: 'Automated rent tracking, digital payment collection, escalation management for defaults, and detailed monthly statements delivered on time, every time.',
    icon: indian_rupee,
  },
  {
    id: 's04',
    title: 'Property Maintenance',
    shortDesc: 'Regular inspections and maintenance for a well-maintained asset.',
    fullDesc: 'Scheduled inspections, preventive maintenance, and swift repair response through our network of trusted vendors. Your property stays in premium condition at all times.',
    icon: wrench,
  },
  {
    id: 's05',
    title: 'Financial Reporting',
    shortDesc: 'Detailed reports for better insights and informed decisions.',
    fullDesc: 'Monthly and quarterly financial reports, income statements, expense tracking, and ROI analysis. Complete transparency into every rupee earned and spent.',
    icon: bar_chart,
  },
  {
    id: 's06',
    title: 'Legal Compliance',
    shortDesc: 'Statutory compliance and documentation made simple.',
    fullDesc: 'RERA compliance, tax documentation, local municipal requirements, and dispute resolution support. We keep your property legally sound so you stay protected.',
    icon: shield,
  },
]

export const HOW_WE_WORK = [
  {
    step: '01',
    title: 'Comprehensive Property Management',
    desc: 'End-to-end services including tenant screening, rent collection, maintenance, and repairs — ensuring a stress-free experience.',
  },
  {
    step: '02',
    title: 'Seamless Tenant Screening & Placement',
    desc: 'Rigorous background checks, credit assessments, and reference verifications to ensure reliable tenants.',
  },
  {
    step: '03',
    title: 'Proactive Maintenance & Repairs',
    desc: 'Regular inspections and timely maintenance to prevent issues and keep your property in top condition.',
  },
  {
    step: '04',
    title: 'Technology Integration & Transparency',
    desc: 'Owner portal & tenant app for real-time updates, maintenance requests, payments, and reports.',
  },
  {
    step: '05',
    title: 'Marketing & Tenant Retention',
    desc: 'Multi-channel marketing, community events, and personalized experiences for higher retention and occupancy.',
  },
  {
    step: '06',
    title: 'Timely Rent Payment & Financial Transparency',
    desc: 'Rent credited before the 5th of every month with detailed financial reports and complete transparency.',
  },
]

export const WHY_CHOOSE = [
  { title: 'Guaranteed Rental Income', desc: 'Consistent rent, even during vacancy.', icon: badge_check },
  { title: 'Maximized Revenue', desc: 'High occupancy & better returns.', icon: trending_up },
  { title: 'Zero Hassle Management', desc: 'We handle everything, you enjoy returns.', icon: smile },
  { title: 'Tech-Enabled Transparency', desc: 'Real-time portal for complete visibility.', icon: monitor },
  { title: 'Proven Track Record', desc: '10+ years of experience & 500+ rooms managed.', icon: award },
  { title: 'Tenant Retention & Community', desc: 'Happy tenants, steady income.', icon: heart },
]

export const FUTURE_PROJECTIONS = [
  { num: '01', title: 'Expansion in Tier 2 & 5 Cities', desc: 'Expanding to smaller towns with growing rental demand.' },
  { num: '02', title: 'International Expansion', desc: 'Venturing into Southeast Asia & the Middle East.' },
  { num: '03', title: 'Increase Revenue-Share Properties', desc: 'Scaling our network to deliver better returns to owners.' },
  { num: '04', title: 'Collaboration with Rental Brokers', desc: 'Partnering with brokers to source quality properties across India.' },
  { num: '05', title: 'Integration of IoT Solutions', desc: 'Smart homes with automation, security & energy efficiency.' },
  { num: '06', title: 'Sustainability Initiatives', desc: 'Eco-friendly practices for cost-efficient & responsible property management.' },
  { num: '07', title: 'Managed Homes for Senior Living & Women\'s Housing', desc: 'Safe, community-oriented living spaces with support services.' },
  { num: '08', title: 'Co-Living Spaces in Metro Cities', desc: 'Co-living for students & young professionals in Delhi, Mumbai & Bengaluru.' },
]