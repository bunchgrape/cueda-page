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
  ArrowRight
} from 'lucide-react';

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
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-black tracking-tighter flex items-center text-slate-900 cursor-pointer outline-none hover:opacity-80 transition">
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
            <h1 className="text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Accelerate Circuit Design with <span className="text-blue-600">GPU-Acceleration</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              CUEDA delivers the industry's fastest VLSI logic synthesis turnaround time by offloading operators to the GPU, matching industry Quality of Results (QoR) at 20x speeds.
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
                <span className="text-slate-400 ml-2 text-xs">cueda_shell</span>
              </div>
              <p className="text-slate-400">cueda&gt; read_hdl -v2k design.v</p>
              <p className="text-slate-400">cueda&gt; elaborate</p>
              <p className="text-slate-600 font-bold">cueda&gt; syn -effort high</p>
              <p className="text-blue-400">[INFO] Dispatching 2.4M nodes to GPU...</p>
              <p className="text-green-400">[SUCCESS] Synthesis complete, Overall Runtime: 10.00s</p>
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

      <section className="w-full pt-24 pb-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 mb-24">
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl relative overflow-hidden cursor-pointer" onClick={() => setCurrentPage('docs')}>
              <div className="bg-blue-50 p-4 rounded-2xl w-fit mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <MousePointer2 size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Instant Feedback</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Real-time QoR evaluation directly in your editor as you code RTL, minimizing design iterations.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-3 transition-all">
                Marketplace <ChevronRight size={18} />
              </span>
            </div>

            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl cursor-pointer" onClick={() => setCurrentPage('technology')}>
              <div className="bg-blue-50 p-4 rounded-2xl w-fit mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">GPU-Native Kernels</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Optimized for NVIDIA CUDA, handling massive logic restructuring with thousands of cores.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-3 transition-all">
                Technical Detail <ChevronRight size={18} />
              </span>
            </div>

            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl cursor-default">
              <div className="bg-blue-50 p-4 rounded-2xl w-fit mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Layers size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Modular API</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Available as a C++/Python Shared Library for custom placement or routing tool integration.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-3 transition-all">
                API Docs <ChevronRight size={18} />
              </span>
            </div>
          </div>

          <div className="w-full bg-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-xl border border-slate-200">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Trophy size={200} className="text-slate-900" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-8">
                <Award size={14} /> Academic & Industrial Excellence
              </div>
              
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Awards</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Medal size={16} /> Awards
                  </h4>
                  <ul className="space-y-6 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, ICCAD, 2025.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award</span>, ASP-DAC, 2024.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, DAC, 2023.</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-emerald-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
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
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
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

  const TechView = () => (
    <div className="w-full bg-white">
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black tracking-widest uppercase mb-4">
              <Microscope size={14} /> Technical Innovation
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Our Foundational <span className="text-blue-600">Research</span>
            </h1>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg">
            CUEDA is built upon peer-reviewed breakthroughs in parallel CAD algorithms and heterogeneous computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div className="group">
              <div className="flex gap-6 mb-6">
                <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Network size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Massive Parallel AIG Optimization</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Utilizing a novel GPGPU-based logic rewriting engine that executes millions of local transformations in parallel without compromising sequential logic depth.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pl-22">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 italic">
                  <FileCode size={14} /> Ref: ASP-DAC 2024
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 italic">
                  <FileCode size={14} /> Ref: DAC 2023
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex gap-6 mb-6">
                <div className="shrink-0 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Binary size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Heterogeneous Task Scheduling</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Advanced dynamic load balancing between CPU and GPU clusters to minimize PCIe bottlenecking during high-effort synthesis runs.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pl-22">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 italic">
                  <FileCode size={14} /> Ref: ICCAD 2025
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ExternalLink size={18} className="text-blue-600" /> Academic Publications
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Explore the full library of technical papers covering GPU acceleration for Boolean Satisfiability, logic rewriting, and timing analysis.
              </p>
              <a 
                href="https://tefantasy.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg"
              >
                View Repository <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100 to-transparent rounded-[3rem] -z-10 blur-3xl opacity-40"></div>
              <div className="bg-white border border-slate-200 shadow-2xl rounded-[2.5rem] p-8 md:p-12">
                <h4 className="text-slate-900 font-black mb-10 text-xl uppercase tracking-wider">Benchmark Metrics</h4>
                <div className="space-y-10">
                  {[
                    { label: 'Logic Rewriting (AIG)', cpu: 100, gpu: 8.5, unit: 'ms/pass' },
                    { label: 'Boolean Matching', cpu: 100, gpu: 4.2, unit: 'ms/pass' },
                    { label: 'Network Balancing', cpu: 100, gpu: 12.0, unit: 'ms/pass' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-4">
                        <span className="text-slate-900 text-base">{item.label}</span>
                        <span className="text-blue-600 text-base">~{(item.cpu / item.gpu).toFixed(1)}x Speedup</span>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200/50">
                        <div className="h-full bg-slate-300 w-[75%]"></div>
                        <div className="h-full bg-blue-600 w-[10%]"></div>
                      </div>
                      <div className="flex gap-6 mt-3 text-[10px] uppercase font-black tracking-[0.15em] text-slate-400">
                        <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-slate-300 rounded-sm"></div> Legacy CPU Cluster</span>
                        <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></div> CUEDA GPU Kernel</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <p className="text-sm text-slate-500 italic">
                    * Benchmarked on NVIDIA H100 vs. Dual 64-core AMD EPYC workstation using 10M+ node industrial designs.
                  </p>
                </div>
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
          <PanelLeftOpen size={20} className="text-blue-600" />
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
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
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
              <li className="text-blue-600 cursor-pointer flex items-center justify-between group">Quickstart Guide <ChevronRight size={14} /></li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Installation</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Running CLI</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">Core Concepts</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Logic Balance</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Logic Rewriting</li>
            </ul>
          </div>
        </div>
      </aside>

      <article className="flex-grow max-w-3xl prose prose-slate">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} /> Documentation
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Quickstart Guide</h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">Deploy GPU-accelerated logic synthesis environment in under 5 minutes.</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-2xl text-blue-400 font-mono text-sm mb-12 shadow-2xl border border-slate-800">
          <span className="text-slate-500"># Install the CUEDA core package</span><br/>
          <span className="text-emerald-400 font-bold">pip</span> install cueda-eda<br/><br/>
          <span className="text-slate-500"># Verify GPU acceleration</span><br/>
          cueda --check-gpu
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Standard Workflow</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">CUEDA replaces the synthesis stage in your standard CAD flow.</p>
      </article>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 flex flex-col w-full selection:bg-blue-200">
      <Nav />
      <main className="w-full flex-grow">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'technology' && <TechView />}
        {currentPage === 'docs' && <DocsView />}
      </main>
      <footer className="w-full bg-white text-slate-400 py-16 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xl font-black tracking-tighter text-slate-900">CU<span className="text-blue-600">EDA</span></span>
          <p className="text-xs font-bold uppercase tracking-[0.3em]">© 2025 CUEDA Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default App;