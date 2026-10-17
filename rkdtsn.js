外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cwaxcxni.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kfmzhkfy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yojhpewl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zdutgxry.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163aqckbraz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zeqbfyrl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xnedqjts.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zdstxurd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163odpwrerp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163nsekhhuy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dlkmvpdh.html

TS:   // 同上
来源：http://www.xuanzx.com/163xyrtziae.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163muaceega.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163omvdnwvt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nztjhpdr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ncfqprcd.html

================================================================================
来源：http://www.xuanzx.com/163tmkwrsbq.html

G. 面向对象
来源：http://www.xuanzx.com/163iwmuylec.html

================================================================================
来源：http://www.sxryk.cn/163gjruyxzp.html

[G01] 定义类
来源：http://www.xuanzx.com/163tjzdalrg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mjalrzgj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fqfcmmwz.html

JS:   class User {}
来源：http://www.sxryk.cn/163exneqtrb.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163paccwpxi.html

Java: class User {}
来源：http://www.sxryk.cn/163qfnjayky.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mikkamvi.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kqzykjkv.html

C#:   class User {}
来源：http://www.xuanzx.com/163bjdndhuh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163svubcovn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lgzudhro.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pqfdomvc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nsbroana.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lwxgrnpy.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163diyjagpr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rvoxgrpi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ycdfretp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xoilfndm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gekslohy.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163yfvtatno.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163erspcsav.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163pimvlfcl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jjvwctml.html

Java: private String name;
来源：http://www.xuanzx.com/163qatswvsz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hylqnupp.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xrbrcixo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rixxtyta.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xmpxbags.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163feuxegnd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163imfecdux.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dcrpuddb.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gegqfara.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163njkgoxje.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zecrwqod.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163axefsgwd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163oaylnsoy.html

[G05] 继承
来源：http://www.xuanzx.com/163uctktoln.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163liipvhpr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xwgldpfk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kjjcypro.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lpviybkv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wligapzf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wbqzzrxs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hourqwlh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gvfrlfeo.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ezgmocmw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cpaqzpht.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hqtnbvlb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163oocyltev.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163benklpxq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qzuivkcw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ojxikyfn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fqpmewur.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mhrpzhha.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cfporevu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ujtohzff.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163doovjhrh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qftyuiyl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tfboruhm.html

Java: super.greet();
来源：http://www.xuanzx.com/163ivrzwuqz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163dccbrohf.html

Ruby: super
来源：http://www.sxryk.cn/163rctmzfnv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qugevbmi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jsogenan.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cozchidz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xxihfsiz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rkbhjdbv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rorpipwu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ypfbfewk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ojwhktuj.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hsoapuxv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fqbpjkbc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163aolbxvas.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nfgighkt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lggjhfrf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ghfpeadb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mfpgpiey.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163kkpjfbyx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wymhxklk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163eelomwzc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vvxjqeqm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163byeohscx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vyoebrfb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xxiyxhlx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163digbbyam.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bvoxrbob.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163agpbixwl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ciwbnajb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163fmwmydxz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xlkdwbpd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dfcnyapt.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gjzrqdcb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ujdkwlkz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wwejcuae.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163socypopy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163iuljtxdq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wtlrzhgz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163sgwhmpdd.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xzcmwcsi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163aciadzoq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163aorztkrh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aanofubn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pptsghng.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163apmkkczw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163llgczras.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fscsvlik.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sxqppzfm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pkdfmbln.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163koktezba.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ahymrorz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ndpzhjnl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163wksnkvhs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pgkuhxph.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jjhltegk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xdyupxoo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nbodcfhv.html

C#:   u is User
来源：http://www.aibaodan.cn/163vqirlaee.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rkjoupgc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qgeyvrui.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dxaxrmmz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sdznlslu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zerpipvm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163shjdmxbq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163shhculkh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rikpkhqf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163nmjzcitw.html

[G15] 枚举
来源：http://www.xuanzx.com/163nxsuzdsx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wwqvtacu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nkcjbpbo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tasyuuub.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163puhtvwbs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dnyduzpk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vatizmdv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163avudgbbl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bqscuirx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fbultabr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hceyyokr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163srbrfobb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yubnftba.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163duxvvgjx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xzxzbdfd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fnmdromn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163edcqfjwx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kqlafzcn.html

================================================================================
来源：http://www.xuanzx.com/163yvvmeozy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jrerkdmg.html

================================================================================
来源：http://www.aibaodan.cn/163khlhokni.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yoemuzyd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163evagpwot.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pjedvtsh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qlsiawdy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163qvfkdpca.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cajblfkr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yhnqwdkm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ctxelafq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nclzoslr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zaxnwgiv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hwwuvdbb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163estckkxc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sqzhgtwp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xszhuwnp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tfppnrly.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fjzvpuoh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163iramcdmn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wfhukpzy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nsjqgzgt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163asjzeyzt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xhcbwfhi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ziapstks.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sobbulya.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163czcgdglz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bomgiwqb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jfmcjgtj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vbojpydj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vambitrx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gzwgbwwy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163sdacmwse.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163beszmjug.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nmvwgypc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163geufcufz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bevgieaa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163iubnxuyr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163llklwocy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eoyjerkb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dgaogbuk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163exzemmjq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qscgdwvy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ugqhvvpr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tynfsfnx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tehxorfg.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ogbubtue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gzupcqny.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rilrlsrs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zmssxlhu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qmsqirdc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yzymqogh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wbbbijqd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zcdabqxq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tisyzqzy.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rokrmuti.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163verkqhmo.html

[H07] 断言
来源：http://www.xuanzx.com/163uncqayyr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gjccytie.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eveuipgn.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rgyyqmgt.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iglkkrnv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dgzwszhy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163neydznst.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ljuxwmhu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tavhydha.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hgefemvq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wzxnybxk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ldfeqfvw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163acjbmibx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163sblsfuli.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163tuumbfid.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163fetfzopx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ijjcikcg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qecqsskg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jpswohom.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gbxbqswa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cpcvpjyb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cqgztfxj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tgwcelzn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mkjlnrif.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163diorinua.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xisiiyvp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hfdhiuvw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tyyndttv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ezhelqku.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fdeedqni.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dvwkhhph.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pnzooxks.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vxhoxpkp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163egjdzuwk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163baszgnsn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wrtthgbs.html

================================================================================
来源：http://www.sxryk.cn/163agjwbqmb.html

I. 正则表达式
来源：http://www.xuanzx.com/163lfmeqiub.html

================================================================================
来源：http://www.xuanzx.com/163lmkntydd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wnagfvvy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ldtgciah.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qkjfymzy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pvynpcvc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163shgcoebj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ltylqouf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vrqnrovh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163dexarutw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ctiffmdf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163vwkkmmqr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fuzeaksi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163piempngp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163phoqdrzq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zivmdwdx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vkdoogkh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bpwdfqti.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zouomtxv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163huaiosyn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163abvunqwb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lsqzwlgo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mndbnlqp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163fsyzkqyw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gvydivor.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tmczgcgp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163trmuqzoy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bbjotmeh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fuuboyqb.html

[I04] 正则替换
来源：http://www.xuanzx.com/163svfghmfj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163dkaxctuu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xtktqbjj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tvmtrpnm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zyqnkzdf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bekvwgcm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kffomaty.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ewmlbptg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hjdbkuoj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nytqiadl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mhalpunm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hiccchei.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tejzeyfx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163erkydcid.html


<!-- 参考信息 -->