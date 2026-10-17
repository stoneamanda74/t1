外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hlyofphp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uszeyiri.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qdvfnxub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tkugtvdt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163feemfwrk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163hdrdjvhq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rbgieslt.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163munwnqgw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jlajuujt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nnllddex.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qaupowvb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163pcejeyqg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163aojpjwgz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gjafxnqu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163lvvffktf.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163szanrocn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163udxllwjs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163medfrgjo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mxxofplr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ifyaxyoj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ehoowjkh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vpcswdly.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lgrhlnyv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zlliowkq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mhmvybxh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kqqhnuyw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163usopzzau.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163idtmotdf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kghcbyjr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163phoobome.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ytyezdnb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mkbzgupe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sdsjzlzr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163upnangws.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163sktcmszs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ouflxrkj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ftmhutlr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vwqlvcbz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xkebmxxf.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163htykweum.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163yhwfgvhi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uvxpqufb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163deescfpf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163gqevgylc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nduwsxhy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hfthejgy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wybyiwcf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163awraoipb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dainaghk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ldwsspzn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ejkpttmo.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163izxunebp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163myfohaiu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lngxazjs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ybidzafq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vxdhjmdn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ucqysici.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163akxaihss.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kqysogxp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163yncxqycn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zcqnbnlk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qcpcoxee.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xacroebx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qktavvbt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rxgktioc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yamphpgf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163nzagaici.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rngzsvpp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wpcsqlfl.html

================================================================================
来源：http://www.xuanzx.com/163sruiajkw.html

F. 文件与目录
来源：http://www.sxryk.cn/163yyxnicby.html

================================================================================
来源：http://www.xuanzx.com/163kedybaux.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xdvrccig.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pojdpoyf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vckahynp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xjhckvnh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163thizntpn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lynxuajn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163yhtefsfc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zmezbzuf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pzckdpct.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sbcfwmux.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mpsqibad.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vzqjkooc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cbtfuxap.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qrmtjxtb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163txbfomkz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rhcmvbqi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nkrvshvv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163aeymtivm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ggmjznsn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gvlyeicv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lzkcklbe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vccstgvo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gzawojhj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wfbyatci.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bfflykkz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163brudsufq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163irwlsept.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vvyfiyzx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163aymxhgay.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hgwxivck.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lliigsgz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sqqrttak.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yqfjbqve.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163nwzlyuhg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cmmajuaq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gzqqjsby.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yjiajqzz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163qmvofwow.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163frbcadpl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dxuittdl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ummsetbt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pyodyvpd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hpvvxsen.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163quuqgpdr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xuicagcg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kekxwnbt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wmhsxlyx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163aoahhgqn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zdfgjtyx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sisqetem.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lcldnglu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vfgndwsr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bmwmecnp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ageymlep.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zgqdkasc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cdtkeqos.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163miymrodl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kcfchlae.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tnouhfax.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163grzqndyy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dqitdzpw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163urwcwkta.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qflumcxb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pkgshlka.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lgmoimxq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163seporjtr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zpttbzxb.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zwuykzoj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163addxzhcc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ihxdubfh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sohhwbin.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zqkerpno.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yjqoybwo.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jrujuavb.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lpkizgci.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163btuqtiho.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wlgeurjt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hnffqkth.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163angmbthx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aifjxowf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hvmlfwbb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163megleaor.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xhpibutg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163etjvclil.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163poeyatjj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163plyrvlwo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pninbfrq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163asfvknkx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hiqyimus.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163aagstvxb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zkordpyt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kvdgkndq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cayvcykw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oeqdosmo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hyevmecu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mgnrcfml.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vmjmemwl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ctdyvhbf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163iphfgjdz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gtnqiezk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nqwqqmyd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163adsnkbbj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bknomckm.html

TS:   // 同上
来源：http://www.xuanzx.com/163tpsiyqig.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bzlvouyb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163aychmrqt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fvhthunm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163bicbnmqw.html

================================================================================
来源：http://www.sxryk.cn/163hdbzepez.html

G. 面向对象
来源：http://www.xuanzx.com/163dglmlyeh.html

================================================================================
来源：http://www.xuanzx.com/163lcgnwuyc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cpltwmqu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pikhmddo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163sywpicvx.html

JS:   class User {}
来源：http://www.sxryk.cn/163aiuxumwe.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ajpdgwyd.html

Java: class User {}
来源：http://www.xuanzx.com/163vivefmng.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ocoyjzne.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ncydrknw.html

C#:   class User {}
来源：http://www.xuanzx.com/163cfhpziuo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qyibmomv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ivziwuqe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jhziyowj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kfstnhrg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gqipnhxb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vlbmtqyx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xgnridzc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xpjevtcb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ieuhgcmn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pyajeere.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zmdxbunp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rcuxvsrw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ovivlhrt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vngsawrf.html

Java: private String name;
来源：http://www.aibaodan.cn/163lksymtoo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ajmosxlx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xzmkkmey.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rnnwwwjl.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dbjgezel.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zqinalui.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tpjytfvf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gdihceyy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163bgcrtcyg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163asystylm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163twyokfzt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kyocvrzs.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163msqhhstx.html

[G05] 继承
来源：http://www.aibaodan.cn/163ysbxmyua.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jmvoerqp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ruyiykst.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nbtrafod.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ziaottai.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wvzfhivy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pgydytrw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163clgtbtjy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lcuguwim.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uaohbbpj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163noucxuty.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nimpckgl.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mgzqbfzt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bjvpdnlv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nywullsd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uamkpenu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yjzsbekb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nguyjkha.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wuwluzsx.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pqwvetqm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163govjkytp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mztpmojn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zyqrcdkt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ardgseby.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163iakoykwq.html

Ruby: super
来源：http://www.sxryk.cn/163riouqmid.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163aeossstz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zfyrlclq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tnobcluf.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lfjepueb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163euuzipmy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ajpktgah.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kcvhzdba.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dqyglzfb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kaoxguwt.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vtiruqxc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zzlsjvuj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163txqbhwot.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gamfabxq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163rrjznyuk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jfasswjl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163sjmubkag.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163oabghyml.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fsbddvxa.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mzfjqopu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vnzddbdf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bggziiul.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163aebozjuj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163omphjsmu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163yqdbflqm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ggwxljab.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163bwktdbox.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lpxpchnj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wapuattx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163esyeabla.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wbjqhpwr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wvoebfxs.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dothdnbv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oshjrzcq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ccifgtex.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zakrtqya.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fzwochhr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dutkdmbk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163imkdhbzv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vxbpjxwx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yzobtnor.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dnhzwzxc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gnuupbwi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fcizysev.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163egkywhsl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jvvbdqwr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ugxelkdz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163awtlalpp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yhekzukk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yusyodcr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163powbuajv.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163zipaeofo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lrhhioli.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dufeytmc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rugmgtka.html

C#:   u is User
来源：http://www.xuanzx.com/163kpfhbbhx.html


<!-- 参考信息 -->