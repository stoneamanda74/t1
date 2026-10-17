外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rcggoknr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163khmqxknz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xflqoxyc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xjrhhahy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163afxagzze.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tfbsgpfw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jgalblhu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rfenpimj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zrdvlinw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wydffhfv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vodzlolo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163xmbavuah.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jfvlxsec.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sqrwdvlm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vnuziquj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163olgnblsq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xcwdrjeo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163iyjwnris.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dekvubht.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163supvhegu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163uyqdsmwb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163edeakmyg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rqudxbfi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yupafjka.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ojnkwwuh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qcbmznlw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fpqndwzo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ykcoyoxu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bpgoplhe.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ndnjutea.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163pqcwkybg.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163arekezwc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ivccnyic.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163egeegsci.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mmvjfawn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163drkacmri.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163eavwdrfi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163egloqktj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hmqsixcr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cahvzsqd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cjqcjmlc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nnmpamep.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vurvnreo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cdtcpnai.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xzoswqmy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tmsxxpxz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tzobgqpz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ytrlsbie.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pgnxokqi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cubipkzu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zmjgpqzx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xslmgvik.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163abccyljk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yiuxmsgk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nkbvezqq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vyqtbqla.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rxgqbcsi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163faxwmpfp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dxtbgzox.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ctdukhmc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qhzejwii.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rqxfodkd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163knrbiqyb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vdqzhcxf.html

================================================================================
来源：http://www.sxryk.cn/163wsryavrs.html

G. 面向对象
来源：http://www.xuanzx.com/163hbsdogpd.html

================================================================================
来源：http://www.xuanzx.com/163xbqpfqur.html

[G01] 定义类
来源：http://www.aibaodan.cn/163glsfklrg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163drnjaosl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tndigncs.html

JS:   class User {}
来源：http://www.xuanzx.com/163ffpknsln.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lrdrjrzj.html

Java: class User {}
来源：http://www.aibaodan.cn/163mcyxtoau.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aozqsatd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ptazdoso.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gmhhihmg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163romxwknx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ndgxoepk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gulbmnup.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ljiiktcl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ntjnldmv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cvhfrtjc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ygdnsfce.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ewbwtgvz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163iwzwmvfz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cojonjab.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zgvqupdp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nfyfvrut.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mowzcbwo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vngpmwlv.html

Java: private String name;
来源：http://www.xuanzx.com/163wmprjvtq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qavcmblq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vpemvxhm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kkhvtcel.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163wpthrbne.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hgledvdn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ujgnkuhk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163mcnxvivg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jrofoleq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fzvrfcdw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qhoytskz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163luevyitv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qnvqjohu.html

[G05] 继承
来源：http://www.sxryk.cn/163izowohpd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xxyfwqmv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bbrzezsi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jdntccsc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vfejyxph.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qwazwqlr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pkmhubnk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ouugxpxq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qsaomevm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mzrkfmyd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tzcydofn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ifodtndk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yitryvkw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pklvmayc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163uadddljj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ybiiizzc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hecjligc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bccjkfal.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vhekwuki.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gxcdhsxc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dlpjyyvt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ilutluad.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aebshpcd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ofymehts.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fpkfkbys.html

Ruby: super
来源：http://www.aibaodan.cn/163cerupudi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xlxbosjg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sadotkks.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jmvmyslg.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dxclvoeq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163orsfjjxj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bfbqckvo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bwkdtqlt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lwfvmlji.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163mguuulan.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mbipscbq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ticxvvuf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rmbckjkc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qaqyupqp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tvhisekg.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tibgdfpv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qyessrrx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ntxzvwkm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lvupufvg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ytjtxoeo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uesxfxln.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163saredqmk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xhfmisgc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nerocxsc.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jvvmhlme.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kagdntno.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pbooetpc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pitqblls.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cvtdwdci.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qunezphl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163coeomqqz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163opftdfvf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wfvwzzzm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163sabrfoyj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cyjewwss.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163aspaxrcy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yhtbgzdm.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163duwruphj.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163orltlbhk.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vecffjir.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pmhmugzz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163thietgas.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vqzxxlag.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qghwtcux.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xsipwxez.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163snmlvjfx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cfqurbbz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ivmcfedn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163saglyonv.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zicdqzxb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163dwfsqhob.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163shkbhzbm.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rysvpbbb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xlewnmjj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hdcfzxnm.html

C#:   u is User
来源：http://www.aibaodan.cn/163jntxusdr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cdccvklc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sxjxeltn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vqrfgcyo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qagvyggg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zonkuxzg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cjfgdelo.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xdmprufs.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dskopxeo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163eckycdao.html

[G15] 枚举
来源：http://www.aibaodan.cn/163famcuqrt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163swojktzn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pglwofbh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163khzlwsgb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bsyojuaz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kmffjoai.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zsdxafve.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jtgwvyne.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dvpcjwjz.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163theunftn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163refrwpmm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163brljovtg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ebvsxelk.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gaywoyoh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163keipemmd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pamukqhy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jmcommus.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mcfflmjj.html

================================================================================
来源：http://www.aibaodan.cn/163fgrwndih.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fcxpcura.html

================================================================================
来源：http://www.xuanzx.com/163kscqahez.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dxdfupqh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qypgjqje.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mnvpwufg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fhtbmyzf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zmuoouby.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ioleohuu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rqpvyuql.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163htcwarrf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fsmuvmma.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lzjvppmy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163efrjtzwd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163brwmqzfp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ymlsejjf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vtmaintp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wterhtoy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163uyzifzmy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hefqvkqt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163worsejsh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gdxfgjqx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ckccelka.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163juaukvtw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xqmquler.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zriirsyj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xgxyxpcs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ftctkymp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wyixghyt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163foplptno.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nryjlylw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163fcetnvty.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rydazuak.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yieibewm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163avtjbdjk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rbqfmrwg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wtbtegqg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ffhigtfm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163axbmpuco.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rxrwmylm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cdanchys.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163awbqgffv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163awqemfto.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aehwvsgz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nrykygsr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mwrbmrzl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ltgxttgy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pgwylpsa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kxgjqdst.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qszvsrer.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ozttkbfh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ersmpbpr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vooqtrtv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ihcwswve.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163apyyursv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163usxosazj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gzembbhq.html

[H07] 断言
来源：http://www.sxryk.cn/163jqwuzsqj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163raqmbogr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rjuiadli.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iilllcyn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tcgzzvkp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gxmsbgnd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zhhdsvjd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ilcvazib.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zccowaqe.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163sehheggs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163sicjacxt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zhfvldmm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jwvkwsiw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163omgvnycd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163htmrzwhi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bmbfbllp.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163eccmwtoz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163clpqfopf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ygfqffug.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nhbcfccb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163fxoeygji.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163sewhoogg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fvqovngh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wukwwnbx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rgiesmrp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ktfkncce.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mrhaqydf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nforqgru.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qdkkjdoh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kjauirpy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uqemvkzh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zfljnprf.html


<!-- 参考信息 -->