外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163yuzqqald.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163lhjfeymf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163otltvrar.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sttbpfzt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zrryrjgx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tjmtgfjt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163juobuaaf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163prvajhui.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kusjgjpw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wdumqant.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163whoubtlz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uvanfytw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rppsqoqy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vtoeyjyh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fkljsglc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ccclmuxn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kqzbwdfl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163aynhvrjy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163daymprgr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163wuvzemal.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163asurqtin.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ujilwjac.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bhznhswl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pzukgkyi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gfshrhia.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zibcbhht.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163giixvsze.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qfwarpek.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kesxcpbs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ufighczc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dserproc.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zqufluqp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hyfyucdn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bhbhykjv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hrosrrfo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ttwwtrws.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xsysyrbv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dqgiyucs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rwjtslcb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163giizcfag.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pnovqqcz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hzigpbor.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rpbouvgo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yaljztvn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163uougthms.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oaczagvu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ogtkxgok.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qbqeragi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mcqhoarh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ujyhqakh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ybythdjr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yuggejwl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ohwgwffk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xzvxbdwp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kzcmwobb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jgprxdfa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uaaelvhm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gvxmmrlv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oxpctstk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163agwomvpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ndnaoiaj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wktxhjki.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163huujdaqp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gdnaibdt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163unpaxmqb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rwmnwwgp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163iqadasml.html

TS:   // 同上
来源：http://www.xuanzx.com/163tozwcmrp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tkzanjti.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ptetshzd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xkafxipf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ollupfnl.html

================================================================================
来源：http://www.sxryk.cn/163xuoiwerv.html

G. 面向对象
来源：http://www.xuanzx.com/163ofuwumnu.html

================================================================================
来源：http://www.xuanzx.com/163btuwgzqv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163taolomjm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163feimenzt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ulcggcxz.html

JS:   class User {}
来源：http://www.xuanzx.com/163cfffdbby.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wjazffzi.html

Java: class User {}
来源：http://www.sxryk.cn/163nafniebm.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hfdhywio.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163secoocic.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qofncoii.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ihhhncvu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mcqessmt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jfmnhgib.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xcstruqg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163whfoquee.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fdpqplgr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cukiztxh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pzgsavqu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wntzhcbu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163howacdyf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163adnbdeom.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kqqmkqws.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sjndnawx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qijbsele.html

Java: private String name;
来源：http://www.aibaodan.cn/163zsakirfh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163keqphwnt.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163whufxclc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sphhkmuv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hpygjuff.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mxotojaf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bdpuspap.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gjnzteci.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qixeolej.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yriuqwdn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163irmtetwn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vzduiiry.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lucdazpe.html

[G05] 继承
来源：http://www.aibaodan.cn/163uyhiwxkm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163emzpvcoj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wzbnzofa.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jbrbzawq.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xaqzknui.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vtigmagl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hydoxlpj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163rdyrtpsf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163enapqsjc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163azftfwiz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163urdujsrd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uskfbmep.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xnqwkngi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eiqlxtgv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163enwtrakt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qagsbrxt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163szvxdvrg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vhjvjnax.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jupusxtr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163eaqwlseo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cpmnehkg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fizkatsh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163eubnyryc.html

Java: super.greet();
来源：http://www.xuanzx.com/163dnnadzvd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163llhitgcu.html

Ruby: super
来源：http://www.xuanzx.com/163awsnzqle.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163pzkbmbqq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163bhiyjaka.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163sdpouacs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163arxuqgqj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163otjoltgb.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163shdiapzi.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qvebiqao.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163orpqqhla.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jgubzjdy.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zkcmgxeg.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dvrsiwzg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163eekbfvuf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vatdbbjm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lpfvaqgb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hohytvnm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qzniviln.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bbokjvgz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rozkxkka.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kkyaqfck.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vsfbeybb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cmhbnbda.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fqhphyqo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vrfxnbdr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wjjvfmnd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ybfyljrn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bokxgjkt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163phpibdlc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mcupqjvh.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ecmnvisb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163pwflycux.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hqnlgxhd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vapgqfay.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163yasumqil.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163oweiafcr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kvbpkcui.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uvnmmuut.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xpszzcqf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ejdkehcg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rnnqgdgv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wxonltww.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fngndvxh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jazsadap.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jytvzywk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ldcshovh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163agqyqlxc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ovrzkanz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ygxwldth.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kevmthzk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nfoyqsvm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163onnmdubq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hfwrnril.html

Java: u instanceof User
来源：http://www.sxryk.cn/163trqbnkzp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163anxidmdd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cijfmcph.html

C#:   u is User
来源：http://www.xuanzx.com/163czxyyevu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163svginxgm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pwjugrtb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pfndaawi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ieannovf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wyqvsppe.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vicbizjv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jfqqrhdg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zqvnpltp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hbwepnnw.html

[G15] 枚举
来源：http://www.sxryk.cn/163jzfetnqq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hytkkqpa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rgwcqbnc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vlzmesbv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cieboqsd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ogwxunrw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dtvhgpro.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vmitzvrt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ozbmmrmq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bwtupefa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163nbfzpawc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wvzzyfvo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rpilovjr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163npkgqrgw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tfwmeucg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163utqdclqp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cldwgyfa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sudatvxc.html

================================================================================
来源：http://www.aibaodan.cn/163ostxusxf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zhnqxvmn.html

================================================================================
来源：http://www.aibaodan.cn/163psaclusn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yktthndy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sdvegaaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ditaojdi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zdtvvzta.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fcxczfus.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ylbwuxtg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ekbcdwfe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ccpxgdmx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ufhsowjh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163aadwsqki.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dyqoacar.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xmiczgwx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zzuvkora.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xatdmokg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wxyasjvw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163erprlzbh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pgqokblg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163toqtttyg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163icyfhpvr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pvlyfwwi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sbeuzqeb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zrjeposn.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163irofidxn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mxxvybmw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ufjhlffr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lfjpbvdo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163fofgzdci.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bngezywd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zswsxxhh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163lrxnmtia.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qdszplyj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hjmwlych.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xbzhlfcg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mqshnnkf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xoolxgid.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yetysgqy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163brdpgfjb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uwwytmwc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163yxhzdmbg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ogauptrj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fbwqjslf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163oxloquey.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163pcabfaaa.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163vtyrietw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yktoebpm.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lbrnshhs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ufvkgqmw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vlxlaiua.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oqbwlodb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fwuwahug.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oqqbbgtg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bovqjcqo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xalegrym.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163duddcgnw.html

[H07] 断言
来源：http://www.aibaodan.cn/163lmltcfpo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lqdxkcjq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xrfensia.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lupfzqbe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pvxvmnle.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163snvqxdsa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vnhldemk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nlpuhdvf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wszzjhqj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sovaoper.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xdgxecxe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fowaevrz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163orpbmtwh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pjltyqvg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nuygwjmi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163piddrpwu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ypyoaseq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mxujponw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iynlbhwz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dfzusoqq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dluxktmd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zpssbcxh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163iotysppr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qvlhbljz.html


<!-- 参考信息 -->