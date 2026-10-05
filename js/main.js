/**
 * GOOGLE AI WORKSHOP — INTERACTIVE ENGINE
 * =======================================
 * Handles calendar integration, WhatsApp invitation sharing,
 * modal states, smooth navigation, and dynamic config rendering.
 */

import { WORKSHOP_CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initDOMContent();
  initModals();
  initNavigation();
  initCalendarAndSharing();
  initOrganizerCopy();
  initIntroAnimation();
});

/**
 * Sync content from config.js into the DOM
 */
function initDOMContent() {
  const { event, host, invitation } = WORKSHOP_CONFIG;

  // Hero chips
  const heroChipDate = document.getElementById('hero-chip-date');
  const heroChipTime = document.getElementById('hero-chip-time');
  const heroChipVenue = document.getElementById('hero-chip-venue');

  if (heroChipDate) {
    heroChipDate.textContent = event.date || event.datePlaceholder || "6 October";
  }
  if (heroChipTime) {
    heroChipTime.textContent = event.time || event.timePlaceholder || "2:10 PM IST";
  }
  if (heroChipVenue) {
    heroChipVenue.textContent = event.venueTitle || event.venuePlaceholder || "Mandsaur University";
  }

  // Logistics card fields
  const logisticsDate = document.getElementById('logistics-date');
  if (logisticsDate) {
    logisticsDate.textContent = event.date || event.datePlaceholder || "6 October";
  }
  const logisticsTime = document.getElementById('logistics-time');
  if (logisticsTime) {
    logisticsTime.textContent = event.time || event.timePlaceholder || "2:10 PM IST";
  }
  const logisticsVenue = document.getElementById('logistics-venue');
  if (logisticsVenue) {
    logisticsVenue.textContent = event.venueTitle || event.venuePlaceholder || "Mandsaur University";
  }
  const logisticsMeetLink = document.getElementById('logistics-meet-link');
  if (logisticsMeetLink && event.onlineOption && event.onlineOption.meetUrl) {
    logisticsMeetLink.href = event.onlineOption.meetUrl;
  }

  // Populate Share Preview text
  const shareTextPreview = document.getElementById('share-text-preview');
  if (shareTextPreview) {
    const currentUrl = window.location.href;
    const finalMsg = invitation.whatsappMessage + currentUrl;
    shareTextPreview.textContent = finalMsg;
  }
}

/**
 * Modal Handling (Calendar, Online Meet, WhatsApp Share)
 */
function initModals() {
  const remindButtons = document.querySelectorAll('.open-remind-modal');
  const onlineButtons = document.querySelectorAll('.open-online-modal');
  const shareButtons = document.querySelectorAll('.open-share-modal, #header-share-btn');

  const calendarModal = document.getElementById('calendar-modal');
  const onlineModal = document.getElementById('online-modal');
  const shareModal = document.getElementById('share-modal');

  const closeCalendarBtn = document.getElementById('modal-calendar-close');
  const closeOnlineBtn = document.getElementById('modal-online-close');
  const closeShareBtn = document.getElementById('modal-share-close');

  const allModals = [calendarModal, onlineModal, shareModal];

  function openModal(modal) {
    if (!modal) return;
    closeAllModals();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    allModals.forEach(m => {
      if (m) {
        m.classList.remove('open');
        m.setAttribute('aria-hidden', 'true');
      }
    });
    document.body.style.overflow = '';
  }

  // Attach Open Listeners
  remindButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(calendarModal);
    });
  });

  onlineButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(onlineModal);
    });
  });

  shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(shareModal);
    });
  });

  // Attach Close Listeners
  if (closeCalendarBtn) closeCalendarBtn.addEventListener('click', () => closeModal(calendarModal));
  if (closeOnlineBtn) closeOnlineBtn.addEventListener('click', () => closeModal(onlineModal));
  if (closeShareBtn) closeShareBtn.addEventListener('click', () => closeModal(shareModal));

  // Close on Backdrop Click
  allModals.forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

/**
 * Navigation Bar Scroll & Mobile Menu
 */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta button');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy for active navigation links
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Menu Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * Calendar Integrations, WhatsApp Sharing, and Clipboard Actions
 */
