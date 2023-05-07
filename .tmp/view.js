export { default } from '/Users/zc/Documents/project/ant-design-mobile/src/index.ts'

import * as componentInstances from '/Users/zc/Documents/project/ant-design-mobile/src/index.ts'

export * from '/Users/zc/Documents/project/ant-design-mobile/src/index.ts'

const coveredComponents = {}

const library = 'AntdMobile'
const execCompile = !!true

if (!execCompile) {
  window[library] = Object.assign(
    { __esModule: true },
    componentInstances || {},
    coveredComponents || {}
  )
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default
  if (component[componentName]) return component[componentName]
  return component
}
