export interface CredentialItem {
  organization: string;
  description: string;
  status: 'confirmed' | 'stated' | 'pending';
  icon: string;
}

export const institutionalCredentials: CredentialItem[] = [
  {
    organization: 'Information & Public Relations (I&PR) Department, Government of Odisha',
    description:
      'The company profile states recognition / empanelment in connection with government advertisements and hoarding display across Odisha.',
    status: 'pending',
    icon: 'Landmark',
  },
  {
    organization: 'State Bank of India (SBI)',
    description:
      'Branch facade and ATM branding across Odisha.',
    status: 'confirmed',
    icon: 'Building2',
  },
  {
    organization: 'Odisha Grameen Bank',
    description:
      '3MM sunboard with high-quality eco-solvent vinyl branding.',
    status: 'confirmed',
    icon: 'Building2',
  },
  {
    organization: 'Canara Bank',
    description:
      'Branch and ATM branding across Odisha.',
    status: 'confirmed',
    icon: 'Building2',
  },
];

export const statutoryCompliance = [
  { label: 'GST Registration', icon: 'Receipt' },
  { label: 'MSME / Udyam', icon: 'Factory' },
  { label: 'PAN', icon: 'CreditCard' },
  { label: 'Trade License', icon: 'FileText' },
  { label: 'Shop & Establishment Act', icon: 'Store' },
  { label: 'EPF / ESI Registration', icon: 'Users' },
  { label: 'Income Tax Returns (Last 3 Years)', icon: 'FileCheck' },
  { label: 'Valid Municipal Hoarding Permissions', icon: 'MapPin' },
];

export const statusLabels: Record<CredentialItem['status'], string> = {
  confirmed: 'Confirmed Engagement',
  stated: 'Stated in Profile',
  pending: 'Empanelled / Applied',
};
