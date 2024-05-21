const createTypography = (
  fontFamily = 'NotoSans_400Regular',
  baseSize = 12,
  baseLineHeight = 16,
  baseLetterSpacing = 0,
) => {
  const scale = factor => baseSize * factor;
  const lineHeight = factor => baseLineHeight * factor;
  const letterSpacing = factor => baseLetterSpacing * factor;

  return {
    heading1: {
      fontSize: scale(3.33), // 40px
      lineHeight: lineHeight(3), // 48px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    heading2: {
      fontSize: scale(2.67), // 32px
      lineHeight: lineHeight(2.5), // 40px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    heading3: {
      fontSize: scale(2.33), // 28px
      lineHeight: lineHeight(2.25), // 36px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    heading4: {
      fontSize: scale(2), // 24px
      lineHeight: lineHeight(2.25), // 36px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    subheading1: {
      fontSize: scale(1.67), // 20px
      lineHeight: lineHeight(2), // 32px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    subheading2: {
      fontSize: scale(1.5), // 18px
      lineHeight: lineHeight(1.5), // 24px
      letterSpacing: letterSpacing(1),
      fontWeight: '700', // Bold
      fontFamily: 'NotoSans_700Bold',
    },
    paragraphL: {
      fontSize: scale(1.33), // 16px
      lineHeight: lineHeight(1.5), // 24px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
    paragraphM: {
      fontSize: scale(1.17), // 14px
      lineHeight: lineHeight(1.25), // 20px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
    paragraphS: {
      fontSize: scale(1), // 12px
      lineHeight: lineHeight(1), // 16px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
    labelL: {
      fontSize: scale(1.33), // 16px
      lineHeight: lineHeight(1.5), // 24px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
    labelM: {
      fontSize: scale(1.17), // 14px
      lineHeight: lineHeight(1.25), // 20px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
    labelS: {
      fontSize: scale(1), // 12px
      lineHeight: lineHeight(1), // 16px
      letterSpacing: letterSpacing(1),
      fontWeight: '400', // Regular
      fontFamily,
    },
  };
};

const typography = createTypography();

export default typography;
export {createTypography};
