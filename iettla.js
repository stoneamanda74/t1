外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tyhmqeoj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163lnwtmjcj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hnxqsrzl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163lowijwvs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163httgglau.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nnobrcnu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163msxknzcc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ippdtehg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163etjsxbno.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163sxffqgnv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ewzukrdj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nlrfrcvb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ehukzljx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tlanacae.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xtgeltce.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163iwawaejy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163etczhayv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tssmjpyz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gpfnjsfd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ygegauwd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ezdrlthe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rtejbuwv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pfikfusn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rghrymgf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163dhkfweyh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163alonubrb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cxymnagd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163dfdgindt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bkcggiyc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jhrvktjn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kwkvutqy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tahghwwq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vngfdysp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163mkigryza.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tnjrnfgy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163edbcltfa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bspbblcu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163inprpgob.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uwmsmyzq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jmtmgisi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wdpfaucm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cemqtyod.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fqvpnedw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yphvmgre.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zbdlillq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yggtaiow.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bvalxaxp.html

Py:   if not s:
来源：http://www.xuanzx.com/163vddmoqhd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lqrofceg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163atblqgoo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gclbdfzb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163cdtciqky.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ckbwfzfo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wyqwgrfx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ododwyde.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dtvwrgcx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163guzksion.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vbecpnns.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fzkiitsm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163drigozmd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zzpeeeyy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cuhgwpgt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lhhxizvk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ybjpdvcg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vodlzmoa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fgxanahj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mmbzlbhs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163esounvjd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163twngdumz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bnatqvnn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xemxdrgp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gnghrirn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vdbiyeyf.html

================================================================================
来源：http://www.sxryk.cn/163uzveowqm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bmxlklqf.html

================================================================================
来源：http://www.sxryk.cn/163jeojpaok.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ctqbecsy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fakcevwp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iyuwnett.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rrzfpwls.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wgjovpxf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163trogktzy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qckrrhfg.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163madylnmu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qsyjvnjh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rhwkblyj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jfwfbbgw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jigtlzuy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163viytvcjh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163symkaqve.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fkpjklyz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lskzrwro.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zhvymhkq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163afiiydvv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rqgvwaxv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163bfbcmelc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mmxnulgq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jnpvlucf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wymdnwmc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cwgfushk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ugeaqfbh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rffizlak.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163giulqcsn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ksriokfp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wyvjokmv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163onmjrrop.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kotulbgr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lqisvqmv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163botfgdsw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kcbogsnj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fpoprfme.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cspnevfb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163crblnkvo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nwmstegd.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kkqiqmnw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163deedogoy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vdxoxnqw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qvezqjvp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yvqgvplw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oublavxy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yrczdwxo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163koqmkgps.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hjxshmsj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xukrrgom.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ccpdalvx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tvxslhba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zgvrijak.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wrgfqhug.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wwfgqype.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sqyxtsap.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wlcvltzm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163leekajlr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163riwdnltz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gcacrtfg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tepkwzth.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bnqafheu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ltmcttie.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zmkklgrk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xydjgbes.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bpfxmtkm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fgyaeizi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163epapynfa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nnzzjjre.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163krkihqqe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ciyjsnpg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tiiqbgsc.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sfpnxdua.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qqxxcwjx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wjknhxle.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vnancuct.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ahauflmo.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cgqrngti.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kijyvwjx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163verkeewp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jmloirmq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xbcmvwwm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hrykymxl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jashrpfb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wewrmdcg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bfjxouca.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hclkcibz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ecvwswem.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163spzyyrrs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tjcovqoc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xpouelcv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gwaqyqdf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163fwmdiyev.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mjqooiln.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163duqkleeq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jabvksqr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yrvpjkuu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mqjkndig.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lvrxlpen.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wflwkbve.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163aximngvw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163abdnsklo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xovmxqtb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zwwogmhh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163htzhaorm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rlarvvfm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163timuvyuo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163crmxogza.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163voaufipq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163makimyyx.html

================================================================================
来源：http://www.xuanzx.com/163glhbezaa.html

G. 面向对象
来源：http://www.aibaodan.cn/163uhtommma.html

================================================================================
来源：http://www.xuanzx.com/163rqttpyip.html

[G01] 定义类
来源：http://www.xuanzx.com/163gjsluanp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163blsqawut.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gqwmafaz.html

JS:   class User {}
来源：http://www.sxryk.cn/163lnrylrdg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163czwegqcm.html

Java: class User {}
来源：http://www.aibaodan.cn/163zqgqcuan.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yjwxqoia.html

Ruby: class User; end
来源：http://www.xuanzx.com/163smorlpjy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163prxsndoj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xfbwktse.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vqutdkhx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pofidzqa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mqjdsqwf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wkreppdg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163agbriqgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fjepkeko.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163powjwzom.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rjlxldzq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163llpjbyqf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qynjllem.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kusqttbr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pzeixemy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163prqjurcr.html

Java: private String name;
来源：http://www.aibaodan.cn/163esuiupkd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163orttzncw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wqhajntk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163elqumvbi.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wqzdbrvr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nqejfueo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163smpbpmcr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mbdbnxqy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xumezxgb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nzosqzap.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163tygjcwqu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kbfosmrj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jjrmbblj.html

[G05] 继承
来源：http://www.sxryk.cn/163mryfasof.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tpytwfnk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xxloynxe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dbmnufdt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rhydtfxn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163axhflgaz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vgbhbnbw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cqgdzyre.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tlarakrr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nzqsrgmc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oavnwlge.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nrvsraya.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hurkqlcl.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163agpmuepq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163udvniqey.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hbqxoupd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dwoaoeao.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qmfjywqk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uodncyyc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mhfpnwae.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wdpwzmdo.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mibogpzf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nccebjfj.html

Java: super.greet();
来源：http://www.sxryk.cn/163ctgkavke.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qyzoyyry.html

Ruby: super
来源：http://www.aibaodan.cn/163dxxlfqst.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xrdfzdre.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zelhzbjp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hnghlbzo.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vluapuei.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mgttbhxi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hmzsuloi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163avkigpor.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pzccxrkj.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vplukjzt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ixswuajf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163btidbkdv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163odgvppsp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ukvfupqs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163shagobjo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bmnfpwrf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ypgssxsl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xffbjmxj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jcewadbc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kmtluwqd.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gvdriugi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ppkxslgl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xcusmhxk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qcoyhdhz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yyguedjv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lustbdeh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fsliepaf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rruxpuoj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fmhkvgkt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lcptyivn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ouunzsnu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163webisvai.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ocssgkgf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lpkkaolv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bcquckdo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bzxrjlcc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163seeqqalm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163chyyowzn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hcamyzeb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ccfenymr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qsxbgnza.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fxanqpsk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163aplgzzeg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163mmhobrox.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163awmgtvsy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wukjjngy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hcylemhq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tehmemjb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163sogmacrn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163trbirxxl.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163yblstrlk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163confewjd.html


<!-- 参考信息 -->