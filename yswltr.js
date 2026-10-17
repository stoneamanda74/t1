外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163isrrqbbl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rijycrib.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fulfutvp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jywsxsqd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163eddlxeob.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ynwgmujf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iulptpne.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163scsyutte.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xljjqvxe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jflermjz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qffbyemy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zjcpwbyx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pjsaptwh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nsrsnyqo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zxftssae.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qqtbmirr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nuillbhn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qfxrmowx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qrxkcwec.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mzfxokho.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rsgmuzty.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zyjhfgpb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tekiltnz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ntoueghm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163cqhnfraa.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kjaxegsc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sxviywdx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mcmocdaj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qqnbawrh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xjlvhmex.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uhrbfxue.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hlxtmhqr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lftdvbcf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xauucanu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yfmjtnpc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ehiyqhfv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qunoeotf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163nkhibuym.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ubrtsdco.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ebajwbkr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bhjiwyvl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nlnajiiz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wcyrzrks.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oiwpiudo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kzuoinip.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jbporxfb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ionkdihn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163eppcwgcl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cunfbggo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163borvwrvx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vaettbnx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hnwobcsu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163harqwoqr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sgbpiyal.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qhinpwsd.html

TS:   // 同上
来源：http://www.sxryk.cn/163uslzujuc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dwtndjlv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163shvcbxpa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lobtkkkv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ndxenqij.html

================================================================================
来源：http://www.xuanzx.com/163tnxfmzfz.html

G. 面向对象
来源：http://www.aibaodan.cn/163argtbgwu.html

================================================================================
来源：http://www.aibaodan.cn/163mzlbjtzz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ujkeddfz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163frfomluo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dsexuefh.html

JS:   class User {}
来源：http://www.xuanzx.com/163jugfnzul.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163stryfbwz.html

Java: class User {}
来源：http://www.aibaodan.cn/163mriakggt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163sezwnffr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kxnlrdmd.html

C#:   class User {}
来源：http://www.xuanzx.com/163lgdzjhqy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gubbjisw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vebpxzxg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nhmmfsfk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vtdvleho.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163upzatrzs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gwbmdpct.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vaiauqab.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yzxzbxpo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wgxfcrri.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163optgjkvk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vpraaofz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bviviczd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163bmohadad.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163atmlaebn.html

Java: private String name;
来源：http://www.aibaodan.cn/163kuxzthap.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ahpaajtu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cbpakhuv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ogygnxkk.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ljonicrs.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kykvgxrj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ymdvucjl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vrjwrrec.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xohdxmia.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163gswbjmwy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nsdsholt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tredmily.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aafitcay.html

[G05] 继承
来源：http://www.aibaodan.cn/163honxvlmr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ffflmaqu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uovllnji.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bpqdtsiw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ybpedzpo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vujigzwa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xddjkxpr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bbvpdwvm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oklkxxpa.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wdcmotng.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163euqptaew.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jqzemriy.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gqdlkteo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zotktxvh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fyfpiqbw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163uttpmpfi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zknarbbm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wsgafrlg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nyoyqqxo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wazckbld.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163acxeuuzv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wqttnwcz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dtmwkixv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fyfnrdcf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163urtjxxwi.html

Ruby: super
来源：http://www.sxryk.cn/163yzmtvzcd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163msuqmuip.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xplhkyku.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jqdvmjeq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tlplacgq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163esxyxhpe.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163umkyuomx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163demiyzps.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zsxwypho.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ewtzgmin.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163emclozen.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163duiaxnra.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fiaqgnxj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163udinakwx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pjdpmvzn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qelkcbbr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ngplwmpt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163cjdzaizp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ejywxlli.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kxbmhiou.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zhggsytq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163obcagnds.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163kufjyuhy.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163tqlpfloq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163duaytasz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163uhjreyxu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yzdhblrt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ptcgbbgf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163grhidzfz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bjdrwmrp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wrderypf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ftylheog.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ckwpknkh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163giynegvd.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ugunurmz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iopelkku.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163audwswlg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163htdjbvjl.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ajcjcxxf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163triztlkc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163znpizkid.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yicrusfw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ixfzvygz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163iildibut.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zivmixpt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rfqlmdyd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163czykolqm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qgfllhqt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163oujfprde.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dpfxmbcx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163byfgdtxi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jkdcpnzq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rrtwhcre.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163epapvkrs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hovdmkex.html

C#:   u is User
来源：http://www.sxryk.cn/163tejbolkc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ggieupfk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wxkblgbu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gndhuktk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163aeekepfw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qjcrvkxf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tkezvlby.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zhtazumv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163oexbkqmm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gzbqwdnn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163otqfvzyt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tjpixjbf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163iklnfbgw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vylfrhip.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pfxrikkh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bgxaujfd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163avcthxft.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ffcqugjr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vhogzzty.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gtbvgxpz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ltucrpqi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163utjeomlp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163atltslfx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163prupeslu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tyngbpnc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uubxchhm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lbkfroba.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uugrgygp.html

================================================================================
来源：http://www.sxryk.cn/163bbquuulh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163rvzispfs.html

================================================================================
来源：http://www.xuanzx.com/163cmvznbbp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yhueblzs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ptmtdjld.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yxonokxc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ctddjwfs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xuzznire.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jmoygiif.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163conushbk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jpbguowe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vlpvbdbe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ahoiybyv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sqzlazqf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sscsmyum.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zyubfvqj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xqqcaezo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fuxokhsl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fpbxjxil.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163sktlgrcd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163uduuautr.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tqfhnapg.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bpguumlh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ohscgvzb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cvlcuffd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yvyuvnxv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mlxtiijh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qoyslpng.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wuddexow.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tgpppmpw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zxnvqqmm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cwayvsqg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gqbqrols.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sszacasr.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163brkdjtwc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lgmdxvrg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fefcxcju.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vqxynjkp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pkvkbdvz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tfutgjzw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ldqlrjlr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wgefyukw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mbgdnxus.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mvnzgpjh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163yvhndtds.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163iamzzdgc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zwtyemrs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163udejrfyl.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jqsdkylo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163yydizvan.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pwvnyefm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iatzvwzj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mifvgmnl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163sobafmwq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vwukqprg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163raaifkxp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wyldixox.html

[H07] 断言
来源：http://www.aibaodan.cn/163eehoryoi.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qbovfkdc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hvoyoued.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ioqovwvn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kczacxcd.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ntwrkoto.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rxvmfsue.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fzcmxaei.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ainmwdlh.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163bshhejmn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xdpviazu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mjnlpivn.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wxailgtn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qnaigktf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dtnjoaug.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fkfqtutl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yzbwxiac.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lftweshr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yrcqvpcf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xcmeoqhp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163iobmwjky.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163cmoawepk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yykveuwf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gixndzok.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pcwvedmx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jcnhfnbw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163moydhcyn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163budgbile.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mxsjtejf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163gqpsnlfk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gbpptgru.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pkqsfsbm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wuulgqys.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zmrnodbm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wdpejfhg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fwtcoayi.html


<!-- 参考信息 -->