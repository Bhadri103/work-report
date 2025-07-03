import { 
  BarChart3, 
  FileText, 
  ShoppingCart, 
  Package, 
  Receipt, 
  ClipboardList, 
  Percent, 
  ChefHat, 
  Archive,
  Users
} from 'lucide-react';

import Dashboard1 from '../image/dashbaord1.png'
import Dashboard2 from '../image/dashboard2.png'
import Dashboard3 from '../image/dashboard3.png'
import Report1 from '../image/Report1.png'
import Report2 from '../image/Report2.png'
import Report3 from '../image/Report3.png'
import Report4 from '../image/Report4.png'
import Report5 from '../image/Report5.png'
import Report6 from '../image/Report6.png'
import Report7 from '../image/Report7.png'
import Report8 from '../image/Report8.png'
import Report9 from '../image/Report9.png'
import Report10 from '../image/Report10.png'
import Report11 from '../image/Report11.png'
import Report12 from '../image/Report12.png'
import Report13 from '../image/Report13.png'
import Report14 from '../image/Report14.png'
import Report15 from '../image/Report15.png'

import sales1 from '../image/sales1.png'
import sales2 from '../image/sales2.png'

import purchase1 from '../image/purchase1.png'
import purchase2 from '../image/purchase2.png' 

import Expense1 from '../image/Expense1.png'
import Expense2 from '../image/Expense2.png'

import Kot1 from '../image/Kot1.png'

import Offer1 from '../image/Offer1.png'
import Offer2 from '../image/Offer2.png'
import Offer3 from '../image/Offer3.png'
import Offer4 from '../image/Offer4.png'
import Offer5 from '../image/Offer5.png'
import Offer6 from '../image/Offer6.png'
import Offer7 from '../image/Offer7.png' 

import Recipe1 from '../image/Recipe1.png' 
import Recipe2 from '../image/Recipe2.png' 
import Recipe3 from '../image/Recipe3.png' 
import Recipe4 from '../image/Recipe4.png' 
import Recipe5 from '../image/Recipe5.png' 
import Recipe6 from '../image/Recipe6.png'  

import Inventory1 from '../image/Inventory1.png'  
import Inventory2 from '../image/Inventory2.png'  
import Inventory3 from '../image/Inventory3.png'  
import Inventory4 from '../image/Inventory4.png'  

import Party1 from '../image/Party1.png'  
import Party2 from '../image/Party2.png'  
import Party3 from '../image/Party3.png'  
import Party4 from '../image/Party4.png'  
import Party5 from '../image/Party5.png'  
import Party6 from '../image/Party6.png'  
import Party7 from '../image/Party7.png'  
import Party8 from '../image/Party8.png'  
import Party9 from '../image/Party9.png'  
import Party10 from '../image/Party10.png'  
import Party11 from '../image/Party11.png'  
import Party12 from '../image/Party12.png'  



