// Menu Data
const menuItems = [
  {
    name: "Teh Tarik",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKVOktDt9g5Dj0lw6un-lWQcIt8pR8JvDok_LU7_ScJTN1BBeKzsSeQo7JHrxgv0MejnNpmd98cWxejc8uTep2JwCYLXb1hkPhjXKjh7oud_nCf5B3KuJi4N_0KLwGOA-o0QmbKAoZTqgjpb6JJ17W006qJXGbpS0mCFkGeDcnafvjNGrse8UNzZD2zWw8xV4fk3xfjhjnhkRuE0XY3rJ6wuikhCcv_yDq2z_9q09XMqhpoSr9MWrX0MsuqM1X7hZXApK03F1aMvc",
    bgColor: "bg-primary-fixed",
    prices: { R: "8.000", L: "10.000" }
  },
  {
    name: "Greentea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6A3cts8qFw3WHr7ebOt8PQ7xztBPqT9UHYpVs3NaAUIirTO-iZOLFHu30kMH6W7k_TEck_7OZ-BPqfRoUBOZBg5fuJmGTykj12_Vl0H6VmXsfy8GkHL-Ck2Vj0S9sVDHJkwHUnLvbLu5lmc6cxSfGvwdjqdPB_JG-RRiohK2XVvMpc5IgOyBhEGkwhhk56xOtkAi81Dn5SjHdojGmP-xybKwEspUDgQM3WPGkOdRAvSWbxvBgsp4wwTcID4X0u8cEIBsw_qq-y3g",
    bgColor: "bg-surface-variant",
    prices: { R: "8.000", L: "10.000" }
  },
  {
    name: "Thaitea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbuwc2GPNfC7mqJ4O54Yq6obC9Wak9z2FfTl5wCRwF8OJcAaOKNg_uUtuk9itmTtKk8MrV-cGHsC4o9rbxxfH4EU1GcYgYyECMqK-YvZKJe7mv1SwNIaiBQKFNGdMu55zYtnMqoTjAM9e4HJGOlSC553sH7SMZtotprF58Ddw7bqiTjYARENqYDi36nZ9SwqIqgLSA_HKUpmcMcIm52U-6_NSEhGO9eUFBYK_4fcqgJfLEy2m0dOMQw9RMEJfqqCpXVQ3ToFbB4ZU",
    bgColor: "bg-tertiary-fixed",
    prices: { R: "8.000", L: "10.000" }
  },
  {
    name: "Lemon Tea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnIjMMNLxjU2CGgCiOK8gDAYE85xn_86ZfoWwEJ67FZ3JdNipZcH38PJeq0FUl7HPSuV2q64oVZvwvynACxg05pkl27tY19AtKYHUUE-CZ4fSYT_4BbxsowYfQF_tUoJM-x9nxqHpfuacCJXzeM4VRUHdF1lLxsYrP2X_nQFKYUV-xURHNCV-RYrYqdcJ2s70rzKpgmj57R_NKC-lkedyQ-kKelqARoRkAkVcQBBd3MGepz42ZBg88yW_mR9nI6IdXGcmSC-Cm8lM",
    bgColor: "bg-secondary-fixed-dim",
    prices: { R: "4.000", L: "6.000" }
  },
  {
    name: "Blackcurrant Tea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI-eu-GKTsyc9SWarlkhPoSVWHA4H4xBVJXnYkwn0vBB9lTW6Fuai7SlT_ErM4y1t0gFTQ7ksBlZY6N8nwmtE__ThEyDv3WFJyOD0WjnUVUgORz-A0wo6ioin7tv0iGYYt-Si9_IYO16NbRVUm_EqYzgcRIyjHD_Ou91eCffV7254TYqqhJjhJeB3NoZ2Gm4FbflwK2RQitqoUHto7ZPEAPbrcfCS4ZRQbsHC7orKPpnz-blqfgiZ3JJu1cZcbkAO7aaEK29y-okE",
    bgColor: "bg-surface-container-highest",
    prices: { R: "4.000", L: "6.000" }
  },
  {
    name: "Jasmine Tea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD594DR73Mm6zz3tms2Y0dSVFz5B0ZKJgsbgMpRHWlaFcVaPHfQdWU8qtwBkmbD5B10YQUghuyiLw1dm-i6Q5HExmrmdZwWrBOHPXewOTmBjDzBQR034BqEPguMt10CkpFpXdGxoQjlX3VC8AmwOQLtCnRCDP4KDDW2MsvqZFX-6B4A-z5UBW2rkcfXZAkzltnjjmmftjrHz2AOqvnCW-POj9kxtbW2G5XV31mVLXe2ixLKIaYV8hrfZowp1_bu-GcagdhtUaaQdfI",
    bgColor: "bg-tertiary-fixed-dim",
    prices: { R: "3.000", L: "4.000" }
  },
  {
    name: "Lychee Tea",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWzw7gZIin8d2kGjszDMpspjihcWH-iL03KHCM3F4BO_Rs0liNcoYZ9bgLSmz1Ib6MptOT3ubJ7KjmjAiCbwHz8DSuhMe82a4-ZvD9jwbdc7gy14HOXL55-K9pu23mB7KgUl1uzxo2u_D-1icB73S9TUpCuKNfm8c1vbqummQMf9gRdcB6r4hE6vShdt-47AuI_s9Ow1Iqd_4XfBSq5C4ctpH_FUjNwhZKpD06YNZj-QmpjgiqW5LVkpSG7VPWsJ6i1wYaUXwIZqo",
    bgColor: "bg-error-container",
    prices: { R: "2.500", L: "4.000" }
  },
  {
    name: "Milo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7adpEFAHF-HBvtN-hY3XzUiakWVLZnPw87mpEeW3y7OsFoFZy-b6us2ccAirboISpb0cnb4Z7stLJCWLIaZp9n4gRNI1m6zktyMRrLwce2mbI4h2DjcK6PcTp3i7rRB56287gVUnjTJBbghOP09xVhlx_WIQn7lKuIhNx_82JtBBQLSdF360FTEvoB5bCz8kyuNFXQVqUgOUGgyhOpbkWcOZaQUQQTNO1aOc0k--wBmxqL357AZhK8gcURlZ0bCbb_b45oBKmoY0",
    bgColor: "bg-outline",
    prices: { R: "7.000", L: "-" }
  }
];

