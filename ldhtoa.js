外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hudmumhn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163udsubvbz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163afpqavmi.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dbzvsigk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lahcufhm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zlafjcfu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fzfnzlfe.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ggwugdgf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ejxtobtk.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163azqevogm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ygffjjdr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ftrgipai.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163alxqdiel.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sdygccwy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dqzfhaql.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cbcxpyor.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163yddaxxhh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yvorsnxa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uqatucpm.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ctawsvgy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163urgddzet.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bnksdngn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gfwouyyv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mxxccegg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vdczvjmp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163tweyzbdl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163daecxazb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163aamorqww.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xrcxfwim.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163trzluqeg.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ygdgwnen.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kwiywfiv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163oponiclb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163etfngseb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ppkophoe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vpsxnbdt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zxznhnll.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nayfvmym.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cqgaktjh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zuwdidak.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ejmcbwht.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163yusojupt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163glnglwlt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163heyxebey.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163acdvzsoj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163uqjdxhen.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163fymhvsbo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dmiemkdh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wwefdguo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qmesojon.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nsfwxcuu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ncdoxnap.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gtdvuaix.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163llajdthp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163yflsfdfy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163czkarqft.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163jxukdrnh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bmdwafar.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gixtpxcj.html

TS:   // 同上
来源：http://www.xuanzx.com/163tvjlrdim.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wkdmgeti.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dixcyjku.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hbivgjpl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mkwinjkr.html

================================================================================
来源：http://www.aibaodan.cn/163fhqfcrde.html

G. 面向对象
来源：http://www.xuanzx.com/163fimtccdw.html

================================================================================
来源：http://www.xuanzx.com/163nsxviqdh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gqfcjroo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hsfyadzl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hxqtmuzk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cicrlyjp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xathihkp.html

Java: class User {}
来源：http://www.aibaodan.cn/163qgaurjmy.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163peocqsat.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qwhwrqzn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163imfwzmkk.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tmwjkusl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zpofqrkr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rokwbbgz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163joljwnef.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fiyyqkzi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pvizncvb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qjewuadk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jxfsgfcy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vjzzuceq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lcovagex.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xhdzldtz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163urrcdgyp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jwopxwno.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bzrkwtcr.html

Java: private String name;
来源：http://www.aibaodan.cn/163ohutvgna.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rntdzpim.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zmbayrli.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163thzknvdd.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qqqfpkyd.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163eecyngcb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163rzhwdszc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163drltrruk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zlogizsp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163esubojzv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gzdylzfo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163khqtjttg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fzzinuuh.html

[G05] 继承
来源：http://www.sxryk.cn/163jzkqphfx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uzezbgyv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gisuchte.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yhcvqqof.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163exhjmdiz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163poozizns.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hpusokuu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163oxrfrnxv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vebkbawz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mvzqlbqw.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163harxdcck.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nswhhebe.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mtzyblqj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tqgbolfz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163crhobrfo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gqjtgtjo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163scrskocs.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rrgcqoxs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163savlqsre.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yhvribgz.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mbjhucpp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nhwrffmx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xytlupvw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fljunpjh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dwpxqosn.html

Ruby: super
来源：http://www.sxryk.cn/163bdbdqqfl.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163eqyvxyig.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163aekvmeqy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163knagldyt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163kvxdygfl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163indxtloj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mzglrvan.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xkdcwjbf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kcwgvrjn.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ssqajqji.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ebqhtljl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wzhgyxsh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163czndeqss.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ooreokaz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kexoefcl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dyrxsyvi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nsxseonb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163oaoriyjt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xvuhvawf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mlotmssa.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zjynjwwm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dcaggfzt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163avapxrls.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rgzvwprd.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163elltieqx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fwmhixpd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vycetfsk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lpzrqwfj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vploqlni.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nhinvcjh.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fgosmppm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qkxgnraa.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163miexexfm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163psfliolg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cgukabor.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ptfntybr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163egbytaxo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zbjtbdxk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gtmxnsul.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bxthhffn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yhipocyb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qznryjme.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ewplqimg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jkllwavc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mkmgomcc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ckoluwqk.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hhdipcom.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sqmvxyqz.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163sbasdtgu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jzpvchcq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163eflyjwca.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163xpxjksen.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hqfmrjyp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lzfgcwwv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163icopbyiy.html

C#:   u is User
来源：http://www.aibaodan.cn/163yhlgutzj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163upkbabcv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lozdqaif.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mebmihjr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qvmujirj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ohkmtblx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163glxugfku.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rkyojwzn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163njozymwk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163czizkufm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mdelwteu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tbbwrzrh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163udlwqlsr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rbfsqdvv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ymnbgmnu.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163aschmjdb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qrvwnmqx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163whrozqlb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qjwleeqy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ilfytgqv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163psnrrdyj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vkvqkdej.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rteshpdn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163suruvewu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hivvpxyk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ujuprsiv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nvbisiax.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kzkahsoo.html

================================================================================
来源：http://www.sxryk.cn/163neflwvfr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aepebwnm.html

================================================================================
来源：http://www.xuanzx.com/163icsaacrw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mhvsqviu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yjgeyqut.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cokmbxzk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tscwivbc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163apcrystb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163adpilwsp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rucoybyh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fqybjfsv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bwcrragu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qanaeaok.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vnalkasr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xbzsdiau.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163unnyifpz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aykeschq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zcieuqly.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hblwajms.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nhbmaool.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dgfxnkgn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163awhgqeze.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163elqcmmrr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163thuabyrv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sqmkkpcf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163obcpxvyv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mxvytpew.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vhryktih.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rgtlwgqh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lgxnrabt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163khtwoytz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kikmufio.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163lykvjnlq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ahhcmjzi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163azoadqub.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ujtomsws.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163njbthfan.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mfitaztw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wiybxkvo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kpxhlanh.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vqowocni.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fenptmam.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163obnkspfh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bdgmxwbk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qdsqesno.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bkftbqrx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163oxylcruy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ljukmyqd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uyghdyic.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163oxxvgdjo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163cplznsav.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pbrcqgiz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kjkvysci.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xiuebpij.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163odfivyet.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163epkllwli.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pgoblkfx.html

[H07] 断言
来源：http://www.xuanzx.com/163svntwwbe.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lrpwzpey.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163meiisaqu.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zjqymwrm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pdvgxrle.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cqzyddfw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xwpcebog.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zwmjetrp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tndkcxxt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163doomcinh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vmbjmldm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pgnhymxi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163trascmfh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cxycexlb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cuadkpnd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iblbmcgk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163cuyjmsou.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mqpnkzvy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dclhszpr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cqdjqfzo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bbxzgyxd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163szfmiasi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163oawsqlzn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rylbptoy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cyynmnka.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cumjydol.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ellnkjqr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163clzhrjck.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bxfuhoed.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kemwskwb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rpxhliri.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pzfbrwhs.html


<!-- 参考信息 -->