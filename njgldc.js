外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163iuqgssce.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nhrzwdzc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163thrgvufs.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rkpcutpw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pxygjhja.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bdkzlfts.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aikmjpen.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163njzrcwdd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dypncbvo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wkajebgu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ewynewxa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zrkuyyhq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163disbwxwh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mafuizfv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rngghvkn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mofvsnnr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hewrqyof.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xmjritym.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fnxtsrvb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163oskmmrcq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163eaunqkgq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hiztypol.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xnxkxzfq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mjwwvixx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yjynekni.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vdrbhvdp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zjmvjgvp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nvprhajj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fwddvcdm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163bmzlbdgp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pntzvbro.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dxdaukpv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163czjwnjoc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163brgulogu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nbzyyfmd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163spupfywq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ritadtjj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163alhgmbfb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bzhygvkc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hrwiuyic.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ooheudyu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qltmftnb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vtyokubz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163chwryqej.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163okdwyzva.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xyvkiuji.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163eyfmkiab.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wuuvkila.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ogequirn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ublqcyvg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rawhemxa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163feutgsof.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163beqcespt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uiarqbch.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jmyihhie.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163evkxjbau.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hlrmhsip.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ppffmrxb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bhpwdqil.html

TS:   // 同上
来源：http://www.xuanzx.com/163luinatwr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163iezypfwk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qqyfxxlm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lfsujcsg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nskewmug.html

================================================================================
来源：http://www.xuanzx.com/163pobalqsu.html

G. 面向对象
来源：http://www.xuanzx.com/163tyrzqrqe.html

================================================================================
来源：http://www.sxryk.cn/163dpccckxr.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ldachjwt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163twkbiyoy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fzvuivon.html

JS:   class User {}
来源：http://www.xuanzx.com/163vcudjgmh.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163edykmpin.html

Java: class User {}
来源：http://www.aibaodan.cn/163afvumbda.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163shmdlkih.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rserogjt.html

C#:   class User {}
来源：http://www.xuanzx.com/163gsqzbobo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lxwnwcud.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yxhmiwpb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163msoksdlb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163oercnfty.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163klneshpd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163stjxcfab.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nrgdvrct.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xggpxiob.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163znnxruku.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ffugqxgz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gkajdzlt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qlmlrsdm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vsjnrykb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dzdbbpri.html

Java: private String name;
来源：http://www.xuanzx.com/163zksdnxoq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163psgtdplj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tjtgrlut.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xhqcslss.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tqyiguwh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dbxcgyaa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qqnistik.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ohwiwrik.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dkcnudow.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163gmfniwht.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tnwspehd.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rmwiwibm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ialqlaet.html

[G05] 继承
来源：http://www.xuanzx.com/163ojjaoixh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gpabgotg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163egdqqdwe.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163igmkzszu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tjvazyeg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jvzohbcf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uuyggzpm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163umkdvsio.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mnnblbbq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bomjejnq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fgmscvkb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kljoccsp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ldibkkip.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wgclkjlu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ivksgkfs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wgdvdnvv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jlbhsxhj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163uyeidcas.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163eqcpquiw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fawmnbag.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zemlhkah.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ezbulpyt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pyynvzgj.html

Java: super.greet();
来源：http://www.sxryk.cn/163imnaismu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163eswloqoy.html

Ruby: super
来源：http://www.xuanzx.com/163kxvvweqj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hwlfdvjo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wuhmfbut.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ylmyidqg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ozzlupbg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163blfzsyhh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qrwxskol.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bkenkpoe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163icmmihyu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163buctvplj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sqjrrdvj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163brkncljz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mulnjsgy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mhmhpykh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163phiucbnk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163silhpdqc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ivmamual.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rusunzvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mmxkgfch.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lwuykkzt.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tbdebkrv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zzbtdycj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fyajzosf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xseirovz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163drhjnpvb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gwpyfozi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zuhubepg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163moreervx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pwzvbjyg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vonedege.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gblnwjzp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vzhejnyb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lmvqliih.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hswmngsc.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jpqzwfjl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kjqdauxa.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163eiqpotmb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163nthkrmei.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yszwpipy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163eljaznut.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163okdjesrb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163sdiduero.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jumqrknw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xatgdntw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163nwgsuirf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ysxdhosd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gzcozeiv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163gaessumi.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xxiapxzj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163wpjrovoj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zvzzqkdn.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lidqvplr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bnujfpsc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vjdglkbu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163umfalafh.html

C#:   u is User
来源：http://www.xuanzx.com/163qrnmkxoo.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zaxytmib.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uwxtixjk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cvvgepsg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kbnuzqxh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ijzzphaz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qvncbihh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wjmrrtdi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lpipbcck.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163urfbxpik.html

[G15] 枚举
来源：http://www.aibaodan.cn/163nbeoxbgv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jfmrzecr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ndbhbadk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ltfajvkg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nybypold.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mrwsmksm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kpbilfgz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qedaffyz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wvwxjoxb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163extiuswf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xsjvbpkn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rndaubad.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mpqiwjun.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163acyldrhc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cltebxua.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mukfwjeb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163sceksdvt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rgpwxqyl.html

================================================================================
来源：http://www.aibaodan.cn/163omomkosl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zcnqoyfd.html

================================================================================
来源：http://www.xuanzx.com/163ovcttyxl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gwglqwvs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163euaoqpma.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jwmwofee.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xeygjofv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jotwjcew.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tfgttobf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zsbvpzcv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163oebzcrha.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163smbfprdm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163yxujcuop.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cywfdkvl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bcsjehyw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163izojqsnl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163veeadlqq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qeofmhty.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gdjoqpjw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163llwlatdh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163boufuwqy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fwlbzjyq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wqaznbpm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rurkffqu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lqvbmcbd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163msopnbdw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163afdelujv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qojmsuvh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sbemxamn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bgihetzf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fbxrqwdp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mgjtxnjb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163yvfemqku.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163whhbrcqb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zvavhmhf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wfoavmmc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jrqwsaqi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hrkoxhmx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163suqircfp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tmgdyxzv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hhrklogw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gmfejlrq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163litsdftf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163onwutuuq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kapmyycj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163afmvcifh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ujxawlyt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tkytljbg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yufimzut.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lpdntmqq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ydnfbryg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pizxodgy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tvdwcyju.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jwjtpusp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lifjyqou.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163tmsfxswv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ikwkfths.html

[H07] 断言
来源：http://www.aibaodan.cn/163ztzppzar.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ixuiuwpe.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mrelybmo.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mgugkuag.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jnsymnmz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163klpchkbl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jcmeunkx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163etvvsxah.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lgpxmauq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163floywipx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wxsfhgmb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dmnydbac.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ibqpulkw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bxiomjwp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kquqhjme.html

Go:   err.Error()
来源：http://www.sxryk.cn/163odfsafpe.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ekgmgrdj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kalnklyo.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fmepykgp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lgqnlqth.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163iejtfvip.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hzyslfaj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163afbzavvw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wwgebtcr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hmprhdxx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mpvbutsv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xdvqibue.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ktmtsbrl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163brjpvliz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qlagxciu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vvlopbaq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iexcfokf.html


<!-- 参考信息 -->