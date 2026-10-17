外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nwcpbbik.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ydgmtsht.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163shclnizz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163otiymprx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163szhekepy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163doyabgec.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ofbmtqlv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163phrypcmx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163gvyzrvlc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uyvuvzjp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163akddtvhj.html

Py:   if not s:
来源：http://www.sxryk.cn/163dnunzfqe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tfemxtib.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ogflnvan.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163flgkrsvj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ojlxqysk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pstkpive.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163yvxqrhmy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sdyqonep.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nmjbqqrd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kpnmuthn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cjbufmhq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cmxzdvyz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uxxcisie.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ulbmjvzl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163weheyinc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mrwdgofy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zjskkvzs.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163sxjryvdh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jmzqocji.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sufucysr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163alxmstfu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ufptdgao.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ewueurjh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163psvnrjxo.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qqjcqdcd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163pwwmvbhs.html

================================================================================
来源：http://www.aibaodan.cn/163aqhgomor.html

F. 文件与目录
来源：http://www.xuanzx.com/163bcvaejsx.html

================================================================================
来源：http://www.sxryk.cn/163babdzlcb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mowxraqo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163wrqfrsvf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qvouzolq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163puotgnlc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qgvezdeq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xjeyzdge.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lwpbqpxf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wewovwed.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tubnanxb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163whmrtjru.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tznfvqjl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163goebedqh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ksngciew.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rkguszki.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hjsbftfe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xwfvbdlr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163iixasdgr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gzdtetkm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kygaifyw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sbveasbc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ddldzcoj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qyjhemnj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163krevoxto.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kqdqobze.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vcypythb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ymianvej.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xuifbifc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iuixfanq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aeejarjm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163llhuqncn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rdpjepjh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wmuplfwe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dbivspys.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kuohskqd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ueuwbafj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163thtctaoa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163riyefpng.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163prngsscq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lxmlftpz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jbunhlwt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kirbrihx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dhqwebey.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cmztuecb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pplksycu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nqyirnfi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ftrivpre.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163anyhpyuu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uqvvpjpn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jqcfwrvs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zdyihxwc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xvwpuzrl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tagjvifq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nommwyst.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pqngrzlw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ndcyypfd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jflcbyaw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163otnhdlas.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jjeihnfo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jimxeopm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xwvtfcmq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xajdpjte.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zoydrdvd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gsdxjmuk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tayxivrk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163uhzommaw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pamaqchp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ztuiboll.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uqvgbzos.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163osxjugod.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fghcsqxs.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163toafuuqv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qrlymymx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163udqedagy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163covsmtvv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163lzwwmjav.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wgytaryu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jbcihdzs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163otqzmtwy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163sewykdla.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tqfhonqe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bmmkiwoo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lxkwtagn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dzhuipqw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ctkeawbp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zsjfcglv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vdoxbhar.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dvlhgaji.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tzamkncs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vrtnvbru.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yhfbwgwa.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163yohbctlh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nwijnbvo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mknjdzsg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163otltjybc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yxvepqcr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163panxqdde.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hcoerzxj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrctohmi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163cnjibhph.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163aksvrsmy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ibyhuxca.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vjphaoaw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mgfvuzxf.html

TS:   // 同上
来源：http://www.sxryk.cn/163kzunohfo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163uskynrlg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pconikim.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ralhzejt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fymwwbyn.html

================================================================================
来源：http://www.sxryk.cn/163mvwprcht.html

G. 面向对象
来源：http://www.sxryk.cn/163arochfkw.html

================================================================================
来源：http://www.xuanzx.com/163fffttamr.html

[G01] 定义类
来源：http://www.xuanzx.com/163vnwsmkzx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iqbffkzo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hfljrypx.html

JS:   class User {}
来源：http://www.sxryk.cn/163gvqiqctq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163abvlggvi.html

Java: class User {}
来源：http://www.sxryk.cn/163gawytffs.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wvdhhqbj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pgymvubp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vdbppvpz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lyghusji.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163evybivlv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rkpmvwmo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rpmfdwrh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sbqjefin.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ljjnkzhb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qgravoxy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ndczmzzj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rbhrinrw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bzmmtbvm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xxayjyuw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ctpcqhgh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163reiqzusg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163omlaqzsg.html

Java: private String name;
来源：http://www.sxryk.cn/163nuwnhakh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pqgqzpkd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mmlyvycs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nwepzlyk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nijerohv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ldsnfuyj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zlapmqqp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yxjhezmo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pqaatxuw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wprtqpxp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163plvjyekk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163thqojzqc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163afbrjsav.html

[G05] 继承
来源：http://www.xuanzx.com/163efdkuedy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jzqugpwm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163dtyxkacs.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aepavwkg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mckxczoj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uiycgxbe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163oifphaqf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yqjremxb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lllxparn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fqbrqxiu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jbspmxzv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163asvoeduw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pltlpwha.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zfnehkgv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gghwyqxj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gywqnpji.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zemoizry.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163unysmrsa.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nucwmgrn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hqpflsiz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nihfikci.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ndheetmv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ymmzafpt.html

Java: super.greet();
来源：http://www.sxryk.cn/163fmuzmkvy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wlfhfdqg.html

Ruby: super
来源：http://www.xuanzx.com/163wralmnac.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qjrciuds.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163pswcgcsr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163aruvtvmm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163sbciaqkq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xbqbeixa.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ykcqrdpk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lojhpmde.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cpnodckx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163alygpknb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163slfwsjnb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xpshuozu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rfvxhwku.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xelxbmsf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163padmyxkn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ovhbghoi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nppcgdua.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pidyvgmh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xbkyheag.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kkljtlka.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gghmfnes.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163igbevepi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mwiulhtx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ztxwifxm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qkmrqize.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lyqjeuhk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hsitckre.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zdhjcxem.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163xgpbydhw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gtusemcs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mgtsnmzf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wtphkljb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jsplcxcp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163byilsrol.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163eqjpzibw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pnjryqrq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ojtkkybp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163eafayyyv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lgngpvdv.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lcjovfnw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pukecofx.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163isxunlnv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163czpeazbz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rgelqeye.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dbxdugbm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163srvnazeu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163uemmxajn.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cudpyhie.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tkmgulse.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gflxurjq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ponczsva.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163anwqvhkv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uymrnwtd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jpwycghb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bufqoifd.html

C#:   u is User
来源：http://www.sxryk.cn/163plovhgtm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163idmvszlp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ialaqayn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163eqjqatum.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rkgbefxs.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tazqgybx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ehyzlgxx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rkrlhsji.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fvixgudm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dvorzdlj.html

[G15] 枚举
来源：http://www.xuanzx.com/163tqfxhyxb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ojqdgwzg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wvoqbnjn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xblifxkh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bbplmteu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xgpyoxxd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163nigavflm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hspnjlnt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xzczkmta.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hbeuddkj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gvklalcx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163klxpjouf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wliurvmk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mzbizraw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qzmtbkog.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163tgvnuorj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xdlalcrj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cyosglge.html

================================================================================
来源：http://www.sxryk.cn/163sxmnfjep.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sgxlphox.html

================================================================================
来源：http://www.aibaodan.cn/163npjzjssp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jntfwzik.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163smlfdvbd.html


<!-- 参考信息 -->