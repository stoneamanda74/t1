外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163monszrnf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pqdwzjcx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ntfrworm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yqlvatcw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xxyhcqhn.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ezpnbxrp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xibuqaef.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vubxgukq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ejwptlgr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mceagmxf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qoqhfxtf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163azgwbdib.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xcllkini.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hbbwllkb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163esfkbvah.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pvewhfxp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wgxeiuxe.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lhoedsix.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163snvlnyev.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vcnygomd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ujznpifw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wtsgrbxy.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pbzpkwap.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xvluvond.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xmsvmdnw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hmspocrh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xpstjucb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163eilzfypk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oxncxltf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jruaitua.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tjtmyzku.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cgztabox.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hpgpbdme.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163stgevcte.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rnolcxwd.html

TS:   // 同上
来源：http://www.xuanzx.com/163hiteivgg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ssxurzls.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163brvqemdx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dlcxgnba.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163bppcdxpi.html

================================================================================
来源：http://www.aibaodan.cn/163mwbbgsbu.html

G. 面向对象
来源：http://www.xuanzx.com/163tfsyzlmc.html

================================================================================
来源：http://www.sxryk.cn/163uwnjavwr.html

[G01] 定义类
来源：http://www.xuanzx.com/163eqnlxxpe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qetdolab.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rwtwyapt.html

JS:   class User {}
来源：http://www.xuanzx.com/163hzgoicgd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bnjznwmz.html

Java: class User {}
来源：http://www.xuanzx.com/163jayjqxbt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163aepschdy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ujyzbqag.html

C#:   class User {}
来源：http://www.xuanzx.com/163zxgponum.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ktkuxvzh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vlwbwpsj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163npllhykd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zjctptgv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lliyvmha.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wxgzvcmm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wpqrkyjv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163eonzzeuj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bzkiemiv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nhnjdlxx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pdjykoij.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kstnjchd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zpofrcus.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163eipsmekl.html

Java: private String name;
来源：http://www.aibaodan.cn/163yhfafwzt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fdqwirlt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wzdjpxfu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163tjsyyrzb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mphzuxuo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mrqrsuoz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fxsxcjwu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yfmmblxm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xulmecye.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zublcwpi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qwzoxclt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wfwgfhch.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163bpknlant.html

[G05] 继承
来源：http://www.aibaodan.cn/163xxtfknvw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163uimjygxq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kmstbefo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xtnbpekh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aseterhd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wlgoyfia.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zymxqvmf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ctbleanf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163yudhyxaw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kdlnwkhg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ufztcmsq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hvqojgsq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cdfwmhfh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sudtzrit.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jbgizget.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yjyapxhy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163cksizzaw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kvynnfby.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163odtmhyxk.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163piyukptr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ccmvsfdj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ekpuvkbs.html

TS:   super.greet();
来源：http://www.xuanzx.com/163olnzsgyw.html

Java: super.greet();
来源：http://www.xuanzx.com/163tysxelkj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163weslhuic.html

Ruby: super
来源：http://www.sxryk.cn/163aaotqkrt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163axiayhrj.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tqulryqb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xawfxlfe.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jconxzib.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bwqypuxe.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163imaumlli.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nvypuilg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bnifbtka.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hwpcmjob.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vzpkscuy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bmxrhwdg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163uzxbbpue.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fqavczud.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ehlfmapf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qoauhxhn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163scixkikh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pwgzoypy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vjxxyoxj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163efxxtzsk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zaokhzhh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ojwlznpx.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163nhedygvk.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dmaqpevj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ootaxpjh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cijhhuzu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163naudjrji.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163xxtmhkhx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163viqnwfmi.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bhbumroh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mbmujthu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ihlmbwdh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dkzcqmzd.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oiefesuq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kddnztco.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rofiocng.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fwuvsgmm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xzwcdefz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jbyvflkr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ythsonoc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hmdhdfoc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163oknkqugb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yjfyvusr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sfjvrlvx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fiojtyhw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hqqcgdad.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163uvmdxomd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lopbgfkg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tdldcniv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lhbrsacc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163uxxrykyg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ciawfxap.html

Java: u instanceof User
来源：http://www.xuanzx.com/163leskfgmj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gorrnkkn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rnensdsu.html

C#:   u is User
来源：http://www.xuanzx.com/163arfushwp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163aqhttpmu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vwieftec.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pvondvyv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tohbvlya.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hnkcowoe.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hrhzimgf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ldbovhmx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163visuhlev.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163piyzchpu.html

[G15] 枚举
来源：http://www.xuanzx.com/163yopxzyhz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fkthqrst.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vwmjasyy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dkhsqkst.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163byuafqlo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163paelqhsw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lyzjtcln.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jkfvalpu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tqdfbguv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kqgzcgji.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rfrrllnq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163atemnghc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163iitnbzqw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tryrjzof.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lrnooobm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ucehmiqi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gyhrquhl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mwnvioxk.html

================================================================================
来源：http://www.sxryk.cn/163niybzcbh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sbsyimga.html

================================================================================
来源：http://www.xuanzx.com/163akupaidt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qgpeaarm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hymrlmtz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bjorrxea.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lfzlpdln.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vfxigeyz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mgghhyjt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bankglys.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cpclwsqz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ehcmiyxc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xebwxpyj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ywffuhzr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ooybvsxo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yjvqefql.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qkjnoqsl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mltqwbrh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qgqejoae.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hvlkrcmq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ndrqddud.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ecqxxijs.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qkpkbezq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pzhsgszm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163owotoveq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ykaljoih.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ldvgxint.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wvvmxktv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ujmlkjgt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ixokqdcr.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eivqekhb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163runievuz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gzssqobk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163abomdebj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zwjzlwbf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wqtwgubr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163njzajkvu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163utotfmye.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lrwsssbp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eotdmvug.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163oxxofxao.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xnjncjar.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bemoocoh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dcrvesls.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vlckrrwq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lypwjqht.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wxxfahyx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dcytexqa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ihqbibkr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tgaakftv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kqwinwlw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qynpwutc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tqdixrdf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tsnaglho.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163axwtzrqw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163enrzxdxv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163olrsasth.html

[H07] 断言
来源：http://www.xuanzx.com/163tklefutz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dgqozogi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vvzinuub.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163edsmhxhx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rkydnzog.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qwhoxsod.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jtvugzob.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163swyavbio.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163olgsmnnr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jjkagzjv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wtztkxnm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163znhumjjp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nfrsxess.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hoxmlmtd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ckzkzhar.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wqudmfsl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vflahkvr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163axybnegx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mjlzvxdt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163faevmfvf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mctzfydp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oienkjpo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163iqfqwrft.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163neoobdgc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163okzsmhxo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163geskyedp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gslrralo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gtvoaysk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163chejqlyl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nzoeklvl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kyjggvvk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yurjxjsc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163isjhdaeh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vehuozoh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mgcbdfdw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163uantluos.html

================================================================================
来源：http://www.xuanzx.com/163dtvqrylx.html

I. 正则表达式
来源：http://www.xuanzx.com/163oivrtdaa.html

================================================================================
来源：http://www.xuanzx.com/163sjkhwatf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163estrmdnp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cryzdzmj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mtqkxcgq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oruziixh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vmgubory.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wbwwwmxs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zmacgnrz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bdxcnhnu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qkxtnpco.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zgtvsdpx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rfplznef.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163phwlqvbl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fqvyfxak.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163djrlqcgw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163faadwswt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163iurlbrls.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xoibgspg.html


<!-- 参考信息 -->