import { getPrivacyBySlug, getAllPrivacies } from '@/lib/privacy';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { Box, Container, Typography } from '@mui/material';

export async function generateStaticParams() {
  const privacies = getAllPrivacies();
  return privacies.map((privacy) => ({
    slug: privacy!.slug,
  }));
}

export default async function PrivacyPage({ params }: { params: { slug: string } }) {
  // await params in nextjs 15
  const { slug } = await Promise.resolve(params);
  
  const privacy = getPrivacyBySlug(slug);

  if (!privacy) {
    return notFound();
  }

  const contentHtml = await marked(privacy.content);

  return (
    <Box sx={{ py: { xs: 12, md: 20 }, position: 'relative', bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 4,
          background: 'linear-gradient(135deg, #F1F5F9, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {privacy.meta.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
          Last updated: {privacy.meta.date}
        </Typography>
        <Box 
          sx={{ 
            color: 'text.primary',
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              color: 'primary.light',
              mt: 4,
              mb: 2,
            },
            '& p': {
              mb: 2,
              lineHeight: 1.8,
              color: 'text.secondary',
            },
            '& ul, & ol': {
              mb: 2,
              pl: 3,
              color: 'text.secondary',
              '& li': {
                mb: 1,
              }
            },
            '& a': {
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              }
            }
          }}
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </Container>
    </Box>
  );
}
