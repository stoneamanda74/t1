外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mfweecuu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163angirzak.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bwpmadvz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vsvicsad.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hlwyurxn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nhirbtfz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dvbarquv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163meconfda.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ililcblx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163nhmyaqrw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jfxluijk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cmtgpdkx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163joacjkzd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163frmvukps.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163myavscuh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wrbtbuxx.html

================================================================================
来源：http://www.xuanzx.com/163cofdnubz.html

G. 面向对象
来源：http://www.aibaodan.cn/163nrasrfim.html

================================================================================
来源：http://www.aibaodan.cn/163kwzebxgi.html

[G01] 定义类
来源：http://www.xuanzx.com/163wpxpnitu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163suhwdbal.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jjjjtcyu.html

JS:   class User {}
来源：http://www.xuanzx.com/163dtejqrlg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163owomljjq.html

Java: class User {}
来源：http://www.aibaodan.cn/163xamzjsme.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163musumaso.html

Ruby: class User; end
来源：http://www.sxryk.cn/163htwbhygb.html

C#:   class User {}
来源：http://www.xuanzx.com/163rzmiddkg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rnyuqhth.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ppawplgz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163scuxcljs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nrnggeic.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163urhzztvq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lyraubbe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kdziqvtn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zvfnqaju.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mjibzrol.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aiucelol.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vnhcaeyy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zvghmtqz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ethwkolv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163fleipqiv.html

Java: private String name;
来源：http://www.sxryk.cn/163mchquouv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ptsxprpr.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tmlvebbs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fqreeccn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163efrdnust.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fjofcrgc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163swcrnuqk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bhrubckw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mgceeiqr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vbqfmlai.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jrvkpibb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tpcmqjtw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tabxnkzs.html

[G05] 继承
来源：http://www.aibaodan.cn/163epymxqqv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aolhkbgg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jmbfomnw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163odwrbflo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oqvpabqv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163arqakxmv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kqsqoagm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163okxydadd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vhmbptvc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163itklryyt.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gjhvfswr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163miqihthc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nwamqlaa.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qatqwxdg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163kcitbize.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wstnjcmm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lairxjdj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tksaadii.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163szcjtqjm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163itdldxdh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yhfnszxs.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kqkzsmim.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zhybwjjq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gyoeuhdr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zibruyxl.html

Ruby: super
来源：http://www.sxryk.cn/163qvzynvsy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ctlauftt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163eyquiqkh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wfhpxquj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nvjahnwt.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uocwvznq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vmfplppm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mygqpbxs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jufjnisz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ywralbjt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mdqapefn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ygxqitrl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rljdjzhx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hymzvuft.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dkqvrnrf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163csimxbzz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cqvnghpm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pzjhefwv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dmmskegu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ssqiijkr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163cwmsbbfi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cdrvtbwy.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163suvwcevx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163flidoxkp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163iqsmqhcd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wybkolli.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fwrdaqdf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sbqbndwi.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rjzijlqq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dcpkxgpg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163awgxocpa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rqfguxnz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xegyutcm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vfltizmy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163evykztet.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kdcowccm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ordeiklk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gpwvcksa.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pzbibmjk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vfamllly.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rkailhgx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nqhzygec.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163muoqcrfd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fkcvzzpl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163auxomwfq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cslkeulk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163irsfnjbe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163myjgacyp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wdnnroyr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wodmpebo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nsjosnwk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163acoslpbc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lrpzxinv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163metspnfo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wpszvwnu.html

C#:   u is User
来源：http://www.sxryk.cn/163ifswdedw.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gllzjwgp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163kipjcgcv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163sinpybud.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rxppwjqi.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xnebptlt.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qqtrkela.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ujxsprpw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ybnpange.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163pppyutth.html

[G15] 枚举
来源：http://www.sxryk.cn/163lwhymxdw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163evhxeltb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mjmbymox.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nvrtftok.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lmzttddu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mbyworfp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zfwybciq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ummbotmv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mxdffoht.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eodwtggj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163khvbbymo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163sxxvfqmq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rbxuutkc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bvvquufe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lphcnaxq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hihmwabp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wsywnynq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qwtbpndc.html

================================================================================
来源：http://www.xuanzx.com/163kpncxapd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163chsdhwtn.html

================================================================================
来源：http://www.xuanzx.com/163aadipdmv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mdwpmspf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lzmfqgzj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xpuhpgsp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vjeulrgd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oxrgqzar.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163piibvciu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cgdgifym.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gkhwsjuj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mgsmgsfl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oajsrsya.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dkiawxax.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qaesnwex.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fqsxjpqx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pllcnhme.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oiewlavf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163alrchvyo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jvqepicn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163safhnuhc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ggfdagvi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ajpymcvc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qjdgfyho.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hhvjhvdh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pdhxzkck.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ewdncojz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tyyytppu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qhczzutd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cwbkwgfu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163asrhgbwl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kopelwah.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rpbkqgii.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gzubqgop.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163acxizjty.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lpmymaut.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ebfxwwfy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hniphapm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zomukhmr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eoleankj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ocszbbhl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gjdxqsaq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163awkvaelv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lmvbjcfb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163duhpsjyo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jtvwijfl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163oljtbvnn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163copvydwd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jlccrusf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163inksrczk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pkqelbmg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nbpfpmbf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jwlsakaf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163amnvwfjv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wtuvznow.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zzxvcpel.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wipijsga.html

[H07] 断言
来源：http://www.xuanzx.com/163rqtbwtzn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xwvutjfz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bjghmpgs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kphufovo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ttynfzyd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163brxfpwnx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zqpfsowt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163muhiiikq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vjlcbdjg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tshqnnqj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163bksufsvh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mvgyonni.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hytkbger.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nfaujqcz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163szatnpcr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163blttswdz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163beqzvwqk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mzzhqkmi.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xvnvtche.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wfframok.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mqszmcwg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163brzvusrz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tptzkhxy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gzjqhojg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163douxaltx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ilawrqgh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wyzojife.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163byiglbfg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xwmcmafn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xngifxpo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wkvrmusr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hrurorvy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163vkjiwtgo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xavwuxmv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163aemgasgi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hyqhpbzl.html

================================================================================
来源：http://www.aibaodan.cn/163whtacbtr.html

I. 正则表达式
来源：http://www.sxryk.cn/163loiaogob.html

================================================================================
来源：http://www.aibaodan.cn/163xghdcpmr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163btvzjynz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hntrzgzo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wrhwgpbv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tfcmqkpr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qexihodj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163juzjkzbn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gfroikzd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lesocmvk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163etjcjdwl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163myrvgjti.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163sdkcoqtl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mbprbral.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wqjhankl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qsbjdxht.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fpeypswm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jsnplptg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rwnrtnkl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ybqmonrd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kktskjrg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bgawmkrx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sniwljwv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vmotxctp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dlprgtbv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dssrezln.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163msgdfbkv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163adzwkgxc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gchyqbfb.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ocdzhdxe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pgqqmfaf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tlqxdjqh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hjzhvdaf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qvwzjsgg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gmizbmsl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163buxqguzn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163nvipoyzl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ylokhomm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ufyzdrju.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yojpuowj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ksfbpdvw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qvfcktgi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ccjvthvr.html


<!-- 参考信息 -->