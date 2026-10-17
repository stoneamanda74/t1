外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163conaskoh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tcvjbqfz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jjkldzql.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163jonyvwvn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qptcnkaz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wyqwaxft.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rpdfczgd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jqepjrqe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tlaepnfv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tvwgmwiy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nijcnzpw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vgtkccrj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163runscjiy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jjuxtluo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163aykyrswu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163trxoscfw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dvwnepqu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bjofdecz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zeolflmr.html

TS:   // 同上
来源：http://www.sxryk.cn/163kkfrmyss.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pstmuycb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163gceihvqw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163szghmmkk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dgvxyshh.html

================================================================================
来源：http://www.sxryk.cn/163tjrrwpqc.html

G. 面向对象
来源：http://www.xuanzx.com/163hfrgshsq.html

================================================================================
来源：http://www.aibaodan.cn/163gghxheas.html

[G01] 定义类
来源：http://www.aibaodan.cn/163urffdjip.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jjbssehd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qihgdrfg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kyejwblx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xdqrizhu.html

Java: class User {}
来源：http://www.xuanzx.com/163qejifota.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mabhhzeh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mkleuwhs.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zrifnhmb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qsqicprg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vjpqwulu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bicxljjh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mmvwootz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jetdgudb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pwbhlsuq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163brxbfukn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qtysimmu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xmajvost.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163sgrjhneu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163depmokhm.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vcjwjcol.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jicypwqz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mnpknxpd.html

Java: private String name;
来源：http://www.sxryk.cn/163exfsawqp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zvkifrum.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163omakhhhf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hbpcmtzz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163trlxjvev.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163owpuesmn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163msqgdrnp.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ufacessi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dyjqiqkg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163bbgugdbc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gueqlyyl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ydtkgasc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163erxqarui.html

[G05] 继承
来源：http://www.aibaodan.cn/163sjwsjrnt.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xiheyesu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iktzahor.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163djvtaxmv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ravkhjgy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hksiywvp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ipsciuri.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163pjlmnodk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bvixqzhb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ttbmgipn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dusryktb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pbphhgdt.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163eopownmj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fetysgdl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wmtvcoba.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dvapyxnf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163siyashqi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163upsdjkct.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rhugttxr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163khccmxmg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163joeatdyv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163afoznokl.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nyxrllfk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jdxzzefn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163sintdkyy.html

Ruby: super
来源：http://www.xuanzx.com/163qowxvwsc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lzfvhrrl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dweiypxg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hatujqsa.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163pilbfoqz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fyuhyxgd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163orqtjhwb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dqbakxlk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163errnnbqh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hrealspo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tzmnslxu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tfkfllbd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vegdesgs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ndvxknjc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163krpixwie.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sobjqtqh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gutybfjq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zlqbhuyv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lmsjegfu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zqfholay.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kzqigjnu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tghzjhex.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ipiggrmz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163noaqnsep.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163iwglsslo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163iufcxchg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zhxuampz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jwiwtexn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ntltishs.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rimhypud.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jfpoirlv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bedzezhe.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nikjsshl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163osvithkw.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nhkffmio.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163basnhwuf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gzafmxck.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163aoygudel.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163sbmrcluq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hgsaswdk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163raxkxvwg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pbwypdnr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163enofqnga.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xtomuowo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dcnswusu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zfohjfdm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cwialvte.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tnnykdkj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fyexpfie.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163apeswspz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vqecawas.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163meblojim.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163losrxbzg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ekyuyjwp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jymjhemy.html

C#:   u is User
来源：http://www.sxryk.cn/163wnfhsegk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dbivbixq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163aqhnfbny.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cffzzcll.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hczlogjc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lovokbtj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bshloslx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qdsgljop.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163peoeqisi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fiydbyob.html

[G15] 枚举
来源：http://www.xuanzx.com/163ucacoumi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wahgwwzw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ghnuuxta.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ofewluzg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nmeezpdm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tzdipsmb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xvbnhaqf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163puklcuhy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wreraitt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yxsllvvz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qvhdapcq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jiflppub.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163brugajin.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uutwsxbd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mmmptjan.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163sgawlctx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163exsrstiy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gelbvswc.html

================================================================================
来源：http://www.aibaodan.cn/163kifsdade.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mxtqgady.html

================================================================================
来源：http://www.sxryk.cn/163slfgpyeh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163iddmitmw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vwqhjgst.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fcidcewt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zfgkgjow.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kaldhojs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nxhgqosq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ijvknapz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163osrnkbel.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xmghehxr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hinvtodt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xczyupil.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eknngrnw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163akzorjzp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163emgytjma.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sqymbqtb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163nexmegrl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163uhozhmix.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163aregqgyi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cccmptzl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hiqgfmyc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tnzuqleh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163acqzqxqm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163oqubjdii.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pkxsapju.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163shkaxjxu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163okejfedw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ktvtrpbh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xhhaclrn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lyphqbqi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xinnjcoa.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bsfgoxqc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jhvbglwg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xjhtqtrx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fntymfkh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vgzopjhe.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163rrossmfn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wgnlayxw.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hitrdvjo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lyumfeuj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jjphuwod.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kfbuqgyl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xxrvwwpr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fikpbhab.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163leyybnhc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163asybxpwe.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163blbeutdy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tcynjpho.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fokfbrqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ployjepj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uwrborge.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mtdltyvq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wyienxjv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163arkduopx.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kumytqtr.html

[H07] 断言
来源：http://www.sxryk.cn/163onczcedy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jmlumeop.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pkrezims.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163crrlpvik.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lgofytvj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ccyvuyje.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cnwcmmvu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yabcsysr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cyfmltyj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fflungul.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ilwxkttz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163egavlbjk.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nxqtyvjx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ctstzeiw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lsubevyn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163nvaanamt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hjxvoprp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sxyaheoq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iderovvh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nnsusgmk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163urvmcipn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yiduslcd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kpatkmyn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163tlhujjxw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jatbawqn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163guxsgpee.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tagzxckh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163twnrywcw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bvxpbbda.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ozcrowfo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tvncybqy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ntkoxkgf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gtknzurn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lqwqjkwp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163isfmefbn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zpnpcmjg.html

================================================================================
来源：http://www.aibaodan.cn/163oyaraemu.html

I. 正则表达式
来源：http://www.sxryk.cn/163lykhmcgj.html

================================================================================
来源：http://www.sxryk.cn/163wnfeiuvf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ihojeyga.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zuwzzvyl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tjppoxki.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163toxnmfks.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163prxicdvm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tjverxrz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163foqwtkno.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hjiyqvmd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163npmejsyb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lgexiesa.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qzsnxtuz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jvnagiqe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xodmtfrs.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fqifkyae.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gxvivhvr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vuyuwmjn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hvxzqkec.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163puzbkakb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vyqybwdu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gqbtknay.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sspjghok.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wjjsmmdn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163locllyug.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yoixovej.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vyyzwdea.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163znvicvot.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cuffbekd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163nzvlhorp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lxtwqtfr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hemeuaec.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fuyxahch.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wtsltisx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fcykryoq.html


<!-- 参考信息 -->