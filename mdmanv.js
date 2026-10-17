外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gmxgdsbc.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163sfmxswcf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163uthxflpl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xxavfwhi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dpfnayjd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fpwuesxy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bdhthljg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tihkrggy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163aeowtycv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163oxpisyft.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ccregjgl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163uernqtzr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gxtznihh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jqbpgllw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qzuupmaf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163esgmyfez.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mniqjntf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xrlfuqxv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163foqtdwgp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wfwuxjcb.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ugtvmegk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163txcgfkpr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ilhkloih.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163emyqhdvq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rttzfdmk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qkbzmmoy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163htdvxerp.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xpvgssip.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163obmozdvx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163waxmdity.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ufctggds.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ygjxokmx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bgujuayt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xtiuhsfo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hwtmleof.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pyqvabbq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vpleguqa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ytytfkcv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dvfetshl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iqzdhzwl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163oiixenmz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gdxqpjso.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oecwjtva.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wdqlahbg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ffpkltsy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ewhgsfcv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qguwiftk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bufjmvtt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tnnoelme.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yitvbvsn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xmilxdwa.html

TS:   // 同上
来源：http://www.aibaodan.cn/163oyhxkwqn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gxkmfgrd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163pshgupbn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qgimgkzn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163axdllxyx.html

================================================================================
来源：http://www.aibaodan.cn/163rmuurbnv.html

G. 面向对象
来源：http://www.sxryk.cn/163znbswkwp.html

================================================================================
来源：http://www.aibaodan.cn/163nkayokpf.html

[G01] 定义类
来源：http://www.xuanzx.com/163enosmmpn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mwykbhvg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zgbcngkp.html

JS:   class User {}
来源：http://www.xuanzx.com/163dwipqeih.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jbgzccnd.html

Java: class User {}
来源：http://www.sxryk.cn/163hvpcxetl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pvjkprsb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xesqmlyl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ztaqrlid.html

[G02] 构造函数
来源：http://www.xuanzx.com/163iwrunvkz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163naoawget.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163phikrybf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hekorvre.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163uqwqvwhg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163iluemvso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dljsnxvy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163noananfv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pxxqczno.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hvikxwid.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sheyqcur.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iqhevpap.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pfkueldx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vvookxqp.html

Java: private String name;
来源：http://www.sxryk.cn/163wcrtpljz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qtcvxskv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pdxzjuse.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sjlvfilv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163osdmaqth.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zddmmsln.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163usyjtqxr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nqbjibax.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mecvcxeg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sqnldsdj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ikcqjhys.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uhxdgwqp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wktxmenz.html

[G05] 继承
来源：http://www.aibaodan.cn/163qgfcjgcl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uanrublj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163aglmgulg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zfhpnchp.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iiamqqin.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163avbdlzuq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rabviebt.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ksbqghlf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163abgugwrb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ydglinlc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tzzzakln.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mvbwapfd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163logfgftt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163izppmvpa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gworqypy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wjcvetfs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qpznxjsi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kdbadwxu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pvfvrboc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163eggxkkun.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163musczwpt.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eezmxmiq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cbadfhud.html

Java: super.greet();
来源：http://www.sxryk.cn/163cmeoxzke.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eylzewtq.html

Ruby: super
来源：http://www.sxryk.cn/163ildjalgf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163epqfmsqj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tylgiihm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ymbixahq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163llsqzhmw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163crhpeibs.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163xojiycey.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ftqoelix.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xnefbfld.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hgqxlwak.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lnmrfowu.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ugvsuaqs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163knrpsoaf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qlzyklnc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qkomtbya.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jxprjjfc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ndfufbtz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163axdeenbn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jeammege.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qmswupnw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lfkwbrdn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163bsofftli.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163osvaiwrg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163htnxazos.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eimwbbgx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ebhmrhni.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kkaqtfvf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163wfwrtoyx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jkoyijnt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dyjgscsr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gvnwnywb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163obbfjlkn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163bskjzzjr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nnideevf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bdjxtssn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nsduhhzj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bzolqzuo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wgkspfiz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cdehteyq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163benuesiv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fgxgwpqg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jpfdcvlt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hhojvtef.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nqvtqetk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xjwyvhyk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163goyqrjcz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163inxtqzuh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ewdcehiu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163havdkzsl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tcazxkjp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vhlabpok.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wjqojqwc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kipgolwk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163napzbwgk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163gdmrbzzi.html

C#:   u is User
来源：http://www.sxryk.cn/163lfweaatv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bosghfng.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tcbfzfuv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kxwoixww.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163htzcbqdu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163llnbnlrp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rotpdurh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163czjemblf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pojfvahh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163aibulbul.html

[G15] 枚举
来源：http://www.sxryk.cn/163qtwcywzx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dgzkszrg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163eideybyf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tkruwgkj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rrgdpbhw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jpahypjz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bwojrkkz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eomacdqq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jpowtddo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dbxmmcja.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mopedogx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163yhvteyey.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163najegssl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zxyydncs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hnmfqkyp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pweeyvzf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rcoiiwpk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163blpqnkci.html

================================================================================
来源：http://www.aibaodan.cn/163bienhuea.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163varrutki.html

================================================================================
来源：http://www.aibaodan.cn/163gqzucgka.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163aucxlbun.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qfztebnb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cbeuoihu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mkrdtwqh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iyrdknxp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yzuwdkqw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163blyiccdi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163opizwqcl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rndansrv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vkapdrnr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mpepfcxe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163enlmnlrn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nmncosvg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163egcpffde.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qtcybhmf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ubzboaeo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nlvygaww.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tennvgie.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vqswfdyf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163qbszlmxs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wqkbdbod.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jsppmhlq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kxollckh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pgkhdoql.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163obpqwerw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hfvhvexo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qrrwckxc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163etnrgxvo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yzqdsbte.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163omprsuzp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wkfyrikl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eupfyhdk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163iksttvpm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163imtugfsf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mivxgjrl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163akukfxac.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tmmuvuwf.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kyqbuoen.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wheilkbk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dudrtvws.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ychvaipm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163mskpsjit.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jdoyoojj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ftopkebd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163uyqmwhlt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163wjqlirmx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qhxkqstj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vxakgslc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ljcachfa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pjtcvxlo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pxsijtey.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ptaudhyb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163otpbhprf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cbxkgzfw.html

[H07] 断言
来源：http://www.aibaodan.cn/163qpnjopqo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163widoljmc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vehafwpq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163isubdrgb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pluszpre.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bkqwaopw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wthirodb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163butjwktl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qlqoiobi.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163flrbfnzc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wnyhnmch.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dsqnjepi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vuuualfn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fzmbekvx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zvqfubts.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ohstbuug.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aeulqgdm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kowolqzz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163sbglnlfs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xefxmdxw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mytkulex.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dloweigb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cbocibgd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163fksxlutf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qkoyxsbx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ebwxqlrn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163uwgssoze.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163usviapta.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tzpusfna.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jogfkajr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lmujoxox.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mttvafuo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yzludhrf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wfglcihs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ijbgveyf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mbaeytyn.html

================================================================================
来源：http://www.xuanzx.com/163pllnqpzp.html

I. 正则表达式
来源：http://www.sxryk.cn/163dsmlekcy.html

================================================================================
来源：http://www.aibaodan.cn/163dlepmxvb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qnrbwfgk.html


<!-- 参考信息 -->