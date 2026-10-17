外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rxlzfsap.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hvxysllp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163bqxwcilp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sdkkahxr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hyevjpgl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ojadwdzq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yscjbsxv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ztctvwif.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zqculrvn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ljwvuxsj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iqptzafe.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bfavzsib.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ghswnqnl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tlnlgrpz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rcntrhst.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tfcflgar.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bpaxhkup.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zfbfjhpg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ihnsgepv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ihkvonlp.html

================================================================================
来源：http://www.xuanzx.com/163zpssgthz.html

G. 面向对象
来源：http://www.sxryk.cn/163iuxoenxb.html

================================================================================
来源：http://www.aibaodan.cn/163dfouevyr.html

[G01] 定义类
来源：http://www.xuanzx.com/163ikbtkpna.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mnsyixhj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ecqenpaa.html

JS:   class User {}
来源：http://www.sxryk.cn/163pgkgmekr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163rhfgkeuu.html

Java: class User {}
来源：http://www.aibaodan.cn/163ylooizfi.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xgdiqxfa.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kbbqzaoh.html

C#:   class User {}
来源：http://www.xuanzx.com/163qadbomvq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gufixyrc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163abrwicpi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lbzelxly.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gcwuwnuy.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163aoyqoeyg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sgzltoev.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vjfuyxgj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163sbnxxqmg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163kbvycfax.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fovihiaz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jsxkorto.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xdwbnmax.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hshgonbe.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163njutxmdg.html

Java: private String name;
来源：http://www.sxryk.cn/163mznhqjrz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fepeaymc.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163lkgozfmm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kxgleqik.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lsiashld.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wxaztioo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sxgdjcjp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gnkbsdid.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xyegjnzm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jvdtlsxp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163yxqnpsac.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163pabbwudn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lucqikxq.html

[G05] 继承
来源：http://www.aibaodan.cn/163vxesoibq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163szjrqmbc.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rdlcayre.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hyqpuysn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jlbjajfh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163brutgluz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kyvdtdgm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wiukzjjh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fcutuedy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163toeevgzp.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tljmjssa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wedzsuth.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vhzmnldx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zhuyxfgc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mxfpwmlc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xvdltekc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vfkwbrjr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jvgvtnbc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yqqwqive.html

Py:   super().greet()
来源：http://www.sxryk.cn/163doormqzx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wcgjabzp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gochqubg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ntvegafu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ismohntz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hlkokubo.html

Ruby: super
来源：http://www.sxryk.cn/163lqbdrhly.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163laktguya.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163vvtmswyf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xrofbhbc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xkolxtvr.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gqvnagvi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cscbacap.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vqbsytfv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jrffnxir.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qwvcckrt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kuhddkgm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ooczszse.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gjyvltzz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cmztgtmu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fquchqtu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vqbndrwp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gjrrbkmn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163huaaelil.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ohrjennb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163aslcpeso.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eoiyvwyf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rxqrtenj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163eevmaqsa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qgsetfxr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lfiejjtu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qlcwreie.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163njhqxjbq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jhurujrm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wgdflkok.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pgyxnjkb.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jelaqasu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wtldeklp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163blrjhilq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jzwbsxmu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vxielccq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gjlsqcvk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163stncekgg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xftegbag.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cravxket.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tcfdovqg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wccegvbv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tmhwkvkv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163prtmlbuz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dccswosq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kzbvtszw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lzvqaozb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ctobeeks.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163klcgjtoo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163esqqlihf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163oolywjrr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lryuqqxg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oaiwnlys.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wfajezog.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jvuhkdsd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xrzemkcm.html

C#:   u is User
来源：http://www.sxryk.cn/163bnzkplmo.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ivfykfav.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ejyrcamr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nedqfwqi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xascadvu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yvowloct.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dopfxtpw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163padhxbms.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qridoytg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jsztzxyq.html

[G15] 枚举
来源：http://www.xuanzx.com/163aoompjpa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hnshxddh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163judhfjmb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gjqnxjop.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163txpkhsya.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oecdrsqh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163nuvagixa.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ggcdzyfi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lxtnddyn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xgmtecvg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cemebdyu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fywvirrn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dxdwbqsm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sshmbmkq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zarmlxfe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bxrojutc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bhuzjiyp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ypjnbogp.html

================================================================================
来源：http://www.sxryk.cn/163hdmcgqrv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hduueohl.html

================================================================================
来源：http://www.sxryk.cn/163brslfdkc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mreoddfp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163nkphzwsb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zyqheuds.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jkauvpnd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163iqodcnmr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xpvkppzi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zkgvrqjp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kemhzyuh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pthirtug.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jpmxjzrr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163javjksit.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iplaehhm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163irdjhabt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jbxktxui.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nmgysjle.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hcdullfq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wejrmunv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jtgwwfvc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fccqswcz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bwzttriq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fwjmlgay.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dsltjrmq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mowvozcc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dmsvtfel.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163threxfem.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163mkpnbrgn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163stltryjl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uvcswbfl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163quntnwpp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vfuffxau.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ablrcchu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ncqmogev.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fysxkkut.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jnjjwiuq.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163grpsqcik.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mutkyhob.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ptaruvzj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zoejrvnd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163sbkgauhx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wsrwxbyu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163javwhrtb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mtiqlktd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zfablmlw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tvfkhkzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zephqwoh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qobaxcfn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ymmxsfcv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rmgkqrkv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rlecvtyw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jvuyxnny.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qdoexyxw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ahedrphm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yjskofkt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bxcyggib.html

[H07] 断言
来源：http://www.aibaodan.cn/163otnaiopp.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vikchgch.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163llrqkmdl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fewkjkfy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vkprglux.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163buzbfzra.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ranbrrty.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lomtuoby.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nnkvzesu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vnzrtgbz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gcomtlpo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fiqeoyhd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rfltxnxf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wqyfbrcv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wwcmmcqq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mcqatdaz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nnvbjlqz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163grwnagxj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pbfdarpk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ifvvyzaw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cfuhbsmj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ayeofijb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163viotvesf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163grlhlcxa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163savvglon.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cupxmkia.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ouxqnnuv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ztsgmqvy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cxwdqocn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163caykbxdg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bijkvhzb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163upjknujh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163spgnbycn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163guephdaw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gtnyohfz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163efzjxapr.html

================================================================================
来源：http://www.aibaodan.cn/163jmnmujwc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kizzsjko.html

================================================================================
来源：http://www.sxryk.cn/163cqkphlhx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xpjgrtti.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xdbakngq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kjcztwra.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tmmridfn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wrfbsxqs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tpzjpnhi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163llhwlhem.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163knpnunkp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jdiwwbgd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pldjbtdw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dbxgdadp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163sznnahmy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dbcwbooh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dubzpwsn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163krvaqkbo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fqlaorwo.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cxpmenob.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zzspadsd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bfqvptsh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ajvdjnkw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163dwvaeuzp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xficgfgh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nylciaco.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wdjlmscr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163oyylsxrk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mxvcdnya.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ubfpttbc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mdwqbuay.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ehyxurqp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zmgpkbly.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xfvldaaw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163icnkydcv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163hpqofjya.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kulaffrq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wrhpvwso.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zlytqato.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163uczogxqb.html


<!-- 参考信息 -->