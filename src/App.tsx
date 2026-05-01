import { useEffect, useState, type ElementType, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Droplets,
  Hammer,
  Home,
  Layers,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

type Language = "en" | "el";

type Service = {
  icon: ElementType;
  image: string;
  title: string;
  text: string;
};

type Work = {
  image: string;
  title: string;
  text: string;
};

const company = {
  name: "MIR Constructions LTD",
  phoneDisplay: "+357 99 160196",
  phoneHref: "tel:+35799160196",
  whatsappHref:
    "https://wa.me/35799160196?text=Hello%2C%20I%20am%20contacting%20you%20from%20your%20website.%20I%20would%20like%20to%20get%20a%20quote.",
  address: "17 Nikotsara Str., 4154 Kato Polemidia, Limassol",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=17%20Nikotsara%20Str.%2C%204154%20Kato%20Polemidia%2C%20Limassol",
  instagramHref: "",
  facebookHref: "",
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const images = {
  logo: asset("assets/mir-logo.jpg"),
  hero: asset("assets/hero-construction-site.jpg"),
  facade: asset("assets/facade-renovation-scaffold.jpg"),
  team: asset("assets/team-wall-application.jpg"),
  brandedTeam: asset("assets/branded-team-site.jpg"),
  highRise: asset("assets/high-rise-facade-work.jpg"),
  insulation: asset("assets/terrace-insulation.jpg"),
  ceramic: asset("assets/ceramic-installation-detail.jpg"),
  interior: asset("assets/finished-interior-floor.jpg"),
  floor: asset("assets/clean-delivery-floor.jpg"),
  decorative: asset("assets/decorative-facade-finish.jpg"),
  card: asset("assets/business-card-contact.jpg"),
};

const galleryImages = [
  asset("gallery/gallery-03.jpg"),
  asset("gallery/gallery-04.jpg"),
  asset("gallery/gallery-06.jpg"),
  asset("gallery/gallery-07.jpg"),
  asset("gallery/gallery-08.jpg"),
  asset("gallery/gallery-09.jpg"),
  asset("gallery/gallery-10.jpg"),
  asset("gallery/gallery-11.jpg"),
  asset("gallery/gallery-13.jpg"),
  asset("gallery/gallery-15.jpg"),
  asset("gallery/gallery-19.jpg"),
  asset("gallery/gallery-21.jpg"),
  asset("gallery/gallery-22.jpg"),
  asset("gallery/gallery-24.jpg"),
  asset("gallery/gallery-25.jpg"),
  asset("gallery/gallery-28.jpg"),
  asset("gallery/gallery-29.jpg"),
  asset("gallery/gallery-30.jpg"),
  asset("gallery/gallery-31.jpg"),
  asset("gallery/gallery-32.jpg"),
  asset("gallery/gallery-33.jpg"),
  asset("gallery/gallery-34.jpg"),
];

const content = {
  en: {
    metaTitle: "MIR Constructions LTD | Cyprus Renovation Services",
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      eyebrow: "All Cyprus",
      title: "Painting, insulation and renovation work built to last",
      text: "MIR Constructions LTD delivers exterior and interior finishing work across Cyprus, from facade painting and waterproofing to ceramics, marble and clean handover.",
      primary: "Get a quote on WhatsApp",
      secondary: "Call now",
      points: ["Exterior facades", "Interior finishes", "Local site team"],
    },
    proof: [
      {
        title: "Clean workmanship",
        text: "Organized applications with attention to visible finishing details.",
      },
      {
        title: "Exterior and interior",
        text: "Facade work, insulation, ceramics, plastering and final cleaning.",
      },
      {
        title: "Fast contact",
        text: "Reach the team directly by WhatsApp or phone for a site visit.",
      },
    ],
    servicesIntro: {
      label: "Services",
      title: "One team for the work people see every day",
      text: "The site focuses on the company’s strongest visual proof: facades, waterproofing, ceramics, decorative finishes and clean delivery.",
    },
    services: [
      {
        icon: Paintbrush,
        image: images.facade,
        title: "Painting",
        text: "Exterior and interior painting for homes, apartment blocks and renovation projects.",
      },
      {
        icon: Hammer,
        image: images.team,
        title: "Spatula, plaster and souvas",
        text: "Surface preparation, repairs, plastering and smooth finishing before paint.",
      },
      {
        icon: Droplets,
        image: images.insulation,
        title: "Insulation",
        text: "Terrace and exterior waterproofing work with clean applied surfaces.",
      },
      {
        icon: Layers,
        image: images.ceramic,
        title: "Ceramics and marble",
        text: "Tile, ceramic and marble application for interiors, balconies and detail areas.",
      },
      {
        icon: Building2,
        image: images.decorative,
        title: "Grafiato, stones and facade finishes",
        text: "Decorative exterior textures and facade applications for a stronger finish.",
      },
      {
        icon: Sparkles,
        image: images.floor,
        title: "Cleaning and handover",
        text: "Final preparation and clean handover so the work is ready to use.",
      },
    ],
    worksIntro: {
      label: "Selected work",
      title: "Real site photos, clear proof of scale",
      text: "The main images show the range of work from large exterior scaffolding to detailed interior and terrace applications.",
    },
    works: [
      {
        image: images.hero,
        title: "Facade work on active construction",
        text: "A broad project photo for showing scale, scaffolding and active exterior work.",
      },
      {
        image: images.highRise,
        title: "High-rise exterior access",
        text: "Work supported by lifting equipment for taller building facades.",
      },
      {
        image: images.decorative,
        title: "Decorative facade finish",
        text: "A clean exterior finish example for stone, grafiato and facade detail work.",
      },
      {
        image: images.interior,
        title: "Interior floor completion",
        text: "Finished interior surface work for clean residential delivery.",
      },
    ],
    gallery: {
      label: "General works",
      title: "A wider look at recent applications",
      text: "A compact visual strip keeps the page rich without letting lower-resolution WhatsApp shots dominate the main story.",
    },
    processIntro: {
      label: "Process",
      title: "Simple steps from first message to finished work",
    },
    process: [
      {
        title: "Site visit",
        text: "Share the location, photos or project details so the team understands the work.",
      },
      {
        title: "Clear quote",
        text: "The scope, materials and timing are agreed before work starts.",
      },
      {
        title: "Professional application",
        text: "The crew prepares the surface and carries out the agreed service on site.",
      },
      {
        title: "Quality check",
        text: "Visible details, edges and finishing quality are reviewed before handover.",
      },
      {
        title: "Clean delivery",
        text: "The site is left tidy and ready for the next stage or daily use.",
      },
    ],
    contact: {
      label: "Contact",
      title: "Ask for a site visit or quote across Cyprus",
      text: "Send a message on WhatsApp, call directly, or open the address in maps.",
      whatsapp: "WhatsApp",
      call: "Call",
      directions: "Directions",
      socialPending: "Social link will be added later",
      addressLabel: "Address",
      phoneLabel: "Phone",
    },
  },
  el: {
    metaTitle: "MIR Constructions LTD | Υπηρεσίες Ανακαίνισης στην Κύπρο",
    nav: {
      services: "Υπηρεσίες",
      work: "Έργα",
      process: "Διαδικασία",
      contact: "Επικοινωνία",
    },
    hero: {
      eyebrow: "Όλη η Κύπρος",
      title: "Βαφές, μονώσεις και ανακαινίσεις με αντοχή στον χρόνο",
      text: "Η MIR Constructions LTD αναλαμβάνει εξωτερικά και εσωτερικά τελειώματα σε όλη την Κύπρο, από βαφές προσόψεων και στεγανοποιήσεις μέχρι κεραμικά, μάρμαρα και καθαρή παράδοση.",
      primary: "Προσφορά μέσω WhatsApp",
      secondary: "Καλέστε τώρα",
      points: ["Εξωτερικές προσόψεις", "Εσωτερικά τελειώματα", "Τοπικό συνεργείο"],
    },
    proof: [
      {
        title: "Καθαρή εργασία",
        text: "Οργανωμένες εφαρμογές με προσοχή στις εμφανείς λεπτομέρειες.",
      },
      {
        title: "Εσωτερικοί και εξωτερικοί χώροι",
        text: "Προσόψεις, μονώσεις, κεραμικά, σοβάδες και τελικός καθαρισμός.",
      },
      {
        title: "Άμεση επικοινωνία",
        text: "Επικοινωνήστε απευθείας μέσω WhatsApp ή τηλεφώνου για επίσκεψη.",
      },
    ],
    servicesIntro: {
      label: "Υπηρεσίες",
      title: "Ένα συνεργείο για τις εργασίες που φαίνονται καθημερινά",
      text: "Η σελίδα βασίζεται στις πιο δυνατές εικόνες της εταιρείας: προσόψεις, στεγανοποιήσεις, κεραμικά, διακοσμητικά τελειώματα και καθαρή παράδοση.",
    },
    services: [
      {
        icon: Paintbrush,
        image: images.facade,
        title: "Βαφές",
        text: "Εξωτερικές και εσωτερικές βαφές για κατοικίες, πολυκατοικίες και ανακαινίσεις.",
      },
      {
        icon: Hammer,
        image: images.team,
        title: "Σπατουλαρίσματα, σοβάδες και souvas",
        text: "Προετοιμασία επιφανειών, επισκευές, σοβάδες και λεία τελειώματα πριν τη βαφή.",
      },
      {
        icon: Droplets,
        image: images.insulation,
        title: "Μονώσεις",
        text: "Στεγανοποιήσεις ταρατσών και εξωτερικών επιφανειών με καθαρή εφαρμογή.",
      },
      {
        icon: Layers,
        image: images.ceramic,
        title: "Κεραμικά και μάρμαρα",
        text: "Τοποθέτηση πλακιδίων, κεραμικών και μαρμάρων σε εσωτερικούς και εξωτερικούς χώρους.",
      },
      {
        icon: Building2,
        image: images.decorative,
        title: "Grafiato, πέτρα και προσόψεις",
        text: "Διακοσμητικές υφές και εφαρμογές πρόσοψης για πιο ανθεκτικό αποτέλεσμα.",
      },
      {
        icon: Sparkles,
        image: images.floor,
        title: "Καθαρισμός και παράδοση",
        text: "Τελική προετοιμασία και καθαρή παράδοση ώστε ο χώρος να είναι έτοιμος.",
      },
    ],
    worksIntro: {
      label: "Επιλεγμένα έργα",
      title: "Πραγματικές φωτογραφίες με καθαρή εικόνα του μεγέθους",
      text: "Οι βασικές εικόνες δείχνουν το εύρος εργασιών, από μεγάλες προσόψεις με σκαλωσιές μέχρι εσωτερικά και ταράτσες.",
    },
    works: [
      {
        image: images.hero,
        title: "Εργασία πρόσοψης σε ενεργό εργοτάξιο",
        text: "Εικόνα έργου μεγάλης κλίμακας με σκαλωσιές και εξωτερικές εργασίες.",
      },
      {
        image: images.highRise,
        title: "Εξωτερική εργασία σε ψηλό κτίριο",
        text: "Εργασία με ανυψωτικό εξοπλισμό για προσόψεις πολυώροφων κτιρίων.",
      },
      {
        image: images.decorative,
        title: "Διακοσμητικό τελείωμα πρόσοψης",
        text: "Παράδειγμα εξωτερικού τελειώματος για πέτρα, grafiato και λεπτομέρεια πρόσοψης.",
      },
      {
        image: images.interior,
        title: "Ολοκλήρωση εσωτερικού δαπέδου",
        text: "Τελική εικόνα εσωτερικής επιφάνειας για καθαρή παράδοση κατοικίας.",
      },
    ],
    gallery: {
      label: "Γενικές εργασίες",
      title: "Περισσότερες πρόσφατες εφαρμογές",
      text: "Μια συμπαγής οπτική λωρίδα γεμίζει τη σελίδα χωρίς οι χαμηλότερης ανάλυσης φωτογραφίες WhatsApp να κυριαρχούν στην κύρια εικόνα.",
    },
    processIntro: {
      label: "Διαδικασία",
      title: "Απλά βήματα από το πρώτο μήνυμα μέχρι την παράδοση",
    },
    process: [
      {
        title: "Επίσκεψη στον χώρο",
        text: "Στείλτε τοποθεσία, φωτογραφίες ή λεπτομέρειες ώστε να εκτιμηθεί η εργασία.",
      },
      {
        title: "Καθαρή προσφορά",
        text: "Συμφωνούνται το αντικείμενο, τα υλικά και ο χρόνος πριν την έναρξη.",
      },
      {
        title: "Επαγγελματική εφαρμογή",
        text: "Το συνεργείο προετοιμάζει την επιφάνεια και εκτελεί την εργασία στον χώρο.",
      },
      {
        title: "Έλεγχος ποιότητας",
        text: "Ελέγχονται οι λεπτομέρειες, οι άκρες και το τελικό αποτέλεσμα.",
      },
      {
        title: "Καθαρή παράδοση",
        text: "Ο χώρος παραδίδεται τακτοποιημένος και έτοιμος για χρήση.",
      },
    ],
    contact: {
      label: "Επικοινωνία",
      title: "Ζητήστε επίσκεψη ή προσφορά σε όλη την Κύπρο",
      text: "Στείλτε μήνυμα στο WhatsApp, καλέστε απευθείας ή ανοίξτε τη διεύθυνση στον χάρτη.",
      whatsapp: "WhatsApp",
      call: "Κλήση",
      directions: "Οδηγίες",
      socialPending: "Ο σύνδεσμος θα προστεθεί αργότερα",
      addressLabel: "Διεύθυνση",
      phoneLabel: "Τηλέφωνο",
    },
  },
} satisfies Record<
  Language,
  {
    metaTitle: string;
    nav: Record<"services" | "work" | "process" | "contact", string>;
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      primary: string;
      secondary: string;
      points: string[];
    };
    proof: Array<{ title: string; text: string }>;
    servicesIntro: { label: string; title: string; text: string };
    services: Service[];
    worksIntro: { label: string; title: string; text: string };
    works: Work[];
    gallery: { label: string; title: string; text: string };
    processIntro: { label: string; title: string };
    process: Array<{ title: string; text: string }>;
    contact: Record<
      | "label"
      | "title"
      | "text"
      | "whatsapp"
      | "call"
      | "directions"
      | "socialPending"
      | "addressLabel"
      | "phoneLabel",
      string
    >;
  }
