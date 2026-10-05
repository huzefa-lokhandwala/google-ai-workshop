/**
 * WORKSHOP CONFIGURATION & CONTENT DATA
 * =====================================
 * Clean separation of event details, copy, schedule placeholders,
 * and sharing templates.
 * 
 * Update confirmed details (date, time, room, Meet link) here
 * without modifying UI templates or styling.
 */

export const WORKSHOP_CONFIG = {
  // Main Workshop Information
  event: {
    badge: "GOOGLE AI WORKSHOP",
    category: "CAMPUS WORKSHOP",
    headline: "DON'T JUST LEARN ABOUT AI.\nUSE IT.",
    supportingText: "A hands-on Google AI workshop where you can explore Gemini, experiment with AI, and turn ideas into something real.",
    
    // Venue Information
    venueTitle: "Mandsaur University",
    venuePlaceholder: "Mandsaur University",
    venueClarification: "Mandsaur University campus",
    
    // Schedule Status & Placeholders
    isScheduled: true,
    date: "6 October",
    dateDisplay: "6 October",
    dateFull: "6 October 2026",
    datePlaceholder: "6 October",
    
    time: "2:10 PM IST",
    timePlaceholder: "2:10 PM IST",
    timeZone: "IST",
    timeFull: "2:10 PM India Standard Time (IST)",
    duration: "Approximately 2 to 2.5 hours",
    
    // Experience Priority
    experienceNote: "Offline experience recommended • Online option available",

    // Online Option
    onlineOption: {
      isAvailable: true,
      platform: "Google Meet",
      meetUrl: "https://meet.google.com/iya-gbna-qqd",
      note: "Offline attendance is the primary workshop experience with live challenges and room voting. An online Google Meet option is provided for students unable to attend in person.",
      statusText: "Confirmed — Stream starts at 2:10 PM IST on 6 October"
    },

    // Practical Challenge (GSA Activity inside the broader workshop)
    challenge: {
      tag: "PRACTICAL WORKSHOP ACTIVITY",
      title: "THEN, WE PUT IT INTO PRACTICE.",
      subtitle: "Take an idea, build a brand concept with Gemini, visualize it with Nano Banana, and pitch your creation.",
      activityName: "Fest Stall Brand & Pitch Challenge",
      flow: [
        { step: "01", name: "IDEA", desc: "Pick a theme or campus problem to solve" },
        { step: "02", name: "GEMINI", desc: "Build prompt logic, brand narrative & pitch" },
        { step: "03", name: "VISUALIZE", desc: "Render visuals and concept assets with Nano Banana" },
        { step: "04", name: "PITCH", desc: "Quick 60-second room showcase & peer voting" }
      ]
    }
  },

  // Host Details (No invented achievements; clean positioning points)
  host: {
    name: "Huzefa Lokhandwala",
    role: "Google Student Ambassador",
    title: "Student-Led AI Workshop Facilitator",
    tagline: "Student-led practical AI learning with Google Gemini",
    photo: "assets/images/huzefa-host.jpg",
    bio: "Hi, I’m Huzefa — a fellow student. I organize these workshops to help students from any course explore modern AI tools like Gemini through practical, hands-on activities. We focus on real things you can build for college projects, everyday tasks, and creative ideas — with zero jargon and no previous coding experience needed.",
    credibilityPoints: [
      { kicker: "STUDENT", title: "Designed by a student, for students", desc: "Tailored directly for campus life, university coursework, and student creative projects" },
      { kicker: "BUILDER", title: "Hands-on experimentation", desc: "Direct trial, live prompts, and real outputs instead of passive presentation slides" },
      { kicker: "COMMUNITY", title: "Learn → Create → Collaborate", desc: "Bringing students across disciplines together to explore modern AI with Google Gemini" }
    ]
  },

  // Registration & Surveys Configuration
  registration: {
    title: "Register & Shape the Session",
    subtitle: "Complete the pre-workshop survey to reserve your seat and workstation access. After attending, submit your honest feedback to confirm your participation.",
    preSurveyUrl: "https://producttrialsurvey.geministudentambassador.com/",
    postFeedbackUrl: "https://producttrialfeedback.geministudentambassador.com/",
    organizer: {
      name: "Huzefa Lokhandwala",
      gid: "9427",
      email: "huzefalokhand55@gmail.com"
    }
  },

  // Attendee Benefits ("What You'll Get")
  benefits: [
    {
      id: "certificate",
      tag: "OFFICIAL RECOGNITION",
      title: "Google-Verified Certificate",
      subtitle: "Certificate of Participation",
      description: "Receive an official digital certificate verifying your participation in this hands-on workshop, recognizing your training with Google Gemini, prompt engineering, and visual prototyping.",
      terms: "Awarded to attendees who participate in the session and submit the post-workshop feedback form."
    },
    {
      id: "pixel",
      tag: "PROGRAM OPPORTUNITY",
      title: "Google Pixel Phone Benefit",
      subtitle: "Selective Program Opportunity",
      image: "assets/images/google-pixel.png",
      description: "Standout participants and top challenge contributors have the opportunity to qualify for or win exclusive Google Pixel rewards through the student ambassador program initiative.*",
      terms: "*Important: This benefit is awarded based on workshop challenge performance and criteria announced during the session; it is not guaranteed to all attendees."
    }
  ],

  // Credibility & Previous Sessions (Honest workshop media gallery)
  credibility: {
    heading: "This Is What a Hands-On AI Session Looks Like.",
    subhead: "This is what the experience actually looks like when students experiment and build together.",
    mediaGallery: {
      photo1: "assets/images/sessions/01_huzefa_presenting_students_gemini.jpg",
      photo2: "assets/images/sessions/02_wide_workshop_room_audience.jpeg",
      photo3: "assets/images/sessions/07_students_workstations_video_still.jpg",
      photo4: "assets/images/sessions/03_huzefa_gemini_projection.jpeg",
      videoPoster: "assets/images/sessions/06_huzefa_microphone_video_still.jpg",
      highlightVideo: "assets/videos/05_workshop_highlights.mp4",
      shortClip: "assets/videos/08_huzefa_presenting_11s.mp4"
    }
  },

  // WhatsApp Invite Text
  invitation: {
    whatsappMessage: `🚀 *Google AI Workshop: Don't Just Learn About AI. Use It.*

Hey! Huzefa Lokhandwala is hosting an interactive, hands-on Google AI workshop.

✨ *Highlights:*
• Learn how to actually use Google Gemini
• Turn ideas into something real (not just theory)
• Practical Activity: Build a brand concept & visualize with Nano Banana
• Google-verified certificate of participation
• Google Pixel award opportunity (challenge-based)

📝 *Register & Reserve Your Seat:*
https://producttrialsurvey.geministudentambassador.com/

📍 *Venue:* Mandsaur University
📅 *Date:* 6 October 2026
⏰ *Time:* 2:10 PM IST
📹 *Google Meet:* https://meet.google.com/iya-gbna-qqd
💡 *Format:* Offline experience recommended • Online option available

Check out full workshop details:
`
  }
};
