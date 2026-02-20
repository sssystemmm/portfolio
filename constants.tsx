import { ImpactItem } from './types.ts';

export const IMPACTS: ImpactItem[] = [
  {
    id: 'alef-redesign',
    product: 'GESS AWARD WINNER 2025 | EDTECH | FULL REDESIGN',
    category: 'EdTech / Strategy',
    title: 'Alef Pathways: Complete Product Redesign',
    subtitle: 'Led the full redesign of a personalized adaptive AI learning solution, with a student-centered pedagogical approach, significantly increasing engagement and boosting new and upsell contracts.',
    impactValue: '+41%',
    impactLabel: 'Unique Active Users',
    impactMetric: '+41% increase in unique active users',
    award: 'Best Digital Educational Resource/Product - GESS Education Awards 2025',
    description: 'Winner of "Best Digital Educational Resource/Product" at the GESS Education Awards 2025.',
    processBrief: 'Led a comprehensive human-centered redesign process spanning nine months, from deep pedagogical research to cross-functional stakeholder alignment.',
    imageUrl: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771585183/Thumbnail_-_pathways_pbkl9b.png',
    caseStudy: {
      overview: 'Led the complete end-to-end redesign of Alef Pathways, transforming it from a teacher-centric assessment tool into a student-empowered learning platform that addresses critical educational gaps in the UAE market where 80% of students perform below grade level.',
      overviewSubtext: 'This project demonstrated the business value of investing in comprehensive UX transformation rather than incremental improvements, unlocking significant user growth and culminating in winning "Best Digital Educational Resource/Product" at the GESS Education Awards 2025.',
      links: [
        { label: 'GESS Education Awards 2025 Winners', url: 'https://www.gessdubai.com/2025-awards-winners/' },
        { label: 'Alef Pathways Product Overview', url: 'https://www.alefeducation.com/products/alef-pathways#overview' }
      ],
      metadata: { 
        role: 'Lead Product Designer', 
        timeline: '9 Months (2024-2025)', 
        team: 'Product Managers and Head, Brand Designer, Motion Designer, 2 UI Designers, UX Researcher, Growth' 
      },
      metrics: [
        { label: 'UNIQUE ACTIVE USERS', value: '+41%', description: 'Significantly improved product-market fit.', featured: true },
        { label: 'B2B CONTRACTS', value: '42', description: 'New contracts secured directly via the redesign.' },
        { label: 'UPSELL CONTRACTS', value: '44', description: 'Validating improved value proposition.' },
        { label: 'WEEKLY ENGAGEMENT', value: '45m', description: 'Students achieving target pedagogical effectiveness thresholds.' },
        { label: 'SUPPORT BURDEN', value: '0', description: 'Eliminated UX-related support tickets post-launch.' }
      ],
      challenge: {
        description: 'The original Alef Pathways was built on legacy system architecture, created for control and restrictions, with a semantic structure that failed to resonate with users. The product positioned teachers as gatekeepers rather than facilitators, creating distance from its core mission of empowering students to fill knowledge gaps independently.',
        points: [
          { title: 'Summative Overload', description: 'Over 50% of assessments provided grades without feedback, discouraging students at critical moments.', iconType: 'warning' },
          { title: 'Pedagogical Misalignment', description: 'Legacy remediation flows were an awkward fit for local UAE teacher workflows, mandating daily activity from busy and overworked teachers to function properly.', iconType: 'warning' },
          { title: 'Identity Crisis', description: 'The interface failed to connect with the daily lives and cultural context of young learners.', iconType: 'warning' },
          { title: 'Cognitive Overload', description: 'The product did not align with signs and language used by teachers and students around remediation needs, making the product cryptic and hard to understand.', iconType: 'warning' }
        ]
      },
      processSteps: [
        { id: '01', title: 'Deep Research Phase', description: 'Led the research and conducted multi-perspective analysis examining pedagogical best practices around AI assisted self-regulated learning, competitive market analysis and positioning, and historical summary of user feedback and needs across teacher and student segments.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771345405/Screenshot_2026-02-17_at_8.23.07_PM_ncanic.png' },
        { id: '02', title: 'Research Synthesis & UX Strategy', description: 'Aligned stakeholders around strategic priorities based on Learner-Centric framework: "Empowering students with Choice, enabling learning with Guidance".', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771347590/Screenshot_2026-02-17_at_8.59.42_PM_o1kbsu.png' },
        { id: '03', title: 'Learner-Centered Design Principles', description: 'Designed and aligned the team behind out learner-centered design principles, that served as the guide for our gamification strategy, supporting not only a rewarding system but also a meaningful habit-building education journey.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771599604/Design_Principles_-_Pathways_-_Student_Platform_h6lrln.png' },
        { id: '04', title: 'Concept Validation Workshop', description: 'Facilitated collaborative sessions with teachers to validate assumptions around key persona archetypes and local UAE teaching practices for remediation and gap-filling.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771347679/Screenshot_2026-02-17_at_9.01.11_PM_u12jn7.png' },
        { id: '05', title: 'Solution Discovery', description: 'Synthesized workshop feedback into refined design concepts and system architecture, transforming formative insights into feaseable structures and actionable items to be translated into user flows and interface.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771594423/79bb1710-78cd-4957-9cfb-f3f84812413c.png' },
        { id: '06', title: 'AI Adaptive Algorithm Design', description: 'Co-designed with the AI PM our custom AI Adaptive Practice Algorithm based on Bayesian Knowledge Tracing (BKT), tailored specifically to each of the stages of learning identified as important steps into building skill mastery: exploring, practicing, proficiency, mastery (super pro).', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771600112/ad6a6a71-3369-4ba4-a968-29e53dffde1a.png' },
        { id: '07', title: 'Brand & Design System Alignment', description: 'Led the team and worked closely with the Lead Brand Designer and UI Designers to achieve a unified expression across illustrations, UX patterns, and UI components across all device breakpoints, creating a cohesive and emotional product experience.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771598202/Screenshot_2026-02-20_at_6.36.22_PM_kz6arf.png' },
        { id: '08', title: 'AI Tutor Integration as Pedagogical Agent', description: 'Led the team and worked closely with an AI researcher to deliver pedagogically relevant touchpoints in the student journey so that the AI Tutor is able to take on different roles, with different branding, to communicate more effectively with the students depending on their current context.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771597748/dc20c8fb-a8b3-4dd2-a6d0-4a591b7fc6d2.png' },
        { id: '09', title: 'Multi-Segment Usability Testing', description: 'Led the research and conducted testing across all major user segments for both teacher and student experiences, validating flows across device breakpoints.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771598646/c37f2677-6c0b-4ffc-b66c-3f134c47ab0d.png' },
        { id: '10', title: 'Development and Engineering Communication', description: 'Coordinated design checks and ensured highest quality of Front-End work across 3 development teams and 15 developers.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771600850/Untitled_2_gwxgnf.png' },
        { id: '11', title: 'Cross-Functional Stakeholder Alignment', description: 'Coordinated with internal teams throughout the entire process, effectively building the product together and validating all steps across C Level, Education, Product, Tech, Data and Growth, who shifted their sales calendar to capitalize on the new product launch as a major market differentiator.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771598984/Screenshot_2026-02-20_at_6.49.37_PM_z04eqi.png' },
        { id: '12', title: 'Launch & Onboarding Strategy', description: 'Designed comprehensive user onboarding including in-platform guidance, intro videos, walkthroughs, and communication strategy to ensure smooth transition from legacy system.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771599072/84730e43-a885-441f-be90-c07903e79142.png' }
      ],
      solution: {
        mainImage: '', 
        featureTitle: 'From Testing to Empowering', 
        featureDescription: 'Fundamentally shifted product philosophy by restructuring assessment architecture to provide immediate, actionable feedback at moments of success and struggle rather than delayed grades.\n\nFor teachers a one click away design principle enabled clear scaffolded data analytics dashboard, where they could clearly and independently focus on what they need to: areas of concern and successes.\n\nThe platform enabled teachers to have time saving targeted private chats with students to solve issues timely, further advancing the goal of the prduct to reduce grade gaps in education.',
        featureImages: [
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583819/Pathways_Home_pmizdp.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583818/For_You_fqtwkf.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583819/Property_1_Adaptive_Practice_-_mastered_4_xxncgs.png'
        ],
        additionalSections: [
          {
            title: 'Progress & Mastery Visualization',
            description: 'Comprehensive dashboards for students to track their learning journey, including progress reports and leaderboard engagement.',
            images: [
              'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583555/Progress_Page_y7exsg.png',
              'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583554/Leaderboard_feuxo6.png',
              'https://res.cloudinary.com/dz26vptwn/image/upload/v1771583634/Level_Report_nsipqe.png'
            ]
          }
        ],
        embedCode: `<iframe src="https://player.cloudinary.com/embed/?cloud_name=dz26vptwn&public_id=Toki_Pathway_Intro_EN_V4_opt_1_eqcct1" width="640" height="360" style="height: auto; width: 100%; aspect-ratio: 640 / 360;" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen frameborder="0"></iframe>`,
        featureList: [
          'Immediate Formative Feedback',
          'Student-Led Mastery Pathways',
          'Insight-Driven Teacher Dashboards',
          'Culturally Resonant Design Language'
        ]
      },
      insights: [
        { 
          title: 'Pedagogical Framework Validation', 
          content: '"My students and I loved the new Pathways! They feel engaged and motivated, and I can now quickly identify areas of concern, and have targeted conversations with my students 1-1 to help them exactly where they are in need."' 
        },
        { 
          title: 'The Value of Systemic Transformation', 
          content: 'By addressing systemic product-market fit issues through human-centered redesign rather than incremental tweaks, we unlocked growth that influenced the entire company’s subsequent product strategy.' 
        }
      ],
      postLaunch: {
        title: 'Global Recognition & Business Impact',
        content: 'Beyond winning "Best Digital Educational Resource/Product" at the GESS Education Awards 2025, the redesign directly resulted in 42 new B2B contracts and 44 upsells, proving that deep UX research correlates with industry prestige and revenue expansion.'
      },
      reflections: [
        { title: 'Teacher as Facilitator', description: 'Repositioned tools from compliance functions to personalized support insight dashboards.' },
        { title: 'Student Agency', description: 'Put students in control of their journey with visibility into their own gaps.' }
      ],
      nextProject: { title: 'Twinds Foundation: Designing for Decentralized Trust', id: 'twinds-foundation' }
    }
  },
  {
    id: 'twinds-foundation',
    product: 'EU GRANT WINNER | IDENTITY | TRUST SYSTEMS',
    category: 'Identity / Decentralization',
    title: 'Twinds Foundation: Designing for Decentralized Trust',
    subtitle: 'Co-designed the UX vision and self-sovereign identity design framework for Twinds Foundation, contributing directly to securing a EU Horizon Europe grant.',
    impactValue: 'EU GRANT',
    impactLabel: 'Horizon Europe Secured',
    impactMetric: 'Our framework secured Horizon Europe R&D Grant',
    description: 'A research-based trust framework and identity layer for decentralized ecosystems.',
    processBrief: '2-year 7-months engagement developing UX patterns and mental models for self-sovereign identity (SSI) and POC + MVP with a corporate partner in Belgium.',
    imageUrl: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771578410/a37ffe28-a270-4e3c-8449-40c1a6ce37f3.png',
    caseStudy: {
      overview: 'Co-designed the UX vision and identity design framework for Twinds Foundation, the preliminary work that contributed directly to securing a European Union Horizon Europe R&D grant to apply our self-sovereign identity and data privacy framework, whose goal is to rebuild trust in digital services by providing greater transparency, decentralized control and balancing privacy and data use.',
      overviewSubtext: 'As UX/UI Designer, I contributed to building the bridge between cutting-edge cryptographic technology and human-centered design across a three-year engagement, resulting in a formal research output, POC and MVP with a big corporate partner in Belgium to manage GDPR compliance with HR use cases.',
      links: [
        { label: 'Twinds Foundation Website', url: 'https://twinds.org' },
        { label: 'EU Grant Details', url: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/org-details/999999999/project/101086523/program/43108390/details' }
      ],
      metadata: { 
        role: 'UX/UI Designer', 
        timeline: '2 Years 7 Months', 
        team: 'Web3/SSI Technologists, Cybersecurity Experts, Designers' 
      },
      metrics: [
        { label: 'EU FUNDING', value: 'Grant', description: 'N° 101086523 - Horizon Europe R&D.', featured: true },
        { label: 'PARTNERSHIP 1', value: 'POC/MVP', description: 'Tested and validated our SSI framework in a POC/MVP with corporate partner.' },
        { label: 'PARTNERSHIP 2', value: 'Extension', description: 'Framework and partnership 1 validation secured funding to extend project.' },
      ],
      challenge: {
        description: 'Digital trust was broken, and nobody was measuring it. Organizations were building "responsibly" but had no way to validate user experience. Furthermore, self-sovereign identity (SSI) lacked established design patterns or mental models for non-technical users.',
        image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771577259/Screenshot_2026-02-20_at_12.47.12_PM_zidma0.png',
        points: [
          { title: 'GDPR Compliance', description: 'Indentity + Data management became a huge compliance risk for companies while users and employees have been loosing trust on digital infrastructures to secure their data.', iconType: 'warning' },
          { title: 'Cryptographic Complexity', description: 'How do you design for decentralized control when mental models for it are the biggest obstacle for adoption and usability', iconType: 'warning' }
        ]
      },
      processSteps: [
        { id: '01', title: 'Research & UX Vision', description: 'Conducted socio-cultural and market signals research to identify user needs around digital identity in Europe, while mapping them key SSI attributes: privacy by default and decentralized control. We wanted to understand how to map SSI principles to existing and user-friendly identity patterns.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771577258/Screenshot_2026-02-20_at_12.46.43_PM_my1had.png' },
        { id: '02', title: 'Use Case Decision Framework', description: 'Developed a comprehensive Map to evaluate optimal applications for SSI, enabling criteria-based decision-making for business partnerships to be able to evaluate the business impact as well as effort, and be able to offer a vision of further potential applications.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771577097/Use_Case_Exploration_-_Use_Case_Decision_Map_xftuiy.jpg' },
        { id: '03', title: 'MVP User Journey Design', description: 'Designed detailed flows for profile creation and dynamic user control over personal identifiers, with privacy and agency as primary constraints. Detailing shared data contracts between emploer and employees within the context of a health survey, an HR innitiative to improve employees overall well being.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771578021/Screenshot_2026-02-20_at_1.00.11_PM_ap0ruq.png' },
        { id: '04', title: 'SSI Design Principles', description: 'Established Twinds UX/UI SSI Principles: trust not fear, at a glance comprehensibility, security awareness and confidence, and default data minimization.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771578657/Screenshot_2026-02-20_at_1.10.50_PM_ozwwf9.png' },
        { id: '05', title: 'MVP Development', description: 'Managed a group of 5 developers to deliver the POC / MVP in time for our first coroporate partnership. I ensured the highest quality of front-end delivery as well as a timely delivery of back and front-end flows.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771578339/900015f1-1d0a-412e-899d-4fd8b2663dc7.png' }
      ],
      solution: {
        mainImage: '', 
        featureTitle: '', 
        featureDescription: '',
        featureImages: [],
        featureList: [],
        embedCode: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5lT91rww9ATnc_izNdPoigQ3w8kxMjPtdp4x8Gx-usgG2-mY0WU6pZTVeXEYj9pVnDCg1NFNZSSdi/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
      },
      reflections: [
        { title: 'Trustworthiness vs. Trust', description: 'A system can be technically secure and ethically designed while still failing to be experienced as trustworthy by its users. UX must bridge this gap.' },
        { title: 'New Mental Models', description: 'Designing for SSI required letting go of centralized patterns and building a completely different model through transparent communication.' }
      ],
      nextProject: { title: 'Validating gamification system with a large scale live experiment', id: 'pathway-badges' }
    }
  },
  {
    id: 'pathway-badges',
    product: 'EXPERIMENT  |  GAMIFICATION  |  EDTECH',
    category: 'Ed Tech',
    title: 'Validating gamification system with a large scale live experiment',
    subtitle: 'Designed and implemented a gamification system using pathway-specific badges that significantly boosted student engagement and learning outcomes across the platform.',
    impactValue: '+15%',
    impactLabel: 'Sustagement',
    impactMetric: '+15% Sustained Engagement Increase',
    description: 'A data-driven gamification layer that rewards skill mastery and consistent practice.',
    processBrief: '28-day controlled experiment with 152,615 students. Focused on measuring not just engagement quantity but also learning quality and proficiency upgrades.',
    imageUrl: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771344665/thumbnail_1_k0eucc.png', 
    caseStudy: {
      overview: 'Designed and implemented a gamification system using pathway-specific badges that significantly boosted student engagement and learning outcomes across the platform.',
      overviewSubtext: 'Scope: 28-day controlled experiment with 152,615 students, achieving statistical significance with 95%+ confidence across key metrics.',
      metadata: { role: 'Lead Product Designer', timeline: '2 Months (2026)', team: 'Lead Designer, Product Manager, Engineer Manager' },
      metrics: [
        { label: 'ANSWER SUBMISSIONS', value: '+11%', description: 'Driving deeper practice engagement.', featured: true },
        { label: 'LEVEL COMPLETIONS', value: '+15%', description: 'Progressing through learning journey.' },
        { label: 'PROFICIENCY UPGRADES', value: '+14%', description: 'Indicating stronger skill mastery.' },
        { label: 'SESSION STARTS', value: '+10%', description: 'Active student practice.' },
        { label: 'TIME SPENT', value: '+6.5%', description: 'Increased learning exposure.' }
      ],
      challenge: {
        description: 'How do we motivate students to maintain consistent practice without sacrificing learning quality?',
        image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771603681/pathways_challenge_t93ggb.png',
        points: [
          { title: 'Inconsistent Practice', description: 'Students often dropped off after initial onboarding.', iconType: 'warning' },
          { title: 'Engagement vs Quality', description: 'Gamification can sometimes lead to rushing.', iconType: 'info' }
        ]
      },
      processSteps: [
        { id: '01', title: 'Gamification Strategy', description: 'Identified that students lacked progress indicators and clear goals to fulfill according to their progress measures: active days, questions answered, learning time, and levels upgraded. I partnered with the Lead Brand Designer to illustrate the fours main Pathways Challenges, showcased in a tiered approach.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771602361/cc98339a-f3e0-49fd-88ad-913aafddfa5d.png' },
        { id: '02', title: 'Experimental Design', description: 'Integrated the bagde system with the current one housed in the student profile and partnered with Tech to define a 28-day A/B test to measure the efficacy of activating the unique Pathways Challenge Badges.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771602596/Screenshot_2026-02-20_at_7.49.37_PM_bf5iud.png' },
        { id: '03', title: 'Visual Language', description: 'Developed a system of badges that felt earned and integrated into the existing Course Design.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771602435/2696f5d7-d1f4-4860-83e8-b1a888e276b2.png' }
      ],
      solution: {
        mainImage: '', 
        featureTitle: '', 
        featureDescription: '',
        featureImages: [
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771602115/15ba2d73-f2bf-4da9-bbe7-cc471a020cd9.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771601981/76247c27-6510-4417-a002-83aa77515b5e.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771601966/ba89f973-3855-47ff-8e41-38d4c01d9b23.png'
        ],
        featureList: []
      },
      insights: [
        { 
          title: 'Learning gap identification increased by 8%', 
          content: 'More active students exposed more areas for improvement through increased practice attempts.' 
        },        
        { 
          title: 'Sustained Growth', 
          content: 'Following full rollout, the badge system demonstrated sustained and growing impact, validating badges as a core motivational mechanism.' 
        }
      ],
      postLaunch: {
        title: 'Sustained Growth',
        content: 'Following full rollout, the badge system demonstrated sustained and growing impact, validating badges as a core motivational mechanism.'
      },
      nextProject: { title: 'Personalized communication banner system', id: 'banner-system' }
    }
  },
  {
    id: 'banner-system',
    product: 'EXPERIMENT  |  IN-APP COMMUNICATION STRATEGY  |  EDTECH',
    category: 'AI / Optimization',
    title: 'Personalized communication banner system built for scale',
    subtitle: 'Created a personalized communication banner system that dynamically adapts messaging based on individual student progress, dramatically improving engagement.',
    impactValue: '+91%',
    impactLabel: 'CTR Increase',
    impactMetric: '+91% CTR increase',
    description: 'Dynamic messaging engine that adapts content in real-time based on learner behavior.',
    processBrief: '13-day controlled experiment with 138,599 students. Achieved 100% statistical confidence that the personalized approach outperformed static messaging.',
    imageUrl: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605494/b21127ef-82af-492c-acbd-2303918026e0.png',
    caseStudy: {
      overview: 'Created a personalized communication banner system that dynamically adapts messaging based on individual student progress, dramatically improving engagement and learning activity completion.',
      overviewSubtext: 'Scope: 13-day controlled experiment with 138,599 students, achieving 100% statistical confidence.',
      metadata: { role: 'Lead Product Designer', timeline: '1,5 Months (2025)', team: 'Lead Designer, Product Manager, Engineer Manager' },
      metrics: [
        { label: 'CLICK-THROUGH RATE', value: '+91%', description: 'Nearly doubled banner effectiveness.', featured: true },
        { label: 'SESSION STARTS', value: '+27%', description: 'Converting awareness into action.' },
        { label: 'COMPLETION RATES', value: '+25%', description: 'Follow-through on activities.' },
        { label: 'EXPERIENCE COMPLETIONS', value: '+27%', description: 'Comprehensive engagement boost.' }
      ],
      challenge: {
        description: 'Static messaging was becoming background noise. Users were ignoring critical path notifications.',
        image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771606181/Screenshot_2026-02-20_at_8.49.30_PM_rz0jga.png',
        points: [
          { title: 'Introduce Experiments as Internal Best Practices', description: 'After a few failed attempts we managed to introduce experiments as internal best practices for behavioral design.', iconType: 'warning' },
          { title: 'Banner Blindness', description: 'Generic calls-to-action were underperforming.', iconType: 'warning' },
          { title: 'Flow Integration', description: 'Lack of emotional integration in the flow. Students did not receive a positive and surprising response from the system before, during or after learning effort.', iconType: 'warning' }
        ]
      },
      processSteps: [
        { id: '01', title: 'Data Mapping', description: 'Mapping student states to specific nudges and messaging triggers.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605466/9635bb37-660d-46c0-a4dd-abba91c2439b.png' },
        { id: '02', title: 'Selected Launch Nudging Moment', description: 'Created a strategic communication sheet, mapping the most impactful nudging moments that were adapted to the overall learning journey and drop offs.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605421/554deaf2-43ce-4bbd-864c-6bc21b0f1857.png' },
        { id: '03', title: 'Design System Integration', description: 'Creating a flexible banner component that scales across device types.', image: 'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605439/edbef081-36ef-4550-90c5-03ee9b1b7c53.png' }
      ],
      solution: {
        mainImage: '', featureTitle: 'Adaptive Messaging', featureDescription: 'Context-aware prompts based on behavior.',
        featureImages: [
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771606567/804de132-8a70-48f2-8d10-b3aed8bfa604.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605494/b21127ef-82af-492c-acbd-2303918026e0.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771605567/fa2acff2-3e2e-49a0-b124-bfc0ee675770.png',
          'https://res.cloudinary.com/dz26vptwn/image/upload/v1771606516/4bca0f9c-42e0-4023-9b6c-5b608d656866.png'
        ],
        featureList: ['Personalized triggers', 'Progress-based nudges', 'Contextual alerts']
      },
      postLaunch: {
        title: 'Engagement Uplift',
        content: 'The dynamic banner system became a foundational growth tool for the platform, driving continuous active learning.'
      },
      reflections: [{ title: 'Behavioral Nudges', description: 'Proved that timely, relevant communication is more effective than broad-spectrum notifications.' }],
      nextProject: { title: 'Alef Pathways: Complete Product Redesign', id: 'alef-redesign' }
    }
  }
];