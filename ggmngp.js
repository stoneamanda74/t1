外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xlbeztpk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ngawqcyi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hdknjfer.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163macinpkp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lbweikay.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ettowinl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163haanxcvd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ajauvshq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zvammalo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ldjwiobw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rqwuajfq.html

TS:   // 同上
来源：http://www.sxryk.cn/163pnoawzve.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wcmkjxqn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163txkapggx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ilujyqjy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bdglrwly.html

================================================================================
来源：http://www.aibaodan.cn/163tnfmwqyz.html

G. 面向对象
来源：http://www.sxryk.cn/163mucbhttf.html

================================================================================
来源：http://www.xuanzx.com/163sjdfncbc.html

[G01] 定义类
来源：http://www.sxryk.cn/163dvzmyqhg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hyykhcue.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ysslrwmh.html

JS:   class User {}
来源：http://www.sxryk.cn/163fsitvdus.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xojeocil.html

Java: class User {}
来源：http://www.sxryk.cn/163ewzzsmto.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163komoedfx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qrsqymrr.html

C#:   class User {}
来源：http://www.sxryk.cn/163wgvoodue.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ccnnsyyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nckgtcdl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mtgoqqgc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wclzdulg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kmarjgnx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sfjottuc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163guxuwjxh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wxqezitq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163myjqwlys.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ezhtsfvo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163iexbukgw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bwanjlim.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fdruvclv.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163myisxuna.html

Java: private String name;
来源：http://www.sxryk.cn/163vrcywcoh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163htqkoltx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163weshflly.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oaiwgows.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xzdfkkux.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hulpinje.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fjhbduco.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tboxblii.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lwovlkmd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163udgpokdj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ybncfwfv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xvjxsfqj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bmykamfv.html

[G05] 继承
来源：http://www.aibaodan.cn/163aspjuuju.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bfwmgcej.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xjblmoti.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163llcloruc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163egtbczbm.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jrftqcsu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163drkfvfvh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vaehjajk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pcsuzjlv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xzpkixmm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rlaqbkbp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bzoipmit.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gecjstqc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bylfsepk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wlwwgppq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zexltqan.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sjrvvmnr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vzvkkxgp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163epoflrml.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sbrposjs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qbwqoqxl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163pmzbtnrj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163dnfisgms.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qdeizqbu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ubqlwbar.html

Ruby: super
来源：http://www.sxryk.cn/163ubutgmyg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xnupzhkb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tljrgufx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163iyklpwzp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163elqcavgi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163khvrffff.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xglllwih.html

Java: static void f() {}
来源：http://www.xuanzx.com/163keixzbuh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163skvismjh.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fjjpcwhm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163akzhspnh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ogrxolwo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dztutnsa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lutgiwwc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vqbiqkcj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kvaifpmo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mkjtdrll.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163relusyad.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qjxauvzd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bljehkil.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wcnxxddk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163okevqeec.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qzvttzlu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dtguwour.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bsjupczw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iwrjuofd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163icurbgsa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163scrzwqmk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kkxkfach.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lqvatogn.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jpjxlmro.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qungxwhi.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tzogxccu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163thfiznyg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mfdtqqyy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163giigline.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163aqwlnapa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163yewcfdfs.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ttxwbzqw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163saxcmtmx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ncwjfitf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iwcjtaso.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163iovefrqo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hltrmmeh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qmnsypvj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uqmwrmgd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163otedksmd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ecbcujjp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tniyjnta.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tmupbhoc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rjlgnmuf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bbtpvgwd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163stctsokq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cgdfwqfd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bigxlqiu.html

C#:   u is User
来源：http://www.xuanzx.com/163nqmxsgdu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dljipjlt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jpjxvbba.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dqmojjvn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bixlxowp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163trwzempd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vajqmmku.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sjwoyvdo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bofkcaol.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163begyiugc.html

[G15] 枚举
来源：http://www.xuanzx.com/163ngojuqow.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pzcoseoy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wuamtfrb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qgvrnfap.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dlcnovpj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163oxmxitey.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hcqryiom.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163idxxcwiz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xnrakktx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163elsdwgxy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lzggevgf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kvxwsakx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ifuocteu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gcspylld.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ljesauxk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rifurajg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rbwcchdn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163feoluzqh.html

================================================================================
来源：http://www.xuanzx.com/163yrolluuc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ouqteusu.html

================================================================================
来源：http://www.sxryk.cn/163vhnqcvxw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163rsfyulto.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163oxwqjtvx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fxafjdzh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ofyhkfaf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nihutikx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xmkfpkvv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ufmuqcqh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mxqqljxm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163omizxeev.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pfetuolt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163blobpkuv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cvtvmifr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163smngcewz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yoyzcihg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uuekjdss.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163kalrfboy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qynysrxg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163saawznol.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fcisdmzo.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qxvlgbmg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163deqrnwvv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gnparslj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gftrosgo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163beneebxk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163prcdaijn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xgknizqb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lynedihq.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163jgmzmgvc.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jlslloxh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jzncqkwr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fempipfj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pmuaasiv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qepxovqb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wssmxtpn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163njerhwwj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ckchgoor.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163iwmnpksc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163emlmygru.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mnibnxnd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163eiapxmyl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kezczxdd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ejpseztc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163phwjqtcd.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cpppdird.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qnwtzsme.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163wuwyjfbt.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163emnvetar.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163qhgfhobi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dvktszgc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mdmnyiiq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163lnnpdasd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163schhnked.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163raqnxkog.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ifejjqhu.html

[H07] 断言
来源：http://www.xuanzx.com/163ojoikkkd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163btofesgi.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fwiiweov.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163soccczlc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gpawfusz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163difxrlgs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163eerrcpwd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rlovjwhn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nhugajbw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uhfuuueh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vtpintoj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tbpannqg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163joehnnfz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163agcdxrvr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bqhpazco.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dwqtymid.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163omnndxvt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nbhexhjz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ddrzvvmn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163oqisqkui.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163udiomryb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lsxjlxfw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163kydbnieb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ggygwbeb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yyouevra.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kthowhzf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ztcaopqz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nsatftaz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rjxxrdct.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wwwfigvn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xlqkdmpt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163utzyvoqg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fcrhqycr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ynokioqm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jocwxoae.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ihxgzggp.html

================================================================================
来源：http://www.sxryk.cn/163qcmcqoab.html

I. 正则表达式
来源：http://www.sxryk.cn/163rkqqzing.html

================================================================================
来源：http://www.aibaodan.cn/163mbnuomzy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163iirctlvy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tbghzgcf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ghjioldp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bnhgnobw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fdqkqpbg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dgnelhxd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163oglniyxx.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163asldesrv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rmmiqxuo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163bweazhzi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mztopgpf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163spibxend.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vevhoipc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gagosysp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163sqhvgijs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lcdjragu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fdtcgkku.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163usiczvqs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sboctryg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163shjpvjgk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tjdkgnfd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xvyvtyhq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mofdqyks.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vwnnlksb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vexelqvi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163soyffrhu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xcjtyckq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163imxrdvwu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ztncembu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163elwwqare.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mnpwsuuc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xrixbsgy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lrsxqprz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qbngiseo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ooxdqcxc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163yknlsstf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hymnbuax.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fntwasjb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zxcysxzd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kmwmhlpa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xsdwcbyh.html


<!-- 参考信息 -->