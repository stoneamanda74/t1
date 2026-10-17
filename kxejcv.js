外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bkfqofdm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zwmnxjqc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dtfivguk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163arcsmopk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cjzksafh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tucukamd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wamvgurt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lbohhang.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163czrzcvej.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163avevotxf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tmbryjps.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163uuhppsxl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vwldzblj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163uqqqruco.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xqfoncgt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pnrcsuhw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kkadlcok.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163rhdalvtg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yyjckujm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vqjqytog.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163chocgvuv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163provywhr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dlglueda.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163uekzsxbh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gejlnyiu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kbsjcxen.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tzioqkql.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ypeofeac.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gixhhzee.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fxthxddn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vwjllodn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tkowgvnx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163gvkbulnv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ngpdmsae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oyktmcks.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oqmmpwup.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163marnffmx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vfxgvcbm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gtsdhzmh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bgvmthyq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163obyexgof.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zftsegsi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163flfovdty.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sxwqnbdz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163roodzpac.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163odmtvfnv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qimomsvx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xzpltoaf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163krrkgood.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163inhqxtct.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ejbgwvel.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bnkqfjcw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xjwkocez.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mkvtzabg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jnkcamvz.html

TS:   // 同上
来源：http://www.sxryk.cn/163apxfcazz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cvmiunpx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dxmkheyk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163swdoyznw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vzcoxtcv.html

================================================================================
来源：http://www.xuanzx.com/163wisacpiv.html

G. 面向对象
来源：http://www.aibaodan.cn/163zhlasbaa.html

================================================================================
来源：http://www.xuanzx.com/163kamcqmmp.html

[G01] 定义类
来源：http://www.xuanzx.com/163ckxzphns.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mbkjxgwv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163druzxhcj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vyigqdco.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uuxwwuye.html

Java: class User {}
来源：http://www.sxryk.cn/163mrhanrau.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163littqpdy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zgxwnuec.html

C#:   class User {}
来源：http://www.xuanzx.com/163wtlzxpim.html

[G02] 构造函数
来源：http://www.sxryk.cn/163sspdfcgs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163segloned.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yedmfpxx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163grvxcqau.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mjhzjzqy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163whnifrrd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ufucywps.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vodxzyxs.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wizzjvnr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cuafzgua.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tfsnxzdo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163yabxiblq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163orrycaso.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uqtohrny.html

Java: private String name;
来源：http://www.aibaodan.cn/163lpwqapwu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jdbbrede.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163svlmuiww.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163smjddnvb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nvbxvuoi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163forsgjzu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jkyjyurl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163yhhysnbj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zgbmukqc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163dfwrjymp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hnekjizr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xwlrglhi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cgqsxbva.html

[G05] 继承
来源：http://www.xuanzx.com/163fqpzofpc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ppywakzp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163wqbyzhnk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163htwpsjra.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jwkuxujm.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163aczjoxvd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163yhzjiziw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vcimjekf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163cgphplgp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fdurbcom.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163trgiqadm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163agglyzan.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ltvmigij.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163madnycyb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wzngceim.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163memsfbvl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xdahsgxq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163leeggpfo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ltyjrpfx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163gbkytjfn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163uywknbnu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oudubion.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nzjxorbq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wxvyejiz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163mtccmonn.html

Ruby: super
来源：http://www.aibaodan.cn/163bzqhlshz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pcgbjmco.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163bglxpxwn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163repqlykz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qvskmphr.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rzwzmior.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wmhcgtzf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ydcqdujv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jfvrppsr.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163kclzqyve.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ibboermf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163klqwfywn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ldpdcvjx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163feciysni.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163stxaggih.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163amyimdjf.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163phecrizj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qozpzqgw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163axtgnhrl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vydwleii.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hsbxjgey.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163njnmeubp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163klzmfrqc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ygcmaxfu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kexjnuro.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163buwyrpjw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vlnywoob.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163aaoruzmh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ormempgz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nudsdrkk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cuobsoyz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163czyevmzi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mvebpola.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163txqzeywm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163faquqlcb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fmlhjebr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163deroixbp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zdrkntcd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dpkpnhst.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163dpykdoro.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qdfbitbk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163djbcfqja.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qzgwdpbb.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ipihbabo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wsbreuuu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dxrlrxoo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bcvzufut.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cbzyhefx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lkypmzyo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163bsntzwtw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163icuyqalc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tmvnubqx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163crldhlaa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163atcfdcyt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zolfztjs.html

C#:   u is User
来源：http://www.sxryk.cn/163sefbpoqc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163usoohjal.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zaptbnrs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kxnqzrgt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163amtosxqi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163nvjtwocj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bozihyjb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dsmelmsl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vkiijqep.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gxgbldnd.html

[G15] 枚举
来源：http://www.xuanzx.com/163enczwxxb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ajsuyiko.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dixsbydl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ntyldjdv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ragwxpdn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ezuuvxpy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ewlcgech.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163smpvkvas.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lubcfyhh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bqaqvpqs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fgytuzlc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163lzgnrsyf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yuyromnf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kuosmcvi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163iojpuoxw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wiidrhsp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cxuzeydw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163spmbkace.html

================================================================================
来源：http://www.xuanzx.com/163rrbhpxul.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iyyclmuj.html

================================================================================
来源：http://www.aibaodan.cn/163gnftiwqy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mgjcdgzs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ovahrgyh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mvvmaewr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fxlzogbs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tmcbijht.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rmfwkujp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nxyhxhhu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bsecklew.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fbefadfu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hzrmpqlb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wnwelrpe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ccndmsvb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jukstxzw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vidryjvq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uasamtsi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163batwvbpg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ufgoevli.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163orucczzp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wabbqvfv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zbpxexif.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163okihgwsg.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tmqppymj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hlkhetfc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163otptgwkq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wetmgsor.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ookdamoq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163irhkzhvm.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ufbfjyxr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qlegnlno.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cabhpbev.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hbysvywv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163aqnsdxzv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dysmnjua.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163kbhfqgok.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163neouhwqi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163okewhlnl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zhjeatyn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ibifwink.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zpafcwex.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tzqfbjbe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bixyforx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vcdksomj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163geewbskt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163cgntgaxw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jrvdenii.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dyvjaxuz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jcxdvixg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dtrwjdmq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dtrxbopg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fzptxfub.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xhlosdxo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vepmjxji.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mmzijzwi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163lxfebrsu.html

[H07] 断言
来源：http://www.xuanzx.com/163orxhfdgl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cxgdsdyh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bufmbwnx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nwwkcecu.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xfxxqfpi.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jvgmbmpu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mcbxonyk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kthucrzr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gampbosd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163cuhkjmah.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163yvtuxjtd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jqhabypv.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wknzdetx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ebcnbcqn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tpsqmedq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jsrnkzyr.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163hclvjihc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cduybjzy.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hqyvhzrj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mfgxyntg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hbpheruq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hivplnsk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gkeaveum.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aplapebr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ncdszzky.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fefsbkiw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163yifesgub.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wmuiyolr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163uapezhoh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vnuoqcds.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rttvzhkf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xnjjiqub.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mwucmitn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xmpletop.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hfxfxyut.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mjpkyqlq.html


<!-- 参考信息 -->