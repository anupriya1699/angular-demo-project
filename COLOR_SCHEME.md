# Medical Dashboard Color Scheme Reference

This document outlines the color scheme used throughout the project, based on the medical dashboard (Doc Track) design.

## Color Variables

All colors are defined as CSS custom properties (variables) in `src/styles.css` and can be accessed using `var(--color-variable-name)`.

### Primary Colors - Sidebar & Navigation

- **`--color-sidebar-bg`**: `#1e293b` - Dark blue-gray for sidebar background
- **`--color-sidebar-hover`**: `#334155` - Lighter shade for sidebar hover states
- **`--color-sidebar-active`**: `#3b82f6` - Light blue for active navigation items
- **`--color-sidebar-active-bg`**: `rgba(59, 130, 246, 0.1)` - Light blue tint for active nav background

### Accent Colors - Blue (Primary Actions)

- **`--color-primary`**: `#3b82f6` - Main blue for buttons, active states, progress bars
- **`--color-primary-dark`**: `#2563eb` - Darker blue for hover states
- **`--color-primary-light`**: `#60a5fa` - Lighter blue for subtle accents
- **`--color-primary-bg`**: `#eff6ff` - Very light blue for backgrounds
- **`--color-primary-card`**: `#3b82f6` - Solid blue for primary cards (e.g., "Visits today")

### Purple Accents - Treatment Phases & Progress Bars

- **`--color-purple`**: `#8b5cf6` - Main purple for progress bars, Net Promoter Score
- **`--color-purple-dark`**: `#7c3aed` - Dark purple - Maintenance phase
- **`--color-purple-medium`**: `#a78bfa` - Medium purple - Ongoing phase
- **`--color-purple-light`**: `#c4b5fd` - Light purple - Early Stage phase
- **`--color-purple-bg`**: `#f3e8ff` - Very light purple background

### Background Colors

- **`--color-bg-primary`**: `#ffffff` - White background
- **`--color-bg-secondary`**: `#f8fafc` - Light gray background (main app background)
- **`--color-bg-tertiary`**: `#f1f5f9` - Slightly darker gray

### Card Colors

- **`--color-card-bg`**: `#ffffff` - White cards
- **`--color-card-border`**: `#e2e8f0` - Light border for cards
- **`--color-card-hover`**: `#f8fafc` - Hover state background
- **`--color-card-shadow`**: `rgba(0, 0, 0, 0.05)` - Subtle card shadow

### Appointment/Visit Card Colors

- **`--color-appointment-bg`**: `#ffffff` - White background for appointments
- **`--color-appointment-active`**: `#3b82f6` - Blue for active/selected appointment
- **`--color-appointment-active-bg`**: `rgba(59, 130, 246, 0.1)` - Light blue background for active
- **`--color-appointment-border`**: `#e2e8f0` - Border for appointment items

### Progress Bar Colors

- **`--color-progress-blue`**: `#3b82f6` - Blue progress bars
- **`--color-progress-purple`**: `#8b5cf6` - Purple progress bars
- **`--color-progress-bg`**: `#e2e8f0` - Background for progress bars
- **`--color-progress-white`**: `#ffffff` - White progress bars on colored backgrounds

### Chart Colors

- **`--color-chart-line`**: `#3b82f6` - Blue line for charts
- **`--color-chart-grid`**: `#e2e8f0` - Grid lines for charts
- **`--color-chart-tooltip-bg`**: `#1e293b` - Dark background for chart tooltips
- **`--color-chart-tooltip-text`**: `#ffffff` - White text for chart tooltips

### Treatment Phase Colors

- **`--color-phase-early`**: `#c4b5fd` - Light purple - Early Stage
- **`--color-phase-ongoing`**: `#a78bfa` - Medium purple - Ongoing
- **`--color-phase-maintenance`**: `#7c3aed` - Dark purple - Maintenance

### Text Colors

- **`--color-text-primary`**: `#0f172a` - Dark gray/black for primary text
- **`--color-text-secondary`**: `#64748b` - Medium gray for secondary text
- **`--color-text-tertiary`**: `#94a3b8` - Light gray for tertiary text
- **`--color-text-white`**: `#ffffff` - White text for dark backgrounds
- **`--color-text-muted`**: `#cbd5e1` - Very light gray for muted text

### Status Colors

- **`--color-success`**: `#10b981` - Green for success/paid status
- **`--color-success-bg`**: `#d1fae5` - Light green background
- **`--color-warning`**: `#f59e0b` - Orange for warnings
- **`--color-warning-bg`**: `#fef3c7` - Light orange background
- **`--color-error`**: `#ef4444` - Red for errors/late status
- **`--color-error-bg`**: `#fee2e2` - Light red background

### Border Colors

- **`--color-border-light`**: `#e2e8f0` - Light borders
- **`--color-border-medium`**: `#cbd5e1` - Medium borders
- **`--color-border-dark`**: `#94a3b8` - Dark borders

### Date Selector Colors

- **`--color-date-active`**: `#3b82f6` - Blue for active date
- **`--color-date-active-bg`**: `rgba(59, 130, 246, 0.1)` - Light blue background
- **`--color-date-hover`**: `#f8fafc` - Hover state for dates
- **`--color-date-text`**: `#64748b` - Text color for dates

### Button Variants

- **`--color-btn-text-primary`**: `#3b82f6` - Blue text for text buttons
- **`--color-btn-text-hover`**: `#2563eb` - Darker blue on hover

### Shadow Variables

