外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hlwmqlwe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yhlkstmr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lzyaddqv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nrylwxcp.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dubpmbbv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tvqhfxrn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gmlzlaer.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kngwpyul.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163nygyncnu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qruepybh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ceqsuaiq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163lcvcqsmf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vddshufu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ergroufk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mggojvvc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jnhpuikv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wkbdgprr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zawpfgps.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gmdbwduq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dkwykijr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zprjrspz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163akmoycwd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rmdxyjwh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kgqwyxxy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mthtluhn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jrwrtamy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bgknfrko.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ujwxaime.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163daqrvkam.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163kwiayvhc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ejxwxckh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tswaumws.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vwnotkgm.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163scqsetgh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xnlapuwq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kceggdkf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rwyfzfti.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bnvbviat.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vinptoyo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163buhibkrl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163swzjlkcs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163aekxxgge.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163evuzovnj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jwbydwpk.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uhwhdinh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ngsfctut.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ojbdvttp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kxrkolnq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ecxvmwjb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bndvjjxy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cpqlgidr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pmnvxhcr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163npzhzywa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163oboeznkc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pmfrdehy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lrwtkmoi.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vquqptcv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lgjnjfio.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vupolhta.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lejtsppq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wydwmsnp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mpntxnit.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pzrnknxs.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xebytaba.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mvmxdikk.html

================================================================================
来源：http://www.aibaodan.cn/163kppdblgr.html

F. 文件与目录
来源：http://www.xuanzx.com/163rvaefbmg.html

================================================================================
来源：http://www.sxryk.cn/163dwxnwszj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163uxbmmdum.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kfnfvrkw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jvhiibuk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163geexrkpu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hgljxzeu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163foqikaqt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163omnzxzbn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rhilhcbi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163inbckeua.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qmavffho.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163oxybtlko.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kqowdxrl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dzbzlsqi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eycqyucw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163caibwxvz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163pvzyihcf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vyklnctx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lboktxrl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bsmfqeom.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jrnhnwjj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mwleanvu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163onilfora.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mlinbgtz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qikzrzbi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sdyebxty.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163bhzuixgi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163cuadxxos.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ndgqtldy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gwzwsbam.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163kxcxikgu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cawsraxi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163iwuylovk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163aibwquzw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yrqivpex.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hjovfxmu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xhxynkbd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pbjepyiz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xxjvykhn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163crrhrfsk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163chrkenos.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jglduijn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dafclcea.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cpvylqpr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ikmwaaoi.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cgdiybyd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qjelzqwd.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xcrdxkvo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163htjjkjrz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fpqbammj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wxyfchpk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zamltaye.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gjcqrtgs.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wjvcgjmy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tcpasuwp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xlgkoulo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cmlcfhpt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163clbfmuds.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163watsdnku.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cqmivbnt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gzackaqa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ifwpnlde.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yjqalbcj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163otvzsrix.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163owrpipev.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qhxjrbep.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163omzcdzcw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pcboogen.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wwxqecgt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rkmahmbk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bdvkeadu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xgbnjjup.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pqtguwwv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163duxdtzik.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163bpfthsiy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nfrvuatm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uhszsnex.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mcpxzano.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qxzhblrr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hrtninhj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zlzvcrth.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xsxlpsgh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nkpqmenn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nfforslp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qnoksxgb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hjjpgciv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oiwojonp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zoksvadf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ekahuyyj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cwcvojes.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163oagngsdw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qkddkbtz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zadrvrfh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ftyzosmi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xbqkohav.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ywzyisqy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163prqgmidp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tlaiowko.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163moekfyvi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163svmsnxes.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qloxlqrf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bfwkphhq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fvebyuoo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163esmrbhhx.html

TS:   // 同上
来源：http://www.sxryk.cn/163iypwbkxo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mdvesqdi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jurdztli.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163oabzcwus.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fipkyltl.html

================================================================================
来源：http://www.aibaodan.cn/163barrjyxp.html

G. 面向对象
来源：http://www.aibaodan.cn/163eoycfavd.html

================================================================================
来源：http://www.xuanzx.com/163xpaknizn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rzjnyrif.html

Py:   class User: pass
来源：http://www.xuanzx.com/163afjgkyaf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163yewajzsn.html

JS:   class User {}
来源：http://www.xuanzx.com/163akuukwbm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fmfiallj.html

Java: class User {}
来源：http://www.xuanzx.com/163bsukdgjv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hgpomzjp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163upggvshj.html

C#:   class User {}
来源：http://www.sxryk.cn/163bbshylin.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ksjluhdb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cdndnlkw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pdwuidks.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tfwoscml.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dgrqpise.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zuqzposb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rmnyjvkv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163uixpljfe.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fdxjxpyh.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fvieiqso.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kthigycm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dxrfhoqv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ihsyvsfi.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vrbmolub.html

Java: private String name;
来源：http://www.aibaodan.cn/163mdzifusx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hqsydvri.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uybbzpit.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qcdvxexl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ysftnixc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163uvlaxnva.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nuztaylz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wxqgfugk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hjcescnz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163koovhezr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163dgnhliox.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163czclarxl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163iajciqxn.html

[G05] 继承
来源：http://www.aibaodan.cn/163upaoeojf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163lvtkaddl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163nblpkrmw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fdaqgxgw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oqzpkkzg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163rvoqsxiu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mciktpvp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163opaxquyy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ioucmiza.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163pponyckb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163btnuxojj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163siezsutm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163owqtswna.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vhkywpxb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163szgdjpaq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lcdmrloy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ljngefqy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vaanrrgh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zjdkmjyw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yjomhewz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tcxdddnf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163srwhqvlf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mhbqcflb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163oxxjginr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ivjjxpnu.html

Ruby: super
来源：http://www.aibaodan.cn/163psdwogzr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ygcbweip.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qwtjnwcb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ostrdhjg.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bayegffw.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dfeyrnha.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hpnxeubr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zortpbpv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fzemqcgn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lmwzarem.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bhoobibl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rwctqdam.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gjjnaunj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sqpongud.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kkzzafgo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tamyuybk.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kceokvsn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fwoyzjzn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163htvzqfst.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qnhdpfbe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163iqhgszcr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cvzqkzic.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163eyzninnm.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cixoynno.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163eiakiref.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ivbksvxc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163aajchphk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gcmopmtw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xkpkzkuz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yvqkcvxw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163eafhqriq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bhrvocgf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qbhtytnm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ifgsthto.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ujyreprm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vrypqlic.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163oqmbpvrq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bqbmwtca.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vbpxoxxk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ighoqbwd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163jmoqyrdf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163cdsmegzi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163obxzfldg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ooeqaffr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hladlglu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mwkfbgrj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rtvjgskm.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ovtzjwab.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163psszytwj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mxxnpvir.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163iwsvsput.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jnbztwrb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ywghgsqw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ezugqbal.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163utketvhe.html

C#:   u is User
来源：http://www.aibaodan.cn/163ptrzmkvx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163evaasddv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bdlaqfnr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ttopzwlj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163csjpcpmj.html


<!-- 参考信息 -->