export interface RegisterProps {
  onNavigateStateComponent: (
    component: "login" | "register" | "verify"
  ) => void;
}
