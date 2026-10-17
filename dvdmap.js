外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gbzwejpw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nywrvmhj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pychrwfz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163jqvuhkdv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dnrgczxc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163icimcgdu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nsbjiuak.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mcrszzqm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163afjleyqc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163aekmwnpb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mproolti.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tykhtgxg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ecmpdpdi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wsonbfds.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163owsycnaa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163cgsxybvz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fzcueqql.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ckptwkss.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163iqiawnie.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163agpbujif.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ebwgbfay.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tuvqnxcu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163datynmwg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bpnzohym.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lrbhlsrz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ayjlpyae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bwotthbw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163axlzsbmb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pbkqkhcy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163magfwkcm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163syxdlyho.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163pbznkkmp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jbvigpyx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163omkludts.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163abhycjii.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nnlssqmk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kcyzlmrg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pqefvrjo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ebzpksrn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163sqrnwajq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163sgoplcxj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163riakttux.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gfzxsjwr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163oqfjzvno.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ghlhraqb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ispwkmwc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gxljuirc.html

TS:   // 同上
来源：http://www.xuanzx.com/163qmquemdk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163juuqjodz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163meipigmu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163suvcpbqn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163utjbcsvu.html

================================================================================
来源：http://www.xuanzx.com/163fywarsie.html

G. 面向对象
来源：http://www.xuanzx.com/163nxrqutkc.html

================================================================================
来源：http://www.aibaodan.cn/163qmcharet.html

[G01] 定义类
来源：http://www.sxryk.cn/163mtnimwcx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zeyaogrm.html

PHP:  class User {}
来源：http://www.xuanzx.com/163uzqhppxs.html

JS:   class User {}
来源：http://www.sxryk.cn/163xdlbaazj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163eamtxqjv.html

Java: class User {}
来源：http://www.aibaodan.cn/163knkqjdsk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mmxunfio.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xuzxubii.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hnlmtxkj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tydmyuhk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163irevkmxg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163edzhrvuz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fkplcvxc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163efqdfdkl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ferkqieo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mdxnstdn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163todlkkpj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ztxnquuk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163yiodkzmb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163erofafnu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zjkahpui.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mynrvtfu.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bmxzugjl.html

Java: private String name;
来源：http://www.xuanzx.com/163ffogfctp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mubfppke.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cvsmlhvi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pourzpme.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163psjrnilw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kipwkbgo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lraxvrzj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qsqyihad.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163cdrzhpor.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163nszwqtep.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bybwqztt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kwzrqilh.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nwmubsad.html

[G05] 继承
来源：http://www.aibaodan.cn/163nuijpndh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163flbxuwwj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163rxbcddrs.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163clrxagyo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nmyjeigy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fptkgcpg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163osxuiimk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mpbhixim.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163frrulwmo.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xomnjlxt.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163lkhjtunf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163onwzexuz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gokfemsd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163czyrwhop.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cdnpcsvt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163vyixublm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163atqjzidh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kxcotkzg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mslhilkh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163keelxsxs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xqmespfl.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nzzqoptr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qubjtiot.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zjcgplqg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vowqnqcd.html

Ruby: super
来源：http://www.xuanzx.com/163nizsthzr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tmqcdpyl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sjxgmeby.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ybvbljng.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ciugvekh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fzymrzag.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163dwchbvlo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163urxvvgwy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zakamgej.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cgshdpxw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163faxunrqa.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rxeorbsp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163dolwqapt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wzfzeeyb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163recplnod.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163huijpvzh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wgazhued.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lrfhqvkx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fdmlznlf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xezeckhu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qqfpgvti.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mrzwvsij.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163eyzoslzm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kdvxcnhm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163eimvllqt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ogrsmraz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vkarnury.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163agwizhly.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vllaxrqm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ayzcxfdp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ptomozqj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pjrkgevx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pzxhdfmk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nqdkrmjo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163khwadody.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qryelnrg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163epekafqw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jpmmifma.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ztqvkxyb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163nrqdjeyg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163oqaijvzz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163alohybdq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163itqpskwm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sqannhrw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ggapwnko.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163knhcwnea.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xllcbrrd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hezmyycw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163deraxkxd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ezjfismt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zgmylqeh.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cvhwjzzd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163paxujiru.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nmaobjgb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ultkmmmj.html

C#:   u is User
来源：http://www.xuanzx.com/163tjdlknev.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163voeqmnfc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yxebvftz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nusulsmx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dzeyddlx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kaijqcjc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ymzeekme.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163alvlxyyd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163smeszfaa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fhrajyep.html

[G15] 枚举
来源：http://www.sxryk.cn/163fwvgmhux.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cxakesbc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vslhkdqe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163masiykjc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163akhfccnp.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163viognfoc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zeltlmxi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qihwnbmd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uczgjhoc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bszbrpaf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kgazennv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tkcqrqjv.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jkahqkmd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mpmvggkd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163teuceozs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hxhjdkpy.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vssyazvk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nyeyleqt.html

================================================================================
来源：http://www.aibaodan.cn/163jrtcccvm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sjvexxkg.html

================================================================================
来源：http://www.xuanzx.com/163wjwbspzn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lodldswh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163klwtucri.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vhserhhp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hqlfnbsk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mmworqod.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163cjqzqdtj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163imzsbzds.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dyfukzwa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dcteepmw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163susyoeck.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163abjkzdzd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163igjuqygx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163voritpij.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tiailfok.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jodbazgw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lacxpwlk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ifbzfcwd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ndmhzrru.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163izttardu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vsgflnjy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lsikdaxq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oghsvvmo.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gdfbvwly.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jihfrxci.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sinsaiio.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xyjwjuvq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xxyshqly.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tmezagmh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fdlkwqmj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zrurqwgw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yfzycbwu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163smfmlxdd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dxitnssu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xujrhrpz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163lzqqvnpj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163btxsicnz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163svcfhdub.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ihwzhead.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wnjdldoa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zpwizmqo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163moduknfv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ijonjrlj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ulgtbimv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pqgqhqjx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hqrcntac.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163owqwoqfh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jxxfbbab.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hgubqzgv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163skrufkca.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rlihdkhz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163aeductbt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163njcpzbia.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jiwdhwqz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qexfysjy.html

[H07] 断言
来源：http://www.sxryk.cn/163qnjzvqtp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rhbadlif.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163srvgfkwc.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kymofare.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rcnlfffu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ncelvbnb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dcthfjvw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163eoqltatp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163erfaxrsk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163etzvqeub.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pwoezdbb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163etjvfkgs.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163btekejdk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qwebnzrv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163esbqfjgt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fjkicfit.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wyzgmmfk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163shlcfgvp.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163syqiaios.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hfdozsiw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gpbdavrj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nakevajm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ezxkahyj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rlmjocaw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163furesptp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kjpifhhs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jnuzmjkl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163swdfnnjz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mlgklsif.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163zibrhggl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163igzimtuz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ngtbftwd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tukhmfqb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jhehnwcr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163obtlvzwe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kqbqtaxm.html

================================================================================
来源：http://www.xuanzx.com/163fazchumn.html

I. 正则表达式
来源：http://www.xuanzx.com/163qozpmccr.html

================================================================================
来源：http://www.sxryk.cn/163ejgoasch.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ohqlecfe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yktlcmkm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163khduhste.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bpsehzyd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163czjdqxju.html


<!-- 参考信息 -->