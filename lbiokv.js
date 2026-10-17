外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jmmqiklz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163txbynmos.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fyitrjfw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cbgrssky.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hxpymsas.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163yhyrxvsl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163exoqwsno.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ygdgfose.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yevefekm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163przmuzld.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163obutnbdf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xcnassaf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fuktypcp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yjfjocct.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fqqrwqhs.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qzjfrwys.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fmcenwek.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163blnhfbea.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rixnbolx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163egbenlkd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mhfdtudv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jvakmpmr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ysbzpunt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wdgtivvo.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ozvlyxyv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jmkbyxji.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tfhzbkde.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tlrfxgcc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ayxtzbol.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iuhmhxbe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dqzeyazz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ghkmqlxm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lkakemal.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ihxvmqrd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ywygrkau.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ffmsrapu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kovdjgif.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163txqbvczu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ywuscodl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sgkxgkwf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163usafwhnm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ossosjxl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qehrlwcb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xfzdicbz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uvjkbqsd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ajdnvebt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vdcxajsc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lelkdwtj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vykiuzuh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wbsspuzv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qwuvvcsm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qgethmbq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163eiuobicc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pihghudl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163piadlqoy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163djxkgttc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163halnqncf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zwyofjcx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nsytezyr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163zzfwpxkt.html

================================================================================
来源：http://www.aibaodan.cn/163mqigituf.html

G. 面向对象
来源：http://www.aibaodan.cn/163vtqnzqor.html

================================================================================
来源：http://www.aibaodan.cn/163bxezhjwc.html

[G01] 定义类
来源：http://www.xuanzx.com/163fiibedon.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dzeffqlo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ovhmcoeb.html

JS:   class User {}
来源：http://www.sxryk.cn/163onairvgb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yrvtbolm.html

Java: class User {}
来源：http://www.xuanzx.com/163shvuetvf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qlqaxzsg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qyaheitw.html

C#:   class User {}
来源：http://www.sxryk.cn/163esublzby.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163irsfqeoq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163uxnrtknd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tlbwhrvl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nvyxytdw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163cxcubfnf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jwqnhyvu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wblhqtbj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kzjueepr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rbrgduqg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163owbsdupw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163yhuqrnal.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dlmwtydx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163otmbwmye.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vggcrbyr.html

Java: private String name;
来源：http://www.xuanzx.com/163ekcvgzkv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163uqdgheek.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vavuoxxy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163inynbxfr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uuiwqivk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yutzbiit.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wrrhukoe.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mjtmkyol.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163beioqssy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rhshkjhn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163aooxhltt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cgpwtwrd.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rtorjhbm.html

[G05] 继承
来源：http://www.aibaodan.cn/163rtlajcbk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hxzhdhfv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163rnzwicur.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163drrnhhsg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bqabklih.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163btembqkd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163erivoiek.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163feyidqsa.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qatpqvae.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fbtdzilb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tkzrwaaa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dnmoozig.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cpvqfdej.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dqaowltg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163waykqwhl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qpbggswu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xxkqwbim.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163slosyiic.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mkwhycgi.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ruetfjpy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163eydcvwia.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lopvmcka.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xxvcdrbq.html

Java: super.greet();
来源：http://www.sxryk.cn/163naovuikm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rtyryqye.html

Ruby: super
来源：http://www.aibaodan.cn/163ugqcgkyy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163udiasuxq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ahyrlgbg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hpjwgwjk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nvquxkqg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nmtepcaf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163aayfwiru.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oudpusyb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163umiuvvdm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163htexdugt.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bphyeuag.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rhphjhsr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163uyqlvkvh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mkymcslk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163phpqfjfm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163rspvxfaj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vtsybwtf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tkfxhurn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163idlcxxsw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163itdaejpy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163owdalplr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rkpryllw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163paypldej.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yecpdrgm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nvwfabph.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qrmboaxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mvyfisje.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163khvtmlmy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qmhqxsdd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163toasqldg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cezbgnjn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qjugsagb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163srssqwzn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gmpdojha.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163grmnimxi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163spmdzqyx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rnmdxywb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gcnyljcn.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bwpxbjle.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xacyoteu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hibfjozk.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qtfktoia.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jvpqetro.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tbtahkvu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lhcvhudl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jvlhjian.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ubgxgrlb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163redimwel.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nkwuhjsc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pabahpcq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bqsvbtwl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uuhyhdxi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163uaxtgjxp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163plfnieyg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wxkvztyh.html

C#:   u is User
来源：http://www.xuanzx.com/163wfenuxab.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163sujduxdh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hlgchjdj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nnvhgkex.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bpqrxfbc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wrjfbabd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nuhhxgot.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ufojzaen.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163djmgwhav.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163cgvtjdco.html

[G15] 枚举
来源：http://www.sxryk.cn/163abcnwifd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163htguovey.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xcaewqry.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ylzenxgw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ycdolwpg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mwyfpcbd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cqyqbwls.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jelkucfx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mczqnity.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wfgdqciq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bfdysthw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lyqlzasf.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lymhhvad.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163spwpyphc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mlsjigpy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163brlkjbux.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qsuuwzuh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163seigzbbx.html

================================================================================
来源：http://www.xuanzx.com/163amyhulpb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163alzbtary.html

================================================================================
来源：http://www.sxryk.cn/163bvajtpjo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ugewtktz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pkdoxyxq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zglofvps.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qactoxfq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163beelcokx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ynrxqmft.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nxlborrn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163iteamigh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dffxpmfx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163izvdoobb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dlsokpzj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tlkskqbt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mqlyxkur.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yxlsydso.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hryoichv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163iltbnkpt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rhmmxlnm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163zvnaizxs.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zsfkzppk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163yptxutbw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qromapgo.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tbygjlmr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hldrdqfw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ctmrasse.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163scnmnlpc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ucyvvpur.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163astsbycm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gzsqhgjb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vwnxnaiz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gbuanwmm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jekkbcuu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gsghyufs.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ebchnlkp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hwegwunl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ipdxiikz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163notvwoue.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gwqexuls.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fbaylsak.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qvhexzvo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163szcvorwf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hfpwgdkb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jzecmewg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163swhgslzz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uzfvglts.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fuaiekol.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fofnksnn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mlbdhlks.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ejfnrrbt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163owadyhqa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lehrvhbi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163anblsdbc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qaksjppn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163icqnnrew.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mobhjazv.html

[H07] 断言
来源：http://www.sxryk.cn/163wpzlbvih.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jawxcffj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ryhqqgyn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163peureipn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xjtbryrp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163enkjibbx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163izqfnlhd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hdsevdma.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cjupqrbu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163quscwtfv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163veadaxvq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163miigothf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ybtdjftr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vlpbgpoq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163solxvpol.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zultnjtl.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163uaomkilb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fiwacawb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vpvicxew.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tbmnpprd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xpzyzgtm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xkuxvmlq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ouuramos.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tozfhafe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163oxbzlyyo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163pvjlktnf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163oewyfekp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hfnwvqch.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163txhnxobp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xsnqqftu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kdritevp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tbkjabqb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163plhrbhdw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kzxtxqdq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pwgkoexs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nthhpjyf.html


<!-- 参考信息 -->