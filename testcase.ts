export type Q = { type: "A" } | { type: "B" };

export function f1(q: Q | undefined): string {
  if (q) {
    switch (q.type) {
      case "A":
        return "A";
      case "B":
        return "B";
    }
  } else {
    return "nothing";
  }
}

export function f2(q: Q | undefined): string {
  if (q) {
    return f2_help(q);
  } else {
    return "nothing";
  }
}

function f2_help(q: Q): string {
  switch (q.type) {
    case "A":
      return "A";
    case "B":
      return "B";
  }
}