export interface Module {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: any;
  color: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const modules: Module[] = [
  {
    id: 'dashboard',
    title: 'DASHBOARD',
    subtitle: 'Real-time Operational Overview',
    description: 'A comprehensive dashboard providing real-time insights into your restaurant operations with key metrics and performance indicators.',
    features: [
      'Total Sales & Revenue Tracking',
      'Today\'s New Customers Count',
      'Pending Credits Management',
      'Loyal Customer Analytics',
      'Receivables & Payables Overview',
      'Online Orders Monitoring',
      'Recent Transactions History',
      'Payment Reminder System'
    ],
    icon: BarChart3,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    images: [
      { src: Dashboard1, alt: 'Dashboard Overview' },
      { src: Dashboard2, alt: 'Dashboard Overview' },
      { src: Dashboard3, alt: 'Dashboard Overview' },
        ]
  },
  {
    id: 'reports',
    title: 'REPORTS',
    subtitle: 'Comprehensive Business Analytics',
    description: 'Generate detailed reports for accounting, tax compliance, inventory management, and business performance analysis.',
    features: [
      'GST & Tax Reports',
      'Recipe, Brand & Product Reports',
      'Creditors & Debtors Analysis',
      'Cash Book & Bank Reports',
      'Profit & Loss Statements',
      'Trial Balance & Balance Sheet',
      'Discount & Round Off Reports',
      'Stock & Labour Reports',
      'Sales Summary & KOT Support'
    ],
    icon: FileText,
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    images: [
      { src: Report1, alt: 'Reports' },
      { src: Report2, alt: 'Reports' },
      { src: Report3, alt: 'Reports' },
      { src: Report4, alt: 'Reports' },
      { src: Report5, alt: 'Reports' },
      { src: Report6, alt: 'Reports' },
      { src: Report7, alt: 'Reports' },
      { src: Report8, alt: 'Reports' },
      { src: Report9, alt: 'Reports' },
      { src: Report10, alt: 'Reports' },
      { src: Report11, alt: 'Reports' },
      { src: Report12, alt: 'Reports' },
      { src: Report13, alt: 'Reports' },
      { src: Report14, alt: 'Reports' },
      { src: Report15, alt: 'Reports' },
        ]
  },
  {
    id: 'sales',
    title: 'SALES',
    subtitle: 'Complete Sales Management',
    description: 'Streamline your sales process with customer management, product selection, KOT integration, and flexible payment options.',
    features: [
      'Customer Information Management',
      'Product Catalog & Pricing',
      'KOT Status Tracking',
      'Multiple Payment Methods',
      'Invoice Generation',
      'Sales History & Analytics',
      'Discount Application',
      'Tax Calculation & Compliance'
    ],
    icon: ShoppingCart,
    color: 'bg-gradient-to-r from-purple-500 to-purple-600',
    images: [
      { src: sales1, alt: 'Sales Interface' },
      { src: sales2, alt: 'Sales Interface' },
      ]
  },
  {
    id: 'purchase',
    title: 'PURCHASE',
    subtitle: 'Vendor & Procurement Management',
    description: 'Manage your supply chain efficiently with vendor management, purchase orders, and payment tracking.',
    features: [
      'Vendor Details & Contacts',
      'Purchase Order Management',
      'Proforma Invoice Processing',
      'Purchase Totals & Analytics',
      'Payment Status Tracking',
      'Supplier Performance Analysis',
      'Inventory Integration',
      'Cost Management & Budgeting'
    ],
    icon: Package,
    color: 'bg-gradient-to-r from-orange-500 to-orange-600',
    images: [
        
      { src: purchase1, alt: 'Purchase' },
      { src: purchase2, alt: 'Purchase' }
    ]
  },
  {
    id: 'expense',
    title: 'EXPENSE',
    subtitle: 'Financial Transaction Management',
    description: 'Track and manage all business expenses with journal entries, balance transactions, and credit note management.',
    features: [
      'Journal Entry Management',
      'Balance Transaction Recording',
      'Credit Note Processing',
      'Expense Category Classification',
      'Approval Workflow',
      'Expense Analytics & Reporting',
      'Budget Tracking',
      'Cost Center Allocation'
    ],
    icon: Receipt,
    color: 'bg-gradient-to-r from-red-500 to-red-600',
    images: [
     
      { src:Expense1, alt: 'Expense' },
      { src:Expense2, alt: 'Expense' }
    ]
  },
  {
    id: 'kot',
    title: 'KOT (Kitchen Order Ticket)',
    subtitle: 'Kitchen Operations Management',
    description: 'Streamline kitchen operations with digital order tickets, status tracking, and efficient order management.',
    features: [
      'Dine-in & Take Away Options',
      'KOT Number Generation',
      'Customer Information Display',
      'Time & Table Number Tracking',
      'Ordered Items Management',
      'Order Status Updates',
      'Color-coded Status Indicators',
      'Kitchen Workflow Optimization'
    ],
    icon: ClipboardList,
    color: 'bg-gradient-to-r from-teal-500 to-teal-600',
    images: [
      { src: Kot1, alt: 'Kitchen Order Tickets' },
       ]
  },
  {
    id: 'offers',
    title: 'OFFERS & DISCOUNTS',
    subtitle: 'Promotional Campaign Management',
    description: 'Create and manage promotional campaigns with flexible discount structures and customer loyalty programs.',
    features: [
      'Offer Creation & Management',
      'Coupon Code System',
      'Referrer Points Program',
      'Loyalty Rewards Management',
      'Discount Rules & Conditions',
      'Campaign Performance Tracking',
      'Customer Segmentation',
      'Promotional Analytics'
    ],
    icon: Percent,
    color: 'bg-gradient-to-r from-pink-500 to-pink-600',
    images: [
      { src: Offer1, alt: 'Offers Management' },
      { src: Offer2, alt: 'Offers Management' },
      { src: Offer3, alt: 'Offers Management' },
      { src: Offer4, alt: 'Offers Management' },
      { src: Offer5, alt: 'Offers Management' },
      { src: Offer6, alt: 'Offers Management' },
      { src: Offer7, alt: 'Offers Management' }, 
     ]
  },
  {
    id: 'recipe',
    title: 'RECIPE',
    subtitle: 'Recipe & Menu Management',
    description: 'Organize your recipes and menu items with ingredient management and order customization capabilities.',
    features: [
      'Recipe Database Management',
      'Ingredient Lists & Quantities',
      'Cooking Instructions',
      'Nutritional Information',
      'Cost Calculation',
      'Recipe Variants & Modifications',
      'Menu Item Association',
      'Inventory Integration'
    ],
    icon: ChefHat,
    color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    images: [
      { src: Recipe1, alt: 'Recipe Management' },
      { src: Recipe2, alt: 'Recipe Management' },
      { src: Recipe3, alt: 'Recipe Management' },
      { src: Recipe4, alt: 'Recipe Management' },
      { src: Recipe5, alt: 'Recipe Management' },
      { src: Recipe6, alt: 'Recipe Management' }, 
        ]
  },
  {
    id: 'inventory',
    title: 'INVENTORY',
    subtitle: 'Stock & Storage Management',
    description: 'Comprehensive inventory management with item tracking, storage organization, and stock level monitoring.',
    features: [
      'Item Catalog Management',
      'Stock Level Monitoring',
      'Rack & Storage Organization',
      'Reorder Point Alerts',
      'Inventory Valuation',
      'Stock Movement Tracking',
      'Wastage & Loss Recording',
      'Supplier Integration'
    ],
    icon: Archive,
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    images: [
      { src: Inventory1, alt: 'Inventory Management' },
      { src: Inventory2, alt: 'Inventory Management' },
      { src: Inventory3, alt: 'Inventory Management' },
      { src: Inventory4, alt: 'Inventory Management' }
    ]
  },
  {
    id: 'party',
    title: 'PARTY MANAGEMENT',
    subtitle: 'Stakeholder Relationship Management',
    description: 'Manage all business relationships including customers, vendors, referrers, and staff members.',
    features: [
      'Customer Database & Profiles',
      'Vendor Management System',
      'Referrer Network Tracking',
      'Labour & Staff Management',
      'Contact Information Management',
      'Relationship History',
      'Communication Tracking',
      'Performance Analytics'
    ],
    icon: Users,
    color: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
    images: [
      { src: Party1, alt: 'Party Management' },
      { src: Party2, alt: 'Party Management' },
      { src: Party3, alt: 'Party Management' },
      { src: Party4, alt: 'Party Management' },
      { src: Party5, alt: 'Party Management' },
      { src: Party6, alt: 'Party Management' },
      { src: Party7, alt: 'Party Management' },
      { src: Party8, alt: 'Party Management' },
      { src: Party9, alt: 'Party Management' },
      { src: Party10, alt: 'Party Management' },
      { src: Party11, alt: 'Party Management' },
      { src: Party12, alt: 'Party Management' }, 
       ]
  }
];