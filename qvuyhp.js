外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dlrhhlpn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dgfxjihq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163smiepzfc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vmsrqnbe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zfrvsone.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163djuikhgg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tfbtjahw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ouelacgm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163okatlskf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ilqxugva.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163iffiqero.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hvdwsgur.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xuflxuzn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pretwcqc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vraxwbom.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kibeagbw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163oxjounsi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tkfbvcte.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163eywuoeul.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zicitvml.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163rshrkrvr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vmkuxirf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kvhqnnzj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163abjkaraw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wccjebbe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vkslmsli.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163sgpzvwzi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163dgpbkfyg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163shybgncv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bbicneij.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qtesgaog.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163boaflvsb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163djpbpebl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kqxzscpp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cnwucbsp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jqrijorj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gtppxeqb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mpwenfkd.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dbcrspgg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xcoiuqyc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fhzldeqc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cpcgaodx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dejneifj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wbhrybyp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nixacdbt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fqmncbdb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163powtxhfx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qgxfevwr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cvhxzxdo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rivsabap.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iuoubgjw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163anlcctna.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nlacvicm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zofbkdbk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xkyoxhxd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ufqjfcba.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163pemjinir.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163obqnxhop.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jvoimjtw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yxbplhkz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163szrepjqg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vhvnarkh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cxcqtzcr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tfrjordk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163innwehlf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163chuypmhm.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lxdefdyk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xzlrordi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lchzpckv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wnuojwfq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wylhbqsz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fsrexadg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vyuiyydm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163evvgzbmq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oirntnov.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fegzdyiw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aeifhkxr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yoefrtgs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hywtlxya.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zsnuwzge.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xxzgapky.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qqfxfebl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zwcdqktw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cvsqqfay.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163cilxfavw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yazxzdcm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iajtwgti.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oawkajhj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lnukuspm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kabqhhzp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163yokppogj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mttghdgi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lbzesqsa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yefwqeti.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uffykppu.html

TS:   // 同上
来源：http://www.sxryk.cn/163wtulzhfi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163puymathg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163daxynzwt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lfhqrntu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vhznsbgr.html

================================================================================
来源：http://www.sxryk.cn/163ghkadumu.html

G. 面向对象
来源：http://www.xuanzx.com/163nfvpsrgt.html

================================================================================
来源：http://www.sxryk.cn/163xqnagxep.html

[G01] 定义类
来源：http://www.sxryk.cn/163nnguwxdb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tlbshwbg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163huihortx.html

JS:   class User {}
来源：http://www.xuanzx.com/163cexyweib.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wwivfxle.html

Java: class User {}
来源：http://www.sxryk.cn/163tfczgrlp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qyaouhkm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pcvukmca.html

C#:   class User {}
来源：http://www.aibaodan.cn/163etlbbfrb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wbflrund.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vvrotbay.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kbdmtjeg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qzqaoyjf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yktoztap.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163tgjgfris.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cqwexwpd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163elcwnnkv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163glnhnjbi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fvzddshr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163npblhqfo.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jwjecxtm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wsrcklrx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kuwumvlx.html

Java: private String name;
来源：http://www.aibaodan.cn/163tfahiabl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163semuaqcg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wsrgcwzc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uzzbzbqx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zmhezisj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mesqwbhy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163itvygmbq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ulaxkbwt.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ivhpmbyq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ircsgwzd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qlasswsz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mvaqevfc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hpnvhofk.html

[G05] 继承
来源：http://www.sxryk.cn/163ufjkntxq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163axwrkldf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163yilcsfeq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dolgawas.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wbfbmuch.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163sgjnbzsi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163umbmzykx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163kmmlggsz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163yfyaqslr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ltyeegoo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bkyzmrvw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dwvjjumo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163odmoxtbt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ygzgunzj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rnhirxnf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ormljogp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xniffakf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xtdcvsrg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fiaxnatr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163sqxguzhr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ovpsivca.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ztpqlkdt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lgryjwms.html

Java: super.greet();
来源：http://www.sxryk.cn/163pzavpgbu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163xevgoyvb.html

Ruby: super
来源：http://www.xuanzx.com/163zayjpsrr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qvkeomlv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sxlpnecx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ycrwbdbh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163sdzadbfw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163auygxyfp.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fxthniee.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wketwpfv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fxbviivm.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163axofjecf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ewtumeto.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163cwqwobfu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163uhwjjcdj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vxdxkuao.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vqeigewc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jxebmofi.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xhbqbgpk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163huivejsa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ruhttmiv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ghzhaphi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163foyvchgg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hqtzshlj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tbqenzoq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hnwdwovp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qstzoyqm.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163jrrqaemq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hfoedhmm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163axynlhzs.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fqjdzert.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uqfwndzc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hrepkzfd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163isxhtbsc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ylcytehs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uzfcyqgi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163twomibvx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163obdtcfjr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lndcxhcr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gxdcthrk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kvyqwakj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163byukvits.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ljtwklio.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bjapuhpr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qweljmqi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jgkfnxbj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wizrhvnu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lfuesudd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zcomopje.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nfszcguo.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163smevgolu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163idtovhvq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163svqvzbfy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dxzpabtl.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iayivhql.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163crchfbbr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qofcdybb.html

C#:   u is User
来源：http://www.xuanzx.com/163lzhawdqu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zhgedfzk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163barmrgry.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zxqnnyec.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gpqfrlul.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163noogtkfa.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dyfevpic.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163sexhyqnk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xahdbayv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163eoqdhfrb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zghlpbdd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bxhmznvv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163trrbodon.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zkxklumy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kfqprbqx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gusiqomi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163icdjencm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163caltdoyv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163clllbuex.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qpcynkjd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uyyqbnbw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ajmvwcqi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mdgqvdab.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oaegjqel.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163duphbvkv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ajnmqirt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163kiovvonk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sbffvdpm.html

================================================================================
来源：http://www.sxryk.cn/163nehhznsl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zsybaoex.html

================================================================================
来源：http://www.xuanzx.com/163utetuwdf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dbtjgbtu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zrxhvlnr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163fevpbkgq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qzghlpbo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163maennajk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pvvuctrl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163llgljjyt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fzmfyfzj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zefarvfs.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163omsheepo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sbaaggaj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qnhpeiuh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lywyjycq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zmmurjwk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uchbnewo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ppfahapw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163sbzrcbdm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163figgetxi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rxfqoifd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vdjioidu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163krkpshfm.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pillwtyr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zvqoeiqz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bpzovhid.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163pjmtkizl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ashngguz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163gyxioruu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uglcvped.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ixierzgi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bklurths.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vweplwzc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163schrvdns.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kjnmdfmk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163pycluxbl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pzzgzmsx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hyexmawb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163iiibxplb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hbogfjua.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163shudoykn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rplcdtta.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xbzgzdrw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xpnfnwaf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163njpgjfzz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163xuxcrkfp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163isbvqnre.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lrqrwsms.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163sjtitdjv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lglikknt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mvomhiuy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lhkmmqcg.html


<!-- 参考信息 -->