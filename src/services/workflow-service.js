/**
 * find workflow base on name & level.
 * @param {*} workflow workflow
 * @param {*} level
 * @param {*} name
 * @returns
 */
export function findWorkflow(workflow, name, level) {
    if (!workflow || !(workflow instanceof Array)) {
      return null
    }
  
    let foundWorkflow = workflow.find(p => p.name === name && p.level === level)
    if (foundWorkflow) {
      return foundWorkflow
    }
  
    for (const workflowItem of workflow) {
      if (workflowItem && workflowItem.children) {
        foundWorkflow = findWorkflow(workflowItem.children, name, level)
        if (foundWorkflow) {
          return foundWorkflow
        }
      }
    }
  
    return null
  }

export const getFeature = (featureName, features) => {
  const feature = features ? features.find(p => p.name === featureName) : null
  if(feature) {
      return feature
  }
  return null
}

export const getFeatureByName = (featureName, features) => {
  return features ? features.find(p => p.name === featureName) : null
}