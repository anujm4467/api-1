export enum UserRole {
  SUDO = 1,
  ADMIN = 2,
  MANAGER = 3,
  MEMBER = 4,
  BASIC = 5
}

export enum EventType {
  USER_CREATED = "user.created",
  USER_UPDATED = "user.updated",
  USER_DELETED = "user.deleted",
  AUTH_LOGIN = "auth.login",
  AUTH_LOGIN_BACKUP_CODE = "auth.login_backupCode",
  AUTH_LOGIN_GOOGLE = "auth.login_google",
  AUTH_PASSWORD_CHANGED = "auth.password_changed",
  ORGANIZATION_CREATED = "organization.created",
  ORGANIZATION_UPDATED = "organization.updated",
  ORGANIZATION_DELETED = "organization.deleted",
  EMAIL_CREATED = "email.created",
  EMAIL_UPDATED = "email.updated",
  EMAIL_DELETED = "email.deleted",
  EMAIL_VERIFIED = "email.verified"
}

export enum ErrorCode {
  MISSING_TOKEN = "422/missing-token",
  INVALID_TOKEN = "401/invalid-token",
  DEFAULT = "500/server-error"
}
