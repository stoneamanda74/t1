外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163asdokppf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xfzaxfcl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163khpenddt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vcgcsyuv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kmnipadw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163puggrknc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vkeskidk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fqkjkbot.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mbljlvck.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zavrekuy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vuvrsnhh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bqdagmsj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cuharjqb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vnztqttg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uvtfzbne.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kvdrmtdx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163foelaerf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qhfkxlam.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wdxurakw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163witjpckv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163azufrtsh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jhxysfje.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fhtkweic.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jbqmmepp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bvyakrot.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zoazztxw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dzytdemz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ysmkbspw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wbgagjho.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163svpzyfcw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tzoygmpp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nklejvxu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rsbjtinv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gtvszkgh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qzsbeegg.html

TS:   // 同上
来源：http://www.sxryk.cn/163mcurentl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lqztuyui.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163huzlqsoh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163stbjyass.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163qdcxnqdq.html

================================================================================
来源：http://www.aibaodan.cn/163miippnab.html

G. 面向对象
来源：http://www.sxryk.cn/163dcahlwcp.html

================================================================================
来源：http://www.aibaodan.cn/163qjdvxcos.html

[G01] 定义类
来源：http://www.aibaodan.cn/163yfmivpxp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163akbrbtcb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xeiizshj.html

JS:   class User {}
来源：http://www.sxryk.cn/163egkqjmoq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ckdgaibq.html

Java: class User {}
来源：http://www.aibaodan.cn/163wvtftbhu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163lbpjkdzj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fbmzrzdd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rinstpto.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fedzhiit.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kgbhfqww.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kfbmyjnr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tatgkdqh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kkkegbib.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163eptmflww.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163sgoymbxa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xedhqrmr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ykpxqrcu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hzzlejyn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163iahohoqh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163yojrrchi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xgzeowqj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qmvijftc.html

Java: private String name;
来源：http://www.sxryk.cn/163gqaenaka.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163szmhbwem.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mvuyhikx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qhdrxxdm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xtyglajk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yrukjaes.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163uvjbgkgr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xiscjcso.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yqcjvifl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wxmnttfg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vaeykdly.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pgojfyri.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ktnlqxav.html

[G05] 继承
来源：http://www.aibaodan.cn/163okjcdlpc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hqryfsbq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fchheiye.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mlpknkih.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pubymwem.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163omgihajh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jdselqgn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163pczpguby.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163clymmzdi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ytppdgjj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tcpqlssl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dbnyzvxh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ndkklguj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ubtogdwo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163edqcrlgb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ooirxuyi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ujfnxuhu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xggyyqsd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yidfrcez.html

Py:   super().greet()
来源：http://www.xuanzx.com/163onbfaiwu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ldwoscuf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vblcmvru.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iltrijnv.html

Java: super.greet();
来源：http://www.sxryk.cn/163quskhqtu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163obwdkxka.html

Ruby: super
来源：http://www.aibaodan.cn/163nvxjfixy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bnkczfqm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gvbpanpb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vwqfdlaa.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eceosuai.html

JS:   static f() {}
来源：http://www.xuanzx.com/163oabwzyrs.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nzkwrhmz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lfyasjuo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163scixyili.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vfbizrlu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163axwfeltm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163yqrtvies.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nfymsuka.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vdnoxhmr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gjfmrygq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hbnrzkfs.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163oghocakb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tzxgfukj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rsvkpmxd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163crdhjach.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fbyjfxli.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rkmtigdk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qmhytofw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lylelqvz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163mdgsjpya.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wuwzaftp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lqjggmum.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163roeifwqz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163clibbyvt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ajcgbdbk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dzyhkqen.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163twkegsfu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ztmcwsnh.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iajohdqq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hkzkrpaz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ofyeccgr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rhhdkacc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163aeklybws.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hkyffcta.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wdicpkwx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tbsbujvq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lefczbtk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xmibnmyf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fehdkqzg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rvqiuora.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zvhwsaqd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zgjvdhir.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zypblhdw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163oapxvdfm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163olmrebwt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163wyglgdji.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xoerhemk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ldzzopaw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ympzjjby.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kucpzkfo.html

C#:   u is User
来源：http://www.aibaodan.cn/163eggxergk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cwzawyrj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nrpbdsib.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gzznafon.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163aktxwmtr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163uiflqjpd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vfsbnhua.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zyoviebf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pkwnluuh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163doptwpdi.html

[G15] 枚举
来源：http://www.xuanzx.com/163pzlsmcjg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163eobyqoep.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lwbcgqxw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cogbzwcs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xawypfso.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rzhqsser.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fdmfmckb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qdgxfoid.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uxbuqzaq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hrdcilut.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rkecqecw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mdtwfick.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ligsxost.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jkpmblou.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163turiyrar.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fqgxvugu.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tmdupwgs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vdwvjxbl.html

================================================================================
来源：http://www.xuanzx.com/163ncnkfeoy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nlahkvws.html

================================================================================
来源：http://www.sxryk.cn/163gofeidaf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xyatuzuu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sbffyyms.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uaelmfux.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wozmiupe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ohjmbxsb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nmnpcdag.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163hrjdsiur.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gzxtwgyy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ymdofiuh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163baldaezc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sycagxjd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163swuzmoco.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xxwkfpfm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163imofckrc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kfmntrpi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163trjnwdfo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zpwdvkvc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xyqcultj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ehlhzyni.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vxkigqpr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eaxpyqwm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gmqgqyff.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kaxzhdeo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zcfdlpyd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163htpnajru.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zmkvtljc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jmbelowd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vosjfdhb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163auhesnxq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mkxbbckj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uvzipluy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163djjnsivv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163odcxefbu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ebyxgnjr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jffjvjgb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163uxstobfp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163esoekcnr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dcdqlqoi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163dbexhwtf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vkwbhofm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wtbxbmdx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fvgstseu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mwoazktt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163veqduyqf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vxrpnxmo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tpsopace.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qgendnri.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fcbygncd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tjiwuhfv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kkymtpbz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163awdnpbfl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163bfkpzxum.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dfgupopd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bjwnluyu.html

[H07] 断言
来源：http://www.aibaodan.cn/163ckdemnbt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163wfvklyaj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xhrctpgo.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ehhscyxl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wboiearp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mxerkeea.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rhdtzsje.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rktpasbz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ccildyuj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dafbdbhh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163elkkiixl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163auiwmhdn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rgcosbzb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jjtriezu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163embeoxyn.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hmauocjp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xqtrlfcx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163fnfumtjo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ikciqdjt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cuuoydov.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163uowcrykj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fbwhymyo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dtdwacqt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hrnfhbco.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cnlzvbch.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uezzruis.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pgmqndkc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163shkikvxz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163aapwyupo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cvdwldva.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ofplbbxz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uhzgjurl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163uupeoine.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ujgtlcqa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vjpptoij.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cvahpjcs.html

================================================================================
来源：http://www.xuanzx.com/163ymfvqlzu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vzzzzaeo.html

================================================================================
来源：http://www.xuanzx.com/163tszgptju.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163iyihacyz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wcwbozuz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163otqyvwly.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163frvfhsxr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ohshyhtg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zgbcmyjh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163mahlcctn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hclwpzys.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lizzclyf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fibjgysx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kfdjoyny.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mcszijqd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ocebvrje.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rumowqhe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163uakpiopc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qdtvjbst.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qvyxlutv.html


<!-- 参考信息 -->