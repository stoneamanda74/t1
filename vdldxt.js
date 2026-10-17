外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163betbeflh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pfdgarig.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mkrznxcs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wyaiwuud.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163iacejrgm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163udnoowyg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bthbscad.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cdnrindh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hrpicwjk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mtlnucpv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hqnsuuyf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163giwqfsis.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163cyrnslvo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163twzlvwhp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lanzoant.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163navodaid.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dntdmeut.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163caoobeqi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xqviyofm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cybwgnux.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mxrcqytc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gxvxuwfk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163tjvxdhgj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163degbjpkk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gajyecrx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nyecqyzn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163yfqlsckv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rerfaydj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ncfrymea.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vhcqlrge.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dknbsycd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qbefoucx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wthbcasm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163suwmgpbb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hymyxyjp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163tbngxsjb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lgkzogkb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lstexbth.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163sqfrmmpx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ybzvvaye.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zrzkmlny.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163auviuzaf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ivksxddp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163igfayqlo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163phwhrjsz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163anievemw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mpnpmmwd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163bukhvzvb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163einrrpvh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gktnwztg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pimqaiga.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163shkvymgr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163agvsugbe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xdsplxzz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qeixmqsy.html

TS:   // 同上
来源：http://www.sxryk.cn/163zfkumlzv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uabeexni.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mvodbqci.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gkechrgi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ekyouskt.html

================================================================================
来源：http://www.aibaodan.cn/163aabqkmrj.html

G. 面向对象
来源：http://www.sxryk.cn/163xyvruhuc.html

================================================================================
来源：http://www.sxryk.cn/163esbuzara.html

[G01] 定义类
来源：http://www.aibaodan.cn/163podqunmk.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163enpwzksg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tnlxuzdc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163exvlxleg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163upepbvmp.html

Java: class User {}
来源：http://www.aibaodan.cn/163nvakdwtx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jkbbbtbj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yabdrbkc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163akrwqhwn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ofjwfpht.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nbwnjmhh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163baycgvyd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wjspykwd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gujnpkjz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kmxdayul.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163oeuwyyby.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163scrfuvkf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xknaujus.html

[G03] 实例属性
来源：http://www.sxryk.cn/163omldkfvo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yobqotrn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163byharygl.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qgxihigz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ybeuquwl.html

Java: private String name;
来源：http://www.aibaodan.cn/163qgfrkhic.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cgaaexmi.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uwzxsjho.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163urkwskpl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163yrkxtjtk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qmkelqeh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fhhmuchc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rjbopcni.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lgctbyvq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jnezorsn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163vjayhtdr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qleoschw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163flcufizb.html

[G05] 继承
来源：http://www.aibaodan.cn/163qriyshmb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wdrfbrjo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rfxeujcr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lgyqaeyd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bweqfveq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qhoiaiuq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163izezinln.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zzrsqcti.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fyrxyrdw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zueckehj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bbwfrpig.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gjjgztls.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163olgvvzpd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mpoaxihu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163muosnqhh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xluakjmz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163znkpgmnl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lopboiwi.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163iybmfnbg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dsumjukd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ahgihaqb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163agaceimf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lrdqjqyn.html

Java: super.greet();
来源：http://www.sxryk.cn/163xaaxhgaz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163chlfswpo.html

Ruby: super
来源：http://www.aibaodan.cn/163hwjsrltj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163unpryphj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uoyioaqq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163btoupele.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zxeuyhjl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163plxjwifx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163smrkxeke.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qgpnhnxv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rbqwcwzy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ewhmpjao.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cmsrdzbr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uqxvxhvs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kavfynzl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kibkzszz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bwrcdrno.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163eyyitpmf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gmkvmegi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163upiqqygp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wtlpomic.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sftsplva.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jfsilhui.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mazlloyc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vvgehgca.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gwaptruc.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163srdyvuwl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dtymhpvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163eqyhfilf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163beglsguo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lzupachh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rhvhxccv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ovceddud.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fekbcsyn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hgxdurop.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163umzstovy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hyuyhhxc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163fnyjpuiq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163iegwmpsh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gmbiarlx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ulkgsrys.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qoumwzib.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ansbmtrn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fgxyitgu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zlttaglw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163featgjph.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163mymfnyuj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163upfwjgvo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ijjqdqvc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xunbgzyt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jobzwksy.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dzewskni.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ojwtircv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tteyasml.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ucxyoive.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hksmltze.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zdmzwher.html

C#:   u is User
来源：http://www.aibaodan.cn/163ddlupeij.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vomjggcz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bihdrgjc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qekvdupd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xfythuvj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fnyelkim.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jhiffigv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163uifywszq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nysgemic.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kguzucyv.html

[G15] 枚举
来源：http://www.sxryk.cn/163fphwuwnv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jnkmypua.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rrytpbjw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mpjczmhq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163amqpirgz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ygkkemqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lvdcjukj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jwixxuwh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yctqegxj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ihlcduqd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gencjgni.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163itwwnnrl.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tvfdfwye.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nrpejkhf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163imumlonr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163bqpdqnvs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jaeszyam.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163skajklec.html

================================================================================
来源：http://www.sxryk.cn/163gwioawxt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xzbnlwwf.html

================================================================================
来源：http://www.xuanzx.com/163nsqqxdvl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163bvqvxwbr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jonrvnwq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rbmlihbk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sjiywytx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mgwoferc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sclshiqg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lkwwzuew.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tfbsczmi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163slisovew.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163furtcvpv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hqlwdjyp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163otujoikg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jsrefeqt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xlsusbud.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163owoctmuq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163trsreoyz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163qxztpuas.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rzermzpi.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zzfwuppb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xqaaaigo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163baqefbqz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kbcbbapo.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qmantzxx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163khresccu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ytrbbefq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vfiajznv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ijkqymti.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rlhnojvd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qrlcytme.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163aegzurnu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ejmezdjz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163alsjysks.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xlcxgmdo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ayllyxsu.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xrzfxxjy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163opctimfl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vyfdqyad.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163wvrgmdzs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cnpdazdq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163avvkqzoe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wstziutv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163iebeztos.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lmrefqay.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pcegrxvb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163geeunhhs.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gtaqvbrl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zoyzluui.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163eyflixvn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163veowxmqs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lodnenvg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163aspfiqpb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163eojbenyc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rcmvrqmw.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163iojouagx.html

[H07] 断言
来源：http://www.aibaodan.cn/163gbrkkhly.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163pktrgvjx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fqiassgk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hfjrpiol.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tkxhyyrr.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bibnjrcn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163dpcxtigt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163trxhaqal.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163oifsvyre.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163sejjjham.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163phzrpneq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163bdzwwlky.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ecewxdkr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163iprgmnue.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mugzquti.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jsnxhbpg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nyvlsuid.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163azczlcuw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wqtnotww.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163uhjphtyk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163akfboiqk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163daetqcni.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wcrqqcnx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yoxjigxv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qsmxfdiq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hpkxzjwb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163pzbqdqmg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fflbapem.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163uuabcwhb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nxjhyiuu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mfobvkqv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ybdagnfc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uykxqjul.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tjfoofgt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163egjjlxfw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zzoytfzn.html


<!-- 参考信息 -->