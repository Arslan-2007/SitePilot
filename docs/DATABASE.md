# SitePilot Database Design

**Version:** 1.0
**Status:** Locked (MVP)
**Database:** PostgreSQL (Supabase)
**Last Updated:** July 2026

---

# 1. Database Philosophy

The database should be:

- Secure
- Scalable
- Normalized
- Easy to maintain
- Easy to extend

Every table should have:

- UUID primary key
- created_at
- updated_at

---

# 2. Core Entities

The MVP consists of these entities:

Users
↓

Websites
↓

Audits
↓

Audit Results
↓

AI Recommendations
↓

Subscriptions

---

# 3. Entity Relationship

User

↓

owns

↓

Website

↓

has many

↓

Audits

↓

contains

↓

Audit Results

↓

contains

↓

AI Recommendations

---

# 4. Users Table

Purpose

Store account information.

Fields

id

email

full_name

avatar_url

plan

created_at

updated_at

---

# 5. Websites Table

Purpose

Store websites added by users.

Fields

id

user_id

name

domain

favicon_url

created_at

updated_at

Relationship

One User

↓

Many Websites

---

# 6. Audits Table

Purpose

Store every website scan.

Fields

id

website_id

status

overall_score

seo_score

performance_score

accessibility_score

security_score

ux_score

started_at

completed_at

created_at

---

# 7. Audit Results Table

Purpose

Store every detected issue.

Fields

id

audit_id

category

severity

title

description

impact

recommendation

estimated_fix_time

documentation_url

created_at

---

# 8. AI Recommendations Table

Purpose

Store AI-generated fixes.

Fields

id

audit_result_id

summary

explanation

generated_code

language

confidence_score

created_at

---

# 9. Subscription Table

Purpose

Store billing information.

Fields

id

user_id

plan

status

stripe_customer_id

stripe_subscription_id

renewal_date

created_at

---

# 10. Audit Categories

SEO

Performance

Accessibility

Security

UX

---

# 11. Severity Levels

Critical

High

Medium

Low

Info

---

# 12. User Plans

Free

Pro

Future

Business

Agency

Enterprise

---

# 13. Relationships

User

1 → Many Websites

Website

1 → Many Audits

Audit

1 → Many Audit Results

Audit Result

1 → Many AI Recommendations

User

1 → 1 Subscription

---

# 14. Row Level Security

Every query must return only the authenticated user's data.

Users must never access another user's:

Websites

Audits

Reports

Settings

Billing

---

# 15. Soft Delete Strategy

The MVP will use hard deletes.

Future versions may introduce:

deleted_at

for recovery.

---

# 16. Indexing Strategy

Indexes should exist for:

user_id

website_id

audit_id

category

status

created_at

---

# 17. Future Tables

Audit Templates

Scheduled Audits

Notifications

API Keys

Teams

Invitations

Organization

Usage Analytics

Activity Logs

Integrations

---

# 18. Database Principles

Never duplicate data.

Prefer relationships.

Keep schema simple.

Avoid premature optimization.

Design for growth.