const DividerCmp = ({ title }: { title: string }) => (
  <div
    className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-start"
    role="separator"
  >
    <div className="p-divider-content">
      <span className="p-tag" style={{ fontSize: '14px' }}>
        {title}
      </span>
    </div>
  </div>
);

export default DividerCmp;
