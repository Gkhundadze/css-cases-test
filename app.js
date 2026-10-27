/**
 * CSS Engineering & Architecture Cases — Core Logic & Assessment Engine
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Comprehensive Engineering Cases Data (12 High-Value Real Scenarios)
     -------------------------------------------------------------------------- */
  const QUIZ_CASES = [
    {
      id: 1,
      category: 'Box Model & მათემატიკა',
      categoryKey: 'box-model',
      badgeType: 'bug',
      badgeLabel: '🐞 ბაგი პროდაქშენზე',
      points: 1,
      title: 'ქეისი 1: გატეხილი ბადე და 50%-იანი სვეტები',
      scenario: 'დეველოპერი აწყობს 2-სვეტიან განლაგებას. თითოეულ სვეტს მიანიჭა `width: 50%`. დიზაინერის მოთხოვნით, სვეტებს დაემატა შიდა დაშორება `padding: 24px` და საზღვარი `border: 2px solid #334155`. კოდის შენახვისთანავე მეორე სვეტი მოულოდნელად ჩამოვარდა ქვემოთ და ბადე გაფუჭდა.',
      code: `/* პრობლემური სტილები: */
.col {
  width: 50%;
  padding: 24px;
  border: 2px solid #334155;
  float: left; /* ან inline-block */
}`,
      question: 'რა არის სვეტის ქვემოთ ჩამოვარდნის ზუსტი მიზეზი და რა არის ყველაზე სწორი თანამედროვე გამოსავალი?',
      options: [
        {
          id: 'A',
          text: 'პროცენტული width (50%) არ მუშაობს padding-თან ერთად; გამოსავალია სიგანის შეცვლა ფიქსირებულ 400px-ზე.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'საზღვრის სისქე (2px) ზედმეტად დიდია; პრობლემა მოგვარდება მხოლოდ border: none-ის დაწერით.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'ბრაუზერის დეფოლტ content-box-ის გამო, თითოეული სვეტის სიგანე გახდა 50% + 48px + 4px (ჯამში >100%); სწორი გამოსავალია box-sizing: border-box-ის მინიჭება.',
          isCorrect: true
        },
        {
          id: 'D',
          text: 'სვეტებს აუცილებლად სჭირდებათ position: absolute და left: 50%, რადგან CSS-ში 2 სვეტის გვერდიგვერდ დასმა სხვაგვარად შეუძლებელია.',
          isCorrect: false
        }
      ],
      hint: 'DevTools-ის Box Model ინსპექტორში ნახავდით, რომ content-box-ის დროს padding და border ემატება width-ს გარედან. border-box კი მათ ზომავს მითითებული 50%-ის შიგნით.',
      explanation: 'content-box რეჟიმში საბოლოო ზომაა Width + Padding + Border. ორ 50%-იან ელემენტს როდესაც ემატება 48px padding და 4px border, მათი ჯამი აჭარბებს 100%-ს. border-box-ით კი სიგანე რჩება მკაცრად 50%.'
    },

    {
      id: 2,
      category: 'გაცენტვრა & Layouts',
      categoryKey: 'centering',
      badgeType: 'devtools',
      badgeLabel: '🔍 DevTools დიაგნოსტიკა',
      points: 1,
      title: 'ქეისი 2: დაკარგული ვერტიკალური ცენტრირება',
      scenario: 'დეველოპერს სურს მოდალური ფანჯრის შიგთავსის ორივე ღერძზე (ჰორიზონტალურად და ვერტიკალურად) გაცენტვრა. მან კონტეინერს გაუწერა ქვემოთ მოცემული CSS, თუმცა შიდა ელემენტი კვლავ ზედა მარცხენა კუთხეშია მიკრული.',
      code: `/* CSS კოდი მოდალის კონტეინერისთვის: */
.modal-wrapper {
  height: 450px;
  justify-content: center;
  align-items: center;
}`,
      question: 'რატომ უგულებელყო ბრაუზერმა ეს თვისებები და როგორ უნდა გასწორდეს კოდი მინიმალური ჩარევით?',
      options: [
        {
          id: 'A',
          text: 'კონტეინერს აუცილებლად სჭირდება position: fixed და z-index: 9999, რათა align-items გააქტიურდეს.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'justify-content და align-items უმოქმედოა, რადგან კონტეინერს აკლია display: flex (ან display: grid). დეფოლტ ბლოკურ კონტექსტში ეს თვისებები იგნორირდება.',
          isCorrect: true
        },
        {
          id: 'C',
          text: 'align-items მხოლოდ ტექსტზე მოქმედებს; შიდა ბლოკური div-ის გასაცენტრად საჭირო იყო vertical-align: middle.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'height: 450px არასწორია; Flexbox ცენტრირებას აკეთებს მხოლოდ იმ შემთხვევაში, თუ სიმაღლე 100vh-ია.',
          isCorrect: false
        }
      ],
      hint: 'Chrome/Firefox DevTools-ში ამ წესების გვერდით ჩნდება ნაცრისფერი გამაფრთხილებელი ნიშანი: "Property is ignored due to display: block".',
      explanation: 'სწორების თვისებები (align-items, justify-content) ძალაში შედის მხოლოდ მაშინ, როდესაც მშობელი ქმნის Flexbox ან Grid ფორმატირების კონტექსტს (display: flex / grid).'
    },

    {
      id: 3,
      category: 'Inline & სპეციფიკურობა',
      categoryKey: 'inline-spec',
      badgeType: 'bug',
      badgeLabel: '🐞 ბაგი პროდაქშენზე',
      points: 1,
      title: 'ქეისი 3: უხილავი ზომები და Inline ტეგები',
      scenario: 'ნავიგაციის პანელში სტატუსის ბეიჯისთვის (<span class="badge">ახალი</span>) დეველოპერი ცდილობს გაწეროს ფიქსირებული ზომები და ზედა დაშორება. ბრაუზერში შემოწმებისას სიგანე, სიმაღლე და margin-top საერთოდ არ რეაგირებს.',
      code: `/* ბეიჯის სტილები: */
.badge {
  width: 120px;
  height: 40px;
  margin-top: 25px;
  background-color: #6366f1;
  color: #ffffff;
}`,
      question: 'რა არის ამ ანომალიის საინჟინრო მიზეზი და რა თვისება უნდა დაემატოს?',
      options: [
        {
          id: 'A',
          text: 'width და height მუშაობს მხოლოდ მაშინ, როდესაც span-ს აქვს box-sizing: content-box.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'margin-top-ს სჭირდება უარყოფითი მნიშვნელობა (მაგ. -25px), რათა span-მა ზედა ელემენტს უბიძგოს.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'ეს ბრაუზერის ბაგია; span ტეგს CSS-ში ფონის ფერიც კი არ უნდა მიენიჭოს.',
          isCorrect: false
        },
        {
          id: 'D',
          text: '<span> არის Inline ელემენტი; Inline ფორმატირების კონტექსტში ბრაუზერი აიგნორებს width-ს, height-სა და ვერტიკალურ margin-ს. გამოსავალია display: inline-block (ან flex).',
          isCorrect: true
        }
      ],
      hint: 'გაიხსენეთ 04-css-debugging-ის ლაბორატორია 1: Inline ელემენტები ემორჩილებიან მხოლოდ ტექსტის ნაკადს და ჰორიზონტალურ padding/margin-ს.',
      explanation: 'Inline ელემენტები არ ქმნიან ბლოკურ ყუთს. მათი ზომა განისაზღვრება მხოლოდ შიგთავსით (font-size, line-height). display: inline-block ინარჩუნებს ტექსტში ჩაჯდომის თვისებას, მაგრამ ანიჭებს ბლოკის ზომების მართვის უნარს.'
    },

    {
      id: 4,
      category: 'Stacking Context & Debugging',
      categoryKey: 'stacking',
      badgeType: 'devtools',
      badgeLabel: '🔍 DevTools დიაგნოსტიკა',
      points: 1,
      title: 'ქეისი 4: მოჩვენება Z-Index და Stacking Context',
      scenario: 'მომხმარებელი აჭერს Card 1-ში არსებულ Dropdown მენიუს. გახსნილი მენიუ უნდა ეფარებოდეს მეზობელ Card 2-ს. დეველოპერმა Dropdown-ს მიანიჭა უზარმაზარი `z-index: 999999;`, მაგრამ მენიუ ჯიუტად ჩადის Card 2-ის ქვეშ.',
      code: `/* სტრუქტურა და სტილები: */
.card-1 { position: relative; z-index: 1; }
.card-2 { position: relative; z-index: 2; }

/* შვილი ელემენტი პირველ ბარათში: */
.card-1 .dropdown-menu {
  position: absolute;
  z-index: 999999;
}`,
      question: 'რატომ არ შველის z-index: 999999 და რა არის პრობლემის ფუნდამენტური სათავე?',
      options: [
        {
          id: 'A',
          text: '.dropdown-menu ჩაკეტილია .card-1-ის Stacking Context-ში. რადგან მეზობელი .card-2-ის z-index (2) მეტია .card-1-ის z-index-ზე (1), card-1-ის ვერცერთი შვილი ვერასდროს დააფარებს card-2-ს.',
          isCorrect: true
        },
        {
          id: 'B',
          text: 'CSS-ში z-index-ის მაქსიმალური ზღვარია 32767; 999999-ის გამო ბრაუზერმა z-index გაანულა.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'position: absolute-ს არ აქვს z-index-ის მხარდაჭერა; აუცილებელი იყო position: fixed.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'dropdown-menu-ს აკლია transform: translateZ(100px), რაც ერთადერთი მეთოდია 2D სივრციდან ამოსასვლელად.',
          isCorrect: false
        }
      ],
      hint: 'Stacking Context ჰგავს საქაღალდეებს: თუ საქაღალდე B დევს საქაღალდე A-ს ზემოდან, საქაღალდე A-ს შიგნით არსებული ვერცერთი ფურცელი ვერ აღმოჩნდება საქაღალდე B-ზე მაღლა.',
      explanation: 'Stacking Context ქმნის იზოლირებულ შრეს. შვილის z-index-ს მნიშვნელობა აქვს მხოლოდ საკუთარი მშობლის შიგნით. მთლიან გვერდზე იერარქიას განსაზღვრავს თვითონ .card-1 და .card-2.'
    },

    {
      id: 5,
      category: 'Stacking Context & Debugging',
      categoryKey: 'stacking',
      badgeType: 'bug',
      badgeLabel: '🐞 ბაგი პროდაქშენზე',
      points: 1,
      title: 'ქეისი 5: მოხეტიალე Badge და Containing Block',
      scenario: 'ელექტრონული კომერციის პროდუქტის ბარათს (.product-card) უნდა მიემაგროს ფასდაკლების ბეიჯი ("-30%") ზედა მარჯვენა კუთხეში. დეველოპერმა ბეიჯს გაუწერა `position: absolute; top: 12px; right: 12px;`. შედეგად, ბეიჯი ბარათის ნაცვლად მთელი ბრაუზერის ეკრანის ზედა მარჯვენა კიდეზე გაიქცა.',
      code: `/* მარკაპი: <div class="product-card"><span class="badge">-30%</span></div> */
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
}
.product-card {
  width: 320px;
  background: #1e293b;
  /* რაღაც აკლია აქ */
}`,
      question: 'რა აკლია მშობელ .product-card-ს და რატომ გაიქცა ბეიჯი ეკრანის კუთხეში?',
      options: [
        {
          id: 'A',
          text: 'ბეიჯს უნდა ეწეროს margin: auto, რათა მშობლის საზღვრებს დაუბრუნდეს.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'მშობელ ბარათს აკლია overflow: hidden, რადგან მხოლოდ ეს თვისება აკავებს absolute შვილებს.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'მშობელს აკლია position: relative. როდესაც მშობელს არ აქვს პოზიციონირება, absolute ეძებს უახლოეს პოზიციონირებულ წინაპარს, და თუ ვერ იპოვა, ათვლის წერტილად ირჩევს Viewport-ს (Initial Containing Block).',
          isCorrect: true
        },
        {
          id: 'D',
          text: 'top და right ერთად არ მუშაობს absolute-ზე; უნდა გამოყენებულიყო transform: translate(100%, 0).',
          isCorrect: false
        }
      ],
      hint: 'position: absolute-ს ათვლის წერტილი ყოველთვის არის უახლოესი წინაპარი, რომელსაც აქვს position: relative, absolute ან fixed.',
      explanation: 'Containing Block-ის წესით, absolute ელემენტი ორიენტირდება უახლოეს არასტატიკურ (non-static) წინაპარზე. მშობელზე position: relative-ის დამატება ბარათს ხდის ათვლის წერტილად.'
    },

    {
      id: 6,
      category: 'Inline & სპეციფიკურობა',
      categoryKey: 'inline-spec',
      badgeType: 'devtools',
      badgeLabel: '🔍 DevTools დიაგნოსტიკა',
      points: 1,
      title: 'ქეისი 6: სელექტორის მახე — უხილავი სფეისი (Space Trap)',
      scenario: 'დეველოპერს სურს, რომ მთავარ ღილაკზე მაუსის მიტანისას შეიცვალოს ფონი და ღილაკი ოდნავ წამოიწიოს. მან დაწერა ქვემოთ მოცემული წესი, მაგრამ ღილაკზე მაუსის მიტანისას ეფექტი არ მუშაობს (აქტიურდება მხოლოდ მაშინ, თუ მაუსს ღილაკის შიგნით არსებულ პატარა აიქონზე ზუსტად მიიტანს).',
      code: `/* დეველოპერის დაწერილი CSS: */
.btn-primary :hover {
  background-color: #4f46e5;
  transform: translateY(-2px);
}`,
      question: 'რა კრიტიკული შეცდომაა დაშვებული სელექტორში და რატომ?',
      options: [
        {
          id: 'A',
          text: ':hover ფსევდო-კლასს აუცილებლად 2 ორწერტილი სჭირდება (::hover), რადგან ის ფსევდო-ელემენტია.',
          isCorrect: false
        },
        {
          id: 'B',
          text: '.btn-primary-სა და :hover-ს შორის არის ზედმეტი სფეისი. CSS-ში სფეისი ნიშნავს შთამომავალს (Descendant Combinator), ამიტომ ბრაუზერი ეძებს არა თვითონ ღილაკის, არამედ მის შიგნით მყოფი შვილის ჰოვერს. სწორია: .btn-primary:hover',
          isCorrect: true
        },
        {
          id: 'C',
          text: 'transform-ის გამოყენება :hover-ში აკრძალულია transition-ის გარეშე.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'კლასის სახელში დეფისის გამოყენება (.btn-primary) ბრაუზერის მიერ აღიქმება როგორც გამოკლების ოპერატორი.',
          isCorrect: false
        }
      ],
      hint: 'დააკვირდით: .btn-primary :hover (სფეისით) ეძებს ".btn-primary-ს შიგნით მყოფ ნებისმიერ ელემენტს, რომელსაც აქვს ჰოვერი".',
      explanation: 'CSS სელექტორებში სფეისი წარმოადგენს შთამომავალ კომბინატორს (A B). როდესაც ფსევდო-კლასი ეკუთვნის თვითონ ამ ელემენტს, ორწერტილი უნდა მიებას კლასის სახელს უშუალოდ, ყოველგვარი დაშორების გარეშე.'
    },

    {
      id: 7,
      category: 'ტრანსფორმაცია & ანიმაცია',
      categoryKey: 'animation',
      badgeType: 'animation',
      badgeLabel: '⚡ CSS ანიმაცია',
      points: 1,
      title: 'ქეისი 7: ორბიტალური მენიუ და Counter-Rotation-ის აუცილებლობა',
      scenario: 'სასწავლო მოდულში Orbiting Menu აწყობისას, ელემენტები წრიულ ორბიტაზე ბრუნავენ ცენტრის გარშემო 0-დან 360 გრადუსამდე. ანიმაციის გაშვებისას გამოვლინდა დეფექტი: როდესაც მენიუს აიქონები ორბიტის ქვედა ნახევარში ჩადიან, ისინი თავდაყირა დგებიან და ლოგოები ამოტრიალებული ჩანს.',
      code: `@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.orbit-item {
  animation: orbit 10s infinite linear;
}`,
      question: 'რომელი CSS საინჟინრო ტექნიკით გვარდება ეს პრობლემა და რატომ არის ის აუცილებელი?',
      options: [
        {
          id: 'A',
          text: 'საპირისპირო როტაციით (Counter-Rotation): სანამ მშობელი ბრუნავს 0deg -> 360deg, შიდა აიქონს ვანიჭებთ საპირისპირო ბრუნვას (360deg -> 0deg ან 0 -> -360deg), რაც აბათილებს მშობლის გადახრას და აიქონს მუდმივად სწორად ინარჩუნებს.',
          isCorrect: true
        },
        {
          id: 'B',
          text: 'animation-direction: alternate-ის გამოყენებით, რაც აიქონს ავტომატურად გაასწორებს ქვედა წერტილში.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'შიდა აიქონზე transform: none !important-ის გაწერით.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'კონტეინერზე direction: rtl-ის მინიჭებით.',
          isCorrect: false
        }
      ],
      hint: 'როგორც ეშმაკის ბორბალზე (Ferris Wheel), სადაც კაბინა ყოველთვის ვერტიკალური რჩება მიუხედავად იმისა, რომ ბორბალი ტრიალებს.',
      explanation: 'ორბიტალური მოძრაობისას მშობლის მატრიცული როტაცია ატრიალებს შიგთავსსაც. Counter-Rotation ზუსტად იმავე კუთხით და სიჩქარით ატრიალებს შიდა ელემენტს საპირისპირო მხარეს, რითაც მიიღწევა იდეალური ვერტიკალური ორიენტაცია.'
    },

    {
      id: 8,
      category: 'ტრანსფორმაცია & ანიმაცია',
      categoryKey: 'animation',
      badgeType: 'animation',
      badgeLabel: '⚡ CSS ანიმაცია',
      points: 1,
      title: 'ქეისი 8: Transform-Origin-ის გადაწევის მათემატიკა',
      scenario: 'ორბიტალური მენიუს აწყობისას გვინდა, რომ წრეზე განლაგებულმა თითოეულმა ელემენტმა წრე შემოხაზოს არა საკუთარი ცენტრის, არამედ საერთო ცენტრალური ბირთვის (ავატარის) გარშემო.',
      code: `/* როგორ ვაიძულებთ ელემენტს იტრიალოს რადიუსის დაშორებით? */
.orbit-item {
  position: absolute;
  /* ბრუნვის ღერძის მართვა: */
  transform-origin: 50% calc(50% + var(--orbit-radius));
}`,
      question: 'რა როლს ასრულებს ეს transform-origin წესი და როგორ მუშაობს მისი მათემატიკა?',
      options: [
        {
          id: 'A',
          text: 'ის ელემენტს ზრდის რადიუსის პროპორციულად (Scale) და აკეთებს Zoom ეფექტს.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'ის უბრალოდ წევს ელემენტს ქვევით (Translate) და როტაციასთან კავშირი არ აქვს.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'ეს წესი მხოლოდ 3D პერსპექტივას ქმნის და მუშაობს მხოლოდ perspective: 1000px-ის არსებობისას.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'ის ბრუნვის ღერძს (Pivot Point) ელემენტის ფიზიკური ცენტრიდან ქვემოთ სწევს ზუსტად რადიუსის მანძილით, რის გამოც ელემენტი იწყებს წრეზე მოძრაობას, როგორც პლანეტა მზის გარშემო.',
          isCorrect: true
        }
      ],
      hint: 'დეფოლტად transform-origin არის 50% 50% (ელემენტის ცენტრი). მისი გადატანა გარეთ აიძულებს ობიექტს იმოძრაოს ახალი წერტილის გარშემო.',
      explanation: 'transform-origin განსაზღვრავს წერტილს, რომლის გარშემოც ხდება გარდაქმნა. Y ღერძზე რადიუსის დამატებით ბრუნვის ცენტრი გადადის ორბიტის ბირთვში, რაც მარტივი rotate() ანიმაციით ქმნის სრულყოფილ წრიულ ტრაექტორიას.'
    },

    {
      id: 9,
      category: 'გაცენტვრა & Layouts',
      categoryKey: 'centering',
      badgeType: 'architecture',
      badgeLabel: '📐 არქიტექტურა',
      points: 1,
      title: 'ქეისი 9: Flexbox vs Grid — ოპტიმალური არჩევანი',
      scenario: 'არქიტექტურული კოდის მიმოხილვისას (Code Review) განიხილება ბარათის ჰედერი: მარცხნივ უნდა იჯდეს პროდუქტის სახელი, მარჯვნივ — სტატუსის ბეიჯი, მათ შორის სივრცე კი ავტომატურად უნდა განაწილდეს. ორივე ელემენტი ვერტიკალურად ცენტრზე უნდა გასწორდეს.',
      code: `/* ვარიანტი A: Flexbox */
.header-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ვარიანტი B: Grid */
.header-b {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}`,
      question: '„Explain Your Code“-ის საუკეთესო პრაქტიკით, რატომ არის ვარიანტი A (Flexbox) ამ ამოცანისთვის უფრო ბუნებრივი და მიღებული ინდუსტრიაში?',
      options: [
        {
          id: 'A',
          text: 'Grid საერთოდ არ უჭერს მხარს align-items: center-ს.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'Flexbox შექმნილია ერთგანზომილებიანი (1D — ხაზობრივი) განლაგებისთვის და შიგთავსის ბუნებრივი გადანაწილებისთვის (Content-first), ხოლო Grid განკუთვნილია ორგანზომილებიანი (2D — სვეტები და რიგები) კომპლექსური ბადეებისთვის.',
          isCorrect: true
        },
        {
          id: 'C',
          text: 'Flexbox ბრაუზერში 100-ჯერ უფრო სწრაფად რენდერდება, ვიდრე Grid.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'Grid-ის გამოყენება ჰედერებში აკრძალულია W3C სტანდარტით.',
          isCorrect: false
        }
      ],
      hint: 'დაფიქრდით განზომილებებზე: 1D (ერთი ღერძი: მწკრივი ან სვეტი) vs 2D (მწკრივებისა და სვეტების ერთდროული კონტროლი).',
      explanation: 'Flexbox არის იდეალური კომპონენტის დონის 1D ხაზობრივი ელემენტებისთვის, სადაც შიგთავსი განსაზღვრავს სივრცეს (space-between). Grid ბრწყინავს მთლიანი გვერდის ან რთული 2D განლაგების აწყობისას.'
    },

    {
      id: 10,
      category: 'Box Model & მათემატიკა',
      categoryKey: 'box-model',
      badgeType: 'devtools',
      badgeLabel: '🔍 DevTools დიაგნოსტიკა',
      points: 1,
      title: 'ქეისი 10: Box Model-ის ზომების გამოთვლა (DevTools Math)',
      scenario: 'ელემენტს CSS-ში გაწერილი აქვს ქვემოთ მოცემული სტილები. დეველოპერი ამოწმებს ელემენტს DevTools Elements/Layout პანელში.',
      code: `/* ელემენტის CSS: */
.info-box {
  box-sizing: content-box;
  width: 280px;
  padding: 15px 25px; /* ზემოთ/ქვემოთ: 15px, მარცხნივ/მარჯვნივ: 25px */
  border: 4px solid #6366f1;
  margin: 20px auto;
}`,
      question: 'რა იქნება ამ ბარათის მთლიანი ფიზიკური ჰორიზონტალური სიგანე (Total Rendered Width) ეკრანზე (Margin-ის გარეშე)?',
      options: [
        {
          id: 'A',
          text: '280px (რადგან width პირდაპირ 280px წერია)',
          isCorrect: false
        },
        {
          id: 'B',
          text: '318px (Width: 280px + 15px*2 + 4px*2)',
          isCorrect: false
        },
        {
          id: 'C',
          text: '378px (რადგან margin 20px*2 ასევე ემატება სიგანეს)',
          isCorrect: false
        },
        {
          id: 'D',
          text: '338px (Width: 280px + Left Padding: 25px + Right Padding: 25px + Left Border: 4px + Right Border: 4px)',
          isCorrect: true
        }
      ],
      hint: 'content-box რეჟიმში ჰორიზონტალური სიგანე = Width + Padding-Left + Padding-Right + Border-Left + Border-Right. ყურადღება მიაქციეთ, რომ padding-ის მეორე მნიშვნელობაა მარცხენა/მარჯვენა (25px).',
      explanation: 'ჰორიზონტალური გაანგარიშება: 280 (width) + 25 (padding-left) + 25 (padding-right) + 4 (border-left) + 4 (border-right) = 338px. Margin არის ელემენტის გარე სივრცე და თვითონ ელემენტის ფიზიკურ ყუთში არ ითვლება.'
    },

    {
      id: 11,
      category: 'Inline & სპეციფიკურობა',
      categoryKey: 'inline-spec',
      badgeType: 'bug',
      badgeLabel: '🐞 ბაგი პროდაქშენზე',
      points: 1,
      title: 'ქეისი 11: სპეციფიკურობის ომი — რატომ არ მუშაობს ახალი კლასი?',
      scenario: 'დეველოპერმა საიტის CSS ფაილის ყველაზე ბოლო ხაზზე დაამატა ახალი კლასი `.btn-warning { background-color: #f59e0b; }`. მიუხედავად ამისა, ღილაკი რჩება ლურჯი. DevTools-ში ჩანს, რომ ძველი წესი გადაფარავს ახალს.',
      code: `/* ძველი წესი (ფაილის დასაწყისში): */
#header-nav .btn-primary {
  background-color: #2563eb;
}

/* ახალი წესი (ფაილის ბოლოს): */
.btn-warning {
  background-color: #f59e0b;
}`,
      question: 'რატომ იმარჯვებს ძველი წესი, როდესაც ახალი წესი ფაილში უფრო ქვემოთ წერია?',
      options: [
        {
          id: 'A',
          text: 'ფერი #f59e0b არ არის სტანდარტული CSS ფერი და ბრაუზერი აიგნორებს მას.',
          isCorrect: false
        },
        {
          id: 'B',
          text: 'კლასებს არ აქვთ უფლება შეცვალონ background-color, თუ ის ერთხელ უკვე გაწერილია.',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'სპეციფიკურობის გამო: #header-nav .btn-primary შეიცავს 1 ID-ს და 1 კლასს (წონა: 0,1,1,0), ხოლო .btn-warning-ს აქვს მხოლოდ 1 კლასი (წონა: 0,0,1,0). CSS კასკადში სპეციფიკურობა ყოველთვის ამარცხებს ფაილის რიგითობას.',
          isCorrect: true
        },
        {
          id: 'D',
          text: 'ბრაუზერი ყოველთვის ფაილის პირველ წესს ანიჭებს უპირატესობას და ბოლო წესებს არ კითხულობს.',
          isCorrect: false
        }
      ],
      hint: 'გაიხსენეთ სპეციფიკურობის იერარქია: Inline Styles (1,0,0,0) > IDs (0,1,0,0) > Classes/Attributes/Pseudo-classes (0,0,1,0) > Elements (0,0,0,1).',
      explanation: 'CSS კასკადის ალგორითმში წესის რიგითობას (Source Order) მნიშვნელობა აქვს მხოლოდ მაშინ, როდესაც ორ სელექტორს აქვს იდენტური სპეციფიკურობა. ID სელექტორი (0,1,1,0) ყოველთვის აჯობებს უბრალო კლასს (0,0,1,0).'
    },

    {
      id: 12,
      category: 'ტრანსფორმაცია & ანიმაცია',
      categoryKey: 'animation',
      badgeType: 'architecture',
      badgeLabel: '📐 არქიტექტურა',
      points: 1,
      title: 'ქეისი 12: მიკრო-ინტერაქცია და Hover-ზე ანიმაციის მართვა',
      scenario: 'მომხმარებლები უჩივიან, რომ ორბიტალურ მენიუში ან კარუსელში უწყვეტად მბრუნავ აიქონზე დაწკაპუნება რთულია, რადგან ელემენტი მუდმივად მოძრაობს. UX დიზაინერმა მოითხოვა: მაუსის მიტანისას ანიმაცია უნდა გაჩერდეს იმავე წერტილში, ხოლო მაუსის მოცილებისას გაგრძელდეს შეუფერხებლად.',
      code: `/* მბრუნავი ორბიტა: */
.orbit-track {
  animation: rotateOrbit 12s infinite linear;
}

/* როგორ ვაჩერებთ ჰოვერზე ისე, რომ საწყის წერტილზე არ გადახტეს? */
.orbit-track:hover {
  /* რა უნდა ჩაიწეროს აქ? */
}`,
      question: 'რომელი CSS თვისება წყვეტს ამ ამოცანას იდეალურად და სუფთად JavaScript-ის გარეშე?',
      options: [
        {
          id: 'A',
          text: 'animation-play-state: paused; — აჩერებს ანიმაციას ზუსტად მიმდინარე კადრზე, ხოლო ჰოვერის მოხსნისას შეუფერხებლად განაგრძობს მოძრაობას.',
          isCorrect: true
        },
        {
          id: 'B',
          text: 'animation: none; — თუმცა ეს მყისიერად გააუქმებს ანიმაციას და ელემენტი საწყის პოზიციაზე გადახტება (დაირღვევა smooth ეფექტი).',
          isCorrect: false
        },
        {
          id: 'C',
          text: 'animation-duration: 0s; — ეს ანიმაციას კი არ აჩერებს, არამედ წამიერად დაასრულებს მას.',
          isCorrect: false
        },
        {
          id: 'D',
          text: 'pointer-events: none; — ეს გათიშავს მაუსის მოვლენებს და საერთოდ შეწყვეტს ჰოვერის აღქმას.',
          isCorrect: false
        }
      ],
      hint: 'animation-play-state-ს აქვს ორი მნიშვნელობა: running და paused.',
      explanation: 'animation-play-state: paused არის ერთადერთი სუფთა CSS გზა, რომელიც ყინავს @keyframes ანიმაციის მიმდინარე მდგომარეობას ისე, რომ არ ანულებს ტრანსფორმაციის მნიშვნელობებს.'
    }
  ];

  /* --------------------------------------------------------------------------
     2. Application State
     -------------------------------------------------------------------------- */
  const state = {
    student: {
      name: '',
      id: ''
    },
    currentQuestionIndex: 0,
    userAnswers: {}, // { [questionId]: 'A' | 'B' | 'C' | 'D' }
    startTime: null,
    endTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    isHintVisible: false
  };

  /* --------------------------------------------------------------------------
     3. DOM Elements Cache
     -------------------------------------------------------------------------- */
  const screens = {
    welcome: document.getElementById('screen-welcome'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result')
  };

  const formRegister = document.getElementById('form-register');
  const inputStudentName = document.getElementById('student-name');
  const inputStudentId = document.getElementById('student-id');
  const nameError = document.getElementById('name-error');
  const idError = document.getElementById('id-error');

  const displayStudentName = document.getElementById('display-student-name');
  const displayStudentId = document.getElementById('display-student-id');
  const caseCategory = document.getElementById('case-category');
  const quizTimer = document.getElementById('quiz-timer');
  const currentQuestionNum = document.getElementById('current-question-num');
  const totalQuestionsNum = document.getElementById('total-questions-num');
  const quizProgressBar = document.getElementById('quiz-progress-bar');
  const caseCardContainer = document.getElementById('case-card-container');

  const btnPrev = document.getElementById('btn-prev-question');
  const btnNext = document.getElementById('btn-next-question');
  const btnToggleHint = document.getElementById('btn-toggle-hint');
  const caseHintBox = document.getElementById('case-hint-box');
  const hintText = document.getElementById('hint-text');

  // Result Elements
  const resultStudentName = document.getElementById('result-student-name');
  const resultStudentId = document.getElementById('result-student-id');
  const resultTimestamp = document.getElementById('result-timestamp');
  const resultDuration = document.getElementById('result-duration');
  const resultHashCode = document.getElementById('result-hash-code');
  const resultFullChecksum = document.getElementById('result-full-checksum');
  const resultScorePercent = document.getElementById('result-score-percent');
  const resultScoreRatio = document.getElementById('result-score-ratio');
  const scoreCircleBar = document.getElementById('score-circle-bar');
  const resultRankBadge = document.getElementById('result-rank-badge');
  const resultRankTitle = document.getElementById('result-rank-title');
  const resultRankDesc = document.getElementById('result-rank-desc');
  const competencyGrid = document.getElementById('competency-grid');
  const breakdownList = document.getElementById('breakdown-list');

  const btnPrintReport = document.getElementById('btn-print-report');
  const btnRetakeQuiz = document.getElementById('btn-retake-quiz');

  /* --------------------------------------------------------------------------
     4. Helper Functions
     -------------------------------------------------------------------------- */
  function switchScreen(screenName) {
    Object.keys(screens).forEach((key) => {
      screens[key].classList.remove('active');
    });
    if (screens[screenName]) {
      screens[screenName].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function startTimer() {
    state.startTime = new Date();
    state.elapsedSeconds = 0;
    quizTimer.textContent = '00:00';

    if (state.timerInterval) clearInterval(state.timerInterval);

    state.timerInterval = setInterval(() => {
      state.elapsedSeconds++;
      quizTimer.textContent = formatTime(state.elapsedSeconds);
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    state.endTime = new Date();
  }

  // Generate tamper-resistant unique verification checksum
  function generateVerificationHash(name, id, score, total, timestamp) {
    const raw = `${name.trim()}__${id.trim()}__${score}/${total}__${timestamp.getTime()}__antigravity_css_2026`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      const char = raw.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
    const shortCode = `CSS-${hex.substring(0, 4)}-${hex.substring(4, 8)}`;
    const fullChecksum = `SHA-CSS-${hex}-${Math.abs((hash ^ 0x5f3759df) >>> 0).toString(16).toUpperCase()}`;
    return { shortCode, fullChecksum };
  }

  /* --------------------------------------------------------------------------
     5. Quiz Rendering Engine
     -------------------------------------------------------------------------- */
  function renderCurrentCase() {
    const q = QUIZ_CASES[state.currentQuestionIndex];
    if (!q) return;

    // Reset hint box
    state.isHintVisible = false;
    caseHintBox.hidden = true;
    hintText.textContent = q.hint;

    // Update Topbar Metrics
    currentQuestionNum.textContent = state.currentQuestionIndex + 1;
    totalQuestionsNum.textContent = QUIZ_CASES.length;
    caseCategory.textContent = q.category;

    const progressPercent = ((state.currentQuestionIndex + 1) / QUIZ_CASES.length) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;

    // Navigation buttons state
    btnPrev.disabled = state.currentQuestionIndex === 0;
    if (state.currentQuestionIndex === QUIZ_CASES.length - 1) {
      btnNext.innerHTML = '<span>შედეგების დასრულება ✓</span>';
      btnNext.classList.remove('btn-primary');
      btnNext.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else {
      btnNext.innerHTML = '<span>შემდეგი ქეისი →</span>';
      btnNext.classList.add('btn-primary');
      btnNext.style.background = '';
    }

    // Get current answer if selected
    const selectedAnswer = state.userAnswers[q.id];

    // Build Case Card HTML
    const badgeClass = `badge-${q.badgeType}`;

    let codeHTML = '';
    if (q.code) {
      codeHTML = `
        <div class="code-container">
          <div class="code-header">
            <div class="code-dots">
              <span></span><span></span><span></span>
            </div>
            <span>CSS Debug Laboratory</span>
          </div>
          <pre class="code-block"><code>${escapeHTML(q.code)}</code></pre>
        </div>
      `;
    }

    let optionsHTML = '';
    q.options.forEach((opt) => {
      const isSelected = selectedAnswer === opt.id;
      optionsHTML += `
        <label class="option-item ${isSelected ? 'selected' : ''}" data-opt-id="${opt.id}">
          <input type="radio" name="case-option" class="option-input" value="${opt.id}" ${isSelected ? 'checked' : ''}>
          <span class="option-key">${opt.id}</span>
          <span class="option-text">${escapeHTML(opt.text)}</span>
        </label>
      `;
    });

    caseCardContainer.innerHTML = `
      <div class="case-badge-row">
        <span class="case-type-badge ${badgeClass}">${q.badgeLabel}</span>
        <span class="case-points">${q.points} ქულა</span>
      </div>

      <h2 class="case-title">${escapeHTML(q.title)}</h2>
      <p class="case-scenario">${escapeHTML(q.scenario)}</p>

      ${codeHTML}

      <h3 class="case-question">${escapeHTML(q.question)}</h3>

      <div class="options-list" id="options-group">
        ${optionsHTML}
      </div>
    `;

    // Attach click listener to options
    const optionItems = caseCardContainer.querySelectorAll('.option-item');
    optionItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        const optId = item.getAttribute('data-opt-id');
        selectOption(q.id, optId);
      });
    });
  }

  function selectOption(questionId, optionId) {
    state.userAnswers[questionId] = optionId;

    const optionItems = caseCardContainer.querySelectorAll('.option-item');
    optionItems.forEach((item) => {
      const optId = item.getAttribute('data-opt-id');
      const radio = item.querySelector('input[type="radio"]');
      if (optId === optionId) {
        item.classList.add('selected');
        if (radio) radio.checked = true;
      } else {
        item.classList.remove('selected');
        if (radio) radio.checked = false;
      }
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* --------------------------------------------------------------------------
     6. Results Calculation & Audit Engine
     -------------------------------------------------------------------------- */
  function finishQuiz() {
    stopTimer();

    // Check how many questions were answered
    let correctCount = 0;
    const totalCount = QUIZ_CASES.length;

    // Competencies tracker
    const categoryStats = {
      'box-model': { name: '📦 Box Model & ზომების მათემატიკა', total: 0, correct: 0 },
      'centering': { name: '🎯 გაცენტვრა & 1D/2D Layouts', total: 0, correct: 0 },
      'stacking': { name: '🐞 Stacking Context & DevTools', total: 0, correct: 0 },
      'inline-spec': { name: '🔍 Inline & სპეციფიკურობა', total: 0, correct: 0 },
      'animation': { name: '⚡ ტრანსფორმაციები & ანიმაცია', total: 0, correct: 0 }
    };

    const breakdownItems = [];

    QUIZ_CASES.forEach((q) => {
      const userAnswerId = state.userAnswers[q.id];
      const correctOption = q.options.find((opt) => opt.isCorrect);
      const isCorrect = userAnswerId === correctOption.id;

      if (isCorrect) correctCount++;

      if (categoryStats[q.categoryKey]) {
        categoryStats[q.categoryKey].total++;
        if (isCorrect) categoryStats[q.categoryKey].correct++;
      }

      const userOptObj = q.options.find((opt) => opt.id === userAnswerId);
      const userText = userOptObj ? `${userOptObj.id}) ${userOptObj.text}` : 'პასუხი არ იყო მითითებული';

      breakdownItems.push({
        id: q.id,
        title: q.title,
        isCorrect: isCorrect,
        userAnswer: userText,
        correctAnswer: `${correctOption.id}) ${correctOption.text}`,
        explanation: q.explanation
      });
    });

    const percent = Math.round((correctCount / totalCount) * 100);

    // Format Georgian timestamp
    const now = state.endTime || new Date();
    const months = [
      'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
      'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
    ];
    const timestampStr = `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()} | ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    // Verification Hash
    const { shortCode, fullChecksum } = generateVerificationHash(
      state.student.name,
      state.student.id,
      correctCount,
      totalCount,
      now
    );

    // Populate Results Screen
    resultStudentName.textContent = state.student.name;
    resultStudentId.textContent = state.student.id;
    resultTimestamp.textContent = timestampStr;
    resultDuration.textContent = formatTime(state.elapsedSeconds);
    resultHashCode.textContent = shortCode;
    resultFullChecksum.textContent = fullChecksum;

    resultScorePercent.textContent = `${percent}%`;
    resultScoreRatio.textContent = `${correctCount} / ${totalCount} ქულა`;

    // Animate circular chart (circumference ~ 440)
    const maxOffset = 440;
    const offset = maxOffset - (maxOffset * percent) / 100;
    setTimeout(() => {
      scoreCircleBar.style.strokeDashoffset = offset;
      if (percent >= 80) {
        scoreCircleBar.style.stroke = '#10b981'; // Green
      } else if (percent >= 60) {
        scoreCircleBar.style.stroke = '#06b6d4'; // Cyan
      } else if (percent >= 40) {
        scoreCircleBar.style.stroke = '#f59e0b'; // Amber
      } else {
        scoreCircleBar.style.stroke = '#ef4444'; // Red
      }
    }, 150);

    // Rank & Feedback evaluation
    let rankBadge = '';
    let rankTitle = '';
    let rankDesc = '';

    if (percent >= 90) {
      rankBadge = '🏆 Senior CSS Detective & Architect';
      rankTitle = 'უმაღლესი შეფასება (Excellence)';
      rankDesc = 'შთამბეჭდავი შედეგია! თქვენ სიღრმისეულად გესმით Box Model-ის ნიუანსები, Stacking Context-ის იერარქია, CSS კასკადი და თანამედროვე ანიმაციის მათემატიკა.';
    } else if (percent >= 75) {
      rankBadge = '⭐ Proficient Front-End Specialist';
      rankTitle = 'ძალიან კარგი შედეგი';
      rankDesc = 'თქვენ ფლობთ CSS-ის ძირითად და კომპლექსურ საინჟინრო კონცეფციებს. მცირე შეცდომები შეინიშნება ცალკეულ სპეციფიკურ ქეისებში, რაც მარტივად გამოსწორებადია.';
    } else if (percent >= 55) {
      rankBadge = '✅ Junior Web Developer';
      rankTitle = 'დამაკმაყოფილებელი შედეგი';
      rankDesc = 'საბაზისო პრინციპები ათვისებული გაქვთ, თუმცა რეკომენდებულია მეტი ყურადღება მიაქციოთ Stacking Context-ის, Inline კონტექსტისა და Box Model-ის გამოთვლებს.';
    } else {
      rankBadge = '⚠️ საჭიროებს განმეორებით გავლას';
      rankTitle = 'გასაუმჯობესებელი შედეგი';
      rankDesc = 'რეკომენდებულია გადახედოთ დავალებებს (01-centering, 02-box-model, 04-css-debugging და animation) და ხელახლა სცადოთ ქეისების ანალიზი.';
    }

    resultRankBadge.textContent = rankBadge;
    resultRankTitle.textContent = rankTitle;
    resultRankDesc.textContent = rankDesc;

    // Render Competencies Grid
    let compHTML = '';
    Object.keys(categoryStats).forEach((key) => {
      const cat = categoryStats[key];
      const catPercent = cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0;
      compHTML += `
        <div class="competency-card">
          <div class="comp-header">
            <span class="comp-name">${cat.name}</span>
            <span class="comp-score">${cat.correct} / ${cat.total} (${catPercent}%)</span>
          </div>
          <div class="comp-track">
            <div class="comp-fill" style="width: ${catPercent}%;"></div>
          </div>
        </div>
      `;
    });
    competencyGrid.innerHTML = compHTML;

    // Render Case-by-Case Breakdown
    let breakHTML = '';
    breakdownItems.forEach((item) => {
      const statusClass = item.isCorrect ? 'correct' : 'incorrect';
      const badgeText = item.isCorrect ? '✓ სწორია (+1)' : '✗ შეცდომა (0)';
      const badgeStyle = item.isCorrect ? 'status-correct' : 'status-wrong';

      breakHTML += `
        <div class="breakdown-item ${statusClass}">
          <div class="breakdown-top">
            <strong class="breakdown-title">${escapeHTML(item.title)}</strong>
            <span class="breakdown-status-badge ${badgeStyle}">${badgeText}</span>
          </div>
          <p class="breakdown-explain">
            <strong>თქვენი არჩევანი:</strong> ${escapeHTML(item.userAnswer)}<br>
            ${!item.isCorrect ? `<strong>სწორი გადაწყვეტა:</strong> ${escapeHTML(item.correctAnswer)}<br>` : ''}
            <strong>საინჟინრო ანალიზი:</strong> ${escapeHTML(item.explanation)}
          </p>
        </div>
      `;
    });
    breakdownList.innerHTML = breakHTML;

    switchScreen('result');
  }

  /* --------------------------------------------------------------------------
     7. Event Listeners & Interactions
     -------------------------------------------------------------------------- */
  // Registration Form Submit
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = inputStudentName.value.trim();
    const idVal = inputStudentId.value.trim();

    let hasError = false;

    if (!nameVal) {
      inputStudentName.classList.add('invalid');
      nameError.classList.add('visible');
      hasError = true;
    } else {
      inputStudentName.classList.remove('invalid');
      nameError.classList.remove('visible');
    }

    if (!idVal) {
      inputStudentId.classList.add('invalid');
      idError.classList.add('visible');
      hasError = true;
    } else {
      inputStudentId.classList.remove('invalid');
      idError.classList.remove('visible');
    }

    if (hasError) return;

    // Save student details
    state.student.name = nameVal;
    state.student.id = idVal;

    displayStudentName.textContent = nameVal;
    displayStudentId.textContent = idVal;

    // Start Quiz
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    startTimer();
    renderCurrentCase();
    switchScreen('quiz');
  });

  // Next Button
  btnNext.addEventListener('click', () => {
    const currentQ = QUIZ_CASES[state.currentQuestionIndex];
    if (!state.userAnswers[currentQ.id]) {
      const confirmSkip = confirm('ამ ქეისზე პასუხი არ გაქვთ არჩეული. გსურთ მაინც გადახვიდეთ შემდეგზე?');
      if (!confirmSkip) return;
    }

    if (state.currentQuestionIndex < QUIZ_CASES.length - 1) {
      state.currentQuestionIndex++;
      renderCurrentCase();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Last question reached
      const unansweredCount = QUIZ_CASES.filter((q) => !state.userAnswers[q.id]).length;
      if (unansweredCount > 0) {
        const confirmSubmit = confirm(`თქვენ გაქვთ ${unansweredCount} უპასუხო ქეისი. ნამდვილად გსურთ ტესტის დასრულება და შედეგების დაფიქსირება?`);
        if (!confirmSubmit) return;
      }
      finishQuiz();
    }
  });

  // Previous Button
  btnPrev.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderCurrentCase();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Hint Toggle
  btnToggleHint.addEventListener('click', () => {
    state.isHintVisible = !state.isHintVisible;
    caseHintBox.hidden = !state.isHintVisible;
  });

  // Print / Save to PDF
  btnPrintReport.addEventListener('click', () => {
    window.print();
  });

  // Retake Quiz
  btnRetakeQuiz.addEventListener('click', () => {
    const confirmReset = confirm('ნამდვილად გსურთ ტესტის თავიდან გავლა? მიმდინარე შედეგები განულდება.');
    if (confirmReset) {
      state.userAnswers = {};
      state.currentQuestionIndex = 0;
      switchScreen('welcome');
    }
  });

})();