>;

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("mir-language");
    return stored === "el" ? "el" : "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "el" ? "el" : "en";
    document.title = t.metaTitle;
    localStorage.setItem("mir-language", language);
  }, [language, t.metaTitle]);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="site-shell">
      <Header
        language={language}
        navLinks={navLinks}
        menuOpen={menuOpen}
        setLanguage={setLanguage}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      <main>
        <section className="hero" id="top" aria-label="MIR Constructions LTD">
          <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }} />
          <div className="hero-overlay" />
          <div className="hero-content page-pad">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-text">{t.hero.text}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={company.whatsappHref}>
                <FaWhatsapp aria-hidden="true" />
                {t.hero.primary}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={company.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {t.hero.secondary}
              </a>
            </div>
            <div className="hero-points" aria-label="Highlights">
              {t.hero.points.map((point) => (
                <span key={point}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-strip page-pad" aria-label="Company strengths">
          {t.proof.map((item, index) => {
            const Icon = [ShieldCheck, Building2, Clock3][index];
            return (
              <article className="proof-item" key={item.title}>
                <Icon size={24} aria-hidden="true" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="section page-pad" id="services">
          <SectionIntro
            label={t.servicesIntro.label}
            title={t.servicesIntro.title}
            text={t.servicesIntro.text}
          />
          <div className="services-grid">
            {t.services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" decoding="async" />
                <div className="service-body">
                  <service.icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="work">
          <div className="page-pad">
            <SectionIntro
              label={t.worksIntro.label}
              title={t.worksIntro.title}
              text={t.worksIntro.text}
            />
            <div className="work-grid">
              {t.works.map((work, index) => (
                <article
                  className={index === 0 ? "work-card work-card-large" : "work-card"}
                  key={work.title}
                >
                  <img src={work.image} alt="" decoding="async" />
                  <div className="work-copy">
                    <h3>{work.title}</h3>
                    <p>{work.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section">
          <div className="page-pad gallery-heading">
            <SectionIntro label={t.gallery.label} title={t.gallery.title} text={t.gallery.text} />
          </div>
          <div className="gallery-marquee" aria-label={t.gallery.title}>
            <div className="gallery-track">
              {[...galleryImages, ...galleryImages].map((src, index) => (
                <img src={src} alt="" decoding="async" key={`${src}-${index}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="section page-pad process-section" id="process">
          <SectionIntro label={t.processIntro.label} title={t.processIntro.title} />
          <div className="process-grid">
            {t.process.map((item, index) => (
              <article className="process-card" key={item.title}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <ClipboardCheck size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-pad contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">{t.contact.label}</p>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <div className="contact-actions">
                <a className="button button-primary" href={company.whatsappHref}>
                  <FaWhatsapp aria-hidden="true" />
                  {t.contact.whatsapp}
                </a>
                <a className="button button-secondary-on-dark" href={company.phoneHref}>
                  <Phone size={18} aria-hidden="true" />
                  {t.contact.call}
                </a>
                <a className="button button-secondary-on-dark" href={company.mapsHref}>
                  <MapPin size={18} aria-hidden="true" />
                  {t.contact.directions}
                </a>
              </div>
              <div className="contact-details">
                <p>
                  <span>{t.contact.phoneLabel}</span>
                  <a href={company.phoneHref}>{company.phoneDisplay}</a>
                </p>
                <p>
                  <span>{t.contact.addressLabel}</span>
                  <a href={company.mapsHref}>{company.address}</a>
                </p>
              </div>
            </div>
            <div className="contact-panel" aria-label="MIR Constructions contact card">
              <div className="clean-contact-card">
                <div className="clean-card-icon" aria-hidden="true">
                  <Home size={54} />
                  <Paintbrush size={36} />
                </div>
                <div className="clean-card-title">
                  <span>MIR Constructions</span>
                  <small>High-end painting · decorative ceramics · premium finishes</small>
                </div>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
                <p>{company.address}</p>
              </div>
              <SocialRow t={t} />
            </div>
          </div>
        </section>
      </main>

      <MobileContactBar t={t} />
    </div>
  );
}

function Header({
  language,
  navLinks,
  menuOpen,
  setLanguage,
  setMenuOpen,
  t,
}: {
  language: Language;
  navLinks: Array<{ href: string; label: string }>;
  menuOpen: boolean;
  setLanguage: (language: Language) => void;
  setMenuOpen: (open: boolean) => void;
  t: (typeof content)[Language];
}) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MIR Constructions LTD">
        <span className="brand-mark" aria-hidden="true">
          <Building2 size={22} />
        </span>
        <span>
          <strong>MIR Construction</strong>
          <small>Constructions LTD</small>
        </span>
      </a>

      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-tools">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <a className="header-call" href={company.phoneHref}>
          <Phone size={17} aria-hidden="true" />
          <span>{company.phoneDisplay}</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={menuOpen ? "mobile-panel is-open" : "mobile-panel"}>
        <SocialRow t={t} compact />
      </div>
    </header>
  );
}

function LanguageToggle({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      <button
        type="button"
        className={language === "en" ? "is-active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={language === "el" ? "is-active" : ""}
        onClick={() => setLanguage("el")}
      >
        EL
      </button>
    </div>
  );
}

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function SocialRow({ t, compact = false }: { t: (typeof content)[Language]; compact?: boolean }) {
  return (
    <div className={compact ? "social-row social-row-compact" : "social-row"}>
      <a href={company.whatsappHref} aria-label="WhatsApp" className="social-link">
        <FaWhatsapp aria-hidden="true" />
      </a>
      <a href={company.phoneHref} aria-label={t.contact.call} className="social-link">
        <Phone size={18} aria-hidden="true" />
      </a>
      <SocialPlaceholder label="Instagram" title={t.contact.socialPending}>
        <FaInstagram aria-hidden="true" />
      </SocialPlaceholder>
      <SocialPlaceholder label="Facebook" title={t.contact.socialPending}>
        <FaFacebookF aria-hidden="true" />
      </SocialPlaceholder>
      <a href={company.mapsHref} aria-label={t.contact.directions} className="social-link">
        <MapPin size={18} aria-hidden="true" />
      </a>
    </div>
  );
}

function SocialPlaceholder({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="social-link social-link-muted"
      aria-label={label}
      title={title}
    >
      {children}
    </button>
  );
}

function MobileContactBar({ t }: { t: (typeof content)[Language] }) {
  return (
    <div className="mobile-contact-bar" aria-label="Quick contact">
      <a href={company.whatsappHref}>
        <FaWhatsapp aria-hidden="true" />
        <span>{t.contact.whatsapp}</span>
      </a>
      <a href={company.phoneHref}>
        <Phone size={18} aria-hidden="true" />
        <span>{t.contact.call}</span>
      </a>
      <a href={company.mapsHref}>
        <MapPin size={18} aria-hidden="true" />
        <span>{t.contact.directions}</span>
      </a>
    </div>
  );
}

export default App;
