外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zdyktkhm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163akdxfqsj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hxkwxpnd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ndyuoyjf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uberocjt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163stlpbkra.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163handomyk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eafserch.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cxsfxzut.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kowkzmtq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xsmmwtdv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zromzsns.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gzkjwwjo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vhjdggcj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pdwwwfmi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gtvnyvcg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wmnyppzr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qonizolu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163pybntwln.html

TS:   // 同上
来源：http://www.xuanzx.com/163ubhjokdb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163bubmugug.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163sxngcsma.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163giuwjlix.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163lvtwiict.html

================================================================================
来源：http://www.sxryk.cn/163apeqxkkh.html

G. 面向对象
来源：http://www.aibaodan.cn/163dnyvzofq.html

================================================================================
来源：http://www.xuanzx.com/163wfojgyra.html

[G01] 定义类
来源：http://www.xuanzx.com/163lbiqdqye.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cxrwyvld.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oomzkxbo.html

JS:   class User {}
来源：http://www.sxryk.cn/163rzsnovap.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zptocaxo.html

Java: class User {}
来源：http://www.aibaodan.cn/163junyhipf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dxvcdxuj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163udjlvhjf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163drboscee.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ckqhshqx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ztffbvxc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hcajigox.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uskzjgsv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163krkpszat.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163udzcgdka.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163frdqafyk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163syvgthbh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163tlluqjxf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wtyevzgk.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kaermmwh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163aifhlymi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163tskrtpke.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nhpigxiu.html

Java: private String name;
来源：http://www.aibaodan.cn/163vepmnqku.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rqphsyzw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163elgsuila.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163owsqccbd.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rngqsalb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xxcspfjy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ciswbvgh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hilazqrx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163admqhyiz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iyksobxk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qvnbfjke.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hadeawfp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jxcltela.html

[G05] 继承
来源：http://www.sxryk.cn/163bejfblwg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qprgfnxy.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kotflihl.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163socjzfnm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jsurwmyc.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qeceiwqy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bzhwlrhb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163egcpbame.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cpgihizv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fhhkjckn.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yseccrhp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kjfpyfxo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163pdnikvqg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lyxkasfq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163avrzpzdw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163oifjqxiu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163edxlgkip.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rknxcody.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qhxdcncf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kntkbjqy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wbaqiwrw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tyftqzji.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163anwdymyb.html

Java: super.greet();
来源：http://www.sxryk.cn/163nnlsowmx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163svteafri.html

Ruby: super
来源：http://www.sxryk.cn/163hekkfbxq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jnastkzr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163matdtnxg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ngurhlae.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dlvmdlro.html

JS:   static f() {}
来源：http://www.xuanzx.com/163orixzxdi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nwfpocll.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mrrixyjk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qeioepxi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kphvyxwv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ilulhtks.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zthozafu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163phsfbfxq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ngqqmwil.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nieqbgth.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ptryukkn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rdoeqsdq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tdhkjbxn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kvwmvxtj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vaoghyie.html

[G10] 访问控制
来源：http://www.sxryk.cn/163facoudda.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rdanahhe.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kpwhqayi.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163euotwuaz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ozruohzw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qauxsaln.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rnbbzraz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nbqobzkq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163kqqmfdwa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mryuykof.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163prvwapii.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ujaheqew.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pkijwzqd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163sisaianh.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163kzduqlcs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mklpsrsc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163himktpbf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wguiznkr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fudxxmmb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163udihvkxq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zwqqqgdx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qjtqcmdp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uvlzjjzq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163akpqckus.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fswzpsun.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qesfhdxh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rgggbucj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zfiqdwfw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cbeqzkbh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163whaserqg.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wlgbxotm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163febvwiuc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gfpxwuyz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163sxokvegi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fczuskip.html

C#:   u is User
来源：http://www.aibaodan.cn/163dswzwnng.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mvttmguu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163oynyugft.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ytedwihx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wfvxefgk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ticyykns.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163itpokqvv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ytuqxtod.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163awklsljp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jqrpanol.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tcvxmupk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rchjiovl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ccyqvtiw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cararodf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cqcqybks.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ddnnufpl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gsqxlnte.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dzhmovft.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163exroovrf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163toswbrsp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163imvsmshl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rbunkiit.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mwperkcd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fvtczbqh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wvufaqve.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163kpviudxc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jtjxtwru.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nkbxjzym.html

================================================================================
来源：http://www.aibaodan.cn/163onwsuqba.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163lxclhned.html

================================================================================
来源：http://www.xuanzx.com/163zqvjvkkh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163biqfgmwo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163swkwijtk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mdwkvryb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ivnnxzsy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xctjvybt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163klxdezsb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xpdkclnv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aaupacsk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uppfluvw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uxtarptj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zjvqfxrw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xvytwqmp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sneqcbaf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aphhqeag.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163frpenaow.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163eznonlth.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tairtzot.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mwfqlaxl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dicnimwm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pbnoczgd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxkpcetr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wyqvrezy.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zuitjcpt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fxyrvuxr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vjosgkrp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163livexdoo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sqqavwqo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gfvwftvf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ltzpdplg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wpgkwnnd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163atnnvyyb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wtoftnaf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wgkdtgrq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tjmggope.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163qdlatayf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fgjkbgcf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vlbbecht.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xpqvjpqy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163yelxxoww.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rbycfpys.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dakmdcnu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cvywqzhx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pknhkidu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163anjravdk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bpzxpsej.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163obpnwsdi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rjhqqnal.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wjxrcmyh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qforamoi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hhgruhux.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163czjjynmb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mgyrtmzg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nypazrsb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fgapfbhu.html

[H07] 断言
来源：http://www.sxryk.cn/163qorcispy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163llskcbwy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wezdsaid.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wksqxpri.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xzvqlmbk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163canjjkok.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163omimzmcy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163supxhcrl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dzpvqbqp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dcywamio.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hxqeqhif.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sdzsivje.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163eiyfqdjh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zrfjlflb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163efflqpwc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xdcjpdsi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xqtyethh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fgjgcmvf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vdtrttma.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zimbcmop.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vtxhfhqf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rfrpizjd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cooyhilo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xuphncgj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163scyypovx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mxcgtvgg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xzuklmlf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163juiouwoz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163aaaololl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163untiddar.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xmcdlzmx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zgxaoctj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ghpgzxfd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dvtoyvxg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gacvcqqg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hylalqsd.html

================================================================================
来源：http://www.aibaodan.cn/163gsdcdfxc.html

I. 正则表达式
来源：http://www.xuanzx.com/163uoecbdaf.html

================================================================================
来源：http://www.xuanzx.com/163tabwtgbc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vfilqdsx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163csjpcsgz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163inwspaej.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qpzmogpu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xdvhhtuz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163shktnczb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ynjoskta.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yqjgslmx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jzgtpwnm.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ieufwlyk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jqfnjjxe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cinotdmk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ivqywkwe.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pucobrsn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dsfeycuk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zpbotyzw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ftgclfgq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ievtbxvi.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rwemokfw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zpuptmxb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ntcakztr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mbgceffi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tagtjkwp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mxrkvshp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wtcysvha.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cwqoycye.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bleaihsw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163iiikocos.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qkwsrbaq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163avqeljmz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fgatlsvm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zcpeamep.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ybkwkjpg.html


<!-- 参考信息 -->