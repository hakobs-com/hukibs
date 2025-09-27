/**
 * Stub implementation for i18n functionality
 * In production, this would be replaced with a proper i18n library
 */

export function useI18n() {
  const t = (key: string, params?: Record<string, any>) => {
    // Simple translation stub that returns the key with optional parameter substitution
    if (params) {
      let result = key;
      Object.entries(params).forEach(([paramKey, value]) => {
        result = result.replace(`{${paramKey}}`, String(value));
      });
      return result;
    }
    return key;
  };

  const locale = {
    value: 'en'
  };

  return {
    t,
    locale
  };
}