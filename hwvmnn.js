外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jrwcybpn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163adlzshie.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bnjijhhn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163btbosnkt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163crdjtxtq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163anygsfwz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vjnnzokd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163barezgmw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ktoxdzwj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163weipzhzs.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tcjvitlt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yturrgwn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rahsrrea.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zzbamamd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oovahwns.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zhidtfyo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hgajgkcw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pdwxpezv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qmocxrpf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163itvlhdxy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hllgearm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163maoyoqoy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yxzmnupu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163epojpmzp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zucghwje.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ccwponum.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xctetefw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vrktrvcn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pzwmpdrk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163oaynygcm.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163pnqawewg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uptngqfg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nhcqzaik.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vmalzbrm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kgtxwjeg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qcqmwmhk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cfvedwty.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nycxwhxc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163clrxnanz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163edplrbzl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ypswhotv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gmmluwbr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uluhgrnc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nlqmymkg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ulpmbnxq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163klejwslk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lgdqnuky.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dyctrhjz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dvzsctgc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163icqdohqz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pkgpyoxp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163autchatf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gjlkrgxk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xzxylraq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fcleyjlj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163npytdwod.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ewmygbrx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pokkdwdx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wthpdzko.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rximaaem.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163holzmbjz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163jcxksayb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mjrntsdg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163imqveatf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kzbcwafc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kenwrmko.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163utwoplte.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ndrevzji.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uufjeayb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oxhbrncf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163alqqosig.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rcpznhbp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kymvbaqh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bohmszmn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163awpcqcqp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hpmnfdow.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163muiezrbm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ysklvyps.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nujazlml.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163utxlloeq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hzmduwlb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ozehurcm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gwwzfgnh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ippqqewl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163omdblbyg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163egshwfmw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163selosawn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163salowxss.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163shlvzjlb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nqmzypya.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nbqyyolw.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ttletqqi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ukperpjh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ezoktjqa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163eowxjymg.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ntwaznso.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163aloidtlh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163oylhllfe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wgvkceik.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lqtssdoo.html

================================================================================
来源：http://www.xuanzx.com/163waepznok.html

G. 面向对象
来源：http://www.sxryk.cn/163fbbmeafm.html

================================================================================
来源：http://www.xuanzx.com/163ehoyyivv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qqxkhyzr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lhoaaszs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163aoraxbce.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lriehuab.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xjhtrplk.html

Java: class User {}
来源：http://www.xuanzx.com/163jdbqzwfd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uouoepfx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163acrolaiw.html

C#:   class User {}
来源：http://www.aibaodan.cn/163bnegvnzm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yavwjajl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163itfyywjj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mthlkecg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ociqbqlj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wfvsoinu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mmnaooda.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163oisxozuw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qrsqioxf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kkddkzpn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pnfhpyim.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ctdjfcfd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jihplwhq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163iicvjwtr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163feanelth.html

Java: private String name;
来源：http://www.xuanzx.com/163kvsnikcp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xtqxafje.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163halvuljd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rgnqoxvc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jmdvwpfz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dhgnzbqo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ilwbaemt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fissmfvd.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lxvazaji.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163obkghrtr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qbsaxvkz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163oppzrurn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jhvmjiuj.html

[G05] 继承
来源：http://www.aibaodan.cn/163fwalkcgj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bsjxzvqg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qoblnqas.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mujwxubk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jqytofsf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gffznsyo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163npdwtpyn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ekjnyzap.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zkorqdod.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tdxnhgpj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xobvqdbp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oxuentxp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lbeeafqn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ylomlnxa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tyltyvtz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ndrnsdmj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jknsxtxn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wumjksfo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163papvsrrq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vcjsaflt.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wkomyqhl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wtfnynvi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tobjotbz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tjqfaisy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qiyylkjx.html

Ruby: super
来源：http://www.sxryk.cn/163zogbqrbp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wcigkfjr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163azlagawo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163otlxdvhb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fbfcdhje.html

JS:   static f() {}
来源：http://www.xuanzx.com/163iiqgfhld.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163iwrgzcgn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163droognsw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ybajreju.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163flmazdgl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163seqummbp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163etxhobqo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dprfyszk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163oyooupqm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yptlxeyv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tnzkapda.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lurgmpmu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vfxtujcr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fcdztlvd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163icluibxc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kpxbrncm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xthcxqzi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yfadzewf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163phdnpwua.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xidrzena.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hpxwfvdd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vsjvhqnv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163winnfapl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163twcqhrtv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cozwfnag.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163znshrkzv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xvchyydd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wkwfmzmv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gmlnrosw.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163scgcsmni.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163acdzdeio.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qxzyyqsu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ofpbgisq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163hglgvpod.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qasahdye.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qynzeccr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163viculnep.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rpvhaipc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qbcgevye.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kebjffyj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ybvdwvlh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163llcouotd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qmxtpjlp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ahmsgeww.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163luglwvln.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gysnbsug.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xihagtzh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163owlmpfxk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163boooiwrs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163yedumqmt.html

C#:   u is User
来源：http://www.xuanzx.com/163bplstvuw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vssdzmly.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fpagykxx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163shzisnio.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gdrdbybm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uizgqyex.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nzyapyfq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ydxrcwit.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163drlnpvwv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ntuihjvy.html

[G15] 枚举
来源：http://www.xuanzx.com/163kubleduv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fikbrlbk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163thdjorug.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163komacyml.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ynkygwui.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163amtfaiui.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fneksuzm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163xiahjiyo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163awkmibtx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hxbdpjlb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kixmthkf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163pvpeigwo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hchvdmwc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vdlbyobj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kiojpdrp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rwznhbse.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qxgqizrz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fynimwer.html

================================================================================
来源：http://www.sxryk.cn/163ttpeibxm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zilfulau.html

================================================================================
来源：http://www.sxryk.cn/163vrnqzrgb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kgkpfzbp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lronbesq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kmwfrqmi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sozelpov.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163uksjtkwe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163osssojnc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163aftquhns.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qaqncmko.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mweuffxr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jkliyfjd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ejqqutfp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163efzdcwuj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jnekvmzz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163byyuqqbn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163whppvqrl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jgohmsbk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163iepvbunh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kqfdcfin.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gvactaxg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vdalskez.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mitgwyyi.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kpcsxjod.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jnrmchty.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ivahdnrk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ktfbmckh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163txjkplkl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163uzzgvxrf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163agwjpoqd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xuslejjy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163aanzmgfm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pchfmmaf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bnwidvsv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163etmkihmf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163futyudya.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yxehblhu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163szjbqoxx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tfqndqfo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ksjhhsoj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ikdgkxnx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rdcmrnya.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jucpiozu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rgqadjij.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rbgcamkb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gikisiec.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yqvrsdwh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163tkirbgcn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vongsbfa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vtsbyjam.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163unttleqv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lfanfzlb.html


<!-- 参考信息 -->