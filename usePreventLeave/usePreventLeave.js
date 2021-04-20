const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; // 크롬 필수
  };
  const enablePreventLeave = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePreventLeave = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePreventLeave, disablePreventLeave };
};

export default usePreventLeave;
