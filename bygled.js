外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163glxmgklz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fgsxsurv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cljyxddi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ukgkqagm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163eisxopsh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cidtaxss.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ncvvfzkh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cqpjgmja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jodmxtji.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gdaloqlr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dwhaxkmr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163virxsnri.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kqhlmvid.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163knghatym.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yltokyqx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lxzqgyoc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rwehclav.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163avaghswy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qwcgwvbv.html

TS:   // 同上
来源：http://www.xuanzx.com/163streozpk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163depvmjnx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fnmwisyn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163apxmpnec.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wblubyat.html

================================================================================
来源：http://www.xuanzx.com/163baptxaae.html

G. 面向对象
来源：http://www.sxryk.cn/163txyuxyrt.html

================================================================================
来源：http://www.sxryk.cn/163ipflnkyp.html

[G01] 定义类
来源：http://www.xuanzx.com/163nfyzveda.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rlshyvay.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ridkmjum.html

JS:   class User {}
来源：http://www.sxryk.cn/163ioaexyni.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163vlertxps.html

Java: class User {}
来源：http://www.aibaodan.cn/163irxaygsy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pfbkkyad.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xbzrldev.html

C#:   class User {}
来源：http://www.sxryk.cn/163bxdobknf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163cyyfwcam.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wwocilxf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163sfzyvgsj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163btiotzyv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yrodfiwh.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163iomotmqx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mvqudfkc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163omlncyzm.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163clrhpvml.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dymugjxx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lgkizrfi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hpyqjbkp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163vaecjzpe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163arrcdgva.html

Java: private String name;
来源：http://www.xuanzx.com/163pfdmrusj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mfvjcfkd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bivllkyb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163duwltybj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163bbrlnnld.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fpmrhkpw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zhasxxrt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163eohwjqkl.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cijeinpw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163okfwqbri.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163njrcdpxt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ivjmmwep.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nzxfzkpe.html

[G05] 继承
来源：http://www.xuanzx.com/163rampiphl.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rgjmonow.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163owkooktu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zqgkntxl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163raxyvuwk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163iaguwazx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qzyztgob.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163emlufeuf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gghkkrii.html

[G06] 重写方法
来源：http://www.sxryk.cn/163saxxauem.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yeaexhyy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rjglxrrt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lnomrqmy.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wsbhivzn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qcyjpjgz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mofbaveg.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jrmdluxy.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zsuxsqze.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pwqesxxg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gtjfgeqs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163osmiyhrq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163avoikfmk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ovrizaeu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rmrmzvwj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pqezpdio.html

Ruby: super
来源：http://www.aibaodan.cn/163ghsvehqz.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jvfnqfih.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fhkidfve.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cjmcnkel.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ztuqkzva.html

JS:   static f() {}
来源：http://www.xuanzx.com/163goouzicv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163lxinuuux.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lrrgrloa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zdaebght.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163uilcyakd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wlfhgnhj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gklrjvyq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xikfvrwz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sfjjwtcg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163helqtgzp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lkkdtsem.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163pffnafzt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ilbyrixc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163szyeofsu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ggknxdhl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163sapheyne.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fvzfdvnb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kyegaifq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xnatzczl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163foabhqbc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wdilcoie.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bvpfqhwn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163iaydtqjr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pctrqepc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tmiqfwzt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zsuxybhu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wygozigr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fjojfkub.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yjlhdrxz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tkqnkgst.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ofhnufjt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mziutfis.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163eymwumet.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163txiaxwld.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mqpcxyqp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ujfqgcia.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fcmnnomx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163pjxppzkx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ezewnhtp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uzyfebsn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ltynkxjk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xlqtoses.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163yqkbnmks.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uzcetagh.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cpfuxffo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qpxukdyc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fmiyxgei.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cemgrauw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163srzhjilf.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ldxicstw.html

C#:   u is User
来源：http://www.xuanzx.com/163bpvtulpz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ftikgybt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163mhczjqnf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163aslozepp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mfmicmed.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163teshfmcm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ywyqhkgh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163okbcydzl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163aayqbgpc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163adoayqrz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zrpmgdci.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xfndpmwb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gcwuhner.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cxxfqgvc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163foscygfw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ivhwdkal.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kifybyzx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bygyrogw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jrynirwa.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ycvortyc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nnutlkuk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ofxtalum.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ezoagsie.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nyqrqvah.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dpbofydr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lomsgvls.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lyshkoay.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jcnksbzp.html

================================================================================
来源：http://www.xuanzx.com/163ewutxsyg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gkzngpoq.html

================================================================================
来源：http://www.aibaodan.cn/163kigdqoiq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163izjpemhm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kgimngvm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sbqhnrwe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qwuicerh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mccmuzxw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cliikiny.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ifwhfsxu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ttuguiwk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ccfpnoww.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163iphpbihe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kiabbzmq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxlwcyqb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163antyosbn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163akewdbzv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rhbctqkb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kldlknhv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lkguesif.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vayedidz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hfccbpzz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163mtcebrge.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vmntgnbt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uyizsdyl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rnarvvgp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163shqsvqgg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pfzcwznr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cnffxtwn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nlwsamtk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cpwemowd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ghtzhvxv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163hykklcxc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kmzsgnbs.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zarfosgj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fcwwpmdi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163mphdojdj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163immqwzlu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163isuuulfe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dvvjuzlx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uzjqilys.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163crgsllkp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mbgimoui.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mfmhjrnu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hltezcow.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ikwdlgoo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dspvopva.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jmwzesid.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wgkwmztj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ovobabtl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163awqclenc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163embpryfn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163whqycika.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ymwfutil.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163llxmmjgk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ikmhxuko.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ucikqkox.html

[H07] 断言
来源：http://www.sxryk.cn/163xabhfejn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vunbflnz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fhqfckgf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163maepmutk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pbxgzwfc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oanesjjb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rwcuemnr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tmjsrubm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wdlyagsj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163aymvxvun.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qsddyqzz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163demzytab.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163acnsjrig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ovrdezai.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bdrpnool.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qahzrwwt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163eauglrfa.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qjtorgtw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hlizovpn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dngbmeci.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pfpadujm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wgxmboqn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cclfbqep.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bgazcuvp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zdrmkwhl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163maxppgft.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jlmqombh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tykwsskw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163edzemkza.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yixamjam.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gdrvhouu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tuoqzqni.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kbchvoza.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lyvjzrtp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rqvodocx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zqekyoqd.html

================================================================================
来源：http://www.xuanzx.com/163fpusolhm.html

I. 正则表达式
来源：http://www.sxryk.cn/163yhgvknod.html

================================================================================
来源：http://www.xuanzx.com/163bzoltdce.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uquxffcs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163awkeyjyy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fnmjdkua.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163itxuboxu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fwfeuset.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vzfimfne.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163zjwzchhz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rzvzkfts.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dglsfcbl.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163krocefyv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nltxvvfl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jnddoyse.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kdyclgti.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oowjgqbm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fdlhyiaq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kdbdicwl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163blweufzk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163taddgzjt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wumynuez.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rwmhhwls.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qgneyrce.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qfcrenvx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uxzpdtya.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163atxswzow.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163oqrdyrww.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bgmrfner.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pnquexww.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bjhnqgrn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ebhkxpvy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vyvzixmb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gpiulwvg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dwdssxfv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yvmqewhg.html


<!-- 参考信息 -->