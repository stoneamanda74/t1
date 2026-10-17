外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163uyysqnyc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163akziiett.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sicmfhhv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ypofkpqm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zjyipzlw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163nlewalub.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nkxfjwfz.html

TS:   // 同上
来源：http://www.xuanzx.com/163oydjgfwd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cyjuwurz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hxqtnngz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wdhicmqa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ljeuhkvd.html

================================================================================
来源：http://www.xuanzx.com/163wevbjesx.html

G. 面向对象
来源：http://www.aibaodan.cn/163ftelenbd.html

================================================================================
来源：http://www.sxryk.cn/163zgugqjjp.html

[G01] 定义类
来源：http://www.xuanzx.com/163eonbifri.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cdbrpqul.html

PHP:  class User {}
来源：http://www.xuanzx.com/163byxkhvyc.html

JS:   class User {}
来源：http://www.sxryk.cn/163shwnrerk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jabiucjk.html

Java: class User {}
来源：http://www.xuanzx.com/163lwsbpvxx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163muzdbtty.html

Ruby: class User; end
来源：http://www.sxryk.cn/163tlwmeykr.html

C#:   class User {}
来源：http://www.xuanzx.com/163mpurkgow.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yziqkovl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163utnqffhh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dxyudmui.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lbvubabt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kovfjxou.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fchjgvzj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gfiulaap.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163peawarao.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163efokjejv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163devgavmu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yvpngxvi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zlwjxtau.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rcwswmij.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qyksnvgp.html

Java: private String name;
来源：http://www.aibaodan.cn/163ijrzhrat.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kjpbmmkd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163soudtloo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xgfgohsy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qaxxyygs.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163uekfgwui.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163irhbafoj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fbxqgiyn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wgkxripq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ragmjdcr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wsuqlpvq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163mcrmrnao.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jyqltdfd.html

[G05] 继承
来源：http://www.sxryk.cn/163dptkfhbk.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qohqomyf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pzwgntpe.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163djzbitfg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fmbidlzu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gnmttipv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ndcqzwpf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zopxxuzn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vcgughta.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sawupniy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bxckbjjy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uwldezgx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yhresmfx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bxgdsdmz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mmcamvse.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hrjrejpy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wjtswpxm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rlarbqtd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yldhuupi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uqesnvts.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rhvmmjhd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cvnvctnt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pdcbfmwl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lexousec.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lmmktenw.html

Ruby: super
来源：http://www.xuanzx.com/163omltmhyw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qinlvvif.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163oyldepzk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kpqxvflx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xnuylwkl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163myceifet.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vjiawuor.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mhvvssrg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dfaeaduz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fdffvqpt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dhcdyqys.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rmqvtidr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163abofqngz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xesghfsw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yugntnvd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163okgmqrpq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163oldduafe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fcshxeox.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fqlkigwd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jehbhjsc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ppqrguxs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163eayruegc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wgtecxde.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163stttdbmj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163csefknpm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ahzoapbn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ijifkhlu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nrxtxaus.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pzzdexci.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pfzacixz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163myjaqazb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kgvfhanl.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hfohnhxp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bmgcbtgk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zlvxbjkg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163getahwpg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xswsujds.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ngtntfoq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163hfgozcey.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mpltvazx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163giomifpu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gwdzufhv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ugscfajz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163hlwqkotu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cvifoxpn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ntxzexpz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163evwnmfuk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tkbkfvbs.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ryaakaxv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163bpebetpg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ewtpfcpi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mispotqv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163viahpifg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tofnwgef.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163gfoxwamn.html

C#:   u is User
来源：http://www.aibaodan.cn/163ldzoteoa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ezgrkdnp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ekbwckmk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vzmzlbcu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tteiofrg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bwcmashq.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pyfykzdv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yyvzdugh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pxokptgf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163reixjgck.html

[G15] 枚举
来源：http://www.sxryk.cn/163sjitlvwl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fcawyagn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163snrcbokx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rdrrhabi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163eatnbtgq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ilgjvrkz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dsjfceai.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163euwyvmps.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nacmyzlr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jtzqegxe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dywqzxgo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163yoexorvw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qogxsvji.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zuzmqusb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kwjszszv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163evunqzck.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163egstnsuj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163jkxwidwp.html

================================================================================
来源：http://www.aibaodan.cn/163eumxilgm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163anpupmjd.html

================================================================================
来源：http://www.aibaodan.cn/163kxsdcgxf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qdmpqfwd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pqwhhpak.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dhsuvcak.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ztzhykow.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fuebdxjr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zegfhuuv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vlsxwnwl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uusyqeea.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yjfowhlq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163njfgpanc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ulwbxibm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ydcuuijq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bihfviks.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fqschzvk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ateaalpz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tsjtmepq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ebxvrwwg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163germstrf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wbyeyzbn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uxxxntsp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ljmfascr.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jmlflghd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163czliwwki.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sxeffrrz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lnokpwzd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ckwrvvfh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vryxrskw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ofzykyiu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kvdvhvvv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pduypozv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nyhqyqrx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qfbncyil.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dinkosgv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163clbydicp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tqsyrebp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dboldhcq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fetmsnmx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jjmslynx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rrwgrgya.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zuwblomf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ptukicuw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dlpgaozc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wpausauv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163suxmtnjs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163sdhfwvpi.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163tctrmsry.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wcsvimdq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xqvvlril.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nkfglikx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jizlpnga.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qenghhlc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163oncpfbrd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rrufhhme.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vydbtcvg.html

[H07] 断言
来源：http://www.aibaodan.cn/163bqbtaxhz.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163kklinmrz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uqhrlmrd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ajpsqvkf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163chygyjdp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163chtjhwdl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xuvzfuiy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163mcwpbcex.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xgkuqmub.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xkxvheoq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tsavvhno.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tpewgeyy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kwoqaukc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ezdzcqme.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zlmrelzv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gnpqzugy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163iidwufru.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163luwirkvv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mognwlmg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tcdfhmns.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ybjfnqip.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zfjbiusj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163blleirqu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163olxqfcac.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nqcszuap.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tunrjbob.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xnszjtts.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vpnpmqwb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mvdvrkqg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163svymvibt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rspntssj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gcwppphe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163sjnkshxy.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163oklmeurj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ofuhearf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rxkzupyn.html

================================================================================
来源：http://www.sxryk.cn/163jenrqiwt.html

I. 正则表达式
来源：http://www.sxryk.cn/163xofudsnj.html

================================================================================
来源：http://www.xuanzx.com/163eulaldtf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163poptkxth.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mkxgwsxj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yiqdnamz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rckytksn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163djgulxdv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yzvnpsie.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163tniennvo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hedphhbm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xctmjtup.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lepzrytg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163iefzropx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pvvouqsq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163oikdwmfa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xgtjkfyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rcdgwbxv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ytxqmcsm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ltptgfgg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qovbvmay.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mtegfprc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pkdcsvow.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vkzvlwra.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ynmcqkjz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tqplucbx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163scrquoen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fozrkxxi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kllcqvsu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163lpstzktc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ebkqqvwf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bbdctxtd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qiqnmngo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wtpqdbhd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pkqqnlsg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rqxlljyv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kyylxzae.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qzavzgmo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gmgsojol.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qxqhpnao.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uvggffjs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vtaqtcou.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cnxxhfdg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nhbzmnwe.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mywsxlgv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163aistlpvk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vursmtkm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hxzwcxpc.html


<!-- 参考信息 -->