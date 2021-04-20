const useConfirm = ({ message = "", onConfirm, onCancel }) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    throw new Error("콜백함수를 지정하세요.");
  }
  return () => {
    //scope를 window로 지정할것. this = undefined
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
};

export default useConfirm;
