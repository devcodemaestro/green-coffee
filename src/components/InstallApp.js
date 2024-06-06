import React, { useEffect, useState } from "react";
import { PwaInstall } from "../styles/ui/InstallAppStyle";

const InstallApp = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handleBeforeInstallPrompt = e => {
    e.preventDefault();
    setDeferredPrompt(e);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 설치 프롬프트에 동의했습니다.");
        } else {
          console.log("사용자가 설치 프롬프트를 무시했습니다.");
        }

        setDeferredPrompt(null);
      });
    }
  };

  return (
    <PwaInstall>
      <div>
        <span>앱을 설치하면 더욱 편리하게 사용할 수 있어요!</span>
      </div>
      {/* {deferredPrompt && ( */}
      <button onClick={handleInstallClick}>
        {/* <RiInstallLine /> */}
        다운로드
      </button>
      {/* )} */}
    </PwaInstall>
  );
};

export default InstallApp;
