import React from 'react';


function FileTree({ children }) {
  return (
    <ul className="file-tree">
      {children}
    </ul>
  );
}

FileTree.Folder = function FileTreeFolder({ name, children }) {
  return (
    <li>
      <span className="file-tree-folder-name">{name}/</span>
      {children && <ul>{children}</ul>}
    </li>
  );
};

FileTree.File = function FileTreeFile({ name, comment }) {  // Add comment prop
  return (
    <li>
      <span className="file-tree-file-name">{name}</span>
      {comment && <span className="file-tree-comment"> // Add comment display
        {comment}
      </span>}
    </li>
  );
};

export default FileTree;