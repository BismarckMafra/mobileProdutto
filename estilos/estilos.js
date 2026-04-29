import { StyleSheet } from 'react-native';

const colors = {
  primary: '#6366F1',
  secondary: '#4F46E5',
  accent: '#EC4899',
  success: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  background: '#F9FAFB',
  text: '#1F2937',
  textLight: '#6B7280',
  border: '#E5E7EB',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  // Layout Principal
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  scrollContainer: {
    flexGrow: 2,
    paddingBottom: 80,
  },

  screenWrapper: {
    flex: 2,
    backgroundColor: colors.background,
  },

  // Header
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.white,
    alignItems: 'center',
  },

  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
    alignItems: 'center',
  },

  // Cards
  card: {
    borderRadius: 2,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    backgroundColor: colors.amber,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  cardId: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textLight,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textLight,
    marginTop: 8,
    marginBottom: 4,
  },

  cardValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 12,
  },

  cardActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  // Inputs
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    color: colors.text,
  },

  inputError: {
    borderColor: colors.danger,
  },

  errorText: {
    color: colors.danger,
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
  },

  // Buttons
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    minHeight: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  buttonSecondary: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  buttonSecondaryText: {
    color: colors.primary,
  },

  buttonDanger: {
    backgroundColor: colors.danger,
  },

  buttonSuccess: {
    backgroundColor: colors.success,
  },

  buttonSmall: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 0,
  },

  buttonSmallText: {
    fontSize: 12,
  },

  // Forms
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  formTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },

  // Lists
  listContainer: {
    paddingHorizontal: 0,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  emptyText: {
    fontSize: 16,
    color: colors.textLight,
    fontWeight: '500',
  },

  // Navigation
  navButton: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  navButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  navGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  navCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flex: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  navCardText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },

  // Loading & States
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.textLight,
  },

  // Status badges
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: '600',
  },

  badgeSuccess: {
    backgroundColor: `${colors.success}20`,
    color: colors.success,
  },

  badgeDanger: {
    backgroundColor: `${colors.danger}20`,
    color: colors.danger,
  },

  badgeWarning: {
    backgroundColor: `${colors.warning}20`,
    color: colors.warning,
  },

  // Price
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.success,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },

  // Row layout
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { colors };
export default styles;