function initCalendarAndSharing() {
  const { event, host, invitation } = WORKSHOP_CONFIG;
  const currentUrl = window.location.href;

  // 1. Google Calendar Button
  const btnAddGcal = document.getElementById('btn-add-gcal');
  if (btnAddGcal) {
    btnAddGcal.addEventListener('click', () => {
      const meetUrl = (event.onlineOption && event.onlineOption.meetUrl) || "https://meet.google.com/iya-gbna-qqd";
      const venue = event.venueTitle || "Mandsaur University";
      const title = encodeURIComponent("Google AI Workshop - Huzefa Lokhandwala (Google Student Ambassador)");
      const details = encodeURIComponent(
        `Google AI Workshop: Don't Just Learn About AI. Use It.\n\n` +
        `Facilitated by Huzefa Lokhandwala (Google Student Ambassador).\n` +
        `A hands-on campus session exploring Gemini, prompt design, and practical prototyping.\n\n` +
        `📍 Venue: ${venue}\n` +
        `📅 Date: 6 October 2026\n` +
        `⏰ Time: 2:10 PM IST (Expected duration: ~2 to 2.5 hours)\n` +
        `📹 Google Meet Stream: ${meetUrl}\n\n` +
        `Website: ${currentUrl}`
      );
      const encodedVenue = encodeURIComponent(venue);
      // 6 October 2026: 2:10 PM IST (14:10 IST = 08:40 UTC) to 4:40 PM IST (16:40 IST = 11:10 UTC)
      const dates = "20261006T084000Z/20261006T111000Z";
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${encodedVenue}`;
      window.open(gcalUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 2. iCal (.ics) Download
  const btnDownloadIcs = document.getElementById('btn-download-ics');
  if (btnDownloadIcs) {
    btnDownloadIcs.addEventListener('click', () => {
      generateIcsFile(event, currentUrl);
    });
  }

  // 3. Save to WhatsApp / WhatsApp Reminder Button
  const btnSaveWhatsapp = document.getElementById('btn-save-whatsapp');
  if (btnSaveWhatsapp) {
    btnSaveWhatsapp.addEventListener('click', () => {
      triggerWhatsAppShare(invitation.whatsappMessage + currentUrl);
    });
  }

  // 4. Copy URL Button
  const btnCopyUrl = document.getElementById('btn-copy-url');
  if (btnCopyUrl) {
    btnCopyUrl.addEventListener('click', () => {
      copyToClipboard(currentUrl);
      showToast('🔗 Website link copied! Save it to your notes or bookmarks.');
    });
  }

  // 5. Open WhatsApp to Share from Modal
  const btnOpenWhatsapp = document.getElementById('btn-open-whatsapp');
  if (btnOpenWhatsapp) {
    btnOpenWhatsapp.addEventListener('click', () => {
      triggerWhatsAppShare(invitation.whatsappMessage + currentUrl);
    });
  }

  // 6. Copy Invite Text
  const btnCopyInvite = document.getElementById('btn-copy-invite');
  if (btnCopyInvite) {
    btnCopyInvite.addEventListener('click', () => {
      const fullInvite = invitation.whatsappMessage + currentUrl;
      copyToClipboard(fullInvite);
      showToast('📋 WhatsApp invite copied! Paste it in your student group chats.');
    });
  }
}

/**
 * Organizer reference details copy functionality
 * Handles individual field copying and "Copy All Details" with visual confirmations.
 */
function initOrganizerCopy() {
  const copyChips = document.querySelectorAll('.btn-copy-chip');
  const copyAllBtn = document.getElementById('btn-copy-all-org');

  copyChips.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const label = btn.getAttribute('data-copy-label') || 'Detail';
      let value = '';

      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          value = targetEl.textContent.trim();
        }
      }

      if (!value) {
        value = btn.getAttribute('data-copy-value') || '';
      }

      if (value) {
        copyToClipboard(value);
        showToast(`Copied ${label}: ${value}`);

        const textSpan = btn.querySelector('.copy-chip-text');
        const originalText = textSpan ? textSpan.textContent : 'Copy';
        btn.classList.add('copied');
        if (textSpan) textSpan.textContent = '✓ Copied!';
        btn.setAttribute('aria-label', `${label} copied to clipboard`);

        setTimeout(() => {
          btn.classList.remove('copied');
          if (textSpan) textSpan.textContent = originalText;
          btn.setAttribute('aria-label', `Copy ${label}`);
        }, 2000);
      }
    });
  });

  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      const { registration } = WORKSHOP_CONFIG;
      const org = (registration && registration.organizer) ? registration.organizer : {
        name: 'Huzefa Lokhandwala',
        gid: '9427',
        email: 'huzefalokhand55@gmail.com'
      };

      const allDetails = `Organizer Name: ${org.name}\nOrganizer GID: ${org.gid}\nOrganizer Email: ${org.email}`;
      copyToClipboard(allDetails);
      showToast('📋 All organizer reference details copied!');

      const textSpan = copyAllBtn.querySelector('.copy-all-text');
      const originalText = textSpan ? textSpan.textContent : 'Copy All Details';
      copyAllBtn.classList.add('copied');
      if (textSpan) textSpan.textContent = '✓ All Details Copied!';
      copyAllBtn.setAttribute('aria-label', 'All organizer reference details copied to clipboard');

      setTimeout(() => {
        copyAllBtn.classList.remove('copied');
        if (textSpan) textSpan.textContent = originalText;
        copyAllBtn.setAttribute('aria-label', 'Copy all organizer reference details to clipboard');
      }, 2000);
    });
  }
}

/**
 * Trigger WhatsApp share (or native Web Share API on mobile)
 */
function triggerWhatsAppShare(messageText) {
  if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
    navigator.share({
      title: 'Google AI Workshop Invitation',
      text: messageText,
      url: window.location.href
    }).catch(() => {
      fallbackWhatsAppWeb(messageText);
    });
  } else {
    fallbackWhatsAppWeb(messageText);
  }
}

function fallbackWhatsAppWeb(messageText) {
  const encoded = encodeURIComponent(messageText);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Copy string to clipboard with fallback
 */
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(err => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  textArea.remove();
}

/**
 * Generate and download an .ics file with confirmed schedule
 */
function generateIcsFile(event, url) {
  const meetUrl = (event.onlineOption && event.onlineOption.meetUrl) || 'https://meet.google.com/iya-gbna-qqd';
  const venue = event.venueTitle || 'Mandsaur University';
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Google Student Ambassador//AI Workshop//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:google-ai-workshop-20261006T141000-mandsaur@gemini',
    'DTSTAMP:20261005T101500Z',
    'DTSTART:20261006T084000Z',
    'DTEND:20261006T111000Z',
    'SUMMARY:Google AI Workshop - Huzefa Lokhandwala (Google Student Ambassador)',
    'DESCRIPTION:' + (event.supportingText || 'Hands-on Google AI workshop exploring Gemini, prompt design, and practical prototyping.') + '\\n\\nVenue: ' + venue + '\\nDate: 6 October 2026\\nTime: 2:10 PM IST\\nGoogle Meet Stream: ' + meetUrl + '\\nWebsite: ' + url,
    'LOCATION:' + venue,
    'URL:' + meetUrl,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'google-ai-workshop.ics');
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('🗓️ Calendar invitation file downloaded (6 October • 2:10 PM IST)!');
}

/**
 * Show a sleek toast message
 */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.22s ease';
    setTimeout(() => toast.remove(), 240);
  }, 3400);
}

/**
 * Google-Inspired Opening Introduction Experience
 * Lightweight, accessible, skippable, with subtle Web Audio chime on opt-in.
 */
function initIntroAnimation() {
  const overlay = document.getElementById('opening-intro-overlay');
  if (!overlay) return;

  const skipBtn = document.getElementById('intro-skip-btn');
  const soundToggle = document.getElementById('intro-sound-toggle');
  const soundIcon = document.getElementById('intro-sound-icon');
  const soundLabel = document.getElementById('intro-sound-label');
  const progressBar = document.getElementById('intro-progress-bar');
  const replayBtn = document.getElementById('replay-intro-btn');

  let isSoundOn = false;
  let isDismissed = false;
  let autoDismissTimer = null;

  // Check reduced motion preference or prior session view
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasSeenIntro = sessionStorage.getItem('gsa_intro_seen') === '1';

  if (prefersReducedMotion || hasSeenIntro) {
    overlay.classList.add('intro-dismissed');
    overlay.style.display = 'none';
    setupReplay();
    return;
  }

  startIntroExperience();

  function startIntroExperience() {
    overlay.style.display = 'flex';
    overlay.classList.remove('intro-dismissed');
    isDismissed = false;
    if (progressBar) progressBar.style.width = '0%';

    const duration = 3200;
    const start = performance.now();

    function updateProgress(now) {
      if (isDismissed) return;
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        dismissIntro();
      }
    }

    requestAnimationFrame(updateProgress);

    autoDismissTimer = setTimeout(() => {
      dismissIntro();
    }, 3400);
  }

  function dismissIntro(immediate = false) {
    if (isDismissed) return;
    isDismissed = true;
    if (autoDismissTimer) clearTimeout(autoDismissTimer);

    sessionStorage.setItem('gsa_intro_seen', '1');

    if (immediate) {
      overlay.classList.add('intro-dismissed');
      overlay.style.display = 'none';
    } else {
      overlay.classList.add('intro-dismissed');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 360);
    }
  }

  // Sound toggle (Starts muted by default)
  if (soundToggle) {
    soundToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isSoundOn = !isSoundOn;
      if (soundIcon) soundIcon.textContent = isSoundOn ? '🔊' : '🔇';
      if (soundLabel) soundLabel.textContent = isSoundOn ? 'Sound On' : 'Sound Off';

      if (isSoundOn) {
        playSubtleKeynoteChime();
      }
    });
  }

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissIntro();
    });
  }

  // Keyboard Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !isDismissed) {
      dismissIntro();
    }
  });

  // Click background to skip
  overlay.addEventListener('click', (e) => {
    if (e.target.closest('.intro-btn')) return;
    dismissIntro();
  });

  setupReplay();

  function setupReplay() {
    if (replayBtn) {
      replayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('gsa_intro_seen');
        startIntroExperience();
      });
    }
  }
}

/**
 * Subtle Google Keynote Chime synthesized via standard Web Audio API
 * No external audio files required, zero latency, gentle sine chords.
 */
function playSubtleKeynoteChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Gentle ascending 4-note chord: C5, E5, G5, C6
    const chord = [523.25, 659.25, 783.99, 1046.5];
    chord.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

      // Soft, gentle envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + i * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.55);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.6);
    });
  } catch (err) {
    console.warn('Audio playback error', err);
  }
}
