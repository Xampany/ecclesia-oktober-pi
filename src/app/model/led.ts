/**
 * Repräsentiert eine einzelne Led (auf dem Pi)
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farbe als gültiger CSS Farbwert
   */
  color: string;
  /**
   * Die "Undurchsichtigkeit" (0..1)
   */
  opacity?: number;
}
