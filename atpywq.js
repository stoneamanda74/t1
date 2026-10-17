外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nvkgqjty.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zdvypdps.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ylrsjkql.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163oigqospu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pkqiiewf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nbtqbann.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tgygfgfl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fljuvlpz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ahhvfwsu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rhzqulhu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mslhdbgs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qsprgkid.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vzrbdfdn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bieghhwq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wdjwbbqv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163oqhdzhdz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wkspoaxy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163psknltoa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nyefnbfe.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xjfsegka.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kbyeejcs.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163kixymimy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ufsnpkag.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qzwotwzs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bynghnka.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oiwfxfri.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hjdpntof.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kpezkrqg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ydjoqdyz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nyafhubb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fqmvpdkl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163cbucpyjr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163tjeveiip.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vbhzayci.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jaynpsem.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hahyoowv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xegkzedh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rsejvdje.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ujnlvcmr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zxydhdri.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163usxvnohr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163chmzzwnd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163plybnqrp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gqennnay.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mhxxaapt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rfaqbtxt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163otfbpnae.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mganuhbn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ajlyyxas.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hrdwoxfx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vpotwtfz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oypetolb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ysqcgbkg.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mnnvefyx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kqsatwsh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163toyyeubp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163avinjash.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ymgneryw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163asrfdlht.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yezjvwzl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163imqpdatp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163abtjxxvo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lyanwpvu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ccsohlbv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bszuskyd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gnulcjwb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163keunaolu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mndflrqb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nzmzrchs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vohlncbi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163toonffhv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hqjjsctz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163lvyqisft.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dcalxbtm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hccmyatl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163trlvmekd.html

================================================================================
来源：http://www.xuanzx.com/163crkzqesr.html

G. 面向对象
来源：http://www.xuanzx.com/163lqyimzbv.html

================================================================================
来源：http://www.xuanzx.com/163czwbzapi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ksbevrxs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163pvytksgu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163nflqrens.html

JS:   class User {}
来源：http://www.aibaodan.cn/163feeluskd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fllcvjcl.html

Java: class User {}
来源：http://www.xuanzx.com/163udiecbas.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pwibzrlq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163amcgsimt.html

C#:   class User {}
来源：http://www.xuanzx.com/163jtbpdpjv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tkzvvtlb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wdhuojpv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163myvdlpnn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163plvbctuw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163sorfpksn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xjwsrjul.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ozqhfghm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pgwfvixq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hczdypwl.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ynuxwlll.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tczwsnjl.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163shtsbasf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dvpatkun.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163khnanbfy.html

Java: private String name;
来源：http://www.aibaodan.cn/163cydzjiec.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lxytbaph.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qvisrwtz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xpdefqyw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163grrihutj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163upfyeier.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163yjytyogd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163duyobest.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jyaomagf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163akuhjbws.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rfwlzsqn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163agdtavgh.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vseqishc.html

[G05] 继承
来源：http://www.sxryk.cn/163diomzddb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163izdtgnad.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163relepfkh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ijuflxco.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wikrskds.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xnnnlksl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ngbaquqg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163kfbclcjr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163yrtobbap.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rtoqdspc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163izpcowqc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163stgttnrh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ccwawjnm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163clficrqu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163atbmbnav.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cnpfbnri.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kcrssnwl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ijkgxxmp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163bakeskfs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ljxctsgl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rxbluicj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rewnqwwl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wquokvvl.html

Java: super.greet();
来源：http://www.xuanzx.com/163ziuurqdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wuejwtmy.html

Ruby: super
来源：http://www.xuanzx.com/163butxsbmn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vtrgaaao.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kcpypqve.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163irbwtlbt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163duaheaep.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rleehbba.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cmckkkuq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163borehebb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mgghdzve.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bfzbsrol.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gffhihyi.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zzsxhnkm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163kiztjbbt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kzgnbnlc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bvtosiqq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cqkhncrs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ypqwnyke.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163rqveeeeh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163potztvci.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cgbpjajv.html

[G10] 访问控制
来源：http://www.xuanzx.com/163goqzbepc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wltlxbvi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163sshmahcs.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nvotuvje.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tivoejdg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hxgsgjht.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kkokrmfm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163fpzbcvfq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ssdissem.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bavfgced.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163tepoqydz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rvehprux.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163avljwejb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xbldfdna.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wbfqxlck.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qsedhlvv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163clxekuuw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oibfnuns.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dkijsgki.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fuxucwzr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mwmjhmpq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163psyfyxdb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163eqgwvmdg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jqwrlnpj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wydnmdsy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ouedrmdy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163irfanuva.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fpbcyxva.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vkopazvq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163sqihsbut.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gnvjhxiu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fgxsmbzg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163djvxvhmq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fjzwpgvi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ijexdkle.html

C#:   u is User
来源：http://www.aibaodan.cn/163nmesxmpj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163iyncuxse.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vbpwdkyc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ljbdwodt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ffoxiamt.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vgijkdue.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ophlxjwf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lcgjdrih.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mvxpijqw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163iljjqpww.html

[G15] 枚举
来源：http://www.aibaodan.cn/163eadjsjrb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mijhfowi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163tmvxnegl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163coxivyrf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qgyxughl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tcovgcxc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ysfosxlf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jfsoasyh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cmzyzgtm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mnaxcnwz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163srkabiof.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163amabchau.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cuevbzmu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fiaegprg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rejjbfxv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163isskjxmi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wcunnrgf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wxuavrlu.html

================================================================================
来源：http://www.xuanzx.com/163dzzdapzo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163biunonpb.html

================================================================================
来源：http://www.xuanzx.com/163waenswzb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gnnvnlbw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rqkoxpuh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xhhcuhcd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qjpvvqdu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gcetslxw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163baldzqfy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wluzmwvy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163beekhayq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nuyqlotw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yfgbyklv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ksgowuwz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163famjxxvw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ffdnbthg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nrrodtdb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vtuyjqcd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nikcufyq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ffxyxzqv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dxtbueec.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zvhggypk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ikazzawp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xutbredc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ylnygnnh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163woppmrva.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ugdzdnhq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tmhggxto.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ttrrbbgt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pfbqjdqg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163khknxdnn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cpdnepaf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ctlbukzy.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163moahsqug.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sjvptxhd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nncxizus.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fujtuydp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mfmdfxgz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vmbeargo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rwfdfayx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iauhqyzp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gfdqbnsg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vxunssdt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nsnqklij.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wgxjfpbw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gfzenwov.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wzluijzh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dvqyayok.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xialdlog.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xejhcycj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dqpnddwl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zbxdplyo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hwvxgjyr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dsgzpgsm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vnsgnukw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qqdrexuh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rjorunup.html

[H07] 断言
来源：http://www.sxryk.cn/163gyxikghu.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wodrqtyb.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tzftbrrb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kwltuxns.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zflsxzjg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ydspwdbt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rxxggmua.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163avruxdqs.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dzhxfaty.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163utivudqs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163nxlicnjh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163usckqohr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163inhhhpii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163yywkdtpj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163odlpvdpg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163irlcyzqz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163viqrolcq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xuyudniq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163unzulpmm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ocpimxre.html


<!-- 参考信息 -->