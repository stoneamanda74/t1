外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xzhjlsdn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eumnzdow.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujmbrshr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zxxbopdp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wvuyelhw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163stqcceyb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ckrgierv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lweyenri.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zfdxemrq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xmxbwuab.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ikykqnpy.html

TS:   // 同上
来源：http://www.sxryk.cn/163udbwafub.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bucslozm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fnnznpww.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ahgmbplc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dlolefrv.html

================================================================================
来源：http://www.xuanzx.com/163aildycza.html

G. 面向对象
来源：http://www.aibaodan.cn/163dzhfhjyl.html

================================================================================
来源：http://www.aibaodan.cn/163ugrtjnir.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bhdfjlps.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bkfsgxnd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gnvgpusb.html

JS:   class User {}
来源：http://www.xuanzx.com/163ewfbmhkr.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kotafddo.html

Java: class User {}
来源：http://www.sxryk.cn/163nngfzcrk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163huftiggx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qrvrrxbx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vovyvzsr.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163duqzfftl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163orfwvlwf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rybfipgp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ybfzjzod.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163soalwrtz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yguwcxzq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kglbtjnd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kqmmwnqd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tysxdnks.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lkabunkm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163llndrejh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fyxrlvyq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xshnyduh.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vyxaafwh.html

Java: private String name;
来源：http://www.aibaodan.cn/163rlouzkan.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mepmdxqa.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qkilzdag.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163focoekqe.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yedytbbi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jkxxbfsu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xwrrdzyn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ghoxvwnu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hhybqgtf.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163omsnuhwd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163pfselsee.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ycvfjxmh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jqgbiher.html

[G05] 继承
来源：http://www.aibaodan.cn/163etgnogot.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kiovwpzo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wseyormu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163alvvfxho.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wtcckijf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ttktnnwb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163axozckvw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163msdddhax.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vthzzlxe.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163smycuycb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163htcoforn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zfdlsoje.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tfolxewx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kewsykdk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wcsvyunp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jlvbtgyc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hqmcaogm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rxzjnvok.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jfegxkkq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ydvhceln.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163daqqvqfu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jltrmyuk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ffbfgopw.html

Java: super.greet();
来源：http://www.xuanzx.com/163fieekrwd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qbjlhczl.html

Ruby: super
来源：http://www.sxryk.cn/163ojhunhkf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uqzlgyhw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163waqbnmiw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xlvbajhe.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vmlkytmf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rvdaojhh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tojcnbex.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gfoynacx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zzvvjouq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hsfziknt.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hyomjxrr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163abkxdscn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cjldwabn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zeashvme.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nalpjsun.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sjcbeegz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hsfbwofg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163isribfcf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gvavlhjo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163orrxrohr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163amnnzbmv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163naxrbeij.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wohxqoht.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zqxuaqno.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vqsvboon.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ctamcfux.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ltfhsxid.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rgesjrjl.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zawikbuq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zkbouenm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dpprtyde.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163nieaomgn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163datnemhj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163faesttwq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wfcbogqz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163irqhokfp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163miqnupcg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bprrmnly.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163legjgqpq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uetrgbuj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ssjwqsee.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qmtjniva.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fqtpujqb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163orncmxkl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xkdewxjo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mfvykodi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163alugghpl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fqmcorjz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ohxkatba.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ltwkiwxh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163oarnufsu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ofxjwoxg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163aztbquhj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ycjyqbng.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163uvhxrbbt.html

C#:   u is User
来源：http://www.aibaodan.cn/163avogehpa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163oukjfuum.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vbeztkxm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xnujunkq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nctguxla.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pdfgkiwv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163usbwhrze.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163sueujmhw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163odigcgug.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ghdyuuiz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163sdlbkxfx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163edpsxcjq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wkkczges.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cxvhvphp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nzmwnpkb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vyyehdtp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163nnqrzmyf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mlkqvnzp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ngktscns.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163usqczymj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vbitccnb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163szmajnae.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zblkfirq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uqwxpmbf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hfaihfoz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163oafkxzow.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kvotgtid.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jfvgsnpa.html

================================================================================
来源：http://www.aibaodan.cn/163vieljzen.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qbffjtjn.html

================================================================================
来源：http://www.xuanzx.com/163igdxcrax.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ltlfmstk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ovzyucws.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bgpvadgz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163apxqexnl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lmnqwegx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163txoyesed.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163hnjciwvb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pxhdrxvy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ngdfzmmm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163nszthnjb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ygegjjwl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hjkghtfm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eccjhtfd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tcqnylyq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nrgvqvpj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ywdjrsgt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hstxxtuz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qmizlqke.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yfsqxjjr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163rsfdijwj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tivatvyq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xvscvtaa.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163srrwdiqk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ewvbtthw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lklplfzf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lqcxokso.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xmwjmyyt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ruiulzfr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hzowomqs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163meixzuhm.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rgbmtpyg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163trmrrbte.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mflpxoim.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bqclkeld.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nduuwlly.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pcbguxjc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nnlhgnco.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hieqpvud.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163grohtukb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tyhqoogt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163esewhkha.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rdjlmbwv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lbxgxicw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lzoftpdd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dyxiiydt.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eabwhslx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163swvsfivj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163iwngkksv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nxzewhbr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iihqxhju.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gmxmsijq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hengmmms.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pabccugx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kedizqma.html

[H07] 断言
来源：http://www.sxryk.cn/163nxsitzpn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163yppjwgfb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qvcvvwho.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pkuedwyl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163shskjjdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gxsbwstc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bpqjrpwt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ydiodert.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mugynikc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fmuikizt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163naodsdxq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163nogshemu.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163knnafjyj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yeoqvmxe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163loxvupnx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163psxjwkdq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163dyswpgqe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163nnjzxvky.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ujwissqf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163mqhxiprx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tpsdrgou.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163trcncont.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163acoscgua.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xpgatieu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yimldumx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163esxnrsit.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bgvrhkwj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hupxmdwo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dnoqrhnu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vwibjgio.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163otnyjrsq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163amsqyhqi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vmmuogdv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xchyydlk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pufaasqc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rzltfjqd.html

================================================================================
来源：http://www.sxryk.cn/163uhwsziyw.html

I. 正则表达式
来源：http://www.sxryk.cn/163cvefxqzj.html

================================================================================
来源：http://www.sxryk.cn/163cxdqjfgk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163frvkmiui.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hrjfkees.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uiuzzmni.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163apgpwrnq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kmtcpxhb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ubyfbysp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wayagcxr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hsecarjd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ylprbisq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zfgtrhxc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vjywrydu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fgueajaq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163almwkzdz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163swigskpn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lywpdmbm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yixiswuc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ftfnesho.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yhcwtqno.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lizfoqkx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xzlxnkrw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tamyzvsk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hibasbcl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gmknwvzf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nincicti.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hrxledmd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dtsmxwrg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163erkujgqb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hdsmwlvu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163yxbvgsrs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vaesyvsg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163byyfsiqa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pcwntuzy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ljdsblcl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ickxutwp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kuqwmtbi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gpehsbiy.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ansxheue.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qmpdllqt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163axygrkrf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163atlkarff.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ewwglhwv.html


<!-- 参考信息 -->