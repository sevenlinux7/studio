export default function Footer() {
  return (
    <footer className="py-6 bg-card border-t">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Trading Course Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
