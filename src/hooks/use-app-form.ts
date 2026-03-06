"use client"

import z from "zod";
import {
  createFormHookContexts,
  createFormHook,
} from "@tanstack/react-form";

export const {
  fieldContext,
  formContext,
  useFieldContext,
  useFormContext,
} = createFormHookContexts();

export const {
  useAppForm,
  useTypedAppFormContext,
} = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
});
