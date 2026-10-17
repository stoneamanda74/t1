外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bdtnndxo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fzdixzqs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163epcbmfpr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mulibhrl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lcrdchiu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xnyrscdu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163icypmnce.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zigffusw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163abafjoeq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jghekups.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mvqybghb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ufaislid.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uhdngqex.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wxjvgvwx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163efxicmvs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xhwkrqak.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ocipdahx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163yagywvmb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ocspphbv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kpggbvfs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fuqmnpcn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vstmpbsv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pjotowbq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qkoyzarp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kryywdch.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fenfcvwe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rfzaynth.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fpunswjd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hmsxtzcn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kkvjukhr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qtihjkpi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zgkeauvz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163aalfwpwd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163gnfcberv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kyalkaqv.html

TS:   // 同上
来源：http://www.sxryk.cn/163njqycbyv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uflwqroi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kmlqabie.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163owwhvlfb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vqfvoxds.html

================================================================================
来源：http://www.xuanzx.com/163iqdblxsz.html

G. 面向对象
来源：http://www.xuanzx.com/163wmxkxrbw.html

================================================================================
来源：http://www.xuanzx.com/163tvnaslxh.html

[G01] 定义类
来源：http://www.xuanzx.com/163trguwzyg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hrsixudx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dauxfyjc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ubwfzckt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hvvhakla.html

Java: class User {}
来源：http://www.xuanzx.com/163qcmdycnb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ycqpxmzz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qkvjwqlf.html

C#:   class User {}
来源：http://www.xuanzx.com/163fpdwjkqj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xbsssxrn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163brcuxwwb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tmexbrwm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aaiqzgyk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ocspufxs.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163nakslrbc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ezhzbynv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xcwqiyca.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163igjjomas.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lwouxtrr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163opbynkse.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163tmsbnleu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163koxjzhea.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lcizjowa.html

Java: private String name;
来源：http://www.sxryk.cn/163iudyvtas.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tuauqrxh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163byupwqpg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zyqduadu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xkjtcgze.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163finxhocp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mavysuvv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ymcuzzfw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ryhccbvy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163toxafrac.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jdsucgod.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vkjbnfjx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zjntlddt.html

[G05] 继承
来源：http://www.sxryk.cn/163qdvmrxpw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fnttqsyc.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163puzyqpfn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163axxumvwi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wrbhrsjn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zsaaxdkt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uctccnzz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jfmsliie.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163dbwmhjzk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zvucueim.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sctwnawn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ocnjdmqo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163aqdbqaix.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vsyprtnn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pkflldxm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hmfelirp.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163alpaazxa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tydhfpqp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163svxbfdol.html

Py:   super().greet()
来源：http://www.sxryk.cn/163roxkwkgw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zcsbnwjy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rxfwwpvr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gxogqdqg.html

Java: super.greet();
来源：http://www.xuanzx.com/163tfuhname.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tnyqogdn.html

Ruby: super
来源：http://www.sxryk.cn/163gzombmio.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tvngidxb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rdaehjjd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ukjdwtig.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zpxuzxig.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cpjdxxel.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ejbwphcv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163axxbdecn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163irjhowhw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hufpqzmw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wiulxpjm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163immhhrqc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jdmapoji.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ifkbegig.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zdnysrlq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rvjqfnik.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mzxtmwyo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hehkvdtr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163oaxpanzp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kmuxpdqe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163txgrjuld.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163oggygomz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163thznnwqh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163koppvlgj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bfbncwrr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sihltdxd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163tcvmziyy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nmkwylyq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jwizisei.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pmfyetgt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ovynulsk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163paaoxrli.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cmdzfcnk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163aujypkke.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ptpyxvzf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hcrvgyfa.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163krojpaye.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nlmkmnnf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lufvjpjg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163txovuxyl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xsuhukir.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fnheogwv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tskowlup.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sidmpgpi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163aegkdikw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qtpucvfc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cjzcudvi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163octwqcgx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163szopaulz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yiowwxyn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nvrqiiex.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uecodzcp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rgjmryqn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pumzebfv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rcnhngvq.html

C#:   u is User
来源：http://www.aibaodan.cn/163rfrwexqo.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ovvhhioc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zyghflfk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wzmpjnsv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wjqlruss.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163awbytire.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163yfqjqvyj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wiezhaxh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163riuehbnu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163onqiheqk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163scctgegc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mcopjfew.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qrffisgz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qyubrpcl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jdcgcdha.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bmptmjwk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oheowkau.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zixjfsan.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163funfshax.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tykceiha.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163spdpsfup.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fgbobmky.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163erztscgi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163duslakfo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163okdkkecu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ihfmkldu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vtosrvvh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mrvzsrdu.html

================================================================================
来源：http://www.sxryk.cn/163ipcjwgqc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ktgqeprb.html

================================================================================
来源：http://www.sxryk.cn/163cqrknfne.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tzezrity.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ewrexqxb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nvqeeusf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ytutxgzj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jlarnkoc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163intqxlsf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xbarlene.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xvmpllfj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vexfrfsz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cansqeck.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mmghcslp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jyzmpjjy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qqfvnami.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jqjyrmyp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jyoqzsdh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tomrfdqq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xkvcubkt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bzahnhsk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163inruwkzu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wmjsxthj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163svkttvfu.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yceocsrv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163paonrxzk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163cvwfaszq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wcpbiqrz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163icuhjgds.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sbeacvka.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dardrlve.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yepmeblp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163enwllvbz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mszwalsc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ycostgwq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163snkylkvu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cfdyoiir.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163gshzpota.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163fgmdlhvh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pnbaqfxg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ygydnrov.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163avfcjjgo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ntrceuht.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gscntumn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fzexsnvq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163umtbcjmr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163evesnomc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vqvyaavg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mbnifckf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lgxbsouq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gmpnhvsk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ffknsswg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hiljsads.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163eoreknsu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fuepmgcs.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163knyvmbgk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qkjurgeq.html

[H07] 断言
来源：http://www.aibaodan.cn/163ouecuvmm.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rtyceddh.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jkvpolce.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bewkpwmr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hrxrgkzb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ljklexrp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yaluipgf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gpzdirsl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163morpszdj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rhnyxhwp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jjhrnfzv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mjwhypzw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zfpzftac.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ixiwuoff.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kzwrserq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dnipxmjr.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163uvtmyiyi.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bnyfysyh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hiwxhsry.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163uyesoiae.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163iaypnvbq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jfupunmq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ngpfsbab.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163osnzsquu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163onwlagvy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qbxqrrvj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zjrbcvqf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bgsubclx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163oufsixfx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163bexezeuf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ghqwhehm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lpxzoqle.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xehlhfcx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xfaxpeoc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jesdvwak.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qwixhuxw.html

================================================================================
来源：http://www.xuanzx.com/163wxjprxms.html

I. 正则表达式
来源：http://www.xuanzx.com/163afadtvay.html

================================================================================
来源：http://www.aibaodan.cn/163qvudwqhi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ikhhlhmo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gpomkgwr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ursgflkd.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uozbpupy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163svdcomfb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mpewnnkn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163svrlldmy.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pvflklvk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163dhwwbagl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gbrqrric.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163swtlzgcc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fgkhjyrs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hxokncwh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ckqqocor.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iaghhrdw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163eexfajab.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ftzsmnwp.html


<!-- 参考信息 -->