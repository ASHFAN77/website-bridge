import React, { useState, useRef } from 'react';
import { supabase } from '../supabaseClient';

export default function Modals({ 
  isContactModalOpen, setContactModalOpen, 
  isAdminPanelOpen, setAdminPanelOpen,
  partners, setPartners
}) {
  const [partnerName, setPartnerName] = useState('');
  const [partnerLogo, setPartnerLogo] = useState('');
  const [logoPreview, setLogoPreview] = useState('');
  const [uploadMode, setUploadMode] = useState('file');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPartnerLogo(reader.result);
      setLogoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddPartner = async (e) => {
    e.preventDefault();
    if (partnerName && partnerLogo) {
      const newPartner = { name: partnerName, logo: partnerLogo };
      
      // Optistic UI update
      const newPartnersList = [...partners, newPartner];
      setPartners(newPartnersList);
      localStorage.setItem('websiteBridgePartners', JSON.stringify(newPartnersList));
      
      try {
        await supabase.from('partners').insert([newPartner]);
      } catch (err) {
        console.error('Error inserting into Supabase:', err);
      }

      setPartnerName('');
      setPartnerLogo('');
      setLogoPreview('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDeletePartner = async (index, partnerName) => {
    // Optimistic UI update
    const newPartnersList = partners.filter((_, i) => i !== index);
    setPartners(newPartnersList);
    localStorage.setItem('websiteBridgePartners', JSON.stringify(newPartnersList));

    try {
      await supabase.from('partners').delete().eq('name', partnerName);
    } catch (err) {
      console.error('Error deleting from Supabase:', err);
    }
  };

  return (
    <>
      {/* ── Contact Modal ─────────────────────────────────────────── */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md px-4">
          <div className="bg-surface-container border border-white/10 p-8 rounded-2xl w-full max-w-md relative">
            <button onClick={() => setContactModalOpen(false)} className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-xl text-2xl mb-2">Let's Build Together</h3>
            <p className="font-body-md text-secondary-fixed-dim mb-6">Our bridge is always open for ambitious projects. Reach out to us:</p>

            <div className="space-y-4">
              <a className="flex items-center gap-4 p-4 bg-surface-container-high border border-white/10 rounded-lg hover:border-primary group transition-all" href="mailto:websitebridge@outlook.com">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary">mail</span>
                <span className="font-body-md text-primary">websitebridge@outlook.com</span>
              </a>
              <a className="flex items-center gap-4 p-4 bg-surface-container-high border border-white/10 rounded-lg hover:border-primary group transition-all" href="tel:+919363157158">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary">call</span>
                <span className="font-body-md text-primary">+91 9363157158</span>
              </a>
              <a className="flex items-center gap-4 p-4 bg-surface-container-high border border-white/10 rounded-lg hover:border-primary group transition-all" href="https://wa.me/919363157158" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 fill-secondary group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="font-body-md text-primary">WhatsApp</span>
              </a>
              <a className="flex items-center gap-4 p-4 bg-surface-container-high border border-white/10 rounded-lg hover:border-primary group transition-all" href="https://instagram.com/websitebridge" target="_blank" rel="noreferrer">
                <svg className="w-6 h-6 fill-secondary group-hover:fill-primary transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="font-body-md text-primary">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Admin Panel ────────────────────────────────────────────── */}
      {isAdminPanelOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl px-4">
          <div className="bg-surface-container border border-primary/30 p-8 rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button onClick={() => setAdminPanelOpen(false)} className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">admin_panel_settings</span>
              <h3 className="font-headline-xl text-2xl text-primary">Admin Control Panel</h3>
            </div>

            {/* Add Partner Form */}
            <form onSubmit={handleAddPartner} className="space-y-4 mb-8 bg-surface-container-lowest p-6 rounded-xl border border-white/5">
              <h4 className="font-label-sm uppercase tracking-widest text-primary mb-4 border-b border-white/10 pb-2">Add New Client / Partner</h4>

              {/* Name */}
              <div>
                <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-1 block">Client Name</label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 font-body-md text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g. Acme Corp"
                  required
                />
              </div>

              {/* Logo Upload / URL Toggle */}
              <div>
                <label className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">Logo</label>
                <div className="flex rounded-lg overflow-hidden border border-white/10 mb-3">
                  <button type="button"
                    onClick={() => { setUploadMode('file'); setPartnerLogo(''); setLogoPreview(''); }}
                    className={`flex-1 py-2 text-xs font-label-sm uppercase tracking-widest transition-colors ${uploadMode === 'file' ? 'bg-primary text-background' : 'bg-surface-container-high text-secondary-fixed-dim hover:text-primary'}`}>
                    📁 Upload from PC
                  </button>
                  <button type="button"
                    onClick={() => { setUploadMode('url'); setPartnerLogo(''); setLogoPreview(''); }}
                    className={`flex-1 py-2 text-xs font-label-sm uppercase tracking-widest transition-colors ${uploadMode === 'url' ? 'bg-primary text-background' : 'bg-surface-container-high text-secondary-fixed-dim hover:text-primary'}`}>
                    🔗 Paste URL
                  </button>
                </div>

                {uploadMode === 'file' ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-white/20 rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/60 transition-colors group"
                  >
                    {logoPreview ? (
                      <img src={logoPreview} alt="preview" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} className="rounded mb-1" />
                    ) : (
                      <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-primary">upload_file</span>
                    )}
                    <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed-dim">
                      {logoPreview ? 'Click to change' : 'Click to browse files'}
                    </span>
                    <span className="font-body-md text-xs text-on-surface-variant">PNG, JPG, SVG, WEBP supported</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <input
                    type="url"
                    value={partnerLogo}
                    onChange={(e) => { setPartnerLogo(e.target.value); setLogoPreview(e.target.value); }}
                    className="w-full bg-surface-container-high border border-white/10 rounded-lg px-4 py-3 font-body-md text-primary focus:outline-none focus:border-primary transition-colors"
                    placeholder="https://example.com/logo.png"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={!partnerName || !partnerLogo}
                className="w-full py-4 bg-primary text-background font-label-sm uppercase tracking-widest rounded-lg hover:bg-secondary transition-colors mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add Partner
              </button>
            </form>

            {/* Manage Partners List */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-white/5">
              <h4 className="font-label-sm uppercase tracking-widest text-error mb-4 border-b border-white/10 pb-2">
                Manage Partners ({partners.length})
              </h4>
              <div className="max-h-48 overflow-y-auto custom-scrollbar pr-2 space-y-2">
                {partners.length === 0 ? (
                  <p className="text-secondary-fixed-dim font-body-md text-sm">No partners added yet.</p>
                ) : (
                  partners.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-surface-container-high p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        {p.logo && (
                          <img src={p.logo} alt="logo" style={{ height: '24px', width: 'auto', maxWidth: '48px', objectFit: 'contain' }} />
                        )}
                        <span className="font-body-md text-sm">{p.name}</span>
                      </div>
                      <button onClick={() => handleDeletePartner(idx, p.name)} className="text-error hover:text-red-400 p-1 rounded hover:bg-red-500/10 transition-colors" title="Delete Partner">
                        <span className="material-symbols-outlined text-lg block">delete</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
