/* tabs.js */
export const deactivateAllTabs = () => {
    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });
  }
  
  /**
   * @param {HTMLElement} tab
   */
  export const activateClickedTab = tab => {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.add("active");
      });
  }