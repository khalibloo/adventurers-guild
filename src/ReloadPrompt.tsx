import { Button, notification } from "antd";
import { useRegisterSW } from "virtual:pwa-register/react";

const ReloadPrompt: React.FC = () => {
  const { updateServiceWorker } = useRegisterSW({
    needRefresh() {
      const key = `open${Date.now()}`;
      const btn = (
        <Button
          type="primary"
          onClick={() => {
            notification.close(key);
            updateServiceWorker(true);
          }}
        >
          Refresh
        </Button>
      );
      notification.open({
        message: "New Version Available",
        description: "Reload page to update?",
        btn,
        key,
      });
    },
  });

  return null;
};

export default ReloadPrompt;
