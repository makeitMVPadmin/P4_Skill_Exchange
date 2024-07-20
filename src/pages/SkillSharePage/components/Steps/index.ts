import * as Yup from "yup";

import IntroStep from "./Intro/Intro";
import SkillsStep from "./Skills/Skills";
import FormSummary from "./Summary/Summary";

import { IntroSchema, SkillsSchema, FormSummarySchema } from "./schemas";

export type Step = {
  name: string;
  component: React.ElementType;
  validationSchema: Yup.Schema<any>;
};

/** Considered the maximum possible steps for a user -- optionally perform filtering logic in `generateSteps` if you need to */
const baseSteps: Step[] = [
  {
    name: "intro",
    component: IntroStep,
    validationSchema: IntroSchema,
  },
  {
    name: "skills",
    component: SkillsStep,
    validationSchema: SkillsSchema,
  },
  {
    name: "summary",
    component: FormSummary,
    validationSchema: FormSummarySchema,
  }
];

export const generateSteps = (): Step[] => {
  return baseSteps;
};

export const generateInitialValues = (filteredSteps: Step[]) => {
  const initialValues = filteredSteps.reduce((values, step) => {
    return { ...values, [step.name]: null };
  }, {});

  return initialValues;
};

export const getStepSchema = (currentIndex: number, steps: Step[]) => {
  return steps[currentIndex].validationSchema;
};
