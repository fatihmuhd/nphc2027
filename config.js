/* =========================================================
   CONFIG — shared by the voting page and the committee dashboard.
   Edit this file only. Keep topic ids (P1, S1 …) stable once voting starts.
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
  ages: ["Under 30","30–39","40–49","50–59","60 and above"],
  years: ["Less than 5","5–10","11–20","More than 20"],
  // Topics: Scientific Committee proposals (13NPHC 2027 Scientific Programme Update: P1–P11, S1–S18)
  // plus the FIBM review (8 plenaries → P12–P19; 9 symposia → S19–S27; 7 reserve symposia → S28–S34).
  // "src" is shown to the committee only; respondents see one combined list.
  sessions: [
   {
    "type": "Plenary",
    "intro": "Keynote sessions for all delegates on the conference's big themes.",
    "topics": [
     {
      "id": "P1",
      "title": "UHC financing: who pays and who benefits",
      "scope": "Health financing reform, strategic purchasing, role of the private sector and insurance in getting to UHC",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "P1"
     },
     {
      "id": "P2",
      "title": "Public Health Reform",
      "scope": "",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "P2"
     },
     {
      "id": "P3",
      "title": "Healthy Cities: health governance beyond the health ministry",
      "scope": "Local councils, urban planning, transport and housing as drivers of health",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "P3"
     },
     {
      "id": "P4",
      "title": "Public health in the age of AI and data",
      "scope": "Integrated health records, predictive surveillance, ethics and governance of data sharing",
      "track": "Digital Health",
      "src": "Scientific Committee",
      "srcCode": "P4"
     },
     {
      "id": "P5",
      "title": "Resilient health systems: growing population and resources",
      "scope": "Preparedness, surge capacity and coordination across sectors for a growing population with limited resources",
      "track": "Environment / NCD",
      "src": "Scientific Committee",
      "srcCode": "P5"
     },
     {
      "id": "P6",
      "title": "Resilient health systems: disasters, pandemics and genetic surveillance",
      "scope": "Preparedness, surge capacity and coordination across sectors for disasters and pandemics; genetic surveillance",
      "track": "Environment / CDC",
      "src": "Scientific Committee",
      "srcCode": "P6"
     },
     {
      "id": "P7",
      "title": "Resilient health systems: tackling an ageing population",
      "scope": "Preparedness, surge capacity, financing and coordination across sectors for an ageing population",
      "track": "Family Health / NCD",
      "src": "Scientific Committee",
      "srcCode": "P7"
     },
     {
      "id": "P8",
      "title": "Climate change trends and health impacts",
      "scope": "Heatwaves, floods, haze, vector-borne disease, climate resilience of clinics, re-emergence of prehistoric diseases and potential new disease due to evolution",
      "track": "Environment / CDC",
      "src": "Scientific Committee",
      "srcCode": "P8"
     },
     {
      "id": "P9",
      "title": "Extreme weather, climate change and health risk: IPCC report",
      "scope": "Translating IPCC evidence on climate change and extreme weather into health risks and adaptation priorities for Malaysia.",
      "track": "Environment",
      "src": "Scientific Committee",
      "srcCode": "P9"
     },
     {
      "id": "P10",
      "title": "Beyond illness: promoting wellbeing in communities and the workplace",
      "scope": "",
      "track": "Occupational Health",
      "src": "Scientific Committee",
      "srcCode": "P10"
     },
     {
      "id": "P11",
      "title": "Misinformation in IT and mental health",
      "scope": "Cyberbullying, scams and online misinformation",
      "track": "Digital Health",
      "src": "Scientific Committee",
      "srcCode": "P11"
     },
     {
      "id": "P12",
      "title": "Beyond Equal Access: Addressing the Structural Determinants of Health Equity",
      "scope": "Structural inequities, social justice and equitable resource allocation",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P1"
     },
     {
      "id": "P13",
      "title": "Financing Health for All: Who Pays, Who Benefits and Who Is Left Behind?",
      "scope": "Health financing, economics, prioritisation and financial protection",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P2"
     },
     {
      "id": "P14",
      "title": "When Commercial Interests Shape Public Health: Where Should We Draw the Line?",
      "scope": "Commercial determinants, regulation and corporate accountability",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P3"
     },
     {
      "id": "P15",
      "title": "The Digital Determinants of Health: Who Shapes Our Health in an Algorithmic World?",
      "scope": "AI, digital environments, governance and equity",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P4"
     },
     {
      "id": "P16",
      "title": "Beyond Access: Measuring What Really Matters in Universal Health Coverage",
      "scope": "Quality, effective coverage and health system accountability",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P5"
     },
     {
      "id": "P17",
      "title": "Beyond Longer Lives: Rethinking Health and Social Care for an Ageing Society",
      "scope": "Demographic transition, functional health and long-term care",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P6"
     },
     {
      "id": "P18",
      "title": "A Warming World, Unequal Consequences: Climate Justice and Public Health Action",
      "scope": "Climate adaptation, planetary health and equity",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P7"
     },
     {
      "id": "P19",
      "title": "Reimagining Public Health: Leadership, Trust and the Courage to Act",
      "scope": "Public health reform, political economy, institutional trust and leadership",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM P8"
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
      "track": "CDC",
      "src": "Scientific Committee",
      "srcCode": "S1"
     },
     {
      "id": "S2",
      "title": "One Health: humans and animals and environment as one system",
      "scope": "Zoonoses, antimicrobial resistance (AMR), climate and health",
      "track": "CDC/Environment",
      "src": "Scientific Committee",
      "srcCode": "S2"
     },
     {
      "id": "S3",
      "title": "One Health: humans and animals and environment as one system",
      "scope": "Surveillance of potential new diseases - predicting the next pandemic",
      "track": "CDC/Environment",
      "src": "Scientific Committee",
      "srcCode": "S3"
     },
     {
      "id": "S4",
      "title": "Public–private partnerships in primary and public care",
      "scope": "Shared care for NCDs, outsourcing screening",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "S4"
     },
     {
      "id": "S5",
      "title": "Cross-border and migrant health",
      "scope": "Foreign workers, undocumented populations, ASEAN collaboration on disease surveillance",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "S5"
     },
     {
      "id": "S6",
      "title": "Health For All",
      "scope": "Health governance across all governmental and non-governmental sectors - taking ownership",
      "track": "Health Management",
      "src": "Scientific Committee",
      "srcCode": "S6"
     },
     {
      "id": "S7",
      "title": "Leaving no one behind/Inclusivity",
      "scope": "Orang Asli, rural and interior communities, people with disabilities (OKU), the urban poor; Batang Padang and Perak interior as local case studies",
      "track": "Family Health",
      "src": "Scientific Committee",
      "srcCode": "S7"
     },
     {
      "id": "S8",
      "title": "Healthy ageing",
      "scope": "Long-term care, community-based elderly care, links between health and social welfare",
      "track": "Family Health",
      "src": "Scientific Committee",
      "srcCode": "S8"
     },
     {
      "id": "S9",
      "title": "NCDs beyond the clinic",
      "scope": "Tax on sugar-sweetened drinks, tobacco and vape regulation, workplace and school programmes",
      "track": "NCD",
      "src": "Scientific Committee",
      "srcCode": "S9"
     },
     {
      "id": "S10",
      "title": "Mental health across settings",
      "scope": "Schools, workplaces, community and digital platforms",
      "track": "NCD",
      "src": "Scientific Committee",
      "srcCode": "S10"
     },
     {
      "id": "S11",
      "title": "Mental Health - mitigation or prevention",
      "scope": "Root causes of mental health - heading in the right direction?",
      "track": "NCD",
      "src": "Scientific Committee",
      "srcCode": "S11"
     },
     {
      "id": "S12",
      "title": "Digital health and telemedicine in primary care",
      "scope": "Virtual clinics, mobile outreach, health apps, the digital divide",
      "track": "Family Health",
      "src": "Scientific Committee",
      "srcCode": "S12"
     },
     {
      "id": "S13",
      "title": "Sharing Experience : Rabies Outbreak in Kedah",
      "scope": "Lessons from the Kedah rabies outbreak response: One Health coordination, cross-border control, PEP management and community engagement.",
      "track": "CDC",
      "src": "Scientific Committee",
      "srcCode": "S13"
     },
     {
      "id": "S14",
      "title": "Behavioural Insights in Community Preparedness in Handling Natural Disaster",
      "scope": "Applying behavioural science to improve community risk perception, early warning response, evacuation and protection of vulnerable groups in natural disasters, through inter-agency and community partnerships",
      "track": "NCD/Environment",
      "src": "Scientific Committee",
      "srcCode": "S14"
     },
     {
      "id": "S15",
      "title": "Food Safety Vs Climate Change",
      "scope": "Climate change effects on foodborne disease risk in stored crops under heat and humidity; changing pesticide and veterinary drug use; food security vs food safety trade-offs; strengthening surveillance, early warning and inter-agency food safety systems (KKM, DOA, DVS, DOF, industry)",
      "track": "Environment",
      "src": "Scientific Committee",
      "srcCode": "S15"
     },
     {
      "id": "S16",
      "title": "Food Safety and Health",
      "scope": "Health promotion vs regulation vs choice for food - taking responsibility for health",
      "track": "NCD",
      "src": "Scientific Committee",
      "srcCode": "S16"
     },
     {
      "id": "S17",
      "title": "Carbon Neutral City and Its Impact on Environment",
      "scope": "Concept and targets of carbon-neutral or low-carbon cities; urban strategies; co-benefits for health; role of local councils, industry and communities; Malaysian low-carbon city initiatives and lessons for Perak",
      "track": "Environment",
      "src": "Scientific Committee",
      "srcCode": "S17"
     },
     {
      "id": "S18",
      "title": "Disproportionate Effects of Climate Change on Marginalised Community",
      "scope": "Why climate change hits marginalised groups hardest; health impacts (heat stress, floods, food and water insecurity, displacement); barriers to adaptation and access to care; climate justice and inclusive, community-led adaptation",
      "track": "Family Health",
      "src": "Scientific Committee",
      "srcCode": "S18"
     },
     {
      "id": "S19",
      "title": "The Missing Men: Making Health Systems More Responsive to Men and Boys",
      "scope": "Men's health policy; masculinity and health-seeking behaviour; male-responsive preventive services",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S1"
     },
     {
      "id": "S20",
      "title": "Health Beyond Citizenship",
      "scope": "Migrant health and financing; cross-border surveillance; inclusive service delivery",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S2"
     },
     {
      "id": "S21",
      "title": "Beyond Disease Silos: Integrating NCDs and Mental Health",
      "scope": "Shared determinants; integrated primary care; community-based interventions",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S3"
     },
     {
      "id": "S22",
      "title": "Making One Health Work",
      "scope": "AMR; emerging zoonoses; integrated surveillance and pandemic prevention",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S4"
     },
     {
      "id": "S23",
      "title": "Ageing in Place: From Healthy Ageing to Integrated Care",
      "scope": "Frailty and functional ability; integrated health and social care; caregiver support",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S5"
     },
     {
      "id": "S24",
      "title": "Growing Up Online: Protecting the Health of the Next Generation",
      "scope": "Digital harms and evidence; adolescent mental health; platform governance and regulation",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S6"
     },
     {
      "id": "S25",
      "title": "Healthy Cities by Design, Not by Chance",
      "scope": "Urban planning and active mobility; healthy food environments; local government and health governance",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S7"
     },
     {
      "id": "S26",
      "title": "Digital Transformation Beyond the Pilot Project",
      "scope": "Interoperability and continuity of care; responsible AI applications; implementation and digital inclusion",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S8"
     },
     {
      "id": "S27",
      "title": "Building Climate-Resilient Communities and Health Systems",
      "scope": "Heat and occupational health; climate-resilient facilities and disaster preparedness; food and water security",
      "track": "",
      "src": "FIBM review",
      "srcCode": "FIBM S9"
     },
     {
      "id": "S28",
      "title": "Who Counts? Who Is Counted? Who Is Missing from Our Data?",
      "scope": "Data equity and invisible populations",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 1"
     },
     {
      "id": "S29",
      "title": "Can We Medicate Our Way Out of the Obesity Epidemic?",
      "scope": "Obesity and new pharmacological interventions",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 2"
     },
     {
      "id": "S30",
      "title": "Breaking Professional Boundaries: Redesigning the Health Workforce",
      "scope": "Health workforce sustainability; task sharing and workforce innovation",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 3"
     },
     {
      "id": "S31",
      "title": "Beyond Maternal Health: Women's Health Across the Life Course",
      "scope": "Women's health beyond reproduction",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 4"
     },
     {
      "id": "S32",
      "title": "Why Good Evidence Fails to Become Good Policy",
      "scope": "Implementation science",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 5"
     },
     {
      "id": "S33",
      "title": "From Screening to Elimination: Closing the Gaps in the Continuum of Care",
      "scope": "Prevention and disease elimination",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 6"
     },
     {
      "id": "S34",
      "title": "Beyond Outreach: Indigenous Communities as Partners in Health",
      "scope": "Indigenous health",
      "track": "",
      "src": "FIBM review (reserve)",
      "srcCode": "FIBM Reserve 7"
     }
    ]
   }
  ]
};
