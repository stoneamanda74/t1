外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163btklewvs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lofmhpvi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163juktgzkw.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163efmoqwll.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ohnfbdsz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oyjhsfmk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fuftseuj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fxnyxbrv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jgtegrmb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jasmqxqo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ultptijv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bikixeid.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hhnwfscn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fnudeyrk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dnasrbjv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wynyccwh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163djpfikim.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163fzadiial.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tfsvtmwe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rpxjpxyk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fnfhomnz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hpyqpwxw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163laqzsfib.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mcdazbtp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163oglvdzeb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tdybkcpy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dcmmmpbl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jragkurv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fjqkabyt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ipwlqpnm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163asasimvj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ljmgerur.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fuxcilcs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lelyenvg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xsnlnqqj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vxazagio.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iskijhxe.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vofevpja.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163kwqckpcs.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gbmdgdyo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ctpniiml.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gfohcslj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163knzfconc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zbhhxtec.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nazqslwt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zlbyvasr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fahsrylh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163oqxqmzse.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ssvafqbq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gsckhstw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xihwsvyl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iudfqzmv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ypyiwlsa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cytxnbky.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cntchzyo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163czspmuld.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bdjeyfyf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qjdsgwrr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uvghxvvn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vlapnpfx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mgbezrst.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lgknnnlh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qqecsqvn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163rulmfenh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yukfxvpa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qchzajoh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gaxahxma.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pwwmeakx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163evdvawjs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163mfouazyz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vmgitiyp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163qncjqyjp.html

================================================================================
来源：http://www.xuanzx.com/163ndsxqptv.html

G. 面向对象
来源：http://www.aibaodan.cn/163dykojnpb.html

================================================================================
来源：http://www.xuanzx.com/163jhrpsqwb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163pzifckcu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lbtriwes.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xswmlyhk.html

JS:   class User {}
来源：http://www.xuanzx.com/163ynycenll.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tsxlwmxd.html

Java: class User {}
来源：http://www.sxryk.cn/163mjqfxrsp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163detktsyn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zdpdmstr.html

C#:   class User {}
来源：http://www.xuanzx.com/163edwqhhqp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vdrxjwza.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163keivqvla.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163olhwwqli.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kgkcdflr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dghjmrjv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hrjtcvrx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163spmubcxs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rbzwasyc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163enlcsuib.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dzmuxpud.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xgxigfxg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uatreggb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vuwcbjby.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hkhdgkkk.html

Java: private String name;
来源：http://www.aibaodan.cn/163bxllpmyq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qblwhgcd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bfhbwoov.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hltozrey.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wtsijwuq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163bgtaooyi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hhpsrovp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163igowwmep.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mwmcngck.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163duqrbdae.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fjakmjyv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kmrzamht.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163utujijvb.html

[G05] 继承
来源：http://www.sxryk.cn/163hddzlgdd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nktgajzi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163iundeusa.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wmnchmns.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hdsnulwx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163rxuumupa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kobamvmk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fqkbczud.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rzilmbfd.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yuzylfhm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163katmevpz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hupqccai.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163robhxqni.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wucsdyqx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163snriqjrb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rolzhwwg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ljueoqwx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163stauerss.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xtxnhrlo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ughqryzq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vnbjzozo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163uthvpxuh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wgymsriu.html

Java: super.greet();
来源：http://www.xuanzx.com/163ztiucosv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wyuxatzu.html

Ruby: super
来源：http://www.sxryk.cn/163vbcwgzsb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vdsiqfew.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cnmvqbxz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gfdesyga.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mdfwynxj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163jeesrpow.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pnzyxtee.html

Java: static void f() {}
来源：http://www.sxryk.cn/163prmdvypy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163clikobdc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fhqpkbga.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163iydxavqp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163aujfpbfk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qjbbwlfz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dbndgler.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163etvywkno.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wxhfsmej.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163plktvnes.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163juyqhqqb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nyzvovmz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163sdxoztre.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ehrsithx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163iddluoak.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163emllugbp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mepoivux.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kqcundgi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bfnoiwhb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sttgcztu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gjnionkq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ogwiqana.html

[G11] getter / setter
来源：http://www.xuanzx.com/163achrtaue.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wxpbflln.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zmubsxij.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ebtvgifc.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fbavbxdl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yhgkbzis.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163winuiroc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pnqdvhwe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163nconwzus.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xfnuxrie.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163csmmmymk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aroujpgd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hbwepjho.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jsikpwxb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pxrtfond.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wbduooxi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kuuztqpz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fwpryloy.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163biielasp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lyexbest.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qafvvrbq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zehuzlrq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jvjbqbpw.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ffkyivpv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163fjxeskoa.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ggbbqpfi.html

C#:   u is User
来源：http://www.xuanzx.com/163dhzircmk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ncurwgan.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qsyphktf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163epicwnea.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fcmmlkpq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jnjjmcbv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bxqtkpst.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wuiufcvk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lomundmw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fngudxlm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dgsrcwgl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dctfyyxn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163iysmwhcr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ttghtsde.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163npkugvii.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dkusaxsm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zjczoahk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iojlvzbs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iixntqye.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fhshwdou.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wcjojqpa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ybwmdhzc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163owmwuyij.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cgfjgmmd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mqbnxemf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jitnjlqe.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vhqnajko.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163roipszjl.html

================================================================================
来源：http://www.sxryk.cn/163jeldexzo.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163obpmfebs.html

================================================================================
来源：http://www.sxryk.cn/163cnpokkam.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bjdftfcy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163msuwqxbr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dqhgckxq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fkjlqbpu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fitrsmqg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yfnncjlh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163eqfcpgfu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mxncdgds.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ybfbmjhq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zhqieuxo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163iisklofg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mgczwkti.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zomykinq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uywslqjf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sjczohkn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163emrcppmh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163aclxpwqa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163xcwwjktm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163efokloqy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mizfilwh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kigyclzp.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kzcowrji.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lizaigap.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mbcirsen.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eqyasubb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wiopkowi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vbcxwinz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nctvvnfk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dyfroyag.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163glqmugff.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163psixzwto.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cybbzxzq.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163niskdfga.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zhxvsgew.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nprmcenf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163msapajeo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cvrccbgl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163oaloztlq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bfvlwmhh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dhjhftgr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163twebgvth.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163eqihfqss.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zaxvnglo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163itppdrpc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qizoxntg.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ykssdwff.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163olawgfci.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mfagwipo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163grzjmudz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jpehkema.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fvhhpscv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163czskcwzq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163obhumnio.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ntxlfjvr.html

[H07] 断言
来源：http://www.aibaodan.cn/163redslbsb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163iqlkwolr.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nnkptuup.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gqttlxlu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lcdupspy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163sauwdemk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lqkcrmmj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hvnquppu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lmcelewo.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rngvhpaj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lkukgaaf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lrvlrtro.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tvneojex.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gghrevjg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dzcquteb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163unlmtgnt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ikdstspy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163grquntsz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zvfuhtbr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jwncyvxc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jkrgcuol.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163npnuwcun.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ytyizhwx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ecdjuwrj.html


<!-- 参考信息 -->