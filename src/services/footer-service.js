import { ConstFooter } from '../config'
import { ObjectLevel } from '../config/defineObjects'

/**
 * Get footer list TwoPane basing on level.
 * @param {*} level the level of object.
 * @returns footers list.
 */
export function getFooterIconsTwoPane(level) {
  let icons = []

  switch (level) {
    case ObjectLevel.Level0:
      icons = ConstFooter.arrListIconTwoPaneFormProject
      break
    case ObjectLevel.Level1:
      icons = ConstFooter.arrListIconTwoPaneFormPoints
      break
    case ObjectLevel.Level2:
    case ObjectLevel.Level3:
      icons = ConstFooter.arrListIconThreePaneFormLayer
      break
    default:
      break
  }

  return icons
}
/**
 * Get footer list Grid basing on level.
 * @param {*} level the level of object.
 * @returns footers list.
 */
export function getFooterIconsGrid(level) {
  let icons = []

  switch (level) {
    case ObjectLevel.Level0:
      icons = ConstFooter.arrListIconGridFormProject
      break
    case ObjectLevel.Level1:
      icons = ConstFooter.arrListIconGridFormPoints
      break
    case ObjectLevel.Level2:
    case ObjectLevel.Level3:
      icons = ConstFooter.arrListIconGridFormLayer
      break
    default:
      break
  }

  return icons
}
/**
 * Get icons for Items basing on level.
 * @param {*} level the level of object.
 * @returns footers list.
 */
export function getIconsItems(level) {
  let icons = []

  switch (level) {
    case ObjectLevel.Level0:
      icons = ConstFooter.arrListFunctionsLevel0
      break
    case ObjectLevel.Level1:
      icons = ConstFooter.arrListFunctionsLevel1
      break
    case ObjectLevel.Level2:
    case ObjectLevel.Level3:
      icons = ConstFooter.arrListFunctionsLevel2
      break
    default:
      break
  }

  return icons
}
