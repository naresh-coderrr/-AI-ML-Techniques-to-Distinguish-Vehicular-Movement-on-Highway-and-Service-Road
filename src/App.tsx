import { AuthProvider, useAuth } from '@/lib/auth';
import AuthPage from '@/pages/AuthPage';
import Sidebar, { type TabId } from '@/components/Sidebar';
import LiveRide from '@/pages/LiveRide';
import NetworkExplorer from '@/pages/NetworkExplorer';
import TelemetryLab from '@/pages/TelemetryLab';
import Analytics from '@/pages/Analytics';
import HowItWorks from '@/pages/HowItWorks';
import HelpPage from '@/pages/HelpPage';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

function Shell() {
  const { user, loading, signOut } = useAuth();
  const [tab, setTab] = useState<TabId>('live');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-950">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    );
  }
  if (!user) return <AuthPage />;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-navy-950 text-slate-200">
      <Sidebar tab={tab} onChange={setTab} user={user} onSignOut={signOut} />
      <main className="flex-1 overflow-y-auto">
        {tab === 'live' && <LiveRide />}
        {tab === 'network' && <NetworkExplorer />}
        {tab === 'lab' && <TelemetryLab />}
        {tab === 'analytics' && <Analytics />}
        {tab === 'method' && <HowItWorks />}
        {tab === 'help' && <HelpPage />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
