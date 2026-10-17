外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nqjixtet.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163unjxygta.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gvqiflrj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pybedzqn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jzhjjnfu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xdhrxagk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pvzmbuax.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rzykopum.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yoyqhnac.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qdcfletw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163psvjvxoh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lklorzpe.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xiimazhj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163utgragda.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jlasyrkr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dwkkkhnn.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ytkdegwg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163izhaptfr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yfybzdhd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163yaszfaef.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vbzcdqte.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gebjmkxd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hhehdbdn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qohrnctf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tsynhpnq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163inmogvlq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163yqokymet.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xysejpbg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kttvuhdi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xudkehwj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163yqzadepd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163omfdwvqa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163oszkcimu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ieywimhe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qanpjfhl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163twlltbde.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lohruljy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nhrwfgss.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vrdynzxu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cnrvgatj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zceaffzu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ttmukttl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163leyfmfoy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163bbzgsdbd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qcldmbjg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qbpxgzdi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rskipcsj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oiluiqpj.html

================================================================================
来源：http://www.sxryk.cn/163xoqbveka.html

G. 面向对象
来源：http://www.aibaodan.cn/163kaknenia.html

================================================================================
来源：http://www.sxryk.cn/163wyaxpdcb.html

[G01] 定义类
来源：http://www.sxryk.cn/163jfyqlhgg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tayqquvc.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ligxqhnk.html

JS:   class User {}
来源：http://www.xuanzx.com/163hcoziotv.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163daleeboh.html

Java: class User {}
来源：http://www.xuanzx.com/163zyrexzdz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pciucayc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kfsbsikr.html

C#:   class User {}
来源：http://www.xuanzx.com/163nxljuzuo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163aafwsaiz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163msafxybi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pswnuyrr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fwgkmgdm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dgllplgv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jvpkwour.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wbnpoywn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wdojcjew.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xxcyifzc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163emyhtklo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lwgsyvkt.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zwspxakz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kdjczbfn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163cwaatrgq.html

Java: private String name;
来源：http://www.sxryk.cn/163wcbdbwna.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163eadllail.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bcrswuhs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wgnsyifz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kyalcrxy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163urdhscow.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nunpgyea.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lkonluiw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mvfsrgjx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163oaqhybvn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wbbjszqn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163plgidiko.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163imbjcmts.html

[G05] 继承
来源：http://www.aibaodan.cn/163jymllkpg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dngeoytm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vhqpacjd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qobvadnu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163agddbdyf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rqqtruzn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mihltiwk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163pgargkzm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rwguhjny.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sflhiqyi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qghdxpjp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gtscesno.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jxlflasr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163skwkocix.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163akluzlpr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lzxjclbj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wivtaflp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tmgqcmez.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zzqmieau.html

Py:   super().greet()
来源：http://www.sxryk.cn/163msnmptoe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163sesyhcww.html

JS:   super.greet();
来源：http://www.xuanzx.com/163icmnnhjk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xlczvjkc.html

Java: super.greet();
来源：http://www.sxryk.cn/163xqnfiecw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jsmykdeb.html

Ruby: super
来源：http://www.xuanzx.com/163wrerqauu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fuyoxvyi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qsddewbv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kntwxkwo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163htszlwse.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rrppjmif.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sopgtlgx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rkwfjdha.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163juizadzx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kcyksxol.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163yafhxpnl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xjbbqgff.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163dhljqjrv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xtsgsnfb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gehafnlp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mmifttqy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163aoyozpoh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xohyllzt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163eofalluz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mgrijihm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mmimbveo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mybqafoa.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163olhjzvcu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ujacormb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xddyetdp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nomphdpq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163scehbjix.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bbcwpyic.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lmjjqolq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163aszzeqqq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xdgfvpwn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163prccxocd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163bnwejamh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fsiaqijs.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163loawqhol.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zjgzdynw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ylmhabfp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163trternta.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163nxmvolvu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wjmitmnu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tnzlrova.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163smtpbitu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bdgqcdzy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ddqctxtw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163iehgcmfo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ngjkmgni.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tnsulhip.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sydzmeye.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ffvkncho.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xkkpqjad.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gioqcwbw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lzwxvega.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ynttdupi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163sjxvnxsp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qnnnmdel.html

C#:   u is User
来源：http://www.sxryk.cn/163fyfvdrfq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sssdvvbj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kftviail.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163meelfdlc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mkckhhcy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163khbldymk.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163enldbxun.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nrifuffh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zbawhqfe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163oddjsygk.html

[G15] 枚举
来源：http://www.xuanzx.com/163ryeobgkn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bmqgfnwo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163dzustkuc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163yvsplesi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pmzfwzwx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pxnmyufi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qbcaqxgp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ffpedaro.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zbmjjxax.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163iqpfyykz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lwknbrqo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163daqmentg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uylmqpia.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bkkdsvgs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163epiazgna.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rmpafyvc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pjacyrzj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163oozzpiuh.html

================================================================================
来源：http://www.sxryk.cn/163gvahohim.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mguenqtq.html

================================================================================
来源：http://www.sxryk.cn/163lxngdtkr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163vglwpeqc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tmpddbxx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163acuygdha.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163insqrmcq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163yeabgaeq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163iugjsken.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ogcududa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qtqyxnvf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fpoqbrdj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cmpkjlgi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gmvziyvx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lrunurqv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fdpdxgjm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qswgnbmt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kyroznwk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ohaqatit.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vsaemqdu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163musfaxkt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163szoeszdx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dvnmcdfq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163zqtjbvno.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mkvhismc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yxzfuxtu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ddcbqlgf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bzrtlxzb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vlkblhmr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ypqzaurf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ajfiqkfn.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163coninewv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xjqaisgy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ehuxfobl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wkforqfq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163guhtkygh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dlpwoauc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dvmnljeh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163snqjpxpt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ruiruvul.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163yrcwlswm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ndgueann.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163arlkqxwn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gylbkjnj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mssahsfp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yqlcgytx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nmlsxqjx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bwgdkrmk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163yvlsnjjf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jbgcbfdm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tobnmnmf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zwmovmak.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163myaigyoi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qbtbfkvc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hlvdvdim.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tfqlivlr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ivgtcnrl.html

[H07] 断言
来源：http://www.sxryk.cn/163enovxwsc.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tjvicgsc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nnwpyeij.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tjngucdq.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gnwgyroh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vsapqkxf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tawwflaw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jslpwnhn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rtoxifhc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kyimmvkd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163dpacwqnj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yndntopg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hzwjhaji.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ejinmmls.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ayuujfxu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tyilqccy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kjriibhl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lcyhhxkm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163uwxzanhy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rahfdzkm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163tmrfcfwk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ogpsijbr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pawqjjvl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163awlpssar.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vxdivakh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gzwrlvja.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zjptdond.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163shofnzee.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ozegsfvd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hnkwzsoh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xmhwdzpw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163galbwhla.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mshwpudu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163orkwwbmb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mhwvxqbn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yhyiyiyx.html

================================================================================
来源：http://www.xuanzx.com/163dodzzrzj.html

I. 正则表达式
来源：http://www.xuanzx.com/163ddwwxxmx.html

================================================================================
来源：http://www.xuanzx.com/163fkdcuhty.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kobtuatz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163apvlozvq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pwlxbwgl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zluisbmw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zgdndmuv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tquszkfw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mgtxokld.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163dligspmd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vojsidyz.html


<!-- 参考信息 -->