# Path


处理路径相关标准库, 磨平了不同系统的不同；require('path');


## 常用

- path.resolve, path.resolve([from ...], to), from 类似于 cd 命令

- path.basename(p[, ext])# Return the last portion of a path. Similar to the Unix basename command.

- path.dirname: Return the directory name of a path. Similar to the Unix dirname command.

- path.extname(p): Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string. Examples: 最后一个「.」+ext, ext 可为空

- path.normalize Normalize a string path, taking care of '..' and '.' parts.

- path.parse(pathString) Returns an object from a path string.

- path.sep The platform-specific file separator. '\\' or '/'.







