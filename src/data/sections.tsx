import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { Heading, InteractiveParagraph } from "@/components/molecules";
import { InlineStepper, InlineDropdown, InlineTextInput } from "@/components/atoms";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

/**
 * ------------------------------------------------------------------
 * SECTION CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using the <Section> component.
 * 2. Use Layout components to organize your sections.
 * 3. Add your sections to the `sections` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-SECTION VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across sections using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts
 * 
 * USAGE IN SECTIONS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. FullWidthLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <FullWidthLayout maxWidth="xl">
 *          <Section id="intro">...</Section>
 *      </FullWidthLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Section id="left">...</Section>
 *          <Section id="right">...</Section>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Section id="item-1">...</Section>
 *          <Section id="item-2">...</Section>
 *          <Section id="item-3">...</Section>
 *      </GridLayout>
 * 
 * 4. SidebarLayout
 *    - Best for: Main content with a sticky sidebar (glossary, controls).
 *    - Usage:
 *      <SidebarLayout sidebarPosition="left" sidebarWidth="medium">
 *          <Sidebar><Section id="sidebar">...</Section></Sidebar>
 *          <Main><Section id="main">...</Section></Main>
 *      </SidebarLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleSections.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const sections: ReactElement[] = [
    <FullWidthLayout key="math-in-nature" maxWidth="xl">
        <Section id="math-in-nature">
            <Heading level={1}>Mathematics  </Heading>

            <InteractiveParagraph>
                From the spirals of galaxies to the patterns in a sunflower, numbers and shapes reveal the hidden order in nature. Let's explore these fascinating 
            </InteractiveParagraph>

            <InteractiveParagraph>
                Have you ever wondered why  build hexagonal cells?  have{" "}
                <InlineStepper
                    initialValue={6}
                    min={3}
                    max={12}
                    color="#D81B60"
                    bgColor="rgba(216, 27, 96, 0.9)"
                />{" "}
                sides, making it the most efficient shape for storing honey  the{" "}
                <InlineDropdown
                    correctAnswer="least"
                    options={["most", "least", "average"]}
                    color="#3B82F6"
                    bgColor="rgba(59, 130, 246, 0.35)"
                />{" "}
                amount of wax while maximizing space.  {" "}
                <InlineDropdown
                    correctAnswer="discovered"
                    options={["ignored", "discovered", "rejected"]}
                    color="#16A34A"
                    bgColor="rgba(22, 163, 74, 0.35)"
                />{" "}
                this optimization millions of years before humans!
            </InteractiveParagraph>

            <InteractiveParagraph>
                The Fibonacci sequence appears everywhere in nature: the arrangement of leaves on a stem, the spiral of a nautilus shell, and even the branching of trees. If you  with{" "}
                <InlineStepper
                    initialValue={1}
                    min={0}
                    max={5}
                    color="#7C3AED"
                    bgColor="rgba(124, 58, 237, 0.9)"
                />{" "}
                and{" "}
                <InlineStepper
                    initialValue={1}
                    min={0}
                    max={5}
                    color="#7C3AED"
                    bgColor="rgba(124, 58, 237, 0.9)"
                />,  
            </InteractiveParagraph>

            <InteractiveParagraph>
                Pi (π) is perhaps the most famous number in mathematics. This non-repeating   a circle's circumference to its diameter. If a circle has a diameter of{" "}
                <InlineStepper
                    initialValue={1}
                    min={1}
                    max={10}
                    color="#EA580C"
                    bgColor="rgba(234, 88, 12, 0.9)"
                />{" "}
                unit, its circumference is π ≈{" "}
                <InlineTextInput
                    correctAnswer="3.14159"
                    placeholder="???"
                    color="#2563EB"
                    bgColor="rgba(37, 99, 235, 0.35)"
                />{" "}
                units.  
            </InteractiveParagraph>
        </Section>
    </FullWidthLayout>
];
