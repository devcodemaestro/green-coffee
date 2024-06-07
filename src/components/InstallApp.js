import React, { useEffect, useState } from "react";
import { PwaInstall } from "../styles/ui/InstallAppStyle";
import PwaModal from "./modals/PwaModal";

const InstallApp = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [installResult, setInstallResult] = useState("");

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
          setInstallResult("앱이 설치 되었습니다!");
        } else {
          setInstallResult("언제든 앱을 설치해주세요!");
        }

        setModalOpen(true);
        setDeferredPrompt(null);
      });
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <PwaInstall>
      {deferredPrompt && (
        <>
          <div>
            <span>설치하시면 더욱 편리하게 이용할 수 있어요!</span>
          </div>
          <button onClick={handleInstallClick}>앱 다운로드!</button>
        </>
      )}
      {modalOpen && (
        <PwaModal open={modalOpen} onConfirm={handleModalClose}>
          <span>{installResult}</span>
        </PwaModal>
      )}
    </PwaInstall>
  );
};

export default InstallApp;
