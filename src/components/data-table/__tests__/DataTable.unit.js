import { mount, shallowMount } from '@vue/test-utils';
import DataTable from '../components/DataTable.vue';

const shallowWrap = (propsData = {}) => shallowMount(DataTable, { propsData });
const wrap = (propsData = {}) => mount(DataTable, { propsData });

const headings = ['Product', 'Price', 'Order Number', 'Quantity', 'Subtotal'];

const rows = [
  [{ content: 'Emerald Silk Gown', url: '#' }, '$875.00', 124689, 140, '$122,500.00'],
  ['Navy Merino Wool Blazer with khaki chinos and yellow belt', '$445.00', 124518, 32, '$14,240.00'],
  ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
];

const columnContentTypes = [
  'text',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
];

describe('DataTable', () => {
  it('is a valid vue component', () => {
    expect(DataTable).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowWrap({
      columnContentTypes,
      headings,
      rows,
    }).element).toMatchSnapshot();
  });

  it('uses the columnContentTypes prop', () => {
    const wrapper = wrap({ columnContentTypes, headings, rows });

    expect(wrapper.findAll('thead .data-table__cell--text').length).toBe(1);
    expect(wrapper.findAll('thead .data-table__cell--numeric').length).toBe(4);
  });

  it('validates the columnContentTypes prop', () => {
    const prop = DataTable.props.columnContentTypes;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator(['text', 'numeric'])).toBeTruthy();
    expect(prop.validator(['text', 'image'])).toBeFalsy();
  });

  it('uses the defaultSortDirection prop', () => {

  });

  it('validates the defaultSortDirection', () => {

  });

  it('ues the footerContent prop', () => {
    const footerContent = `Showing ${rows.length} of ${rows.length} records`;
    const wrapper = wrap({
      columnContentTypes,
      headings,
      rows,
      footerContent,
    });

    expect(wrapper.find('.data-table__footer').exists()).toBeTruthy();
  });

  it('uses the headings prop', () => {
    const wrapper = wrap({ columnContentTypes, headings, rows });

    wrapper.findAll('thead .data-table__cell').wrappers.forEach((w) => {
      expect(headings.includes(w.text())).toBeTruthy();
    });
  });

  it('uses the initialSortColumnIndex prop', () => {

  });

  it('uses the rows prop', () => {
    const wrapper = wrap({ columnContentTypes, headings, rows });

    expect(wrapper.findAll('tbody tr').length).toBe(rows.length);
  });

  it('uses the sortable prop', () => {

  });

  it('uses the totals prop', () => {

  });
});
