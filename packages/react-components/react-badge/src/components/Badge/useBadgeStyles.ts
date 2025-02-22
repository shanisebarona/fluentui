import { shorthands, mergeClasses, makeStyles } from '@griffel/react';
import { tokens, typographyStyles } from '@fluentui/react-theme';
import type { BadgeSlots, BadgeState } from './Badge.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const badgeClassNames: SlotClassNames<BadgeSlots> = {
  root: 'fui-Badge',
  icon: 'fui-Badge__icon',
};

// The text content of the badge has additional horizontal padding, but there is no `text` slot to add that padding to.
// Instead, add extra padding to the root, and a negative margin on the icon to "remove" the extra padding on the icon.
const textPadding = tokens.spacingHorizontalXXS;

const useRootStyles = makeStyles({
  base: {
    display: 'inline-flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...typographyStyles.caption1Strong,
  },

  fontSmallToTiny: {
    ...typographyStyles.caption2Strong,
  },

  // size

  tiny: {
    width: '6px',
    height: '6px',
    fontSize: '4px',
    lineHeight: '4px',
  },
  'extra-small': {
    width: '10px',
    height: '10px',
    fontSize: '6px',
    lineHeight: '6px',
  },
  small: {
    minWidth: '16px',
    height: '16px',
    ...shorthands.padding(0, `calc(${tokens.spacingHorizontalXXS} + ${textPadding})`),
  },
  medium: {
    height: '20px',
    minWidth: '20px',
    ...shorthands.padding(0, `calc(${tokens.spacingHorizontalXS} + ${textPadding})`),
  },
  large: {
    minWidth: '24px',
    height: '24px',
    ...shorthands.padding(0, `calc(${tokens.spacingHorizontalXS} + ${textPadding})`),
  },
  'extra-large': {
    minWidth: '32px',
    height: '32px',
    ...shorthands.padding(0, `calc(${tokens.spacingHorizontalSNudge} + ${textPadding})`),
  },

  // shape

  square: {
    ...shorthands.borderRadius(tokens.borderRadiusNone),
  },
  rounded: {
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  roundedSmallToTiny: {
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
  },
  circular: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
  },

  // border (all appearances except ghost)

  border: {
    // The border is applied in an :after pseudo-element because it should not affect layout.
    // The padding and size of the badge should be the same regardless of whether or not it has a border.
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      ...shorthands.borderStyle('solid'),
      ...shorthands.borderWidth(tokens.strokeWidthThin),
      ...shorthands.borderColor('inherit'),
      ...shorthands.borderRadius('inherit'),
    },
  },

  // appearance: filled

  filled: {
    // Use a transparent stroke (rather than no border) so the border is visible in high contrast
    ...shorthands.borderColor(tokens.colorTransparentStroke),
  },
  'filled-brand': {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  'filled-danger': {
    backgroundColor: tokens.colorPaletteRedBackground3,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  'filled-important': {
    backgroundColor: tokens.colorNeutralForeground1,
    color: tokens.colorNeutralBackground1,
  },
  'filled-informative': {
    backgroundColor: tokens.colorNeutralBackground5,
    color: tokens.colorNeutralForeground3,
  },
  'filled-severe': {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground3,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  'filled-subtle': {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },
  'filled-success': {
    backgroundColor: tokens.colorPaletteGreenBackground3,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  'filled-warning': {
    backgroundColor: tokens.colorPaletteYellowBackground3,
    color: tokens.colorNeutralForeground1Static,
  },

  // appearance: ghost

  ghost: {
    // No shared colors between ghost appearances
  },
  'ghost-brand': {
    color: tokens.colorBrandForeground1,
  },
  'ghost-danger': {
    color: tokens.colorPaletteRedForeground3,
  },
  'ghost-important': {
    color: tokens.colorNeutralForeground1,
  },
  'ghost-informative': {
    color: tokens.colorNeutralForeground3,
  },
  'ghost-severe': {
    color: tokens.colorPaletteDarkOrangeForeground3,
  },
  'ghost-subtle': {
    color: tokens.colorNeutralForegroundStaticInverted,
  },
  'ghost-success': {
    color: tokens.colorPaletteGreenForeground3,
  },
  'ghost-warning': {
    color: tokens.colorPaletteYellowForeground2,
  },

  // appearance: outline

  outline: {
    ...shorthands.borderColor('currentColor'),
  },
  'outline-brand': {
    color: tokens.colorBrandForeground1,
  },
  'outline-danger': {
    color: tokens.colorPaletteRedForeground3,
  },
  'outline-important': {
    color: tokens.colorNeutralForeground3,
    ...shorthands.borderColor(tokens.colorNeutralStrokeAccessible),
  },
  'outline-informative': {
    color: tokens.colorNeutralForeground3,
    ...shorthands.borderColor(tokens.colorNeutralStroke2),
  },
  'outline-severe': {
    color: tokens.colorPaletteDarkOrangeForeground3,
  },
  'outline-subtle': {
    color: tokens.colorNeutralForegroundStaticInverted,
  },
  'outline-success': {
    color: tokens.colorPaletteGreenForeground2,
  },
  'outline-warning': {
    color: tokens.colorPaletteYellowForeground2,
  },

  // appearance: tint

  tint: {
    // No shared colors between tint appearances
  },
  'tint-brand': {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    ...shorthands.borderColor(tokens.colorBrandStroke2),
  },
  'tint-danger': {
    backgroundColor: tokens.colorPaletteRedBackground1,
    color: tokens.colorPaletteRedForeground1,
    ...shorthands.borderColor(tokens.colorPaletteRedBorder1),
  },
  'tint-important': {
    backgroundColor: tokens.colorNeutralForeground3,
    color: tokens.colorNeutralBackground1,
    ...shorthands.borderColor(tokens.colorTransparentStroke),
  },
  'tint-informative': {
    backgroundColor: tokens.colorNeutralBackground4,
    color: tokens.colorNeutralForeground3,
    ...shorthands.borderColor(tokens.colorNeutralStroke2),
  },
  'tint-severe': {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    color: tokens.colorPaletteDarkOrangeForeground1,
    ...shorthands.borderColor(tokens.colorPaletteDarkOrangeBorder1),
  },
  'tint-subtle': {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground3,
    ...shorthands.borderColor(tokens.colorNeutralStroke2),
  },
  'tint-success': {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
    ...shorthands.borderColor(tokens.colorPaletteGreenBorder1),
  },
  'tint-warning': {
    backgroundColor: tokens.colorPaletteYellowBackground1,
    color: tokens.colorPaletteYellowForeground2,
    ...shorthands.borderColor(tokens.colorPaletteYellowBorder1),
  },
});

const useIconStyles = makeStyles({
  base: {
    display: 'flex',
    lineHeight: '1',
    ...shorthands.margin(0, `calc(-1 * ${textPadding})`), // Remove text padding added to root
  },

  beforeText: {
    marginRight: `calc(${tokens.spacingHorizontalXXS} + ${textPadding})`,
  },
  afterText: {
    marginLeft: `calc(${tokens.spacingHorizontalXXS} + ${textPadding})`,
  },

  beforeTextXL: {
    marginRight: `calc(${tokens.spacingHorizontalXS} + ${textPadding})`,
  },
  afterTextXL: {
    marginLeft: `calc(${tokens.spacingHorizontalXS} + ${textPadding})`,
  },

  // size

  tiny: {
    fontSize: '6px',
  },
  'extra-small': {
    fontSize: '10px',
  },
  small: {
    fontSize: '12px',
  },
  medium: {
    fontSize: '12px',
  },
  large: {
    fontSize: '16px',
  },
  'extra-large': {
    fontSize: '20px',
  },
});

/**
 * Applies style classnames to slots
 */
export const useBadgeStyles_unstable = (state: BadgeState): BadgeState => {
  const rootStyles = useRootStyles();

  const smallToTiny = state.size === 'small' || state.size === 'extra-small' || state.size === 'tiny';

  state.root.className = mergeClasses(
    badgeClassNames.root,
    rootStyles.base,
    smallToTiny && rootStyles.fontSmallToTiny,
    rootStyles[state.size],
    rootStyles[state.shape],
    state.shape === 'rounded' && smallToTiny && rootStyles.roundedSmallToTiny,
    state.appearance !== 'ghost' && rootStyles.border,
    rootStyles[state.appearance],
    rootStyles[`${state.appearance}-${state.color}` as const],
    state.root.className,
  );

  const iconStyles = useIconStyles();
  if (state.icon) {
    let iconPositionClass;
    if (state.root.children) {
      if (state.size === 'extra-large') {
        iconPositionClass = state.iconPosition === 'after' ? iconStyles.afterTextXL : iconStyles.beforeTextXL;
      } else {
        iconPositionClass = state.iconPosition === 'after' ? iconStyles.afterText : iconStyles.beforeText;
      }
    }

    state.icon.className = mergeClasses(
      badgeClassNames.icon,
      iconStyles.base,
      iconPositionClass,
      iconStyles[state.size],
      state.icon.className,
    );
  }

  return state;
};
