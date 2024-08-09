export type Mods = Record<string, boolean | undefined | null>;

export function classNames(cls: string, mods?: Mods, additional?: string | Array<string | undefined>): string {
  const getAdditional = (): string[] => {
    if (!additional) return [];
    if (typeof additional === 'string') return [additional];
    return additional.map(item => item ?? '').filter(item => item !== '');
  };

  const getMods = (): string[] => {
    if (!mods) return [];

    return Object.entries(mods)
      .filter(([, isActive]) => Boolean(isActive))
      .map(([className]) => className);
  };

  return [cls, ...getAdditional(), ...getMods()].join(' ');
}
