export default function ImageCard({ img, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={img.urls.small} alt={img.alt_description} />
    </div>
  );
}
