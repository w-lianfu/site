import styled from 'styled-components'

let comp = {}

// flex 横向布局 左对齐
comp.flex = styled.div`
  display: flex;
  flex-direction: row;
`
// flex 横向布局 居中
comp.flex_center = comp.flex.extend`
  align-items: center;
`
// flex 横向布局 两端对其
comp.flex_justify = comp.flex.extend`
  justify-content: space-between;
`

// flex 纵向布局 左对齐
comp.flex_column = comp.flex.extend`
  flex-direction: column;
`
// flex 纵向布局 居中
comp.flex_column_center = comp.flex_column.extend`
  align-items: center;
`
// flex 纵向布局 两端对其
comp.flex_column_justify = comp.flex_column.extend`
  justify-content: space-between;
`

comp.page = styled.div`
  flex: 1;
`

export default comp
