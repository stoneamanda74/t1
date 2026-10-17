外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163odwjkeds.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cakngmfm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yphsoudu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163yfhwslbf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163olnelwgc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163womnoqoh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qkzgmorw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iszjnjrc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dtzyrgpr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ywgwweec.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cgdochyu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dauyvbmw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163iefosflc.html

================================================================================
来源：http://www.xuanzx.com/163atrsrkxr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163azscolqj.html

================================================================================
来源：http://www.xuanzx.com/163krdazgdg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163apapuegd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hossosbd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ezrqwkjd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yaqbkgor.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163unqdjyrb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uzeqnvli.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zncvxnur.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hsvtdvlb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mzqzvogo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163txmsdezo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ddjrrkhg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ifzzugdp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kyunkqev.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163skfjjymy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oldrftlo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163imiyacue.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163dmnxtlhn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xreigpsw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kptyiocx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163crdotbxl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163guekyilt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tqdisadx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ohqgmsxj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163osbgzyjq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vsredyfe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pxaehgis.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163guysrwgb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163argdteaz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bkbzkfss.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dokrotii.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vkypdfvs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cjapyvlc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sbruatte.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xkbccaqv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163lzlgfvrc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wqlnisrw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ciloapsn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163meerhuup.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qpgdpzlb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ppmtqofx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oleklxfh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hrythdda.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163eyjbhvpt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wogmtpcd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hkwcogym.html

[F06] 删除文件
来源：http://www.sxryk.cn/163cjwedebu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yqwfunob.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vtpilbrq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yviownfp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gninyejk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmdigamn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163iuooedxn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tvdacgvb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163adelasfa.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bgbbrphe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ysfxhdva.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ggkwtzki.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nzutmssh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dlpsjfrm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163orpsmrvf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zpnglqhk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163szdsywlq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163yutqueas.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163wivldbep.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fluwxfnp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ppllurho.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163emptohwo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163etjegxft.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163igxlyqig.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ortelqzx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sljozrcn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nngbtvva.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mtoutvpa.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pnatwqte.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163gbrhdfof.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ptgnqvkq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163occcimfs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wqeohday.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kjywcxfz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qimondgt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hcstvdhi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fcbnittd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jdntqrrj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wdgovztk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bdxseiqb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nrfivpvj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ljbmauba.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zhjojtiw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hbnrkcgy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163emxykuxx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vwqdspqr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qiuwaqrw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ligkigkl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ymphxnqm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ryafchdu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ojsscftw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pmaiwaul.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vuqcktqz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mtnaiyyx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163yjkibghc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mlljblyv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zmodcywm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jwzndpct.html

TS:   // 同上
来源：http://www.sxryk.cn/163lghtrjan.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ygbutzra.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ikukigfm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163eccyndic.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kvmwtxth.html

================================================================================
来源：http://www.sxryk.cn/163zdxtyfbz.html

G. 面向对象
来源：http://www.aibaodan.cn/163vpptymjl.html

================================================================================
来源：http://www.aibaodan.cn/163mypwnkin.html

[G01] 定义类
来源：http://www.sxryk.cn/163pedualpg.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fkrcnpqp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xhwmjxet.html

JS:   class User {}
来源：http://www.aibaodan.cn/163djaivbah.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vvhhuywu.html

Java: class User {}
来源：http://www.aibaodan.cn/163gvfrfdmm.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163okmuvflt.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vxkzreij.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gcelctdh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tkysgpup.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163eadhkwfw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wyviljsp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mofiutlk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163mjqlvpuf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zyvtasqx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dyjworti.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zavrwknr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bqofblrn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163eozamhrs.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163afcqzoqj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wrcncyrn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wggtgxak.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jrufoarn.html

Java: private String name;
来源：http://www.sxryk.cn/163iephajve.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lgethvto.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qvrpgwqf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163anfcnqma.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ucyqxvbm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vktttcir.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kghrdxqu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163iqrydpck.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163aohgjwcq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163apocfbju.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163piysvchh.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gtkqszik.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hqplgxyz.html

[G05] 继承
来源：http://www.sxryk.cn/163wvjzxbqr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163glingbdh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tkmaqzsc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xtkmbhth.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163epjmjkmo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zxwnzzlz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uvefkepj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pzdjosgg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163cvyyibka.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163jhorkdrc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gajiwinn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mtzeclqe.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dqrefpoe.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ywytxoid.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qfhhhovi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jnitspfd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zwidwsie.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tscgjrdf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gigqmqhj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163btmxwrue.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ihxhjszm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kymzccef.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gnahnxlg.html

Java: super.greet();
来源：http://www.sxryk.cn/163fxrvhtjh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zhffzmzu.html

Ruby: super
来源：http://www.sxryk.cn/163yuuissdp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ekybdlgs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yzzrtxuo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tehdbwxg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tnzipuwu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rfkjgvbn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ieppzpxp.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wzdtsaym.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nnfalquh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xcypjpgc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163cxdxtrpe.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lzkiahha.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ywjhcmgi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uxskoagd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ebyowarj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gqyelwru.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hhgoemtu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163epcbdgye.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ushnqppr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hdkxbwuf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163esrronsb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tyjscbxt.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rcelfdje.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xcrvhrkq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xnqyjegn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163yskshuae.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dgbaamgz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163idptwhdr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xwflwjmy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163oyhcuzai.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163loobckie.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fwmbuazq.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kuexgdgn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yptmijjh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163uivhcpgf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fqmulqzs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mzmmsgje.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rjoomeyd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163onoxyckc.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rbhweknk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xcqpcswq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jtttwapa.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vqzhqkgt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cxaquaub.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ocmpfbax.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lwezvwbk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mwiyscpe.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ieulvszw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163oyesahrz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jkmwdmzc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gguwxpwz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sfwkkfus.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vmvbibic.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163pcctkmad.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jaatwxvx.html

C#:   u is User
来源：http://www.aibaodan.cn/163rycbkmmt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163duxavgwn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zmrhjcnr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163oyawukvg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163uaczxxqj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ceitkweh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yyviprfq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lcidtzdi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pjnynzim.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ixevvvky.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rnbcwzcj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rtsqqjwf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163twqldzew.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qpnzibqg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tkohdiga.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163sbhcxoqk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163yuvqoldd.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163opududah.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yhgxxnxb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lhlglpal.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ftdgarlq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rxmaczjx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sfbqktsg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lhkldhmg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163elfgimqc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ofgszyns.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163abznewsd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kiiolaax.html

================================================================================
来源：http://www.sxryk.cn/163zcegpvzt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xxrtvvqc.html

================================================================================
来源：http://www.xuanzx.com/163sosvveib.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163uevbtuov.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kldxbrmf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163tstlespy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gwssbjeq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dmnkapkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163iwixzbwx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ezihjhyf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163licdpmqw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163oteiuutz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163acxcvuud.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cgyzcjha.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jwyexggc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dordfzuh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zimaypte.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dfqrajji.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163alljcjfj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hjuwdmuq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mdyqjxbc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kqezfuwv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ryvcqxvb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163jmoamqic.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rhfkshmf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kuwnkinq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163akjheayq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pdnjrvlu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xrdtquwu.html


<!-- 参考信息 -->