import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Terminal, 
  ChevronRight, 
  Github, 
  ExternalLink, 
  MousePointer2, 
  BarChart3, 
  Download,
  Layers,
  Code2,
  Book,
  Search,
  Settings,
  Shield,
  Activity,
  FileText,
  FileCode,
  Menu,
  X,
  List,
  PanelLeftOpen
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar and scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [currentPage]);

  // Handle body scroll locking when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const Nav = () => (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-black tracking-tighter flex items-center text-slate-900 cursor-pointer outline-none">
            CU<span className="text-blue-600">EDA</span>
          </button>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => setCurrentPage('technology')} 
              className={`hover:text-blue-600 transition ${currentPage === 'technology' ? 'text-blue-600' : ''}`}
            >
              Technology
            </button>
            <button 
              onClick={() => setCurrentPage('docs')} 
              className={`hover:text-blue-600 transition ${currentPage === 'docs' ? 'text-blue-600' : ''}`}
            >
              Documentation
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-md text-sm font-bold transition shadow-lg shadow-slate-900/10">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );

  const HomeView = () => (
    <>
      <header className="relative w-full py-24 bg-white overflow-hidden border-b border-slate-200 flex justify-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6 tracking-widest uppercase">
              <Zap size={14} fill="currentColor" /> GPU-Accelerated Logic Synthesis
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Accelerate Signoff with <span className="text-blue-600">Massive Parallelism</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              CUEDA delivers the industry's fastest RTL-to-GDSII turnaround time by offloading synthesis operators to the GPU, matching Genus/DC Quality of Results (QoR) at 10x speeds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setCurrentPage('technology')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition transform active:scale-95 shadow-xl shadow-blue-600/20">
                Explore Tech <ChevronRight size={20} />
              </button>
              <button onClick={() => setCurrentPage('docs')} className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition border border-slate-200 shadow-sm">
                Documentation
              </button>
            </div>
          </div>
          <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 shadow-xl relative">
            <div className="bg-white rounded-xl p-6 font-mono text-sm leading-relaxed overflow-hidden border border-slate-200 shadow-inner">
              <div className="flex gap-2 mb-4 border-b border-slate-100 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="text-slate-400 ml-2 text-xs">cueda_shell — synthesis.v</span>
              </div>
              <p className="text-slate-400">cueda&gt; read_hdl -v2k design.v</p>
              <p className="text-slate-400">cueda&gt; elaborate</p>
              <p className="text-yellow-400 font-bold">cueda&gt; compile_gpu -effort high -area 1.0</p>
              <p className="text-blue-400">[INFO] Dispatching 2.4M nodes to GPU...</p>
              <p className="text-green-400">[SUCCESS] Synthesis complete. TNS: -0.01ns</p>
              <p className="text-slate-400 italic">cueda&gt; write_netlist result.v</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 uppercase font-black mb-1">Runtime Speedup</div>
                <div className="text-2xl font-black text-blue-600">12.4x</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 uppercase font-black mb-1">QoR Variance</div>
                <div className="text-2xl font-black text-emerald-600">&lt; 0.5%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Information Section */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Ecosystem Integration</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              CUEDA isn't just a tool; it's a foundation. Our API and extension fit your existing industrial design workflow seamlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Instant Feedback (Yellow Cursor Section) */}
            <div className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl relative overflow-hidden cursor-default">
              <div className="bg-yellow-400/10 p-4 rounded-xl w-fit mb-6 text-yellow-600 group-hover:bg-yellow-400/20 transition-colors">
                <MousePointer2 size={32} strokeWidth={2.5} className="text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Feedback</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Install our VS Code Extension for real-time QoR evaluation directly in your editor.
              </p>
              <a href="https://marketplace.visualstudio.com/items?itemName=CUEDA.CUEDA-extension" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                Marketplace <ChevronRight size={18} />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-default">
              <div className="bg-blue-400/10 p-4 rounded-xl w-fit mb-6 text-blue-600 group-hover:bg-blue-400/20 transition-colors">
                <Cpu size={32} strokeWidth={2.5} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">GPU-Native Kernels</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Optimized for NVIDIA CUDA, handling logic restructuring with massive parallelism.
              </p>
              <button className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                Technical Paper <ChevronRight size={18} />
              </button>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl cursor-default">
              <div className="bg-emerald-400/10 p-4 rounded-xl w-fit mb-6 text-emerald-600 group-hover:bg-emerald-400/20 transition-colors">
                <Layers size={32} strokeWidth={2.5} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modular API</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Available as a C++/Python Shared Library for custom placement or routing tools.
              </p>
              <button className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                API Docs <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const DocsView = () => (
    <div className="max-w-[1440px] mx-auto px-6 py-12 flex gap-12 w-full min-h-screen relative">
      
      {/* MOBILE ONLY: Floating TOC Icon */}
      <div className="fixed top-20 left-6 z-50 md:hidden">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 bg-white/60 backdrop-blur-lg hover:bg-white/80 text-slate-900 p-3 rounded-xl font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95 group"
        >
          <PanelLeftOpen size={20} className="text-blue-600" />
        </button>
      </div>

      {/* MOBILE ONLY: Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR: Static on Wide Screen, Pop-up Drawer on Small Screen */}
      <aside className={`
        fixed inset-y-0 left-0 z-[70] bg-white w-72 p-8 border-r border-slate-200 
        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform
        md:relative md:translate-x-0 md:bg-transparent md:border-none md:p-0 md:w-64 md:z-auto md:block
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-10 md:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Book size={18} />
            </div>
            <span className="font-black text-xl tracking-tighter">Contents</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-10 md:sticky md:top-28">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              Getting Started
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="text-blue-600 cursor-pointer flex items-center justify-between group">
                Quickstart Guide <ChevronRight size={14} />
              </li>
              <li className="text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Installation</li>
              <li className="text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">CLI Basics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              Core Concepts
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">RTL Elaboration</li>
              <li className="text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Logic Rewriting</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* CONTENT: Adjusted margin to accommodate static sidebar on wide screens */}
      <article className="flex-grow max-w-3xl prose prose-slate">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} /> Documentation / Getting Started
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Quickstart Guide</h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Deploy the industry's most advanced GPU-accelerated logic synthesis environment in under 5 minutes.
          </p>
        </div>

        <div className="p-8 bg-slate-900 rounded-2xl text-blue-400 font-mono text-sm mb-12 shadow-2xl border border-slate-800 relative">
          <span className="text-slate-500"># Install the CUEDA core package</span><br/>
          <span className="text-emerald-400 font-bold">pip</span> install cueda-eda<br/><br/>
          <span className="text-slate-500"># Verify GPU acceleration</span><br/>
          cueda --check-gpu
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Standard Workflow</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          CUEDA replaces the synthesis stage in your standard CAD flow. Simply replace your traditional synthesis tool calls with the CUEDA engine to see immediate speedups.
        </p>
      </article>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 flex flex-col w-full selection:bg-blue-200">
      <Nav />
      <main className="w-full flex-grow">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'technology' && <HomeView /> /* Tech view placeholder */}
        {currentPage === 'docs' && <DocsView />}
      </main>
      <footer className="w-full bg-white text-slate-400 py-16 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xl font-black tracking-tighter text-slate-900">CU<span className="text-blue-600">EDA</span></span>
          <p className="text-xs font-bold uppercase tracking-[0.3em]">© 2025 CUEDA Laboratory</p>
        </div>
      </footer>
    </div>
  );
};

export default App;