外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163oempzbox.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qufidkxp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rjkkgtdw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bsnyoqrj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bqesodlb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ywmdgkxi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zewiaijz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jgfbyttw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vetqrjnv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cecjnoce.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163uwmicvby.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gsweokrc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bmzrzytd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jyiexxlt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jbdlrmeg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bcjwrckj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hnxioqji.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pnvuaizp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qakezmfo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pxrwwibb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pyofpmhr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163snbqdqft.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163eqmhkzwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163umbxyrel.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nwqakceb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dqdbxjrj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gcfqygwk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163exdtrhfw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163xsclnxul.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rwilapii.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ssyojojr.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163tajovesk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ukmaaakb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ergyjeci.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zddbndue.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lxzolusm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uvczwael.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163dvepmxhg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163azcvvnzq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mkojoesg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zejhgqcm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jeuctbdb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163txxriyct.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163aecakzeb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nqsjodbv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bgietihi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163erjpsdtm.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pwpiaynr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hhgefcqs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163imxjkqlv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163syiimmkh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163nryvjgzs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rlkynqtd.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pimdayhc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dmrwvqah.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dzuuseus.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163artxdeul.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dpgsjaag.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163klvgzagz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmoueltq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ovwoqhxx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ikjbeppq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wfbzlpqo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163aloucaka.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gsokrxij.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rklpacdm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dakyljhb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163kbvfzbmy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ejjntanf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rknpvbhy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bqwqtplh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163udkvzqfc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xluxmpyj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dgdkhfzv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hkfoshrd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hdyygklf.html

================================================================================
来源：http://www.xuanzx.com/163eoytyyzp.html

G. 面向对象
来源：http://www.xuanzx.com/163jzgsdodr.html

================================================================================
来源：http://www.xuanzx.com/163cfqikpro.html

[G01] 定义类
来源：http://www.aibaodan.cn/163brncqiyf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lyvlgjvs.html

PHP:  class User {}
来源：http://www.xuanzx.com/163wkhtcgih.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ucrxdwuu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163talwuvsd.html

Java: class User {}
来源：http://www.aibaodan.cn/163lkboapms.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fxfzterc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kkywuodu.html

C#:   class User {}
来源：http://www.xuanzx.com/163jsatqppn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tpqewapm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fcdsrfzk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pylfgrau.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rxwijgci.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yyubeasx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163czjssadx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yzszzifb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bqixkrau.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dfnvborx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uhxjvebz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163krhcqfnc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hmdcbcul.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cpbrqlgd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gbjbwhxa.html

Java: private String name;
来源：http://www.sxryk.cn/163ldichzdk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lbaqgizy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kxkxlwwa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ltxhqwnl.html

[G04] 定义方法
来源：http://www.sxryk.cn/163cwyvhokr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ytckellx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mskdaecd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ulsbzmsm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ihwgnjmb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tqcdyrei.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163meqzurqr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fubozbgc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ovdcluko.html

[G05] 继承
来源：http://www.aibaodan.cn/163dckxnwfo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rvyyvyda.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vdrywiom.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163etttgpgg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163luniforx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yhzpejlr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163qbygsmmm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qzvnoxay.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163juycpyhd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qyqabwzm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oidpeofp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163emutkwor.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iphaenaj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ozwvgpif.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vpdnuryn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ucnbquhs.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cpubgler.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gkfniygl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163zjqohzgi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cdljjkqe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fzkogksr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mcctolez.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bjrnvxjs.html

Java: super.greet();
来源：http://www.xuanzx.com/163twyxlsen.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163plkfoioc.html

Ruby: super
来源：http://www.xuanzx.com/163mzikzhzb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163avmybsma.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163iwvazamf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lsrwascr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163muysvptr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163orpyueuo.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163vykabiun.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kvwasdly.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nkgkneus.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qtwfgjmt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dzhqawra.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dvgkbmsg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163mghorzhd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fvgfsyih.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dmeogszf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uiqfzlgr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ttwwzoyq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fraqsiur.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xsqeevrt.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bxyttfkm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nhoheojv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163akggftrd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vyqchlim.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vdegxozg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163taseoyfv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vxcqaipw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jmgzcvvf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nmmysiaa.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bclsabkl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gfmcojfu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hakqafam.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hhwygvpp.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ljwtylvj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163gtyxzmca.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ioggndlo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163imqevtin.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lnaptkrg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kokiaxni.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tsuwlvat.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bfgvlsye.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ztoouluu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163abtcypzc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tpskjikb.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ilbxccbz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163dcmjncgd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163oaqimxrm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hjvsmmic.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163xojcoqou.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163knmctcfy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163aaasuwpm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wlihlnfi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163urhvbwis.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dqfuafzu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tlvqhpxv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eofgqflb.html

C#:   u is User
来源：http://www.aibaodan.cn/163ctbulncn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qsplgkfh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uvxopqss.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163keveqlcp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xlfruvxp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cnszjvel.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163icmxkhnw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163picynjqr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zzrmfzut.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163biceecgm.html

[G15] 枚举
来源：http://www.xuanzx.com/163anljbrhm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fszzkzir.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163mvclbwdv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163sszmrndi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bxstbsue.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lbetopls.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ovdewvsi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ykftiqeu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163opsryyto.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vsajzlvm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jczjztyu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163aedglsqn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ulmuhucs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fsornpqd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rldxjfez.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ulgvzhza.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vkhwpikf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ubgrfisj.html

================================================================================
来源：http://www.aibaodan.cn/163gnqokyca.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lsdrfzkk.html

================================================================================
来源：http://www.aibaodan.cn/163bbhhxuse.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hlvopvwu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gpgdcpcp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pkafvpyp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163odvplpsh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163yqzkoscr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bhzikndy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ulithtok.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ovvohhjk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lndtmsrr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ammnlefj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rvgwafgm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fhgdtswi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zuoqikza.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lcfuqxvu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ifqiduyl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vahlwwbs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tjhtkgbm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sxqxithn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qzkvdmcn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fqnvhfjv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qbubjssk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rxlfloro.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163abacceaq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vhvdbtpi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bwjrnctn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qyhrqywl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ualmbeby.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ubrktrwo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163krtwhhtb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gfqikdpp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hupcuoru.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tzblruer.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163hvgtqgxr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163dklgwdwu.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163dbsdnjhw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163chlyfqle.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ontsnyvc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163nbogbdli.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zwujqlgm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pazmnklq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hjspahkr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xlwlemie.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gehcnjdy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163adohkkyc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163sfuiiulp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vhfdwwjv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163urogmoaw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vwkvncnq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bskqijti.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pvzvehhn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bzvenvmt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lpoqruki.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hwnbigkv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jhncuhgf.html

[H07] 断言
来源：http://www.xuanzx.com/163uzkwkuvw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uhvsjnsf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vgfxzxgc.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gkxcrpgg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vvakeyhl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vmbbcgzo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kcwzysak.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hiqsoexd.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163yhqbilym.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uxzxseeq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wsplizrq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fndvczvy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163guroppdz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nodykcvm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ydgzgbmf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163bimmneif.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163oeqtzmuy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163swpqztoc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rblletvb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163liagimiu.html


<!-- 参考信息 -->