// Base reviews (static seed data)
const baseReviews = [
  {
    rating: 1,
    label: "Bad Vibes",
    text: "pelayanannya ngga ramah blas...",
    author: "Anonymous",
    avatar: "A"
  },
  {
    rating: 1.5,
    label: "Bad Vibes",
    text: "kesini 2x tapi gaada yg jual...",
    author: "Budi S.",
    avatar: "B"
  },
  {
    rating: 4.5,
    label: "Good Vibes",
    text: "Produk nya enak murah mantap lah pokoknya🔥",
    author: "Citra D.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgD5VjoTVJgEcdvCMkrfZWR8Eeip4up3gh46YkhkuqMRg2i7O4QA3di7b5tn0roD8WHnZnSI827UndWw0ERJI_ZCucSAiBzeunDUIjPLY0GaZhJF3m9a6UygsaTYKqoqIPxHM0Y_kOIm2AgA8gDpqE2B4CJfT4U8QMOFwFz2de1yq0JD_QbXk9RdeF4G0xc5-AkL35lzVFmKND0fG9U7kfUcYP1Qj5NEVCnWrBzgum3cEN97e41YtqlLZYWIIe9OH-QQ_Pn2Xnyyo"
  }
];

// Get label based on rating
function getVibeLabel(rating) {
  if (rating >= 4) return "Good Vibes";
  if (rating <= 2) return "Bad Vibes";
  return "Normal Vibes";
}

