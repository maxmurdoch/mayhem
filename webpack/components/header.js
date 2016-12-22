import R from 'ramda';
import {
    h,
    h2,
    ul,
    li
} from 'react-hyperscript-helpers';
import {
    Tab,
    Tabs,
    TabList,
    TabPanel
} from 'react-tabs';
import {
    v4
} from 'uuid';
import {
    render
} from 'react-dom';
import classNames from 'classnames';
import data from '../data/header-data.json';

const Header = () => {
  Tabs.setUseDefaultStyles(false);
  console.log('map', R.map((client) => li(R.prop('name', client)), R.prop('clients', data)));

  return h(Tabs, {
    selectedIndex: 0
  }, [
    h(TabList, { className: classNames("col-xs-12", "col-md-3", "col-lg-3", "list", "pa0", "ma0", "exo", "f5", "f4-ns", "ttu", "tracked", "lh-title")}, [
      h(Tab, 'About'),
      h(Tab, 'Clients'),
      h(Tab, 'Contact')
    ]),
    h(TabPanel, {
      key: v4()
    }, [h2(R.prop('about', data))]),
    h(TabPanel, {
      key: v4()
    }, [ul(R.map((client) => li(R.prop('name', client)), R.prop('clients', data)))]),
    h(TabPanel, {
      key: v4()
    }, [h2('Contact contents')])
  ]);
};

render(h(Header), document.getElementById('desktop-header'));

export default Header;
