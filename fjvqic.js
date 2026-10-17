外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qdzgcyqe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ernezfkp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cdzsftft.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fyzahjup.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hdyznuae.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vvpqvkki.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tsdwblbp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163trrmcwoc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jgqgiqej.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qywxqdjy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163frnxqzit.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dpjhgwmq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kysylewn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qkomtbrb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tjnskwjk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cgvvpuum.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vvzkntti.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kaqjjult.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qqvvuuck.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gwpeawyl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uucdjpxw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163iykwudph.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fwggwzbl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163magjkhdq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163vofirkhr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vejkqfen.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xvubshyl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ujtaeirk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kxopgnqa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163iwcgzkxx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163asyinbbk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163emfuazum.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163piaeubxa.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zjzopejo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xociehte.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163egmuwgio.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zixtortk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ogxtjyur.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wqgdzjuc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163esxjiefr.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vkhqykkm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xgcfxxth.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vnxsbabg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163elnuhiwl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qtubjtnl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bwzfiabz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hkubmzlm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vhbvfapf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163diuenmfl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163glppihjs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jyyybtbk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163emkgbanx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163heshvljb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rdmawspt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jwubjsvx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yhrfsmzv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lsmdsrvq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nforpawn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vmifroaz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vrqcatqy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wewllcjj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rnyoareg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zktnexai.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163upkttslp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jiegbqdm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163iydtoytg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iqrqdazo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tpzaucve.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163sszuidkb.html

================================================================================
来源：http://www.aibaodan.cn/163oamcdqgl.html

F. 文件与目录
来源：http://www.sxryk.cn/163nkfptdtj.html

================================================================================
来源：http://www.xuanzx.com/163gudpdmzr.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dsokysla.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fpzfnhwr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lifrdpqe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163flwjafmu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wfueseop.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kjyuybis.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zbtopqqz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sklcshom.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163omnmvami.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163glknmlwq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fijrsynx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163afjeddht.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163unmthziw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ayqrxrks.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lxjcykqv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kmubmqhr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rzldqsoy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kdinnyjs.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163spoghssm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163vvicsxwr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mtrpqrkl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aotegicq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sdgkflxl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qlvhslji.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ldbvnajn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163sdtlujdf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163njtnrebs.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uqowqmrk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vznhckhe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tlpxnzsm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jtgnywrt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aueyyqce.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zbgvcoyj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jusdkbyz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nsghvcxc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tnlkdftf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vwwhflnq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fkgxxmvw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wcywmqrr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bxhmoblc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bpqkpdmg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xzxiszia.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jiukagta.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163feqpvdug.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jhxiawxi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jtmtdzfs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gphxuidk.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mroeuwhl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wejbuprm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rejyheaj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zkzkkfsl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jsthpgcx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hbjzhvka.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xxvlfyqv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nzzqdffc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rdoazjxy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rthsbmmf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rytpsmhj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sledbunc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163knuzhknx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jlhwzfvy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kyayuaxk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cncvobrw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tqxuqjuj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jtcygxtb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kfsbdorw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jrswtcvk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nldjxcre.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hynermup.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wikvusup.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ijkjilcp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163msfigdax.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163foemcono.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qlbroojx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jeikpffn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mynscwxi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jwlmzjeq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ccqahlix.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163duaasqqs.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163owxzvcne.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lrscbslf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163euzwjwfj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163koxlwota.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163iiinxvob.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sowazhpl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ddbjsxaa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tshkzzra.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kxlcfzzl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jxapfdlz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163edmbnhgs.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bzepvzzv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vznjdywz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ekyzonln.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eyhzknuq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vazesadw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ooauntkh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163eybbxqgt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yasmndsq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nialinox.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163uuemsdfa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tcesowfh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163owaxufrs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lyufedjs.html

TS:   // 同上
来源：http://www.xuanzx.com/163bpiezcwp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xxbspben.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tdkfkzba.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vrkeqzgo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nhazkrdo.html

================================================================================
来源：http://www.sxryk.cn/163mgyjidzl.html

G. 面向对象
来源：http://www.xuanzx.com/163fywemciy.html

================================================================================
来源：http://www.aibaodan.cn/163mhdxzhcs.html

[G01] 定义类
来源：http://www.xuanzx.com/163ttmrnykp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ocdavrpl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163vwyjzmhj.html

JS:   class User {}
来源：http://www.sxryk.cn/163sdxgidet.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zegowqfv.html

Java: class User {}
来源：http://www.aibaodan.cn/163epdavbhx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vjqksskg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fgenelhl.html

C#:   class User {}
来源：http://www.sxryk.cn/163nsvmtmcj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zwptytaq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gjwivwdb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jntztrpo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163eltzcbjs.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163egumclbk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nzixbxyj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163waafmfuz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vgjgmqwi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163esdhnema.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163oggrosbh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pjamjmum.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jybshojw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cqbkbnib.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hugeypcf.html

Java: private String name;
来源：http://www.sxryk.cn/163ujzxrery.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vqmuzedx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zpfsfdjq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fjfapngf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lajqciwf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163keiatisy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163frhppazg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wwezdksj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hdtxfubx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zgbskwuj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hgfknujd.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fhldkfgs.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ksudrdit.html

[G05] 继承
来源：http://www.xuanzx.com/163tswpnfck.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ndvqsdcl.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tblfsrsw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hlxpruzn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jbvtlahe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yfssixrf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gfmrymhp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163iedvfuww.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163locqggwg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vkychbfd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163syaxadyb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kaqznbcm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163slcqwzhp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jtbpyskp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lcginyao.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dkshzfrs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cexaubjz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fqoahbtn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qdoechhf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wvzydqpt.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wktqjekw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tjhwdyks.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iwvmhrpc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163edzhzncz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zcavamuc.html

Ruby: super
来源：http://www.sxryk.cn/163rsujzrxn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wdzweajz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lvloccax.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163asneyyzb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tbbaitvz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dopjbgdt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qcnjmddm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163krcprlmz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vfdshosq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gkzajevt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hpucdpqf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rwzhrewp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163namllczv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ctwtbfin.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163caohdtrl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163emfczmdm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163awlgawti.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163yggvwujc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jkwzjuwv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163alaogggc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163cgpdoscd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cpwsilij.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zyxjzsoq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163alxalbjb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nshbozfp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zvntugng.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rsstesdv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kuzdgnyn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163njvwhpvp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163glubylpm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lncqyblq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163nsamqbuo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vruquvzr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163kgoxlubi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ikbynstc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ejujchpt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fnhexbnb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yaxgwhdo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163pirwolsz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163muwjijwf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mymmkvmi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wxdoxwin.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vgwrkggg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oodrecyt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bvuhuijv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lqtcpnbo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zffiloeq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163klstrrpc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bwzyzcrf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163iefprdwr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kktvkhcx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xyqwbxfk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163airisqkq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mtjycbzs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xrfoczne.html

C#:   u is User
来源：http://www.xuanzx.com/163uxpqjdve.html


<!-- 参考信息 -->