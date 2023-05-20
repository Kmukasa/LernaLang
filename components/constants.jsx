// stores constants used in the application
// import all the icons from assets/icons

import {
  MusicIcon,
  FoodIcon,
  ActivitiesIcon,
  SportsIcon,
  TravelIcon,
  MoviesIcon,
  ArtIcon,
  PoliticsIcon,
  SchoolIcon,
  WeatherIcon,
  WorkIcon,
  RandomIcon,
  FamilyIcon,
  RelationshipsIcon,
  TechIcon,
  ArabicIcon,
} from "../assets/icons";

import {
  EnglishIcon,
  SpanishIcon,
  FrenchIcon,
  GermanIcon,
  ItalianIcon,
  PortugueseIcon,
  ChineseIcon,
  JapaneseIcon,
  KoreanIcon,
  RussianIcon,
  DutchIcon,
  HindiIcon,
  TurkishIcon,
  SwahiliIcon,
} from "../assets/icons";

const PROFICIENCY = {
  BEGINNER: "Beginner",
  CONVERSATIONAL: "Conversational",
  PROFICIENT: "Proficient",
};

const SKILL_LEVELS = [
  {
    id: "0",
    label: "Beginner",
    value: "Beginner",
  },
  {
    id: "1",
    label: "Conversational",
    value: "Conversational",
  },
  {
    id: "2",
    label: "Proficient",
    value: "Proficient",
  },
];

const LANGUAGES = [
  {
    id: "english",
    text: "English",
    icon: <EnglishIcon height={50} width={50} />,
  },
  {
    id: "spanish",
    text: "Spanish",
    icon: <SpanishIcon height={50} width={50} />,
  },
  {
    id: "french",
    text: "French",
    icon: <FrenchIcon height={50} width={50} />,
  },
  {
    id: "german",
    text: "German",
    icon: <GermanIcon height={50} width={50} />,
  },
  {
    id: "italian",
    text: "Italian",
    icon: <ItalianIcon height={50} width={50} />,
  },
  {
    id: "portuguese",
    text: "Portuguese",
    icon: <PortugueseIcon height={50} width={50} />,
  },
  {
    id: "russian",
    text: "Russian",
    icon: <RussianIcon height={50} width={50} />,
  },
  {
    id: "chinese",
    text: "Chinese",
    icon: <ChineseIcon height={50} width={50} />,
  },
  {
    id: "japanese",
    text: "Japanese",
    icon: <JapaneseIcon height={50} width={50} />,
  },
  {
    id: "korean",
    text: "Korean",
    icon: <KoreanIcon height={50} width={50} />,
  },
  {
    id: "arabic",
    text: "Arabic",
    icon: <ArabicIcon height={50} width={50} />,
  },
  {
    id: "hindi",
    text: "Hindi",
    icon: <HindiIcon height={50} width={50} />,
  },
  {
    id: "swahili",
    text: "Swahili",
    icon: <SwahiliIcon height={50} width={50} />,
  },
  {
    id: "turkish",
    text: "Turkish",
    icon: <TurkishIcon height={50} width={50} />,
  },
  {
    id: "dutch",
    text: "Dutch",
    icon: <DutchIcon height={50} width={50} />,
  },
];

const TOPICS = [
  {
    id: "0",
    text: "Food",
    icon: <FoodIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "1",
    text: "Travel",
    icon: <TravelIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "2",
    text: "Hobbies",
    icon: <ActivitiesIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "3",
    text: "Sports",
    icon: <SportsIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "4",
    text: "Music",
    icon: <MusicIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "5",
    text: "Movies",
    icon: <MoviesIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "6",
    text: "Art",
    icon: <ArtIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "7",
    text: "Politics",
    icon: <PoliticsIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "8",
    text: "School",
    icon: <SchoolIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "9",
    text: "Work",
    icon: <WorkIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "10",
    text: "Friends & Family",
    icon: <FamilyIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "11",
    text: "Love",
    icon: <RelationshipsIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "12",
    text: "Tech",
    icon: <TechIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "13",
    text: "Weather",
    icon: <WeatherIcon height={34} width={34} color="#0601B4" />,
  },
  {
    id: "14",
    text: "Random",
    icon: <RandomIcon height={34} width={34} color="#0601B4" />,
  },
];

export { SKILL_LEVELS, LANGUAGES, TOPICS, PROFICIENCY };
