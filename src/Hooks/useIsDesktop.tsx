import useIsMobile from "./useIsMobile";

export function isDesktop() {
    return !useIsMobile();
}