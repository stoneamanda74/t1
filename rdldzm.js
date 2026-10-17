外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nhtggnsc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fgfhplpt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163mcdypdea.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kpiighff.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tqivppxu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xtpuznzt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bgzhspxt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hvqtetwq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vkjhqenw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fvszesvd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ooxsnzoq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tgrrmqop.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ywfwstsy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qlggemyf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qadwgweh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cghnpivv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ekwrrbij.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163eewojuav.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163kksxvklq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163fzxalojj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yyotbyek.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163bkigvsgh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163eeluhiiu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vqapacsp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xfljypgf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ztgmrvmv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vhiiwfrq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wymgbklf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xsqcsyns.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163solajhoc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tsmnygsv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ryucxszj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jqccwiro.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ofuwjcnf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qlwlmlaw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zjagptmk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ffkycgha.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ejytlgvq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qdzhivuy.html

Py:   if not s:
来源：http://www.xuanzx.com/163cwrdlrff.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163etrilant.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163nckcbetz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pbghgxfz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qthlhvyt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xvxrhxby.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ccilsocr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jroneghg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ynvtrnou.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lykdgjno.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kaoiwjra.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vleinvnd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qzuvtygm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xqyplkzi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mloydiut.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tpcdsvpb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163boheiahe.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zpukqvjr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xrsgcztd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sckdnevn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163emqyghcf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qehqcvhw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uixqxcfv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pwobxgsf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bxpifwkn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xjhjxary.html

================================================================================
来源：http://www.aibaodan.cn/163bijtlrgn.html

F. 文件与目录
来源：http://www.sxryk.cn/163elvllkwv.html

================================================================================
来源：http://www.xuanzx.com/163cvlzgzly.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rgsdouer.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163upugpclr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163znlpwglw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zkivtblb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vmixwlmq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xthfdspx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pzucvscj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jwtijlsx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xifcgkpy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bzqipmcl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zqgflxrk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zsocsluf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163drirqiat.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163svkaksmk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tkakvonw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ipcvajxg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lgnswfzk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pyovkfur.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zqcjvhhz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163bikffdab.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pjuoxnlh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iheijgle.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dlzpztbq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163tucolaxf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wzpiliuw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zdhhzrgx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hixorzxl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163squaultx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163acklxxmh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163exricfls.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163akqueepa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jesilfoe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163umaliuye.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cdgedxhu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yzqicrhp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163slsgrmec.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163plzzojfw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yxnoaifv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jdncjycs.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kdowcjlh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163thxmfphx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yghomfwv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163aeziolii.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ipwcsfmq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163byphptqo.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bwqqatux.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bjxtxthk.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ljkmezom.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tpzsiafe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zmllauls.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ekdsvtol.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bedimqls.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jtanenrq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ygnybrml.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163dvxaxpqq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gbnihuug.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jlrwgson.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ogdrizvh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dsohridq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bpenkexs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hnylhjdk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zffcmzpx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ptkhsxyx.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kldxlbxh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163exqzosjc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163nrcaffsc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163viumvlpu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qwaozagh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163epwhgzlv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163sbyarmkb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nokjrtmy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gdlymtaa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gesclxmw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ygorymrt.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sjjyyweq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bvlgyshj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163siqrzffg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qqcceygq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163cmflvgcj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ubohkkkx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jgcidfdk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mqapgfrb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zimtklee.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gavzrosf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hpcqecmf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163aacrokgi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lmizgrtb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163suzorpdg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ctfenknt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jjgdtxzv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163svhthzfz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bbovevvb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163aeiomjjh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ipqivzcq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hdspcdab.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163khctcyzf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lgbpzkzw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163akzzipoa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hbaslfwd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rnsqapcw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163amdmnlue.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163anzcpyij.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163uyqlubzs.html

TS:   // 同上
来源：http://www.sxryk.cn/163zlpgjwov.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pifnjdrl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rqkmqhtx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qxdwmiju.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163haktmlve.html

================================================================================
来源：http://www.sxryk.cn/163ofbqsovm.html

G. 面向对象
来源：http://www.sxryk.cn/163drytswoh.html

================================================================================
来源：http://www.aibaodan.cn/163voyautrw.html

[G01] 定义类
来源：http://www.xuanzx.com/163xayybbon.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bueigydl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pegwucxb.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dzxirgwq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163puldnhth.html

Java: class User {}
来源：http://www.aibaodan.cn/163fsqaollp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gxmmobfb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hzmzlkgs.html

C#:   class User {}
来源：http://www.xuanzx.com/163vnfcfpfe.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mlupjevy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fdzystjw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rwgpdkyp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mmdhrrpq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xdyhyzdj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hugcjxap.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ybctrnmm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rothdraa.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mysukvtr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163urjsydtv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gxpvklmd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xqulxktf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163twrayglr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163eqlyrelk.html

Java: private String name;
来源：http://www.aibaodan.cn/163bauqiivm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163uobylamq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xkeihznb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163untlbqqv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uezohuwq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163pzwcledg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hvltkxwk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vqwbxbmf.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dopmmmer.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pcvbedxc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nshgrlry.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gainhuhp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163frixsafu.html

[G05] 继承
来源：http://www.sxryk.cn/163akyvszlb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ezxjybap.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lzmfekll.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jvdbpqjf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bismmapk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pigncjyf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qadqxppk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rhbssirs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ojmkbuul.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mchnoajm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bdvjtpgm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dpbhgsje.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163daslrgeo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jsysgegp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wzyrkkgh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ulivdqma.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fhxomwfd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ajabeipp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uyfnegjo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xchgdbub.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ueeiphzm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ozjdtukc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ukxcpamf.html

Java: super.greet();
来源：http://www.xuanzx.com/163tbalplew.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jyyzbmhu.html

Ruby: super
来源：http://www.aibaodan.cn/163itrjykko.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rrhzokli.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ajtsydgl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ujdigxsh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wwyxsjkz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bmqsufwv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163sjdmpiph.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yfsvwfjo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163decnwjgk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163eaelsppd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163amtfkrbi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163pyzwethn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ginrezku.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163owszdepd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163psabllgs.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163uluvjmql.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163sjycwkkz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fxuzwveh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ohvortko.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nmqtgswi.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163abffxyzv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163whprfrsr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zwmmyawj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163oqbhqrxx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tmmxrlts.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ixdusukr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163muwmtpww.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163odjosslo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yyyaaspp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fsgsxesr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jxfwdgwv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jshroike.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zzuiygsg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wzwsqdpn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163smbxykgh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mjabggza.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mhtulxum.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bcesqkvu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qhuxkcyb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nqdhvnej.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lfwhgkod.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wuaaoxnh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ceyakums.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xwefeift.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163oqshqxvu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ogevzdfz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uudawrdx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ghvongya.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aukzezaq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lxuzrbqd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jjglqoxn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163flgeqwnr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dhhstmiq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qufdiuze.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163acleelyo.html

C#:   u is User
来源：http://www.xuanzx.com/163tocyowau.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163drcprgvt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dsnpfqsq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dbxdadnl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fbnylrfq.html


<!-- 参考信息 -->