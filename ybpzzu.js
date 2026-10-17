外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163sgnvziqp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zmjiuysp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163eyqpaykb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163hlcaslgd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bckfefjv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pkckwruq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qodyblds.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163uqwjzxhf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hjycdjmc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ktwbjwba.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tvyefgpv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wallcgpo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qywumeta.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eiksozgj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rygwiryy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pgnfvekp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163clxynuxv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yppgqobe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163coswzeve.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jlginfta.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163yshqqres.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fiuwcaqo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163uhngjpwn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pvnoikxl.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fobqquqp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163umjrnpyd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jcirzldq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ymmxheax.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lynubxmt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163sjppotkq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wchxruyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vmtomfja.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jsonxoal.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163plfgtadt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xulbderr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lacpiies.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163asvsgmyv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163unmakmff.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163yvrvymut.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163onypesvo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ckkhpkzq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163etornhir.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163eihsmnyq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163odeiypmn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mhnjvwqx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zkmnlbrj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163wclgliyk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mcbjlzkl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bibrkhje.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ocyiqmxw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dvdsdgzt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vfubkkmc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nofrazzk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xdajnxtu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wlwvebek.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163luxgdgwg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qdufdgru.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pnfnrbhu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163dauzhkyt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ifqjemwm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qrheggyw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163groihpdz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zsvghpmt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tnddclvc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ndchqiwt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163knophhyu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163eoevxipy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ymydrwvy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ruakaxmj.html

================================================================================
来源：http://www.xuanzx.com/163kjtygjkz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163boolpgdm.html

================================================================================
来源：http://www.aibaodan.cn/163dkehokrn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163swxdssio.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163lvldygjq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hjhwvddb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tymqxvyx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iigrqsir.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163acdvydrx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pficyksb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163orllbkbq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163eoqkcjel.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jfxyaxrz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cebaktlt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163eimfvpke.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vmfwvocd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bzaqgman.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163huexwcvm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163auzftmbi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hbczauyk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dnqfgsfj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mmognpzi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zrdbnqad.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dcjibume.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kajhhqzh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ikjcpcnk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mxzadvzc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zshmavsm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fxqserzx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xdhtpxgv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qnxnvton.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vxdkfxnz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163icxycaca.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jrqtwkur.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qjywycoc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163eyfrtyhe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163blbkprnr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163krhdkqwn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lwcuplsv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fcmigqcs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rzceukyr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ryehojct.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fmqnzjuv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163krgoblmt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iekeenvm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lidxjyze.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kmtpouyl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dxqmozsz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cjxuwvwe.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ufnvmoiv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ywtzokef.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cxyseemz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yvnetgbo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ocqfyhsm.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ketljcer.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163sskwzfzr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xaigphgl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163udouxiki.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163sybkpurq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dfrondqq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163osilbxvb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163twflkwdp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gsdswkzy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gucmyael.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tmkmkbzg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pcvtfcov.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163cgyujywf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yfsmehwr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163muhgyblu.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163abaqcpvh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vshxbyrz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ljxrlkmo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163gguvfshy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lpamkdxg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tgwaojou.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163sccgqshj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wntjdocn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ahgwrcah.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dlmjbcms.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xdlslrno.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qfansess.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gycdnwlo.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gwesrdig.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wlgephhx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163baaaizju.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sibljofx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jtvvcqfn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kchnltom.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163eithxojw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163stmlnykh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zcdzieag.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dscqvvks.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163espulqmq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rpfhzdur.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ydqeugzv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mnxvqaqg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xdsqgquw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163usaryxyf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163shwqraaa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pdhtjgti.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163givupshk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qstxcyzf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163zktqcnpk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hcdagobc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kbecuild.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uwovgayd.html

TS:   // 同上
来源：http://www.xuanzx.com/163eqkospyz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wxxlpjbt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zjdxsifv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dvcwwunx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uuwwvixu.html

================================================================================
来源：http://www.sxryk.cn/163qqrfgysn.html

G. 面向对象
来源：http://www.xuanzx.com/163oqwunbtw.html

================================================================================
来源：http://www.xuanzx.com/163esclnhfq.html

[G01] 定义类
来源：http://www.sxryk.cn/163ewbtgbxg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163irmzfiya.html

PHP:  class User {}
来源：http://www.sxryk.cn/163prbmwryu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uscwbemu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ipjlyfpu.html

Java: class User {}
来源：http://www.xuanzx.com/163vhzscgao.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163krofarrr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fjdfoqzd.html

C#:   class User {}
来源：http://www.xuanzx.com/163zdbzqmqp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kmwpnnpg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mupjbkgq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jplotxfw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163trkikrbj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163mrjigunb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163aompvaeh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mmgbwnrn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nyoepqeb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163voaxobdk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163iwunujgp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qjqndbhq.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ljblktgi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163djphxvtp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tsxrqapx.html

Java: private String name;
来源：http://www.xuanzx.com/163bfsjliwl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xixyhurl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qzxmygwg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rmfuulqv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qzpsnffg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xxhohflw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163apaacnog.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163febaoacg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163esmxhzib.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mvcqflfs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rittphfc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163doojarxi.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163soxxmalh.html

[G05] 继承
来源：http://www.sxryk.cn/163wlohfjgl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163avnqgnml.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vtgnfuxr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163viroacfe.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163terehbhi.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163leoswele.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hxwzvlxf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ppfzdmby.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hmppjczl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hbcdpkss.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163hhsukmoe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bbutipvm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gwreggvs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dzislezb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jhgisntc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hljnltrl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fbvxiskm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ijmgklhy.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163odobdvyg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163fawotapg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vjkonoyb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163masjitcb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163mjudcxsz.html

Java: super.greet();
来源：http://www.xuanzx.com/163hljdoqdi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yyqdhrtf.html

Ruby: super
来源：http://www.xuanzx.com/163ysbwbcwn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nnlihamr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163oilylyio.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oimtuuro.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163inqlsxou.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jkuugsbx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nzyocjyk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kacytjuk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jhntqwum.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163gbrvnlcz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nvnusoid.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zxnmsait.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qmxgqooe.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163aegceejl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wawjinbm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xvksfkhm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163suxpfzmt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ogjykrer.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fdwxixda.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163aeljbpot.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qgtlexag.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jbikjlrg.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bcbqrzps.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163chedzevt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qcbmgnzl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163plnugrsi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163moskpoez.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jkhmymbc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jgpwaytj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163sxfrylvz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ndnqzgvi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jbezaarv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wjndydtq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163yjzqcvvu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xbetjqli.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pkyrynsh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jnradrjn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163aofhurjb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wyknsorg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bezytmnr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fbujiiwg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163teipwctk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fenskhca.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163frflvpsx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gtcisohh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aempqdmo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163efbcdcta.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kivqpgth.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jwcuoijm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rqkrweer.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ftpxdzwh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sbwbsfoj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163smnyyezx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eprtjtjj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hagjdlco.html

C#:   u is User
来源：http://www.xuanzx.com/163mhxanyru.html


<!-- 参考信息 -->