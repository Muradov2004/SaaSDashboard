// Monthly Revenue Data for Area/Line Chart
export const monthlyRevenueData = [
  { month: 'Jan', revenue: 18500, expenses: 12400, profit: 6100 },
  { month: 'Feb', revenue: 22300, expenses: 14200, profit: 8100 },
  { month: 'Mar', revenue: 19800, expenses: 11900, profit: 7900 },
  { month: 'Apr', revenue: 27600, expenses: 16800, profit: 10800 },
  { month: 'May', revenue: 31200, expenses: 18500, profit: 12700 },
  { month: 'Jun', revenue: 28900, expenses: 17200, profit: 11700 },
  { month: 'Jul', revenue: 35400, expenses: 19800, profit: 15600 },
  { month: 'Aug', revenue: 33100, expenses: 20100, profit: 13000 },
  { month: 'Sep', revenue: 38700, expenses: 21400, profit: 17300 },
  { month: 'Oct', revenue: 41200, expenses: 22800, profit: 18400 },
  { month: 'Nov', revenue: 39500, expenses: 23600, profit: 15900 },
  { month: 'Dec', revenue: 45800, expenses: 25200, profit: 20600 },
];

// Revenue Distribution by Category (Donut Chart)
export const revenueByCategoryData = [
  { name: 'SaaS Subscriptions', value: 42, color: '#6366f1' },
  { name: 'Enterprise Licenses', value: 28, color: '#14b8a6' },
  { name: 'Professional Services', value: 16, color: '#f59e0b' },
  { name: 'Add-ons & Plugins', value: 9, color: '#ec4899' },
  { name: 'Training & Support', value: 5, color: '#8b5cf6' },
];

// Stats Cards Data
export const statsData = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$482,600',
    change: '+12.5%',
    changeType: 'positive',
    period: 'vs last month',
    icon: 'DollarSign',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Active Subscriptions',
    value: '8,429',
    change: '+8.2%',
    changeType: 'positive',
    period: 'vs last month',
    icon: 'Users',
    color: 'accent',
  },
  {
    id: 3,
    title: 'Sales Growth',
    value: '24.8%',
    change: '+4.1%',
    changeType: 'positive',
    period: 'vs last quarter',
    icon: 'TrendingUp',
    color: 'amber',
  },
  {
    id: 4,
    title: 'Churn Rate',
    value: '2.4%',
    change: '-0.8%',
    changeType: 'negative',
    period: 'vs last month',
    icon: 'Activity',
    color: 'rose',
  },
];

// Recent Transactions
export const transactionsData = [
  {
    id: 'TXN-001',
    customer: 'Olivia Martinez',
    email: 'olivia.martinez@company.com',
    date: '2026-03-19',
    amount: '$1,250.00',
    status: 'Success',
    plan: 'Enterprise',
    avatar: 'OM',
  },
  {
    id: 'TXN-002',
    customer: 'James Thompson',
    email: 'james.t@startup.io',
    date: '2026-03-18',
    amount: '$890.00',
    status: 'Success',
    plan: 'Professional',
    avatar: 'JT',
  },
  {
    id: 'TXN-003',
    customer: 'Sarah Chen',
    email: 'sarah.chen@enterprise.co',
    date: '2026-03-18',
    amount: '$2,400.00',
    status: 'Pending',
    plan: 'Enterprise',
    avatar: 'SC',
  },
  {
    id: 'TXN-004',
    customer: 'Michael Roberts',
    email: 'michael.r@techfirm.com',
    date: '2026-03-17',
    amount: '$450.00',
    status: 'Success',
    plan: 'Starter',
    avatar: 'MR',
  },
  {
    id: 'TXN-005',
    customer: 'Emma Wilson',
    email: 'emma.w@designlab.co',
    date: '2026-03-17',
    amount: '$1,800.00',
    status: 'Failed',
    plan: 'Professional',
    avatar: 'EW',
  },
  {
    id: 'TXN-006',
    customer: 'David Kim',
    email: 'david.kim@ventures.io',
    date: '2026-03-16',
    amount: '$3,200.00',
    status: 'Success',
    plan: 'Enterprise',
    avatar: 'DK',
  },
  {
    id: 'TXN-007',
    customer: 'Lisa Anderson',
    email: 'lisa.a@consulting.com',
    date: '2026-03-16',
    amount: '$720.00',
    status: 'Pending',
    plan: 'Professional',
    avatar: 'LA',
  },
  {
    id: 'TXN-008',
    customer: 'Robert Garcia',
    email: 'robert.g@solutions.co',
    date: '2026-03-15',
    amount: '$1,950.00',
    status: 'Success',
    plan: 'Enterprise',
    avatar: 'RG',
  },
  {
    id: 'TXN-009',
    customer: 'Anna Petrov',
    email: 'anna.p@global.io',
    date: '2026-03-15',
    amount: '$560.00',
    status: 'Failed',
    plan: 'Starter',
    avatar: 'AP',
  },
  {
    id: 'TXN-010',
    customer: 'Chris Taylor',
    email: 'chris.t@agency.com',
    date: '2026-03-14',
    amount: '$1,100.00',
    status: 'Success',
    plan: 'Professional',
    avatar: 'CT',
  },
];

// Sidebar Navigation Items
export const navItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/', active: true },
  { label: 'Analytics', icon: 'BarChart3', path: '/analytics', active: false },
  { label: 'Customers', icon: 'Users', path: '/customers', active: false },
  { label: 'Revenue', icon: 'DollarSign', path: '/revenue', active: false },
  { label: 'Settings', icon: 'Settings', path: '/settings', active: false },
];

// Notification items
export const notifications = [
  { id: 1, title: 'New Enterprise signup', message: 'TechCorp just signed up for the Enterprise plan', time: '2 min ago', read: false },
  { id: 2, title: 'Payment received', message: '$3,200 payment from David Kim', time: '15 min ago', read: false },
  { id: 3, title: 'Subscription cancelled', message: 'Basic plan subscription cancelled by user', time: '1 hour ago', read: true },
  { id: 4, title: 'Server alert', message: 'API response time exceeded threshold', time: '3 hours ago', read: true },
];
