外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tkdtckvz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gpjtuxxh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qlfwilev.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cejoieyz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lrflgntk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ehwfurkf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uqnmfsuo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xvpjgflo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yptvejme.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rtlhnpnz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163smsqjwbl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xpzlxths.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163settxwkj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hosynwvd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163awfdwsbb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qusqmuwv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zhhbwcrx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rvnqmhaa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yqcwczcf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vokqkvty.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wtabaemw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163sivrewca.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nvxvaiqx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aziacfyg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tdjoowog.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kqsqpoka.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nijnglem.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ucqargvj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kcycjycc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163olrqhglg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hqutwxtd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ikyfwlok.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qfehvftn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uhqxeoig.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fkqguxht.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163imxjlehm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ouhuesuw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xyxjogzw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ralbycun.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ruargxth.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hsnhtmuw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sdhytkyj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163obbijvph.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163laogrnnv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ppofnzsz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tjngfnpt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163muusmqfg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zwomxxfj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bowofmfi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ojejzvkg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qiyqbmku.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vycpmysf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163jdpvqyea.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aezlgsma.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qloejdvg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ysdxrdcc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163sbuznqnv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163eltcftyr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ueqelaih.html

TS:   // 同上
来源：http://www.xuanzx.com/163wzkvjmyj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ckcnzuro.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163diugefsf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163sdescxrg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dwhjpjco.html

================================================================================
来源：http://www.xuanzx.com/163aczrwgkz.html

G. 面向对象
来源：http://www.xuanzx.com/163uipqangp.html

================================================================================
来源：http://www.aibaodan.cn/163xhgfeeai.html

[G01] 定义类
来源：http://www.sxryk.cn/163hazuruki.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cxdvfwxc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hwuzzvko.html

JS:   class User {}
来源：http://www.aibaodan.cn/163oeeatslp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jrbdxgyh.html

Java: class User {}
来源：http://www.aibaodan.cn/163cenreroe.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jcuusqgu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xlyybabq.html

C#:   class User {}
来源：http://www.xuanzx.com/163ryeehxkt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bkckphky.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rdwdvggq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kpwvounq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zqzlspmy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163annojaay.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163isbthqjr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ubgzzvbd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hgghleqb.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rpbackrs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163grmlvwqw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ocqwxiyn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ydrcvfvr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pwyshbqf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163pkdxgmil.html

Java: private String name;
来源：http://www.sxryk.cn/163pszsbifq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cwxhvoxl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ayitrgdz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rfaetrnn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163grkytdbz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fuvvebbl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dexzspqu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kbnbacdg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163obsldoht.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163immzdakf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163agkaucyp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ytnhtdlp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163htcyosym.html

[G05] 继承
来源：http://www.xuanzx.com/163giyjdxif.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163krtxawzl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163atpfubim.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163htpywstd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uyxvpnls.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ievcqlla.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163soukjhoq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ikoqcjzo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wjjlbarw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fkosqawu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163aahivbbw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vqocreay.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cfhexgxk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dbkdgwag.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kmqdkrbu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dbnvykxz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wpawirre.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163uxueuxdz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ylcwzauu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163csorjsbd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wofqfzum.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hgiiijms.html

TS:   super.greet();
来源：http://www.xuanzx.com/163szqnjtnm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163muagopla.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lyokeexi.html

Ruby: super
来源：http://www.aibaodan.cn/163hvpaqsqw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ztovkxrn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cndfehea.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nfdvhfzu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qklrugkd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rxtqccfi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163eoraokjx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lvacgvao.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ueigrknp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bnzzdbbi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163otbkbwxr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163deflsfwb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ntvogjls.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jztzkhmf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163djsenjtc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ioorgqwc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163warlsgrm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163nazjyibu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lqilqmkd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vglytcxh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fztdzjkl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zzjlfjrx.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yvtfsmeb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163klplpygq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tkskjhsx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kziaatal.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hdlabpgl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dlsgykdt.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wzisitvk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ilmypjnm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mmmtszmk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uhfvwlmx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163laphqxyf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qfsqaghz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dxvmsurl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163axqcffzv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ztglmlys.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163orzjqvyi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ajvcevrq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xtbyprsj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ocnzobpm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qxctdjgg.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tcsknckv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sxqbinzj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163saglnaep.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ipzmrhbx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yhkulsdm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wriunuqn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163abuzjgos.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163uazcjplz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nzamyueh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vsmvumdr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163btlzikcp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lqznnpeq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zkszggfi.html

C#:   u is User
来源：http://www.sxryk.cn/163kpzqehct.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ijyunvkz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xtbqgvsc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dgchcmco.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163whfcigbu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qcorusdk.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kozdmurg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ahsxdaxr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dapepwyz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pjyvttpb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fhdrzqeg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fehfumta.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gugkmrnq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rxsvajbq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tsvsgvjw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163iknswsxg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ccribtxo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cztcydmw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wsfopwnw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bbsgemjm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sfwvdcim.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163eewpiezc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sfzsktnq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163swhabyxs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163eqawojkx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gpqmrmyt.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dakavhfc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bpkmkach.html

================================================================================
来源：http://www.aibaodan.cn/163qulzknbx.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gqxlbejx.html

================================================================================
来源：http://www.sxryk.cn/163nutwjpzb.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wbopsigj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163lkpaxqnq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bmvmswyj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cdwbtnxf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rkeirnju.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mcqeidoc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ewhwrbla.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xonzjsfm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163myslwtny.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vjhvwowm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163lppkijbu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zknovlgl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hioyufgb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eovbngtm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ngvueimm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ydgjxdkp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163iruiummw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nphmxryt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zxqwgndj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jloogdtu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gshjdjko.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mfasxepl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uqngimzb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svcbcdzw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zbfqvtfg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xuqwgmcn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sylkfypb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163itpcqtaa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hhzzungq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rtypatdi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tbjvayyv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tbxoiyap.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iweolyen.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uceslwwd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jvhnqznx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iiqrazmf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qtqrxbzx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ahihxisy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pjzvllwn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gomvxztm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hlguuceb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cmheqvte.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hsijyivz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jieqqbrc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qqqeamoc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pddkupzn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wxiegska.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yldpxdak.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xovndrfg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wqcxyrqy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wgnftpmm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ybgupsfj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qozkwyha.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vgfzwxbt.html

[H07] 断言
来源：http://www.sxryk.cn/163osxxycmo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lgupxbhq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163egdwgqjh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iyjofjpw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163opycarxn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gobztcjj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jbswhiwb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163msdzuoqx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163uoykjlwu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xxvzgtxy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163venclkrt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wxszvzvs.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lrfmahjw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fzqoqdtn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cbbetith.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mtzvnxdd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163prfgqzlz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jdohekbr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bstckjht.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jnldoeju.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lcmmvezu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qimlyudp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163liglfnlb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yeflyqol.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ptgwqhkg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mgrnfbky.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ggmkrinx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wlgqenmv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ncncqkkt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163orxpripi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jybcwdnv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gagnmdjz.html


<!-- 参考信息 -->