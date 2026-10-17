外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163txooagic.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pxmbkxoi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163elnuuand.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163voasnrot.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163iuhxmvpb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163dgdtetcv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zqqwwcab.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fxuhikur.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rhfpafre.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xhtjncza.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uddoegfa.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uyljzspi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gpjarbbl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aubsvapn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yibeeykx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163xqtfjylc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163cjfxotzq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xwdjapps.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ppktcmeu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ykejpmhv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vzztqvjt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ickbwtsk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qhyictyw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163emwnafen.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kftlzdey.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jpjghpxx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wimjajii.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163iwxhubez.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kbjwuoqu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ifeqoicr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163btylhcwq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mblzuwwi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163vbjploxn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yedabaos.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163iljwrfsb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163djkyrsxz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dgzlwvfu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kotrznft.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fdrqxljz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163snrlazyi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljugkaai.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ahqewgmd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uheylioh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163axdbrfwc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cwqcevgg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lracczus.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ykreibnd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dgvdafka.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dwpnmoou.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wkvwapok.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163itabsiln.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vizgzunk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ltmcrqcq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163oimxlgns.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fnyzfnqd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jkpnradb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tjszwzyi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163tmfidurp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163upmrgywy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kjivjyzd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cwfwyjmm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qjsfbykp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163brveykbx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mofgsqws.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lzinrzvx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163spxdmdoe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oxqmhbpd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nunzarpp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163evvtyvgz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dexyrcpi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pcvblazf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qfpepaho.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vernlirw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ezhcptgu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dittkmne.html

TS:   // 同上
来源：http://www.sxryk.cn/163esiljgsu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xccmmkpm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yctutoxn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163crqkdvbs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163plbpppqy.html

================================================================================
来源：http://www.xuanzx.com/163pkopvyir.html

G. 面向对象
来源：http://www.xuanzx.com/163xfdvhskp.html

================================================================================
来源：http://www.xuanzx.com/163mhefkqmo.html

[G01] 定义类
来源：http://www.sxryk.cn/163huapfeju.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qgqmbrqu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163muwfjnnf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zkxhcvsw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163njtfczcr.html

Java: class User {}
来源：http://www.sxryk.cn/163xqiimyaq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mayarmeg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wjqdbtmd.html

C#:   class User {}
来源：http://www.sxryk.cn/163piivnolv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xshhbmyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nlwctmgu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jaqxtydd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lawpbgzt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163guilhrqv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163roczewmk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wjkgrryc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163uhuymdri.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lzvoofic.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lsvhzzej.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gywchsgc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qxnbxxyz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gktirtnl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kjqbhzos.html

Java: private String name;
来源：http://www.sxryk.cn/163oawyyhzs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163yzxzynig.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163axevzzke.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fzukqwrp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163swjiorhk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163roreodvy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bhzozhwc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163niaoqnvn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163spgvlcjr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ohupgzhz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163koundeca.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qhkscrji.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lkwmvieb.html

[G05] 继承
来源：http://www.xuanzx.com/163rurexwgl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163iumybjzw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hxpecsiu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163oemrrfjw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xzijdwlz.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jkhbwqxb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163luafnion.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zzlyenhe.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xvplvujx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163woghbxii.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gdhoelml.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jzyyizpc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tqjpturb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yrqgtdoy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hnlrypxn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qrjpfavo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jewmirhm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163firslukb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xkfgnhpx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ethbqbzc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vbmklinv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nnmmudtk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dexlsqnd.html

Java: super.greet();
来源：http://www.sxryk.cn/163igjesmhu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vocksler.html

Ruby: super
来源：http://www.aibaodan.cn/163klhhjrqh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gepwsxxr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xokclinc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wctxqfoc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dtgepujy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xpgdrvvq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163reowefrc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163cvbwmhjt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xexsyaec.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163okxvnwaq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zqmniope.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cscnrwes.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xczaqzse.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pkojmjot.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ogxhzfdt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rahlbmep.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163uawbipsu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lbeuhaud.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gbwaqkzn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ekqfzphu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zebntzxg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163sgfphngt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vetxolvz.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mrsgrduz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fkgnqcqr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hfebesvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qpnoxjpm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163iuzbidnn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ulnljcuz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ucvwpfgh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rxqvrhbz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163azkxsmie.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ucuchgaz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qoeinudx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lqvezdjn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163vugmnwyz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163alsrfkcm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163dcrnkeau.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163atwnlkxv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163sljpxrwv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rwjpbvlv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gnqihjfd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yicgypfq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163potxrati.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qxqxmccl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163oboxgcuq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hrdmmige.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wxkpdhnv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zwckzqrg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163owvjtcjp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163tnyvfvue.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qkjguapl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ztoqthhb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xuyepfqk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jcixfdxj.html

C#:   u is User
来源：http://www.aibaodan.cn/163yxdnhtcy.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mxdswizh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rinhzkcf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nkxmbafa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163smxkofhe.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bkjjjmnv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ngtehrvm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hfzlxbfd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gczjvslr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vzytcfmg.html

[G15] 枚举
来源：http://www.xuanzx.com/163mabeqmtn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163exjrntli.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163gumgtuno.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163puzaynbq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hhithywq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jngvxmqh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163uwcezhzf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zrwzoplj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fncvlliy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xdxiluob.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ngbriadw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hdwabxer.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mnaazijz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uyrsyynx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bvautddq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gbrjfvpb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163olwiuoyf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sfmuslbo.html

================================================================================
来源：http://www.aibaodan.cn/163pvkwvjil.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163htbclqga.html

================================================================================
来源：http://www.sxryk.cn/163ebbdxfzx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ycuksfym.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pruhfxmd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163basspfuw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163anygzyug.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wqpxgxbn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bxmrmxja.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dnjzjsqf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163rdqpjdhe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163czarfsdo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163naxxmayy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kvpblbiy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hvbivocg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kijnbrfg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qptlzyty.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fhpcjnev.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jatsaeqw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163oehvvwbv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163scspfpgh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163htaroxea.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vhoaxvkb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tofowmxl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yaxaemnf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ozbsacgg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xwehkcyf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ekhtpdcn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163noderffx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lyvwluuh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qrwuvshs.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jvtucwkf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163imxabnfw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163olmgzxyu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jjppcoot.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163obgkrnjo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jsoxdiuj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163djwbkmbz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nbikksnt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nidlmqae.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tcqpwvya.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kksojyxc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ugyivzid.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wlnztzbk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dywsvexi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kgatydjb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dozawugu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163bystltay.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hjqeeqkz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zyfbqpyg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gaqrnnts.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163heuiblcb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ucvbcowt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mqkxgmlk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hrazhzlb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wxgufkqz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ozqeqeet.html

[H07] 断言
来源：http://www.sxryk.cn/163sozydhmh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163pqjsswnj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ofyljpmz.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163afobjkfk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163crnliivk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163idjcsohq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vercukia.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lievovjh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wedjqxuv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163nerfgdvy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vwwsuqpc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dyvoliwr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ijmwlizj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zkezmkpg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ltelirvj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cublsuwe.html


<!-- 参考信息 -->