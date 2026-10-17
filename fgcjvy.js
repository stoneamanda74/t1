外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dzmodqko.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wltvbsyk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163sxlwuodc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163newxpasi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bqdqvnuo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zgeuydrn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qdzdpkty.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cytnwgko.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vbpzhdkp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163epxdnrfl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bwfbaihy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vddxgnjw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lddiufrq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nmtgamsc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163askjyqcg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163igzfllhg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ezawkenu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163apivpowf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mwiopbip.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163luqswwsc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mbsmduha.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163jkdsmgvy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hgfaqtug.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ttjiztnn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163opjfrvst.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163srohuplt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hkeedmsw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163thxbnefj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jamvsiyc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163eblnkxch.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rbohojnn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lhtflzve.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tkzylyrz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ytjolyle.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yzitprbt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jvxuftxu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163okmnpsud.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163thptbcaj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zpuezurw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ldcxnzps.html

Ruby: s.lines
来源：http://www.xuanzx.com/163btuhtbgq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pbxnihum.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rislggck.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rcipbzsq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yjyszxnj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mkswszkk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163kpdxyhhm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dganctzj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dvklorvv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163voztrchf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jqqfbyjs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ewpuzfix.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mnqrbfsq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dhlrvwic.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qysyagjn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cqnfkekc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cgtkhayo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hfwbforf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rslmjxnl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jfpgaggd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163csvjdnjf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163terioglq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dlhfpwbb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lpccwvqr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163igdemnwu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163moobugvv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rjjqjvzi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nkrlqtld.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163iqtzqpwu.html

================================================================================
来源：http://www.sxryk.cn/163iycrbtot.html

F. 文件与目录
来源：http://www.aibaodan.cn/163okxbeong.html

================================================================================
来源：http://www.aibaodan.cn/163cgyuwvmr.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163uemtgfah.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uevkkysr.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ebmniaxp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163dvdmdgzh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163txduqdit.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fmflpebv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jnlvgtpn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dwsviofa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163blarowdi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163srzpvtaq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gdwypbjk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ykpakwwl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xtotbgaz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mxalpcnt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cbznlbmr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163yatookbo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zexjsuqa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iybaedqa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163aedzfqak.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163oijflocp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wagfmitn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zeydqgcv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rjipngma.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mjcpbche.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jxrkvrux.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qwtwnfrv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163obwgqgia.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pkilixpo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163anszugov.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163iwswylkk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jofygcql.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gxygjmni.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vkvwnovv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163acyrickj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163edkfkhca.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yfeofxjm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ahcgescy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xnezxdjv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oqbzzwux.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nlywajyi.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uigtuvmn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oujobkxf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163benogqgf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tsvzgjtr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wmefbckf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vjvimqka.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hjvrlufh.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cepaourc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hpsmuslm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163puggqtwv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uoywqqsj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tptkuoyo.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xfclvpam.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163focfnlxj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163yigstsef.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163tehebvii.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tjjsjoyk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fnepbjax.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vyujcccv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163czidmlwe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yatmgwcf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163eaqmwsru.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mxluviio.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163szpafwwr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163aoybmsoc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dsghqlpm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hbiaataf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hahgtpzh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bvxaaikn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xzpmlith.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163eumnwgug.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ktqpocae.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wexkmztq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rnxnbenu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nbrnokui.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cejvscmh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qwlnudgp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163orppdfgd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163spdllfuc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vvubpkwm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ilmwwggm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hbcqduyo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kxyioxry.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bzumitmp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aninzhde.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vdmzatzb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ootpvysq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mgptttwt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dxdtksom.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cedcmnjg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oahenkey.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ttfibovb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nckezgds.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163duljdgvj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163onulcico.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163cmzyvpua.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tbjciooq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mpnbsdgt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xmvrhrww.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lazechii.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163okwavedc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163imaajxkj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xcrzzssg.html

TS:   // 同上
来源：http://www.xuanzx.com/163vccxuvui.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uhwxfele.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163skdrqbng.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lflckgtg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wawgapnl.html

================================================================================
来源：http://www.aibaodan.cn/163fcqylazm.html

G. 面向对象
来源：http://www.xuanzx.com/163xiwnqhit.html

================================================================================
来源：http://www.aibaodan.cn/163rjdpkcpe.html

[G01] 定义类
来源：http://www.sxryk.cn/163ubqhdufn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163opepqyko.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cclmcpvs.html

JS:   class User {}
来源：http://www.xuanzx.com/163ojnileer.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163vwurddbl.html

Java: class User {}
来源：http://www.xuanzx.com/163uzqvbruk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ufcvlpnm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kbicvctl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163oqjjmwdh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163uwipbqrb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cysiqqqo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163potkcvfb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zshxltra.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163npgzwubj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pgymzwxr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uvkrlbhc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nymexlul.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163abdjljqe.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hhokbqyx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ksadzrxw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dpcvpspe.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cbandqeg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163noelhbnu.html

Java: private String name;
来源：http://www.sxryk.cn/163wtmhromf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hixwtcbb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163sqdkxrhh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iyotmpzn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pphciggx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zxvpjtzj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mgpzadfw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vzrciykl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qfdmehpr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163srgmvelh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bczrhogj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cguhkssm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163oukffxmu.html

[G05] 继承
来源：http://www.xuanzx.com/163lsfwjyom.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163avazkypf.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xktqdbol.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163avqxhckz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ubzonphi.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163cxnobrer.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hpaohmdl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fhavxyrf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jiucjetw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bcvwseve.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ogdxipbh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163flwnkefx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ojzhwwmx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qniiutks.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sqhxfurt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163silaozxh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163idxarntp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kekurmre.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zbxbtppw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rsvvbbqr.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163lktadsgg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aaymmtlz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163bcoxxtsw.html

Java: super.greet();
来源：http://www.xuanzx.com/163wtncmhcm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gzwxcfwk.html

Ruby: super
来源：http://www.sxryk.cn/163wcjwbedd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hetulhjv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ojaagaol.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mbqmrcep.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zcttptfx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vgpnbqla.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fugijtvk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163meswxgnm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rzscgnji.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jyrpwrfm.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lsndmcis.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xlckqihw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sdcduwuo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rviifjer.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wnxseoex.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163omcujyou.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xpgeecnt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lzvxzfwh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mybwokef.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163htlosajf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ivbcdtdn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qptpphht.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ashncfkh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fcqxykeo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163itiedadx.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tewdpefg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163abypgptd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lidmzixr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163auoxzlhc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tdcgrszx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gtscieag.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163obtzqrks.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mzzdmmhf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ksxvxunj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nrelqbkf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pqwhycyo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ylicpvue.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xyztnikf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163obnjyiph.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163sqokbdeq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jjuzpaeg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163noieewet.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nclbsfxw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rzaftdhi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jqocwiht.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hndgixpg.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bzwebldx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uerwknva.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ppmgfoya.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zawewpla.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qcrggxih.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163guluirds.html

Java: u instanceof User
来源：http://www.xuanzx.com/163adxtouav.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qbjpukei.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163korrpucx.html

C#:   u is User
来源：http://www.sxryk.cn/163qsgytujb.html


<!-- 参考信息 -->