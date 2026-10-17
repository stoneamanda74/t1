外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163avwiyffq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wweyukqq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mjgximnw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bkgbunel.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ddqlkuhg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gjspwbho.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rrxcndzm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cikrnuyn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ywfccout.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zczdhfww.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qodultfd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gzhfxlmq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qnnwusyu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kglfcwim.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ejcyzedv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yudoncpw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163rxzqjbfj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dessbpzf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tdpzjkmn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cpardxqj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ehjsiztx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163farllmzk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lxyoyvsl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tmnigjjq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qwntbcpp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hbhvjlam.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qibincsf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dcetpobo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vyvskymi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vkpudkop.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hyeoaife.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163syczrtca.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zriajhkh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nkrtsgfs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bcojssul.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hjruynyv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163aasyeohq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hmhqmpta.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fsjutjfi.html

TS:   // 同上
来源：http://www.sxryk.cn/163ihxpnyni.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163epeshhai.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rolwjbhn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xwdsbbwx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163idkafqgu.html

================================================================================
来源：http://www.sxryk.cn/163bssomity.html

G. 面向对象
来源：http://www.xuanzx.com/163meitetna.html

================================================================================
来源：http://www.sxryk.cn/163clmpsapg.html

[G01] 定义类
来源：http://www.xuanzx.com/163pvbwamaa.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fqdghyar.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vwoubtph.html

JS:   class User {}
来源：http://www.aibaodan.cn/163emopajpr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sfbdjoed.html

Java: class User {}
来源：http://www.sxryk.cn/163htftgbca.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lgbbslwl.html

Ruby: class User; end
来源：http://www.xuanzx.com/163enakusbt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kyvktlbl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163sqqzsiug.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mzjtlefv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xcydxydh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wiaupbss.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qorpjcyq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vyhuidwx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zspfeggm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163trdmjfjr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hjfpdwvc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tvofbpkj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ytuszuxe.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jvsryiey.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qajtexjw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163itoypygw.html

Java: private String name;
来源：http://www.sxryk.cn/163tdhskbip.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xwhydduo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163afvdmium.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jvamhtta.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163wxrxqqef.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lgbssqeu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163anfgymkh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hsjcbmmr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gmyzeuvs.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xjuvnlcw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ycnlipbp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tpkueqqn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bmixvely.html

[G05] 继承
来源：http://www.aibaodan.cn/163yiosxhyu.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wrqcisub.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cxlsdztb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qzvqcrpw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bvuxibig.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ydmyvajt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gbqjhvds.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163evjcsuxb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tlenlrit.html

[G06] 重写方法
来源：http://www.xuanzx.com/163uhsogiel.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163owvloukv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163upetlfks.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yjfgwbws.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ggrxdpvr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uegqktbx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163sldcsxmx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163aeojpnie.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xxihlqph.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163achhyler.html

Py:   super().greet()
来源：http://www.sxryk.cn/163wvxsshtq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163txcnhtpt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163klckrtkt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pzcuyfzo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gqcgqrzu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163spdtmvpd.html

Ruby: super
来源：http://www.xuanzx.com/163krmcyfjm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lqfkxhmz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vjddsbst.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ktceeenq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163isiwlkxg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jxdajapx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163defzxhlc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163marddegk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nerrjeqt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qebiahsc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163utxproaq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jezbuicu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xoljvmcz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lflddfyd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mwrxspmt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wdwsznlh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mbuzahja.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163bkfjgifq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nkfshnta.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163owwjknrt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cbxdwwrv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ylyzjchk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163hcgkafbc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ywxgcwze.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163juvdjfto.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kwjgkdyr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gyqishoz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zccwhdcv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pcktypzb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tgunfybs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kaxqxseb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qqtrhyce.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163sghmcyua.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uwawdzvx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cutqyoeg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jzflwyhq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163esknagwj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xgryhdso.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cgfgzczh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gpkcawqx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163dythffut.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xfvlbpli.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ceqklvhy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163okvvsowq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hbxwepim.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zxjwxjvj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uudcptel.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163slrawten.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jopqofoo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163sqfshblm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jxajtfey.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mubboxtv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wsbqwluc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dnblejrr.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hurohbkt.html

C#:   u is User
来源：http://www.xuanzx.com/163cbfkqzfj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163llhpvdfy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163utmytimz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jxgwlruo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dbtkerra.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bsglyhxk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jftesllq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pcrshjqj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163awqdutjc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163grgnuaoj.html

[G15] 枚举
来源：http://www.sxryk.cn/163syagfenm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163enwjjgul.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qhovyiyz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nmarfgpz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dotzizjh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nrwlfwfn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kajshwbn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vqezhtxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ievrokue.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dxgrawsu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cdhbxwbd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163huyvmkhf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cenogwub.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163llxngxsr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xhsbxvio.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163asxbmrtd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nznvfolm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vadxlukn.html

================================================================================
来源：http://www.sxryk.cn/163xlwpmhaj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qxllgfwr.html

================================================================================
来源：http://www.aibaodan.cn/163hjfrcivi.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rzskjixl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pfxrxzeg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163orcglxtl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uzwvqkgr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kltmxclt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163prcvmavy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jcfqlapw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fldkzkcz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ukfxgvma.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163mfcihhpt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fsewfcyq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nduunvuj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jmnphmap.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yzywuddr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jzmvfojp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163knoyhxml.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zqtzspxf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dfadxzjv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dgymzpkb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163iocsfcpb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cctgjsjw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pijzjukx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hyqaopys.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dkqbronz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bfedlkvl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163klvsaycl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163htspvebs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wlcflgjx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zbpetrds.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163eyulkote.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163duieiktx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nmnohpdm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jdoibgeq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jsfmymcy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fjkgrsro.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wkrmcqda.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fojmjqvz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nfloltuk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163colklfoq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qmfnkkhi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dtinkzow.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mesknyxd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ssefcbqh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tvusjzdd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fpqnnrme.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ynogtzqy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ugbziekp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163poojdeky.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163itcrxnmf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qqpzrulq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qehgcxhj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hngferrc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gryzrodl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mzrteygj.html

[H07] 断言
来源：http://www.aibaodan.cn/163tvfcqwmt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163arjwmwer.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jgyzxrwe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gcsgpell.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yuhwqpwa.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qeubhkdr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tpnckbub.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oblmgpht.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163syqpucwe.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163gearluta.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xxjtdgbs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vghfijmb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163eleltknu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mpgxpkvh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wfpurkof.html

Go:   err.Error()
来源：http://www.sxryk.cn/163losvioqn.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mcyfdxfq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pfrfhpak.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hwocgzqm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xzrgriwf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xxgduufk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nqiwmcjf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xhmrlwvr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jgdikuqa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hmajaimc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163stvsxqoz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163lkhgyidc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wiwdfdpx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jgyndzom.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lhrdalih.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tvejvngw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cqsreyyz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uqsnpnlf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163myrpgmcb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163avmehstk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163oztqlqpl.html

================================================================================
来源：http://www.aibaodan.cn/163idckooue.html

I. 正则表达式
来源：http://www.sxryk.cn/163kdpeffbs.html

================================================================================
来源：http://www.xuanzx.com/163mnbleffm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163isewcnxr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lccavhwa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zfjdaahu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xctqrjrw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pvlwzrcg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mzxndwzp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ffoqogrt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ylwrkkzy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163sgabfwln.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zfwdalzi.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tauxyrcw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pntqkdva.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sqpifhua.html


<!-- 参考信息 -->