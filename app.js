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

// Reviews Data
const reviews = [
  {
    rating: 2,
    label: "Bad Vibes",
    text: "pelayanannya ngga ramah blas...",
    author: "Anonymous",
    avatar: "A"
  },
  {
    rating: 2,
    label: "Ghost Town",
    text: "kesini 2x tapi gaada yg jual...",
    author: "Budi S.",
    avatar: "B"
  },
  {
    rating: 4.5,
    label: "Fire",
    text: "Produk nya enak murah mantap lah pokoknya🔥",
    author: "Citra D.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgD5VjoTVJgEcdvCMkrfZWR8Eeip4up3gh46YkhkuqMRg2i7O4QA3di7b5tn0roD8WHnZnSI827UndWw0ERJI_ZCucSAiBzeunDUIjPLY0GaZhJF3m9a6UygsaTYKqoqIPxHM0Y_kOIm2AgA8gDpqE2B4CJfT4U8QMOFwFz2de1yq0JD_QbXk9RdeF4G0xc5-AkL35lzVFmKND0fG9U7kfUcYP1Qj5NEVCnWrBzgum3cEN97e41YtqlLZYWIIe9OH-QQ_Pn2Xnyyo"
  }
];

// About content
const aboutContent = `
  <div class="space-y-12">
    <div class="flex flex-col md:flex-row justify-between items-end border-b-4 border-on-surface pb-4">
      <h2 class="font-headline-lg text-headline-lg uppercase text-on-surface">Tentang Kami</h2>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <div class="inline-block bg-secondary text-on-secondary px-4 py-2 font-label-bold text-label-bold uppercase neubrutalism-border w-max">
          The Origin
        </div>
        <h3 class="font-display-xl text-display-xl text-on-surface uppercase leading-none">
          STREET TEA,<br/>REIMAGINED.
        </h3>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Teh Tarik Bakar (TTB) brings the authentic sensation of "burned" tea to Godean. 
          We aren't just pouring tea; we are crafting an experience. We serve traditional 
          street-side tea with a loud, modern kick, respecting heritage while embracing 
          the energy of today.
        </p>
      </div>
      
      <div class="aspect-square relative neubrutalism-border neubrutalism-shadow bg-surface-container overflow-hidden">
        <img class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn6yex3JbvZOcaI4wGzpHtHYerC5-nzPTAxB6f_MJg7dk0eDFfq5mQW-FYtq9lB9_5PJ6KtuAq7eOZn4fAxdflfNE1xI2iAPo0pwowG1mQrGBTe3acKYMVJNw-i3IJCyshLiI27qG89az6vO8jm8qfM1JU-Fn3cH77kDrDnu85lHJvvCeW3Bh3Cd60JwcupHTBHEraLrVPoMptdgd-9d7Bx14xZI_cXAxKaHDbvGNTT6ilDoVHB1KRI_C7UN2r8zx7w3ogqCgEthY"
             alt="Barista pulling tea over fire">
        <div class="absolute bottom-4 right-4 bg-primary text-on-primary p-4 neubrutalism-border rotate-3 neubrutalism-shadow">
          <span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
        </div>
      </div>
    </div>
  </div>
`;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initDarkMode();
  renderMenu();
  renderReviews();
  renderAbout();
  
  // Smooth scrolling for navigation links
  initSmoothScroll();
});

// Dark Mode Toggle
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      const icon = this.querySelector('span');
      if (document.documentElement.classList.contains('dark')) {
        icon.textContent = 'light_mode';
      } else {
        icon.textContent = 'dark_mode';
      }
    });
  }
}

// Render Menu
function renderMenu() {
  const menuContainer = document.querySelector('#menu .grid');
  menuContainer.innerHTML = menuItems.map(item => `
    <article class="bg-surface neubrutalism-border neubrutalism-shadow flex flex-col hover:-translate-y-2 transition-transform">
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

// Render Reviews
function renderReviews() {
  const reviewsSection = document.querySelector('#reviews');
  const reviewsGrid = document.querySelector('#reviewsGrid');

  // Bersihkan container agar tidak dobel saat render ulang
  if (reviewsGrid) reviewsGrid.innerHTML = '';

  const pendingRaw = localStorage.getItem('ttb_pending_review');
  let pending = null;
  try {
    pending = pendingRaw ? JSON.parse(pendingRaw) : null;
  } catch (e) {
    pending = null;
  }

  if (pending && pending.text) {
    reviews.unshift({
      rating: pending.rating || 0,
      label: pending.category || 'Review',
      text: pending.text,
      author: 'You',
      avatar: 'YOU'
    });
    localStorage.removeItem('ttb_pending_review');
  }

  const allReviews = reviews;
  const reviewsHTML = allReviews.map(review => {

    const stars = Array(5).fill().map((_, i) => {
      if (i < Math.floor(review.rating)) {
        return '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">star</span>';
      } else if (i < review.rating) {
        return '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">star_half</span>';
      } else {
        return '<span class="material-symbols-outlined text-on-surface-variant" style="font-variation-settings: \'FILL\' 0;">star</span>';
      }
    }).join('');

    const avatar = review.avatar.startsWith('http') 
      ? `<img src="${review.avatar}" alt="${review.author}" class="w-10 h-10 border-2 border-on-surface rounded-full">`
      : `<div class="w-10 h-10 bg-on-surface rounded-full flex items-center justify-center text-on-primary font-label-bold text-label-bold">${review.avatar}</div>`;

    return `
      <div class="bg-surface neubrutalism-border p-6 relative">
        <div class="flex justify-between items-start border-b-4 border-on-surface pb-4">
          <div class="flex gap-1 text-error">
            ${stars}
          </div>
          <span class="font-label-bold text-label-bold uppercase bg-error text-on-error neubrutalism-border px-2 py-1">Bad Vibes</span>
        </div>
        <p class="font-body-lg text-body-lg italic">${review.text}</p>
        <div class="mt-auto pt-4 flex items-center gap-3">
          ${avatar}
          <span class="font-label-bold text-label-bold uppercase">${review.author}</span>
        </div>
      </div>
    `;
  }).join('');

  if (reviewsGrid) {
    reviewsGrid.innerHTML = `
      ${reviewsHTML}
    `;
  } else {
    reviewsSection.innerHTML += `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="reviewsGridFallback">
        ${reviewsHTML}
      </div>
    `;
  }
}

// Render About
function renderAbout() {
  document.querySelector('#about').innerHTML = aboutContent;
}

// Smooth scrolling for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for animations
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

// Observe menu items and sections
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.neubrutalism-border').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});