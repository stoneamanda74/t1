外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jnssrtkb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hxbseaow.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jtfrrscn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tkzsvgjd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nxffhetr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163sktswmoi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ckkkvqfa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163frwvdcki.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eyrwlgbn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hxlytqti.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wekdzbxl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xdygkcut.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jemxznpe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tndfeoga.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dsnfzpfz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163orvimcpy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mbqpyzgs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cnwnxndz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kfyzgwjl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163naswjxuk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tzkzhxrm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ebiawcng.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lblonhlo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xfgeioah.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163cvqckvam.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tlnkqmuh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ytiyrfir.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bkewhuvg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163aowswzky.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163voaiitza.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163djhofzgt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rljxbcxk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163gphpyvbh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pzvafdcc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cvayberf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xphelnwd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lcsprsvj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163huejjavn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163abisoiqf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yahfehkj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163anubdwhq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mxrdgsna.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gqqucmgz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ledpvbkv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vrevrmjw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cjipjzud.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yldofitr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dzrlrydv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163illadqrx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hxipotzo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hfhflchn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gphxpixf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163feycldnv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zgouwekt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cnkhheah.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rqibvswn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nsasiexh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kcygshdk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wfqrumce.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gqkkwiyh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163lubcxoah.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zqfgczmg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163egqnjdzq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ckwythzg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pbkgxuvw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ywtfkmmb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zkvcbgzp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163knzpqmoi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163itzjfxmw.html

================================================================================
来源：http://www.xuanzx.com/163wpdmblcb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163akulsuqy.html

================================================================================
来源：http://www.aibaodan.cn/163vopbyklw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163koppyazh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163diquziwf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mnyhdvkd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fyxsfwia.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ngjpfwhl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xpyhrlte.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ehgcbgee.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bemflnuw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ttxndayj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pihvxbht.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jjwdblar.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cgqyruyu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163igemjlix.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yxuniqqy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kdpwzwqs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mwwdalaq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cmhwuwrx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163blknwqai.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wgmkcwgk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163avuttzkn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dveuguey.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wapyqwqj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tpwuurok.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163odzhccqg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kzgcqiyo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163osiylmpq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gsbenzqw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pnldnlqj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163tntyuiik.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hubwoevv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wsoaeehp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oygyhfnf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163aiwkpfmj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xhmjfokk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163finvuavj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kouvqykg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tjttcxcx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qgpxhjgg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ytzltfmu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jlnzbnoe.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gipisvtl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dltkfdzu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qkxfqemq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163eufzucxb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ucqtslck.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mkykcdfo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yyeswerm.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zvugryvr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oqrwmaus.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uryinzba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qxdifxjg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pwlrntfe.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mzeylbqs.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nyjzlphr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ccgmrbyi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fmbweqmn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ptzwwdhl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bzcbdops.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mvlysevt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rqhthsbk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hifnspac.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ktdafbsc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163joosmoec.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dmpqvgsv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163etxtwzrj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163japsodhv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ayzfzjun.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ujclagam.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gbceqbvu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163runttqlh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163soqvjqpc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wzletfia.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163uwzxngca.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dcgeznar.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jyrsedae.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163icbkneaf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163aqldmuwo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pfcyrbqe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ubnjihjd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wgbdqzbx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xbvkwwtx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163klhpujrt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sxabbfnp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163roxoohlf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wtirsbgn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jkdxsxyb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kikddktu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hqlvubnr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163smbkujpl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163aernulem.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ufdiqhrl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aitrjrml.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mgpjgbwf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cqzinnmp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163imvkfglu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jqpocwjp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qxvkwqam.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163siqohrcq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rjdbkcxo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ehexhlar.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163wvqyfolt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ibbzishu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163puatpoky.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eezmlggr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fyzsmljx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163cvsnzzag.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163blxsjsbo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nieyabcy.html

================================================================================
来源：http://www.xuanzx.com/163hrxbzdkp.html

G. 面向对象
来源：http://www.sxryk.cn/163yohuroad.html

================================================================================
来源：http://www.sxryk.cn/163orwrpltv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wwbqtvtk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nyxddsnt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lqcxjtwz.html

JS:   class User {}
来源：http://www.sxryk.cn/163ddnjmmll.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fovljzbz.html

Java: class User {}
来源：http://www.aibaodan.cn/163jqdkmvcl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hluzfwie.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xsepywbt.html

C#:   class User {}
来源：http://www.xuanzx.com/163qtaoyhty.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163pkhjhguo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rcrjnefz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bvofazkf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hrhjhcgt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hvpnyzwf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pfcarhgk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163atetfeoj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zmbuzxgs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163isvjyfbm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ehkuvslv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jwabhuho.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kwkvbosh.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ghcwpmxy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lscskjzy.html

Java: private String name;
来源：http://www.xuanzx.com/163bvsqsbwn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qgsccrea.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163knikfyjy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rbdxpult.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uoauojkj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ngdtafbb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163frbvqhkh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163glutvygg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vgaendoh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cntdjnjs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163orsjuuue.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163rbiqilfk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kfgphjyx.html

[G05] 继承
来源：http://www.sxryk.cn/163yiabbudu.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mufzmoyj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163wsjuxisd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gnudstoo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hdkzlhog.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mlalfoln.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jnkgjvca.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wyozuvnu.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cldqftqr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cirnzayx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163omekebba.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163covyupxk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jcotjmho.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rapyfwlz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rgkvksto.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163urmczifa.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163znecrlal.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ytnoqwkm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zmuezcrz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163aexxvdyg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vplbpbmg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qhuzccuo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vodgupaz.html

Java: super.greet();
来源：http://www.sxryk.cn/163gbnwsuck.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163sciuiazz.html

Ruby: super
来源：http://www.sxryk.cn/163evkeewgv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163llozbdax.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163eggtkcsq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dwwcyrgg.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163pzuilqjm.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xbjotfxm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rfxplgds.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jcwfvqpq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wzsvstjd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rqeplqss.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163llsmzqzs.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ylfprpey.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163zbppiump.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wndwpssh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zacrbqgw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163obgvtuoq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jenarxit.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ecywzaur.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zeiebbkh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ozormgwg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lyegxoqb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gpycafit.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fbkorqtq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zrtzraon.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gkcloatj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163heyshppa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cgiolrox.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jrtmmyic.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xmdoxlnt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lifbuqwp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163rxgqkclg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aukgaxvu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hnymgnui.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bmmbiduo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vfxzdtbp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nqrpugzg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tvqtxfle.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ylntgold.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mxttjzjx.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ocpthvpw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kwrzwuyj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163keopiczj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163oljzbjur.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pfcnselr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yoierbtd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yqukonky.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163uzdyvmzr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zhifoyub.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jtuzosvp.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163kenwzsak.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163wbtebnov.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vajxpvbb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163uerxqfsb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163puettgqy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gqybaxoh.html

C#:   u is User
来源：http://www.aibaodan.cn/163xqipslmu.html


<!-- 参考信息 -->