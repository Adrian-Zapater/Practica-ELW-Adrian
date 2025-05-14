export interface StatisticsValue {
  sessionId: String;
  userId: String;
  llocEvent: String;
  tipusEvent: 'visita' | 'click';
  createdAt: Date;
}
