
# Project Overview

This project is a multi-step form built with React, Redux, and TypeScript, focused on managing user input across multiple steps in a streamlined UI.
Each step in the form represents a stage in the user's onboarding journey, tracking progress visually through a `ProgressIndicator` component.
This document serves as an overview of the project, its key components, and instructions for setting up and running the application.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Component Overview](#component-overview)
5. [State Management](#state-management)
6. [Features](#features)
7. [Optimization Suggestions](#optimization-suggestions)

## Technologies Used
- **React**: For building user interface components
- **Redux Toolkit**: For managing application state across form steps and progress
- **TypeScript**: Adding type safety to JavaScript
- **Vite**: Fast build tool for React applications
- **CSS Modules**: Scoped styling in components

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Undertaker2020/merchant-dashboard.git
cd project-directory
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the app on `http://localhost:3000` by default.

## Component Overview

### 1. `App.tsx`
   - The root component that checks the current step via Redux and renders either the final step (`FinalStep`) or both `ProgressIndicator` and `FormContainer` components, wrapping all content in the main layout.

### 2. `FormContainer`
   - Manages rendering of form steps (`FirstStep`, `SecondStep`, `ThirdStep`) based on the current step state.
   - Includes background image handling.

### 3. `ProgressIndicator`
   - Visual representation of user’s progress in the multi-step form.
   - Renders `Progress` (tracking overall progress) and `Onboarding` components.

### 4. UI Components
   - **Card**: Used for structuring information in the form.
   - **Dropdown, List, ListItem**: Reusable UI elements for form selections.
   - **NextPrevButton**: Navigation buttons to move between steps.
   - **SubmitButton**: Final submission button at the end of the form.

### 5. Steps Components
   - **FirstStep, SecondStep, ThirdStep**: Each represents a step in the form with specific fields or inputs.
   - **FinalStep**: Rendered when the form is completed.

## State Management

The project uses two main slices in Redux for managing states:

1. **progressSlice** (in `/store/progressSlice.ts`):
    - Stores and manages progress items with properties like `active`, `successful`, and `done`.
    - Actions: 
        - `markSuccessful`: Marks a specific item as successful.
        - `markDone`: Marks a specific item as done.

2. **stepSlice** (in `/store/stepSlice.ts`):
    - Handles the current step and allows navigation between steps.
    - Actions: 
        - `nextStep`, `prevStep`, `setStep`: For step navigation.
        - `setActiveComponent`: For setting the active form component.

## Features

- **Dynamic Form Steps**: Automatically renders components based on current step state.
- **Progress Indicator**: Visual feedback on form completion status.
- **Background Image Preloading**: Ensures smooth image loading for better user experience.
- **Redux-Based State Management**: Tracks progress and step across components.

## Optimization Suggestions

1. **Lazy-Loading Images**: Preload background images to prevent delayed rendering.
2. **Refactor Redux Actions**: Consolidate `progressSlice` actions to update item properties dynamically.
3. **Component Lazy Loading**: Use `React.lazy` and `Suspense` for large components to improve performance.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.
