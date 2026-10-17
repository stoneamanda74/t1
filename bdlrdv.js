外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vzotrxbf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tumzqqxr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xcruhchq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163envuabej.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163pzahzcns.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163neewkbsg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zrnhtzmu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cjqidhdz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163yyoivvwh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163otwvwrga.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tzjtlmkc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163efvkvgeg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ningyeav.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hqwseslu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163aexnubvp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163secsxcng.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163eoyeunaq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163inggdmmf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163srtmtnsw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ibkudxvt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mversrlg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ntrutylp.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kmbjelmr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yxecnuub.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163tgsaujlk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163liwuywhw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sxczdyls.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163txcbqakq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163epwyfiyg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ximlzygl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qdpsclbn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163amaqpxxf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pgxbssdw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bkyunrvl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163oobikziw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163omubjxzp.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cbwhyxsf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mqrrtnny.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163khzuypai.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mjunakja.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nydfdomq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ndhdzpxg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mxamvilf.html

Py:   if not s:
来源：http://www.sxryk.cn/163ajnjsisi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qkksreki.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qyxtkyze.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rblirmum.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jsuxgszk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163asvavfer.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jovjgeel.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dtakgbop.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163spmuorwp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kajapkrf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163kmrjtmpb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xdolizew.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xdczfxoe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zysxnxhv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zgxxemzz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sikqwirn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163fxbapcxf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hlmfqmps.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tjqhldrg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ttcjkxtd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163klzhbftq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gtlmisxz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163fbsomdwg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bbyvktvn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dwsoarwt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163czobnsmv.html

================================================================================
来源：http://www.sxryk.cn/163hschfgqv.html

F. 文件与目录
来源：http://www.sxryk.cn/163xpoukqzo.html

================================================================================
来源：http://www.aibaodan.cn/163jtmjyphq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zxzntmxa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163abiqghru.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uclnnoue.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163lehknawg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163axmizjjr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yzzxmgsq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163unwtjupc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gesfvzbj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vdelrfgr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163snlmrxyx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ioojvaal.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mpbzgxmt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163flbcnztq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ogqscmif.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fapfdeyp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ubkvgkab.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hvovpotp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rywzijig.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gaxxeoxc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xzvghtta.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sylndhro.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ezpfuivr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163waxsgxda.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uceodmks.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lonnxqvj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ndpyhkof.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zuaayvyk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163evlnvzdf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lnlbjime.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163cxtfqmwk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wtmvtgum.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fhjvbxjf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163czkswmvs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qocnwxaf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lrixkvfi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163yjsiqjqy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ofknqztw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mnohhnrx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163aaggqfuf.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cnkcrsoz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kygvorfm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ynriqyar.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163czmdxiew.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bygdjrbv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163gfwztfjx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163hymbyzoc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nbiikkqn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163okiqqicb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kmvgzsuj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163utbpmeam.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vynzigfc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yqovdooh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zpbqbqpa.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163petykdrf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hwmbkjee.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vvqnnqmd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jyfiejjm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163twzskffo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eppwtpku.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ontfqfce.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lzgcmyzi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rbptynbx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pwgtppnw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jakmfxhw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163brgnuyea.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fygdukmu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mzfkxier.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xtpgmqxn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163idhnkzie.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xrfgeiqg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163tcpxqszo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163stdougob.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163nycotkqw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wokrynai.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163njaurafg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hksdlklx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lvcrtfoh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163leqdnbrp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jeqertct.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jaojncme.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kvruftzo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hswjltyi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yizddcjs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hqaaozic.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ueemsvdm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ronrhuna.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jenqetyg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ploesgtg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kfnicvim.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163wvinxkiv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yvmobmkr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rdkypkfu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hnaghxvn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163reiuxfev.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163spzhqhko.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rqiixnqd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ahlpqhtl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163npeuncbg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bcicnbby.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qbjtigww.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xejcfeny.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dlxzhqwg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163yvbgthjc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kthiovhu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163doiijucg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yyrbojms.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163msqsvdjf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fgfnylnb.html

================================================================================
来源：http://www.sxryk.cn/163dwaqzedl.html

G. 面向对象
来源：http://www.aibaodan.cn/163douodurj.html

================================================================================
来源：http://www.aibaodan.cn/163joolvpcv.html

[G01] 定义类
来源：http://www.xuanzx.com/163ryahuvlt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163eudsgxmr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163btnaplga.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nioxmjwc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tcozwnqc.html

Java: class User {}
来源：http://www.xuanzx.com/163jduxijfp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wwbjjqrr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163yktrsptz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ueealxyn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163umyydwwu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163glzpawjn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xcajrpby.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zpudkpch.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163vibyllef.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fjsshxaf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fpgsvkki.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163evtjxxfn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vlkdlfpe.html

[G03] 实例属性
来源：http://www.xuanzx.com/163orldbeqd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jdmnbcdp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kahcymol.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kstwzurf.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tmwcldaj.html

Java: private String name;
来源：http://www.aibaodan.cn/163bncbvtva.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163biyrycbz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tanuorge.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ftvcukwm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ftrhjxah.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mxrsavpm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163azqqbbnj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qrxbypbg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163iexxkzay.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163gzwzawex.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163njmcgmvl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jygzfpji.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kpwccivy.html

[G05] 继承
来源：http://www.aibaodan.cn/163nokfpmwh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163klfenmey.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163foydsqbm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ykgnhlow.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mlojifoo.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zuindynq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163aizxypsq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zbdypbft.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vhpnazrg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rwtcosyj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ekpdipnj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tyfqvzoa.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zvislegd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163accbyxdj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ftxccjkd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ezjhvuyw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163xutahznc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kujxbmyj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uhizudmo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163wljnhfgo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wiclfyeh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tohejfyt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aelwiike.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mgxlkmrz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163vkwyujvw.html

Ruby: super
来源：http://www.xuanzx.com/163azvkchlw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vffniqmy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mracnkzh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tkinyfjo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nudzpejw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163prcttcnr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fyjbpgpc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163oezywuzv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163azwurzpt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bzadxgwt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vwagcltx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wyfoorne.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bxacurga.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163shxdtxzm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163peqdfatg.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zpdptvkq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163linmshio.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163oxokshxu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163brcznqey.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xmiqozwe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uhnzeojh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hcmjijdq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nehalqyk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163caznjbdz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qxoxffvu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163emjfcote.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gwqbzfhw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ryzcmjzx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kkizmnms.html

[G11] getter / setter
来源：http://www.xuanzx.com/163eieitnve.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zrhrqahj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lvohbvrk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163palplaps.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163htfrphvn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xezxqrdz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dbmgrhhq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hapvvxlj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163innctqfu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163umvpecka.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tsumuqoa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ufnqnuli.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rsyhnviz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xsuqduqn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pzskeyvu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ggwkgnza.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xwkfyvtx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ljtrppjw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wczswpxv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dklokisx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163poxqejns.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163atoybken.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163taijeljt.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rdyzcbjd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kedvlqtz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163aoqhisrm.html

C#:   u is User
来源：http://www.aibaodan.cn/163jlkajysv.html


<!-- 参考信息 -->