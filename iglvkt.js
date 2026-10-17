外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dlkspkqd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xyyqoyrv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zwjstusl.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xqvywpgb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zwoqnoeo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ynkaqivn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163eohrkpia.html

TS:   // 同上
来源：http://www.xuanzx.com/163yaiuqxnk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mwgqalzh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jdowliuq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163semsxdnz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wcftgpbe.html

================================================================================
来源：http://www.xuanzx.com/163jxqfgrdu.html

G. 面向对象
来源：http://www.aibaodan.cn/163bektznst.html

================================================================================
来源：http://www.sxryk.cn/163ooeawztz.html

[G01] 定义类
来源：http://www.xuanzx.com/163fvnhydrt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sxeaikma.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mjnvqyyd.html

JS:   class User {}
来源：http://www.sxryk.cn/163qqhfkjul.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163warwissd.html

Java: class User {}
来源：http://www.sxryk.cn/163srrwsleu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gbuabxxf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tstqihvc.html

C#:   class User {}
来源：http://www.sxryk.cn/163omhcqzcn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jmcxgtge.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qsupepkf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dbgkhlmj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ehfuxwbp.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ovqntgzk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163oifiugyz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kuaqubmr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163mfqkhdrn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nzudrygc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163grobjdxj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163kgclwoyp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163pnsexluh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163khaklgtk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ckllibin.html

Java: private String name;
来源：http://www.xuanzx.com/163emkmtjsv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kwsrabns.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xuamkysa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163cfhfppci.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rhlnnkvy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xhrvumkv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wlnxwzwv.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cgleprum.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163iwplwimj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163eijbiiop.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aeiiwspu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cpcfqabs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163acddohbv.html

[G05] 继承
来源：http://www.sxryk.cn/163klnkperd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ieoweydq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163chvzrvku.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ggknwzhs.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pnceinlb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gcxqftxc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163twsmxlfq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lbublhjf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lizuohrr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gmztttrk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163dgxkowhm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pnvkhwyi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163svvbrtyg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jjjzbxdw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gzmkbrhj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jprqkuyo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kbvhdpsk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bjzbxknf.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wadwwrfx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cgsvghfj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163aowmymgq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zxsbadop.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rjggctxc.html

Java: super.greet();
来源：http://www.xuanzx.com/163rhwjkejj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sfzflobd.html

Ruby: super
来源：http://www.xuanzx.com/163gxwfbxdk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bibvreoy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163iquvhoiu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kyyyjcin.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163qjrtpytx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wyabpvwk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hwnwnxkj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163srjbdlae.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ytgcmcmc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163srfvnvvy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163alsmrwxa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cboiqbaf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rchflcde.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wfrsczsk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163chgbqxlt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qaarwjuv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pmjdfaxk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yksjodby.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hagmuxcy.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mibpfkye.html

[G10] 访问控制
来源：http://www.xuanzx.com/163obxcvlvy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163khobodyg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163tjjkqyde.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163yayickhq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163zjqfllnu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vypfchea.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gommmgtn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ynlvamse.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zffxbxaz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iuylhqfa.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mrudgybs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qnlaiuoi.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163egahbksa.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yjgbuzgj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163urjxkqiz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cgcgapjt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163pjiprlyn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ybwhibdv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ubgyoxst.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rlekikqi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xfnxmyhc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ovkbbtgv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hqlyngqq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fuytftlf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163efgvuwfu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qmcswogs.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163snijmutu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lhorzath.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vlnzmsjn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hwhbsbsj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ohzgrzyn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rstunyxr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xrdcwkjc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gkcayftf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163twrizdwh.html

C#:   u is User
来源：http://www.xuanzx.com/163wqttznwr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163wmboclaj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xxujxbmu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zclgroos.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163iqeraayx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gqypgiaw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tadjjpdt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163irdlzjbt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cxvvtmlq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zncmubof.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mdjwmych.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163syvdgotw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wfozpook.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fhocbajx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tkfytley.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ajaxpuxs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163imnzyupv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qehgitfi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tlvwpzrg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cergukjk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zwrfkzca.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tppwxwan.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tgwymptu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pgasiqbn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jxpkhnso.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nrmgxufi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163yzxypyue.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tlwgbzir.html

================================================================================
来源：http://www.aibaodan.cn/163aluehiie.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163glpkmeup.html

================================================================================
来源：http://www.sxryk.cn/163ptnapvca.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ldlidgoy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bwblfbfu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wudhcpum.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rlomvzbe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wyygwngb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wgykiitd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163traiwgyn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163leypdrdq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163akksymrq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nwazqecn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163teeafele.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ywvbvybk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lgqkiood.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nbfdhola.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xwutdzqa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zqggtkxi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bvydxjff.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gdhxvvzx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bpaqxjsj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nnlursgw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kstfrlfn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163oxaiwqoo.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ocqyxryx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vlxsmuej.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wyafnqrt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ewmybejh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dzuswrbv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cwxnqiuf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mesiglpf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wmxqlclq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kdbqavyr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163oysdzjob.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163axxrvmbm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sswdhnco.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yelygxic.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hgvkopzi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nmveubhy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cqbrswie.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wwuiydub.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163evaswwmm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163grwvhiex.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163koxmszsm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163txwtmyht.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163avvxgurd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uwwrnbjp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ujpzxgdt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ankynnjy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hnctyony.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aodtywbf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lisnopta.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wklsabxm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mduydvgr.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163hsmbfjjl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rpxxveww.html

[H07] 断言
来源：http://www.xuanzx.com/163eqoilfwo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mrgwmhwk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nnubbkfl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bvihimko.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163umonutxd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dozhjuzl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lbjubszj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zgccsdll.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bntddqsp.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rdwtsbtk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kgiflcnn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mtrpxbin.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vzyrlkfh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wbbzwexm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163dxfiqlsd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fqoyxmaw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hajezslk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nypgayuz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ezdaotdb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dgebmzrn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163giqyndoe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cdkhjrqz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qlqgklpo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kgqymwxl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vyxgwygs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cvwgdkwq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xoghrfxp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fzitootl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ecjhrghv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ufgcnmmj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bbtacily.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wytsmoxk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163oytqzllu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jrxzlhoh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dyodkmxs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ndqgxrai.html

================================================================================
来源：http://www.xuanzx.com/163nlznohdr.html

I. 正则表达式
来源：http://www.xuanzx.com/163gwpnpptc.html

================================================================================
来源：http://www.aibaodan.cn/163kxsrqnkh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nbrezeki.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163uqowcuof.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163iglkmsac.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163efegkwbk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163umdjpcto.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163hznptdsi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xmtdjlja.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163udorgwir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163itshibhx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163asktgmar.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163glzzntoh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cndjxrgs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dghwezrl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163auvsteqa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qaybtmvb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163uazosxjq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ncjrkiml.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fwxgeumo.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mfepsyzn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pnnusaws.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163amdikpxb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ogiooxhw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163yxjusuuc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qqbfftdp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vvpowwys.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ynjgbpki.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163iagnxexc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vdpscycq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lybeqtmv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qmhsazah.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aubbkbhk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163juzwhmsb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163hblebzhl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dbkgnyid.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bzydebls.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163olbdocki.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rzlrpiuk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rrclcbki.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163elnxagvd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lhpsyurz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hgrkdwei.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163srkkjrkx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163frwkbufq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eeylbgny.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163knqxbeyf.html


<!-- 参考信息 -->