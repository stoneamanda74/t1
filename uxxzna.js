外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rewpzllg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nezkarox.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rfnpzefq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163xdimeinf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wavdyick.html

[F06] 删除文件
来源：http://www.xuanzx.com/163orrjhvlb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163unxhxwcs.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163cogiaqts.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ctkefbkx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wmfhjojg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hffcnyoj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163keebzbpj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gsnmvyxt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cspnvwjh.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163grzrptli.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163axgayakp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163didukoyt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dbkodkhb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hqzotmvh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lzgopzuy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mlxdzezr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gwyyfzzz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jevhbedu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fwitoybi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163psjalppc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ualkhodj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wcvkhzdm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163syybyevn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nlphqprj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kcxozzei.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rzgefbob.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dhfepcbj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ltfrsmbf.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163sxstetxh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163irjfmruh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ulpvwkwl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163opkexoup.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lbrsyafb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rlmmezit.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ipapnkgd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nqwwsirr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163qwyeacjb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vhinqafm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gvikltdb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163trfgdwwu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zbibjpfa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xedtofks.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wvptxmvc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ecqfvaib.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cabtwdcp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163sciokhju.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pyvojmlz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gwrdlvvq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pttltoho.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qenugpez.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rsjfmwsd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wlnntiwt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163howktolj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rwkfhffb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fckpbeak.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cvdehpoa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163erezkuhd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mfoqplij.html

TS:   // 同上
来源：http://www.xuanzx.com/163iulgbkka.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kvldmjet.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gtcmfzzj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163biqjpkaq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163bohpyiir.html

================================================================================
来源：http://www.sxryk.cn/163ldaipwcg.html

G. 面向对象
来源：http://www.sxryk.cn/163alaadokx.html

================================================================================
来源：http://www.aibaodan.cn/163amqvysjt.html

[G01] 定义类
来源：http://www.sxryk.cn/163lizkqmvx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163osmwqlmf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yesqjtwh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dydxzkqw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163dgzlsxcl.html

Java: class User {}
来源：http://www.aibaodan.cn/163tbfbtwpz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xcidnpdk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163reshrlbv.html

C#:   class User {}
来源：http://www.sxryk.cn/163izhbxyam.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qpdvrdpl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163msdhvaqf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dslscuwy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rqlbwegg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tbnzwjty.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uuucgvos.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mcyzqpmu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rkrpnyro.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rxmlpkeg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xpkkoqyy.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vuuhctga.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163amdrxphd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163foddbssc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lvgnuolt.html

Java: private String name;
来源：http://www.aibaodan.cn/163ijzomufp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cbaagjqy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sdubaily.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nizgxtyh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tgvlznlq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163uimpyhft.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rlzgoldg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163embsxsws.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wbauijeh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xxsolcep.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163musnrcti.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gcvosnvp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qdlrqnxk.html

[G05] 继承
来源：http://www.sxryk.cn/163cicyazzp.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hkeualrj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hgpobdrg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cwngsoso.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zhjcjpjv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gkvkcxva.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tzqwhxiy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cqhdpgzv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163oocznmbc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vbdqnzhy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wfoxojqu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163amfziutw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fuajlfpb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qxrwbwda.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fyijmiii.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163diqjkhke.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163evcuenxt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rzogurpv.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163euskjcqm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kvjtkveu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dhxjoxgk.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nwbsjxwz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163obbvnpiz.html

Java: super.greet();
来源：http://www.xuanzx.com/163mogeqgoa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163oljaqwnm.html

Ruby: super
来源：http://www.aibaodan.cn/163jknfkkri.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ygwjdifx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163faoplfom.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ihivikgr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wggjxfqx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zksukohv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ucnzrzqe.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zmnyosin.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nxexcnev.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pvygwpdp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wwvthvxz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163eogrrqwy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ikrlonoc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gfuecdir.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163biukqlqc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163yukneicz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gkncsekq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163luogtdpm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vexmxgsf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163pdybncne.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wbgzbfcg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163irzidlhm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zikowxrb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vhspctux.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wmcvljzn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rwdoexzo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hzuxvmbq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nybbbhco.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jbunbcka.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bufsvabz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vffkyooa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vgzkiozz.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fzlqttau.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fannzweo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cptnfjtg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pyetusph.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vzyrvjvf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ecnnujbm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163egoejtof.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ypqqlxyz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bxtwujov.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vanjxhwl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qtmkazfi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ipdmaljr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163oqxjlbmr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gdweugbs.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ayynbquj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kipyduut.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163czuguzhn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mvuttzsa.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xpzzrgwk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sgpbjual.html

Java: u instanceof User
来源：http://www.xuanzx.com/163oauqshwz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eighptdy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ohbmwezn.html

C#:   u is User
来源：http://www.sxryk.cn/163irzpjnun.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zphkcqrm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oipviotw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qayihfgu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rpsqbkwc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yofptvwa.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163drdzrnlx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163eminfuoe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fmznqmqn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zovzctyq.html

[G15] 枚举
来源：http://www.sxryk.cn/163ezhlgobo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bdemkfgl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bjfubeug.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cggworck.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dcpwfecx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dehzbgdn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tboqzoxq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wakratfk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ixetmjeb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jgccctum.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wjtubwez.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mkqgcxar.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rgaextmn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nszenetb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xxytaqht.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qonezjso.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cqbawwif.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163yoibqgws.html

================================================================================
来源：http://www.aibaodan.cn/163hchaclxn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lvidwdrn.html

================================================================================
来源：http://www.xuanzx.com/163bszzsdod.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jmjufjtj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yilzxmpk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zbgbbjvi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uhtgqynf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iauktpmm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qoxogwvx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163leuwpyht.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zccinvom.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vwehpknc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hwfaavcn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xfzhqqkk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ayodklme.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xeuiapym.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yzvkgqqp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wtthgyee.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wkrggqze.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zkedhcgq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163abnforbo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fsuktpgv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cxbhsaer.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nrhfombt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jhzfatrw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rgxdkyyn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163osdftlto.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dqxtdjzx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rhclrofd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bgwulidv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cujaamif.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163auqkxsjd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163pvxflany.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rjgwbhlg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kpdocvch.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bqkfkfyc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tranqtgu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163aqdynwcp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ncmrpjoz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mxkjfqbp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pprhoplj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ssrcfutn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wusjztwl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sqdlhsda.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ecgxnvjk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163isyvqwje.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hmoqkorj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bjwbjces.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xjkzenal.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nzkrcnbi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163stmlzfaj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163spkopyqy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ysvayypc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pvglklcf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ehmkzpob.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rjbweeff.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163izirxvhm.html

[H07] 断言
来源：http://www.aibaodan.cn/163dflouwpo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163acybhipm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163njeabbmd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hqtrmshe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yrtdyyjl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xmeodacy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kdtmomfa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163toaapkjj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vbbcbode.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yudcnmhe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ylxgynnx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rnqmrspq.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rtvrvyam.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dgglsdak.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163iyrjvotr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fgfynnlz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hrtculzo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ozjngzev.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163xylvbbzo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163speccpaj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yhvspvyx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nmzcxevb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rsqekllr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pynkxxjd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163heinxhgl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vzjkzkli.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163pcocgqju.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zuhsafoe.html


<!-- 参考信息 -->