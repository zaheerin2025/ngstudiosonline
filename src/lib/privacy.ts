import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const privacyDirectory = path.join(process.cwd(), 'content', 'privacy');

export function getPrivacySlugs() {
  if (!fs.existsSync(privacyDirectory)) {
    return [];
  }
  return fs.readdirSync(privacyDirectory);
}

export function getPrivacyBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(privacyDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPrivacies() {
  const slugs = getPrivacySlugs();
  const privacies = slugs
    .map((slug) => getPrivacyBySlug(slug))
    .filter((privacy) => privacy !== null)
    .sort((post1, post2) => (post1!.meta.date > post2!.meta.date ? -1 : 1));
  return privacies;
}
