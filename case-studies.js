const studyImage = (src, alt, caption = "") => `
  <figure class="study-media">
    <img src="${src}" alt="${alt}" loading="lazy" />
    ${caption ? `<figcaption>${caption}</figcaption>` : ""}
  </figure>`;

const studyVideo = (src, caption = "") => `
  <figure class="study-media">
    <video controls muted loop playsinline preload="metadata">
      <source src="${src}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    ${caption ? `<figcaption>${caption}</figcaption>` : ""}
  </figure>`;

window.caseStudyContent = {
  typus: {
    body: `
      ${studyImage("assets/portfolio/typus-hero.jpg", "Typus Finance hero design with the redesigned interface", "Typus Finance — landing page redesign")}

      <section class="study-section">
        <p class="study-eyebrow">01 / Overview</p>
        <h3>Turning an information-rich page into a clear path to action.</h3>
        <p>When we took over this project, the existing landing page was underperforming. Although it was rich in information, it failed to effectively guide users to click the CTA. As a result, incoming traffic was not successfully converting.</p>
        ${studyImage("assets/portfolio/typus-original.jpg", "Original Typus Finance platform showing yield infrastructure and DeFi gameplay features", "The original visual lacked emotional brand connection, professionalism, and credibility.")}
      </section>

      <section class="study-section">
        <p class="study-eyebrow">02 / Goals and challenges</p>
        <div class="study-columns">
          <div>
            <h4>Goals</h4>
            <ul>
              <li>Increase conversion rate.</li>
              <li>Enhance the brand’s professional image and quality perception.</li>
            </ul>
          </div>
          <div>
            <h4>Challenges</h4>
            <ul>
              <li><strong>Low conversion:</strong> short sessions and a very low CTA click rate.</li>
              <li><strong>Unclear hierarchy:</strong> core value propositions were difficult to identify.</li>
              <li><strong>Weak emotional connection:</strong> the visual tone did not build trust.</li>
              <li><strong>Poor DeFi fit:</strong> flat elements lacked the expected high-tech character.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">03 / Design analysis</p>
        <h3>Attention data made the hierarchy problem measurable.</h3>
        <p>To better understand user behavior, we conducted a detailed heatmap analysis of the landing page. It revealed where attention concentrated, what users missed, and how the visual journey broke down.</p>
        ${studyImage("assets/portfolio/typus-research.jpg", "Heatmap analysis of the original Typus Finance landing page", "The headline and primary CTA attracted attention, while essential features and metrics were frequently missed.")}
        <div class="study-metrics">
          <div><strong>6.8%</strong><span>Text visibility<br />below 11% average</span></div>
          <div><strong>5.1%</strong><span>Subheading visibility<br />below 10% average</span></div>
          <div><strong>35.1%</strong><span>Heading visibility<br />above 19% average</span></div>
          <div><strong>4.9%</strong><span>CTA visibility<br />above 2.4% average</span></div>
        </div>
        <div class="study-media-grid study-media-grid-tall">
          ${studyImage("assets/portfolio/typus-aoi-original.jpg", "Areas of Interest analysis for the original Typus page", "Heatmap and Areas of Interest")}
          ${studyImage("assets/portfolio/typus-contrast-original.jpg", "Contrast map of the original Typus Finance interface", "Original contrast map")}
        </div>
        <div class="study-columns study-columns-compact">
          <div><h4>Key findings</h4><ul><li>14–15% attention values appeared across both critical and non-critical elements.</li><li>Functional modules and navigation had insufficient contrast.</li></ul></div>
          <div><h4>Opportunities</h4><ul><li>Raise primary actions toward 16–18% target visibility.</li><li>Create clearer separation between trading modules and supporting information.</li></ul></div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">04 / Design decisions</p>
        <div class="study-card-grid">
          <article><span>01</span><h4>Immersive dark mode</h4><p>Key messages were emphasized, secondary elements subdued, and futuristic visuals plus micro-interactions introduced to express the high-tech DeFi brand.</p></article>
          <article><span>02</span><h4>Stronger hierarchy</h4><p>Transaction volume, user count, and other trust-building data were elevated through contrast and placement.</p></article>
          <article><span>03</span><h4>Clearer modules</h4><p>Trading, Earnings, and DeFi Gamification were separated into distinct, easier-to-digest groups.</p></article>
          <article><span>04</span><h4>Motivating CTA</h4><p>“Launch” became “Start Your Engine!”, connecting the action to the rocket concept and giving the CTA more energy.</p></article>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">05 / Solutions</p>
        <h3>From structure to tested visual direction.</h3>
        ${studyImage("assets/portfolio/typus-wireframes.jpg", "Typus Finance wireframe explorations for desktop and mobile", "Initial wireframe explorations")}
        ${studyImage("assets/portfolio/typus-lofi.jpg", "Low-fidelity Typus Finance interface mockup", "Lo-fi mockup establishing the product structure and gamification areas")}
        <h4 class="study-subtitle">Heatmap validation</h4>
        <p>Testing on the redesign showed attention concentrating more clearly around the key metrics, trading modules, and primary CTA.</p>
        <div class="study-media-grid study-media-grid-tall">
          ${studyImage("assets/portfolio/typus-aoi-redesign.jpg", "Heatmap showing attention flow on the redesigned Typus interface", "Redesigned Areas of Interest")}
          ${studyImage("assets/portfolio/typus-contrast-grid.jpg", "Engagement intensity grid for the redesigned Typus interface", "Redesigned contrast map")}
        </div>
        <div class="study-metrics">
          <div><strong>14%</strong><span>Text visibility<br />above 11% average</span></div>
          <div><strong>11.4%</strong><span>Subheading visibility<br />above 10% average</span></div>
          <div><strong>9.7%</strong><span>CTA visibility<br />above 3.4% average</span></div>
          <div><strong>23.1%</strong><span>Image visibility<br />above 17% average</span></div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">06 / Before and after</p>
        <div class="study-media-grid study-media-grid-tall">
          ${studyImage("assets/portfolio/typus-contrast-original.jpg", "Original Typus Finance contrast map", "Original: important and secondary UI competed for attention")}
          ${studyImage("assets/portfolio/typus-contrast-redesign.jpg", "Redesigned Typus Finance contrast map", "Redesign: CTAs, metrics, and modules form clearer focal areas")}
        </div>
        <ul class="study-callout-list">
          <li>Dark mode improved readability by 40%.</li>
          <li>Key CTAs reached high-contrast values of 16–17%.</li>
          <li>Distinct color-temperature zones clarified module boundaries.</li>
        </ul>
        ${studyImage("assets/portfolio/typus-final.jpg", "Before-and-after comparison of the final Typus Finance design", "Final design implementation")}
      </section>

      <section class="study-section study-impact">
        <p class="study-eyebrow">07 / Impact</p>
        <h3>The new direction improved both attention and action.</h3>
        <div class="study-metrics study-metrics-large">
          <div><strong>+80%</strong><span>CTA clicks</span></div>
          <div><strong>+45%</strong><span>User engagement</span></div>
          <div><strong>+63%</strong><span>Strategy completion</span></div>
          <div><strong>−32%</strong><span>Support tickets</span></div>
        </div>
        <p>The redesign also recorded an 87% user satisfaction rating. The work demonstrated how evidence-led hierarchy, stronger brand expression, and focused messaging can move a landing page from information delivery to conversion.</p>
        <h4 class="study-subtitle">Next steps</h4>
        <ul>
          <li>Develop personalized strategy recommendations based on user behavior and goals.</li>
          <li>Expand educational content with interactive tutorials and simulations.</li>
          <li>Integrate additional portfolio-performance visualization tools.</li>
          <li>Create a mobile-optimized experience for on-the-go monitoring.</li>
        </ul>
      </section>
    `,
  },

  c88: {
    body: `
      ${studyImage("assets/portfolio/c88-hero.jpg", "C88 Games redesigned mobile casino platform", "C88 Games — platform redesign for the Philippines market")}

      <section class="study-section">
        <p class="study-eyebrow">01 / Overview</p>
        <h3>From a sports-betting niche to a full casino platform.</h3>
        <p>C88 Games, a leading online gaming platform in the Philippines, approached us to redesign its experience as the product expanded into a full-fledged online casino. The platform was rich in content and functionality, but weak visual identity, ineffective navigation, and limited local resonance made acquisition and retention difficult.</p>
        <div class="study-columns">
          <div><h4>Original market</h4><p>Vietnam, where sports betting dominated the gambling landscape.</p></div>
          <div><h4>New market</h4><p>The Philippines, where slots and casino products required a complete rebranding and content-priority shift.</p></div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">02 / Goals and challenges</p>
        <div class="study-card-grid study-card-grid-three">
          <article><span>01</span><h4>Brand recognition</h4><p>Establish a strong and locally relevant identity in the Philippine market.</p></article>
          <article><span>02</span><h4>User acquisition</h4><p>Create a more immersive first-touch experience that motivates exploration.</p></article>
          <article><span>03</span><h4>Retention</h4><p>Use gamified elements to drive early engagement and continued use.</p></article>
        </div>
        <div class="study-columns">
          <div><h4>Visual disconnection</h4><p>The sports-betting aesthetic failed to express the diversity and entertainment value of casino gaming.</p></div>
          <div><h4>Low emotional connection</h4><p>Limited cultural relevance and brand personality created low trust and little motivation to explore.</p></div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">03 / User research</p>
        <h3>Meeting the users.</h3>
        <p>We interviewed active online gaming players in the Philippines, focusing on first impressions, game navigation, and emotional engagement.</p>
        ${studyImage("assets/portfolio/c88-interview.jpg", "Users participating in a C88 research interview", "User interview session")}
        <div class="study-quote-grid">
          <blockquote>“It looks simple and clean… but not like a casino.”</blockquote>
          <blockquote>“I usually play slot machines, sabong, and instant games.”</blockquote>
          <blockquote>“There are so many categories, but you can only see a few at once.”</blockquote>
        </div>
        <h4 class="study-subtitle">Pain points</h4>
        <ul>
          <li>Horizontal swiping made the full set of game categories difficult to browse.</li>
          <li>Oversized banners distracted users and reduced available content space.</li>
          <li>The sportsbook visual language contradicted expectations of an integrated casino platform.</li>
        </ul>
        ${studyImage("assets/portfolio/c88-market-analysis.jpg", "Comparison of competing online betting and casino interfaces", "Market analysis revealed different approaches to platform navigation and casino branding.")}
      </section>

      <section class="study-section">
        <p class="study-eyebrow">04 / Design decisions</p>
        <div class="study-decision">
          <div><span>01</span><h4>Casino visual language</h4><p>A dark interface with high-contrast neon elements created a sleek, immersive atmosphere, reduced visual fatigue, and raised perceived value.</p></div>
          ${studyImage("assets/portfolio/c88-dark-theme.jpg", "C88 dark casino interface with neon visual elements", "Visual style and brand reinforcement")}
        </div>
        <div class="study-decision">
          <div><span>02</span><h4>Navigation optimization</h4><p>A vertically scrollable hierarchy replaced repeated horizontal swiping. Categories were sequenced by usage, with popular games moved to the top.</p></div>
          ${studyImage("assets/portfolio/c88-navigation.jpg", "Before and after comparison of C88 game navigation", "Game-category navigation redesign")}
        </div>
        <div class="study-decision">
          <div><span>03</span><h4>Gamified retention</h4><p>Daily check-ins, lucky spins, task challenges, and bonuses introduced incentives at the start of the journey and encouraged return visits.</p></div>
          ${studyImage("assets/portfolio/c88-gamification.jpg", "C88 lucky wheel, daily sign-in, missions, and bonus features", "Engagement and retention features")}
        </div>
        <div class="study-decision">
          <div><span>04</span><h4>Branded motion</h4><p>Microcopy and customized animation reinforced the brand’s personality at key waiting and reward moments.</p></div>
          ${studyVideo("assets/portfolio/c88-motion.mp4", "Customized branded animation")}
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">05 / Usability testing</p>
        <p>We tested early prototypes to observe how players navigated the redesigned experience. The findings validated the overall direction and exposed friction points that were refined before final delivery.</p>
        ${studyImage("assets/portfolio/c88-usability.jpg", "Participants testing the redesigned C88 mobile platform", "Interactive usability-testing session")}
        <div class="study-quote-grid study-quote-grid-two">
          <blockquote>“The new design is very casino-esque. The interface is rich and detailed, very different from other brands.”</blockquote>
          <blockquote>“The games are categorized at a glance, with the most frequently played ones at the top.”</blockquote>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">06 / Final design</p>
        ${studyImage("assets/portfolio/c88-process.jpg", "C88 sketches, wireframes, and high-fidelity mockups", "Sketch → wireframe → mockup")}
        <div class="study-media-grid">
          ${studyImage("assets/portfolio/c88-daily-signin.jpg", "C88 daily sign-in experience", "Daily sign-in activity")}
          ${studyImage("assets/portfolio/c88-holiday.jpg", "C88 holiday campaign theme", "Customized holiday theme")}
          ${studyImage("assets/portfolio/c88-vip.jpg", "C88 VIP bonus experience", "VIP bonus")}
          ${studyImage("assets/c88-games.jpg", "C88 game lobby and wheel of fortune mobile screens", "Mobile platform overview")}
        </div>
        ${studyImage("assets/portfolio/c88-final.jpg", "C88 mobile app screens showing missions, promotions, and the game lobby", "Dark backgrounds, neon highlights, and detailed graphics create a cohesive casino atmosphere.")}
      </section>

      <section class="study-section study-impact">
        <p class="study-eyebrow">07 / Impact and takeaways</p>
        <h3>A localized casino experience with measurable business impact.</h3>
        <div class="study-metrics study-metrics-large">
          <div><strong>+53%</strong><span>Sign-up rate</span></div>
          <div><strong>+48%</strong><span>Click-through rate</span></div>
          <div><strong>↑</strong><span>Navigation satisfaction</span></div>
          <div><strong>↑</strong><span>Brand alignment</span></div>
        </div>
        <p>By redesigning C88 Games around local user expectations and behavior, the platform moved from a generic sportsbook into a visually engaging, gamified casino experience. The work improved usability, brand perception, engagement, and retention.</p>
        <ul>
          <li>Culturally aware visual style, tone of voice, and trust signals were essential to conversion.</li>
          <li>Microcopy and interaction design helped emotionally activate users at key moments.</li>
          <li>Future iterations should add deeper accessibility audits and earlier A/B testing.</li>
        </ul>
        <h4 class="study-subtitle">Next steps</h4>
        <ul>
          <li>Extend localization strategies to other regions and gaming preferences.</li>
          <li>Add achievement badges and loyalty rewards.</li>
          <li>Improve accessibility to meet global standards.</li>
          <li>Introduce AI-driven game recommendations.</li>
        </ul>
      </section>
    `,
  },

  "slot-games": {
    body: `
      ${studyVideo("assets/portfolio/slot-games-showcase.mp4", "Slot game design showcase")}

      <section class="study-section">
        <p class="study-eyebrow">01 / Overview</p>
        <h3>Pushing the boundaries of a product designer’s role.</h3>
        <p>This collection covers slot-game designs across multiple themes and new gameplay concepts. The work expanded beyond UI delivery into UX, visual direction, animation, and sound-effect design.</p>
        <div class="study-columns">
          <div><h4>Challenge</h4><p>Create engaging and innovative slot games that stand out in a crowded market while balancing visual appeal with mechanics that encourage retention.</p></div>
          <div><h4>Solution</h4><p>Build immersive theme-based games with distinctive concepts and a consistent interface, preserving familiarity while making each title memorable.</p></div>
        </div>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">02 / Selected game designs</p>
        <div class="study-gallery study-gallery-two">
          ${studyImage("assets/slot-games.jpg", "Lucky 777 slot machine game interface", "Lucky 777")}
          ${studyImage("assets/portfolio/slot-games-02.jpg", "Themed slot game interface design", "Theme and interface exploration")}
          ${studyImage("assets/portfolio/slot-games-03.jpg", "Slot game interface with custom visual theme", "Gameplay and visual-system design")}
          ${studyImage("assets/portfolio/slot-games-04.jpg", "Slot machine game experience design", "Final themed slot-game experience")}
        </div>
      </section>

      <section class="study-section study-impact">
        <p class="study-eyebrow">03 / Results and learning</p>
        <p>The themed designs attracted player interest and supported retention by creating more memorable game experiences. Consistent interaction patterns made varied visual themes easier to understand and use.</p>
        <div class="study-card-grid study-card-grid-three">
          <article><span>01</span><h4>Player psychology</h4><p>Engaging slot design depends on understanding motivation, anticipation, and reward.</p></article>
          <article><span>02</span><h4>Timing matters</h4><p>Visual design and animation timing work together to create an immersive experience.</p></article>
          <article><span>03</span><h4>Responsible play</h4><p>Entertainment and responsible-gaming principles must remain balanced for sustainable success.</p></article>
        </div>
      </section>
    `,
  },

  "visual-design": {
    body: `
      ${studyImage("assets/visual-design.jpg", "Casino promotional billboard created for a 100 percent reward campaign", "Visual Design — promotional and campaign work")}

      <section class="study-section">
        <p class="study-eyebrow">01 / Overview</p>
        <h3>Campaign design built for attention, adaptation, and brand recognition.</h3>
        <p>A collection of promotional and campaign work created across 2023–2024, showcasing visual direction, image retouching, composition, localized messaging, and execution across different digital placements.</p>
      </section>

      <section class="study-section">
        <p class="study-eyebrow">02 / Selected work</p>
        <div class="study-gallery">
          ${studyImage("assets/portfolio/visual-05.jpg", "Promotional casino campaign key visual", "Campaign key visual 01")}
          ${studyImage("assets/portfolio/visual-06.jpg", "Casino promotional design with branded composition", "Campaign key visual 02")}
          ${studyImage("assets/portfolio/visual-07.jpg", "Promotional visual design for an online gaming campaign", "Campaign key visual 03")}
          ${studyImage("assets/portfolio/visual-08.jpg", "Wide-format online gaming promotional banner", "Digital campaign banner")}
          ${studyImage("assets/portfolio/visual-09.jpg", "Localized casino promotion artwork", "Localized promotional design 01")}
          ${studyImage("assets/portfolio/visual-10.jpg", "Localized digital gaming campaign visual", "Localized promotional design 02")}
          ${studyImage("assets/portfolio/visual-11.jpg", "Casino campaign art direction and retouching", "Campaign art direction 01")}
          ${studyImage("assets/portfolio/visual-12.jpg", "Online casino banner campaign design", "Campaign art direction 02")}
          ${studyImage("assets/portfolio/visual-13.jpg", "Gaming promotion with visual effects and typography", "Promotional composition")}
          ${studyImage("assets/portfolio/visual-14.jpg", "Digital campaign visual for casino marketing", "Marketing visual")}
          ${studyImage("assets/portfolio/visual-15.jpg", "Casino campaign image retouching and layout", "Retouching and campaign layout")}
        </div>
      </section>
    `,
  },
};
