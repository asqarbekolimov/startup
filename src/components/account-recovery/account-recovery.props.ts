export interface AccountRecoveryProps {
  onNavigateStateComponent: (
    component: "login" | "register" | "verify" | "account-recovery"
  ) => void;
}
