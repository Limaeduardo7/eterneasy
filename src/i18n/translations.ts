export type Lang = "pt" | "en" | "es";

// ─── Portuguese (base type) ────────────────────────────────────────────────
const pt = {
  nav: {
    items: [
      { label: "O que é",       href: "#o-que-e" },
      { label: "Problema",      href: "#problema" },
      { label: "Como funciona", href: "#mecanismo" },
      { label: "Planos",        href: "#oferta" },
      { label: "Objeções",      href: "#objecoes" },
    ],
    cta: "Cadastrar grátis",
  },

  hero: {
    badge: "Cadastro gratuito · Pague só quando vender",
    headlinePart1: "Nova receita em",
    headlinePart2: "cada evento.",
    headlinePart3: "Cadastro gratuito.",
    headlinePart4: "Sem mensalidade.",
    subtitle:
      "Cadastre grátis, ofereça dentro do fluxo comercial que você já tem com seus clientes e pague R$150 apenas quando fechar um evento. Sem custo fixo, sem risco, sem equipe extra.",
    cta: "Criar conta grátis",
    ctaSecondary: "Como funciona",
    micro: "Cadastro gratuito · Sem mensalidade · Pague só quando vender",
    pillars: [
      { label: "QR Code instantâneo",  sub: "Convidados escaneiam e enviam foto + mensagem" },
      { label: "Aparece no telão",      sub: "Slideshow ao vivo na TV, telão ou projetor" },
      { label: "Lembrança garantida",   sub: "Vídeo + produtos exclusivos entregues ao cliente" },
    ],
  },

  clientPitch: {
    eyebrow: "A experiência que você passa a vender",
    title: "Participação ao vivo. Lembrança que o cliente guarda para sempre.",
    subtitle:
      "Não é 'mais um sistema'. É um serviço que o cliente vai pagar, indicar e lembrar — porque ele nunca teve isso em um evento antes.",
    imageBadge: "Sem app para o convidado",
    imageCaption:
      "A cena que você vende é simples: o convidado pega o celular, participa em segundos e vê sua memória entrar no evento.",
    cta: "Criar conta grátis",
    flow: [
      {
        title: "Você cria o evento com QR Code",
        desc: "Em minutos você configura o evento e gera o QR Code exclusivo. O convidado escaneia — sem app, sem cadastro, sem fricção.",
      },
      {
        title: "Convidados enviam foto + mensagem",
        desc: "Cada pessoa envia uma foto e escreve uma mensagem para o homenageado direto pelo celular. É simples o suficiente para qualquer convidado usar.",
      },
      {
        title: "Tudo aparece no telão em tempo real",
        desc: "Foto e mensagem entram no slideshow e aparecem na TV, telão ou projetor em segundos. O evento inteiro vê — e todos querem participar.",
      },
      {
        title: "As memórias viram um vídeo emocionante",
        desc: "Depois do evento, transformamos tudo em um vídeo personalizado. O cliente recebe algo que vai guardar — e que nenhum concorrente seu entregava até hoje.",
      },
      {
        title: "Você entrega e fecha com chave de ouro",
        desc: "Além do vídeo, você pode oferecer álbum físico, quadros e porta retrato digital. Cada produto adicional é mais margem no mesmo evento.",
      },
    ],
  },

  problem: {
    eyebrow: "A oportunidade que seu concorrente ainda não viu",
    title: "Você já está nos eventos. Só faltava o serviço certo.",
    subtitle:
      "Quem chegar primeiro com participação ao vivo e lembranças exclusivas vai dominar esse nicho localmente.",
    cta: "Cadastrar grátis agora",
    items: [
      {
        title: "Sem diferencial, você compete no preço",
        desc: "Se o que você oferece é igual ao concorrente, a única conversa é sobre desconto. Um serviço exclusivo muda essa dinâmica.",
      },
      {
        title: "O cliente quer mais — e ainda não sabe o que",
        desc: "Eventos com participação ativa dos convidados geram mais engajamento e mais indicações. Mas poucos fornecedores entregam isso.",
      },
      {
        title: "Receita parada nos eventos que você já faz",
        desc: "Você já tem a relação com o cliente e o acesso ao evento. Faltava apenas um serviço para monetizar isso sem aumentar equipe.",
      },
      {
        title: "Seu concorrente vai chegar lá antes",
        desc: "Quem apresentar isso primeiro ao mercado local fica com a posição. A janela de vantagem existe agora — mas não vai durar para sempre.",
      },
    ],
  },

  mechanism: {
    eyebrow: "Como funciona",
    title: "Do QR Code no celular ao vídeo na mão do cliente.",
    subtitle: "Você vende. A Eterneasy cuida do QR Code, do slideshow no telão e da entrega final.",
    featuredTag: "Momento de virada",
    featuredTitle: "Quando a foto aparece no telão, todo mundo entende o valor.",
    featuredDesc:
      "A demonstração fica visual: o cliente não compra uma promessa, ele enxerga a participação acontecendo ao vivo.",
    cta: "Criar conta grátis",
    steps: [
      { title: "Escaneie o QR Code",    desc: "Convidados e familiares escaneiam o QR Code com o celular — sem app, sem cadastro." },
      { title: "Envie foto + mensagem", desc: "Cada convidado posta sua foto e deixa uma mensagem especial para o homenageado." },
      { title: "Aparece na hora",       desc: "Tudo aparece em tempo real no telão, TV ou projetor durante o evento." },
      { title: "Virou vídeo",           desc: "Após o evento, todas as fotos e mensagens viram um vídeo emocionante e personalizado." },
      { title: "Lembrança entregue",    desc: "O cliente recebe o vídeo + lembranças exclusivas que ficam para a vida toda." },
    ],
  },

  keepsakes: {
    eyebrow: "Lembranças exclusivas",
    title: "O cliente não recebe só memórias. Recebe lembranças que duram.",
    subtitle:
      "Além do vídeo final, você pode oferecer produtos físicos e digitais que aumentam o valor percebido — e a sua margem.",
    videoTag: "Entrega principal",
    videoTitle: "Vídeo do Evento",
    videoDesc:
      "Transformamos todas as fotos e mensagens enviadas pelos convidados em um vídeo emocionante e personalizado. O cliente recebe uma lembrança única para reviver cada instante do evento.",
    disclaimer:
      "Os produtos físicos são opcionais e podem ser oferecidos como upgrade por você. Cada um vira uma nova fonte de receita.",
    cta: "Cadastrar grátis e começar",
    products: [
      { title: "Álbum de Lembranças",    desc: "Um álbum físico com as melhores fotos e mensagens do evento — impresso e encadernado para guardar para sempre.", tag: "Produto físico" },
      { title: "Quadros Personalizados", desc: "Momentos especiais do evento transformados em quadros decorativos. O cliente escolhe a foto, você entrega o quadro.", tag: "Produto físico" },
      { title: "Porta Retrato Digital",  desc: "Um porta retrato digital exclusivo com as melhores fotos do evento. O cliente revive cada momento quando quiser.", tag: "Produto digital" },
    ],
  },

  offer: {
    eyebrow: "Como funciona — cadastro gratuito, receita por evento",
    title: "Cadastre grátis. Pague só quando vender.",
    subtitle: "Sem custo inicial. Sem mensalidade obrigatória. Cadastre agora e pague R$150 apenas quando fechar um evento.",
    bottomText:
      "Comece grátis no Flex — sem nenhum custo até vender o primeiro evento. Quando o volume crescer, o Premium elimina o custo por evento e aumenta a sua margem.",
    plans: [
      {
        id: "flex",
        name: "Flex",
        price: "R$ 150",
        period: "por evento",
        tag: "Cadastro gratuito",
        micro: "Comece hoje, sem nenhum investimento inicial",
        featured: false,
        badge: "",
        cta: "Criar conta grátis",
        bullets: [
          "Cadastro 100% gratuito",
          "Pague R$150 apenas quando vender",
          "Zero mensalidade ou custo fixo",
          "Migra para Premium quando crescer",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "R$ 500",
        period: "/mês",
        tag: "Eventos ilimitados",
        micro: "Para parceiros com volume recorrente",
        featured: true,
        badge: "Mais margem em volume",
        cta: "Falar sobre o Premium",
        bullets: [
          "Eventos ilimitados inclusos",
          "Maior margem por evento",
          "Operação padronizada",
          "Suporte prioritário",
        ],
      },
    ],
  },

  partnerFit: {
    eyebrow: "Você se encaixa aqui?",
    title: "Se você já entra em eventos, já tem tudo que precisa.",
    subtitle:
      "Fotógrafos, cerimonialistas, buffets, produtores de eventos, decoradores — qualquer profissional que já tem acesso ao evento pode vender isso.",
    notIdealTitle: "Não é para você se",
    demoNote: "A demonstração mostra tudo: envio de fotos, slideshow no monitor e vídeo final entregue ao cliente.",
    cta: "Criar conta grátis",
    ideal: [
      { title: "Já vende eventos",        desc: "Mesmo sem alto volume, você tem demanda recorrente ou oportunidade clara de venda." },
      { title: "Mantém o relacionamento", desc: "Você continua sendo o ponto de confiança do cliente — a Eterneasy entra na entrega." },
      { title: "Quer mais margem",        desc: "Sem aumentar equipe. A estrutura reduz atrito antes que a venda vire custo." },
    ],
    notIdeal: [
      "Não quer abrir uma frente de vendas em eventos.",
      "Prefere operar tudo manualmente.",
      "Não quer registrar informações básicas do evento.",
    ],
  },

  partnerEconomics: {
    eyebrow: "Quanto você pode ganhar",
    title: "A conta é simples. A margem é real.",
    flexLabel: "Exemplo prático — plano Flex",
    row1Label: "4 eventos/mês × ticket R$500",
    row1Value: "R$2.000",
    row2Label: "Custo Flex (4 × R$150)",
    row2Value: "− R$600",
    row3Label: "Margem líquida",
    row3Value: "R$1.400",
    disclaimer: "Sem equipe extra. Sem operação manual. O ticket é o que você definir com o cliente.",
    premiumTag: "Por que o Premium vale a pena",
    premiumTitle: "A partir de 4 eventos/mês, R$500 fixo é mais barato que pagar R$150 por cliente.",
    premiumDesc: "E com o Premium, cada evento extra que você fechar entra direto na margem — sem aumentar o custo.",
    cta: "Criar conta grátis",
    cards: [
      { title: "Flex — zero custo fixo",         desc: "Paga R$150 por cliente. Se não vender no mês, não paga nada. Ideal para quem está validando." },
      { title: "Premium — margem em escala",     desc: "R$500/mês fixo, clientes ilimitados. A partir de 4 eventos/mês, já é mais barato que o Flex." },
      { title: "Fácil de apresentar ao cliente", desc: "Uma demonstração de 15 minutos é suficiente para o cliente entender — e querer." },
    ],
  },

  proof: {
    eyebrow: "Por que funciona na prática",
    title: "Cinco razões para começar agora.",
    subtitle: "Não é teoria. É o que acontece nos primeiros eventos de quem começa com a Eterneasy.",
    cta: "Criar conta grátis",
    points: [
      { title: "Você começa sem arriscar nada",            desc: "No Flex, o custo só existe quando você vende. Sem mensalidade, sem contrato, sem risco no primeiro mês — ou no décimo." },
      { title: "O cliente entende na primeira demonstração", desc: "Você não precisa explicar com slides. Você mostra: ele escaneia, a foto aparece no telão, o vídeo chega depois. A venda acontece na demo." },
      { title: "Você não compete mais só no preço",        desc: "Quando você tem um serviço que ninguém mais oferece localmente, a conversa deixa de ser sobre desconto e passa a ser sobre disponibilidade." },
      { title: "A operação não depende de você estar lá",  desc: "O QR Code, o slideshow e o vídeo rodam sem intervenção manual. Você configura antes e entrega depois — o evento acontece no meio sem sua operação." },
      { title: "Cada evento vira uma indicação",           desc: "Convidados que participaram no telão comentam, compartilham e perguntam sobre o serviço. O próximo cliente muitas vezes já estava no evento anterior." },
    ],
  },

  role: {
    eyebrow: "Quem faz o quê — e quem lucra",
    title: "Você vende. A Eterneasy opera. O cliente fica encantado.",
    disclaimer: "Você fecha o contrato e orienta no dia. Tudo que envolve tecnologia, operação e entrega é com a Eterneasy.",
    cta: "Criar conta grátis",
    youLabel: "Você",
    eternalLabel: "Eterneasy",
    clientLabel: "Cliente final",
    you: ["Vende ao cliente", "Configura o evento", "Orienta no dia"],
    eternal: ["Recebe as fotos", "Exibe no slideshow", "Gera o vídeo final"],
    client: ["Convida os convidados", "Assiste ao monitor", "Recebe a lembrança"],
  },

  implementation: {
    eyebrow: "Você testa antes de vender qualquer coisa",
    title: "Veja o QR Code, o telão e o vídeo antes de oferecer ao cliente.",
    rightText: "Você passa pelo fluxo completo como se fosse um convidado — e só depois decide se quer vender.",
    cta: "Cadastrar grátis e testar",
    steps: [
      { title: "Configure o evento",     desc: "Crie o fluxo com nome do evento e gere o QR Code exclusivo para os convidados." },
      { title: "Teste a exibição",       desc: "Veja como o slideshow aparece na TV ou telão antes de usar com clientes." },
      { title: "Rode o primeiro evento", desc: "Acompanhe os convidados enviando fotos e mensagens e o slideshow rodando ao vivo." },
      { title: "Entregue o vídeo",       desc: "Depois do evento, os slides viram vídeo e você fecha a entrega com o cliente." },
    ],
  },

  objections: {
    eyebrow: "O que seus clientes vão perguntar — e como responder",
    title: "Cada dúvida tem uma resposta que fecha a venda.",
    cta: "Cadastrar grátis agora",
    smallText: "Sem mensalidade obrigatória · Ativação imediata",
    items: [
      { q: "O que eu vendo exatamente?",         a: "Uma experiência que o cliente não esquece: convidados participam ao vivo pelo QR Code, as fotos e mensagens aparecem no telão em segundos e o cliente recebe um vídeo depois. É fácil de mostrar e fácil de comprar." },
      { q: "O cliente precisa instalar algo?",    a: "Nada. O convidado escaneia o QR Code, abre pelo navegador do celular, envia a foto com mensagem — e aparece no telão em segundos. O cliente não precisa fazer nada técnico." },
      { q: "Preciso ser fotógrafo?",              a: "Não. Você não tira nenhuma foto. Você vende o serviço, cria o evento e coloca o QR Code disponível. Os próprios convidados fazem o resto — e a Eterneasy entrega o vídeo no final." },
      { q: "Por que o cliente pagaria por isso?", a: "Porque é algo que ninguém mais oferece no mercado local. O cliente vê os convidados enviando fotos no telão em tempo real, leva um vídeo com as mensagens de todos — e não tem preço pra esse tipo de lembrança." },
      { q: "E se eu vender pouco no começo?",     a: "Zero problema. No Flex você só paga R$150 quando vender. Pode fechar um único evento no mês e já tem margem. Não existe custo fixo para travar você nos primeiros meses." },
      { q: "Quando vale migrar para o Premium?",  a: "A conta é simples: se você fecha 4 ou mais eventos por mês, o Premium (R$500 fixo) já é mais barato que o Flex (4 × R$150 = R$600). E cada evento extra entra direto na margem, sem custo adicional." },
    ],
  },

  finalCta: {
    eyebrow: "Cadastro gratuito",
    title1: "Crie sua conta grátis e",
    title2: "comece a faturar.",
    subtitle:
      "Cadastre agora, sem custo. Ofereça dentro do fluxo que você já tem com seus clientes e pague R$150 apenas quando fechar um evento. Sem mensalidade, sem compromisso.",
    cta: "Criar conta grátis",
    ctaWa: "Falar no WhatsApp",
    micro: "Cadastro gratuito · Sem mensalidade · Pague só quando vender",
  },

  footer: {
    description: "Venda fotos ao vivo, slideshow no telão e lembranças exclusivas para os clientes que você já atende.",
    navPlans: "Planos",
    navFaq: "Dúvidas",
    navContact: "Contato",
    copyright: "Todos os direitos reservados.",
    tagline: "Receita que acompanha seu volume.",
  },
};

// ─── English ───────────────────────────────────────────────────────────────
const en: typeof pt = {
  nav: {
    items: [
      { label: "What it is",    href: "#o-que-e" },
      { label: "Problem",       href: "#problema" },
      { label: "How it works",  href: "#mecanismo" },
      { label: "Plans",         href: "#oferta" },
      { label: "FAQ",           href: "#objecoes" },
    ],
    cta: "Sign up free",
  },

  hero: {
    badge: "Free registration · Pay only when you sell",
    headlinePart1: "New revenue from",
    headlinePart2: "every event.",
    headlinePart3: "Free signup.",
    headlinePart4: "No monthly fee.",
    subtitle:
      "Sign up for free, offer within your existing client flow and pay only when you close an event. No fixed costs, no risk, no extra staff.",
    cta: "Create free account",
    ctaSecondary: "How it works",
    micro: "Free registration · No monthly fee · Pay only when you sell",
    pillars: [
      { label: "Instant QR Code",       sub: "Guests scan and send photo + message" },
      { label: "Live on screen",        sub: "Real-time slideshow on TV, screen or projector" },
      { label: "Guaranteed keepsake",   sub: "Video + exclusive products delivered to the client" },
    ],
  },

  clientPitch: {
    eyebrow: "The experience you start selling",
    title: "Live participation. A keepsake your client keeps forever.",
    subtitle:
      "It's not 'just another system'. It's a service clients will pay for, recommend, and remember — because they've never had this at an event before.",
    imageBadge: "No app required for guests",
    imageCaption:
      "The scene you sell is simple: the guest picks up their phone, participates in seconds and sees their memory enter the event.",
    cta: "Create free account",
    flow: [
      { title: "You create the event with a QR Code",    desc: "In minutes you set up the event and generate the exclusive QR Code. The guest scans — no app, no sign-up, no friction." },
      { title: "Guests send photo + message",            desc: "Each person sends a photo and writes a message for the honoree directly from their phone. Simple enough for any guest." },
      { title: "Everything appears on screen in real time", desc: "Photo and message enter the slideshow and appear on TV, screen or projector in seconds. The whole event sees it — and everyone wants to join." },
      { title: "Memories become an emotional video",     desc: "After the event, we transform everything into a personalized video. The client receives something they'll keep — that none of your competitors delivered before." },
      { title: "You deliver and close with a golden key", desc: "Beyond the video, you can offer a physical album, frames and digital photo frame. Each additional product adds more margin to the same event." },
    ],
  },

  problem: {
    eyebrow: "The opportunity your competitor hasn't seen yet",
    title: "You're already at the events. You just needed the right service.",
    subtitle:
      "Whoever gets there first with live participation and exclusive keepsakes will dominate this niche locally.",
    cta: "Sign up free now",
    items: [
      { title: "Without differentiation, you compete on price", desc: "If what you offer is the same as the competitor, the only conversation is about discounts. An exclusive service changes that dynamic." },
      { title: "Clients want more — and don't know what yet",   desc: "Events with active guest participation generate more engagement and referrals. But few vendors deliver this." },
      { title: "Revenue sitting in events you already do",      desc: "You already have the client relationship and event access. You just needed a service to monetize that without adding staff." },
      { title: "Your competitor will get there first",          desc: "Whoever presents this first to the local market takes the position. The window of advantage exists now — but it won't last forever." },
    ],
  },

  mechanism: {
    eyebrow: "How it works",
    title: "From QR Code on the phone to video in the client's hands.",
    subtitle: "You sell. Eterneasy handles the QR Code, the live slideshow and the final delivery.",
    featuredTag: "Turning point",
    featuredTitle: "When the photo appears on screen, everyone understands the value.",
    featuredDesc:
      "The demonstration becomes visual: the client doesn't buy a promise, they see participation happening live.",
    cta: "Create free account",
    steps: [
      { title: "Scan the QR Code",     desc: "Guests and family scan the QR Code with their phone — no app, no sign-up." },
      { title: "Send photo + message", desc: "Each guest posts their photo and leaves a special message for the honoree." },
      { title: "Appears instantly",    desc: "Everything appears in real time on the screen, TV or projector during the event." },
      { title: "Becomes a video",      desc: "After the event, all photos and messages become an emotional, personalized video." },
      { title: "Keepsake delivered",   desc: "The client receives the video + exclusive keepsakes that last a lifetime." },
    ],
  },

  keepsakes: {
    eyebrow: "Exclusive keepsakes",
    title: "The client doesn't just receive memories. They receive keepsakes that last.",
    subtitle:
      "Beyond the final video, you can offer physical and digital products that increase perceived value — and your margin.",
    videoTag: "Main delivery",
    videoTitle: "Event Video",
    videoDesc:
      "We transform all photos and messages sent by guests into an emotional, personalized video. The client receives a unique keepsake to relive every moment of the event.",
    disclaimer:
      "Physical products are optional and can be offered as an upgrade by you. Each one becomes a new revenue stream.",
    cta: "Sign up free and start",
    products: [
      { title: "Memory Album",         desc: "A physical album with the best photos and messages from the event — printed and bound to keep forever.", tag: "Physical product" },
      { title: "Personalized Frames",  desc: "Special moments from the event transformed into decorative frames. The client chooses the photo, you deliver the frame.", tag: "Physical product" },
      { title: "Digital Photo Frame",  desc: "An exclusive digital photo frame with the best photos from the event. The client relives every moment whenever they want.", tag: "Digital product" },
    ],
  },

  offer: {
    eyebrow: "How it works — free registration, revenue per event",
    title: "Sign up free. Pay only when you sell.",
    subtitle: "No upfront cost. No mandatory monthly fee. Sign up now and pay only when you close an event.",
    bottomText:
      "Start free with Flex — no cost until you sell your first event. When volume grows, Premium eliminates the per-event cost and increases your margin.",
    plans: [
      {
        id: "flex",
        name: "Flex",
        price: "R$ 150",
        period: "per event",
        tag: "Free registration",
        micro: "Start today, no upfront investment",
        featured: false,
        badge: "",
        cta: "Create free account",
        bullets: [
          "100% free registration",
          "Pay R$150 only when you sell",
          "Zero monthly fee or fixed cost",
          "Upgrade to Premium when you grow",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "R$ 500",
        period: "/month",
        tag: "Unlimited events",
        micro: "For partners with recurring volume",
        featured: true,
        badge: "More margin at volume",
        cta: "Talk about Premium",
        bullets: [
          "Unlimited events included",
          "Higher margin per event",
          "Standardized operations",
          "Priority support",
        ],
      },
    ],
  },

  partnerFit: {
    eyebrow: "Do you fit here?",
    title: "If you're already at events, you have everything you need.",
    subtitle:
      "Photographers, event planners, caterers, event producers, decorators — any professional who already has event access can sell this.",
    notIdealTitle: "Not for you if",
    demoNote: "The demo shows everything: photo submission, slideshow on the monitor and final video delivered to the client.",
    cta: "Create free account",
    ideal: [
      { title: "Already sells events",       desc: "Even without high volume, you have recurring demand or a clear sales opportunity." },
      { title: "Maintains the relationship", desc: "You remain the client's trusted point of contact — Eterneasy handles the delivery." },
      { title: "Wants more margin",          desc: "Without adding staff. The structure reduces friction before sales turn into costs." },
    ],
    notIdeal: [
      "Doesn't want to open an event sales channel.",
      "Prefers to operate everything manually.",
      "Doesn't want to register basic event information.",
    ],
  },

  partnerEconomics: {
    eyebrow: "How much you can earn",
    title: "The math is simple. The margin is real.",
    flexLabel: "Practical example — Flex plan",
    row1Label: "4 events/month × ticket R$500",
    row1Value: "R$2,000",
    row2Label: "Flex cost (4 × R$150)",
    row2Value: "− R$600",
    row3Label: "Net margin",
    row3Value: "R$1,400",
    disclaimer: "No extra staff. No manual operations. The ticket price is whatever you set with the client.",
    premiumTag: "Why Premium is worth it",
    premiumTitle: "From 4 events/month, R$500 fixed is cheaper than paying R$150 per client.",
    premiumDesc: "And with Premium, every extra event you close goes straight to margin — without increasing cost.",
    cta: "Create free account",
    cards: [
      { title: "Flex — zero fixed cost",        desc: "Pay R$150 per client. If you don't sell that month, you pay nothing. Ideal for those validating." },
      { title: "Premium — margin at scale",     desc: "R$500/month fixed, unlimited clients. From 4 events/month, it's cheaper than Flex." },
      { title: "Easy to present to clients",    desc: "A 15-minute demo is enough for the client to understand — and want it." },
    ],
  },

  proof: {
    eyebrow: "Why it works in practice",
    title: "Five reasons to start now.",
    subtitle: "Not theory. This is what happens in the first events of those who start with Eterneasy.",
    cta: "Create free account",
    points: [
      { title: "You start without risking anything",         desc: "With Flex, the cost only exists when you sell. No monthly fee, no contract, no risk in the first month — or the tenth." },
      { title: "The client understands at the first demo",   desc: "You don't need to explain with slides. You show: they scan, the photo appears on screen, the video arrives later. The sale happens at the demo." },
      { title: "You no longer compete only on price",        desc: "When you have a service no one else offers locally, the conversation stops being about discount and becomes about availability." },
      { title: "Operations don't depend on you being there", desc: "The QR Code, slideshow and video run without manual intervention. You configure beforehand and deliver after — the event happens in between without your operation." },
      { title: "Every event becomes a referral",             desc: "Guests who participated on screen comment, share and ask about the service. The next client is often someone who was at the previous event." },
    ],
  },

  role: {
    eyebrow: "Who does what — and who profits",
    title: "You sell. Eterneasy operates. The client is delighted.",
    disclaimer: "You close the contract and guide on the day. Everything involving technology, operation and delivery is Eterneasy's job.",
    cta: "Create free account",
    youLabel: "You",
    eternalLabel: "Eterneasy",
    clientLabel: "Final client",
    you: ["Sells to the client", "Configures the event", "Guides on the day"],
    eternal: ["Receives the photos", "Displays the slideshow", "Generates the final video"],
    client: ["Invites the guests", "Watches the screen", "Receives the keepsake"],
  },

  implementation: {
    eyebrow: "You test before selling anything",
    title: "See the QR Code, the screen and the video before offering to clients.",
    rightText: "You go through the complete flow as if you were a guest — and only then decide if you want to sell.",
    cta: "Sign up free and test",
    steps: [
      { title: "Configure the event", desc: "Create the flow with the event name and generate the exclusive QR Code for guests." },
      { title: "Test the display",    desc: "See how the slideshow appears on TV or screen before using it with clients." },
      { title: "Run the first event", desc: "Watch guests send photos and messages and the slideshow run live." },
      { title: "Deliver the video",   desc: "After the event, the slides become a video and you complete delivery to the client." },
    ],
  },

  objections: {
    eyebrow: "What your clients will ask — and how to answer",
    title: "Every question has an answer that closes the sale.",
    cta: "Sign up free now",
    smallText: "No mandatory monthly fee · Immediate activation",
    items: [
      { q: "What exactly am I selling?",         a: "An experience the client won't forget: guests participate live via QR Code, photos and messages appear on screen in seconds and the client receives a video afterward. Easy to show and easy to buy." },
      { q: "Does the client need to install anything?", a: "Nothing. The guest scans the QR Code, opens it in their phone browser, sends the photo with message — and it appears on screen in seconds. The client doesn't need to do anything technical." },
      { q: "Do I need to be a photographer?",    a: "No. You don't take any photos. You sell the service, create the event and make the QR Code available. The guests themselves do the rest — and Eterneasy delivers the video at the end." },
      { q: "Why would the client pay for this?", a: "Because it's something no one else offers locally. The client sees guests sending photos on the live screen, takes home a video with everyone's messages — and there's no price for that kind of memory." },
      { q: "What if I sell little at first?",    a: "Zero problem. With Flex you only pay when you sell. You can close a single event in the month and still have margin. There's no fixed cost to hold you back in the early months." },
      { q: "When should I switch to Premium?",   a: "The math is simple: if you close 4 or more events per month, Premium (R$500 fixed) is already cheaper than Flex (4 × R$150 = R$600). And every extra event goes straight to margin, with no additional cost." },
    ],
  },

  finalCta: {
    eyebrow: "Free registration",
    title1: "Create your free account and",
    title2: "start earning.",
    subtitle:
      "Sign up now, at no cost. Offer within your existing client flow and pay only when you close an event. No monthly fee, no commitment.",
    cta: "Create free account",
    ctaWa: "Talk on WhatsApp",
    micro: "Free registration · No monthly fee · Pay only when you sell",
  },

  footer: {
    description: "Sell live photos, slideshow on the big screen and exclusive keepsakes for the clients you already serve.",
    navPlans: "Plans",
    navFaq: "FAQ",
    navContact: "Contact",
    copyright: "All rights reserved.",
    tagline: "Revenue that scales with your volume.",
  },
};

// ─── Spanish ───────────────────────────────────────────────────────────────
const es: typeof pt = {
  nav: {
    items: [
      { label: "Qué es",        href: "#o-que-e" },
      { label: "Problema",      href: "#problema" },
      { label: "Cómo funciona", href: "#mecanismo" },
      { label: "Planes",        href: "#oferta" },
      { label: "Preguntas",     href: "#objecoes" },
    ],
    cta: "Registrarse gratis",
  },

  hero: {
    badge: "Registro gratuito · Paga solo cuando vendes",
    headlinePart1: "Nuevos ingresos en",
    headlinePart2: "cada evento.",
    headlinePart3: "Registro gratuito.",
    headlinePart4: "Sin mensualidad.",
    subtitle:
      "Regístrate gratis, ofrece dentro del flujo comercial que ya tienes con tus clientes y paga solo cuando cierres un evento. Sin costos fijos, sin riesgo, sin personal extra.",
    cta: "Crear cuenta gratis",
    ctaSecondary: "Cómo funciona",
    micro: "Registro gratuito · Sin mensualidad · Paga solo cuando vendes",
    pillars: [
      { label: "Código QR instantáneo", sub: "Los invitados escanean y envían foto + mensaje" },
      { label: "Aparece en la pantalla", sub: "Presentación en vivo en TV, pantalla o proyector" },
      { label: "Recuerdo garantizado",   sub: "Video + productos exclusivos entregados al cliente" },
    ],
  },

  clientPitch: {
    eyebrow: "La experiencia que empiezas a vender",
    title: "Participación en vivo. Un recuerdo que el cliente guarda para siempre.",
    subtitle:
      "No es 'otro sistema más'. Es un servicio que los clientes pagarán, recomendarán y recordarán — porque nunca tuvieron esto en un evento antes.",
    imageBadge: "Sin app para el invitado",
    imageCaption:
      "La escena que vendes es simple: el invitado toma su celular, participa en segundos y ve su memoria entrar al evento.",
    cta: "Crear cuenta gratis",
    flow: [
      { title: "Creas el evento con código QR",             desc: "En minutos configuras el evento y generas el código QR exclusivo. El invitado lo escanea — sin app, sin registro, sin fricción." },
      { title: "Los invitados envían foto + mensaje",        desc: "Cada persona envía una foto y escribe un mensaje para el homenajeado desde su celular. Simple para cualquier invitado." },
      { title: "Todo aparece en pantalla en tiempo real",   desc: "Foto y mensaje entran a la presentación y aparecen en TV, pantalla o proyector en segundos. Todos lo ven — y todos quieren participar." },
      { title: "Los recuerdos se convierten en un video",   desc: "Después del evento, transformamos todo en un video personalizado. El cliente recibe algo que guardará — y que ningún competidor entregaba hasta hoy." },
      { title: "Entregas y cierras con broche de oro",      desc: "Además del video, puedes ofrecer álbum físico, cuadros y portarretrato digital. Cada producto adicional es más margen en el mismo evento." },
    ],
  },

  problem: {
    eyebrow: "La oportunidad que tu competidor aún no vio",
    title: "Ya estás en los eventos. Solo faltaba el servicio correcto.",
    subtitle:
      "Quien llegue primero con participación en vivo y recuerdos exclusivos dominará este nicho localmente.",
    cta: "Registrarse gratis ahora",
    items: [
      { title: "Sin diferencial, compites por precio",          desc: "Si lo que ofreces es igual al competidor, la única conversación es sobre descuento. Un servicio exclusivo cambia esa dinámica." },
      { title: "El cliente quiere más — y aún no sabe qué",     desc: "Los eventos con participación activa generan más engagement y referencias. Pero pocos proveedores lo ofrecen." },
      { title: "Ingresos dormidos en los eventos que ya haces", desc: "Ya tienes la relación con el cliente y el acceso al evento. Solo faltaba un servicio para monetizarlo sin ampliar el equipo." },
      { title: "Tu competidor llegará antes",                   desc: "Quien presente esto primero en el mercado local se queda con la posición. La ventana de oportunidad existe ahora — pero no durará para siempre." },
    ],
  },

  mechanism: {
    eyebrow: "Cómo funciona",
    title: "Del código QR en el celular al video en manos del cliente.",
    subtitle: "Tú vendes. Eterneasy gestiona el código QR, la presentación en vivo y la entrega final.",
    featuredTag: "Momento clave",
    featuredTitle: "Cuando la foto aparece en pantalla, todos entienden el valor.",
    featuredDesc:
      "La demo es visual: el cliente no compra una promesa, ve la participación ocurriendo en vivo.",
    cta: "Crear cuenta gratis",
    steps: [
      { title: "Escanea el código QR",     desc: "Los invitados y familiares escanean el código QR con su celular — sin app, sin registro." },
      { title: "Envía foto + mensaje",     desc: "Cada invitado publica su foto y deja un mensaje especial para el homenajeado." },
      { title: "Aparece al instante",      desc: "Todo aparece en tiempo real en pantalla, TV o proyector durante el evento." },
      { title: "Se convierte en video",    desc: "Después del evento, todas las fotos y mensajes se convierten en un video emotivo y personalizado." },
      { title: "Recuerdo entregado",       desc: "El cliente recibe el video + recuerdos exclusivos que duran toda la vida." },
    ],
  },

  keepsakes: {
    eyebrow: "Recuerdos exclusivos",
    title: "El cliente no solo recibe memorias. Recibe recuerdos que duran.",
    subtitle:
      "Además del video final, puedes ofrecer productos físicos y digitales que aumentan el valor percibido — y tu margen.",
    videoTag: "Entrega principal",
    videoTitle: "Video del Evento",
    videoDesc:
      "Transformamos todas las fotos y mensajes enviados por los invitados en un video emotivo y personalizado. El cliente recibe un recuerdo único para revivir cada instante del evento.",
    disclaimer:
      "Los productos físicos son opcionales y pueden ofrecerse como upgrade. Cada uno se convierte en una nueva fuente de ingresos.",
    cta: "Registrarse gratis y comenzar",
    products: [
      { title: "Álbum de Recuerdos",       desc: "Un álbum físico con las mejores fotos y mensajes del evento — impreso y encuadernado para guardar para siempre.", tag: "Producto físico" },
      { title: "Cuadros Personalizados",   desc: "Momentos especiales del evento transformados en cuadros decorativos. El cliente elige la foto, tú entregas el cuadro.", tag: "Producto físico" },
      { title: "Portarretrato Digital",    desc: "Un portarretrato digital exclusivo con las mejores fotos del evento. El cliente revive cada momento cuando quiera.", tag: "Producto digital" },
    ],
  },

  offer: {
    eyebrow: "Cómo funciona — registro gratuito, ingresos por evento",
    title: "Regístrate gratis. Paga solo cuando vendas.",
    subtitle: "Sin costo inicial. Sin mensualidad obligatoria. Regístrate ahora y paga solo cuando cierres un evento.",
    bottomText:
      "Comienza gratis con Flex — sin ningún costo hasta vender el primer evento. Cuando el volumen crezca, Premium elimina el costo por evento y aumenta tu margen.",
    plans: [
      {
        id: "flex",
        name: "Flex",
        price: "R$ 150",
        period: "por evento",
        tag: "Registro gratuito",
        micro: "Comienza hoy, sin inversión inicial",
        featured: false,
        badge: "",
        cta: "Crear cuenta gratis",
        bullets: [
          "Registro 100% gratuito",
          "Paga R$150 solo cuando vendas",
          "Cero mensualidad o costo fijo",
          "Migra a Premium cuando crezcas",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "R$ 500",
        period: "/mes",
        tag: "Eventos ilimitados",
        micro: "Para socios con volumen recurrente",
        featured: true,
        badge: "Más margen en volumen",
        cta: "Hablar sobre Premium",
        bullets: [
          "Eventos ilimitados incluidos",
          "Mayor margen por evento",
          "Operación estandarizada",
          "Soporte prioritario",
        ],
      },
    ],
  },

  partnerFit: {
    eyebrow: "¿Encajas aquí?",
    title: "Si ya entras a eventos, tienes todo lo que necesitas.",
    subtitle:
      "Fotógrafos, ceremonieros, caterers, productores de eventos, decoradores — cualquier profesional que ya tiene acceso al evento puede vender esto.",
    notIdealTitle: "No es para ti si",
    demoNote: "La demo muestra todo: envío de fotos, presentación en el monitor y video final entregado al cliente.",
    cta: "Crear cuenta gratis",
    ideal: [
      { title: "Ya vende eventos",        desc: "Incluso sin alto volumen, tienes demanda recurrente u oportunidad clara de venta." },
      { title: "Mantiene la relación",    desc: "Tú sigues siendo el punto de confianza del cliente — Eterneasy se encarga de la entrega." },
      { title: "Quiere más margen",       desc: "Sin ampliar el equipo. La estructura reduce fricción antes de que la venta se convierta en costo." },
    ],
    notIdeal: [
      "No quiere abrir un canal de ventas en eventos.",
      "Prefiere operar todo manualmente.",
      "No quiere registrar información básica del evento.",
    ],
  },

  partnerEconomics: {
    eyebrow: "Cuánto puedes ganar",
    title: "El cálculo es simple. El margen es real.",
    flexLabel: "Ejemplo práctico — plan Flex",
    row1Label: "4 eventos/mes × ticket R$500",
    row1Value: "R$2.000",
    row2Label: "Costo Flex (4 × R$150)",
    row2Value: "− R$600",
    row3Label: "Margen neto",
    row3Value: "R$1.400",
    disclaimer: "Sin personal extra. Sin operación manual. El precio del ticket es el que definas con el cliente.",
    premiumTag: "Por qué vale la pena Premium",
    premiumTitle: "A partir de 4 eventos/mes, R$500 fijo es más barato que pagar R$150 por cliente.",
    premiumDesc: "Y con Premium, cada evento extra que cierres va directo al margen — sin aumentar el costo.",
    cta: "Crear cuenta gratis",
    cards: [
      { title: "Flex — cero costo fijo",        desc: "Pagas R$150 por cliente. Si no vendes ese mes, no pagas nada. Ideal para quienes están validando." },
      { title: "Premium — margen en escala",    desc: "R$500/mes fijo, clientes ilimitados. A partir de 4 eventos/mes, ya es más barato que Flex." },
      { title: "Fácil de presentar al cliente", desc: "Una demo de 15 minutos es suficiente para que el cliente entienda — y lo quiera." },
    ],
  },

  proof: {
    eyebrow: "Por qué funciona en la práctica",
    title: "Cinco razones para empezar ahora.",
    subtitle: "No es teoría. Es lo que ocurre en los primeros eventos de quienes empiezan con Eterneasy.",
    cta: "Crear cuenta gratis",
    points: [
      { title: "Empiezas sin arriesgar nada",                    desc: "Con Flex, el costo solo existe cuando vendes. Sin mensualidad, sin contrato, sin riesgo en el primer mes — ni en el décimo." },
      { title: "El cliente entiende en la primera demo",         desc: "No necesitas explicar con diapositivas. Muestras: escanea, la foto aparece en pantalla, el video llega después. La venta ocurre en la demo." },
      { title: "Ya no compites solo por precio",                 desc: "Cuando tienes un servicio que nadie más ofrece localmente, la conversación deja de ser sobre descuento y pasa a ser sobre disponibilidad." },
      { title: "La operación no depende de que estés presente",  desc: "El código QR, la presentación y el video funcionan sin intervención manual. Configuras antes y entregas después — el evento ocurre en el medio sin tu operación." },
      { title: "Cada evento se convierte en una referencia",     desc: "Los invitados que participaron en pantalla comentan, comparten y preguntan por el servicio. El próximo cliente suele haber estado en el evento anterior." },
    ],
  },

  role: {
    eyebrow: "Quién hace qué — y quién gana",
    title: "Tú vendes. Eterneasy opera. El cliente queda encantado.",
    disclaimer: "Tú cierras el contrato y orientas el día. Todo lo que involucra tecnología, operación y entrega es con Eterneasy.",
    cta: "Crear cuenta gratis",
    youLabel: "Tú",
    eternalLabel: "Eterneasy",
    clientLabel: "Cliente final",
    you: ["Vende al cliente", "Configura el evento", "Orienta en el día"],
    eternal: ["Recibe las fotos", "Muestra la presentación", "Genera el video final"],
    client: ["Invita a los invitados", "Ve la pantalla", "Recibe el recuerdo"],
  },

  implementation: {
    eyebrow: "Pruebas antes de vender cualquier cosa",
    title: "Ve el código QR, la pantalla y el video antes de ofrecerlo a clientes.",
    rightText: "Pasas por el flujo completo como si fueras un invitado — y solo después decides si quieres vender.",
    cta: "Registrarse gratis y probar",
    steps: [
      { title: "Configura el evento",         desc: "Crea el flujo con el nombre del evento y genera el código QR exclusivo para los invitados." },
      { title: "Prueba la visualización",     desc: "Ve cómo aparece la presentación en TV o pantalla antes de usarla con clientes." },
      { title: "Realiza el primer evento",    desc: "Observa a los invitados enviar fotos y mensajes y la presentación corriendo en vivo." },
      { title: "Entrega el video",            desc: "Después del evento, los slides se convierten en video y cierras la entrega con el cliente." },
    ],
  },

  objections: {
    eyebrow: "Lo que tus clientes preguntarán — y cómo responder",
    title: "Cada duda tiene una respuesta que cierra la venta.",
    cta: "Registrarse gratis ahora",
    smallText: "Sin mensualidad obligatoria · Activación inmediata",
    items: [
      { q: "¿Qué vendo exactamente?",            a: "Una experiencia que el cliente no olvida: los invitados participan en vivo por código QR, las fotos y mensajes aparecen en pantalla en segundos y el cliente recibe un video después. Es fácil de mostrar y fácil de comprar." },
      { q: "¿El cliente necesita instalar algo?", a: "Nada. El invitado escanea el código QR, lo abre en el navegador del celular, envía la foto con mensaje — y aparece en pantalla en segundos. El cliente no necesita hacer nada técnico." },
      { q: "¿Necesito ser fotógrafo?",            a: "No. Tú no sacas ninguna foto. Vendes el servicio, creas el evento y pones el código QR disponible. Los propios invitados hacen el resto — y Eterneasy entrega el video al final." },
      { q: "¿Por qué el cliente pagaría por esto?", a: "Porque es algo que nadie más ofrece localmente. El cliente ve a los invitados enviando fotos en pantalla en tiempo real, se lleva un video con los mensajes de todos — y no tiene precio ese tipo de recuerdo." },
      { q: "¿Y si vendo poco al principio?",      a: "Ningún problema. Con Flex solo pagas cuando vendas. Puedes cerrar un único evento en el mes y ya tienes margen. No hay costo fijo que te frene en los primeros meses." },
      { q: "¿Cuándo vale migrar a Premium?",      a: "El cálculo es simple: si cierras 4 o más eventos por mes, Premium (R$500 fijo) ya es más barato que Flex (4 × R$150 = R$600). Y cada evento extra entra directo al margen, sin costo adicional." },
    ],
  },

  finalCta: {
    eyebrow: "Registro gratuito",
    title1: "Crea tu cuenta gratis y",
    title2: "empieza a ganar.",
    subtitle:
      "Regístrate ahora, sin costo. Ofrece dentro del flujo que ya tienes con tus clientes y paga solo cuando cierres un evento. Sin mensualidad, sin compromiso.",
    cta: "Crear cuenta gratis",
    ctaWa: "Hablar por WhatsApp",
    micro: "Registro gratuito · Sin mensualidad · Paga solo cuando vendes",
  },

  footer: {
    description: "Vende fotos en vivo, presentación en pantalla y recuerdos exclusivos para los clientes que ya atiendes.",
    navPlans: "Planes",
    navFaq: "Preguntas",
    navContact: "Contacto",
    copyright: "Todos los derechos reservados.",
    tagline: "Ingresos que acompañan tu volumen.",
  },
};

// ─── Export ────────────────────────────────────────────────────────────────
export type Translations = typeof pt;
export const translations: Record<Lang, Translations> = { pt, en, es };
