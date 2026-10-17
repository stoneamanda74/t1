外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xyntijty.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rrzvthit.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163prkvvaoy.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163lqguaazx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cxodsora.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ksmmlpgq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vnpdjqfc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163eetaimzv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qtpmqzlw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vcjanibq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eypypxow.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163btuswigb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xrbpwxvn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zbstidmd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jbnxhhqf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fnzgrqhh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dyosevqd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163txaqnzzi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gdivglrw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nifvxxac.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cmdxxaxf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163msoecqit.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qeuaqjqk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gvgpkydq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163pubkacvc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rzichyro.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dtkwqckd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jqpdubtc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163eoqoigxz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qhdfoskn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fkqpgynl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wnrgnqxk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ujyuljbh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vqlnmhnj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ooykwona.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bzxtvqka.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hrgtxyho.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wqazfeoo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dogvawvs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ahreaxcp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dmyaugoh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ymoznzkb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uangoetm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nissvsza.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mylmlrkg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sczhrgwq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qupokrtm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zxeqpceh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lzeeimzr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163syxxwpmz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rkchadkx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mfjjrnvq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gbxrvlds.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ukszicub.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rbegnzas.html

TS:   // 同上
来源：http://www.sxryk.cn/163cyvvqmra.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nhmmmfow.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ixcigwgz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rdjycfry.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wyqwuchc.html

================================================================================
来源：http://www.xuanzx.com/163mhzjibua.html

G. 面向对象
来源：http://www.xuanzx.com/163zujtqeus.html

================================================================================
来源：http://www.aibaodan.cn/163oyjlpbct.html

[G01] 定义类
来源：http://www.aibaodan.cn/163zlgucgnz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163keveqcvb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fvccvink.html

JS:   class User {}
来源：http://www.sxryk.cn/163gyacpjuq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vhhfkjjy.html

Java: class User {}
来源：http://www.xuanzx.com/163tdmpgqub.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163redcsizb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lwytjavh.html

C#:   class User {}
来源：http://www.sxryk.cn/163xuihvkvj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163sytctufy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fvfipmbq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163npwezbpv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vqoxkdlk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lwqvibxi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163nesddfcb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163swyemujr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163sxxtahgb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yfhoujzt.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ptkyoati.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163feqyidue.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zjuasasy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163txefuqon.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yiuwgixb.html

Java: private String name;
来源：http://www.xuanzx.com/163jppkazpw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xopsswtl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cksrdfok.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ixhnhrux.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jugoosjf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163weldbajg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wkxiifuz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ojpozico.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jvjhhqgf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bnpkgxaj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163dikgnqhf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163iyavlspj.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163wmxyolvs.html

[G05] 继承
来源：http://www.xuanzx.com/163hyrcjfeg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nyjxomau.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163johrnybt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xkzzvzez.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zhreyyqy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fbudroul.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dpnfwsgu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163eoixkbcm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bqpxjoqj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163jzmsmwph.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163lhvesfpe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wgjwzckn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bafdubut.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163syevmfet.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nhlymdex.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ldlgznoi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ucrwljcw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163unxvgzus.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pmnhulzg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tpylyxnu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ytlcrzfm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hpgmsiff.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tnlrblze.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kpkccdww.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163pahyftne.html

Ruby: super
来源：http://www.xuanzx.com/163guuqkqtq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vrzklhqr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ddjsdjvc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163iyelhiwq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163boymnwlr.html

JS:   static f() {}
来源：http://www.sxryk.cn/163amdbiyss.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xvbtxhgj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kiawvkmm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163dwarodhl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tlpyzybd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163yyhkisus.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163edslpsbc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hgplkonh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yyjrumko.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yjqpaeqa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rzuwriqp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163medlxizi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wzzqgbmr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hifhhbkh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163eslhstyl.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qzuotlur.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jadkbuxu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ehtdrmhk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gpmmwmom.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ojlbhbmo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163oktlfecg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qsqvprmb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dosivipc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163puwbrqvn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xphvzdju.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oleemobu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163psnpkzst.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zuoyctuj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ilfrjder.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163umedpvvb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kyiongpk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kqjwppgk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163anuazgjx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wsedqbyg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rsbioldh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163clmejnqp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qqcwecgo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vtfpmaah.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ehlnovwm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163opbkuqlp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vbpzgdmc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163svhvqjdg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163foeldtmb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fjffiqaj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163snyarcpb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uacdirgu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mbgelyfa.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wuxmzeen.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eayixols.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zvchwglg.html

C#:   u is User
来源：http://www.sxryk.cn/163ppsgoxxi.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163timevvrq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ulhhocyk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mwdfxivf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163unwekqcv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ggaiiwky.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qkkxsffh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163usmafavd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kaqkcado.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163oxutbnkb.html

[G15] 枚举
来源：http://www.sxryk.cn/163nrrztdzg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kxwlopjb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mbtbinxj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qeochcjz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ipocrkxl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163chjbmplr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pcowjvgo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163quzmwgxf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163btgobrwh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qmijnsxj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wgkexkno.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ojtbugfj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fohwdxmo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wfkthoel.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hfvusbtm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163omvsiugz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jeyamzrc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163etowmqlk.html

================================================================================
来源：http://www.aibaodan.cn/163bfxrttfn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163moqmkgxl.html

================================================================================
来源：http://www.xuanzx.com/163xlsrzlrt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163znmuxsqa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hpkfifjo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163krvdewcf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wendkssy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cnoyrygz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nhfovzfv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vlqgfylj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xaufvlhk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pmahwide.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163toffgasa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163upkdsmoc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tpqcowae.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iiayzyir.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ofstoiuv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xllduhud.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yxinjrqh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fhkitazb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163tiuefyrx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tjsfvhae.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lljrklml.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xyxjwgxf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xnfkvdfx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mrcyhawl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163kairhopp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pvftpvbx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163txqtuqrl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qfbuvhoy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nfiahxpl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163gnbwtyer.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tvebdxod.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xckuwfdn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kkfbazuu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zbrnprhl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vvwncgwz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tieqlimk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163givugwxj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163puarjvjx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rhwoatkr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bizxcbif.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163opnyphaj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jmypwqxp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163itfqpdoq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jypncpsv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163krxsvdva.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nvigzynx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163prtzjqpu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jsupkcrz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ksfkkuer.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fxdbofsx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163icywdums.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jciwqyoj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163udycfvyr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163psultpei.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163emfwrusy.html

[H07] 断言
来源：http://www.aibaodan.cn/163xrusatft.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163qxnmefmj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kqotzzei.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tgjywmob.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xxrdwajd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163huzuycud.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qxzwyxod.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163eltxmtzc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rtesjwup.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qfsmbvsx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xaujumfa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163udmfxavg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ugnpfnsj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163npxumlws.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qrbymios.html

Go:   err.Error()
来源：http://www.xuanzx.com/163islsuyqg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wxgplhpk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163azypidjk.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fwtncsnl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lispqctl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nyzwmewy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cuoziiay.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163rgrbioal.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lukzjwty.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163csetvwka.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jvbdjbcc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vvenhodi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gblaytgw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163uvdchqlc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rqyszxqa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tdtvddmk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lythmygf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mmjaneou.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ryxjutpp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ikvjcrjn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ivrobqza.html


<!-- 参考信息 -->