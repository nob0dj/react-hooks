import useTab from "./useTab";

export default function App() {
  const tabs = [
    {
      label: "영어",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      label: "한글",
      content:
        "저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다. 비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다."
    }
  ];

  const { currentTab, setCurrentTabIndex } = useTab(0, tabs);

  return (
    <div className="App">
      <h1>tabs</h1>
      <div>
        {tabs.map((tab, index) => (
          <button
            onClick={() => setCurrentTabIndex(index)}
            style={{ marginRight: "10px" }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>{currentTab.content}</div>
    </div>
  );
}
