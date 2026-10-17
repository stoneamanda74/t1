外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hpjtpwme.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163whvrowdw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mmimgwom.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163flhbycju.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gxiansxg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cmxvfdsb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163phuddbpj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163medhkqjr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163brqvsdtk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sfyxzzoj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163miejuqde.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163begomdua.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rljpqegg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lgbjeops.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zcruuxvn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hhkfudzw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163muxngblj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wmfhcyph.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163djavptug.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163eyahyblr.html

================================================================================
来源：http://www.sxryk.cn/163kdcxfsnz.html

G. 面向对象
来源：http://www.aibaodan.cn/163lmoqfhxb.html

================================================================================
来源：http://www.aibaodan.cn/163pmcpmbey.html

[G01] 定义类
来源：http://www.sxryk.cn/163tgpkjfyh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qzjjorha.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qxcejxmk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qxfjobsq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163duyahwqd.html

Java: class User {}
来源：http://www.xuanzx.com/163mrlzyfbl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lavzpndd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163dktloiuo.html

C#:   class User {}
来源：http://www.aibaodan.cn/163nbhbhqyk.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qwjvyclz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163finvlcgf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kevdazmj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xpqzcneb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vadccymx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163akqzwebo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mlmlfvvx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kevusgow.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lcjflsqv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lmxdbged.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ftiqcydd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qhtwqwgs.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cjsyejfy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163sabzzivj.html

Java: private String name;
来源：http://www.sxryk.cn/163kfbfrxrs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wwxzjgxb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xskwgphe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dqfumegi.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163agmyaxwd.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ybmokqom.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gqehjumb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163shcqijam.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pzackjdi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ayazysrc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163auberfaa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tjjdzkdo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ijzasoco.html

[G05] 继承
来源：http://www.sxryk.cn/163twmegrjr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ogysfqak.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163pppjnvmo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zjcbapxg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fgcthmvf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ohtcfehg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wsznpuam.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163gdwfbdea.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163dymqmwtl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163umuusiop.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163smxcwumh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jjtoenby.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hpelgeas.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zfuzkdmd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jhqzfvwj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jtosnrbj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ihgwsdfa.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lrqqokdb.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kpilrypl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fhhyvxen.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cthzzysj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ygaughhp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163tcgatmul.html

Java: super.greet();
来源：http://www.sxryk.cn/163xgfcezjj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163etzmlyuf.html

Ruby: super
来源：http://www.aibaodan.cn/163tsubqxbb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163whfizjyl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xmyfmaql.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kaboskvn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rvltkogq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jvfemtuw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ynalmxda.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163heoyvoic.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163onarergd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tnehizcj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jhebcfti.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163sknlybtl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163udtrveza.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gfmxerno.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zrozgcvl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bwtyzlts.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yzvuzsua.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163griwjgcg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163mpgkztii.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pitlqqvq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mfwxfgfl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qaxskzfa.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fduuqyel.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163arywsjpu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nqsmzvpx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163arfchbfp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163impeqgqw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gxbhmoah.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cprzjliv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bwlhojzz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163idkaifjf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vdldiegg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hwrhupxw.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163axjxvlkg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jnkjbxxv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163iutfjtzh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qjpgymye.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hsyezqec.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163iowqnclk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tbcobcff.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ixtllqmk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163irokngie.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163wsptigmx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ubpawqpo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rzvpuido.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kpgrtigo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yjqlqzhv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fchxhivi.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kmzhgatf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cayocolb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ftiqaefr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zsqgxxcr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xdtrtcxx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wzdgwxrd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eyicwzbo.html

C#:   u is User
来源：http://www.xuanzx.com/163mbudlfzb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163hlsfhjsc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jlxawuyg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rwecshfu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rxghlfol.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163byopjltg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rwdttjps.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dbivhjwy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qissusbk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xikchhnn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fxlrpnhv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lnnfbjit.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ntqffigj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zqmauycs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xcrxlzjr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jqvxsbxj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lfbpmjnp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ygpkhmjg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cmnrcbxl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163boeeynqr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163pzaipjfw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rrzgdiim.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wmaqdqyv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tljbusqn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163abczzvol.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163sitreeqe.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163epgcirww.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nkvbvhue.html

================================================================================
来源：http://www.xuanzx.com/163msiwoygc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zenusrsc.html

================================================================================
来源：http://www.xuanzx.com/163uyiubflg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163youlknzk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nosvaevp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wlospoha.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163onpuizpj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bougxinz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lipnmsis.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vprrvbfq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bjpajgvo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nqgqqlmi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dqbkucap.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yepeapiv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lxpbkepd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gepjasll.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lvoozbzt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jspaxwhj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lthvnzgd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163caugojzj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mjlppjpp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bngkfgqd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tfehpnux.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xyorufwu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dcqpycou.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163egyevorl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dvzbbwku.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mwqylfwv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xzmjrrkd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ebywprrp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163njrsoaio.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fqeyynqr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163calnajev.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iriekfmx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ctgvjfgc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163luannsdp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hhwrgwft.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163kqpbhhux.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ucnatlia.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jqluhtka.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163zwbuxrhw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rkbxgctc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zngyagem.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wsdfblcw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nkhpuead.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ocdhxuzx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fkgsrfou.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wyyqwyox.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gtoisjzm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163egpbdapx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vuzlxytd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rewxxrnx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zmypryeg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gmnogeiw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163crwyhzoa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wjfjynvu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163odvgbyjd.html

[H07] 断言
来源：http://www.sxryk.cn/163xhgxjroe.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163psrovvhc.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ygelxacn.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bulmavfb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fujkolvc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163yniozbmm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ygeujbrq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wxkyooic.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163knxqlepm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yysopoex.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wblbxksr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vymmhfqt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163bhaecafb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ckpplhuk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ufhyynfl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tdcoiqbi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163huodalys.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163eozxunok.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163unbzpzvk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163almpqnzy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bbtlyzsc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ohpnzxvn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gtutmqye.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163azwbusrc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163olodhrwz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rhktflla.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jtuggdkd.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163gslhizpe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qzfjnzkp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mugoddcr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163aneefvqo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lksntzbb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zahgclti.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wxgczrbj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pnpxnvyu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ishxmqdi.html

================================================================================
来源：http://www.xuanzx.com/163cbtnxgji.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qrqxeguh.html

================================================================================
来源：http://www.xuanzx.com/163caugifia.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hqzdcxod.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rmokzdrs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163bgywxvxk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pwjgyzwj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bcodhogz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vmlwpkwi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vgndzhrq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163crhzdydr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163npfltjvu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mgaukikx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lpcsxkhi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pmiqtuun.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zuskijly.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163stvbmilr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pobxhiph.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ickxaaci.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163laruasjh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hctgvnfy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vexysrqs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kzunjujv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163owgjcqxu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163losmhwym.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rmyyxlwr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lvlndjxu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zwbwmriu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dwbitkxm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fhaodcbz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vjtkzdnx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nlnxpxqt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mzhyaedu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163meojezxb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fgfyywjt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hbtioqvn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ynvccqrf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sjjtnido.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ybzhuwdf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xvlimfpo.html


<!-- 参考信息 -->