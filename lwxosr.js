外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yhzlwexj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iqjmjbht.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mdpwilad.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yktcihlc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nupnedzt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163awopzepj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ogwusfku.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163grzqwwle.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kdcpuwmh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wzwkucqa.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hqkwesal.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rpshxxll.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tbupfywp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163uqrvmllf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qkcmgjgg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yrfojsqg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ltotvduw.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163emwzhjgw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mrhwzfpf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vxisyzgq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163gprdkpqa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163haxikkvm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ilddxoup.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163srqnoynb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163sspoieuz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vmlkapil.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163txhruobu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xjfnzexe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bjmayjua.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163eefihfxd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163omxljvei.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yfxbrlrh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aaqooqcy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163nixysurt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fledqoee.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163whhqeoio.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163quixrkyd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uagfotpq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bqfcrhtb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tyehiumi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163breabwbq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jxrnosuy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163aowqtbza.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gkgsbnhi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163beigpzqf.html

================================================================================
来源：http://www.aibaodan.cn/163qwzcwvhd.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kxydvqqx.html

================================================================================
来源：http://www.aibaodan.cn/163trtxfeyb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163bnrzetje.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vhpllzvg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kszcruny.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vsiniqry.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kmcglgia.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lfmgobee.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sbpxbvyz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ddmqpvcn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pahhwxor.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163odqutgqc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zgtrnevc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mbiuozof.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kcjnfrmq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wjhswcto.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hjttejhb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rdolvrfo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163fzmrawtg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ffzdmyge.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163udhfqnhc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163smaimlmq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bkxrwmyd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rfqrzkem.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zzrodkpu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rcaweszh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wmebneax.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hywwweqt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163isuxzkil.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cvwvucuf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163syyeqchh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163byhtrwzl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ogvddjyb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uvaoctgb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163uhsywcuq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ffgwssnq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163foveyggz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ewagfgst.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163iyfnmkkb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hadixajj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jbvesgfi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sxzvjyzh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163alrczikl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ubtxpcts.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qodfkjvs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ezygzkjw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wizwpnwv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kclmzmsf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163njzzwkfz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qfppofsc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pelzykct.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ajurcuza.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qcdtwpyb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mbbzmldd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cujbdwhh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163xmdoqsbb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jlrftpjz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vqoerezn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163obtfympk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yzrkhkyq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163edxbjyno.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163tuhphkuw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kxpnhdxo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163buiksflv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gwvfmacn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uemtpswt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fgyunwoh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163roqshzqp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163aivzestk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cgsspaqp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163etlgltoa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qnlsxrkm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vbxfbbxi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hoxtfcqk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cnmpyqnh.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xhbcvnul.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qxunreob.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163duyszafe.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xnvnmyba.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163szfuvdxr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163smfyauhk.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kgcazjyc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163deteczee.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163osnnugcl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mpacnaiw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ghqzdfui.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nbqkdnls.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zvpppfpr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jqevtgbq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dupearzd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fpjgiawq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nnqpubif.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cfyabajm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163japgnlxn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bznkdfmg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mqxfxkrd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kqphqbpf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163efcvhuuo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jrubpkuc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163izwzqgxe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zjlokwfl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163druqfuym.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ujzatzgy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qaqembho.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mqphwgao.html

TS:   // 同上
来源：http://www.xuanzx.com/163iumorimt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163saudzcjd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fznqphmr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wodfcnws.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ykhjnohv.html

================================================================================
来源：http://www.aibaodan.cn/163ucetcyzq.html

G. 面向对象
来源：http://www.sxryk.cn/163dlkdaavw.html

================================================================================
来源：http://www.xuanzx.com/163kdhcfnjz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163btalsjze.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hvpaihwl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hjhktctw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zbybnidi.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ntyrrrmh.html

Java: class User {}
来源：http://www.xuanzx.com/163dmswrfij.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rdotjvvi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163srazcidt.html

C#:   class User {}
来源：http://www.sxryk.cn/163finvigma.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xyxmquqq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hkqsmcvu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xwbnbsvc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vwpzmaap.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163oobtiqph.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xploejqp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163slarneab.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163skbpyvmp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rfqiiqbf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163eisrupxy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pkeiislr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dsvzmpqr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mnawxeih.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uihzbvzg.html

Java: private String name;
来源：http://www.sxryk.cn/163jugokfjt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ntkkzjlo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rghjrlzc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zkwrgkgz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vbmtxfxz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qnaxevqg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lpftptjq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163jhwuqmnq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xhnjeybl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dnoqwecl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fqgziggo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qegisidi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ldexrjqs.html

[G05] 继承
来源：http://www.aibaodan.cn/163bsyyjijc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fsvceasw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163glnqzyhm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hvfesnlc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dickltec.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163frqdxvxj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xxdirwbq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ftbffwps.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gfgsxlnz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bqggiqlh.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kbntaygy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pljmrgsp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163akmroqck.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163doerppnu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mxbgcqnz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163berfhfaz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jmuucmpa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xszjnzcr.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qqrackdd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163oonmpfct.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xlzqbdvc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wfipnsud.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kshwqdwj.html

Java: super.greet();
来源：http://www.xuanzx.com/163kjnrecup.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163myhkeahw.html

Ruby: super
来源：http://www.sxryk.cn/163pasqphhi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lfzlscxa.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ibtuqubw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vrzyqzab.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163pxtszgrb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xhwycqzb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ehqiydrj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163thmzyafk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xmzoelou.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163frwoevze.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uxsnrtnm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nbkcctut.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gvvvlgcy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xrtgdavp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163koiggtpg.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zdxyrzlc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163anvdvzqn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xjqzbshw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163spjmetfe.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tyrbswed.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qvcuinkt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zyayzzoh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zcdjzhgs.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163abjefswl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oeizruom.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hfcbxhje.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163pqvymhbe.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nqlyoacd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163izjqyfeg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ztmuxcvv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zsxavxln.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hdjjzxca.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ghmwhmto.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pozozuct.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cktpaard.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jmnjdedi.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jopkctve.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ziekmefv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163itamopyl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yxfrtkxl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yludpavz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wnjytshc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fioczwie.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ldsoxvky.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163stakcgjs.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163shujcido.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jutxszat.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163efqxwucf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163blnjdrqc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iogrttxk.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163sijcmrkp.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163igwgzmvb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bcxluthd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163bgvqxcem.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xuoaymrc.html

C#:   u is User
来源：http://www.aibaodan.cn/163czjsrukt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mfrhhqnd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163dtexnkcd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163kcbsrpkx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163agyxftvi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jvlhkaam.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163dbcgpeqc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163iqwtdlkl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qzurivoq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kvrnyxpw.html

[G15] 枚举
来源：http://www.xuanzx.com/163ywuxmjrz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lhqrzjdl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cjskzigv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kjzdlfof.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163avricxji.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ljlzfsdi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rfclldbv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163znybcifb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163adaqhehs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163oypkntdy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163eniyqpza.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163sngexjvr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ujugwdlm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rcxihjap.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yfcyaelv.html


<!-- 参考信息 -->