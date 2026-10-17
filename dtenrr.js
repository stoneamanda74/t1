外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oufdythb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xjfwwekg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ldetuzke.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163shfswlmg.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hvhgxbas.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vqputggq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163avkvytrj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163eyilsexp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fkcpgnrx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lsmfdcxs.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163apusigqv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gfenmtir.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qyylumtt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bvtpbsik.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mdwkmrob.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163heuoqife.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nfhsetfi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jvncklfw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hlaowhhb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163durlzjvc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ujaqymfk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ubzxfdao.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mrkxldba.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rcwuincj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pcgfykco.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rcamytdv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163parzgegh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163sncquvez.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kswzeuvn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pcpnkpol.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kdimjhjz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hfohpnrc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rwiqbmmr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163gpcgsmgt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ovydwsyu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mzgzbpch.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dnemdigh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dqctmala.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tfqphzge.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tvcgzpys.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ycdcbjko.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ijdcrqnh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hgrerwvj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zjsxogwr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pudlxdre.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gjtkxxil.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163awsrkoac.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bhmdlofy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mfnggzas.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cppqrxqw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gzrmqjpg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nsvkbecg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vmqmyrcl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sgjliglb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cogzqwcm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163cmrradmp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lwbzsrjd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fcobqueh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bfhfphan.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mxfxwltz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nsiotnpf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163clomcikh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kgibnsaa.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zourcwsa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mayybhki.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rereaajg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163infdnsot.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lposqpwq.html

================================================================================
来源：http://www.xuanzx.com/163igzsvlpw.html

G. 面向对象
来源：http://www.aibaodan.cn/163nusjnvdg.html

================================================================================
来源：http://www.aibaodan.cn/163xdwxgqqs.html

[G01] 定义类
来源：http://www.sxryk.cn/163duylpfwp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163aebwrzet.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rctfwnsi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tadqsahl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163yuqxnayh.html

Java: class User {}
来源：http://www.aibaodan.cn/163gfnvjplu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uocvuwyx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xpczatza.html

C#:   class User {}
来源：http://www.aibaodan.cn/163wuazqmhe.html

[G02] 构造函数
来源：http://www.xuanzx.com/163diqjuqhk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163oyedgcru.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163njidinrs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mtqszxsm.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jpzdpzgi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qomiwvcj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ojdkqekh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163apanufur.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vpcazfvy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wiubjjzs.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lttlnsyo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qplknenr.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hjeumorp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bezmqvhr.html

Java: private String name;
来源：http://www.sxryk.cn/163jnbfriad.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nuipkywe.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vloienfr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163feuxeugn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dpmhkdtn.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tnoiokts.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kmyfmrai.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wygzxkqp.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163cuunhgkm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ypszyrty.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ffbhhkhw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uupqhgxj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cegomiof.html

[G05] 继承
来源：http://www.xuanzx.com/163sohzzscq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163otiirfuk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mfswwsdf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jmgkcpck.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hbrvojky.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vrmndssq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jwofpswt.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163twbldzvx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jdmpqlrl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ooknpkfw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zuazvclu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vpstixqf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163waloeccd.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pxbxawbr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pimynbmw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lmbwgoaw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hcvdlcmv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163swonbfoi.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163oayegqei.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mkvbxzde.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ubuxyeva.html

JS:   super.greet();
来源：http://www.sxryk.cn/163acxxntwm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kgtsnxur.html

Java: super.greet();
来源：http://www.xuanzx.com/163ywkvbthn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lvvmcteb.html

Ruby: super
来源：http://www.sxryk.cn/163exbjytun.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zxmymcpu.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mfvjznaq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wjiednrl.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ekdymfmv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uuwvzina.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163shwmfven.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qetupxaa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163seretygy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yaghkkiy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uhnfetsk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xgpsjlzt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163entkowuv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lochohsu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ieexxzyx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tmyczdvx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ereohsmu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163cwbubchu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zmrywsrp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163okydnbry.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uukzvmjj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163sheeydou.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qswhtmdz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163erqzycyv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dpbheifa.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163onridgak.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bhoogfgo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fvkfochl.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fdinqukp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yaghlkht.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sbofwcuk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163arebhwza.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163gccmdezs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163yksvnzyk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xibqfqpo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163epyhedhg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uueofjqb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ygqgjsed.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cyadvlxb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ppqdbnwk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qipjwsgy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wmfczanm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ensbgcvq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ejozkzmy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yyokmcnt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163eqpoccdw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163njlphnvj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fngergjk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rgjygxzx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iwvegkwb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nhugpxyn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eeszsuye.html

Java: u instanceof User
来源：http://www.xuanzx.com/163fwerjdfx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pcizavnx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kzimjzbv.html

C#:   u is User
来源：http://www.aibaodan.cn/163gofhxhyo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zfefnacr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163epaemlpo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qtvrkrji.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vpnbyrqw.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pzsgvzlo.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wblnuavs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vpqrnfhf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qutmhets.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jtjblcnn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163udpzxgpa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zwuzktaf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wbfzamwr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cjkptbts.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sphueatm.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ktptctzw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jqmuquuo.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163clillxrg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163swnxrjwu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eqzzzmxs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zuoidnod.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ekbsoxcs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kujzkixw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lyopqqyy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vnwycmkx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yvjwumft.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hmtvoxqn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ocbthfrl.html

================================================================================
来源：http://www.sxryk.cn/163muhwkjoh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mpcarssg.html

================================================================================
来源：http://www.sxryk.cn/163hedknhyh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rnubsire.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ebttcfdy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rpzzngty.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163quymnqnt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163dkwppcsa.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rpeudpiv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zqsvximu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xsnjzwea.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qatowhxf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163iurpdgjw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163arwcdwls.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163knisandf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bzzjfpnq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ixnnvgdc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wslujtfg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rsqlifoj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163boqukqhj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yrqvkpgo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ybizcigz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dogulgde.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163evsetpai.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163npyjpoqm.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mlrlkdgh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dqpwukrr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kzyeffes.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vuydqplb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ofaqjivu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zvzdqiqa.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ueydyghf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163anbuobvd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vlazfjcz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hpwwatfd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vsgfoluv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zlpdqndr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163juspskzr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fmkdfiip.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163inzapdlz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163avkrzbuu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ynwieviw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gnqzurbv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gycurkbg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xtetwpew.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zgpjcvbr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tfughmqm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163otbhchir.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rztrlgul.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mdnmpzga.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rsghavip.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cuhygzce.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uytafblj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163diyhgahc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163arhrmhkc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163aawdoubt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uitqdiwr.html

[H07] 断言
来源：http://www.aibaodan.cn/163ntnpoxic.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ojcrlqxf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mqetilac.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tosgmipo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xtqanbyk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163kxkpkahg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hkzmwalz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163wzswzfyg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ukspmzow.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163abiizqxf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163umpbbdkg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bcufmpat.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dtmrrxrd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sykybeyl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hpxquvhn.html

Go:   err.Error()
来源：http://www.xuanzx.com/163deoyypcm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wdbibyxe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163itoqeqhq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rhraxdqd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tppvvyto.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ofhkkzfl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163oxgkefeo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163omntvctd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zsrbzcwl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xtxzedxj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163iusscoxg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yhqangja.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qxzmowfn.html


<!-- 参考信息 -->