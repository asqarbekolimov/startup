export interface LoginProps {
  onNavigateStateComponent: (
    component: "login" | "register" | "verify" | "account-recovery"
  ) => void;
}