- **`--shadow-sm`**: Small shadow for subtle elevation
- **`--shadow-md`**: Medium shadow for cards
- **`--shadow-lg`**: Large shadow for elevated elements
- **`--shadow-xl`**: Extra large shadow for modals/dialogs
- **`--shadow-card`**: Subtle shadow specifically for cards

## Utility Classes

The following utility classes are available for quick styling:

### Background Classes

- `.bg-sidebar` - Sidebar background color
- `.bg-sidebar-active` - Active navigation item background
- `.bg-primary-light` - White background
- `.bg-secondary-light` - Light gray background
- `.bg-card` - Card background
- `.bg-primary-accent` - Primary blue background
- `.bg-primary-accent-light` - Light blue background
- `.bg-primary-card` - Solid blue for primary cards
- `.bg-purple` - Main purple background
- `.bg-purple-light` - Light purple background
- `.bg-purple-medium` - Medium purple background
- `.bg-purple-dark` - Dark purple background

### Text Classes

- `.text-primary` - Primary text color
- `.text-secondary` - Secondary text color
- `.text-tertiary` - Tertiary text color
- `.text-white` - White text
- `.text-muted` - Muted text color
- `.text-primary-accent` - Primary blue text
- `.text-purple` - Purple text
- `.text-btn-primary` - Blue text for buttons

### Border Classes

- `.border-light` - Light border
- `.border-medium` - Medium border

### Status Badge Classes

- `.badge-success` - Success badge styling
- `.badge-warning` - Warning badge styling
- `.badge-error` - Error badge styling

### Button Classes

- `.btn-primary` - Primary button with blue background
- `.btn-secondary` - Secondary button with light background
- `.btn-text` - Text button with blue text

### Card Classes

- `.card` - Base card styling with padding, border, and shadow
- `.card-hover` - Card with hover effects
- `.card-primary` - Primary card with blue background and white text

### Medical Dashboard Specific Classes

#### Appointment/Visit Cards

- `.appointment-item` - Base appointment item styling
- `.appointment-item.active` - Active appointment styling

#### Progress Bars

- `.progress-bar` - Base progress bar container
- `.progress-bar-blue` - Blue progress bar fill
- `.progress-bar-purple` - Purple progress bar fill
- `.progress-bar-white` - White progress bar fill

#### Treatment Phases

- `.phase-early` - Early Stage phase styling
- `.phase-ongoing` - Ongoing phase styling
- `.phase-maintenance` - Maintenance phase styling

#### Date Selector

- `.date-selector` - Container for date selector
- `.date-item` - Individual date item
- `.date-item.active` - Active date styling
- `.date-item:hover` - Date hover state

#### Sidebar Navigation

- `.nav-item` - Base navigation item styling
- `.nav-item.active` - Active navigation item
- `.nav-item:hover` - Navigation item hover state

#### Charts

- `.chart-container` - Container for chart components

## Usage Examples

### Using CSS Variables

```css
.my-component {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
}

.primary-card {
  background-color: var(--color-primary-card);
  color: var(--color-text-white);
}
```

### Using Utility Classes

```html
<!-- Primary Card with Blue Background -->
<div class="card-primary">
  <h2 class="text-white">Visits today</h2>
  <p class="text-white">8 / 17 today</p>
</div>

<!-- Appointment List -->
<div class="appointment-item active">
  <span>10:45-11:00 am</span>
  <span>A. Schultz</span>
</div>

<!-- Treatment Phase Badge -->
<div class="phase-early">36 patients - Early Stage</div>

<!-- Date Selector -->
<div class="date-selector">
  <div class="date-item active">19 Jul</div>
  <div class="date-item">20 Jul</div>
</div>

<!-- Progress Bar -->
<div class="progress-bar">
  <div class="progress-bar-blue" style="width: 48%"></div>
</div>
```

### In Angular Components

```typescript
// In your component TypeScript file
styles: [
  `
  .visit-card {
    background-color: var(--color-primary-card);
    color: var(--color-text-white);
    border-radius: 12px;
    padding: 1.5rem;
  }
  
  .treatment-phase {
    background-color: var(--color-phase-early);
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }
`,
];
```

## Color Palette Summary

| Color             | Hex     | Usage                                                |
| ----------------- | ------- | ---------------------------------------------------- |
| Sidebar Dark Blue | #1e293b | Sidebar background                                   |
| Primary Blue      | #3b82f6 | Buttons, active states, progress bars, primary cards |
| Purple            | #8b5cf6 | Progress bars, Net Promoter Score                    |
| Purple Light      | #c4b5fd | Early Stage treatment phase                          |
| Purple Medium     | #a78bfa | Ongoing treatment phase                              |
| Purple Dark       | #7c3aed | Maintenance treatment phase                          |
| White             | #ffffff | Cards, backgrounds, progress bars                    |
| Light Gray        | #f8fafc | Main background                                      |
| Dark Text         | #0f172a | Primary text                                         |
| Medium Gray Text  | #64748b | Secondary text                                       |
| Success Green     | #10b981 | Success states                                       |
| Error Red         | #ef4444 | Error states                                         |

## Design Patterns

### Primary Cards (e.g., "Visits today")

- Use `--color-primary-card` background
- White text (`--color-text-white`)
- Rounded corners (12px)
- Subtle shadow

### Appointment Items

- White background with light border
- Active state: Light blue background with blue border
- Hover: Light gray background

### Progress Bars

- Blue for primary metrics (visits, monthly progress)
- Purple for Net Promoter Score
- White for progress bars on colored backgrounds

### Treatment Phases

- Light purple for Early Stage
- Medium purple for Ongoing
- Dark purple for Maintenance

### Date Selector

- Active date: Light blue background with blue text
- Hover: Light gray background
- Default: Gray text
