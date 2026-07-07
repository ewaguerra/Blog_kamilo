export const SITE = {
  title: 'Mago Domine Callidus',
  tagline: 'Estudos · Traduções · Práticas · Mentoria',
  description:
    'Blog de estudos, traduções, práticas e mentoria em ocultismo — Papiros Mágicos Gregos (PGM), teurgia ctônica, hygromanteia e goetia.',
  author: 'Mago Domine Callidus',
  authorBio:
    'Pesquisa e ensina magia helenística: PGM, hygromanteia e goetia. Autor dos estudos e cursos deste site.',
  url: 'https://blog-kamilo.vercel.app',
  lang: 'pt-BR',
  social: {
    github: 'https://github.com/ewaguerra',
    linkedin: 'https://linkedin.com',
    youtube: 'https://www.youtube.com/@magokamillo',
    youtubeFeatured: [
      'https://www.youtube.com/watch?v=fT6a0KOhcqU',
      'https://www.youtube.com/watch?v=SZmCIv_PLh4',
    ],
  },
  courses: [
    {
      id: 'mapa-astral',
      title: 'Mapa Astral',
      description:
        'Aprenda a ler e interpretar a carta natal com base na astrologia helenística — planetas, casas, aspectos e o mapa como ferramenta de autoconhecimento ritualístico.',
      topics: ['Carta natal', 'Astrologia', 'Planetas', 'Casas'],
      url: 'https://www.youtube.com/@magokamillo',
      postSlug: 'curso-mapa-astral',
      image: '/images/hero-lecanomancia.png',
      cta: 'Ver curso',
      courseInfo: {
        turma: 'Turma 1 · 2026',
        valor: 197,
        valorOriginal: 297,
        vagas: 25,
        formato: 'Online · vídeo sob demanda',
        cargaHoraria: '12 horas',
        inicio: 'Inscrições abertas',
        parcelas: '12x de R$ 19,70',
      },
    },
    {
      id: 'papiros-gregos-ocultos',
      title: 'Papiros Gregos Ocultos',
      description:
        'Estudo prático dos Papiros Mágicos Gregos (PGM): voces magicae, deuses ctônicos, rituais e a linha entre magia helenística, hygromanteia e goetia.',
      topics: ['PGM', 'Voces magicae', 'Teurgia ctônica', 'Goetia'],
      url: 'https://www.youtube.com/@magokamillo',
      postSlug: 'curso-papiros-gregos-ocultos',
      image: '/images/hero-pgm-papyrus.png',
      cta: 'Ver curso',
      courseInfo: {
        turma: 'Turma 1 · 2026',
        valor: 247,
        valorOriginal: 347,
        vagas: 20,
        formato: 'Online · vídeo sob demanda',
        cargaHoraria: '16 horas',
        inicio: 'Inscrições abertas',
        parcelas: '12x de R$ 24,70',
      },
    },
  ],
} as const;
