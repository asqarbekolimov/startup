export interface RegisterProps {
  onNavigateStateComponent: (
    component: "login" | "register" | "verify" | "account-recovery"
  ) => void;
}
