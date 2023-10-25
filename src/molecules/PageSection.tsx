type Props = {
  children: React.ReactNode
}
function PageSection({ children }:Props) {
  return (
    <section className="border-b border-slate-300 w-full px-4 py-11 gap-3">
      {children}
    </section>
  );
}

export default PageSection;
