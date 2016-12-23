const setupTabs = () => {
  const tabGroups = document.querySelectorAll('[data-tab-group]');

  tabGroups.forEach(function(tabGroup) {
    const tabs = tabGroup.querySelectorAll('[data-tab-group] [data-tab-for]');

    const deactivate = function(element) {
      element.classList.add('o-60');
      element.classList.remove('o-100');

      const tabFor = tabGroup.querySelector('[data-tab-content="' + element.dataset.tabFor + '"]');
      tabFor.classList.remove('is-visible');
    };

    const activate = function(element) {
      element.classList.remove('o-60');
      element.classList.add('o-100');

      const tabFor = tabGroup.querySelector('[data-tab-content="' + element.dataset.tabFor + '"]');
      tabFor.classList.add('is-visible');
    };

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function(event) {
        // check others are active
        // if they are, deactivate
        tabs.forEach(function(tab) {
          if (tab !== event.target) {
            deactivate(tab);
          }
        });

        // check if self is active
        // if is, deactivate
        if (event.target.classList.contains('fw6')) {
          deactivate(event.target);
          return;
        }

        activate(event.target);
      });
    });

    // activate the first tab by default
    tabs.forEach(function(tab, index) {
      if (index === 0) {
        activate(tab);
      } else {
        deactivate(tab);
      }
    });
  });

  console.log('Tabs set up');
};

export default setupTabs;
