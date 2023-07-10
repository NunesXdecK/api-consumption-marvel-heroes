const dpToRem = (fontSize: number) => {
  return fontSize * 0.0625
}

export const sizes = {
  profileMargin: `${dpToRem(24)}rem`,
  profilePicture: `${dpToRem(160)}rem`,
  profilePictureMobile: `${dpToRem(120)}rem`,
  profileLabel: `${dpToRem(28)}rem`,
  profileText: `${dpToRem(20)}rem`,
  profileTitle: `${dpToRem(36)}rem`,
  profileTitleMobile: `${dpToRem(24)}rem`,
  profileHeaderPadding: `${dpToRem(48)}rem 0`,
  paperPadding: `${dpToRem(24)}rem`,
  listItemIcon: `${dpToRem(42)}rem`,
  listTitleMobile: `${dpToRem(16)}rem`,
  listSubtitleMobile: `${dpToRem(14)}rem`,
  listItemIconMobile: `${dpToRem(24)}rem`,
  listItemIconProfile: `${dpToRem(40)}rem`,
  listPaddingXY: `${dpToRem(8)}rem ${dpToRem(24)}rem ${dpToRem(8)}rem ${dpToRem(16)}rem`,
}
