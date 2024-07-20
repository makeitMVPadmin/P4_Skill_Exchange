import * as Yup from "yup";

export const IntroSchema = Yup.object({
  headline: Yup.string()
    .required("Please enter a strong headline")
    .nullable(),
  category: Yup.string()
    .required("What category is your task?")
    .nullable(),
  description: Yup.string()
    .required("Add a unique description of the task")
    .nullable()
});

export const SkillsSchema = Yup.object({
  skills: Yup.object()
    .required("Please enter a strong headline")
    .nullable(),
  duration: Yup.string()
    .required("How long will this project take?")
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
  skills: Yup.object()
    .required("Please enter a strong headline")
    .nullable(),
  duration: Yup.string()
    .required("How long will this project take?")
    .nullable()
});