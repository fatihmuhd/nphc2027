/* =========================================================
   CONFIG — shared by the voting page and the committee dashboard.
   Edit this file only. Keep topic ids (P1, S1, W1 …) stable once voting starts.
   ========================================================= */
window.CONFIG = {
  conferenceName: "13th National Public Health Conference (NPHC 2027)",
  shortName: "NPHC 2027",
  organiser: "NPHC 2027 Scientific Committee",
  tagline: "Help shape the scientific programme. Rate each proposed topic from 1 (least like) to 5 (most like).",
  deadline: "31 January 2027",                           // ← confirm
  websiteUrl: "https://www.pppkam.org.my",
  maxVoters: 150,                 // voting closes after this many voters (enforced by the Worker's VOTE_LIMIT)
  maxSuggestionsPerSession: 5,
  endpoint: "https://nphc2027-vote.alfatihpahrol.workers.dev",
  likert: ["Least like","Not keen","Neutral","Like","Most like"],
  roles: ["Public Health Physician / Specialist","Clinical Specialist / Consultant","Medical Officer","Trainee (Master / DrPH / Specialist programme)","Academic / Researcher","Programme Manager / Policy Maker","Other health professional"],
  specialties: ["Public Health Medicine – Epidemiology","Public Health Medicine – Communicable Disease Control","Public Health Medicine – Non-Communicable Disease","Public Health Medicine – Health Services Management","Public Health Medicine – Environmental Health","Public Health Medicine – Occupational Health","Public Health Medicine – Family / Maternal & Child Health","Public Health Medicine – Health Promotion","Public Health Medicine – Nutrition","Family Medicine","Infectious Disease","Internal Medicine","Paediatrics","Obstetrics & Gynaecology","Psychiatry","Emergency Medicine","Geriatrics","Pathology / Microbiology","Health Informatics","Other"],
  years: ["Less than 5","5–10","11–20","More than 20"],
  // From "13th NPHC 2027 – Proposed Topics (Draft for Discussion)": 11 plenary, 18 symposium, 3 workshop.
  sessions: [
   {
    "type": "Plenary",
    "intro": "Keynote sessions for all delegates on the conference's big themes.",
    "topics": [
     {
      "id": "P1",
      "title": "Universal health care financing: who pays and who benefits",
      "scope": "Health financing reform, strategic purchasing, role of the private sector and insurance in getting to UHC",
      "track": "Health Management"
     },
     {
      "id": "P2",
      "title": "Universal health care financing: sharing patient burden",
      "scope": "How regulated third-party payments to healthcare providers benefit patients and the choice of services",
      "track": "Health Management"
     },
     {
      "id": "P3",
      "title": "Healthy Cities: health governance beyond the health ministry",
      "scope": "Local councils, urban planning, transport and housing as drivers of health",
      "track": "Health Management"
     },
     {
      "id": "P4",
      "title": "Public health in the age of AI and data",
      "scope": "Integrated health records, predictive surveillance, ethics and governance of data sharing",
      "track": "Digital Health"
     },
     {
      "id": "P5",
      "title": "Resilient health systems – going forward",
      "scope": "Lessons on preparedness, surge capacity and coordination across sectors - increasing population / resources",
      "track": "Environment"
     },
     {
      "id": "P6",
      "title": "Resilient health systems – going forward",
      "scope": "Lessons on preparedness, surge capacity and coordination across sectors - disasters",
      "track": "Environment"
     },
     {
      "id": "P7",
      "title": "Resilient health systems – going forward",
      "scope": "Lessons on preparedness, surge capacity and coordination across sectors - pandemics",
      "track": "CDC"
     },
     {
      "id": "P8",
      "title": "Resilient health systems – going forward",
      "scope": "Lessons on preparedness, surge capacity, financing and coordination across sectors - aging population",
      "track": "Family Health"
     },
     {
      "id": "P9",
      "title": "Climate change trends and health impacts",
      "scope": "Re-emergence of prehistoric diseases and potential new disease due to evolution",
      "track": "Environment"
     },
     {
      "id": "P10",
      "title": "Climate change trends and health impacts",
      "scope": "Heatwaves, floods, haze, vector-borne disease, climate resilience of clinics, re-emergence of prehistoric diseases and potential new disease due to evolution",
      "track": "Environment"
     },
     {
      "id": "P11",
      "title": "Understanding the link between extreme weather, climate change and health risk : IPCC report",
      "scope": "Translating IPCC evidence on climate change and extreme weather into health risks and adaptation priorities for Malaysia.",
      "track": "Environment"
     }
    ]
   },
   {
    "type": "Symposium",
    "intro": "Panel sessions with several speakers on a focused theme.",
    "topics": [
     {
      "id": "S1",
      "title": "Cities getting to zero",
      "scope": "Fast-Track Cities, ending HIV/TB/hepatitis C, partnering with NGOs and community-led services",
      "track": "CDC"
     },
     {
      "id": "S2",
      "title": "One Health: humans and animals and environment as one system",
      "scope": "Zoonoses, antimicrobial resistance (AMR), climate and health",
      "track": "CDC/Environment"
     },
     {
      "id": "S3",
      "title": "One Health: humans and animals and environment as one system",
      "scope": "Surveillance of potential new diseases - predicting the next pandemic",
      "track": "CDC/Environment"
     },
     {
      "id": "S4",
      "title": "Public–private partnerships in primary and public care",
      "scope": "Shared care for NCDs, outsourcing screening",
      "track": "Health Management"
     },
     {
      "id": "S5",
      "title": "Cross-border and migrant health",
      "scope": "Foreign workers, undocumented populations, ASEAN collaboration on disease surveillance",
      "track": "Health Management"
     },
     {
      "id": "S6",
      "title": "Health For All",
      "scope": "Health governance across all governmental and non-governmental sectors - taking ownership",
      "track": "Health Management"
     },
     {
      "id": "S7",
      "title": "Leaving no one behind/Inclusivity",
      "scope": "Orang Asli, rural and interior communities, people with disabilities (OKU), the urban poor; Batang Padang and Perak interior as local case studies",
      "track": "Family Health"
     },
     {
      "id": "S8",
      "title": "Healthy ageing",
      "scope": "Long-term care, community-based elderly care, links between health and social welfare",
      "track": "Family Health"
     },
     {
      "id": "S9",
      "title": "NCDs beyond the clinic",
      "scope": "Tax on sugar-sweetened drinks, tobacco and vape regulation, workplace and school programmes",
      "track": "NCD"
     },
     {
      "id": "S10",
      "title": "Mental health across settings",
      "scope": "Schools, workplaces, community and digital platforms",
      "track": "NCD"
     },
     {
      "id": "S11",
      "title": "Mental Health - mitigation or prevention",
      "scope": "Root causes of mental health - heading in the right direction?",
      "track": "NCD"
     },
     {
      "id": "S12",
      "title": "Digital health and telemedicine in primary care",
      "scope": "Virtual clinics, mobile outreach, health apps, the digital divide",
      "track": "Family Health"
     },
     {
      "id": "S13",
      "title": "Sharing Experience : Rabies Outbreak in Kedah",
      "scope": "Lessons from the Kedah rabies outbreak response: One Health coordination, cross-border control, PEP management and community engagement.",
      "track": "CDC"
     },
     {
      "id": "S14",
      "title": "Behavioural Insights in Community Preparedness in Handling Natural Disaster",
      "scope": "Applying behavioural science to improve community risk perception, early warning response, evacuation and protection of vulnerable groups in natural disasters, through inter-agency and community partnerships",
      "track": "NCD/Environment"
     },
     {
      "id": "S15",
      "title": "Food Safety Vs Climate Change",
      "scope": "Climate change effects on foodborne disease risk in stored crops under heat and humidity; changing pesticide and veterinary drug use; food security vs food safety trade-offs; strengthening surveillance, early warning and inter-agency food safety systems (KKM, DOA, DVS, DOF, industry)",
      "track": "Environment"
     },
     {
      "id": "S16",
      "title": "Food Safety and Health",
      "scope": "Health promotion vs regulation vs choice for food - taking responsibility for health",
      "track": "NCD"
     },
     {
      "id": "S17",
      "title": "Carbon Neutral City and Its Impact on Environment",
      "scope": "Concept and targets of carbon-neutral or low-carbon cities; urban strategies; co-benefits for health; role of local councils, industry and communities; Malaysian low-carbon city initiatives and lessons for Perak",
      "track": "Environment"
     },
     {
      "id": "S18",
      "title": "Disproportionate Effects of Climate Change on Marginalised Community",
      "scope": "Why climate change hits marginalised groups hardest; health impacts (heat stress, floods, food and water insecurity, displacement); barriers to adaptation and access to care; climate justice and inclusive, community-led adaptation",
      "track": "Family Health"
     }
    ]
   },
   {
    "type": "Workshop",
    "intro": "Interactive, hands-on sessions in small groups.",
    "topics": [
     {
      "id": "W1",
      "title": "Preparing for Aging Society",
      "scope": "How will Malaysia sustain and continue to achieve a productive and healthy aging population",
      "track": "Family Health"
     },
     {
      "id": "W2",
      "title": "Healthy Cities",
      "scope": "Development through the lens of health",
      "track": "Health Management"
     },
     {
      "id": "W3",
      "title": "Health for All",
      "scope": "Developing policies across sectors taking ownership for health",
      "track": "Health Management"
     }
    ]
   }
  ]
};
