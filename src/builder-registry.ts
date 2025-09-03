"use client";
import type { RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import TestComponent from "./components/TestComponent/TestComponent";
import Products from "./components/Products/Products";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: TestComponent,
    name: "TestComponent",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Test Component Working!",
      },
    ],
  },
  {
    component: Products,
    name: "Products",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Our Products",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Discover amazing products",
      },
      {
        name: "maxProducts",
        type: "number",
        defaultValue: 6,
      },
      {
        name: "category",
        type: "string",
      },
      {
        name: "showPrice",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "showCategory",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "className",
        type: "string",
      },
    ],
  },
  {
    component: Hero,
    name: "Hero",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Welcome to Our Platform",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Discover Amazing Features",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "Experience the next generation of digital solutions with our cutting-edge platform designed to transform your business.",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "Get Started",
      },
      {
        name: "buttonLink",
        type: "string",
        defaultValue: "#",
      },
      {
        name: "backgroundImage",
        type: "string",
      },
      {
        name: "className",
        type: "string",
      },
    ],
  },
  {
    component: Card,
    name: "Card",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Card Title",
      },
      {
        name: "subtitle",
        type: "string",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "This is a sample card description that provides more details about the card content.",
      },
      {
        name: "image",
        type: "string",
      },
      {
        name: "imageAlt",
        type: "string",
        defaultValue: "Card image",
      },
      {
        name: "buttonText",
        type: "string",
      },
      {
        name: "buttonLink",
        type: "string",
        defaultValue: "#",
      },
      {
        name: "badge",
        type: "string",
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "variant",
        type: "enum",
        enum: ["default", "elevated", "outlined"],
        defaultValue: "default",
      },
    ],
  },
];
