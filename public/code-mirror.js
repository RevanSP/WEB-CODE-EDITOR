const codeMirrorConfig = {
  lineNumbers: true,
  indentUnit: 4,
  tabSize: 4,
  indentWithTabs: true,
  smartIndent: true,
  theme: "material-darker",
  autoCloseBrackets: true,
  matchBrackets: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
};

const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
  ...codeMirrorConfig,
  mode: "htmlmixed",
});
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css"), {
  ...codeMirrorConfig,
  mode: "css",
});
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
  ...codeMirrorConfig,
  mode: "javascript",
});

function updatePreview() {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;
  const preview =
    document.getElementById("preview").contentDocument ||
    document.getElementById("preview").contentWindow.document;
  preview.open();
  preview.write(html + css + js);
  preview.close();
}

htmlEditor.on("change", updatePreview);
cssEditor.on("change", updatePreview);
jsEditor.on("change", updatePreview);

updatePreview();

function updateEditorSize(editor) {
  editor.setSize("100%", "100%");
}

htmlEditor.on("change", updatePreview);
cssEditor.on("change", updatePreview);
jsEditor.on("change", updatePreview);

window.addEventListener("resize", function () {
  updateEditorSize(htmlEditor);
  updateEditorSize(cssEditor);
  updateEditorSize(jsEditor);
});

updatePreview();