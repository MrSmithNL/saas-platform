/**
 * Public types for this module.
 * Other modules and verticals import these types — keep them stable.
 */

export interface TemplateEntity {
  id: string;
  tenantId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
