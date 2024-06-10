export type SurveyType = {
  date: string;
  encuesta_id: number;
  num_pregunta: number;
  pregunta: string;
  respuesta: string;
  telephone: string;
  time: string;
};

export type SurveyState = {
  surveys: SurveyType[] | null;
  telephone: number | string | undefined;
  total: number | undefined;
  filters: {
    desde: string;
    hasta: string;
    per_page: number;
    page: number;
  };
};