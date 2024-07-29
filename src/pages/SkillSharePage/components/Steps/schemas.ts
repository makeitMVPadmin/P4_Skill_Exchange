import * as Yup from "yup";

export const IntroSchema = Yup.object({
  headline: Yup.string()
    .required("Please enter a strong headline")
    .nullable(),
  category: Yup.string()
    .required("What category is your task?")
    .nullable(),
  description: Yup.string()
    .required("Add a unique description of the task.")
    .nullable()
});

export const SkillsSchema = Yup.object({
  skills: Yup.array()
    .required("You need to add a skill to continue.")
    .nullable(),
  duration: Yup.string()
    .required("Enter a suitable timeframe.")
    .nullable()
});

export const FormSummarySchema = Yup.object({
  headline: Yup.string()
    .required("Please enter a strong headline")
    .nullable(),
  category: Yup.string()
    .required("What category is your task?")
    .nullable(),
  description: Yup.string()
    .required("Add a unique description of the task")
    .nullable(),
  skills: Yup.array()
    .required("Please enter a strong headline")
    .nullable(),
  duration: Yup.string()
    .required("How long will this project take?")
    .nullable()
});