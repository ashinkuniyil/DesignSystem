import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Grid configuration
const GRID_COLUMNS = 12;
const GUTTER_WIDTH = 16;
const CONTAINER_PADDING = 16;

const columnWidth =
  (width - CONTAINER_PADDING * 2 - (GRID_COLUMNS - 1) * GUTTER_WIDTH) /
  GRID_COLUMNS;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: CONTAINER_PADDING,
    // justifyContent: 'center',
  },
  column: {
    marginRight: GUTTER_WIDTH,
    marginBottom: GUTTER_WIDTH,
  },
  // Full width column style
  fullWidth: {
    width: width - CONTAINER_PADDING * 2,
  },
  // Helper to define column span
  getColumnSpan: span => ({
    width: columnWidth * span + (span - 1) * GUTTER_WIDTH,
  }),
});

export default styles;
