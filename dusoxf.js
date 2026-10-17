外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rymiulyb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cqbdxqlx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cuwddfrf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163liccrbjz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ieiudwtk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163stknwfla.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163whuzcxlk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dglxocwj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163gzfwylwt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xyuhmxaf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zxlzpdji.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bofreujx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yqpsvivx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dxxbcjlg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pihosers.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yldxrvja.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ciggmgub.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163objaevlj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wiytmlll.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pgicwjqv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ndpxqoml.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163noemglsj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ijeuxasa.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163unjuglzj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nysdysoy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tuwrldol.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jdrxbtlk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163apifytlb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kcheynzu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mxpmibxh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163oarrakdv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163oribyqgz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pvafleqw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jzpthbdy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163snjfqkzk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163haqdsdmh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163doadaevr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mwyriule.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gasyxbte.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lmfzihjw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163agivkuub.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hktksdqp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nvqsfgby.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kkjlukky.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hvmfukbl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tkhzzlsf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163exyiaxtx.html

TS:   // 同上
来源：http://www.xuanzx.com/163wtrvcvxu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163itbkkvwr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163uadnonlu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gxyzalqx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kencnlxg.html

================================================================================
来源：http://www.xuanzx.com/163vrmwrdto.html

G. 面向对象
来源：http://www.xuanzx.com/163jaysdbhr.html

================================================================================
来源：http://www.aibaodan.cn/163pffabkes.html

[G01] 定义类
来源：http://www.sxryk.cn/163jgiujviq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gjqonihl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jmmzmxof.html

JS:   class User {}
来源：http://www.sxryk.cn/163yagzfpad.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ikxsozrf.html

Java: class User {}
来源：http://www.xuanzx.com/163tbiygylw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nqrvczeu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ggmmpexz.html

C#:   class User {}
来源：http://www.sxryk.cn/163qoerbcln.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kcexkcya.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qxnqgssq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nvmpjcar.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uodexhqr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163csnddore.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gexdymns.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163glxkqgig.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wudpjkwn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qcbehsrw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vxeiydhs.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163efkgtzck.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hkklairw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163djewrabq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163sqqkcdhq.html

Java: private String name;
来源：http://www.xuanzx.com/163fmqxaznp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ahbsklmk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sptxblro.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uciydonr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qtdcuioj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zgzqumdc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kpmcdijt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163gculjmal.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qsstlvez.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qfstcgsv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163sdmautsd.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fyspfmwk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163eounprik.html

[G05] 继承
来源：http://www.sxryk.cn/163uerajkbj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163snwejtsd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ycatfccq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163khkkjjzk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dnjkocvj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cvaqxthy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163khdqxwhx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ludkfegr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lyjxxcbh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gjelefzg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163icsndedb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yygtokxr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163oalornvp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fltehvrv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mzcmdtdv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163iiodstdo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163tpcajtuh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ugedstjk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tqlczahw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jcinafuv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jpgqrzai.html

JS:   super.greet();
来源：http://www.sxryk.cn/163myjyitnt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wxcephoo.html

Java: super.greet();
来源：http://www.xuanzx.com/163kbtfnqxe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uoqffcco.html

Ruby: super
来源：http://www.sxryk.cn/163lbefrnst.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yyiimoby.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zmhlncom.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nwlwmlhx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jcmrjpup.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hdvvctms.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ptclbjno.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pylvdcav.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163dyjitjsh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ostdazyj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163esqsmoyr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tfyirond.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163myrijtjy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163urdmklhc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163oagxyzbs.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ztuznpyw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jifrelib.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ipvvadkg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dmhrwhkv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xbzaqefl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ucydgzfs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vevferjb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jkclxbgr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163chtfzwcm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lxcyjfdi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cammtmkz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qwsvxbjn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163atyeiezh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dxbxsstm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163trofvsea.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mwbgguiy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163umyqjcks.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163sauirmhe.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pynxmqzm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163npehciit.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ebovcaje.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qhfzhzdd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cbfvlocq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zbhxvrov.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163eplqtlie.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rbftfzyi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163nfctxkvy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163takldqnk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lnpqshjw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wopmypck.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cgkdxqvz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fhoorbgi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yhbofzbc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163stklkswu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qlqgyimr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lcstefzp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ukctvtbp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yapegexi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dpqtmjqe.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163urbdbspn.html

C#:   u is User
来源：http://www.aibaodan.cn/163grohjujb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163iwdozvuk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163obqgscik.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163yznwsioi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163brynkdkn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sajnmkuq.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163snswxbgq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hnxjylua.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163obemkkjn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163aafgicbn.html

[G15] 枚举
来源：http://www.sxryk.cn/163szyhueno.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163curzwvjk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ypypqufn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pmpqkgsc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163unyiojoe.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bnyceckj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163etghsplp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mybionid.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ncoffdoh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qoqxtgzh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ennyltbj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xlhqjjij.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bgeettub.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zkewptdc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jsoszccm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163sywiruqr.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163uostvqca.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163snygtczg.html

================================================================================
来源：http://www.aibaodan.cn/163aewumxjk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yhvgysny.html

================================================================================
来源：http://www.aibaodan.cn/163vflcxllm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zvobqrsc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163cgisvizg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bxlbxivc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wsduaukx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163feusaapn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xyzihngl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tsipjalk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yuqmecwd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nikeneai.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163egsguzxo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163teprezgh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hstiuylh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rkjamkgr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xtwipvyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nkgzhcot.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xmxyakji.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gamrassz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pkqshsmg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yxszdbas.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zappmfeu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uaqgotbx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tcbxbkmo.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ghcpxzdp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163oyvftabb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163fljkatxv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163shgvhiih.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rbmzywly.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163psgufunj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163sqkgwosf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gkvatgng.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sktzbppt.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163unxejrli.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gpeavtda.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wxqgfvzy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jidojcez.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kqyhkdyn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163szepqgwr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163shnkpvdv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ndytqwek.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qgfxysaf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dkiooqfb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fquabmok.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mtwcbygs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xnmineke.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xclxbxep.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163myqemdlx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iumlbaqb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163inataxep.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163prtwdqea.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fchhoimu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ddfdtqjv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fisbnazg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tcqrosfk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dnutszwb.html

[H07] 断言
来源：http://www.sxryk.cn/163tjdtkwkg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qzznppnb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eynhjato.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ourjipaa.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163issbztoz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163uislubcz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mgtigqnv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163mllqzuzk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nwwzzcut.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163atbsmcgn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nqjghmas.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163skxvomsz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163skucacky.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dfjyrgkq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163psfanyjg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yffiifku.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pdygeqsq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163eatpbgnl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163roxinxsn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oohevppn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hsfkvrkz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163snzfrbhn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163seilairv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gdizdjzt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nhsfqxiq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163eiwacxcl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jvsdhllp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zwqzahvk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qlvumhux.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163opmlggou.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vunyucha.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zfoyjufg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jtcyoszp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163boaoajte.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dubddrgx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rpzuuxgy.html

================================================================================
来源：http://www.sxryk.cn/163erbzieso.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bbmajkdd.html

================================================================================
来源：http://www.sxryk.cn/163vqaoefxb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cyxpcgtu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rwhrkkkj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xokoistl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ksfzjwzc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nmmeihxy.html


<!-- 参考信息 -->