import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <section id="signup" className="py-12 md:py-24 bg-gradient-to-br from-accent/80 via-primary/80 to-accent/80">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start?</h2>
          <p className="mt-2 mb-8">
            Sign up now to get instant access to the course and our exclusive trading community.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
}
