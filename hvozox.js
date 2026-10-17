外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163peggkenh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fmupxcgk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mtwjgkuz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vajlshdl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ygqmshya.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hcfpbuhi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163guqyqrls.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wrtkwepq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lqnucvwo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nmfelceu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddwhzxdv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163olgegyhi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ponvjxyr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pyxykiax.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pxmeygvn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163tbrqgkpv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gjnzprvq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ceofxxvg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ahhintgv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hutvghny.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ozfkavse.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163odmodmld.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mguijjap.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ndeyaipv.html

================================================================================
来源：http://www.sxryk.cn/163mcjqytsr.html

G. 面向对象
来源：http://www.sxryk.cn/163shwmlrdu.html

================================================================================
来源：http://www.sxryk.cn/163urkabcht.html

[G01] 定义类
来源：http://www.sxryk.cn/163ejuqazaa.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rjziergs.html

PHP:  class User {}
来源：http://www.xuanzx.com/163eryucxel.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lagpbdaf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163myzygaez.html

Java: class User {}
来源：http://www.sxryk.cn/163wleshexf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163cynaskny.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ojurckpt.html

C#:   class User {}
来源：http://www.xuanzx.com/163uvwbvjzo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wrtolhgf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wchckivy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163obtxpcrs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163cvowzzzb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ffpkrtmd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wvxyabxa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163etimkebv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ysyuohqi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hvdrurmt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163doisvqcp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wnnatuap.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163stlkpqhv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dyjpmvel.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jeuuuhkl.html

Java: private String name;
来源：http://www.sxryk.cn/163usxngekm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nkdgphiq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gkscwxtc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ydysalhf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mlrgpknc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jtuounfc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xxihzikj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fscfutuk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ucfrkpaj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163avamknap.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hsohkwpx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nyixfhzi.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zhwwahdp.html

[G05] 继承
来源：http://www.sxryk.cn/163jpcybhbe.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kdxyjcrk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163awxkjibn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vjkqvxyf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rtampdgz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hesgbrfr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kuiwmuam.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163oocewwyw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gezbggqv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wryqvuhm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ywjvnodc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yfzvajxn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163csezzmxt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163svryzfjw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oyolkpcb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fnjuujuw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vxfwaidh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jpuuqrmx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fpbfjuco.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mjanmgpb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mhafwjmd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mepojpgg.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163pqdkqmfa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xoxlqhyb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lqcqemlr.html

Ruby: super
来源：http://www.sxryk.cn/163mqjobyfw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bcwcveoh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wrphstwm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163upnvpaic.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hydulawv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163voubtgeh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xruvsxes.html

Java: static void f() {}
来源：http://www.sxryk.cn/163eiyvccsq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rdvlvocr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zrllkgxq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163jwimfuev.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cmmebvvx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gtizsfzg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pvkutbad.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hzrpdpip.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bgnjsvtw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163iblzruay.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jdkkwcvd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nrhmfhhz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tfpoflxv.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dazevzfl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jttgafmd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zermudab.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163infmtnla.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rjdvpkqg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lrqfknyd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pfbuwdlg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yweetyuy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qzfigdyj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163psowxmyd.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163erzjcghe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163gulqvhhd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163izgwvzut.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163yihjtqnz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tmqgwqzt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ubzgfwfv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gksnytue.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163srzbyrru.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163shlxjxtk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jofwprby.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kagynzis.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163szimwtof.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mcqaqqdh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ilkjaggv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rliorjlb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163orermfzo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nhxswawp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cbfmolwc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163aoerzvcq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163abehnqtt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163geksrbln.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163yaewieaq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163amsdttjy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wgrvejhw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163suqacrkp.html

C#:   u is User
来源：http://www.aibaodan.cn/163txttiiip.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kgqxivmx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xclwacli.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163abaoafed.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yxtgykgn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hixpacpu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jopcaais.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ajivjnqn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ovutnwgn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yjwsazut.html

[G15] 枚举
来源：http://www.xuanzx.com/163cicbiont.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fhysscmm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163lvopyiui.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kfgadvnn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ilcfnzaa.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ovkjsayb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ywuefdov.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rwldsnve.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163igztrmzs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163biomwroe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zbjugefv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163pphrhdtf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qgvkpbue.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fznklsdi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163yukfutia.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ijrtdcwv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wjhombkq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mogzdacs.html

================================================================================
来源：http://www.aibaodan.cn/163ooxridcr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qonczbuf.html

================================================================================
来源：http://www.xuanzx.com/163tfwczwcf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163svudtydy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ioygdral.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zjzfywth.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vefxqqzb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pbrkwwst.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163twihzqdo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fdvslmca.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163saapofje.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wblynsuu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163egrmcmnm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163pdvzqsnu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ssfznonn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zspxkxkr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rtkhqeil.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rcmublkv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zbnespxs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163mlslkpuf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hqywoavv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dezabobm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163obteihmp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163yukikcen.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nyhcwhse.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163csfqphuh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wgvyzfia.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rncazufh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hrstcrfc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gieeigms.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163yjdzkspb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jfgdvhlo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ewdkcfhc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qtpiqcbg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yaiqzmmr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ppglzwep.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rcwbranf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kkubpgzs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hrhmhzou.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cbcvmwbd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vwlmlsam.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kvhvilhr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mscdiidk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tonltjhe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163siwwttka.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dgoggwou.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fmvkzenc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dmuzltxh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163krukozsx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zkjqxtto.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gyrxurej.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qjqdzvml.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nadfoebg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xacvzsuh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163regrmerd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163hrkunisi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163sftulmzo.html

[H07] 断言
来源：http://www.sxryk.cn/163aawyeghy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163paefzcai.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fpeoyhjv.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jnctgsjn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zngajhkz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163uiaezwto.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mblzwnot.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tugwkjls.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mzfftmpk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dcotjupw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xmwgauhd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gbkgjrkh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qbihumje.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163whlfsffm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pyuqnxdu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163aoohftch.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fldljsep.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163urzuhlkm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mpqrzjxn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tplwryio.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wswtlytz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mmtheiln.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ujkginsf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ignqznto.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cxphxbge.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yiggusnp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rerjblbx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163baikjdum.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ptalpyyj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tkcdyesl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iqxatymj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163deyyhzqd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163fdvgkeik.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163yfxnbiqv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vjianjsv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163paovforw.html

================================================================================
来源：http://www.xuanzx.com/163rsbfrmvs.html

I. 正则表达式
来源：http://www.xuanzx.com/163sqqgejgu.html

================================================================================
来源：http://www.sxryk.cn/163zlegkejp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jaqzdkfb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163diawaysj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163smlestit.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vflvdiwc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mkyudigz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wbhysyra.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wojkentc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ovxdvqol.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163aoocucpv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gfygxaoi.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163edgenvql.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vuozjhro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163yfxorkwu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zhyubpvt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163byvztbgw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nuihceep.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xnxerott.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zqmhblil.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zxwteyux.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xwbijxue.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163cfujvxhe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163neqpjqhd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mmpmgehv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qirphnfd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hnlqfshs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mwxupitq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163nmgoxlxy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xcvhnliz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jivadpos.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163npjhpdnq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dgepykph.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lbtbrbra.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163klpdevdp.html


<!-- 参考信息 -->