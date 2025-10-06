import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  LogOut, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Users,
  Menu,
  X,
  Home,
  FileText,
  Settings,
  Bell,
  BarChart3,
  Wallet,
  Handshake
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock escrow data
const mockEscrowTransactions = [
  {
    id: 'ESC-001',
    buyer: 'John Smith',
    seller: 'Sarah Johnson',
    amount: 5000,
    status: 'In Progress',
    createdAt: '2025-10-01',
    description: 'Website Development Services',
  },
  {
    id: 'ESC-002',
    buyer: 'Alice Chen',
    seller: 'Bob Williams',
    amount: 12500,
    status: 'Completed',
    createdAt: '2025-09-28',
    description: 'Product Purchase - Electronics',
  },
  {
    id: 'ESC-003',
    buyer: 'Michael Brown',
    seller: 'Emma Davis',
    amount: 3200,
    status: 'Pending Release',
    createdAt: '2025-10-03',
    description: 'Freelance Design Work',
  },
  {
    id: 'ESC-004',
    buyer: 'Lisa Anderson',
    seller: 'Tom Martinez',
    amount: 8900,
    status: 'In Progress',
    createdAt: '2025-10-05',
    description: 'Consulting Services',
  },
  {
    id: 'ESC-005',
    buyer: 'David Lee',
    seller: 'Jennifer Taylor',
    amount: 15000,
    status: 'Disputed',
    createdAt: '2025-09-25',
    description: 'Software License',
  },
];

const mockStats = {
  totalEscrow: 44600,
  activeTransactions: 5,
  completedTransactions: 12,
  pendingReleases: 3,
};

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className?: string }> = {
      'Completed': { variant: 'default', className: 'bg-green-500 hover:bg-green-600' },
      'In Progress': { variant: 'default', className: 'bg-blue-500 hover:bg-blue-600' },
      'Pending Release': { variant: 'secondary' },
      'Disputed': { variant: 'destructive' },
    };
    return variants[status] || { variant: 'outline' };
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'transactions', label: 'Transactions', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'disputes', label: 'Disputes', icon: Handshake },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-card border-r flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">GuardPay</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="h-8 w-8 p-0"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start ${!sidebarOpen ? 'px-2' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon className="h-4 w-4" />
                {sidebarOpen && <span className="ml-2">{item.label}</span>}
              </Button>
            );
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t">
          {sidebarOpen && (
            <div className="mb-3">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          )}
          <Button
            variant="ghost"
            className={`w-full justify-start ${!sidebarOpen ? 'px-2' : ''}`}
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                {sidebarItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container py-8">
          {/* Content based on active section */}
          {activeSection === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total in Escrow</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${mockStats.totalEscrow.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Transactions</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeTransactions}</div>
              <p className="text-xs text-muted-foreground">Currently processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.completedTransactions}</div>
              <p className="text-xs text-muted-foreground">Successfully closed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Release</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.pendingReleases}</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Escrow Transactions</CardTitle>
                <CardDescription>Manage and monitor all your escrow transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Seller</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEscrowTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            {transaction.buyer}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            {transaction.seller}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">
                          ${transaction.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge {...getStatusBadge(transaction.status)}>
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.createdAt}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Escrow Transactions</CardTitle>
                <CardDescription>Currently processing transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEscrowTransactions
                      .filter((t) => t.status === 'In Progress' || t.status === 'Pending Release')
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell className="font-semibold">
                            ${transaction.amount.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge {...getStatusBadge(transaction.status)}>
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Escrow Transactions</CardTitle>
                <CardDescription>Successfully closed transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEscrowTransactions
                      .filter((t) => t.status === 'Completed')
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell className="font-semibold">
                            ${transaction.amount.toLocaleString()}
                          </TableCell>
                          <TableCell>{transaction.createdAt}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
              </Tabs>
            </>
          )}

          {/* Transactions Section */}
          {activeSection === 'transactions' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>Complete list of all escrow transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Buyer</TableHead>
                        <TableHead>Seller</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockEscrowTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              {transaction.buyer}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              {transaction.seller}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">
                            ${transaction.amount.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge {...getStatusBadge(transaction.status)}>
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{transaction.createdAt}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Analytics Section */}
          {activeSection === 'analytics' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>Transaction insights and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Transaction Volume</h3>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Chart placeholder</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Status Distribution</h3>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Pie chart placeholder</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Wallet Section */}
          {activeSection === 'wallet' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Balance</CardTitle>
                  <CardDescription>Your current wallet and escrow balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="text-center p-6 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Available Balance</p>
                      <p className="text-3xl font-bold">$12,450.00</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg">
                      <p className="text-sm text-muted-foreground">In Escrow</p>
                      <p className="text-3xl font-bold">$44,600.00</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Value</p>
                      <p className="text-3xl font-bold">$57,050.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Disputes Section */}
          {activeSection === 'disputes' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Disputes</CardTitle>
                  <CardDescription>Manage and resolve transaction disputes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">ESC-005 - Software License</h4>
                          <p className="text-sm text-muted-foreground">Dispute raised by buyer</p>
                        </div>
                        <Badge variant="destructive">Active</Badge>
                      </div>
                      <p className="text-sm mt-2">Amount: $15,000.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Recent alerts and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Transaction Completed</h4>
                          <p className="text-sm text-muted-foreground">ESC-002 has been successfully completed</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Payment Released</h4>
                          <p className="text-sm text-muted-foreground">$12,500 has been released to seller</p>
                        </div>
                        <span className="text-xs text-muted-foreground">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <p className="text-sm text-muted-foreground">{user.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;




