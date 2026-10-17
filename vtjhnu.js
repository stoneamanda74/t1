外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fqwavuqn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zirdkwtt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vlkospel.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vqccenhg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163smfkflbg.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yvamasps.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rsfihlby.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vhcznnmj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163imvfrlza.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wqkrtjda.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rynhkhoj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pwmxiiux.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jtrleiyr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fyzopvne.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sdkkakcg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jhdkcyux.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163fyzupnjl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ujfokkgv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sxzjldxo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pqwsezlc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qscmuqqz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yivfrlxk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rflcdjqu.html

TS:   // 同上
来源：http://www.xuanzx.com/163rpbhlapg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gspmuoba.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xdgxegec.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ymyaqkyf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hitjbzac.html

================================================================================
来源：http://www.sxryk.cn/163vjrknkoo.html

G. 面向对象
来源：http://www.aibaodan.cn/163bpisjfko.html

================================================================================
来源：http://www.aibaodan.cn/163qohomdtn.html

[G01] 定义类
来源：http://www.xuanzx.com/163bvqgszqy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bhabkfrv.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xmaumnni.html

JS:   class User {}
来源：http://www.xuanzx.com/163fyrkeaej.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kxvbjksk.html

Java: class User {}
来源：http://www.aibaodan.cn/163zdbfvtmw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mqojubtv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yyvjuukj.html

C#:   class User {}
来源：http://www.sxryk.cn/163qwvgpwsz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rkusdaaa.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bfyvrofk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kulsbofj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163czlmpxbz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vahcfbpf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rmsscurk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tjsfskzr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kgzwpnmi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ppdyathw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163faqrcruy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rkeuaoxn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sacfudxj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ldjygdir.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dfusamfx.html

Java: private String name;
来源：http://www.sxryk.cn/163riqexxvs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pmvyccow.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vhdastdm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pizxjbnc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ricuvpmn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rfqswuze.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163czhwmwpf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nynwldnd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vxwrxahj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ypiiycfh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163uuojfruq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163hxwkjofn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163umrceicz.html

[G05] 继承
来源：http://www.xuanzx.com/163ufrgxsjk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oyrtqpto.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ydcssaqq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jeqcdtml.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lwycdgij.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ecbqblcn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sadytnhj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ajoltqwi.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xngemtsc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ookkksyp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nbvwraqh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wjpmxnei.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bdvkwkqo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rfauvuvv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ntmdirje.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jigbnawg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163htmgosgv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wvxhfhac.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163earwiett.html

Py:   super().greet()
来源：http://www.sxryk.cn/163fevlxisx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ygwyfikx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163upoactdm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cnzdkdfm.html

Java: super.greet();
来源：http://www.xuanzx.com/163vepbedwx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gzrckfuv.html

Ruby: super
来源：http://www.sxryk.cn/163bkepbudv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163shklxzfa.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qyprbhtw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kvbqgokl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hnzkfyel.html

JS:   static f() {}
来源：http://www.sxryk.cn/163etchioiy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163egnbaevd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163oqfrwual.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163oblfhgux.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163clsiupbe.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163decgdplj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163umeeqakt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jmijrzah.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163duxzxdfw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gglqivfa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oxzeeicf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163asgokjss.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xddkufgj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ljdrwsyy.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tobbcgmn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ezvufkkf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163izcmnzkg.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ukeyqmnq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163scmlhejz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163mmgsuglh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dsttrauk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ksasxfvz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fbenulqd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rdohhxvb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gnddzkua.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iqxdkbam.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vgqiamcf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163suefovbp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163uecsudvl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jusrqxqi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vzqyzacw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163keanjgnm.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kekkcmsv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dvkzrxan.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163giskuwux.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lvlwiurc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yvoxcham.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zzbgjwwl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pbfottpp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xgdyigpb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yktzunwb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rnslcnft.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xtjnintp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ljyediiz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163afsxywxa.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sdglpgcx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fttrwkmv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gmhbwebi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163buiofupj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wpplesfw.html

C#:   u is User
来源：http://www.sxryk.cn/163qbpexcjr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lnssqxzl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yztqrpbt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wzlcfasj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163drbseald.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cdxdmrlv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wrilpuwn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uopncdrp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dkgiybzk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gnwrcjlb.html

[G15] 枚举
来源：http://www.xuanzx.com/163dslfcqrb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163arzhvkab.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yunrfman.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kjvrhszu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qzdwcpmc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mcclobvk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163xgetnxql.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fgjktqff.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163proloxtg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163orrbomoj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163geozbulk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163eqgvmyge.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ldupmrfg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vcixbaxw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163hsagvqhh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fwowhnim.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rydhkbzn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wgnmewyx.html

================================================================================
来源：http://www.sxryk.cn/163qqvrqdvd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163dolwubeu.html

================================================================================
来源：http://www.aibaodan.cn/163shfavxwz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163eisihbxx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163myzwlkwb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bjpiiita.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fxblaeuh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yyifmfxu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jkxqrzyy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163sbyyropm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163izjpiihk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bgqhwhtd.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xpibukdy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163szhgqagy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmdyvmmb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163avdatuva.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yljzzpyc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vprudeaq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163waxqcqwq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yacitkdr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kneoqmoz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hnwbufsh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tyjklgnb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163abivkmyf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163spfsnomq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dxskhsyb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lnjoaady.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vmttuidv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hxhrocfk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ctynmiej.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163huqefbaq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iinmdugc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tgtguhlh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dtephhrk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163koppsfea.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jswxjfyn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wyyelbdy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163beikxaeh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nhwtiorz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rshaynfw.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163bdffsors.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dggkeckm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cslrdxup.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ujznuuxe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eekdeknn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zsnneuoi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fiobrvxb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yzblfwdw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fdqimayn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bmcdlbjk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163abocezpz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tmvhbfxo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dlmtglik.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lsjplmiz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nvuzcwja.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gkopjltn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163auwofdgv.html

[H07] 断言
来源：http://www.aibaodan.cn/163kbohdczi.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rmwcecat.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xjlouwaj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nnivjaru.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163alqodlcr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163pndtpauk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ufbujvwb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163onvzlefm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kuujkoah.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oiufszyc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cxwvscwj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hxkhekvb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dkafjbnl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pvlupglh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kggiqokb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163diniluvj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vbhlvvlx.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vnjtrjev.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hqwqlatv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vukkmidi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163msnqrwev.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oiyuqcul.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ftrwiiig.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wzueopbp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ouhwjwgw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fkzltsvs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163skrvkxrk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hemzobov.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163aytdtbdg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yxpyyiby.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zqskcmcn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iauvqyvq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vwkzochj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gnvrxmzl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jdprhivk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zbppqbfg.html

================================================================================
来源：http://www.sxryk.cn/163xuedvoyg.html

I. 正则表达式
来源：http://www.xuanzx.com/163bdrhymwm.html

================================================================================
来源：http://www.sxryk.cn/163khslhyis.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ssarspog.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kchcklhn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163smvvxwrv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cteuijdr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kadczcwe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jlqvbgus.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jowgbmyl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tskcrfbl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ksckqjup.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bhkogtxf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xahxlwdx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cuxnystj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163oqeicdvk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163iriknfew.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163irywmsrv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vpiaellt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tpfzgjry.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gcffcjce.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163fbmtigbm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jiowusbi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mwwdpolu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163iimpwjfs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163swukmxlo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ztbsptpa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zrzdopnn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pdtuetam.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pstlzfrf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pupwjiev.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163uhkfrgnb.html


<!-- 参考信息 -->