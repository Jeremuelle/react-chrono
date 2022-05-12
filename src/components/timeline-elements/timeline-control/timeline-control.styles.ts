import styled from '@emotion/styled';
import { Theme } from '../../../models/Theme';
import { TimelineMode } from '../../../models/TimelineModel';

export const TimelineNavWrapper = styled.ul<{ theme?: Theme }>`
  background: rgba(229, 229, 229, 0.85);
  border-radius: 25px;
  display: flex;
  list-style: none;
  padding: 0.25em 0.25em;
`;

export const TimelineNavItemLeft = styled.span<{ disable?: boolean }>`
  position: absolute;
  left: -18px;
  top: 29px;
  z-index: 10;

  ${(p) => (p.disable ? 'pointer-events: none; filter: opacity(0.9)' : '')};
`;

export const TimelineNavItemRight = styled.span<{ disable?: boolean }>`
  position: absolute;
  top: 29px;
  z-index: 10;

  ${(p) =>
    p.disable
      ? 'pointer-events: none; filter: opacity(0.9); right: -22px; '
      : 'right: -18px;'};
`;

export const TimelineNavItemPlay = styled.span<{ disable?: boolean }>`
  position: absolute;
  right: -50px;
  top: 28px;
  z-index: 10;
  svg {
    width: 20px;
    height: 20px;
  }
  ${(p) => (p.disable ? 'pointer-events: none; filter: opacity(0.7)' : '')};
`;

export const TimelineNavItem = styled.li<{ disable?: boolean }>`
  padding: 0.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) => (p.disable ? 'pointer-events: none; filter: opacity(0.7)' : '')};
`;

export const TimelineNavButton = styled.button<{
  mode?: TimelineMode;
  rotate?: 'TRUE' | 'FALSE';
  theme?: Theme;
}>`
  align-items: center;
  background: transparent;
  // border-radius: 50%;
  border: 0;
  color: ${(p) => p.theme.primary};
  cursor: pointer;
  display: flex;
  // filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
  height: 35px;
  width: 35px;
  justify-content: center;
  margin: 0 0.2em;
  padding: 0;
  transition: all 0.1s ease-in;

  transform: ${(p) => {
    if (p.rotate === 'TRUE') {
      return `rotate(90deg)`;
    }
  }};

  &:active {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));
    transform: ${(p) => (p.rotate === 'TRUE' ? 'rotate(90deg)' : '')} scale(0.9);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TimelineControlContainer = styled.div<{
  flip?: boolean;
  slideShowActive?: boolean;
  mode?: string;
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  // direction: ${(p) => (p.flip ? 'rtl' : 'ltr')};
  visibility: ${(p) => (p.slideShowActive ? 'hidden' : 'visible')};
`;

export const ControlButton = styled.button<{ theme?: Theme }>`
  align-items: center;
  background: ${(p) => p.theme.primary};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-left: 0.5em;
  width: 2em;
  outline: 0;
  color: #fff;

  svg {
    width: 80%;
    height: 80%;
  }
`;

export const MediaToggle = styled(ControlButton)``;

export const ReplayWrapper = styled(ControlButton)``;
