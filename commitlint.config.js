// feat: 新增特性 (feature)
// fix: 修复bug(bug fix)
// docs: 修改文档 (document)
// style: 代码格式修改
// refactor: 代码重构 (refactor)
// perf: 改善性能 (performance)
// test: 测试
// build: 变更项目构建或外部依赖
// chore: 杂项
// revert: 代码回退
const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'release', 'chore', 'revert'];

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  },
};
