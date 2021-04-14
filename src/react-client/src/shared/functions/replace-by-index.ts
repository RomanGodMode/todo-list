

export const replaceByIndex = <T>(arr: T[], idx:number, item: T) => {
  const cloneMutant = [...arr]
  cloneMutant.splice(idx,1, item)
  return cloneMutant
}

