import React, { useState } from 'react';
import { Quote, X, Info } from 'lucide-react';
import { PATIENT_STORIES } from '../data/organizationData';

export default function PatientStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-24 bg-[#FFF9F1] border-b border-[#F5EBDD]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-3">Healing Experiences</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2B211B] mb-4">
            Stories of Care
          </h2>
          <p className="text-lg text-[#6E6259] font-light">
            Voices of gratitude from patients and families served by Chinmaya Chikitsalaya.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {PATIENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-[#F5EBDD] rounded-3xl p-8 hover-card flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <Quote className="w-10 h-10 text-[#C96F32]/20 mb-4" />
                
                <p className="text-base font-serif italic text-[#2B211B] mb-6 leading-relaxed">
                  "{story.quote}"
                </p>

                <p className="text-xs text-[#6E6259] leading-relaxed mb-6 font-normal line-clamp-3">
                  {story.story}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EBDD] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B211B]">{story.name}</h4>
                  <span className="text-[11px] text-[#A95724] font-medium">{story.location}</span>
                </div>

                <button
                  onClick={() => setSelectedStory(story)}
                  className="text-xs font-bold text-[#C96F32] hover:underline"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <div className="text-center text-xs text-[#6E6259]">
          <span className="inline-flex items-center gap-1.5 bg-[#F5EBDD]/60 py-1.5 px-4 rounded-full border border-[#F5EBDD]">
            <Info className="w-3.5 h-3.5 text-[#C96F32]" />
            <span>Demo patient testimonials — replace with verified consent patient stories later.</span>
          </span>
        </div>

      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="modal-content p-8 max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2B211B]">{selectedStory.name}</h3>
                <p className="text-xs text-[#A95724] font-medium">{selectedStory.location} • Age {selectedStory.age}</p>
              </div>
              <button onClick={() => setSelectedStory(null)} className="p-2 rounded-full hover:bg-[#F5EBDD]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7E6D7]/40 border border-[rgba(201,111,50,0.2)] mb-6">
              <Quote className="w-6 h-6 text-[#C96F32] mb-2" />
              <p className="font-serif italic text-base text-[#2B211B]">"{selectedStory.quote}"</p>
            </div>

            <p className="text-sm text-[#6E6259] leading-relaxed mb-6">
              {selectedStory.story}
            </p>

            <div className="text-right border-t border-[#F5EBDD] pt-4">
              <button onClick={() => setSelectedStory(null)} className="btn-primary text-xs py-2 px-5">
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
