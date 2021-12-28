/**
 * Tab Function
 * @param { String } wrapperId - Wrapper contet's ID
 * @param { String } [panelName] - Panel's name
 * ex: tab('sample-tab');
 * Note: Control UI elements with aria-* attributes
 * [aria-hidden='true'] {display: none;}
 * [aria-hidden='false'] {display: block;}
 * https://github.com/Kazuki-tam/vitam/wiki/Libraries
 */

function tab(wrapperId: string, panelName?: string): void {
  const element = document.getElementById(wrapperId);
  const tabList = element?.querySelector('[role="tablist"]');
  const tabButtonList = element?.querySelectorAll('[role="tab"]');

  // Toggle function
  const toggleTab = (event: Event): void => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const targetPanel = eventTarget.getAttribute('aria-controls');
    const activeTab = element?.querySelector('[aria-selected="true"]');
    const activeContent = element?.querySelector('[aria-hidden="false"]');

    // Toggle tab's aria-selected
    activeTab?.setAttribute('aria-selected', 'false');
    eventTarget?.setAttribute('aria-selected', 'true');

    // Toggle content's aria-hidden
    activeContent?.setAttribute('aria-hidden', 'true');
    element?.querySelector(`#${targetPanel || 'not-supplied'}`)?.setAttribute('aria-hidden', 'false');
    event.preventDefault();
  };

  // Tab click EventListener
  tabButtonList?.forEach((item) => {
    item.addEventListener('click', toggleTab);
  });

  // Tab keydown EventListener
  let tabFocus = 0;
  tabList?.addEventListener('keydown', (event: KeyboardEventInit) => {
    // Detect arrow direction
    if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
      // Reset tabindex
      tabButtonList && tabButtonList[tabFocus].setAttribute('tabindex', '-1');
      // Move Right
      if (tabButtonList && event.code === 'ArrowRight') {
        tabFocus += 1;
        // If you are at the end, go back to the start
        if (tabFocus >= tabButtonList.length) {
          tabFocus = 0;
        }
      } else if (tabButtonList && event.code === 'ArrowLeft') {
        tabFocus -= 1;
        // If you are at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabButtonList.length - 1;
        }
      }
      // Change tabindex
      const tabFocused = tabButtonList && (tabButtonList[tabFocus] as HTMLButtonElement);
      tabFocused && tabFocused.setAttribute('tabindex', '0');
      tabFocused && tabFocused.focus();
    }
  });

  // Open the specific panel
  if (panelName) {
    const indexTab = element?.querySelector(`[aria-controls="${panelName}"]`) as HTMLButtonElement;
    indexTab?.click();
    indexTab?.focus();
  }
}

export { tab };
