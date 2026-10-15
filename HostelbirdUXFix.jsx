import React, { useState } from 'react';

/**
 * Hostelbird Vibe & Live Signal Interactive Component
 * Submission for Build & Break Hackathon
 */
export default function HostelbirdUXFix() {
  const [selectedVibe, setSelectedVibe] = useState('Workation');

  // Mock database representing hostel inventory with dynamic vibe tags and opt-in aggregated signals
  const allHostels = [
    { 
      id: 1, 
      name: "goSTOPS Rishikesh Laxman Jhula", 
      price: 555, 
      rating: 9.2, 
      vibe: "Workation", 
      activeCrew: 4,
      privacyNote: "Signals are aggregated & anonymized from opt-in confirmed bookings." 
    },
    { 
      id: 2, 
      name: "The Hosteller Rishikesh", 
      price: 699, 
      rating: 8.2, 
      vibe: "Party & Social", 
      activeCrew: 2,
      privacyNote: "Signals are aggregated & anonymized from opt-in confirmed bookings." 
    },
    { 
      id: 3, 
      name: "Zostel Rishikesh Ghat", 
      price: 649, 
      rating: 9.0, 
      vibe: "Yoga & Chill", 
      activeCrew: 5,
      privacyNote: "Signals are aggregated & anonymized from opt-in confirmed bookings." 
    },
    { 
      id: 4, 
      name: "goSTOPS Goa Vagator", 
      price: 799, 
      rating: 8.8, 
      vibe: "Party & Social", 
      activeCrew: 8,
      privacyNote: "Signals are aggregated & anonymized from opt-in confirmed bookings." 
    }
  ];

  // Interactive filtering logic: dynamically filters list based on user-selected vibe chip
  const filteredHostels = allHostels.filter((h) => h.vibe === selectedVibe);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '16px', background: '#f8fafc', borderRadius: '16px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ color: '#e11d48', fontSize: '20px', marginBottom: '4px' }}>Where to, Solo Traveler?</h2>
      <p style={{ color: '#64748b', fontSize: '13px', marginTop: 0 }}>Filter by vibe & see who's already there.</p>
      
      {/* Interactive Vibe Filter Chips */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
        {['Workation', 'Party & Social', 'Yoga & Chill'].map((vibe) => (
          <button 
            key={vibe}
            onClick={() => setSelectedVibe(vibe)}
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              border: 'none',
              background: selectedVibe === vibe ? '#e11d48' : '#e2e8f0',
              color: selectedVibe === vibe ? '#fff' : '#334155',
              fontWeight: '600',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}>
            {vibe}
          </button>
        ))}
      </div>

      {/* Render Filtered Hostels with Live Signals or Cold-Start Fallback */}
      {filteredHostels.length > 0 ? (
        filteredHostels.map((h) => (
          <div key={h.id} style={{ background: '#fff', borderRadius: '12px', padding: '14px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '15px', color: '#0f172a' }}>{h.name}</h3>
              <span style={{ background: '#fef08a', padding: '2px 6px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>★ {h.rating}</span>
            </div>
            <p style={{ color: '#475569', fontSize: '13px', margin: '6px 0' }}>Dorms from <b>₹{h.price}</b>/night</p>
            
            {/* Live Aggregated Signal Banner */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '8px', borderRadius: '8px', fontSize: '12px', color: '#166534', marginTop: '8px' }}>
              🎒 <b>{h.activeCrew} Solo Travelers</b> staying here for your dates.
              <div style={{ fontSize: '10px', color: '#15803d', marginTop: '2px', opacity: 0.85 }}>{h.privacyNote}</div>
            </div>
            
            <button style={{ marginTop: '10px', width: '100%', padding: '10px', background: '#e11d48', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
              Book & Connect with Crew
            </button>
          </div>
        ))
      ) : (
        /* Cold-Start Fallback State */
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#334155', margin: '0 0 6px 0' }}>No active signals for this vibe yet.</p>
          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 12px 0' }}>Pre-register your travel dates or drop a signal to let others know you're heading here!</p>
          <button style={{ padding: '8px 16px', background: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
            + Pre-register Dates & Notify Peers
          </button>
        </div>
      )}
    </div>
  );
}
