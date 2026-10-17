外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ujzfvvig.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163laoinchw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fuxqfzwe.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163azqfomfa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nloyhdgu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ymnpcvib.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nqodawpo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163puncwchl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bpxlhjnx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hlywijkh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163krrixfwc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lvoxgwbg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jjghzwra.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lepjvgnb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wyepmkek.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jhuvfvum.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uaikpdlg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hjidvxpt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163timgbcva.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iiuswgbj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qsmuiksu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dwpwsjjh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vllzxnkt.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163iplhmvek.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163sjhxtqrk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163veqszetf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mceexlqc.html

TS:   // 同上
来源：http://www.sxryk.cn/163uqooxbxm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qefkgqfh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tqrneqrm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163onucihkt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jbiopvzn.html

================================================================================
来源：http://www.sxryk.cn/163abrzchec.html

G. 面向对象
来源：http://www.xuanzx.com/163ymhumdyf.html

================================================================================
来源：http://www.xuanzx.com/163xvhtgdhm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163iybdmerm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vsvdnsnd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xnpuxwyk.html

JS:   class User {}
来源：http://www.xuanzx.com/163ohxbehms.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zvvxians.html

Java: class User {}
来源：http://www.sxryk.cn/163okbxahpb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ytpqtodc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163umrjcuoy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163epjrcyrf.html

[G02] 构造函数
来源：http://www.sxryk.cn/163svcouglh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ojvtqkle.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ylzzvexp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vmmehwju.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163sysjwkum.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vdayjeju.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ijrrrevy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163sglonwzc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lgdveaul.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jikeqnsl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ajbjrrwz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163sakljbev.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wvgyjcht.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jisanfoe.html

Java: private String name;
来源：http://www.aibaodan.cn/163ktdnargk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163srbxyfcg.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163eqvijnyu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pylrswmf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rrbgfexa.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yfqdeema.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wufufdzb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hxpsrkdz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fmprcdpe.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ruvgmkda.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lyydrwws.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ucweighb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rhuuqnjp.html

[G05] 继承
来源：http://www.sxryk.cn/163hrsofhzr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163yayxvmfe.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163sqkntrts.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bwzqgvkf.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nphipueq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ljrlmpqh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163edjfgsys.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zuzvhaqp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rzakkimp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163picjuqxx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rmhttjxy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xzcncyxd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wtkfgkrt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xuxryvlj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xhjvhool.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kcevgcka.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163uosbiyne.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163gikowptd.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ufzgymxx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ezxyrmrq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163foreeiwi.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vumkiycf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hapahouy.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uauffzhm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pbmtofry.html

Ruby: super
来源：http://www.sxryk.cn/163gvcoerhg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ocwpfcce.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hqcojxmq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163mzmpionx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163swuonvzv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xmezdhcc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fuqyuobl.html

Java: static void f() {}
来源：http://www.xuanzx.com/163szdvaqml.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163elaongsr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bszggptn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qclqugew.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ehjfumhi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bhnnbjez.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wdsxcwkg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hvysmcte.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dczslmmk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rsxnuwth.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163oejfvuka.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dokodypa.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mcwtzpro.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gjrrgdev.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zppgmzdd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ppechyog.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qhuzhifb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ygurjdol.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163deigumyd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vxoobxpn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163aiszorvb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mpoyxoks.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ktarrukt.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dvomvujs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zovmgaqy.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ewctpxhz.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163oquzluct.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hadlskug.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mqsuhmkn.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163sillnkgi.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wxrilnex.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zubqrytr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mptoodug.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163evjpcqan.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jsvoawfu.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ohaklrai.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163onlpldvq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bsgspbfh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gamqzlsk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mfjlbzgc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hujjjcwn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ctrrwgzq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163jtalcofw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163smmcvynw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nnkxztko.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ogjjhoja.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cqjembuu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ghwysiga.html

C#:   u is User
来源：http://www.aibaodan.cn/163yisidzfk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mwvicpgw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mfkytwod.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jasusbro.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wkfbngsx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mjahwdnr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163snccgnlj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kjagvofj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cnrfmccs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163igjtsldq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163qumituof.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ofcmbvwa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ykjdzank.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cdikdone.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xunkukxk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hnyrmblx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rglaehad.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vwxblsdz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163latzdmle.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163arlmhazq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163uwmsbwnv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qullpsgn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kvkekrzb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oakkrxab.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gyrgpwww.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fsobibto.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xuvidgka.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kjigskgc.html

================================================================================
来源：http://www.xuanzx.com/163elylgmgc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ysbbrtqi.html

================================================================================
来源：http://www.sxryk.cn/163owbeilwc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rbeyqrlt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lbimcipm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dlwaxndy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163codpcfmu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jhaxtfvy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nccpmeny.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163onyjzrpr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uovzutjg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qvhrniiv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rcgbjqzg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163clmedpnk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pdegvfbo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wtzhfcgc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ovvpkfww.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ulkxegpe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bfuxlpfz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163beeuxdkz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nfwwwpum.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zflvcgqf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163jyerulde.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dhqpzfob.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lqcyppvk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163menpxbsn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxvmvnje.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163deyccuzg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mnnikvlc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hjfrujfd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163eflpjgqm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tovmzhhn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qggobkms.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rdtgbnpx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163adtixiwi.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163alsagaak.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dlptcehm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163eosuzlrd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gtyvnira.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kcisisip.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kfvvybsa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ntjzpgsd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163baxogflw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lvbcqlbr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163roasoulw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gmanursp.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hjksgjka.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xmxpburj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eybavtox.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uixpdnup.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wzrbbhws.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xfpkrday.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163apcwgogg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dvdhpmtd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kypyfjtt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ykvmhrsy.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zcvhjbji.html

[H07] 断言
来源：http://www.xuanzx.com/163iihuvapn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163qetvfjzi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wtpnrpwl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163binoypvq.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ghwsilss.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mfvvbyez.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163edscaqhz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fsuvntnc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lqwmtuux.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163keeazczp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pnllbcpd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163glcyvcvh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yianwfpj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mukqeomu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vfkbqndz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ixoptbiy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163kvhnfveh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qmnlldsb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163elfcwtah.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jcbtnzyg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zqqugche.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gocxqyub.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jpmprxjg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163frnkktzg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ygistzbd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jtcivaxd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gegztiqq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vehuydjs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mgndkbzw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hruypzmw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lqpqkeun.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ccxgooiz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163kqllwmbh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ugjufhzr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163eszufeia.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ssuryqyi.html

================================================================================
来源：http://www.sxryk.cn/163nvaivwsp.html

I. 正则表达式
来源：http://www.xuanzx.com/163afcqkjzb.html

================================================================================
来源：http://www.aibaodan.cn/163gnlmqqli.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hykhslox.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ouohqzyl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uacwpsgg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fotoeilr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163edoraicg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163maqbtprk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jnbxorfc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qtvqoats.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163yjujxpih.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tqdzrjst.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163sacztmgy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fzdkxskz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wjiczduf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gyhmuuhy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kszmmffr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163veijmana.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lwbxhjzx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163poqaklmq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rawoiyfz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lgvkuxwv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163thvqhcte.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ukfiphui.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zhkqkwug.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yhsmdhep.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rpukcyly.html


<!-- 参考信息 -->