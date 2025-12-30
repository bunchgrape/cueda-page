import React, { useState } from 'react';
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
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black tracking-tighter flex items-center">
              CU<span className="text-yellow-400">EDA</span>
            </span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <button onClick={() => setActiveTab('overview')} className={`hover:text-white transition ${activeTab === 'overview' ? 'text-yellow-400' : ''}`}>Technology</button>
              <button onClick={() => setActiveTab('docs')} className={`hover:text-white transition ${activeTab === 'docs' ? 'text-yellow-400' : ''}`}>Documentation</button>
              <a href="#" className="hover:text-white transition">Benchmarks</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://marketplace.visualstudio.com/items?itemName=CUEDA.CUEDA-extension" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 text-xs bg-slate-800 hover:bg-slate-700 py-1.5 px-3 rounded-full border border-slate-700 transition">
              <Download size={14} className="text-yellow-400" /> Install Extension
            </a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-bold transition shadow-lg shadow-blue-500/20">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
              <Zap size={14} fill="currentColor" /> GPU-Accelerated Logic Synthesis
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Accelerate Signoff with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Massive Parallelism</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              CUEDA delivers the industry's fastest RTL-to-GDSII turnaround time by offloading synthesis operators to the GPU, matching Genus/DC Quality of Results (QoR) at 10x speeds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-8 py-4 rounded-md font-black text-lg flex items-center gap-2 transition transform active:scale-95 shadow-xl shadow-yellow-400/10">
                Get Started <ChevronRight size={20} />
              </button>
              <a href="https://marketplace.visualstudio.com/items?itemName=CUEDA.CUEDA-extension" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition border border-slate-700">
                View on Marketplace
              </a>
            </div>
          </div>
          
          {/* Hero Visual Block */}
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 shadow-2xl backdrop-blur-md">
            <div className="bg-slate-950 rounded-lg p-6 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="flex gap-2 mb-4 border-b border-slate-800 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-500 ml-2 text-xs">cueda_shell — synthesis.v</span>
              </div>
              <p className="text-slate-400">cueda&gt; read_hdl -v2k design.v</p>
              <p className="text-slate-400">cueda&gt; elaborate</p>
              <p className="text-yellow-400 font-bold">cueda&gt; compile_gpu -effort high -area 1.0</p>
              <p className="text-blue-400">[INFO] Dispatching 2.4M nodes to GPU...</p>
              <p className="text-green-400">[SUCCESS] Synthesis complete. TNS: -0.01ns</p>
              <p className="text-slate-400 italic">cueda&gt; write_netlist result.v</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Runtime Speedup</div>
                <div className="text-2xl font-black text-blue-400">12.4x</div>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">QoR Variance</div>
                <div className="text-2xl font-black text-green-400">&lt; 0.5%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Integration Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Ecosystem Integration</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            CUEDA isn't just a tool; it's a foundation. Our API and extension fit your existing workflow seamlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-2xl font-black tracking-tighter text-white">
            CU<span className="text-yellow-400">EDA</span>
          </span>
          <p className="text-sm">© 2025 CUEDA Laboratory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white"><Github size={20}/></a>
            <a href="#" className="hover:text-white"><ExternalLink size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;