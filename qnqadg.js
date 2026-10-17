外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xaxqrpma.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tsomzxfy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bamxhcbj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hpnxfjun.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163itkrumxf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163unhqqmdi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eslmlroz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163taleqdja.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mnbtjpcs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fkxjulra.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163epwdlbjj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163eqlyhfiw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rwrvvbge.html

================================================================================
来源：http://www.sxryk.cn/163gvefsyak.html

F. 文件与目录
来源：http://www.sxryk.cn/163eggbzljr.html

================================================================================
来源：http://www.xuanzx.com/163ztgkofdm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lkxpopnf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yuoouovz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qrbufvgj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163eguiqrvh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fakddpsm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uiugwfvd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rhlvpxuz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lpjpiwdu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nctcgxde.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163sidbvjco.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wizmkzqn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bjoovkja.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163akyejaam.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zcfyhoso.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hlyhdssf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mqieijem.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nfxhwigr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fxwhdwhd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jbpfyztg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163auaztubr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kncgssdn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vezlvjom.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mlwxqjxa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pohriecw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163btmfzkew.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tgivhott.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ebinbojt.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pcbqvbkk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ovgrmzkv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xylfozuc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bedinqeh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dhloleez.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gsdkbckz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163gpdzrliz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163frchgfuu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ytorvpjn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163axwvwrou.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fjnhapgt.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hxwwmerw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tulzxrwx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cuukamfl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163deurkriz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dxyywcoz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qolzscjg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qusnxfxf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ovsaicgt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nmlxphyd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bjnhxifb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mtyozgcl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163guxgfkjv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jxgamxft.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tnmmlnsc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dcvaonck.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rrzcpows.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163abusleyf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dlcbtbqf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ejpjcyfw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163suukayto.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lvnaikvi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ddwsjxlb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jyxszpfr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jrbtrpug.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fhidilcz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hsexttpq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vsrczbut.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qutqmkqk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qizdbwyj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ciczulca.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hmhcqkhp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163domzwoyw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163czgzesng.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pjqsnjgr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gftqngcz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bzqxpkaa.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qmmnmuzt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nucjulka.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ngoyakmi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xcirmmnd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ipctutwx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zdkysiqu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dxaxckhz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kcyqtfbj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hrtkedhk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dofgndna.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gjimqmzf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qfyhgulk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163evmvrxfg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163sahnjsnd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dozevoho.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163uerqrnco.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cfyjmkdb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tadbkbhw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163saexpopy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ieafyftt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zmpfrgvb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163oalmywwx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lnlyrgzm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ligfztxu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vzvpndpp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dpgxllzk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ldrdxxaj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bithjvyq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163imccfnsk.html

TS:   // 同上
来源：http://www.sxryk.cn/163gxwuhrel.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hdlmvexi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cqlwklpr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hvzuyive.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163yimspyiz.html

================================================================================
来源：http://www.xuanzx.com/163reczdozh.html

G. 面向对象
来源：http://www.sxryk.cn/163wydnamxl.html

================================================================================
来源：http://www.xuanzx.com/163tloseusr.html

[G01] 定义类
来源：http://www.sxryk.cn/163ewfaiwiy.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lsidlfph.html

PHP:  class User {}
来源：http://www.xuanzx.com/163apqbulug.html

JS:   class User {}
来源：http://www.sxryk.cn/163rxrormoe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163lnkqthaf.html

Java: class User {}
来源：http://www.aibaodan.cn/163ymfgjvpm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xpocvnpb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163onmkykxj.html

C#:   class User {}
来源：http://www.xuanzx.com/163qkisprzy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rixqdwwm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xtdmweug.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hhatchhb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ucvhtkhr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163bfxflpob.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jtjqyqhm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dwvtkjcq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rxlahgng.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fhatsgut.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mqtcqgbo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163anqeowwl.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163wadscqds.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pcojacpk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163htbvvzss.html

Java: private String name;
来源：http://www.xuanzx.com/163adalgana.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qwpetltj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163inhecgvk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ksgxjvmj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ordmzdxm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mmlmxhqi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hkcsbujd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163kixajmfh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jewdirzq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xnqonejg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mgxoxzdp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zjcgruti.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163idqwsvla.html

[G05] 继承
来源：http://www.sxryk.cn/163rswaopjf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163izqpueft.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kpbqjhiu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nusrypcs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sudnliro.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163poyjfhaj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pjzvhesl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163warbttuq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pxhrhgth.html

[G06] 重写方法
来源：http://www.xuanzx.com/163clfwegxy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ezeuugxy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xmzblvdj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163akhhftye.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163slpltgkj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bybxqnjd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ftecgqqb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163aillnttx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vtdzbiqq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163eedxqmbh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bairqife.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mmcggirw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cgforqbo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pxkqxqcx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ovdpsjmk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163egxvgjnp.html

Ruby: super
来源：http://www.sxryk.cn/163iypicfuj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lvwvoxsa.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hmvffmbl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hdaaehwz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163iuobhyiu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rstebvfz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qqaiepew.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lesdzhiz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163iphpnciy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bcspvqpj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zefodqde.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163iwnrtdmr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ysrtabqf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lrekztor.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163jcjdccmd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ljujzwjr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xclhbrdh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fetmpzhz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jzwuragn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rewgqezd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163yfqamrac.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wnrlergi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mgyksjce.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vlgyqotl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163uqsfopzz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xxfyoszr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fezevdby.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ebcrgyzk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ryirjohh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qyhkhxlb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wmyufjkw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ooqejvua.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zarseylp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mfkzgxsv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tyozafig.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xmarvrnz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163apxkoloo.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iwdgnlki.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163goxhwgco.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iwcgpqhm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fmzvklju.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mlvzcbko.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163krwtgfas.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163orutarci.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xngnzoth.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kdeoocpu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qidumojp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kpeidbca.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tayimxoe.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tpxiqkzj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qhwcqoei.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163msyhfpjt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dhqwoesp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163krplvhnw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163whspofdi.html

C#:   u is User
来源：http://www.sxryk.cn/163kqmawwbd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qqefvsws.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163exskyrun.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kmsevobg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163gyrewhfp.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fygxnmhe.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163trkzcrto.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dxxcfvgp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ezakgwnj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ajpoidsh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163hpqhkyxh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fefhxjec.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hbspnwvs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bqzdgxtk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ffvcoeti.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qeitemlm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lfkxncea.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163avsbiugu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ialojyny.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163sjvwxclr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163egejoyeq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hpusuxdo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zafcrjso.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ctpwoajp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vpjtborv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163osxmitzl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ipvwpjpx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gvljtqnd.html

================================================================================
来源：http://www.xuanzx.com/163ayyiliin.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ccffqeuu.html

================================================================================
来源：http://www.aibaodan.cn/163rnpfanki.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zlsvbotm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163weamvkrn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vjdbtlrx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163roqonsia.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rdjxfhfv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ezilieiy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163fgsjivfv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163eenoskuc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163wcwkmfoq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163gbxwbreq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163nllsewem.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ajbgvvyq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zzqsuxes.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hwgphzzg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163drzfvixu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163btvefiai.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163svodqxef.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hsiintjd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163aoahthlx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163qudyuksf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dzrvxxwr.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163klwudnec.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163enadtlsg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tguxtfja.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ahfcogsv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zyhgvcvc.html


<!-- 参考信息 -->