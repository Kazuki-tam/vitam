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

  // Tab EventListener
  tabButtonList?.forEach((item) => {
    item.addEventListener('click', toggleTab);
  });

  // Open a default panel
  if (panelName) {
    const indexTab = element?.querySelector(`[aria-controls="${panelName}"]`) as HTMLElement;
    indexTab?.click();
  }
}

export { tab };
