const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="h2 mb-4">Page Not Found</h2>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      </main>
    </div>
  );
};

export default NotFound;