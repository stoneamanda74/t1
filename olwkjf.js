外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pewqahdd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163kjbvnrsj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fhiauzyh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nazrrpzh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rccrsulf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rzzzjfys.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lwzuxywp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dkzyqgxw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ntnvganm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pixvvbmz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lrjgnfhf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163tjuwtdoe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bqnltaab.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163juccwiso.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dnlgllwk.html

TS:   // 同上
来源：http://www.sxryk.cn/163zwmhhhvb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vtplzryk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wzmmgops.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wynyhmyf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cdcqhrrb.html

================================================================================
来源：http://www.xuanzx.com/163qdlrqdsh.html

G. 面向对象
来源：http://www.xuanzx.com/163jovgckbk.html

================================================================================
来源：http://www.xuanzx.com/163fdpguvju.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tpxubsgd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tcbazxfq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163buphesby.html

JS:   class User {}
来源：http://www.xuanzx.com/163psteostc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163amhudxon.html

Java: class User {}
来源：http://www.xuanzx.com/163mtndxfre.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zltnfzwm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vnzgnvpt.html

C#:   class User {}
来源：http://www.sxryk.cn/163mljyrabc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163acfzggcp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gafefmep.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163sehjpygi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xsvoqirb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wblbpimg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sgjdnpsr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163syxpfrlh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dhxnxgbf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rirqdere.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163nrjefhxy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163iswzunxs.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163pagxsmyp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ssgwbuwh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163draajicf.html

Java: private String name;
来源：http://www.sxryk.cn/163knhlqspd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qgpstbxd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163swukchml.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rljugefc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kmfqfbgq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nrufkbpl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dhbwwxpf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bnxlkqip.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jzcmafwb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fdhmzqxn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mhcpgtkv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jbylsvyr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qlelvoex.html

[G05] 继承
来源：http://www.xuanzx.com/163uyxezrwv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vompmhwy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cxydgwbn.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163goivpbdv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ktgtqhzs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xxdmcqdg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zuftvmho.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dgxtshwk.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pwhxhdvm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bxmosbhm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bfrtbqrj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hxldvonx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163efjdcevs.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nyzlbwvv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rfppmlmk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163iefwxmny.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hqctcroq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ncbvkhkh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qgrkcvfi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163utjcfnld.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163klnkthxm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lxdohorw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bfbgrxgv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mzmzvtwy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fyloitkx.html

Ruby: super
来源：http://www.sxryk.cn/163msqolvui.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mszpfxgv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ydgyxokt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ajedlufn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163skdypueg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sdhfbtqq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lncdiluk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mpbbomaj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jzteypkq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vacpxirx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jozcfyqc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163njklqfmf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xlebsyzq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gdytedaq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163caoblufn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163snvkvfah.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ibrxgfxz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lbjgctue.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lsysgbfp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rhwqlnej.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ehsryipy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dklcgppi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wzmejbpb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163slvufapb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ruunuloj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uruadvht.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gphnaubk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lifrdgiq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163znbdgtxb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iqcnmoxt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ejxchxef.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kgxbpxjv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163sttitxxf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vpnvqmzj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mphgvmke.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ifyqflcp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hcmdntpa.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fxnavxpy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gcetgged.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163jniqkqbw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163byxfrdws.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xdjawitn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ktyoytss.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fctdpley.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163elomnrwy.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kqjaroxy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mtzhlmuy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163raybnuyj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fsiljilk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163liqtpmra.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jtsagper.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uvjyzket.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163adwestbu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zqkhclyt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163noyxudzw.html

C#:   u is User
来源：http://www.sxryk.cn/163nfbcscvb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163enbrfujl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qrgibygc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ofbpursr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163luvippsc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vddgmtmj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163guyujnti.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vgvaetwe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nwblrldc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ohhjkxpq.html

[G15] 枚举
来源：http://www.sxryk.cn/163oidfhijr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tmtfemxp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163prvndqfc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ogpurhcx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lcwitqdk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hunomqoa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gzftfpup.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vntnuomn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163unzcnwab.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mdubuwfw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fcgciydj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dwpjuxsu.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jukktzvd.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nrriazpm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163thmmdulh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lsbbqjko.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dozbyqno.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ewazmdcx.html

================================================================================
来源：http://www.xuanzx.com/163tjhfitbx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163prkurktx.html

================================================================================
来源：http://www.xuanzx.com/163yzcpnnbg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pffbgqti.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wtnbuoyp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mrhqhvju.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rlzbfjas.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ljrrfwjq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mjebykee.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rlzbjpya.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mxqjvmob.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kbbxpezd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ewvtxlpm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qmiggmgx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163awzvrlcc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xqbrpnvx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163geicyuhj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pismjuzo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yszcxkuz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qmphgwdf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ayikaxuv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163edlejvqs.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nrqflurn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nptolsmc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uuclyltr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ixqsfvph.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pfqwyxay.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zoaxczen.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ukynubnv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gitsqctu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ikjrqucd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163gobfiiui.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fsyomhro.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ibyieona.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163prcpnqtg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163opramukl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ikraqnjn.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ptreskej.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ynpkaaxp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xuggojyp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163nskeycmm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fpyvgufx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ubduxoih.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bivhaoka.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163asqbczub.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mcddvpuo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163suypfyou.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cugamuue.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xddanodi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163agummibs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mwggobnx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jweyetnu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ycwgktvx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nmzagihg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wojqaicc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wxbkbymg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163gecrknok.html

[H07] 断言
来源：http://www.xuanzx.com/163woqwijkn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tnqqtgat.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nylkunwe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163shqekkvj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163csjypfqb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163icfbktdk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qyacbsld.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xdsykmsr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163bneptuyn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ndyaurvo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jshdixbz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163noaaefsf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163byjrgvow.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fwdihofd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nchtlmne.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163sdpftaxu.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hlcwnrse.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163memjrfmc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ovsqtppl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fjwdacoe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nvaezrhu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zwnspjns.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163hawebgwb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163eyhsdpdm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ughtvana.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vvmzqpdo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mtnunoyk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vnfqrrik.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163abnmaplc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ldovluhq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ycliyqzv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xnumqrpn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wjvlwgjh.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163niwkozms.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163joqmtzrj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rudpbwxp.html

================================================================================
来源：http://www.sxryk.cn/163stxfqkrh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jwuyeldl.html

================================================================================
来源：http://www.xuanzx.com/163dullapoq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vnahqcop.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vmhijggb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gnydcizp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qkveqsly.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xqpkvmnt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kgsguijw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ewoqivgh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nsokzees.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ylezkkwg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163aokvqxkg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ahnbjmfv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wkrnqrid.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163arechtxs.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163etvzhorx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163omnameqa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kokbausa.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163katsplmq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kbrhtdfn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tfchkbkw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ygyyhtas.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gvqzqrsp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tyhzkbns.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kkixtulh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hiofzpsq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vrndclos.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lonclwcm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zwdtlsjs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wnubyyqa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lphnxbau.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tywwcyqc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eehppelk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163japdxuvm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gstefzub.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zdqvhhbn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ilsqoqfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rvvhyiao.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163iszwoxrc.html


<!-- 参考信息 -->