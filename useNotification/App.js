/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#checking_current_permission_status
 */
const useNotification = ({ title, options }) => {
  /**
   * requestPermission : granted | denied | default
   */
  const notify = () => {
    console.log(Notification.permission);
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log(permission);
        if (permission === "granted") new Notification(title, options);
      });
    }
    new Notification(title, options);
  };
  return { notify };
};

export default function App() {
  const { notify } = useNotification({
    title: "Can I have some salmon",
    options: {
      body: "I love salmon, don't you?",
      icon: "https://d.pr/i/q7eeGo+"
    }
  });

  return (
    <div>
      <h1>hello useNotification</h1>
      <button onClick={notify}>알림</button>
    </div>
  );
}
