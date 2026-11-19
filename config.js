/* =========================================================
   CONFIG — shared by the voting page and the committee dashboard.
   Edit this file only. Keep subject ids stable once voting starts.
   ========================================================= */
window.CONFIG = {
  conferenceName: "13th National Public Health Conference (NPHC 2027)",
  shortName: "NPHC 2027",
  organiser: "NPHC 2027 Scientific Committee",
  tagline: "Help shape the scientific programme. Vote for the subjects you most want to see at NPHC 2027.",
  deadline: "31 January 2027",                           // ← confirm
  websiteUrl: "",                                        // conference website, shown on the thank-you screen
  maxVotes: 10,                                          // subjects each voter can pick (across all topics)
  // Leave empty for prototype mode. After deploying the worker, paste its URL here (no trailing slash).
  endpoint: "https://nphc2027-vote.alfatihpahrol.workers.dev",
  roles: ["Public Health Physician / Specialist","Clinical Specialist / Consultant","Medical Officer","Trainee (Master / DrPH / Specialist programme)","Academic / Researcher","Programme Manager / Policy Maker","Other health professional"],
  specialties: ["Public Health Medicine – Epidemiology","Public Health Medicine – Communicable Disease Control","Public Health Medicine – Non-Communicable Disease","Public Health Medicine – Health Services Management","Public Health Medicine – Environmental Health","Public Health Medicine – Occupational Health","Public Health Medicine – Family / Maternal & Child Health","Public Health Medicine – Health Promotion","Public Health Medicine – Nutrition","Family Medicine","Infectious Disease","Internal Medicine","Paediatrics","Obstetrics & Gynaecology","Psychiatry","Emergency Medicine","Geriatrics","Pathology / Microbiology","Health Informatics","Other"],
  years: ["Less than 5","5–10","11–20","More than 20"],
  // Topics and subjects from "2027 Public Health Conference Subjects" (16 topics, 320 subjects).
  // status = New proposal / Returning (shown to the committee only).
  categories: [
   {
    "no": 1,
    "name": "Climate change and health",
    "topics": [
     {
      "id": "t01s01",
      "title": "From heat alerts to district action: thresholds, lead times and responsibilities for health services",
      "status": "Returning"
     },
     {
      "id": "t01s02",
      "title": "Estimating heat-related deaths and admissions in tropical cities and rural districts",
      "status": "Returning"
     },
     {
      "id": "t01s03",
      "title": "Workplace heat protection for outdoor workers in plantations, construction and municipal crews",
      "status": "Returning"
     },
     {
      "id": "t01s04",
      "title": "Community-led heat adaptation in low-income flats and rural settlements",
      "status": "Returning"
     },
     {
      "id": "t01s05",
      "title": "Climate-proofing Klinik Kesihatan: facility vulnerability assessments and adaptation budgets",
      "status": "Returning"
     },
     {
      "id": "t01s06",
      "title": "How changing rainfall and temperature affect vector-borne disease risk across ASEAN",
      "status": "Returning"
     },
     {
      "id": "t01s07",
      "title": "Tracking health indicators and financing under Malaysia’s climate adaptation plans",
      "status": "Returning"
     },
     {
      "id": "t01s08",
      "title": "Compound heat and haze events: estimating joint impacts on respiratory and cardiovascular care",
      "status": "New"
     },
     {
      "id": "t01s09",
      "title": "Night-time heat, poor housing ventilation and sleep in dense tropical neighbourhoods",
      "status": "New"
     },
     {
      "id": "t01s10",
      "title": "Protecting renal patients during heatwaves and water disruptions",
      "status": "New"
     },
     {
      "id": "t01s11",
      "title": "Heat exposure in school classrooms and evaluation of timetable or cooling interventions",
      "status": "New"
     },
     {
      "id": "t01s12",
      "title": "Heat health thresholds for pregnancy, infancy and the postpartum period",
      "status": "New"
     },
     {
      "id": "t01s13",
      "title": "Using satellite and reanalysis data to map heat exposure where weather stations are sparse",
      "status": "New"
     },
     {
      "id": "t01s14",
      "title": "Cool roofs, shade corridors and bus-stop design: measuring intervention effects",
      "status": "New"
     },
     {
      "id": "t01s15",
      "title": "Forecasting climate-sensitive demand for ambulance, emergency and primary care services",
      "status": "New"
     },
     {
      "id": "t01s16",
      "title": "Drought, water rationing and household drinking-water safety",
      "status": "New"
     },
     {
      "id": "t01s17",
      "title": "Sea-level rise, saline intrusion and health in low-lying coastal communities",
      "status": "New"
     },
     {
      "id": "t01s18",
      "title": "Health impacts of climate-related livelihood loss among fishers and smallholders",
      "status": "New"
     },
     {
      "id": "t01s19",
      "title": "Estimating health co-benefits of cleaner transport and energy transition",
      "status": "New"
     },
     {
      "id": "t01s20",
      "title": "Climate-smart procurement and low-carbon service delivery in public health facilities",
      "status": "New"
     }
    ]
   },
   {
    "no": 2,
    "name": "AI in public health and healthcare",
    "topics": [
     {
      "id": "t02s01",
      "title": "Validating AI outbreak forecasts against routine early-warning methods at district level",
      "status": "Returning"
     },
     {
      "id": "t02s02",
      "title": "AI-assisted retinal imaging for cardiovascular and kidney risk in primary care",
      "status": "Returning"
     },
     {
      "id": "t02s03",
      "title": "Evaluating AI-assisted chest X-ray screening in community services",
      "status": "Returning"
     },
     {
      "id": "t02s04",
      "title": "AI-assisted osteoporosis screening and referral completion in primary care",
      "status": "Returning"
     },
     {
      "id": "t02s05",
      "title": "AI-supported specialist referral in rural clinics and remote islands",
      "status": "Returning"
     },
     {
      "id": "t02s06",
      "title": "Benchmarking clinical accuracy and safety of health chatbots in infectious disease scenarios",
      "status": "Returning"
     },
     {
      "id": "t02s07",
      "title": "Conversational AI for weight and cardiometabolic risk coaching",
      "status": "Returning"
     },
     {
      "id": "t02s08",
      "title": "What makes an AI pilot sustainable after it enters routine health services?",
      "status": "Returning"
     },
     {
      "id": "t02s09",
      "title": "Can AI prioritise which patients with diabetes need outreach between clinic visits?",
      "status": "New"
     },
     {
      "id": "t02s10",
      "title": "Language equity in AI triage for Malay, Mandarin, Tamil and local languages",
      "status": "New"
     },
     {
      "id": "t02s11",
      "title": "Measuring diagnostic and referral bias across ethnicity, sex, age and disability",
      "status": "New"
     },
     {
      "id": "t02s12",
      "title": "Prospective evaluation of emergency department crowding forecasts",
      "status": "New"
     },
     {
      "id": "t02s13",
      "title": "AI-assisted defaulter tracing for immunisation and chronic disease appointments",
      "status": "New"
     },
     {
      "id": "t02s14",
      "title": "Auditing false reassurance and unsafe escalation advice in maternal health chatbots",
      "status": "New"
     },
     {
      "id": "t02s15",
      "title": "Monitoring model performance drift after rollout across states and facilities",
      "status": "New"
     },
     {
      "id": "t02s16",
      "title": "Using explainable AI to prioritise home visits for frail older adults",
      "status": "New"
     },
     {
      "id": "t02s17",
      "title": "AI-assisted ambulance dispatch: balancing population coverage and travel times",
      "status": "New"
     },
     {
      "id": "t02s18",
      "title": "Automating clinical note generation: effects on documentation burden and accuracy",
      "status": "New"
     },
     {
      "id": "t02s19",
      "title": "Using satellite imagery and machine learning to identify areas with poor service access",
      "status": "New"
     },
     {
      "id": "t02s20",
      "title": "Using AI-supported triage to prioritise follow-up after abnormal cervical screening",
      "status": "New"
     }
    ]
   },
   {
    "no": 3,
    "name": "Digital health and data governance",
    "topics": [
     {
      "id": "t03s01",
      "title": "Interoperable records across public and private primary care in Malaysia",
      "status": "Returning"
     },
     {
      "id": "t03s02",
      "title": "Co-designing accessible health platforms with rural and low-literacy communities",
      "status": "Returning"
     },
     {
      "id": "t03s03",
      "title": "Linking health records, surveillance and census data for precision public health",
      "status": "Returning"
     },
     {
      "id": "t03s04",
      "title": "Digital continuity of care during incarceration and after release",
      "status": "Returning"
     },
     {
      "id": "t03s05",
      "title": "Governance of biomedical and genomic data ownership, sharing and secondary use",
      "status": "Returning"
     },
     {
      "id": "t03s06",
      "title": "Privacy and accountability in health AI and clinical data reuse",
      "status": "Returning"
     },
     {
      "id": "t03s07",
      "title": "Translating accreditation safeguards for AI into health-data governance practice",
      "status": "Returning"
     },
     {
      "id": "t03s08",
      "title": "Common standards for linking maternal, child and immunisation records",
      "status": "New"
     },
     {
      "id": "t03s09",
      "title": "A master patient index that accommodates people without standard identity documents",
      "status": "New"
     },
     {
      "id": "t03s10",
      "title": "Patient-controlled access, proxy consent and family access to digital records",
      "status": "New"
     },
     {
      "id": "t03s11",
      "title": "Federated analytics for multi-hospital research with data held locally",
      "status": "New"
     },
     {
      "id": "t03s12",
      "title": "Secure linkage of district diarrhoeal disease, water quality and weather data",
      "status": "New"
     },
     {
      "id": "t03s13",
      "title": "Patient notification and service continuity after a health-data breach",
      "status": "New"
     },
     {
      "id": "t03s14",
      "title": "Managing duplicate notifications and incompatible codes across surveillance systems",
      "status": "New"
     },
     {
      "id": "t03s15",
      "title": "Offline-first digital registration and referrals for Orang Asli and remote clinics",
      "status": "New"
     },
     {
      "id": "t03s16",
      "title": "Carrying verified vaccination records across ASEAN borders",
      "status": "New"
     },
     {
      "id": "t03s17",
      "title": "Closing the digital gap in appointment booking, including assisted channels",
      "status": "New"
     },
     {
      "id": "t03s18",
      "title": "Procurement rules for data portability when health IT vendors change",
      "status": "New"
     },
     {
      "id": "t03s19",
      "title": "Audit trails and minimum privacy safeguards for health dashboards and mapping",
      "status": "New"
     },
     {
      "id": "t03s20",
      "title": "Data completeness and turnaround metrics for district surveillance dashboards",
      "status": "New"
     }
    ]
   },
   {
    "no": 4,
    "name": "Infectious disease surveillance and health security",
    "topics": [
     {
      "id": "t04s01",
      "title": "Evaluating AI and climate-informed dengue early warnings against district action thresholds",
      "status": "Returning"
     },
     {
      "id": "t04s02",
      "title": "Assessing the feasibility and added value of wastewater TB surveillance",
      "status": "Returning"
     },
     {
      "id": "t04s03",
      "title": "One Health surveillance for zoonotic malaria in forest-fringe communities",
      "status": "Returning"
     },
     {
      "id": "t04s04",
      "title": "Coordinating outbreak alerts and response at ASEAN border crossings",
      "status": "Returning"
     },
     {
      "id": "t04s05",
      "title": "Measuring equitable access to vaccines during emergency rollouts",
      "status": "Returning"
     },
     {
      "id": "t04s06",
      "title": "Maintaining outbreak detection and response in humanitarian settings",
      "status": "Returning"
     },
     {
      "id": "t04s07",
      "title": "Integrating animal, human and environmental signals for zoonotic disease surveillance",
      "status": "Returning"
     },
     {
      "id": "t04s08",
      "title": "Comparing Wolbachia monitoring, routine vector indices and dengue case trends",
      "status": "New"
     },
     {
      "id": "t04s09",
      "title": "Tracking dengue service demand and activation of surge capacity across districts",
      "status": "New"
     },
     {
      "id": "t04s10",
      "title": "Strengthening TB contact investigation across households, workplaces and correctional settings",
      "status": "New"
     },
     {
      "id": "t04s11",
      "title": "Public-private TB notification completeness and continuity of care for mobile workers",
      "status": "New"
     },
     {
      "id": "t04s12",
      "title": "Closing measles immunity gaps with district-level coverage and outbreak data",
      "status": "New"
     },
     {
      "id": "t04s13",
      "title": "Using school and childcare absenteeism to support HFMD outbreak detection",
      "status": "New"
     },
     {
      "id": "t04s14",
      "title": "Integrated human and animal rabies surveillance and post-exposure care access",
      "status": "New"
     },
     {
      "id": "t04s15",
      "title": "Joint WASH and surveillance indicators for post-flood leptospirosis prevention",
      "status": "New"
     },
     {
      "id": "t04s16",
      "title": "Coordinated foodborne outbreak investigation when cases span districts or borders",
      "status": "New"
     },
     {
      "id": "t04s17",
      "title": "Managing serotype and clinical severity surveillance for endemic dengue",
      "status": "New"
     },
     {
      "id": "t04s18",
      "title": "Identifying healthcare access gaps in malaria diagnosis for remote settlements",
      "status": "New"
     },
     {
      "id": "t04s19",
      "title": "Measuring detection, notification and response timeliness using the 7-1-7 framework",
      "status": "New"
     },
     {
      "id": "t04s20",
      "title": "Community event-based surveillance through clinics, schools and local associations",
      "status": "New"
     }
    ]
   },
   {
    "no": 5,
    "name": "HIV prevention and harm reduction",
    "topics": [
     {
      "id": "t05s01",
      "title": "Digital-to-clinic linkage after online or self-administered HIV testing",
      "status": "Returning"
     },
     {
      "id": "t05s02",
      "title": "Campus, mobile and community HIV testing to reach young adults",
      "status": "Returning"
     },
     {
      "id": "t05s03",
      "title": "Addressing healthcare stigma that limits uptake of HIV and STI prevention services",
      "status": "Returning"
     },
     {
      "id": "t05s04",
      "title": "Adapting peer-led HIV harm-reduction programmes to different Southeast Asian settings",
      "status": "Returning"
     },
     {
      "id": "t05s05",
      "title": "Measuring the expected benefits and harms of vaping as a tobacco harm-reduction strategy",
      "status": "Returning"
     },
     {
      "id": "t05s06",
      "title": "Estimating the health and social cost of punitive drug policy and alternative responses",
      "status": "Returning"
     },
     {
      "id": "t05s07",
      "title": "Identifying gaps in insurance and financial protection for harm-reduction service users",
      "status": "Returning"
     },
     {
      "id": "t05s08",
      "title": "Scaling pre-exposure prophylaxis (PrEP) through Klinik Kesihatan and community partners",
      "status": "New"
     },
     {
      "id": "t05s09",
      "title": "PrEP continuation and re-engagement after missed visits",
      "status": "New"
     },
     {
      "id": "t05s10",
      "title": "Monitoring equitable access to post-exposure prophylaxis across districts",
      "status": "New"
     },
     {
      "id": "t05s11",
      "title": "Evaluating pharmacy distribution of HIV self-test kits and voucher-based access",
      "status": "New"
     },
     {
      "id": "t05s12",
      "title": "Understanding late HIV diagnosis and the points at which testing opportunities are missed",
      "status": "New"
     },
     {
      "id": "t05s13",
      "title": "Integrating hepatitis C testing and treatment into harm-reduction services",
      "status": "New"
     },
     {
      "id": "t05s14",
      "title": "Expanding opioid agonist treatment and retention in underserved districts",
      "status": "New"
     },
     {
      "id": "t05s15",
      "title": "Evaluating overdose prevention and emergency referral in community settings",
      "status": "New"
     },
     {
      "id": "t05s16",
      "title": "Maintaining HIV and substance-use treatment during incarceration and after release",
      "status": "New"
     },
     {
      "id": "t05s17",
      "title": "Delivering adolescent cessation support for vaping through schools and clinics",
      "status": "New"
     },
     {
      "id": "t05s18",
      "title": "Assessing Act 852 enforcement patterns and underage access to smoking products",
      "status": "New"
     },
     {
      "id": "t05s19",
      "title": "Linking district HIV prevention, sexual health and substance-use service planning",
      "status": "New"
     },
     {
      "id": "t05s20",
      "title": "Building peer navigator models for people with HIV who disengage from care",
      "status": "New"
     }
    ]
   },
   {
    "no": 6,
    "name": "Environmental exposures and chemical safety",
    "topics": [
     {
      "id": "t06s01",
      "title": "Prenatal PFAS exposure and child development in Southeast Asian birth cohorts",
      "status": "Returning"
     },
     {
      "id": "t06s02",
      "title": "Endocrine-disrupting chemical exposure and childhood metabolic outcomes",
      "status": "Returning"
     },
     {
      "id": "t06s03",
      "title": "Evidence on microplastics and kidney or liver health in Asian populations",
      "status": "Returning"
     },
     {
      "id": "t06s04",
      "title": "Using linked insurance and administrative data to study long-term chemical exposure",
      "status": "Returning"
     },
     {
      "id": "t06s05",
      "title": "District chemical incident readiness and exposure follow-up after industrial releases",
      "status": "Returning"
     },
     {
      "id": "t06s06",
      "title": "Long-term respiratory and cancer outcomes near petrochemical and manufacturing zones",
      "status": "Returning"
     },
     {
      "id": "t06s07",
      "title": "Asbestos exposure registries, community reporting and remote-sensing applications",
      "status": "Returning"
     },
     {
      "id": "t06s08",
      "title": "Wastewater monitoring of environmental chemicals and prioritisation for follow-up",
      "status": "Returning"
     },
     {
      "id": "t06s09",
      "title": "Source apportionment of urban PM2.5 and assessment of health burden by source",
      "status": "New"
     },
     {
      "id": "t06s10",
      "title": "Transboundary haze exposure among children, older adults and outdoor workers",
      "status": "New"
     },
     {
      "id": "t06s11",
      "title": "Low-cost air sensor networks: calibration, placement and public-facing interpretation",
      "status": "New"
     },
     {
      "id": "t06s12",
      "title": "Measuring lead exposure among children near informal recycling and repair activities",
      "status": "New"
     },
     {
      "id": "t06s13",
      "title": "Pesticide exposure surveillance for agricultural households and plantation communities",
      "status": "New"
     },
     {
      "id": "t06s14",
      "title": "Protecting private wells and small rural water supplies from chemical contamination",
      "status": "New"
     },
     {
      "id": "t06s15",
      "title": "Household exposure to cleaning products and indoor air quality in childcare settings",
      "status": "New"
     },
     {
      "id": "t06s16",
      "title": "Using community biomonitoring to identify environmental health inequalities",
      "status": "New"
     },
     {
      "id": "t06s17",
      "title": "Assessing electronic waste and battery recycling sites for community exposure",
      "status": "New"
     },
     {
      "id": "t06s18",
      "title": "Health impact assessment for new industrial corridors, ports and logistics hubs",
      "status": "New"
     },
     {
      "id": "t06s19",
      "title": "Reassessing routine air monitoring coverage for schools and healthcare facilities",
      "status": "New"
     },
     {
      "id": "t06s20",
      "title": "Responding to community concerns about contaminated fish and recreational waters",
      "status": "New"
     }
    ]
   },
   {
    "no": 7,
    "name": "Occupational health and patient safety",
    "topics": [
     {
      "id": "t07s01",
      "title": "Measuring carbon monoxide exposure for motorcycle delivery workers",
      "status": "Returning"
     },
     {
      "id": "t07s02",
      "title": "Occupational risks from cold exposure, manual handling and repetitive work in warehouses",
      "status": "Returning"
     },
     {
      "id": "t07s03",
      "title": "Monitoring indoor air quality and formaldehyde in office and commercial settings",
      "status": "Returning"
     },
     {
      "id": "t07s04",
      "title": "Preventing customer aggression and evaluating mental health outcomes among retail workers",
      "status": "Returning"
     },
     {
      "id": "t07s05",
      "title": "Strengthening device reprocessing and measuring infection risks from reusable equipment",
      "status": "Returning"
     },
     {
      "id": "t07s06",
      "title": "Using antibiotic stewardship indicators to improve facility-level patient safety",
      "status": "Returning"
     },
     {
      "id": "t07s07",
      "title": "Assessing worker and patient safety in hospital waste and linen handling",
      "status": "Returning"
     },
     {
      "id": "t07s08",
      "title": "Measuring and comparing patient safety incidents across public and private facilities",
      "status": "Returning"
     },
     {
      "id": "t07s09",
      "title": "Operationalising occupational health coverage for gig and informal workers",
      "status": "New"
     },
     {
      "id": "t07s10",
      "title": "Fatigue-related risks among shift workers, ambulance crews and long-distance drivers",
      "status": "New"
     },
     {
      "id": "t07s11",
      "title": "Prevention and follow-up of needlestick injuries among clinical and cleaning staff",
      "status": "New"
     },
     {
      "id": "t07s12",
      "title": "Mental health and workplace violence prevention for frontline healthcare workers",
      "status": "New"
     },
     {
      "id": "t07s13",
      "title": "Strengthening early detection of occupational asthma and other work-related lung diseases",
      "status": "New"
     },
     {
      "id": "t07s14",
      "title": "Occupational hearing conservation for construction and small manufacturing firms",
      "status": "New"
     },
     {
      "id": "t07s15",
      "title": "Safer return-to-work pathways after injury, cancer treatment or prolonged illness",
      "status": "New"
     },
     {
      "id": "t07s16",
      "title": "Implementing fair incident review and reporting systems in district health facilities",
      "status": "New"
     },
     {
      "id": "t07s17",
      "title": "Improving medication safety at transitions between hospitals, clinics and home care",
      "status": "New"
     },
     {
      "id": "t07s18",
      "title": "Identifying high-risk sectors for low reporting of occupational disease and injury",
      "status": "New"
     },
     {
      "id": "t07s19",
      "title": "Occupational safety for migrant workers facing language and reporting barriers",
      "status": "New"
     },
     {
      "id": "t07s20",
      "title": "Monitoring and preventing injuries among sanitation, waste and recycling workers",
      "status": "New"
     }
    ]
   },
   {
    "no": 8,
    "name": "Disaster and humanitarian preparedness",
    "topics": [
     {
      "id": "t08s01",
      "title": "Using river-level and flood alerts to trigger readiness actions in district health services",
      "status": "Returning"
     },
     {
      "id": "t08s02",
      "title": "Translating lessons from disaster medical response planning into district exercises",
      "status": "Returning"
     },
     {
      "id": "t08s03",
      "title": "Civilian, military and emergency medical coordination during large-scale crises",
      "status": "Returning"
     },
     {
      "id": "t08s04",
      "title": "Using age, sex and disability data to improve humanitarian health response",
      "status": "Returning"
     },
     {
      "id": "t08s05",
      "title": "Integrating disaster risk reduction into local development and facility siting",
      "status": "Returning"
     },
     {
      "id": "t08s06",
      "title": "Maintaining health-system resilience and service continuity during major disruptions",
      "status": "Returning"
     },
     {
      "id": "t08s07",
      "title": "Public health readiness for dam and reservoir emergencies in vulnerable districts",
      "status": "New"
     },
     {
      "id": "t08s08",
      "title": "Turning tabletop exercise findings into corrective actions and retesting arrangements",
      "status": "New"
     },
     {
      "id": "t08s09",
      "title": "Protecting dialysis, oxygen and insulin-dependent patients during evacuation",
      "status": "New"
     },
     {
      "id": "t08s10",
      "title": "Minimum health, WASH and accessibility standards for temporary evacuation centres",
      "status": "New"
     },
     {
      "id": "t08s11",
      "title": "Maintaining vaccine cold chains during floods and extended blackouts",
      "status": "New"
     },
     {
      "id": "t08s12",
      "title": "Restoring maternal and newborn services after disasters in remote areas",
      "status": "New"
     },
     {
      "id": "t08s13",
      "title": "Primary care continuity when roads, bridges or ferry routes become inaccessible",
      "status": "New"
     },
     {
      "id": "t08s14",
      "title": "Public health response to concurrent floods, disease outbreaks and misinformation",
      "status": "New"
     },
     {
      "id": "t08s15",
      "title": "Formalising health, welfare and local government handovers at district operations centres",
      "status": "New"
     },
     {
      "id": "t08s16",
      "title": "Supporting affected households and frontline responders with psychological first aid",
      "status": "New"
     },
     {
      "id": "t08s17",
      "title": "Risk communication during emergency evacuations in multilingual communities",
      "status": "New"
     },
     {
      "id": "t08s18",
      "title": "Surveillance and prevention of injuries during flood clean-up and recovery",
      "status": "New"
     },
     {
      "id": "t08s19",
      "title": "Measuring recovery time and missed care after clinic or hospital disruption",
      "status": "New"
     },
     {
      "id": "t08s20",
      "title": "Regional mutual aid for emergency medicines, supplies and surge personnel",
      "status": "New"
     }
    ]
   },
   {
    "no": 9,
    "name": "Health systems, financing and access",
    "topics": [
     {
      "id": "t09s01",
      "title": "Redesigning primary care to reduce income-related gaps in service use",
      "status": "Returning"
     },
     {
      "id": "t09s02",
      "title": "Comparing financial protection options for low-income households with chronic illness",
      "status": "Returning"
     },
     {
      "id": "t09s03",
      "title": "District facility planning for integrated services across clinic and hospital networks",
      "status": "Returning"
     },
     {
      "id": "t09s04",
      "title": "Evaluating public-private-academic partnerships for delivery of population health services",
      "status": "Returning"
     },
     {
      "id": "t09s05",
      "title": "Comparing options for healthcare access for migrant workers and their families",
      "status": "Returning"
     },
     {
      "id": "t09s06",
      "title": "Measuring how income affects the value patients receive from healthcare spending",
      "status": "Returning"
     },
     {
      "id": "t09s07",
      "title": "Using social needs assessment to inform healthcare coverage and referral decisions",
      "status": "Returning"
     },
     {
      "id": "t09s08",
      "title": "Community-based health teams for remote villages and plantation communities",
      "status": "New"
     },
     {
      "id": "t09s09",
      "title": "Comparing payment models for contracting private general practitioners",
      "status": "New"
     },
     {
      "id": "t09s10",
      "title": "Using travel-time data to optimise the location of new clinics and outreach services",
      "status": "New"
     },
     {
      "id": "t09s11",
      "title": "Managing specialist waiting lists through shared referral and feedback systems",
      "status": "New"
     },
     {
      "id": "t09s12",
      "title": "Reducing out-of-pocket costs for essential medicines and diagnostics",
      "status": "New"
     },
     {
      "id": "t09s13",
      "title": "Linking household health expenditure data to reliable measures of financial hardship",
      "status": "New"
     },
     {
      "id": "t09s14",
      "title": "Can bundled payments improve continuity of care for multimorbidity?",
      "status": "New"
     },
     {
      "id": "t09s15",
      "title": "Measuring continuity, access and cost in mobile and outreach clinic models",
      "status": "New"
     },
     {
      "id": "t09s16",
      "title": "Measuring the burden of travel and temporary accommodation costs for specialist care",
      "status": "New"
     },
     {
      "id": "t09s17",
      "title": "Financing district prevention programmes using multi-year budgets",
      "status": "New"
     },
     {
      "id": "t09s18",
      "title": "Improving access to rehabilitation and assistive products outside major cities",
      "status": "New"
     },
     {
      "id": "t09s19",
      "title": "Mapping and reducing ambulance response inequities across district boundaries",
      "status": "New"
     },
     {
      "id": "t09s20",
      "title": "Evaluating where pharmacy-led primary care can improve access safely",
      "status": "New"
     }
    ]
   },
   {
    "no": 10,
    "name": "Healthy cities, community health and inclusion",
    "topics": [
     {
      "id": "t10s01",
      "title": "Evaluating Healthy Cities programmes in Kuching and other Southeast Asian settings",
      "status": "Returning"
     },
     {
      "id": "t10s02",
      "title": "Using urban design to improve health, access and social participation",
      "status": "Returning"
     },
     {
      "id": "t10s03",
      "title": "Social prescribing through community organisations, primary care and digital referrals",
      "status": "Returning"
     },
     {
      "id": "t10s04",
      "title": "Accessible demand-responsive transport for older people and people with disabilities",
      "status": "Returning"
     },
     {
      "id": "t10s05",
      "title": "Health literacy and locally led health promotion in multilingual communities",
      "status": "Returning"
     },
     {
      "id": "t10s06",
      "title": "Dementia-friendly neighbourhoods and social participation",
      "status": "Returning"
     },
     {
      "id": "t10s07",
      "title": "Co-designing accessible health services with communities facing exclusion",
      "status": "Returning"
     },
     {
      "id": "t10s08",
      "title": "Community-based rehabilitation and disability inclusion for displaced populations",
      "status": "Returning"
     },
     {
      "id": "t10s09",
      "title": "Measuring health benefits of safe walking routes to schools, clinics and markets",
      "status": "New"
     },
     {
      "id": "t10s10",
      "title": "Designing local health services with Orang Asli communities and traditional leaders",
      "status": "New"
     },
     {
      "id": "t10s11",
      "title": "Integrating health into planning decisions for affordable housing and informal settlements",
      "status": "New"
     },
     {
      "id": "t10s12",
      "title": "Improving sanitation and physical accessibility in public markets and food courts",
      "status": "New"
     },
     {
      "id": "t10s13",
      "title": "Improving food access and public space in People’s Housing Programme estates",
      "status": "New"
     },
     {
      "id": "t10s14",
      "title": "Using participatory maps to identify access barriers in small towns",
      "status": "New"
     },
     {
      "id": "t10s15",
      "title": "How can religious organisations support neighbourhood health programmes?",
      "status": "New"
     },
     {
      "id": "t10s16",
      "title": "Evaluating equitable access to parks, play spaces and recreation facilities",
      "status": "New"
     },
     {
      "id": "t10s17",
      "title": "Co-ordinating healthy settings programmes across schools, workplaces and places of worship",
      "status": "New"
     },
     {
      "id": "t10s18",
      "title": "Evaluating community health worker models for hard-to-reach urban households",
      "status": "New"
     },
     {
      "id": "t10s19",
      "title": "Designing age- and disability-inclusive feedback tools for local authority services",
      "status": "New"
     },
     {
      "id": "t10s20",
      "title": "Measuring the health and inclusion effects of upgrading informal settlements",
      "status": "New"
     }
    ]
   },
   {
    "no": 11,
    "name": "Nutrition, physical activity and chronic disease prevention",
    "topics": [
     {
      "id": "t11s01",
      "title": "Addressing the double burden of undernutrition and obesity in Southeast Asia",
      "status": "Returning"
     },
     {
      "id": "t11s02",
      "title": "Adapting sustainable dietary patterns to national food supplies and affordability",
      "status": "Returning"
     },
     {
      "id": "t11s03",
      "title": "Designing culturally appropriate interventions for meal timing and metabolic health",
      "status": "Returning"
     },
     {
      "id": "t11s04",
      "title": "Food biodiversity and traditional foods in chronic disease prevention",
      "status": "Returning"
     },
     {
      "id": "t11s05",
      "title": "Understanding obesity trends and fitness disparities in Malaysia and the region",
      "status": "Returning"
     },
     {
      "id": "t11s06",
      "title": "Evaluating the WHO Healthy Settings approach to chronic disease prevention",
      "status": "Returning"
     },
     {
      "id": "t11s07",
      "title": "Evaluating sugar-sweetened beverage taxes, reformulation and purchasing behaviour",
      "status": "New"
     },
     {
      "id": "t11s08",
      "title": "Reducing sodium in hawker meals and packaged sauces through voluntary or regulatory approaches",
      "status": "New"
     },
     {
      "id": "t11s09",
      "title": "Comparing front-of-pack labels for comprehension and purchasing in local markets",
      "status": "New"
     },
     {
      "id": "t11s10",
      "title": "Reducing food insecurity through school meals and nutrition-sensitive social protection",
      "status": "New"
     },
     {
      "id": "t11s11",
      "title": "Increasing access to affordable, healthy meals in low-income urban neighbourhoods",
      "status": "New"
     },
     {
      "id": "t11s12",
      "title": "Limiting exposure to marketing of foods high in sugar, salt or fat to children",
      "status": "New"
     },
     {
      "id": "t11s13",
      "title": "Scaling district hypertension programmes with home blood pressure follow-up",
      "status": "New"
     },
     {
      "id": "t11s14",
      "title": "Preventing diabetes progression through community-based support for people at high risk",
      "status": "New"
     },
     {
      "id": "t11s15",
      "title": "Evaluating active travel and structured physical activity in schools and workplaces",
      "status": "New"
     },
     {
      "id": "t11s16",
      "title": "Addressing barriers to physical activity among women and adolescent girls",
      "status": "New"
     },
     {
      "id": "t11s17",
      "title": "Monitoring weight regain and equity in access to newer obesity treatments",
      "status": "New"
     },
     {
      "id": "t11s18",
      "title": "Promoting healthier procurement in public canteens, hospitals and institutions",
      "status": "New"
     },
     {
      "id": "t11s19",
      "title": "Understanding ultra-processed food intake and cardiometabolic outcomes in Malaysian diets",
      "status": "New"
     },
     {
      "id": "t11s20",
      "title": "Integrating oral health and dietary counselling into chronic disease prevention",
      "status": "New"
     }
    ]
   },
   {
    "no": 12,
    "name": "Maternal, reproductive and child health",
    "topics": [
     {
      "id": "t12s01",
      "title": "Adapting complementary feeding guidance to family resources in the first two years of life",
      "status": "Returning"
     },
     {
      "id": "t12s02",
      "title": "Protecting breastfeeding after mothers return to work in formal and informal jobs",
      "status": "Returning"
     },
     {
      "id": "t12s03",
      "title": "Integrating breastfeeding support with postpartum depression screening and referral",
      "status": "Returning"
     },
     {
      "id": "t12s04",
      "title": "Examining socioeconomic differences in access to IVF and perinatal outcomes",
      "status": "Returning"
     },
     {
      "id": "t12s05",
      "title": "Removing barriers to reproductive healthcare and parenthood for gender-diverse people",
      "status": "Returning"
     },
     {
      "id": "t12s06",
      "title": "Reducing rural and urban gaps in timely antenatal care",
      "status": "Returning"
     },
     {
      "id": "t12s07",
      "title": "Improving surveillance and response for severe maternal morbidity and near misses",
      "status": "New"
     },
     {
      "id": "t12s08",
      "title": "Reducing congenital syphilis through antenatal testing, treatment and follow-up",
      "status": "New"
     },
     {
      "id": "t12s09",
      "title": "Strengthening antenatal diabetes care and postpartum follow-up",
      "status": "New"
     },
     {
      "id": "t12s10",
      "title": "Improving access to confidential adolescent sexual and reproductive health services",
      "status": "New"
     },
     {
      "id": "t12s11",
      "title": "Reducing barriers to antenatal and newborn care for undocumented and mobile families",
      "status": "New"
     },
     {
      "id": "t12s12",
      "title": "Closing childhood immunisation and catch-up gaps in remote districts",
      "status": "New"
     },
     {
      "id": "t12s13",
      "title": "Evaluating newborn screening and referral completion for hearing loss",
      "status": "New"
     },
     {
      "id": "t12s14",
      "title": "Reducing anaemia among pregnant women and adolescent girls",
      "status": "New"
     },
     {
      "id": "t12s15",
      "title": "Improving child growth surveillance and referral in high-stunting districts",
      "status": "New"
     },
     {
      "id": "t12s16",
      "title": "Measuring continuity of care for preterm and low-birthweight infants after discharge",
      "status": "New"
     },
     {
      "id": "t12s17",
      "title": "Preventing violence in pregnancy through safe identification and care pathways",
      "status": "New"
     },
     {
      "id": "t12s18",
      "title": "Improving access to contraception and postnatal family planning in underserved areas",
      "status": "New"
     },
     {
      "id": "t12s19",
      "title": "Evaluating community-based infant development and early intervention services",
      "status": "New"
     },
     {
      "id": "t12s20",
      "title": "Strengthening HPV vaccination delivery and catch-up among out-of-school adolescents",
      "status": "New"
     }
    ]
   },
   {
    "no": 13,
    "name": "Ageing, mobility and end-of-life care",
    "topics": [
     {
      "id": "t13s01",
      "title": "Adapting the WHO Integrated Care for Older People model for Malaysian primary care",
      "status": "Returning"
     },
     {
      "id": "t13s02",
      "title": "Comparing age-friendly neighbourhood models that support ageing in place",
      "status": "Returning"
     },
     {
      "id": "t13s03",
      "title": "Using national and district surveys to plan services for older adults",
      "status": "Returning"
     },
     {
      "id": "t13s04",
      "title": "Diet and exercise programmes for sarcopenic obesity in vulnerable older adults",
      "status": "Returning"
     },
     {
      "id": "t13s05",
      "title": "Fitness-to-drive assessment and alternatives after older adults stop driving",
      "status": "Returning"
     },
     {
      "id": "t13s06",
      "title": "Reducing pedestrian injuries among older adults through safer streets",
      "status": "Returning"
     },
     {
      "id": "t13s07",
      "title": "Improving advance care planning and access to community palliative care",
      "status": "Returning"
     },
     {
      "id": "t13s08",
      "title": "Fair allocation of long-term care resources across generations and income groups",
      "status": "Returning"
     },
     {
      "id": "t13s09",
      "title": "Evaluating home-based rehabilitation after stroke, falls or hospitalisation",
      "status": "New"
     },
     {
      "id": "t13s10",
      "title": "Supporting family caregivers through respite, training and financial protection",
      "status": "New"
     },
     {
      "id": "t13s11",
      "title": "Detecting frailty and functional decline during primary care visits",
      "status": "New"
     },
     {
      "id": "t13s12",
      "title": "Reducing falls through home modifications and community exercise programmes",
      "status": "New"
     },
     {
      "id": "t13s13",
      "title": "Improving dementia diagnosis and referral pathways outside urban centres",
      "status": "New"
     },
     {
      "id": "t13s14",
      "title": "Managing polypharmacy through pharmacist-led medication review",
      "status": "New"
     },
     {
      "id": "t13s15",
      "title": "Measuring unmet need for long-term care among older people living alone",
      "status": "New"
     },
     {
      "id": "t13s16",
      "title": "Reducing avoidable hospital transfers from residential aged-care facilities",
      "status": "New"
     },
     {
      "id": "t13s17",
      "title": "Reducing loneliness through intergenerational programmes and supported transport",
      "status": "New"
     },
     {
      "id": "t13s18",
      "title": "Improving access to hearing, vision and assistive products in older age",
      "status": "New"
     },
     {
      "id": "t13s19",
      "title": "Detecting elder abuse and neglect through coordinated health and welfare services",
      "status": "New"
     },
     {
      "id": "t13s20",
      "title": "Comparing ways to measure quality, equity and caregiver outcomes in home palliative care",
      "status": "New"
     }
    ]
   },
   {
    "no": 14,
    "name": "Mental health, gender and digital life",
    "topics": [
     {
      "id": "t14s01",
      "title": "Creating psychologically safe workplaces for young women in digitally mediated jobs",
      "status": "Returning"
     },
     {
      "id": "t14s02",
      "title": "Using storytelling and co-designed media to support young people’s mental health",
      "status": "Returning"
     },
     {
      "id": "t14s03",
      "title": "Measuring social and economic determinants of mental distress across the life course",
      "status": "Returning"
     },
     {
      "id": "t14s04",
      "title": "Evaluating the population effects of suicide prevention programmes",
      "status": "Returning"
     },
     {
      "id": "t14s05",
      "title": "Linking postpartum mental health support to care for working mothers",
      "status": "Returning"
     },
     {
      "id": "t14s06",
      "title": "Preventing psychological harm from customer abuse in public-facing workplaces",
      "status": "Returning"
     },
     {
      "id": "t14s07",
      "title": "Measuring the effects of cyberbullying, online harassment and social comparison",
      "status": "New"
     },
     {
      "id": "t14s08",
      "title": "Evaluating school phone policies against sleep, learning and well-being outcomes",
      "status": "New"
     },
     {
      "id": "t14s09",
      "title": "Reducing digital exclusion in youth mental health referrals and counselling",
      "status": "New"
     },
     {
      "id": "t14s10",
      "title": "Age-appropriate online safety and reporting of technology-facilitated gender-based abuse",
      "status": "New"
     },
     {
      "id": "t14s11",
      "title": "Evaluating chat-based mental health support and escalation to human care",
      "status": "New"
     },
     {
      "id": "t14s12",
      "title": "Closing referral gaps between school counsellors, Klinik Kesihatan and specialist care",
      "status": "New"
     },
     {
      "id": "t14s13",
      "title": "Improving men’s help-seeking and access to early mental health support",
      "status": "New"
     },
     {
      "id": "t14s14",
      "title": "Evaluating workplace psychosocial risk assessment in gig and remote work",
      "status": "New"
     },
     {
      "id": "t14s15",
      "title": "Identifying sleep disruption associated with shift work and after-hours connectivity",
      "status": "New"
     },
     {
      "id": "t14s16",
      "title": "Community mental health support for informal caregivers and single-parent households",
      "status": "New"
     },
     {
      "id": "t14s17",
      "title": "Measuring mental health effects of floods, displacement and livelihood loss",
      "status": "New"
     },
     {
      "id": "t14s18",
      "title": "Integrating substance-use screening into early intervention for young people",
      "status": "New"
     },
     {
      "id": "t14s19",
      "title": "Improving identification and care after self-harm in emergency departments",
      "status": "New"
     },
     {
      "id": "t14s20",
      "title": "Designing culturally safe mental health services for indigenous and migrant communities",
      "status": "New"
     }
    ]
   },
   {
    "no": 15,
    "name": "Public health workforce and education",
    "topics": [
     {
      "id": "t15s01",
      "title": "Revising public health curricula around competencies for post-pandemic practice",
      "status": "Returning"
     },
     {
      "id": "t15s02",
      "title": "Comparing online and blended models for regional public health education",
      "status": "Returning"
     },
     {
      "id": "t15s03",
      "title": "Sustaining multi-country workforce training partnerships and mentorship",
      "status": "Returning"
     },
     {
      "id": "t15s04",
      "title": "Training district health teams to manage climate-related health threats",
      "status": "Returning"
     },
     {
      "id": "t15s05",
      "title": "Regional accreditation and curriculum safeguards for AI in public health training",
      "status": "Returning"
     },
     {
      "id": "t15s06",
      "title": "Building research capacity through staff education and open science",
      "status": "Returning"
     },
     {
      "id": "t15s07",
      "title": "Field epidemiology mentorship for district staff outside major centres",
      "status": "New"
     },
     {
      "id": "t15s08",
      "title": "Competency-based training in GIS and surveillance for district health officers",
      "status": "New"
     },
     {
      "id": "t15s09",
      "title": "Workforce planning using workload, geography and population need",
      "status": "New"
     },
     {
      "id": "t15s10",
      "title": "Retention strategies for public health staff in rural and remote postings",
      "status": "New"
     },
     {
      "id": "t15s11",
      "title": "Reducing administrative workload and burnout among district health teams",
      "status": "New"
     },
     {
      "id": "t15s12",
      "title": "Training on risk communication and community engagement for outbreak response",
      "status": "New"
     },
     {
      "id": "t15s13",
      "title": "Standardising competencies for community health workers and volunteers",
      "status": "New"
     },
     {
      "id": "t15s14",
      "title": "Integrating economic evaluation and policy translation into MPH and DrPH training",
      "status": "New"
     },
     {
      "id": "t15s15",
      "title": "Joint training for human health, veterinary and environmental health teams",
      "status": "New"
     },
     {
      "id": "t15s16",
      "title": "Simulation-based assessment of outbreak command and multi-agency coordination",
      "status": "New"
     },
     {
      "id": "t15s17",
      "title": "Succession planning and leadership development for district public health",
      "status": "New"
     },
     {
      "id": "t15s18",
      "title": "Measuring whether continuing professional development changes frontline practice",
      "status": "New"
     },
     {
      "id": "t15s19",
      "title": "Workforce arrangements for surge staffing during concurrent emergencies",
      "status": "New"
     },
     {
      "id": "t15s20",
      "title": "Strengthening statistical and reproducibility support for district health research",
      "status": "New"
     }
    ]
   },
   {
    "no": 16,
    "name": "Research methods, risk communication and policy evaluation",
    "topics": [
     {
      "id": "t16s01",
      "title": "Assessing health policy effects with quasi-experimental methods",
      "status": "Returning"
     },
     {
      "id": "t16s02",
      "title": "Using propensity scores and target trial emulation with routine health data",
      "status": "Returning"
     },
     {
      "id": "t16s03",
      "title": "Measuring social determinants of health using linked life-course data",
      "status": "Returning"
     },
     {
      "id": "t16s04",
      "title": "Communicating chemical and radiation risks when the evidence is contested",
      "status": "Returning"
     },
     {
      "id": "t16s05",
      "title": "Measuring responses to public health misinformation and corrective messages",
      "status": "Returning"
     },
     {
      "id": "t16s06",
      "title": "Evaluating trust, safety and policy accountability in data-driven health programmes",
      "status": "Returning"
     },
     {
      "id": "t16s07",
      "title": "Using real-world evidence for medicine safety, coverage and regulatory decisions",
      "status": "Returning"
     },
     {
      "id": "t16s08",
      "title": "Measuring costs and benefits across cancer screening, diagnosis and treatment pathways",
      "status": "Returning"
     },
     {
      "id": "t16s09",
      "title": "Using interrupted time series to evaluate district tobacco control, nutrition or safety policies",
      "status": "New"
     },
     {
      "id": "t16s10",
      "title": "Estimating health inequities when subgroup denominators are incomplete",
      "status": "New"
     },
     {
      "id": "t16s11",
      "title": "Measuring exposure uncertainty in environmental epidemiology and health impact assessments",
      "status": "New"
     },
     {
      "id": "t16s12",
      "title": "Evaluating implementation fidelity when an intervention scales across districts",
      "status": "New"
     },
     {
      "id": "t16s13",
      "title": "Using causal diagrams to guide confounder selection in observational studies",
      "status": "New"
     },
     {
      "id": "t16s14",
      "title": "Explaining statistical uncertainty in public-facing surveillance and risk maps",
      "status": "New"
     },
     {
      "id": "t16s15",
      "title": "Integrating community perspectives into health technology assessment",
      "status": "New"
     },
     {
      "id": "t16s16",
      "title": "Comparing affordable designs for pragmatic trials in district health services",
      "status": "New"
     },
     {
      "id": "t16s17",
      "title": "Independent evaluation of public health dashboards for effects on real-world decisions",
      "status": "New"
     },
     {
      "id": "t16s18",
      "title": "Measuring costs, equity and scalability in implementation research",
      "status": "New"
     },
     {
      "id": "t16s19",
      "title": "Estimating avoidable mortality and linking it to service access using small-area data",
      "status": "New"
     },
     {
      "id": "t16s20",
      "title": "Strengthening reproducible workflows and reporting for routine public health analyses",
      "status": "New"
     }
    ]
   }
  ]
};
