import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Terminal, 
  ChevronRight, 
  ExternalLink, 
  MousePointer2, 
  Layers,
  Book,
  X,
  PanelLeftOpen,
  Trophy,
  Medal,
  Award,
  Microscope,
  Network,
  Binary,
  FileCode,
  ArrowRight,
  Maximize2
} from 'lucide-react';

/**
 * CUHK Color Palette Constants
 * Primary Purple: #532E74
 * Accent Gold: #B98336
 */
const CUHK_PURPLE = '#532E74';
const CUHK_GOLD = '#B98336';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [currentPage]);

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
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-black tracking-tighter flex items-center text-slate-900 cursor-pointer outline-none hover:opacity-80 transition uppercase">
            CU<span style={{ color: CUHK_GOLD }}>EDA</span>
          </button>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => setCurrentPage('features')} 
              className={`transition-colors hover:text-[${CUHK_PURPLE}] ${currentPage === 'features' ? `text-[${CUHK_PURPLE}]` : ''}`}
              style={{ color: currentPage === 'features' ? CUHK_PURPLE : undefined }}
            >
              Features
            </button>
            <button 
              onClick={() => setCurrentPage('docs')} 
              className={`transition-colors hover:text-[${CUHK_PURPLE}] ${currentPage === 'docs' ? `text-[${CUHK_PURPLE}]` : ''}`}
              style={{ color: currentPage === 'docs' ? CUHK_PURPLE : undefined }}
            >
              Documentation
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            style={{ backgroundColor: CUHK_PURPLE }}
            className="hidden sm:block hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-bold transition shadow-lg shadow-purple-900/10"
          >
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
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#532E74_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div 
              style={{ backgroundColor: `${CUHK_PURPLE}10`, borderColor: `${CUHK_PURPLE}20`, color: CUHK_PURPLE }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-6 tracking-widest uppercase"
            >
              <Zap size={14} fill="currentColor" /> GPU-Accelerated Logic Synthesis
            </div>
            <h1 className="text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Accelerate Circuit Design with <span style={{ color: CUHK_PURPLE }}>GPU-Acceleration</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              CUEDA delivers the industry's fastest VLSI logic synthesis turnaround time by offloading operators to the GPU, matching industry Quality of Results (QoR) at 20x speeds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('features')} 
                style={{ backgroundColor: CUHK_PURPLE }}
                className="hover:opacity-90 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition transform active:scale-95 shadow-xl shadow-purple-900/20"
              >
                Explore Features <ChevronRight size={20} />
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
                <span className="text-slate-400 ml-2 text-xs">cueda_shell</span>
              </div>
              <p className="text-slate-400">cueda&gt; read_hdl -v2k design.v</p>
              <p className="text-slate-400">cueda&gt; elaborate</p>
              <p className="text-slate-600 font-bold">cueda&gt; syn -effort high</p>
              <p className="text-blue-600">[INFO] Dispatching 2.4M nodes to GPU...</p>
              <p className="text-emerald-600 font-bold">[SUCCESS] Synthesis complete, Overall Runtime: 10.00s</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-black mb-1">Runtime Speedup</div>
                <div className="text-2xl font-black text-blue-600">30x</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-black mb-1">QoR Variance</div>
                <div className="text-2xl font-black text-emerald-600">&lt; 10%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full pt-20 pb-20 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Tighter grid for the feature blocks */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6 mb-20">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden cursor-pointer" 
                 onClick={() => setCurrentPage('docs')}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <MousePointer2 size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Feedback</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Real-time QoR evaluation directly in your editor as you code RTL.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Marketplace <ChevronRight size={16} />
              </span>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl cursor-pointer" 
                 onClick={() => setCurrentPage('features')}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">GPU-Native Kernels</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Optimized for NVIDIA CUDA, handling massive logic restructuring.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Technical Detail <ChevronRight size={16} />
              </span>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl cursor-default"
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Modular API</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Available as a C++/Python Shared Library for custom integration.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                API Docs <ChevronRight size={16} />
              </span>
            </div>
          </div>

          <div className="w-full bg-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-xl border border-slate-200">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-slate-900">
              <Trophy size={200} />
            </div>
            
            <div className="relative z-10">
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, borderColor: `${CUHK_PURPLE}20`, color: CUHK_PURPLE }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase mb-8">
                <Award size={14} /> Academic & Industrial Excellence
              </div>
              
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Awards</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 style={{ color: CUHK_PURPLE }} className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Medal size={16} /> Honors
                  </h4>
                  <ul className="space-y-6 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, ICCAD, 2025.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: CUHK_GOLD }}></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award</span>, ASP-DAC, 2024.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, DAC, 2023.</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 style={{ color: CUHK_GOLD }} className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Trophy size={16} /> Global CAD Contests
                  </h4>
                  <ul className="space-y-6 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Second Place</span>, ICCAD CAD Contest, 2025.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300  shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Second Place</span>, ICCAD CAD Contest, 2024.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: CUHK_GOLD }}></div>
                      <p><span className="text-slate-900 font-bold">First Place</span>, ICCAD CAD Contest, 2021.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const FeaturesPageView = () => (
    <div className="w-full bg-white min-h-screen">
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <div style={{ color: CUHK_PURPLE }} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
              <Microscope size={14} /> Core Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              Technical <span style={{ color: CUHK_PURPLE }}>Features</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              CUEDA leverages high-performance GPU kernels to redefine the boundaries of VLSI design synthesis.
            </p>
          </div>

          <div className="grid gap-24">
            {/* All Feature sections now move image to right and make them smaller */}
            
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Massive Parallellism on GPUs</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our core synthesis engine offloads logic optimization tasks to thousands of CUDA cores. By processing millions of And-Inverter Graph (AIG) nodes simultaneously, we achieve 20x-30x speedups.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">CUDA Optimized</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="massivepara.png" alt="Massive Parallel Optimization" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fine-grained Thread Scheduling</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  CUEDA utilizes a dynamic load-balancer that intelligently partitions synthesis tasks between the CPU and the GPU, minimizing data transfer overhead.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">Dynamic Balancing</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="finegrainedschedule.png" alt="Fine-grained GPU Scheduling" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Heterogeneous Parallelism Schemes</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Designed to fit into any existing CAD ecosystem, offering a C++/Python shared library interface for seamless integration into custom tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">Python Wrapper</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="heteroparallel.png" alt="Heterogeneous Parallelism" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const DocsView = () => (
    <div className="max-w-[1440px] mx-auto px-6 py-12 flex gap-12 w-full min-h-screen relative">
      <div className="fixed top-20 left-6 z-50 md:hidden">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 bg-white/60 backdrop-blur-lg hover:bg-white/80 text-slate-900 p-3 rounded-xl font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95 group"
        >
          <PanelLeftOpen size={20} style={{ color: CUHK_PURPLE }} />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[70] bg-white w-72 p-8 border-r border-slate-200 
        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform
        md:relative md:translate-x-0 md:bg-transparent md:border-none md:p-0 md:w-64 md:z-auto md:block
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-10 md:hidden">
          <div className="flex items-center gap-2">
            <div style={{ backgroundColor: CUHK_PURPLE }} className="w-8 h-8 rounded-lg flex items-center justify-center text-white">
              <Book size={18} />
            </div>
            <span className="font-black text-xl tracking-tighter">Contents</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-10 md:sticky md:top-28">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">Getting Started</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li style={{ color: CUHK_PURPLE }} className="cursor-pointer flex items-center justify-between group font-bold">Quickstart Guide <ChevronRight size={14} /></li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Installation</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Running CLI</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">Core Concepts</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li style={{ color: CUHK_GOLD }} className="hover:opacity-80 cursor-pointer transition-colors">Logic Balance</li>
              <li style={{ color: CUHK_GOLD }} className="hover:opacity-80 cursor-pointer transition-colors">Logic Rewriting</li>
            </ul>
          </div>
        </div>
      </aside>

      <article className="flex-grow max-w-3xl prose prose-slate">
        <div className="mb-12">
          <div style={{ color: CUHK_PURPLE }} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} /> Documentation
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Quickstart Guide</h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">Deploy GPU-accelerated logic synthesis environment in under 5 minutes.</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-2xl font-mono text-sm mb-12 shadow-2xl border border-slate-800">
          <span className="text-slate-500"># Install the CUEDA core package</span><br/>
          <span style={{ color: CUHK_GOLD }} className="font-bold">pip</span> <span className="text-white">install cueda-eda</span><br/><br/>
          <span className="text-slate-500"># Verify GPU acceleration</span><br/>
          <span className="text-white">cueda --check-gpu</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Standard Workflow</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">CUEDA replaces the synthesis stage in your standard CAD flow.</p>
      </article>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 flex flex-col w-full selection:bg-purple-100">
      <Nav />
      <main className="w-full flex-grow">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'features' && <FeaturesPageView />}
        {currentPage === 'docs' && <DocsView />}
      </main>
      <footer className="w-full bg-white text-slate-400 py-16 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">CU<span style={{ color: CUHK_GOLD }}>EDA</span></span>
          <p className="text-xs font-bold uppercase tracking-[0.3em]">© 2025 CUEDA Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default App;