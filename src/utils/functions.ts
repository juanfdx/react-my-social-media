
/*====================================================================
  SLIDER BREAKPOINTS
=====================================================================*/
export const sliderBreakpoints = (width: number, items: number) => {

  if (width < 540) {
    return 2;
  } else if (width < 1024) {
    return 3;
  } else if (width < 1280) {
    return 3;
  } else {
    return items;
  }
  
}


/*====================================================================
  CAPITALIZE INITIALS OF NAME
=====================================================================*/
export const initials = (name: string): string => {
  return name
    .trim()
    .split(/\s+/) // handles multiple spaces correctly
    .slice(0, 2)  // keeps only the first and second words
    .map(word => word[0]?.toUpperCase() ?? '')
    .join('');
};


/*====================================================================
  AVATAR COLOR
=====================================================================*/
const COLORS = [
  '#F87171', // red
  '#FB923C', // orange
  '#FACC15', // yellow
  '#4ADE80', // green
  '#60A5FA', // blue
  '#A78BFA', // purple
  '#F472B6', // pink
  '#34D399', // emerald
];


export const avatarColor = (name: string): string => {
  const hash = [...name].reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );

  return COLORS[hash % COLORS.length];
};


/*====================================================================
  GET POST WITH USER AND COMMENTS DATA
=====================================================================*/
