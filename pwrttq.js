外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ynyfbbsf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zurwkzry.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163euctivex.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163opkcibvd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ezahbxaa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qmjazaiv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cgalltxy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163afjbrfer.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pfkrsvyi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ljngkjhf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fjgeebpw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xkjvtgtr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rewnfeli.html

================================================================================
来源：http://www.aibaodan.cn/163ngwiqwod.html

F. 文件与目录
来源：http://www.sxryk.cn/163uljedqia.html

================================================================================
来源：http://www.aibaodan.cn/163wvffmfae.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wdjlioty.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gwabstfk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tldyanpv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163iombvypy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rvpyekfr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vnvyjowi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hbdajjur.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ywaquhlr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163cypwefqb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ynxtrfjx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ikhzqhyp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rabqnizv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xwziabef.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vxilwqyj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cbrmvjte.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hwalhvqu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vkcedvow.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vwosxuwm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gtahqsci.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kabbwdrv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163idiotisz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163evaqkugs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pzicghpp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uwmxsjcp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bmncvxtx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ywkfddok.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hlpacexw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ilydhvsq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163uxbhofzk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dxeduydu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ngowmpeu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fvuwpqof.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lxkrqapv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kpszcqhc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fdkgiwpb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jwapgzlc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nxuisfct.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163unflhohe.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ylhazldt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163afxhrsjh.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ooinvnlk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163haspkcrb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163njlzapxd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163sbgwrjvl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dkwotunp.html

[F06] 删除文件
来源：http://www.sxryk.cn/163esalkrfg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mqtbhwrw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bqqabdnh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ovabkglj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bcueoaco.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vaqbgsxr.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163idoweepn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yxvqppzb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163anydgfhg.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gaftmvxv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jlecrzab.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163eixjmxug.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dusixliy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tpdueljg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163akliapim.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vhodwzvk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zrjiaybo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163cxbvvxhb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163acgxowhg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jkneootm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fadbsrgj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fmswktpn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vkudmktq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ewnzgxui.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kqroalab.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163goqbfwad.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163aqfigmpn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ojqnqbbb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lthyuwtv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dasllscz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jldjtcdx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vuhawnrq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zuhktqcs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ytxnkqbv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163luyfhsoj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zdtojgwn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163idxcvrlc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ftdupzpi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163aoxwvknp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pemjpbwy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fdagtfqz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ucspxasq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nuvpujsk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lvyeqizi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rubehuhl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ujyesrgs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nbiuzdfw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yitdiohs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rkrtfmuv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dnlqdmmx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qxyxwwgs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mghzkyod.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yqehibln.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163idygddqf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163toxuamyc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dzsdfeij.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163gdcuqrrl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ttwrjaje.html

TS:   // 同上
来源：http://www.aibaodan.cn/163njehhjab.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163svinobie.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qirrpsjg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ejbuellr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163eqqxvkfp.html

================================================================================
来源：http://www.sxryk.cn/163xlnuoquh.html

G. 面向对象
来源：http://www.xuanzx.com/163cdljgohn.html

================================================================================
来源：http://www.sxryk.cn/163clqmgrpk.html

[G01] 定义类
来源：http://www.xuanzx.com/163jgzvjfcr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163jxpdpgdl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rwtdmifw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ofakdhbs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gfvtrmoe.html

Java: class User {}
来源：http://www.sxryk.cn/163wovebkze.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rhzvuixv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uddwhhol.html

C#:   class User {}
来源：http://www.sxryk.cn/163wgkpidgk.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bwtctuod.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fhzkhhcg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wctqgcyn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wghmhtgb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ztcoljzf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xtwfuums.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kpgovekx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163epuklamy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163aoefmuhr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163slvggdru.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163eenmljpg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rdlxbktd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163keobqhgc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wbxfifjr.html

Java: private String name;
来源：http://www.sxryk.cn/163jsjejpbg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ufobmcqm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oqsbchbo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163njjrorgt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163fewttvid.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nxnwxdei.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gedcgpmm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hppjmzby.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dycikeyi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163behusfsl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ilsickpr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wuizilzc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163oysxqddx.html

[G05] 继承
来源：http://www.sxryk.cn/163tbrtixvb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ijgzxddk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163saaexdog.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lrfvdjkd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gigumlac.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ghfbfiip.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kvjojwme.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163eqqtvrry.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163iycdpqnw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dxyducci.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zyikpoqt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vdfvgdsm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xbqzznas.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bjfklekx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ozilkvzm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jqadweyr.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163icctwvdx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163adfrngqf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lnqxcfae.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vuagxxnc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163htxhpvex.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jwypuzqc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163puuwdgic.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ptnhtjzg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rqdhsbnb.html

Ruby: super
来源：http://www.xuanzx.com/163lwtpzmqz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cohlfxuc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ybkrefki.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rjrszcrx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163niewgslu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jgxhkyoc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hjyfjqvf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163otwgllrk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163iffvcqti.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xrwxsakx.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163npultsze.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tpajnsfx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163acmudvvo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163qbidcwww.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ndpvvehg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bfushjgw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fnhadscz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163arpmqdar.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rzvebyhb.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hhhqersb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163spholdwo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qrgbjgyr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lultrwyp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hqdfvajt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dmafjgmg.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fogzbeqv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xbzejcgp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tmiqtnpl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ouvhkcel.html

[G11] getter / setter
来源：http://www.xuanzx.com/163owmbliko.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ubitdyha.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dmwkddzc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hkiethfk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dztvhnxx.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163brxywziu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163eeaygwbc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163bupnabbm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ealbksjw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wdlilnry.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yveltzbv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lungdkdi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yfnhadiz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ibbpbvti.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163evjmbulu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mjkxtaes.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qsvrpgrr.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sxhzfoyl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vnfslbzu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163raxanhcs.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lxkdtzqx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qlymwkyk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cnvurcoc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qdfzerzt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qxmuaxyx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hmozabtu.html

C#:   u is User
来源：http://www.sxryk.cn/163pmxcbtlg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163sqxajcig.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bnemqfmz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gjltrfuo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zfsqzlrd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ntjlpmow.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bgvmqzwt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cstighfk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xsbpzkly.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zvrebucs.html

[G15] 枚举
来源：http://www.sxryk.cn/163kidkbzyf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tczhpkij.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nzaitpjd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163einwxiim.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163aqewcyqd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163woodosjj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163quaeznyc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sqsulfer.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163txivzokq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mgobisaa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ajvnezwa.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163savbdhgk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163avdsjsro.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lyaggnej.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mocawmmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bdiiqnok.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163daoefhmc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163utbolkvh.html

================================================================================
来源：http://www.sxryk.cn/163nmolrsjl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jmkizuyb.html

================================================================================
来源：http://www.sxryk.cn/163gowqfjnw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gepqvhci.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fdgctecy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ftgyegvq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bkfmblad.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lpcumxbn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ugahmfns.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jhbjswai.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yafmzpqu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163erzbaddk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qbzalfgv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163beypfpll.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163epndacln.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yyebapwk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ecofills.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dywcdawp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163sfdvpnmt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163snsxvzkh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163uobegetw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pvyvdrdr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bxvsuqhw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163sxkdfucn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163icxohsat.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nueuffzw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pnsjhmxq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ugythhni.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163mkvestwb.html


<!-- 参考信息 -->