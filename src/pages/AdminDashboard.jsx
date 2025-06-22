import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  FaUsers, FaTrash, FaEye, FaShield, FaCalendarDays,
  FaArrowLeft, FaMagnifyingGlass, FaFilter, FaDownload,
  FaTriangleExclamation, FaUserCheck, FaUserXmark
} from 'react-icons/fa6';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersThisWeek: 0,
    activeUsers: 0
  });

  // Remove all authentication - just show the dashboard
  useEffect(() => {
    fetchUsers();
    fetchStats();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching users from database...');
      
      // Try using admin function first to bypass RLS
      const { data, error } = await supabase.rpc('get_all_users_admin');

      console.log('📊 Database response:', { data, error, dataLength: data?.length });

      if (error) {
        console.error('❌ Supabase error:', error);
        console.log('🔄 Trying fallback query...');
        
        // Fallback to direct query
        const fallbackResult = await supabase
          .from('users')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (fallbackResult.error) {
          throw fallbackResult.error;
        }
        
        console.log('📊 Fallback result:', { data: fallbackResult.data, dataLength: fallbackResult.data?.length });
        setUsers(fallbackResult.data || []);
      } else {
        console.log('✅ Successfully fetched users via admin function:', data?.length || 0);
        setUsers(data || []);
      }
    } catch (error) {
      console.error('💥 Error fetching users:', error);
      toast.error(`Failed to load users: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      console.log('📈 Fetching stats from database...');
      
      // Use admin functions to get accurate counts
      const [totalResult, weekResult, activeResult] = await Promise.all([
        supabase.rpc('get_user_count_admin'),
        supabase.rpc('get_users_this_week_admin'), 
        supabase.rpc('get_active_users_admin')
      ]);

      const statsData = {
        totalUsers: totalResult.data || 0,
        newUsersThisWeek: weekResult.data || 0,
        activeUsers: activeResult.data || 0
      };

      console.log('📊 Stats calculated via admin functions:', statsData);
      
      // Log any errors
      if (totalResult.error) console.error('❌ Total users error:', totalResult.error);
      if (weekResult.error) console.error('❌ Week users error:', weekResult.error);
      if (activeResult.error) console.error('❌ Active users error:', activeResult.error);

      setStats(statsData);
    } catch (error) {
      console.error('💥 Error fetching stats:', error);
    }
  };

  const deleteUser = async (userId, userEmail) => {
    if (!window.confirm(`Are you sure you want to delete user: ${userEmail}?\n\nThis action cannot be undone.`)) {
      return;
    }

    try {
      setDeleting(userId);

      // Delete from auth.users (this will cascade to public.users due to foreign key)
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      
      if (authError) {
        // If auth deletion fails, try deleting from public.users directly
        const { error: publicError } = await supabase
          .from('users')
          .delete()
          .eq('id', userId);
          
        if (publicError) throw publicError;
      }

      // Remove from local state
      setUsers(prev => prev.filter(u => u.id !== userId));
      
      // Update stats
      setStats(prev => ({
        ...prev,
        totalUsers: prev.totalUsers - 1
      }));

      toast.success(`User ${userEmail} deleted successfully`);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  const filteredUsers = users.filter(user => 
    user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Simple Clean Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-xl p-2">
                <FaShield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  fetchUsers();
                  fetchStats();
                  toast.success('Data refreshed!');
                }}
                className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <FaUsers className="w-4 h-4" />
                <span>Refresh Data</span>
              </button>
              
              <button
                onClick={() => navigate('/journey')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-slate-800">{stats.totalUsers}</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-3">
                <FaUsers className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">This Week</p>
                <p className="text-3xl font-bold text-purple-600">{stats.newUsersThisWeek}</p>
              </div>
              <div className="bg-purple-100 rounded-xl p-3">
                <FaUsers className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Active Users</p>
                <p className="text-3xl font-bold text-emerald-600">{stats.activeUsers}</p>
              </div>
              <div className="bg-emerald-100 rounded-xl p-3">
                <FaUserCheck className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden"
        >
          <div className="p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-800">Registered Users</h2>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-slate-600 mt-2">Loading users...</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="p-8 text-center">
                <FaUsers className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">No users found</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {filteredUsers.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            {user.full_name?.charAt(0)?.toUpperCase() || 'U'}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-slate-900">{user.full_name || 'Unnamed User'}</div>
                            <div className="text-sm text-slate-500">ID: {user.id.slice(0, 8)}...</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => deleteUser(user.id, user.email)}
                          disabled={deleting === user.id}
                          className="text-red-600 hover:text-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1 ml-auto"
                        >
                          {deleting === user.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                          ) : (
                            <FaTrash className="w-4 h-4" />
                          )}
                          <span className="ml-1">Delete</span>
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {filteredUsers.length > 0 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing {filteredUsers.length} of {users.length} users
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Debug: Total in DB: {stats.totalUsers} | Fetched: {users.length} | Filtered: {filteredUsers.length}
              </p>
            </div>
          )}
          
          {/* Debug Info */}
          {!loading && users.length === 0 && (
            <div className="px-6 py-4 bg-yellow-50 border-t border-yellow-200">
              <p className="text-sm text-yellow-800">
                🔍 Debug Info: No users found in the query result. 
                Stats show {stats.totalUsers} total users in database.
              </p>
              <p className="text-xs text-yellow-600 mt-1">
                Check browser console for detailed logs.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard; 