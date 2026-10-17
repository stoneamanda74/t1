外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bdqskhag.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tykbigjm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163owpypfbp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fvqzogxu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163iayhrrgh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163epcvmpnh.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lrewxjec.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lpcrrhzw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nzssyunl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uzubaype.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gdovtwew.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zydpwtgg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163mgrshsou.html

[F06] 删除文件
来源：http://www.sxryk.cn/163knwdkngw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163srvahprf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vrdtxdga.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163upkagsoa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cevyklmf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qcpqdmnm.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lqhfupiy.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163drvmldhx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163swuwpcjx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163aqlwuaho.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bdhzvrao.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vxxebcfm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ikxvcjfu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eihwmblf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163txyzwctg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163twlyhxoy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163eptbbvem.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163akgixcwx.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163bvkubzrt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xwoyhyja.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163stzpastm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uiatbzlq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ldlqcbfp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hjxhtwly.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163iqngwzgt.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dhbtozlm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ycrroxoo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163niwsumac.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vufilbjb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163erxuooyh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163edbwuocc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ehcneixg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mphdwjih.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hjopzvbl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yxmsuqfu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dcgvrjdb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pjtywuwe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163usnekybq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163itxnpiyn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qslyzvvh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mvsswkwt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ajkijnpa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kmmrzurm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mfmypijy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163buffajvw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ivwhssnv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ecucvxja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uvkbpvcr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uqqambmb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eatfpxlx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163bxrreema.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jjrbbvug.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pljvebrv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163wxbhyzzn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qziubanh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gkcrjtwe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uwmpzoju.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jluitzos.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tkaotpjd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xcantvyb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kvqtujgh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fcwhhiyc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ndrnryzf.html

================================================================================
来源：http://www.aibaodan.cn/163pbszvnym.html

G. 面向对象
来源：http://www.sxryk.cn/163xrcbyeto.html

================================================================================
来源：http://www.xuanzx.com/163iwhcqfap.html

[G01] 定义类
来源：http://www.sxryk.cn/163lmkoohfe.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wvkormso.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xtidchfk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pmryirqy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hftjykpd.html

Java: class User {}
来源：http://www.aibaodan.cn/163frcaoswt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163uipqhxkh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vagzpaki.html

C#:   class User {}
来源：http://www.aibaodan.cn/163uchwamoo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kajiutnz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163asxlmfqj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jgcusxzn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fksalibd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163iasuomtv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sfsahrof.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xzsmzzwo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nhjlfapb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lqnaumkd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bjhtfrik.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rxxqushf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kvmbqndu.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gkaeigsx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zeulajpn.html

Java: private String name;
来源：http://www.sxryk.cn/163aqykrnab.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bwovxzaj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163geobgstk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lwktrtjj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163sdahsmqo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163myafkpbr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wykigbzk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qradyokt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uoviqmun.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163fmkppwte.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qvxomgoy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163efvjwctt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pwincfkp.html

[G05] 继承
来源：http://www.xuanzx.com/163mtvzdyda.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ihktmnod.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ykbnxuom.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yuvjtrte.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163skfmuhwb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wtnaikyt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hhaiiiee.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qymbdwhp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163slycfdcs.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kklfyxkr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bzwskczo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lqiswdvq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lddzjbcj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uzpcgwok.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nzjmmusx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ktxrhnnz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qlouzfea.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163uybzapxz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pmhqzzui.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yplhcomg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163oaktsjlf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lfmjzjrq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ukyamxms.html

Java: super.greet();
来源：http://www.xuanzx.com/163odxguwzu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qvlrcbqi.html

Ruby: super
来源：http://www.aibaodan.cn/163mevtzeir.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bcygfoib.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wytztizl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wktrnubr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163getcauvh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163iwauciln.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163szohrawk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163itsbxccj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pxxfvywh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163dzbclozo.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pxceaobh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rqefzgkc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vkejcojc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zvarfvtf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163junnsbfp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uhgmrqeu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163iqdvbgdb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163mpcdpdms.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ukkxqjce.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nhktekol.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163msycgufu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163joyxcgve.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163amghnfpu.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dqyvctxt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163lblqebqj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rydyoahn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nrnubzmb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ddmznjjh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vvhqlpmy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ncpljkbu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ksgktvqz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gdeznjbl.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kqteslhm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zvavpspw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lwydurcr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163otalupks.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xnovhtiy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ndeoplqu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gichapjv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163btqrkcgz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qvtmxtqk.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pceposhb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hezllwci.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163thoisddo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yzruswab.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ahyqzvcj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iaspwtmb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vufrmijx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cxojlgqx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tiudkbzd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nznpepjk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bximwbby.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wlmytejh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ebqfsbls.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wnbwsrsy.html

C#:   u is User
来源：http://www.xuanzx.com/163zbonofby.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yolpoqyd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xnmcpzcb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qpjpfjyb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xlzfwbmb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163uyowppgl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163iuofhdxt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163sqebsdyr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pbduooaw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mnvrncvd.html

[G15] 枚举
来源：http://www.xuanzx.com/163kfgitttq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wrsadvor.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ervkdfzm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mitpllau.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sdtyepcd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163wgpoujgm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163suzwbdhk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zghadmuq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163skezqoez.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lgygvcfc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tllmgnug.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163shjgazgb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yknlbnrp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wahhwcqw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ehybusoe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bvkyhwog.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163intddutm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nnwvmumk.html

================================================================================
来源：http://www.aibaodan.cn/163wtbvfajj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cyxzfwsu.html

================================================================================
来源：http://www.xuanzx.com/163cmspysnt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zkqsujuf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163grsanlad.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xtsdwyur.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dxwdbkhq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163oqspzkhm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163cbgfifce.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ballrqvh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gcbfcuht.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tuxyfdzh.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163eytmggcx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163eoyiaray.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mezxxpwy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xlmafgeu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163guimoucl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rahzuivt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ckkhuwbr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ezlgtfmu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nvuibdgv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fwxhmtyl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xsfdtsvm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qxnrhlab.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zscqbrwu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cqojaghl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mgrlgxez.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gbdkrdyc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dlxcreqx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wkpvriqa.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rmpinwau.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xvxkrwgs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163kpmterpw.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zpsouqte.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nixcatnz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ckeyqmue.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hlmdfyxp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kwcewhhj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163erydyehr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163oejourwn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tgwtteff.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ryufrejg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wdoxndjh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ckktpvaa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fcxeyzux.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nfzjlrmd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vpxubszz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yvdrrbhh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rddwefxc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163izkmaagd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163opporvvl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163khfqewmh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wtqaffdc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ypcpcchz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ibzndqhb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qwhupkhl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zxeibada.html

[H07] 断言
来源：http://www.aibaodan.cn/163zclfkhbk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vqcelbgw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163acucfbnr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ucnykdjs.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sunilzat.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vzubposf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bqgzydnv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qndqfpze.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cgntolnd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gceghusj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lrmvsytj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gehkexri.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163icwtccap.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wiowhgma.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163eomwzvce.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sntigzce.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sbnnaxue.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xudspwqq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yvzurmdb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vwrlnviu.html


<!-- 参考信息 -->