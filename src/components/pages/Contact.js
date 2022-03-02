export default function Contact() {
  return (
    <div className='px-4 py-3'>
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="name" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label className="form-check-label" for="message">Message:</label>
          <input type="textArea" className="form-control" id="message" placeholder='Message' />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}