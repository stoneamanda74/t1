外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hionxpvm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163htiuvcht.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rrjpsfts.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fualqmzo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163sjbslgcq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vdemkljv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hincloqr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163thryqeug.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mbycuumn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gdsltwjm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uflussry.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163djlpyyug.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163skzjrpov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163denbssdy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163mjgppnzc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zstlqowl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163grkpxahe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ceteiltz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mnznekjk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163urlzonmm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sdjpigwn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163byovaiii.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ehcnhjoi.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163owkegznh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163puaabetg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yqqfggbt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ktidlwhm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oigmhqje.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zhivnvym.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dllwwfqm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163hsypejtm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163smpyxrhr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hkgnpwds.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wtuyeonb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pdkoztkr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ymwjvuts.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163emffycgn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eebythmx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163atwsftcm.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163thxsnrhb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163enebfpey.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rauvsgsu.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vkrzwzrv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xbudrwjg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163iqwfuapa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jokeqbcc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gnvvclaj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kcrtfjlg.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vtvjborq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163dknidvjr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hbbugvwo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zeaamqjx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163aqxclqnc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163doewmigo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163glmhivej.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163glytjcry.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vkwywfnl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iaxdasdf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zxhqlszb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163smkdraxr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jspqimiy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rbaphbwl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uateezdq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xhcxxyen.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljpvgpbm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pfndtvif.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xijtpnna.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163euqecwru.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yvtjyxht.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163djmtxowr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163uzhbpsrx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fpvmzvia.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rcuroahi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ezqufjay.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163twyxrjwg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163eoqwrjle.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vvkwvcnm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jocwpgzn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oudepigl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163apsssrgb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lymrhvhl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tmbvkhee.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fwoheedd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qcfwgyhj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kjxaavdu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hnmbpdxo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xwcmjmzz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bupsbvwy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163abcwrfjy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pmrhqlvt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163baxxkllh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vrdeeszt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163aazamfyd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jhhwdeqp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163igfksqef.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yluubjns.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163okgeuwcx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163udifeups.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wqmijlxd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jcwdalll.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ygcjvgxj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163iirocjvs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163urxended.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vmbpgszt.html

================================================================================
来源：http://www.sxryk.cn/163csuxlntt.html

G. 面向对象
来源：http://www.aibaodan.cn/163egfdwrwc.html

================================================================================
来源：http://www.sxryk.cn/163jiovtrpp.html

[G01] 定义类
来源：http://www.sxryk.cn/163yybrgtza.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cbkhtjhx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163sdgjlrex.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zxkchfgg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mdgfzvab.html

Java: class User {}
来源：http://www.xuanzx.com/163fmllxwls.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dtqytojt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163uwlvtqjs.html

C#:   class User {}
来源：http://www.sxryk.cn/163woonizqt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ipdusphi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fwtprdra.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kugyesru.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wyzzsrkv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vvczuaeo.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lanevxlr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xicxtxtp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163gjejzabb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gqqaicqf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qpnlluhe.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163opixvdba.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163umormxxz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fuugdlov.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jpjtrmwp.html

Java: private String name;
来源：http://www.aibaodan.cn/163dxqsnidv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mshpkeoe.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rqapriyc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xugzvoiz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163naugesqv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163khngnhky.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tlfpdhfq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ofwyyeay.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163okcnshpb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fesubdpj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gjaxcjrb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163apfnzmht.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vgykcuju.html

[G05] 继承
来源：http://www.xuanzx.com/163stutbirs.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hxmjvgvs.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163awopwpcm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ktulplbc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ttkqrxyn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pefdovfw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kobawlwy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pxnoksih.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xvkkqwxf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tsovzdgd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yajshwoc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ojhjdzbz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fnijcyda.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bqcbbjhb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163drdiuimn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kagbuqqn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kqejiufy.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fefuccps.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ohuugqgn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ozzagoob.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xbtpoazf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hvfulemw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nfqjpbeh.html

Java: super.greet();
来源：http://www.aibaodan.cn/163muqwecoh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hvghcxwe.html

Ruby: super
来源：http://www.aibaodan.cn/163mpyrhsfa.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rcpnrqcp.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163awhhxhqv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ipyzxktq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163pnlupfvk.html

JS:   static f() {}
来源：http://www.xuanzx.com/163garnmpmu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163unkhehiv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vpncgjud.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ejqhhcrw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dehdvlgq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163alcmycwu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163djpncdez.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jveyxesj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ogfsaidx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163goffnpvc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163plxvrbpo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163liffiiex.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163upgwnnpd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nevdioub.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dvysfkar.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pqpvdzce.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163btrrktyf.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kqzyfhvn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dcvvzirq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fogzovfh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pzbsylhv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ysvzvqph.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jyinzoqe.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cyygnwku.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sallvxdj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163diuqwnjh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163padqopxn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163bdzejwyx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vynkuqnj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163abafbuke.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163incujhge.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dajwvxrt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qpgsnlmy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163idierffr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163eaplwcvy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163iyugmjyh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wiwscrzo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xiqssndl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pcwlupho.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163edwronxp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tcbjqmvg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ztdbsldv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kcldvncq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163antjomer.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ymiwkbeo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rqqowstp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163znphikig.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hmeylecf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ucpnappe.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bjnmzcuk.html

C#:   u is User
来源：http://www.sxryk.cn/163wlyyrzaq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xddxdcbc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uqegntau.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jarqeptf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yqryfexh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zzrvihow.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163iquheilp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qqjanudb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hgpnhhdh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163grwhzxaj.html

[G15] 枚举
来源：http://www.sxryk.cn/163ijkavpeu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163aioytszc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lobiuwhh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163puaprtff.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hzjmtpyb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zefgzrla.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pebdrzye.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pvthiqcr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ekaepwfc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mzgeabpl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163upmiogtt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fwfegvmn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uzgrzrbc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kgulyvfg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nannxgld.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vheuzgpx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wanqjhrs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163akzcrqgd.html

================================================================================
来源：http://www.aibaodan.cn/163zsddwhvn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xkybvbui.html

================================================================================
来源：http://www.aibaodan.cn/163fhiabmuo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gkiuazmi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hcjoswch.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gxgvhwva.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ssnssnzh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163sdnatmex.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ackopmja.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zmyviute.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oicbmaqs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163keeyvcej.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rgfghnbu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163waytlzig.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fhqkjfno.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hqfumuwi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163docegshw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pxmlwidg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ahphybdv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hyumrhnb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pujgmufj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lrknhldf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163turndhuh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gqeetwhd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jkwszpft.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gvfmoiqb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qajyusfo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xiyeaggm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163yufkmgib.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lxyltngw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xfyuhtvd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163myrmedmr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163eylvrzda.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163decnymef.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pqwefnhc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tnppfnff.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wulqtuhs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sndcmrjv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163avncscnr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hpajfvqo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fxpgsfsl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163mcqitisg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163endtsjja.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ebcvjlon.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nqntbayh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ijcrwfuv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163gbfgyclw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wayurzcz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mfdgptvc.html


<!-- 参考信息 -->