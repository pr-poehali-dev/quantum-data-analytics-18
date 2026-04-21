import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Запись открыта</Badge>,
    title: "Спорт для каждого. Каждый день.",
    showButton: true,
    buttonText: 'Записаться на занятие',
    backgroundImage: 'https://cdn.poehali.dev/projects/15af48df-1387-435a-bbed-3d0b2267cc15/files/70721246-7111-42e6-9370-3667a6a1755f.jpg'
  },
  {
    id: 'about',
    title: 'Почему наш клуб?',
    content: 'Профессиональные тренеры, удобное расписание и дружелюбная атмосфера. Мы помогаем новичкам и опытным спортсменам достигать своих целей.'
  },
  {
    id: 'features',
    title: 'Наши направления',
    content: 'Теннис, футбол, йога, бокс и настольный теннис — выбирайте одно или совмещайте несколько. Тренировки для взрослых и детей в удобное время.'
  },
  {
    id: 'testimonials',
    title: 'Наши ученики говорят',
    content: '«Начал с нуля в боксе — через полгода уже участвую в соревнованиях. Тренер всегда на связи и помогает двигаться вперёд.»'
  },
  {
    id: 'join',
    title: 'Начни тренироваться сегодня',
    content: 'Первое пробное занятие — бесплатно. Приходи один или с другом, мы подберём подходящую секцию и время.',
    showButton: true,
    buttonText: 'Записаться бесплатно'
  },
]