// Get label color classes based on vibe
function getVibeLabelClasses(label) {
  if (label === "Good Vibes") return "bg-tertiary-fixed-dim text-on-background";
  if (label === "Bad Vibes") return "bg-error text-on-error";
  return "bg-outline text-surface";
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initDarkMode();
  renderMenu();
  renderReviews();
  renderRatingSummary();
  initActionButtons();
  initSmoothScroll();
});

// Dark Mode Toggle
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  
  // Apply saved preference on load
  const savedDarkMode = localStorage.getItem('ttb_darkMode');
  if (savedDarkMode === 'true') {
    document.documentElement.classList.add('dark');
    const icon = toggle ? toggle.querySelector('span') : null;
    if (icon) icon.textContent = 'light_mode';
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      const isDark = document.documentElement.classList.toggle('dark');
      const icon = this.querySelector('span');
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
      localStorage.setItem('ttb_darkMode', isDark);
    });
  }
}

// Render Menu — cards are grayscale by default, color on hover (CSS handles it)
function renderMenu() {
  const menuContainer = document.querySelector('#menu .grid');
  if (!menuContainer) return;
  menuContainer.innerHTML = menuItems.map(item => `
    <article class="menu-card bg-surface neubrutalism-border neubrutalism-shadow flex flex-col">
      <div class="h-full ${item.bgColor} border-b-4 border-on-surface p-4 relative overflow-hidden flex justify-center items-center">
        <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}">
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <h3 class="font-headline-md text-headline-md uppercase">${item.name}</h3>
        <div class="space-y-2 font-label-bold text-label-bold">
          <div class="flex justify-between border-b-4 border-on-surface-variant border-dotted pb-1">
            <span>R (Reguler)</span>
            <span>${item.prices.R}</span>
          </div>
          <div class="flex justify-between ${item.prices.L === '-' ? 'opacity-50' : ''}">
            <span>L (Large)</span>
            <span>${item.prices.L}</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Reviews — reads from localStorage for persisted user reviews + base reviews
function renderReviews() {
  const reviewsGrid = document.querySelector('#reviewsGrid');
  if (!reviewsGrid) return;

  // Load persisted user reviews from localStorage
  let userReviews = [];
  try {
    const stored = localStorage.getItem('ttb_all_reviews');
    userReviews = stored ? JSON.parse(stored) : [];
  } catch (e) {
    userReviews = [];
  }

  // Check for a newly submitted pending review from ulasan.html
  try {
    const pendingRaw = localStorage.getItem('ttb_pending_review');
    if (pendingRaw) {
      const pending = JSON.parse(pendingRaw);
      if (pending && pending.text) {
        const label = getVibeLabel(pending.rating || 0);
        userReviews.unshift({
          rating: pending.rating || 0,
          label: label,
          text: pending.text,
          author: pending.author || 'Anonymous',
          avatar: (pending.author || 'Anonymous').charAt(0).toUpperCase()
        });
        // Save accumulated user reviews back
        localStorage.setItem('ttb_all_reviews', JSON.stringify(userReviews));
        localStorage.removeItem('ttb_pending_review');
        // Update rating badge now that a new review was added
        renderRatingSummary();
      }
    }
  } catch (e) {
    // ignore
  }

  // Combine: user reviews first, then base
  const allReviews = [...userReviews, ...baseReviews];

  reviewsGrid.innerHTML = allReviews.map(review => {
    const label = review.label || getVibeLabel(review.rating);
    const labelClasses = getVibeLabelClasses(label);

    const stars = Array(5).fill(null).map((_, i) => {
      if (i < Math.floor(review.rating)) {
        return '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">star</span>';
      } else if (i < review.rating) {
        return '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">star_half</span>';
      } else {
        return '<span class="material-symbols-outlined text-on-surface-variant" style="font-variation-settings: \'FILL\' 0;">star</span>';
      }
    }).join('');

    const avatar = typeof review.avatar === 'string' && review.avatar.startsWith('http')
      ? `<img src="${review.avatar}" alt="${review.author}" class="w-10 h-10 border-2 border-on-surface rounded-full object-cover">`
      : `<div class="w-10 h-10 bg-on-surface rounded-full flex items-center justify-center text-on-primary font-label-bold text-label-bold">${review.avatar || '?'}</div>`;

    return `
      <div class="bg-surface neubrutalism-border p-6 relative flex flex-col gap-4">
        <div class="flex justify-between items-start border-b-4 border-on-surface pb-4">
          <div class="flex gap-1 text-error">
            ${stars}
          </div>
          <span class="font-label-bold text-label-bold uppercase ${labelClasses} neubrutalism-border px-2 py-1">${label}</span>
        </div>
        <p class="font-body-lg text-body-lg italic flex-1">"${review.text}"</p>
        <div class="mt-auto pt-2 flex items-center gap-3">
          ${avatar}
          <span class="font-label-bold text-label-bold uppercase">${review.author}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Render Rating Summary — calculates average from all reviews (base + user)
function renderRatingSummary() {
  const el = document.getElementById('ratingSummary');
  if (!el) return;

  // Load user reviews from localStorage
  let userReviews = [];
  try {
    const stored = localStorage.getItem('ttb_all_reviews');
    userReviews = stored ? JSON.parse(stored) : [];
  } catch (e) {
    userReviews = [];
  }

  const allReviews = [...userReviews, ...baseReviews];
  const count = allReviews.length;

  if (count === 0) {
    el.textContent = 'Belum ada ulasan';
    return;
  }

  const total = allReviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0);
  const avg = (total / count).toFixed(1);

  el.textContent = `${avg} / 5.0 Rating (${count} Reviews)`;
}


function initActionButtons() {
  // Rute → open Google Maps
  const btnRute = document.getElementById('btnRute');
  if (btnRute) {
    btnRute.addEventListener('click', function() {
      window.open('https://maps.app.goo.gl/xvGnFeNnDa6CdtbP8', '_blank');
    });
  }

  // Simpan → bookmark toggle (visual feedback)
  const btnSimpan = document.getElementById('btnSimpan');
  if (btnSimpan) {
    const simpanIcon = document.getElementById('simpanIcon');
    const isSaved = localStorage.getItem('ttb_saved') === 'true';
    if (isSaved && simpanIcon) {
      simpanIcon.textContent = 'bookmark_added';
      btnSimpan.classList.add('bg-tertiary-fixed-dim');
    }
    btnSimpan.addEventListener('click', function() {
      const saved = localStorage.getItem('ttb_saved') === 'true';
      if (!saved) {
        localStorage.setItem('ttb_saved', 'true');
        if (simpanIcon) simpanIcon.textContent = 'bookmark_added';
        btnSimpan.classList.add('bg-tertiary-fixed-dim');
        showToast('Tersimpan! ✅');
      } else {
        localStorage.setItem('ttb_saved', 'false');
        if (simpanIcon) simpanIcon.textContent = 'bookmark';
        btnSimpan.classList.remove('bg-tertiary-fixed-dim');
        showToast('Dihapus dari simpanan');
      }
    });
  }

  // Bagikan → Web Share API or fallback copy link
  const btnBagikan = document.getElementById('btnBagikan');
  if (btnBagikan) {
    btnBagikan.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: 'Teh Tarik Bakar - Godean',
          text: 'Coba teh otentik dengan sensasi bakar di TTB Godean! Tarik. Bakar. Nikmat.',
          url: window.location.href
        }).catch(() => {});
      } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('Link disalin ke clipboard! 📋');
        }).catch(() => {
          showToast('Bagikan: ' + window.location.href);
        });
      }
    });
  }
}

// Simple toast notification
function showToast(message) {
  const existing = document.getElementById('ttb-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'ttb-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #1c1b1b;
    color: #fcf9f8;
    padding: 12px 24px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 14px;
    border: 4px solid #fcf9f8;
    z-index: 9999;
    white-space: nowrap;
    box-shadow: 4px 4px 0px 0px #fcf9f8;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Smooth scrolling for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.neubrutalism-border').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});