export type FirstDayOfWeekString = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export type FirstDayOfWeekNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type DaysString = string[];
interface Data {
  dayString: DaysString;
  emptyBoxesFirstWeek: Record<FirstDayOfWeekNumber, number>;
  emptyBoxesLastWeek: Record<FirstDayOfWeekNumber, number>;
}

export const firstDayOfWeekLookUp: Record<FirstDayOfWeekString, FirstDayOfWeekNumber> = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7
};

export const weekLookUp: Record<FirstDayOfWeekNumber, Data> = {
  1: {
    dayString: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    emptyBoxesFirstWeek: {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
      7: 6
    },
    emptyBoxesLastWeek: {
      1: 6,
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1,
      7: 0
    }
  },
  2: {
    dayString: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
    emptyBoxesFirstWeek: {
      2: 0,
      3: 1,
      4: 2,
      5: 3,
      6: 4,
      7: 5,
      1: 6
    },
    emptyBoxesLastWeek: {
      2: 6,
      3: 5,
      4: 4,
      5: 3,
      6: 2,
      7: 1,
      1: 0
    }
  },
  3: {
    dayString: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
    emptyBoxesFirstWeek: {
      3: 0,
      4: 1,
      5: 2,
      6: 3,
      7: 4,
      1: 5,
      2: 6
    },
    emptyBoxesLastWeek: {
      3: 6,
      4: 5,
      5: 4,
      6: 3,
      7: 2,
      1: 1,
      2: 0
    }
  },
  4: {
    dayString: ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
    emptyBoxesFirstWeek: {
      4: 0,
      5: 1,
      6: 2,
      7: 3,
      1: 4,
      2: 5,
      3: 6
    },
    emptyBoxesLastWeek: {
      4: 6,
      5: 5,
      6: 4,
      7: 3,
      1: 2,
      2: 1,
      3: 0
    }
  },
  5: {
    dayString: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
    emptyBoxesFirstWeek: {
      5: 0,
      6: 1,
      7: 2,
      1: 3,
      2: 4,
      3: 5,
      4: 6
    },
    emptyBoxesLastWeek: {
      5: 6,
      6: 5,
      7: 4,
      1: 3,
      2: 2,
      3: 1,
      4: 0
    }
  },
  6: {
    dayString: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    emptyBoxesFirstWeek: {
      6: 0,
      7: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6
    },
    emptyBoxesLastWeek: {
      6: 6,
      7: 5,
      1: 4,
      2: 3,
      3: 2,
      4: 1,
      5: 0
    }
  },
  7: {
    dayString: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    emptyBoxesFirstWeek: {
      7: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6
    },
    emptyBoxesLastWeek: {
      7: 6,
      1: 5,
      2: 4,
      3: 3,
      4: 2,
      5: 1,
      6: 0
    }
  }
};
