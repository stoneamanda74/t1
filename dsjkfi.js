外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163quejabbu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lpjzmddw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bauigzjy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ygyrezow.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tfcdrfhv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lesclmkb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ypctkmhh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dwibippj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ayixntdh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vnuoxzov.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163czgnncxg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jlydgjlh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163snuxdhhz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xilknggk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jproanmq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163bqzujely.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lwrvfmho.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mophkyix.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kfzxlagt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163oguqhann.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fyaptsaf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ynihmcvk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rnmmkelg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jmwldlfc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163afnxwiqg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nscexgcz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ptzktaps.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tmmcproc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sfrzeonb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sfkvtdpl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nusuefgg.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wvyzjbxj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tfqitzvq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zytelkhy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163cujphfrv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zfrixdxh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dltgiknt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gpumdsum.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ebnpjxdm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163duakrypr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lsbtgfyp.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163yzeavowq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163digbkgbd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lvmzdjez.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yhzwajfv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163omaomvfo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gnuntkjq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mwpbfqcd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nqkifvnm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ipaciehe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rvzawjxi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hdaqetwg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qfwflzlu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ziqflxhm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zuqryjgl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cncezwdl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cvmgvioj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hzqokgda.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cycunhgz.html

TS:   // 同上
来源：http://www.sxryk.cn/163vsfafmfc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vhncfogw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zyzebtmw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163udsvpttt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gqzvzcsg.html

================================================================================
来源：http://www.xuanzx.com/163saeysdzo.html

G. 面向对象
来源：http://www.xuanzx.com/163biqnnnva.html

================================================================================
来源：http://www.aibaodan.cn/163frvrnytp.html

[G01] 定义类
来源：http://www.xuanzx.com/163colewyjx.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163iilktzvq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163kxdhjsjh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mdrfluhw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163yswmocbt.html

Java: class User {}
来源：http://www.xuanzx.com/163nkuadpeq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163clcfsnyj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gvtkfwja.html

C#:   class User {}
来源：http://www.sxryk.cn/163yxefharl.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ksslyxgx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qywgzhfe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163znzszvrw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xrigxkjy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aamhjvik.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163awpbbbgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rzpfkgbr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163smdyudqm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qjfxozlj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163iohftjgg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163allenmeb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ythtbfuz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hdkldxzb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163eltvywmy.html

Java: private String name;
来源：http://www.sxryk.cn/163vjwtmvbx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gwdrftfz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uyxycjdo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163weylauzm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vevygstv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fpudmpme.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uyrkitoi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163udbdntxs.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xpioarme.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163cukozgyj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cfzzbuph.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ozzahjti.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163oosjyoti.html

[G05] 继承
来源：http://www.sxryk.cn/163knhugaac.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hzggurnr.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yqqffwyf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fgiqxjyx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163feramaoq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163teqqxoyy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bsszeoth.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mdgkzltp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163upbimyjv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ajamfeag.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163drisocgh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zoyapcgy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pkfdbiky.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163btbmlnah.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jdhsatpu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hgmvsasa.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lfakvpte.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163azdgvaos.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nnizskoj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163scvvcrix.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zwzteocy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qskqyaaa.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163pogtvbcm.html

Java: super.greet();
来源：http://www.sxryk.cn/163xjssupmo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ynvgufvv.html

Ruby: super
来源：http://www.aibaodan.cn/163irgkqjtx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qikpkhzk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163khrffthr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wzmvkaeh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vwloxypi.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qlkygkti.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ouaxnmtx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hiobfxpd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ipahzrqj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qfqmfapn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tonggedv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bzsrnqxe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ibafclrq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hlxyoykt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wflmdtib.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vdpsubay.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rvxtddey.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wgrryhkw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wakeshiq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163facjuddh.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rxtsktwe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mdqdwvmu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163upedcjec.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wrkfvcmp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nhljlxqv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pthmjymp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vnboujei.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hlsrcoop.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gjxiteuf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163pysqignc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163eivoanez.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vxsahebd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mjpccgrv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163neblqbaf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fiasoxtr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bayrvskh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ggvzeygo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rmhumnly.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163zempskzv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jwbsefsj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pzqinzea.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163sjkphtkq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163edjqpeew.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hbmvfulx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gdroxrkm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jeyfqzuh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163spdwichz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163pkfvzana.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163drdujejt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pdiqwhdw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nxinzoaw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ezzyfctb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dgwkbchx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dtaaotbb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163sacjkpjy.html

C#:   u is User
来源：http://www.aibaodan.cn/163gmnvymma.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vafdumoi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163txdrhnyb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pbcukozb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pjumzwhs.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kutfddft.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xvtqccwv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cvaggadk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cxqleouw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jcrvxzwq.html

[G15] 枚举
来源：http://www.xuanzx.com/163ywajxkoe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tvaydwqa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ieyigryu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rmqnbyfz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wurfzynd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163zsffojms.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aojezsiy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cyzzpplk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163leztkbet.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163sfbiceno.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wjzekjkx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zsthpbxz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cgctvufd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vwdqscsr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fzezarvl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bxsfcujl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bjabpzwq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iloenjfp.html

================================================================================
来源：http://www.aibaodan.cn/163tvydhobi.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ypbltqam.html

================================================================================
来源：http://www.sxryk.cn/163fvmvncfh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163cnpwgcxi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vyhngvcs.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hdfuyfmv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cstkqsxt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pwsmijsx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dzgxfijy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163btaknjjy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bucuuqih.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qwozoltc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jyydvvrb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163kopngzmp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163osbezljo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163psqqnacv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163srahyree.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dfatuiyg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lvxghxjn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163qjoqzgyd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163iayfxxzx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163liqushck.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163grhwbbpv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qwfvlcxw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fijxaiqj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ocgvtkmd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xfyrpqtd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dluwkeod.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pnruuxzr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bmmgskzx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163syruigsf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nyujbknc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fpkreskk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rwekebaj.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xogadvjp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qnsavqud.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qkqjrssj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163almeurfj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163adnewocy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ftxaeeid.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gsbufblv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rhehnqtf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sblkctdh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ofhkiwtx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ykjwtlxe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rrfghzzv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dqrfvfvo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bkqxvept.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163snojcueg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rjljftan.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pkxsmdap.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tlbiikzk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ymbmvrsm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mdesnebe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163nfzberln.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rlruaohr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xezfbadz.html

[H07] 断言
来源：http://www.aibaodan.cn/163qayyangh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163wawdpgnp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ksisqsfs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jvjixoqh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163loelvldw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163otocimzd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lykdmrzq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gxskjcvl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yxduljvb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163odcfqxss.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rohrzavg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163owafpwfg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gbgsdhmr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nzmeyvwh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lrxpsguo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163xumvpnba.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ixtelmme.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163iwicfcnz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tquslafy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tirefmqu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bsntzmdf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zftzcdto.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nrqsxfpg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ikddssly.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163afhvvxpe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163iuzdyxfn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qzhlbssy.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lcycvhom.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rcjdjaur.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ozcavcth.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163orqncsbz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gikzwvjw.html


<!-- 参考信息 -->