import React from 'react';
import { FileText, Download, ShieldCheck, Info } from 'lucide-react';
import { TRANSPARENCY_DOCS } from '../data/organizationData';

export default function TransparencySection({ showToast }) {
  const handleDownload = (docTitle) => {
    showToast(`Downloading demo document: "${docTitle}"`, 'info');
  };

  return (
    <section className="py-24 bg-[#F5EBDD]/30 border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Institutional Trust</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Transparency & Accountability
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            We uphold open governance, compliance, and ethical stewardship across all clinical and community activities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TRANSPARENCY_DOCS.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#F5EBDD] p-6 rounded-3xl hover-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF9F1] text-[#C96F32] border border-[#F5EBDD] flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A95724] px-2.5 py-0.5 rounded-full bg-[#F5EBDD] mb-2 inline-block">
                  {doc.size}
                </span>

                <h3 className="font-serif font-bold text-base text-[#2B211B] mb-2">{doc.title}</h3>
                <p className="text-xs text-[#6E6259] leading-relaxed mb-6">{doc.desc}</p>
              </div>

              <button
                onClick={() => handleDownload(doc.title)}
                className="btn-secondary text-xs py-2.5 px-4 w-full justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#C96F32]" />
                <span>View / Download</span>
              </button>
            </div>
          ))}
        </div>

        {/* Demo Label */}
        <div className="text-center text-xs text-[#6E6259]">
          <span className="inline-flex items-center gap-1.5 bg-white py-2 px-5 rounded-full border border-[#F5EBDD]">
            <Info className="w-4 h-4 text-[#C96F32]" />
            <span>Demo governance placeholders — replace with verified institutional PDFs.</span>
          </span>
        </div>

      </div>
    </section>
  );
}
