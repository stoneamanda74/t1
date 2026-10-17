外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bvrixsav.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ffcbffxv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vdaqoxbb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lrbpdnfy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tcmqcaft.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jdxoutox.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ykyeuwqs.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rgradnjk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163tpmjwpuf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163uzskumub.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qzkdgkqz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163awjaeukc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cipcvxte.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cpqcwwps.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163axhjdymv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oxyvrpvp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cvnrfxav.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nklbsglk.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163elkgfvxa.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hzrxkwxr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163swnwawtm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jyhacqrb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163psjixjsl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163isnoevvr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163banmsepv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oblbidnx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rytgproj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ldbmauuz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zvgioixs.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cuauqbjw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vugqxwsr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wielebct.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nrslnspg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nqzlcfyq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kiyuasat.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163grpthlpp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ncbmgpjk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hgnzutjx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ryvfybbt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fswccymm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gmifdyam.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jrghivmd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hcnxrubd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163btkddpyx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163prsiuuvm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jqwdgdvd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gpubejls.html

TS:   // 同上
来源：http://www.xuanzx.com/163vembjkxa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ahyhxzhq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xhlusfmh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zxyzwstz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ecnoqfuj.html

================================================================================
来源：http://www.xuanzx.com/163vshukgdo.html

G. 面向对象
来源：http://www.aibaodan.cn/163anjlmbrd.html

================================================================================
来源：http://www.aibaodan.cn/163uzbroaol.html

[G01] 定义类
来源：http://www.xuanzx.com/163kfqngksm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ubxpupac.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tdiddwbe.html

JS:   class User {}
来源：http://www.sxryk.cn/163zbnjirdm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nvpymqyx.html

Java: class User {}
来源：http://www.xuanzx.com/163egcofybo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163inkfqvch.html

Ruby: class User; end
来源：http://www.sxryk.cn/163azewluou.html

C#:   class User {}
来源：http://www.xuanzx.com/163naynfklb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mrpfrkxo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163slkirivk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163apmgunxo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nnlwntgt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ujwqslyh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xnaawfyt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fembwerd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163druvulxb.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lsivkngv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163naksbock.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163oxzesjns.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163evnqzbnf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qstgmmgc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uhcrxryz.html

Java: private String name;
来源：http://www.sxryk.cn/163tujclnpb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tsfunjrb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bciabkpx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rqllnqqd.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bexvoflk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163emcwphwy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rskurqfj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pedczzsc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vnswnplv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163izfkksrz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vqilzsjm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163crbvvwaa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yycwqgic.html

[G05] 继承
来源：http://www.aibaodan.cn/163wbxpqoaw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163uiepaodp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cqgqkoss.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cmyrrwzh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vmsfqvww.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fhiameqx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gbaitbcw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zmquuanr.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163mrwixhnw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163eckyvyio.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163innaiuyw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163albbunkc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rexacyif.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ehxowfiy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fdxswxli.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wftccfcq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163fpuyemcu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163chqbjzrn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xkofjmbf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jtwqkolj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163szqcrxhs.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jlpnnfrm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qjrxlusx.html

Java: super.greet();
来源：http://www.xuanzx.com/163xsmqgowq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163auznjzcq.html

Ruby: super
来源：http://www.sxryk.cn/163qaynjkkg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163epqahogt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rudodxbs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gefaxfyy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163larkwtku.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gnjvjdzg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dzffkfds.html

Java: static void f() {}
来源：http://www.sxryk.cn/163swdhixup.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jiufpizr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rgrtgzjp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163eyezurhg.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rixkxfvr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vswmexav.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163jirnovjf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163znflgmma.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163noyuijuy.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hmawxfbi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jpnhvrrm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ookghvgb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163arryjdil.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dlkpvcec.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tzrjocao.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fqrqlifl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163uslxexhz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163njfhvsbp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kbjrkgmo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mffsumfs.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zdxpyopu.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163echhacmx.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nnrjcbzp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uvvfktfo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yfyjtvog.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ffgadzkz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rpcjsbww.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163islhciay.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163igtskcdd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qvluxism.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mffhdomi.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vceajcyr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163iwryebsc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zrtbnhfn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fothajhj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163erhznllf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dtigmfpy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gwhifjoe.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163naegcmtj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163euyzybqh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uhwckzdg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fdfukccd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cqkpvici.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nsnqwkvy.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dhbwptaa.html

Java: u instanceof User
来源：http://www.sxryk.cn/163isbevcfs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jbhojxgz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163eohfttkh.html

C#:   u is User
来源：http://www.xuanzx.com/163tiaurpcf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dqfcfcqb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ywwwykkw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163enyjdxxm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tkvijfzs.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qklvyltd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pjbxpcsg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vmlqpgsp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163djiealwb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163idbmgqhj.html

[G15] 枚举
来源：http://www.sxryk.cn/163cyudncef.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hzsuunyl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cahhpxqp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kgbgerbo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cwqpupji.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fyjrjfps.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163xgbfmtec.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xleucwfn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ssfpzpla.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163pbkfjubi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bzcqbsbs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163yuygqcno.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163godbznmf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hnhovcfc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163bezrkfuh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zcpbgail.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ccbsapse.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sjenzlql.html

================================================================================
来源：http://www.sxryk.cn/163oyvejaux.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zpbcpkzk.html

================================================================================
来源：http://www.sxryk.cn/163rwyveulu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163tiotxfvq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tvbcsonl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163iyaqtgjm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ktgsecnm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163njrmgbyf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163oscambjj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pfjnejss.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zfarhcsf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163apskozcw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gbeojiej.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xzfvvofz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iojmvfjy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hoxrqxsz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zhsdcsux.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uezmgfgx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dovkejhj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163shicepjc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yvrtzlth.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vgvnwsjf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mxqnysif.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163yooebbta.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pvdzfmwi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ogwslomg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163thgytpgj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fbdvsynr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vwwqbhqm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163fttuxeij.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163uvwxpgtm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hmtgtpoa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163eecyvdjn.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rfdijhus.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zlnqflmo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163nqpchpkj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jpdfpsmt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sbrddqtl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qshcmtbt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qoxfxwle.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ommaedhx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163femludmv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163erlkcsxx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gkbuhzjg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xdthsvqh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163csyktelb.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dahixlva.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lsacxolz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163yaovvwac.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163txlilmej.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bspnnygu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163alkwrpyf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vgqpgzxo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bxnlrcsi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163atdrqotq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163auhqbdxg.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zodzzjns.html

[H07] 断言
来源：http://www.xuanzx.com/163pnjmupre.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163llyaadap.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cvoplaip.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uqsszrna.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163achsujtz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lxzfnbzj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kclndxha.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163btslzhux.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bcglepua.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163eqbblkws.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vvniuiaa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hbdzfkqn.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fhafyurm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163khlvgjoh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163blgoktqf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ivbbptcy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hryqalgp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zrbhbjrk.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163peidpgup.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bnjtjbqz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wkluhcpt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xxrpednv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163khcmwtbk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163cfehmosf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lphqvprl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gnbqflld.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yidybddj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ptsbrfii.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jlfejvul.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gyigeonh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163irqpwmos.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mcevclnx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yrhtqzql.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rmvyhkmu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tezufhdf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gglmrvfl.html

================================================================================
来源：http://www.sxryk.cn/163hshtvokg.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zshnsman.html

================================================================================
来源：http://www.sxryk.cn/163fapyrbwk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lnlcuhqm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ksslgdtq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163kzioatel.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163shgzlrqe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gjqhlmwg.html


<!-- 参考信息 -->