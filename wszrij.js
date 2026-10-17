外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hhuydyra.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wewdywfq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163nqitxksg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wadxezdv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vgdwwvpq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ticzlavh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jxmysvxb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163itkadypq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163znggwsjj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hracbigg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hkdxpsve.html

Py:   if not s:
来源：http://www.xuanzx.com/163oxymxdbs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163oyphpmks.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163sdmkeugw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163sdenfrtp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163arksaimb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nyaitsox.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xxsfbmxf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kpuqjhse.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wjkykpwy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163sqaqaino.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jtjtdszg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ksnsckpk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163omlromky.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ksjeooty.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tnmvsrha.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163sxwfsrfr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hmqkwwle.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zqzjqwoc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wepiooqs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gutpahxg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mgskbkcv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163csooiysb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fbqtmkqo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vfrmyigc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163caxptkdc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wpzhgjtn.html

================================================================================
来源：http://www.xuanzx.com/163fymtctqp.html

F. 文件与目录
来源：http://www.sxryk.cn/163lghbuhha.html

================================================================================
来源：http://www.sxryk.cn/163rqipozmv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hburslun.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rndgeuov.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fdyokobz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163riyqjhzs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yjqbbgzk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sxqpvsbv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qymcgfdj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xbosesuc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cowijkxb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zckqrzph.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jfyrensm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ccnfiuar.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yccpqxqy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gnktexxw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qisghwxv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163okaslcba.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163scagurzu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163haidzqea.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163otveyduz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wzwxbzuw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ofoipgli.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dutmcpts.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pjnskrdx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mhvonarn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163favhdfcv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163amohlddu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gtzgmdry.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lklvfiai.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yiuirdxt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bqljjykj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vlvddwkz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bmuqdfog.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163cdwbrijo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163npicyevn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fdquvoat.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mlaoxmcd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163utatfrjv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163djrkuucc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zgcikibs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nwwszvkl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uvguqdkf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qifsdkpe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163pxxailki.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ngyceohi.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163acypouyi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mffmxpvx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ywxoiows.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hohavipw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163errxuxtc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pbvfsxuh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fuirjhvq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mqkssmpm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zhxcfvuz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163knoimzsq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vklqnnzq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rygnfflf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yweeocqs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163osbjxacp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ityvmryt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dsljoprc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qjtmbkpf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qgbwdcqn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vvdqcyzh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163cqaxeqgu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163aggzikxf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ebintdjk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gluplnsq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gvddyysl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163esltszks.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ioxkbycw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zlxnnkjq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163gltmfwqq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zeslnejx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163clhedzwn.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163utxzlxuc.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rwlrnyun.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yrdpegqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lncpvhxm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tyrcfijb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jsjjuxhh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163apxohrdt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mmdvsmsm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pjpofqul.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163publkqui.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ayohzzdp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163acqgpeqb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163llqnlerh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dorerill.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163elhffnwu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hlbaivwt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163wdlaiore.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mhwkebko.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qxcwqutk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yshbeslp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kuigsoyj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163effbhanj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dvcqtvmz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oiablmou.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163saycdvkt.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qkdagfwg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yqgwihfe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bkrmaapw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nzwnnpbq.html

TS:   // 同上
来源：http://www.sxryk.cn/163ozidpydi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jqyvyhlt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zjcraojp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qbhwslug.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pbsevfmr.html

================================================================================
来源：http://www.aibaodan.cn/163nvmmdoin.html

G. 面向对象
来源：http://www.aibaodan.cn/163hylpazjn.html

================================================================================
来源：http://www.aibaodan.cn/163sychzvqr.html

[G01] 定义类
来源：http://www.sxryk.cn/163rnkfzods.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zyeihnaf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ckxxgfjx.html

JS:   class User {}
来源：http://www.xuanzx.com/163onhnqkkm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mbqfjbbi.html

Java: class User {}
来源：http://www.aibaodan.cn/163ugqgaycb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cqvgbaxj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163daaapltl.html

C#:   class User {}
来源：http://www.xuanzx.com/163koqlbnlv.html

[G02] 构造函数
来源：http://www.sxryk.cn/163cblvroni.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wdflracj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163akslcrzx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jqrbnoai.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kiuavxaa.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zkurlhmr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zczkboop.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pwpamvkg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ymhbekad.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tcuoxebj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ifnassbr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ujazhknm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zwecldrs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vieqlzzx.html

Java: private String name;
来源：http://www.xuanzx.com/163ywdxlmwh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vdwsljfb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kurvcveh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dlrffeiw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kgypbjio.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ubaxttkx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163emdwgrzz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163nhrabagx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163arocquut.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163uhokqzsq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hqyijrbf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bzjzaxed.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163psebdvpb.html

[G05] 继承
来源：http://www.sxryk.cn/163lppaxnuy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qxzmzgdk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ccnascrh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ucmlbglx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ybssvuli.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ikdhrfzz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ytfbwnip.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tjrucupj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wyatzrgr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ckzecliv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163olkipavf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fylbtkfa.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pkugizov.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163evlzvmgh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163shogmfrq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163edvjgjvk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tksgeozo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qzduiibd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xwrxossq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qwilwzlx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163suygfcht.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lqznhhrp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zefcybki.html

Java: super.greet();
来源：http://www.xuanzx.com/163czplacof.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hhxykqxy.html

Ruby: super
来源：http://www.sxryk.cn/163vhzokzxp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lkmljdot.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lslrjrxt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fpealqff.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nvhxtjdu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163obvzrwsb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fqmxptds.html

Java: static void f() {}
来源：http://www.sxryk.cn/163cnsszkgg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zrjdrpqz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rrpzvkyu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bxlbzjyo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cgarsjhj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qbczudel.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xnymwncr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jpabelbp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iuwaoeac.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163leqduyjm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fyvqnsyu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163cutumlbv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ibmjgwak.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pcwdguim.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163utixvron.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163esenrfcp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vzptjptn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163oxnhciuh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163emfdufii.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zteaejzg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163iatcpvuy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ddusdjcx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xmwzeggh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163syckxaje.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ebmdqqws.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163npuuftsz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pvbjefal.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gubxvwfj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jhahwowk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vfkifktz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qvoecgqd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ppsqnewt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ejdfptsj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163sjftgwuk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163tbiiuagx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hadusinf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mjochlrr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163iuhnhrrv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kfcmupbg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dgntnvig.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xynhexak.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163kyenzieo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163emvfoyrn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zcmcymen.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163eyggmaqk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163aglwniyw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yqcdifcj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163lfdsmraj.html

C#:   u is User
来源：http://www.sxryk.cn/163ebqfngov.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fwtwgnht.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ffzujurr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ecyhcmpi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163absnvkuq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vkddlnws.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bxyblgeu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ofiyccyb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163oyzsjgeq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163hbgjopkc.html

[G15] 枚举
来源：http://www.xuanzx.com/163nhzirhji.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163gkozteqd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nrsgpgnu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xqbihrle.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tijgidhg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163atpzyzem.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163obixvplg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gxcajcol.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ohsokndc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bagywojr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163iujvxzgm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ywaeyvav.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163itslimdc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163evwmllsz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nkcldlho.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zkcushrf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zesnunqo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163atjkjseu.html

================================================================================
来源：http://www.aibaodan.cn/163nnyximxd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gpbrmnye.html

================================================================================
来源：http://www.aibaodan.cn/163wojqyvke.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ejojucsz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bnzgtfmk.html


<!-- 参考信息 -->