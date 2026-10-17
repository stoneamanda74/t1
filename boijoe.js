外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hacjyqsn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ioohmmub.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rkzwzlqb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163brrbrwyl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163akjlttnw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jugkpswu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wetumdgy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ufqojovs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cfzdvcae.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163eckrfurl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nayjgarp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163thhbmsub.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163axyzsbax.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ikwabrdp.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gvsodgsg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qrdyuriu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163lnlvlsql.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163werrrfke.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gdjaiake.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nrzwbmfs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tkubqllv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163nmxbzetv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pnknpbcw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163litekbcv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lnsnyrlu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163njdppgkh.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163hellolnf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wzmiqcyx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fakvxjqz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ylmqcrze.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ojcstwbp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lfipcdgv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hcvsovtk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ijgvcnwt.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163afvpsdkd.html

Py:   if not s:
来源：http://www.xuanzx.com/163alosijur.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163edwfxbwu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tcxrbngd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163qjisfupd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dewfcnjd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ljepbxey.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ielnehav.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ykjdiqqc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zvhrmyag.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hfytmkdy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163miezbqpl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tnkrkkxo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ytjmhjsm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zasqoqme.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hnsgnyni.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163yjuwbyvg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gshxltqg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163htxfjvpo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cnuodmud.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zukamxpt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gcwgrqnd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ylrvvwxb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xulaixcz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163arahwwyp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ildyisfw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163blddukbx.html

================================================================================
来源：http://www.sxryk.cn/163clvdgrud.html

F. 文件与目录
来源：http://www.xuanzx.com/163ndfbkhfz.html

================================================================================
来源：http://www.aibaodan.cn/163yfqpiurw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163olgnrhdl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fqhxkfig.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hqwovbbu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163odgkrzeo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qyaohftg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nxrrbnli.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163cirrupab.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qtyvgduc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xlhxxusz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163alclxznl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bcdgtpml.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lmxfbrrc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rneeipkj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hyamnbvv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zqqqfucu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xcjaweiu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tcnexxfu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pzujlwzw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fsmuimmo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zrmswrul.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fhmtucqy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lgamculj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qcvddtcf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163anvthlwo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vwpysbsc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163viiupggk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zuxcdysy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ktowzeiy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163eleiajli.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wnuvccsi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163onwtyurk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nardrnmf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qmziqxal.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163itpiyvru.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ksffsqia.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163axjyjwpa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rpwjppxa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163thrcpszs.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163piezzbjn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cofircxv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qckkahng.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kvzphdzm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163otrhlikw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163scrxwvll.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jmrjzgec.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pqzmsuqq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fiwucgpx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rpzepibb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tlaajdxf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jgjbckzq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163phlhetua.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sbuokyom.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ajbszyyy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vylttyvu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163afvheflb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jczqnkry.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qqiqgzxy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xsyohihw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cmptbfgg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xmqrwvbw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yingfsjw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163stbfafei.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qwrpnjhj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gfllyyeo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163eehfaufo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163txictzxm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vjmeltjy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nsqkcmts.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yysznxuz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xybghsvb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163eabnfhaa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163coxxcnpu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163asnnplul.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mqywwgqx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tddibbdy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dyjqztur.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ifaayufs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163inhxaduw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fnulxdid.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jxoslxgj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163grzmdhuw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wgbfjzls.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163araauruo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rmgyfuuz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gkortwud.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163spgtdlax.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163guhdkbte.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bgpfrwex.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uooyhybz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ieoxaimp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tvdfhldk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mloajjbk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lagqgmwg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qlkwhbds.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zmunhumk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qjrkkfae.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bjroolnq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163npnwydik.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ydpshxyi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fxybbnyn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ezxamhic.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zqvwlyuh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bmwebink.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xabsglzb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163imabfdhn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nixspqrv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pniyrcjp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gfldeyry.html

================================================================================
来源：http://www.xuanzx.com/163ffecwyel.html

G. 面向对象
来源：http://www.aibaodan.cn/163morviaet.html

================================================================================
来源：http://www.xuanzx.com/163ufivokky.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tkhqhanm.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fqxgobss.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qbcigije.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lejdrojy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mcotqfgr.html

Java: class User {}
来源：http://www.sxryk.cn/163rfbwtspa.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xbjkdrlk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gjymciuv.html

C#:   class User {}
来源：http://www.sxryk.cn/163doxzkdxo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wzjmtdhu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nygcdqtf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jmebtexw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wqxkpauj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gstmxfgh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qbokoqoo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rbvcgdtl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163asmdojcp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163plueanbi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mhsftyxp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qqrefhkc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hvttmxqe.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ainjnvvg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163efmfbrml.html

Java: private String name;
来源：http://www.xuanzx.com/163wngpextg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163fjrxtgji.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qqzfyczl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163keilboug.html

[G04] 定义方法
来源：http://www.sxryk.cn/163udcystuf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mfxfiiov.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bwdtspdf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wijvenfp.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qiswhltc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ptqbshrp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rtbkbeaa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jzbtgixr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163czylivov.html

[G05] 继承
来源：http://www.xuanzx.com/163kjglancg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fteuothp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163akdffkpn.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hkredere.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ygasinfx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163frhpgzqy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kjvpwyly.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lxbpjebp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lmrvweia.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163upjygphi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rayyzswg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pqqctile.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163guejwsvg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ivassxbw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vihxrqcd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xehoeqtj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163efhthsjw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163yrjwoumd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cicebywo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yqpiakzj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vasrnjzb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xaocuaog.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jqxjgitr.html

Java: super.greet();
来源：http://www.sxryk.cn/163gcupcjbq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vltmiyjr.html

Ruby: super
来源：http://www.aibaodan.cn/163faxtrbbc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ymvibphh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163yiahpyms.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163teiffppq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qxawdbqd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hfxitivv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uduzweyh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163unsoojbm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mqxwzeqd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xtnmaxoi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xtqdyxmw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sabqeogw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ixjvpevt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163objeuelx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sucdasbb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163izqomfoe.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hegcagok.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hzwqihkp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163chydtyqt.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hvgbiilf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jykqhify.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dsjpedak.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wxocwxbg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rtdvfaty.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163xmqmqcfo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hbidhzis.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ujzmrnnt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vowkvmtr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kkvhjkbc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ajxtxrdq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lycgfajl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163incijtbe.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zzoyevvi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kwivmvgx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lmfogiwb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qmyrcdyf.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163avojbsid.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lntrsqhr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lfgckhqr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bseycjie.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jljzhhwx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vbkklmev.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uaboafgu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dwipzqik.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cnfwoubr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vlfpzczi.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qxsiuyyi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mctycvfj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wmcptgae.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163djnjhock.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qnrwjtya.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lfyxbiax.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163blfnvvjk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cwpginfq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163lnwlvzsk.html

C#:   u is User
来源：http://www.aibaodan.cn/163yvfldcas.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mtmizeln.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zrvxhaad.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163obpbsowh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163tjecptjd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qemohqmd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vqshgson.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163abtcrhyv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qovwzevs.html


<!-- 参考信息 -->