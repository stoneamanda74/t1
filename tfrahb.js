外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ffglalie.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163stvdozct.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wwhjvmyu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sowyvtfn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jefgvmom.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vvbfixnn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lcudaybc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qsezjnpa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163seuokivd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oxyzjddd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bojzzzei.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cdapbfzn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yrmqopcg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jonndjnb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hspqeswz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hrrredky.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163oofcuesz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tfdkomag.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163itelptly.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jtcbavty.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zupugyhn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wtiwpuxb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qqlkvvgz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uvnpehtj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wufyqahm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163igvphjlc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cvjejuqp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ojlqstoc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yglnntnm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163psyeynxm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zncglscg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163aavaftgy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163aynwmotu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jjgqisbl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lqclrelo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yrqtgxmd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dvcrwixq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163glyzrygu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163npvgiqno.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163accksbdp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oqqaotku.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163marxeyys.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rfjlokhg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jwzhmkro.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uspglngs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163opqtherr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uvtsjaca.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gdvkmmqk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163aiugpjum.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rbfdpoki.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163idfksxqp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cbicvehm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ylckwxnb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163kesrnrpm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163eyqovqco.html

TS:   // 同上
来源：http://www.sxryk.cn/163dioxazpp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xibdibfa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mqzydhfc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zwikwsnk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gvxkqlko.html

================================================================================
来源：http://www.sxryk.cn/163ksmlymrb.html

G. 面向对象
来源：http://www.sxryk.cn/163tfrtngxe.html

================================================================================
来源：http://www.aibaodan.cn/163ljcsmmed.html

[G01] 定义类
来源：http://www.xuanzx.com/163tlynfsrb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rtxsrqbg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ugkmblni.html

JS:   class User {}
来源：http://www.xuanzx.com/163yvywudxs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kbaubrao.html

Java: class User {}
来源：http://www.xuanzx.com/163szihdatf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bbfnwdud.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lwocmiqo.html

C#:   class User {}
来源：http://www.sxryk.cn/163hthmokce.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vknptfzf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ervunxra.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yrymflmb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163blzmpcrg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163guyfdztq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ltpslduq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cqkzslyq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tkucdiqp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163oehowemp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jfxshrzc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wsujtubk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qlbdrivy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fdvmiumz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tprbtqyt.html

Java: private String name;
来源：http://www.sxryk.cn/163ferdvido.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163avwbimwo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hfdsuwqj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zwlnnwbs.html

[G04] 定义方法
来源：http://www.sxryk.cn/163gzvmgrkp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163phmhxopv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ikjtqibb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163alccruxz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tusgklgd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zqqtwfiv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kafrjwmn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163oslgosiw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jwebsnuq.html

[G05] 继承
来源：http://www.aibaodan.cn/163tqjdmttb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163czfqeypr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ubwgstlc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hjjchmlv.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cfllqffe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fnogynhe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163owbkeacn.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163isgewklh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gyodrvsk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163gfrxbpne.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163dlxoawhq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oyhjznwx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163onwylcxx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kyevcwmr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163noeonzka.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tsyoseor.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kmmmfiqy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dpgeiine.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hrcskhfh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kvmcksqw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pzroujsq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hdjlbhpy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163loqjbjes.html

Java: super.greet();
来源：http://www.sxryk.cn/163hucacoyf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eoiqaotb.html

Ruby: super
来源：http://www.sxryk.cn/163kclspzpe.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gybkqtmq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ttulhfpz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nzoveyku.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163eluqepzo.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gvsngnoq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hjjxscdp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163eiqjuqlm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jokrsnqo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gunmvkgc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zefllkot.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qymkynwt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hktjswba.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wjqjamox.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qkjiuutm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ewweerfn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hjktpsqi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kncdynwc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ihofpelo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163foezrquh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rnncmipc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tlbxxgpu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jndybojz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qijzgsgh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vsujkqib.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vushllrl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hsiwxcwm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dienctkz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ufewlryw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163riwiycjj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mlzbirsw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zyfakywh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ofoielfd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ivufcfoc.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163akefnxcc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bpfgpmde.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nhpbjxyj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wtpqsjct.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qqzzbycu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163sfcykigg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qwzxaykd.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163enbiraye.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tniirpxx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163oeuqmdnl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xplxpxem.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wwffuria.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ydemwhyn.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ahciqbsq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163sqhgpgua.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163brtpqxby.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163maketwqh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hpkjkbsl.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ksoskhdm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wpaamqcl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gimkyetv.html

C#:   u is User
来源：http://www.sxryk.cn/163knakubye.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qktpmxyz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163thvrqhuu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yhnsezzr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xrnaweyf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163itpltjye.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ptoexaja.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163umacwfjf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xvndzvgh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163quorempo.html

[G15] 枚举
来源：http://www.sxryk.cn/163mterqocz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hbdtmyzd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163yxuhllah.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qeltyaho.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163atngfjtk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163haubgmfb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bfpbkpem.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rszqaius.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wxtnrjbz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sjjguicd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ikhjjvmv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kvhbxnka.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zkwdiaxq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ymmkfsht.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fzzmysza.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dgbgqpfl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163drfqzmvt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mrcdkqaa.html

================================================================================
来源：http://www.xuanzx.com/163aaviiwfs.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zdyhfhoc.html

================================================================================
来源：http://www.sxryk.cn/163yktzjgjk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xypaquya.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163orzffhbe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fcdhrmcx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yjmraqok.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163satxprtn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aadzxais.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163logfshnf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cvweubnz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163heviuujp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gjmddjkd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hbrpjgcb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uabspozx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kqcejdmu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zstdxzip.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vjotnpyu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vnwasfpw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hkixffym.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sqtjxofi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fqjulifb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cgnvttqo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cqdksuwk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ljshyyvj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xyrgihdz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wvmjtsgy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sjqdpedw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lrpywwvh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nlagpwjo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uuvtafnh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cdrarwqf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ymsnvfro.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bkyctpfo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vgxmpocj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163khwotxni.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uzvyfzxx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163utxjeybq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jvoerdda.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nqxencni.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163efydiyoo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fjnhmqyt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hdmgaepc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163psonzltg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dwavhzlq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163kzwehfin.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163znipxnwl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vpynensi.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163iblihuys.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lvseaihc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pzthfbrn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cdsdmlts.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sqblssrf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vqapcvld.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rrawvxpf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oejlsmmd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ssskcmar.html

[H07] 断言
来源：http://www.xuanzx.com/163cpawpdvf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lqgjdbrd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163eztwrslh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lvavvjyr.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ppekcqtl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163movvxvoz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mindlttp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jmngfqxi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163urnrzrhv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zeceupgv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xpbtlqla.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ichczdqj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vlaeepmi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xgxzwmyj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zlpxgkwr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vzhmmney.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163sqmdadjg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163buqltgtt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163psgmgtzj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163acboemxs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wzigbrkq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ukmhpfsj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163yejllnzy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163poqmztjm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163uhmqkupl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hbfeuqrf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hxwlkpzc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qovmhydw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nnwfiequ.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163avlkggws.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oujulalx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ysvcsdoc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zpmuazef.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163onafhtlb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ffwbyqzv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lasdccvd.html


<!-- 参考信息 -->