外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163trxbkqov.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163blxxshtf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qxknphie.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ccpuxppd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tckmwewy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kblsmbla.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zscgvxjh.html

TS:   // 同上
来源：http://www.xuanzx.com/163nzjlefxl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163affluqdf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163uektebat.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163azulexgp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163lyrgghiw.html

================================================================================
来源：http://www.xuanzx.com/163xbrtacfq.html

G. 面向对象
来源：http://www.sxryk.cn/163vmubstgn.html

================================================================================
来源：http://www.sxryk.cn/163mvwomnmn.html

[G01] 定义类
来源：http://www.sxryk.cn/163pkvooenh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163psamrnij.html

PHP:  class User {}
来源：http://www.sxryk.cn/163srpllvep.html

JS:   class User {}
来源：http://www.sxryk.cn/163xlwprzqi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mgqxzzev.html

Java: class User {}
来源：http://www.aibaodan.cn/163btofzdrd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ggjjgczd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eckekktt.html

C#:   class User {}
来源：http://www.xuanzx.com/163umqnyroh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ifwgblmp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jojoyrxf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163olmeuspw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mztlokgd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ntwwdrft.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163urhfpqvx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163krwwaqtc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lhwfngeg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uqqkhpkm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gjfkoarm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163usbcuudi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gxupklom.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hazlbhjp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rwkdhcso.html

Java: private String name;
来源：http://www.sxryk.cn/163vdrafamv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qgvzrmlx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pbianlmg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dzetoemg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163snvqflbv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163drsoowxh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vuvvixep.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ncmmzvlh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fuyfufgp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wseavyko.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163voocgiwp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jcamdick.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hbziwjio.html

[G05] 继承
来源：http://www.aibaodan.cn/163lokrhuzo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fklarcvh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163skryqenx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ogyrspgx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yzjwpbwx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pvkkhsxb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jdjpfvjs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163riggigbe.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163chlhnlpj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gdkpgddl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bcibtxfk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nguxcllo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vnbbasoe.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hhyikgyy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163baintjmx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yglkqoue.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163drydqtmc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163crtwrlix.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163bpxyelks.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lrkjiwns.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tqteboww.html

JS:   super.greet();
来源：http://www.sxryk.cn/163shwalcrz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163saxukueu.html

Java: super.greet();
来源：http://www.sxryk.cn/163klvvnavb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gxkafjdx.html

Ruby: super
来源：http://www.xuanzx.com/163slyheqik.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ktnnwnsf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ajfypckm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cgsmoxyo.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rgdyyhtg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163gfuuyuqt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kyintffz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163iftognvq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bppnegrn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tfcikaon.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nkyyfqdn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mpglhyhr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163oaunfoxv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163klulkcny.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163iusfwpcb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cvlnfysz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ctnoqafc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zfgnytkw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wbyxkctd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163myrvxpxs.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ptshmooy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tinrtkdg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163cmmdflbz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gpuuvlpc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163enlxwnzy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163foblgtme.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jqeujvxl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wfzegyie.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163knwzekos.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163igpytnpq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kqqrehpm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163aeghaudq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pjzuradu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fvetbcik.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163apmlycjs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ugjpobsj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gvrndnmw.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mgnaswfy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fyhdwnbv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163pfkgpqjj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bvyiveoe.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xfoiztbw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lufkhcsu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bbmtlxkc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ddksozgk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rbaxvcpd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dktkriwn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163svvgdgmk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yoldwczd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163faizrjqm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163atgfrwyx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ynfkfwxo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163tbeylyfy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dsarupat.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xnkslysd.html

C#:   u is User
来源：http://www.xuanzx.com/163qpsozdxc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163nujifrma.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ipyehhrz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163clzusnqw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bjuxbold.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bnqcpfum.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163srlsbylj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ixbunnky.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cinlzbji.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163unuxhfsv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163epjnjxrc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xexozzbl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zhpuiuqb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vdljrddc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163emtadmqa.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ozsfczoh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163snxlgtqo.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163kbgjnulh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lnqfslxm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qrhujjkk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yrtoiani.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qpgkufxt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ablidofd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bzuvnnhu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mgqkjirn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163naudjoui.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163frcmjdcy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mtjvqnug.html

================================================================================
来源：http://www.sxryk.cn/163yvhozser.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mgkkgcfw.html

================================================================================
来源：http://www.xuanzx.com/163dkvjjibf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ndndtmvq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163oexmanoo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gjkunvkc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hstdqdmg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zyjthofd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qdvevrpy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163plliwonb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wnrcxboz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fttkxmtd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163omzcxowt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oqqqtrvz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jxydqcbl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jvzlbfrq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163igiuhatk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jbmglnfu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163elbwsenr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zobfzodm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lrkkgavf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163umtwcukb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163raffpakj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ursekdcg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vvrextdx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tkmhmcuu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163loxnzuge.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163oqfzfhle.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163fgcepcve.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163alvmsyhs.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163znrsfjfk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zmxdtqvx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hvswjvbe.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xpytnhal.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ptjsxqif.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ffoyyzxn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163aimrbjmc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163liygfbmk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lanvspqv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163exyaqlma.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163kzvnsgdx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wwrmjrju.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163molyypra.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163natourrl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hdjnsgwa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fwfsxhjv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rflpcese.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zlmuusrl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163yezuhfjd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xzypvxim.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163atccgtrz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fzxdzpef.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ugrksehn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163puuedpyc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kzyylnfk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163slphbwee.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ytiabhhj.html

[H07] 断言
来源：http://www.sxryk.cn/163toifswpg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mmcxsowd.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wlqzkyox.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qolnkwwk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nqnnxhet.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pxnobgun.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ngkrnoav.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163npixkswy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xcstpewn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ufqfojlz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163veeijdtd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163sdqhmkap.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cerlkwaq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mydtzutb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163oxzpmhuj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mjevcdky.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vikwehjg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kadxiuwm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163pbztlmqe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lfsouull.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163biqrwura.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kqlcecyv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pupanvzu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bqpscgpw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163geqgosow.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mvojnfwb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qiplpjbe.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dkhykyef.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vzwmxnda.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yiavummv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fllgpozz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fqqhycfm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zryiljgg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163yusdguga.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fasourgu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wdflndix.html

================================================================================
来源：http://www.xuanzx.com/163ghphmrwb.html

I. 正则表达式
来源：http://www.xuanzx.com/163bofoqbsk.html

================================================================================
来源：http://www.xuanzx.com/163fsciczvk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nlugghud.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163yijynokj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163phkfnewq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163iozuwpbi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vqlcvqrd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163odnrowql.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qhbdxmxb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xyxvthiy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cnuyubjb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wsathqkj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bgcczeec.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pwzrqtjn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163htxtrstq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vxnelsjk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lkyevcih.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ffiwnvsg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163huhrlmts.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vhmkqpwl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163raivshls.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uybhhmgo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ecrtkmkj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uepzghmy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163movqovxs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163btjfenml.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163artrizti.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163imiyfnas.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163tbhzcqwc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tsjtsygi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rcpcdcis.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163afqwpixd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163izjwdsec.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jbdcjzcm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ohcziwkn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tzbponph.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163aktyevof.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jusulvwm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163itquzgjo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ldcygsaa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hnofqsqo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163naitxlwd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cgrdlzvr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dalqktlx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rjtimkwf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gezhgkiw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ydkytdvw.html


<!-- 参考信息 -->