外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vpimmtsc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163scodzamu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163cqyvswzh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nkmvsrvs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163umpmtvrm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rkuvshjf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lkqnobgl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rjhbjmit.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qdldctsl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fbrninhg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vczrfthd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lulcacdv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wwzvutfr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rbfsjmhw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kuzzzwbd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jxcuwzfm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163irmdhmpu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zrwamkua.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mugwknye.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bkykyros.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yhccwysr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lkvphqvf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ayinnapf.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mwfaguvj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kqzxbpju.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163meewkctg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fjdudqve.html

TS:   // 同上
来源：http://www.xuanzx.com/163xjavwtic.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rhjdjcct.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pptsilnw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163snugkdvs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163knhpwcxa.html

================================================================================
来源：http://www.sxryk.cn/163mnpwrqwm.html

G. 面向对象
来源：http://www.sxryk.cn/163lnqbhgzy.html

================================================================================
来源：http://www.aibaodan.cn/163sxdkbnhe.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gmehhskw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hhizrelp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163fkoukkhk.html

JS:   class User {}
来源：http://www.xuanzx.com/163zgdwtchd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pulwsgpp.html

Java: class User {}
来源：http://www.xuanzx.com/163djyascbc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kyalggwc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163nqcfqerx.html

C#:   class User {}
来源：http://www.sxryk.cn/163gawbwaog.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ooveszwj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nbqdgkrl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163edjpakaj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nrxbzmkg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ofpzvznr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dntzejar.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163psxtnyrl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163glorvvje.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163eiaxwahn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kwmbnzsn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hcuapnjo.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163oxfswfaq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163uhujfcmm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ypawztch.html

Java: private String name;
来源：http://www.aibaodan.cn/163fardudfn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zzjdglyv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163txhsogaj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qggyswir.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vlxdldpw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qebhjspz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163igthxbcn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163rdphwyws.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vagfuibc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wgnkfozn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163szcalpsz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bkrlvvgi.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rsxkwarv.html

[G05] 继承
来源：http://www.aibaodan.cn/163gxtjecro.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pyxmlsiw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mwryygjm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wibnneyo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rmsfjzua.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dnatypky.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163slqvsnpg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lstbiqoy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163iranzjtj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nbmdifrp.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qwjnreuu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cqpyhtsb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gqdygnbd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ndhtdkwz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163srzntrqu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zolrvgsq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zudwrqfd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163azmkqben.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tvwfdzcm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zvijoqwp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163afjrnzlm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163thmdbwbr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wtoldxpq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163evnwszkn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jneuvqlu.html

Ruby: super
来源：http://www.aibaodan.cn/163acwghbvo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yywjrudt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163peaythwh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163manodpzu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dapuluyq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wddochck.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ynfahslv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163psnvfgge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163itlbsjyc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rxyyrrkc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163laolrfsr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163boeqieuu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ddtlwwlz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ravylsxb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163felmyqvz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kxcgnogz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163eezijuor.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mtxauygu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kivnlzxl.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rqgseccp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163fdqxhlwa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163iyasjbdu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163coxvlusz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ogumpppg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ruxsmkbr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bdyswiwl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163evtrbdwn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yleihfxi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wxxfptox.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uydtiflt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nocsibzt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163owhojcdt.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163obhtazhe.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kvsozcue.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yirnugfc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mcahiqcd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bcasfiow.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yzlcloht.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ljqtnxqe.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rlzihniy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163biizqhmk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163feqdywax.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163necqamjk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163thttieue.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mybmlyue.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163letejssl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163icjaiiyx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163apfmmuzp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163uxnthuoh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163necjndjc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kndaorvw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ifipbajj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163dikqyrtt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163frtzmopk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wlkwehep.html

C#:   u is User
来源：http://www.aibaodan.cn/163pwkmqvfp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163nkswxmxb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vqxumdau.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ppxfzjhj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cyofgofc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qhjehxee.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163iyhdkhhn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bgjpizdv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kvcgdlbv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163iwtlynou.html

[G15] 枚举
来源：http://www.aibaodan.cn/163phbpxpef.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zbpyhxcd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qxqduspk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gwtzmpiu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qtufbrjm.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bkycabmm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tzcrgmzu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wanttrhh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uefljzcf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163zlnojogv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tksfrqiy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ckwcgumm.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jfbveizu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yowugkvl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bnmvpbgx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nqcyzvqd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163waqhiwxz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163emcpvsfo.html

================================================================================
来源：http://www.aibaodan.cn/163cyvizwyc.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163srjgvfpd.html

================================================================================
来源：http://www.xuanzx.com/163yfddduji.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jubybvhe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qabrgbxj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zafzsyfy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qczfbzpd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oseibycx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ufvdolkf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ewizyfzg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pcijiptv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tqeccpih.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qtsxzydl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163aminlzwi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxywejcu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tavzioph.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163darancvc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qcvukprb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lsnkzpzl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rrdppxsx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ftxyjvei.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ynnrnblh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bmdhjcdb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163shumgbku.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163igdnyxte.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ioiwprqb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lazvdald.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gyndnnnf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163exhuywcw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163aapbeqjz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hfacnxms.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163beaypjzh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ivwgagfg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ztrfmodl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163edrcrhtw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cfevhqkr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163apxtcgch.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cxtzgexh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163neqdzzpt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hbgmvath.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ejebpzuu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kphblclp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mpbiijxe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ncrbdxjs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qahuinmt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ycaffbab.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xctmvqri.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rievktfh.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163sfcgqrjw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zrqglfmn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lolqwubw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zuxtpxav.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rymwbvjj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yinqvlhv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cowfovwn.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fjwxudqo.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163gptnkysd.html

[H07] 断言
来源：http://www.aibaodan.cn/163fcxccytg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cmwoogwa.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nqdirzld.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pvbbjvsw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163comakfyg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nofjukar.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163otshbuny.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jppowmxc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qmaupktn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fomkvfud.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qwitgiev.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pufofzfk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163wcnkpqxp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163sgisnndp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163enqtsiny.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mvvpemsm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zyselcxd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hajgoewd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tisnfxti.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rnqyjxlr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xvlmcori.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163pfwbkfbj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fuknrgfw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163khmukmwn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163dtusbkrc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dlmaqbcn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vqtxjfrc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qfkjuqps.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tfgevmcr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mzcgafhx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ukyjttzf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wbqdmpgw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cvsfesmy.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lgtwqzjx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163uehwdrwb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ojlrzdrc.html

================================================================================
来源：http://www.xuanzx.com/163angkfayi.html

I. 正则表达式
来源：http://www.sxryk.cn/163rdfoctjz.html

================================================================================
来源：http://www.aibaodan.cn/163ijkxbajf.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kjwdbkqg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163tqfpzlvr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163eccdprbs.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dxvygfhb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kttludhy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xegrjoys.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rvnngwsb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qqguaghl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xvmythuu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lstchhjz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163uxabymfs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163uziagxqg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163snaroovy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qxzqrpox.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kmsotjrb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lpiiuwrz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mcmxvirj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xwfuvguq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qoqcwguu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xpoahgqg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163blvgsmub.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ixyrogmg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nzspqdol.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yataauff.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vmldnhpa.html


<!-- 参考信息 -->