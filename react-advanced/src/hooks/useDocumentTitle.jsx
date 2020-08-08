const { useEffect } = require("react");

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      //componetWillUnmount
      console.log("Clean Up");
    };
  });
}
