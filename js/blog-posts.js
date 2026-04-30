/**
 * BLOG_POSTS — single source of truth for the AZCK blog.
 *
 * Read by /pages/blog.html (grid) and /pages/post.html (single).
 * Add a post = append an object below + commit one file. No new HTML files.
 *
 * SCHEMA (lock — coordinate edits with forge-cowork before changing):
 *   id            int           unique
 *   slug          string        URL-safe, lowercase, dash-separated. Routing key (?post=<slug>)
 *   title         string        post title
 *   date          string        ISO YYYY-MM-DD (used for sort, descending)
 *   dateDisplay   string        human-readable ("March 2026"), shown on cards
 *   category      string        free-form ("Steel & Materials", "Sharpening", etc.)
 *   icon          string        emoji shown when heroImage is null
 *   heroImage     string|null   path to hero image (relative to /pages/), null → icon fallback
 *   excerpt       string        1–2 sentences, shown on grid card and used as meta description
 *   content       string        full HTML body, single template literal (use backticks)
 *
 * Sole source. pages/data/blog-posts.json is RETIRED — do not reintroduce.
 */

window.BLOG_POSTS = [

  {
    id: 1,
    slug: "why-1084-steel",
    title: "Why 1084 Steel?",
    date: "2026-03-15",
    dateDisplay: "March 2026",
    category: "Steel & Materials",
    icon: "⚒️",
    excerpt: "The steel we use most in our classes — and why it's perfect for beginners and experienced makers alike.",
    content: `
      <p>If you've taken a class at AZCK or watched Alessio work, you've probably heard the number 1084 come up. It's the steel we reach for first — in our beginner classes, in our own shop builds, and in blades we've made hundreds of times over. Here's why.</p>

      <h2>What Is 1084?</h2>
      <p>1084 is a high-carbon steel with approximately 0.84% carbon content. That number matters because carbon is what gives steel its hardness and edge-holding ability. Too little carbon and the blade won't harden properly. Too much and it becomes brittle. 1084 sits in a sweet spot that's been trusted by bladesmiths for generations.</p>

      <h2>Why It's Great for Class</h2>
      <p>Carbon steels are forgiving. 1084 is especially forgiving. It responds predictably to heat, moves well under the press and hammer, and normalizes easily — meaning if you overheat it or make a mistake, you can often correct it before it becomes permanent. For someone learning to read heat colours and control a forge for the first time, that forgiveness is everything.</p>
      <p>Stainless steels like VG10 or MagnaCut require tighter temperature tolerances and often need specialized heat treatment equipment. We work with those steels — but not on day one.</p>

      <h2>The Edge It Holds</h2>
      <p>A properly heat-treated 1084 blade will hold a sharp edge through real use. It's not a display piece steel — it's a working knife steel. Kitchen knives, hunting knives, camp knives: 1084 handles all of them. It's also easy to sharpen in the field, which matters when you're using your knife far from a sharpening station.</p>

      <h2>The Trade-Off</h2>
      <p>High-carbon steel rusts if you neglect it. Keep the blade oiled, dry it after use, and it'll outlast you. Ignore it in a wet sheath for a week and you'll have a problem. That's the one trade-off — it rewards people who take care of their tools.</p>

      <h2>The Bottom Line</h2>
      <p>We use 1084 because it teaches the fundamentals honestly, produces a blade that actually works, and gives students something they're proud to carry home. If you've been curious about knife making, your first blade will almost certainly be 1084 — and there's a reason for that.</p>
    `
  },

  {
    id: 2,
    slug: "behind-the-bulldog",
    title: "Behind the Bulldog",
    date: "2026-02-20",
    dateDisplay: "February 2026",
    category: "Blade Design",
    icon: "🐾",
    excerpt: "The story behind one of our most recognized blade shapes — and the 17 iterations it took to get there.",
    content: `
      <p>Every blade shape has a story. The Bulldog's story is one of stubbornness, iteration, and refusing to settle for almost right when right is still available.</p>

      <h2>Where It Started</h2>
      <p>The Bulldog started as a utility concept — a working knife that could handle field dressing, camp prep, and kitchen work without switching blades. Broad, thick-spined, with a belly designed for slicing and a tip sturdy enough to not snap under lateral stress. The idea was simple. Getting the geometry exactly right took seventeen attempts.</p>

      <h2>The Iteration Process</h2>
      <p>Blade design isn't theoretical. You can sketch proportions that look perfect on paper and feel completely wrong in hand. The first Bulldog profile was too wide at the heel — it created drag on the draw. Versions two through five explored spine thickness. Version eight had the right belly but the choil was off. By version twelve we had something that felt right, but the grind wasn't landing where we wanted it under production conditions.</p>
      <p>Seventeen iterations isn't a failure story. It's what honest design looks like when you won't ship something until it earns it.</p>

      <h2>What Makes It a Bulldog</h2>
      <p>The name came from the silhouette. The blade is stocky, purposeful, slightly aggressive in stance — not elegant in the way a drop-point hunter is elegant, but solid in a way that communicates exactly what it is. A working knife built to be used hard and kept sharp.</p>
      <p>The handle geometry on the Bulldog is also specific: the swell at the rear of the handle locks your hand in place during heavy cuts. G10 scales, standard. It doesn't move in your grip even when wet.</p>

      <h2>Where It Is Now</h2>
      <p>The Bulldog is one of our most requested custom orders. People who own one tend to come back for a second — one for the shop, one for the field. That tells us we got it right.</p>
      <p>If you want to see one in person, come by the shop. We usually have at least one on the bench.</p>
    `
  },

  {
    id: 3,
    slug: "sharpening-myths-debunked",
    title: "Sharpening Myths Debunked",
    date: "2026-01-28",
    dateDisplay: "January 2026",
    category: "Knife Care",
    icon: "🔪",
    excerpt: "Five things most people get wrong about sharpening — and what actually works.",
    content: `
      <p>We run sharpening workshops because the number of expensive knives we see that have been destroyed by bad technique is genuinely painful. Here are the five myths we address every single time.</p>

      <h2>Myth 1: A Sharp Knife Is More Dangerous</h2>
      <p>This one is completely backwards. A dull knife requires more force to cut, which means more chance of slipping and losing control. A sharp knife does what you intend with light pressure. Professional chefs and surgeons work with edges most people would consider alarming — because control comes from sharpness, not from dulling things down.</p>

      <h2>Myth 2: Honing Is the Same as Sharpening</h2>
      <p>A honing rod doesn't remove material — it realigns the edge. When a knife feels dull after regular use, the edge has often just folded or rolled slightly. A few passes on a honing rod brings it back. Actual sharpening removes steel to create a new edge and is needed far less frequently. If you're sharpening every week, you're over-sharpening.</p>

      <h2>Myth 3: The Steeper the Angle, the Sharper the Edge</h2>
      <p>Angle determines the trade-off between sharpness and durability. A 10° edge is razor-sharp but chips easily. A 25° edge holds up to hard use. Most kitchen knives live at 15-20°. Most outdoor/hunting knives at 20-25°. Sharper isn't always better — appropriate is better.</p>

      <h2>Myth 4: Electric Sharpeners Are Just as Good</h2>
      <p>Electric sharpeners are fast and convenient, and they remove a significant amount of steel every use. Over time, they eat your blade. For a $30 knife, that might be acceptable. For a custom blade or quality Japanese knife, you want stones or a guided system that gives you control over the angle and material removal.</p>

      <h2>Myth 5: You Can't Learn to Sharpen Freehand</h2>
      <p>You can. It takes practice, not talent. Most people give up after one session because it doesn't feel right immediately. We see students leave our workshops sharpening properly after two hours. Consistent angle and consistent pressure — that's 90% of it. The other 10% is feeling what the steel is telling you, and that comes with repetition.</p>

      <p>Our sharpening workshops run regularly. Bring your knives — we'll show you the rest in person.</p>
    `
  },

  {
    id: 4,
    slug: "first-class-of-2026",
    title: "First Class of 2026",
    date: "2026-01-12",
    dateDisplay: "January 2026",
    category: "Behind the Scenes",
    icon: "🎉",
    excerpt: "A look back at our first knife making class of the year — and why January might be the best month to start.",
    content: `
      <p>The first class of any new year has a particular energy to it. Students show up with that January sense of possibility — fresh start, new skill, something they've been telling themselves they'd try. Our first class of 2026 delivered on that.</p>

      <h2>Who Was in the Room</h2>
      <p>Six students, three returning, three brand new. That mix is something we've come to appreciate — the returning students naturally mentor without being asked, and the newcomers ask the questions everyone benefits from hearing answered again. The shop was full without being crowded, which is exactly where we want it.</p>

      <h2>What They Made</h2>
      <p>Every student left with a completed blade. 1084 high-carbon steel, forged, normalized, ground, and heat-treated over one session. Handle scales go on separately — most students choose to come back for the finishing work, and some prefer to take the blade home and fit the handle themselves once they've had time to think about materials.</p>
      <p>One student — first time ever in a forge — produced a blade that genuinely surprised the room. Clean grind lines, good geometry, heat-treated properly on the first attempt. That's not common. It's also exactly why we love teaching.</p>

      <h2>Why January Works</h2>
      <p>There's something about starting a physical skill in January that sticks differently than starting it in summer. The shop is warm, the work is absorbing, and you walk out into the cold with something you made with your hands. It resets something. We've noticed students who start in Q1 are more likely to come back for advanced classes.</p>

      <h2>What's Coming This Year</h2>
      <p>We're expanding our class schedule in 2026 — more beginner sessions, a new intermediate class focused on differential heat treating, and the return of our group sharpening workshops. If you've been thinking about trying it, the calendar is already filling. Booking is through the website.</p>
    `
  },

  {
    id: 5,
    slug: "magnacut-vs-cruwear",
    title: "MagnaCut vs CruWear: Which Steel Is Right for You?",
    date: "2026-04-10",
    dateDisplay: "April 2026",
    category: "Steel & Materials",
    icon: "⚗️",
    excerpt: "Two of the best modern steels in the industry — and they're not competing for the same job.",
    content: `
      <p>MagnaCut and CruWear are both premium steels. Both are significantly more demanding to work than 1084. And if you're ordering a custom knife from AZCK, you'll probably be asked to choose between them at some point. Here's how to think about it.</p>

      <h2>MagnaCut — The Modern Stainless</h2>
      <p>Developed by Larrin Thomas and released in 2021, MagnaCut was designed specifically to solve the trade-off between corrosion resistance and toughness that plagued earlier stainless steels. Most stainless knives were either corrosion-resistant but brittle, or tough but prone to rust. MagnaCut holds both properties at a level that's genuinely impressive.</p>
      <p>It takes an exceptional edge, holds it well, and for someone who will use their knife in wet environments — fishing, kitchen work, coastal outdoors — or who simply doesn't want to oil a blade regularly, MagnaCut is the right call. It machines differently than high-carbon steel, which is why not every smith works with it. We do.</p>

      <h2>CruWear — The Working Tool Steel</h2>
      <p>CruWear is a tool steel — meaning it was engineered for industrial cutting tools before it found its way into the knife world. It is exceptionally tough, holds an edge under heavy lateral stress, and responds beautifully to proper heat treatment. It's the steel Alessio reaches for when the knife will be put to hard use: chopping, batoning, work where the blade sees real abuse.</p>
      <p>CruWear is not stainless. It requires the same care as 1084 — oil it, dry it, respect it. But in return, you get a level of toughness that stainless steels simply can't match at the same hardness levels.</p>

      <h2>The Simple Version</h2>
      <p>If your knife will be around moisture and you want low maintenance: MagnaCut. If your knife will take hard use and you're willing to care for it: CruWear. If you're not sure, tell us what you'll use it for and we'll recommend.</p>
    `
  },

  {
    id: 6,
    slug: "billet-to-blade",
    title: "From Billet to Blade: How a Custom Knife Is Made",
    date: "2026-04-01",
    dateDisplay: "April 2026",
    category: "The Craft",
    icon: "🔥",
    excerpt: "The full process — from raw steel to finished knife — and what makes each step matter.",
    content: `
      <p>People often ask how long it takes to make a knife. The honest answer is: anywhere from a few hours to several days, depending on what you're making and how you're making it. Here's the full picture.</p>

      <h2>Starting with Steel</h2>
      <p>A custom knife starts as a billet — a bar or bar section of raw steel. The steel is selected based on the blade's intended purpose: kitchen, hunting, EDC, outdoor use. Different steels have different carbon content, alloying elements, and heat treatment requirements. This is the first decision, and it shapes everything that follows.</p>

      <h2>Forging</h2>
      <p>We forge our blades. That means heating the steel to working temperature — somewhere between 1800 and 2300°F depending on the steel — and shaping it under a press or hammer. Forging compresses the grain structure of the steel and allows us to move material efficiently. The blade profile begins to emerge here: the bevel angle, the spine thickness, the distal taper.</p>

      <h2>Normalization and Annealing</h2>
      <p>After forging, the blade needs to be cycled — heated and cooled in a controlled way — to relieve internal stress and equalize the grain structure. Skip this step and the blade may warp during heat treatment. This is one of those invisible steps that separates good work from failed work.</p>

      <h2>Grinding</h2>
      <p>The grinder is where the blade gets its final geometry. We take the forged blank and grind the bevels, establish the edge, clean up the plunge lines, and shape the profile. This is skilled, tactile work — you're removing steel permanently, and there's no undo.</p>

      <h2>Heat Treatment</h2>
      <p>The blade is hardened — brought to critical temperature, quenched, then tempered to the right balance of hardness and toughness. A properly heat-treated blade will hold an edge and resist breaking. An improperly treated blade will do neither. This is the most technically demanding step in the process.</p>

      <h2>Handle Fitting and Finishing</h2>
      <p>Handle scales are drilled, shaped, and fitted to the tang. Hardware is set. The blade gets its final edge. The whole knife is inspected. Then it ships — or gets handed across the counter — to you.</p>
    `
  },

  {
    id: 7,
    slug: "handle-materials-g10-wood-micarta",
    title: "G10, Wood, or Micarta? Choosing Your Handle Material",
    date: "2026-03-05",
    dateDisplay: "March 2026",
    category: "The Craft",
    icon: "🪵",
    excerpt: "Handle material isn't just aesthetics — it affects grip, durability, weight, and feel in ways that matter.",
    content: `
      <p>When you order a custom knife, one of the first decisions you'll make is handle material. Most people have a preference before they know why — they want wood because it's beautiful, or they want G10 because it looks tough. Here's what actually separates them.</p>

      <h2>G10 — Our Default for Good Reason</h2>
      <p>G10 is a fibreglass laminate — layers of woven glass fabric saturated with epoxy resin and compressed under heat. The result is extremely hard, dimensionally stable, impervious to moisture, and available in virtually any colour or texture. It doesn't swell, shrink, or change with humidity. Under hard use, it outlasts most other materials.</p>
      <p>We use G10 as the default on our working knives because it performs consistently in conditions that would challenge other materials. If your knife is going to get wet, dirty, or heavily used, G10 is the right call.</p>

      <h2>Wood — Beautiful and Demanding</h2>
      <p>A wooden handle on a well-made knife is genuinely beautiful. Stabilized wood — wood that's been vacuum-impregnated with resin — handles moisture far better than raw wood and gives you much of the dimensional stability of synthetic materials without sacrificing appearance. Unstabilized wood requires more care but rewards it with character that changes over time.</p>
      <p>Wood is the right choice when appearance matters and the knife will see controlled use and proper care. A presentation knife, a kitchen knife that lives in a knife block, a custom piece that will be used but also appreciated.</p>

      <h2>Micarta — The Middle Ground</h2>
      <p>Micarta is a composite of linen, canvas, or paper fabric layers set in phenolic resin. Like G10, it's dimensionally stable and moisture-resistant — but it's less hard, slightly warmer in hand, and develops a patina over time that many knife people find appealing. It's a working material that gets better looking with use rather than worse.</p>
      <p>Micarta suits people who want the durability of a synthetic without the slick surface feel some people notice with G10. It grips well even without aggressive texturing.</p>

      <h2>What We Recommend</h2>
      <p>Tell us what the knife is for. If you're not sure, we'll ask the right questions and make the call. Material choice follows function — aesthetics follow from there.</p>
    `
  },

  {
    id: 8,
    slug: "how-to-care-for-your-custom-knife",
    title: "How to Care for Your Custom Knife",
    date: "2026-02-05",
    dateDisplay: "February 2026",
    category: "Knife Care",
    icon: "🛡️",
    excerpt: "A custom knife built to last — but only if you treat it right. Here's everything you need to know.",
    content: `
      <p>A well-made custom knife should outlast the person who ordered it. But that longevity depends on how it's cared for. This isn't complicated — it's a handful of habits that take seconds and prevent problems that take hours to fix.</p>

      <h2>Dry It After Use</h2>
      <p>This is the most important rule for high-carbon steel blades. Water left on the steel will begin to oxidize within hours. After every use — especially anything involving food, blood, saltwater, or wet conditions — wipe the blade dry before putting it away. A dry cloth, ten seconds, done.</p>

      <h2>Oil It Regularly</h2>
      <p>A light coat of food-safe mineral oil, camellia oil, or a dedicated blade oil protects the steel from moisture in the air. You don't need much — a few drops on a cloth, wiped over the entire blade surface. Do this every few weeks if the knife is in regular use, or before storing it for any extended period.</p>

      <h2>Store It Properly</h2>
      <p>Don't store a knife loose in a drawer where it can knock against other metal objects — this damages the edge and the finish. A magnetic strip, a proper sheath, a knife roll, or a dedicated block all work. Avoid tight, enclosed spaces without airflow if the blade is carbon steel — moisture can collect and cause rust even on an oiled blade.</p>

      <h2>Don't Put It in the Dishwasher</h2>
      <p>Ever. The high heat, moisture, and harsh detergents in a dishwasher are destructive to both the blade and the handle material. Wash knives by hand with mild soap, rinse, and dry immediately. This applies to stainless knives too — dishwashers accelerate edge degradation on any blade.</p>

      <h2>Sharpen Before It Gets Dull</h2>
      <p>It's significantly easier to maintain an edge than to rebuild one. A few passes on a honing rod after every few uses keeps the edge aligned. When the knife stops responding to the honing rod, it's time for stones. If you're not sure how to sharpen properly, come to one of our workshops — it's one of the most useful skills you can have.</p>

      <h2>When Something Goes Wrong</h2>
      <p>Surface rust, a chipped edge, a loose handle scale — bring it in. Most issues on a quality blade are fixable. The ones that aren't usually come from neglect that went on too long. Catch things early.</p>
    `
  },

  {
    id: 9,
    slug: "what-to-expect-first-class",
    title: "What to Expect in Your First Knife Making Class",
    date: "2026-03-22",
    dateDisplay: "March 2026",
    category: "Classes",
    icon: "🎓",
    excerpt: "Everything you need to know before you show up — so you can focus on making something instead of wondering what's happening.",
    content: `
      <p>First-time students often arrive with some combination of excitement and uncertainty. That's normal. Here's what the day actually looks like so you can walk in ready to work.</p>

      <h2>What to Wear</h2>
      <p>Natural fibres — cotton, denim, wool. Synthetic fabrics melt near heat sources. Closed-toe shoes, not sandals. No loose jewellery, especially bracelets or rings. Long sleeves are fine and often preferable near the forge. We provide leather aprons and eye protection.</p>

      <h2>The First Hour</h2>
      <p>We start with safety — not as a formality but because the shop is a real working environment with real hazards. You'll learn where everything is, what each piece of equipment does, and what the rules are. This takes about 20 minutes. Then we talk about the steel you're working with and what the day's build involves.</p>

      <h2>At the Forge</h2>
      <p>You'll work the steel yourself. Alessio and any assistants will be right there — demonstrating, correcting, answering questions — but you are the one forging the blade. Some students are tentative at first. By the third heat cycle, almost everyone has settled into it. The forge is loud and hot and absorbing in a way that clears your head completely.</p>

      <h2>Grinding and Heat Treatment</h2>
      <p>After forging, you'll move to the grinder. This is where the blade gets its geometry — bevel angle, edge profile, spine taper. We guide you through the angles. Then heat treatment: hardening, quench, temper. You'll understand what you're doing and why at each step, not just following instructions blindly.</p>

      <h2>What You Take Home</h2>
      <p>A completed blade, heat-treated and ready for a handle. Many students return for a handle fitting session; some take the blade and do it themselves. Either way, you leave with something you made from raw steel.</p>

      <h2>No Experience Required</h2>
      <p>We mean this. Students who've never held a hammer in a forge context and students with metalworking backgrounds attend the same class. The work is different for each, but the outcome is the same. You don't need to prepare — just show up.</p>
    `
  },

  {
    id: 10,
    slug: "hidden-tang-why-it-matters",
    title: "The Hidden Tang: Why It Matters More Than You Think",
    date: "2026-02-14",
    dateDisplay: "February 2026",
    category: "Blade Design",
    icon: "🔩",
    excerpt: "Tang construction is one of the most important decisions in a custom knife — and most buyers never ask about it.",
    content: `
      <p>The tang is the portion of the blade that extends into the handle. You don't see it. You don't think about it when you're using the knife. But it's one of the most structurally important decisions in the entire build — and it's one of the first questions we consider when designing a custom piece.</p>

      <h2>Full Tang vs Hidden Tang</h2>
      <p>A full tang runs the entire length and width of the handle. The handle scales are attached to either side of the tang, so you can often see the steel sandwiched between them. Full tang construction is the most common choice for heavy-use blades — it's strong, rigid, and nearly indestructible under normal use.</p>
      <p>A hidden tang (also called a stick tang) runs through the centre of the handle and is not visible from the outside. The handle material — wood, Micarta, bone, antler — fits over the tang and is secured at the end with a pommel or pin. Hidden tang construction produces a cleaner, more traditional look and allows for more complex handle geometries.</p>

      <h2>When Each Makes Sense</h2>
      <p>For working knives that will take hard lateral stress — hunting knives, camp knives, tools that might be used for prying or batoning — full tang is typically the right choice. The connection between blade and handle is direct and massive.</p>
      <p>For kitchen knives, presentation pieces, traditional hunting knives, and designs where aesthetics are a primary consideration, hidden tang construction produces something beautiful that also performs well under normal use.</p>

      <h2>The Quality Variable</h2>
      <p>Both constructions can be done well or badly. A properly fitted hidden tang with a solid epoxy fill and a well-fitted pommel is not weaker than a full tang — it's just different. A poorly fitted hidden tang with gaps and a loose pommel is a failure waiting to happen. The construction type isn't the quality indicator; the execution is.</p>

      <h2>What We Use</h2>
      <p>We build both. When a customer comes to us for a custom order, tang construction is part of the design conversation — not an afterthought. Ask us about it. It changes the whole character of what we build.</p>
    `
  },

  {
    id: 11,
    slug: "why-we-use-a-press",
    title: "Why We Use a Press, Not Just a Hammer",
    date: "2026-03-10",
    dateDisplay: "March 2026",
    category: "The Craft",
    icon: "🏭",
    excerpt: "Forging with a hydraulic press isn't easier than hammering — it's different. Here's what it does that a hammer can't.",
    content: `
      <p>When people picture a blacksmith or bladesmith, they picture a hammer. It's the defining image of the craft — steel on anvil, fire, impact. We still use hammers. But a significant amount of our forging is done under a hydraulic press, and there are good reasons for that.</p>

      <h2>What a Press Does</h2>
      <p>A hydraulic press applies slow, even, high-force pressure rather than rapid impact. Where a hammer blow works the steel at the surface and relies on repeated strikes to drive force deeper, a press moves through the full cross-section of the steel in one controlled squeeze. For certain operations — setting the initial bevel taper, moving large amounts of material quickly, forge-welding — the press is simply more effective.</p>

      <h2>Consistency</h2>
      <p>A hammer stroke varies. Force, angle, surface contact — these all change slightly between strikes, and that variation accumulates over a long forging session. A press applies consistent, controlled force every time. For production work and for teaching, that consistency matters. Students using a press can focus on placement and progression rather than managing hammer technique at the same time.</p>

      <h2>What a Hammer Does That a Press Can't</h2>
      <p>Planishing — refining surface texture and compressing the outermost layer of steel — is hammer work. So is certain detail shaping that requires the responsiveness of impact feedback. Hammering is also faster for specific tasks and better suited to smaller work where press geometry doesn't have clearance.</p>
      <p>The two tools are complementary, not competitive. Most of our blades are touched by both.</p>

      <h2>In the Classes</h2>
      <p>We teach hammer technique in our classes because it's fundamental and because the feedback it gives — feeling the steel move, reading the impact — builds intuition that carries over to every other part of the craft. Students who want to go further and build their own shop eventually add a press. They do that after they understand what it's supplementing.</p>
    `
  },

  {
    id: 12,
    slug: "the-perfect-gift-custom-knife",
    title: "The Perfect Gift: Why a Custom Knife Outlasts Everything Else",
    date: "2025-12-10",
    dateDisplay: "December 2025",
    category: "Custom Orders",
    icon: "🎁",
    excerpt: "Gift certificates, custom orders, and why a knife made for someone specific hits different than anything off a shelf.",
    content: `
      <p>Every December we get the same question in a dozen different forms: what do you get someone who has everything? Someone who works with their hands. Someone who cooks seriously. Someone who hunts, fishes, or spends real time outdoors. Someone who appreciates craft.</p>
      <p>The answer we always give is the same: a knife made for them specifically.</p>

      <h2>Why Custom Matters</h2>
      <p>A knife from a shelf was designed for a general user. The blade length, the handle shape, the steel, the grind — these were decided by an engineer building for an average. A custom knife is designed for one person's hands, one person's use case, one person's preferences.</p>
      <p>The difference in how it feels to use — and in what it communicates — is significant. A person who cooks every day and receives a knife built specifically for how they cook, in a handle sized to their grip, in steel appropriate for their habits, is receiving something that will still be in their kitchen in thirty years. That's not a gift. That's a companion.</p>

      <h2>How the Process Works</h2>
      <p>Custom orders start with a conversation. You tell us who it's for and what they do. We ask questions. We propose a design. You approve it. We build it. The timeline varies — typically four to eight weeks depending on our current schedule — so planning ahead is worthwhile for significant occasions.</p>

      <h2>Gift Certificates</h2>
      <p>If you want to give someone the experience of choosing their own knife — or the experience of making one in our classes — gift certificates are available. They're valid for any service we offer: custom orders, classes, sharpening workshops, retail. No expiry pressure; we want the recipient to use it when the time is right for them.</p>

      <h2>Come In</h2>
      <p>The best way to understand what we make is to see and hold it in person. Come by the shop. We'll show you what's on the bench, talk through options, and help you figure out what makes sense for the person you're buying for. No appointment needed.</p>
    `
  }

];
