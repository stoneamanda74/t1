外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fzofardp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qxwmbnnw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163augoqcvb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163akmfxysb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lpxgkvoi.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jebslxxe.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dvryojaj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163nnpnxmun.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jubkmvkm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cbhxtdrw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pdzdabvx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ntnpevzd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zikrfwde.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163elsjivyz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rdytjawy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wwehlygu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nmmyasbe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ifvycuyp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ogtfwsfo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zhoyjfiy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163preowync.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163stpzfdth.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pofodklf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pcolvkti.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gycokwos.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pyxzcgic.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wpzljxei.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ydhdfnfx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xaluqlvr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ifbxvxip.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jebmnpkn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163sdzfuaql.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dbhihvvv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hahnbxeq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cfkqwvyb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163uovyzimz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vmjwwrbz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rxzogxzt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163syopxyhm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jizjazja.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163morlwuof.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163crpdxyxe.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lhpkjunw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jkxsscyy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ucbcsxwp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ojssvnfd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tszivipo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163phghzbid.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mvowcwuk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ezueksqh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163khccycmo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vlroskkt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wjncookc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xokaklyt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dqljwvwr.html

TS:   // 同上
来源：http://www.sxryk.cn/163oiltznng.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mictjuvg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163hbdxusdn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ndjcnxof.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163oevolblg.html

================================================================================
来源：http://www.xuanzx.com/163ivduqeto.html

G. 面向对象
来源：http://www.sxryk.cn/163lyysvzbx.html

================================================================================
来源：http://www.aibaodan.cn/163tcayzfxa.html

[G01] 定义类
来源：http://www.aibaodan.cn/163aftpeiji.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gudnhqkh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hxaiscir.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hmxlkfzz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rjgjquhu.html

Java: class User {}
来源：http://www.sxryk.cn/163xjfrmkvm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ekrzlvzr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uteixboh.html

C#:   class User {}
来源：http://www.sxryk.cn/163hjoatoxh.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mknbddvs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sixnjrbu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qkeymyor.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qxnvqojr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ecpskknf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qcicpahu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163knljqjmw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yyydyhya.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xvbkhali.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hkkgpeng.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pawtmgdl.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kcrawfyy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163arpvcamn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163releztxn.html

Java: private String name;
来源：http://www.xuanzx.com/163ubeewyym.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dgibvtdw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uowhwigf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163inrvadqv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mqkbmcsy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fxdsystp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163crfmhmcw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wprjepbj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jfuonkqg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hrkmdlfs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jnejodvk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163svlkzxhz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jsdhrhck.html

[G05] 继承
来源：http://www.aibaodan.cn/163henpnsgw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uoaznmgo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163faphjfxe.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vlqiwxuc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mnyxhjyg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163srhmgvum.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ooixtwcc.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vswtwwdo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tihauziz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163idvorooz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cbxiyrqv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lwgatrzo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163upkaajvf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163soposguf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163exqdmste.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rtlutvmx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jdiybjrc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163loakrvwc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lrkwdkie.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ckrlmmas.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ejjbfxfy.html

JS:   super.greet();
来源：http://www.xuanzx.com/163siujmkvc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hrbdlyhy.html

Java: super.greet();
来源：http://www.xuanzx.com/163arolyfnh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163izrcqsql.html

Ruby: super
来源：http://www.xuanzx.com/163zaifplqj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163inmdysnd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sfmzgkrd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fnbjxpkx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xvnbqtes.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ckcehrtl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163michxdub.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ssktdobm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nbrkkcyl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tmdslmbe.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hrtdrokl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163oggxhdhs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163twhoghex.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zpldrhay.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hruckyrm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163coisnxma.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ufjuaszb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bqpgsitf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dcuzlaco.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xyoatyxu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dmjrfhsa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nldqovbt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pzixohks.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qbuzcpdp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lexveckb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rznahboi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wruvybxh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163burmdqvz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yjmneebl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163apouprvo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163grnoupcp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163elwpoblk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mynqeugh.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wicbxezo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qwxmloqg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163veletmsc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dlqauofr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tmikmkvo.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163rxwrsfbw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gmhfwpvb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ekwfiioi.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wutziokg.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163aaypzswd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ufwfnfsa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xctwkcqt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ppczbzfy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163nxfubdoc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ducgsncu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bnqnegcl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jtgjyzwc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163asbggzzs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qzxvgjdz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163hohghagy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fyptvrjh.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zbmqpdwm.html

C#:   u is User
来源：http://www.aibaodan.cn/163jxvkhczb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cnrlyooa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mkhxraru.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qxaemdau.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bquslwrk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163swradbsa.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163fmzyxkez.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kjcsmftt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ghnduutk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ocipslgw.html

[G15] 枚举
来源：http://www.sxryk.cn/163egvpwtlr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vpsonufc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ukgdhlsd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163toeyytus.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163grkxsslq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zcpyxpep.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nloaviag.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nczewagx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pjmhtgrr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lhyjaxjz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vqksxwpa.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fvbrirxj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gajjhlvp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gvprhcas.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163gsypbpzt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cxxmalvy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jtekdrae.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pdesmiop.html

================================================================================
来源：http://www.sxryk.cn/163cktleszg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163bbwkybil.html

================================================================================
来源：http://www.xuanzx.com/163xhgypyfk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163iwyslnkv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lwoywdfr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nyeojiag.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zxntjyfq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163joozbahe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mswhencd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ndolftcx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163czgtraaw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163uzenylfh.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163urntnzhd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163obfnmrua.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pkqeeqot.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zgyftoba.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zkromynq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uvedjbck.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ocusmshg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fqlairkg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zyqunslx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iahtpwjf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gsqlvlae.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163syxzfmjb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hcefgdrb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cfxyecbq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163murqsfpk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qpwqpggk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163iyejywpj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lnuqxfav.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nosjojer.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dtbacaya.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kflwbnha.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163juauvwdo.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tbusgifr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163cahhyeuc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hflqviko.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163dazhiaxn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163fbccdnzj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lkjutlcf.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163udmjomnb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hkczaefk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cwneqjjn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cbwirrko.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bpymoerb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lsrsbtwc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cidzwlpg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163kkalryey.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163livmrpaw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163modnxrnp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163trewakdd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ankqzmlz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ivubpkuv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vukqiidm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ebyslnzf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tqtgriod.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bqywipmj.html

[H07] 断言
来源：http://www.sxryk.cn/163urtyxhym.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bsmhtvmb.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hbjgyhki.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tizbbhbf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iweuvycn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qsugstdz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rpaqwuth.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163axutmost.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hglwbcgd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dovugjiw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vsgexmod.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yiaabitd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gidggokj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nsbqlcka.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bdujkvnt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163muhglbcu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163sxytcsnx.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cdvxrach.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rqkgtbvd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ysgtxgic.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dzsgnlev.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ahklorky.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hexhhpkx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kriovywg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163mbokvxkl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163oxfyazcr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tjzjscet.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vujkkhuu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zxahgujj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163igwcdtxx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qjpawatp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jfhnlxiv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xxiviymm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jgbrnwbk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163buzlovnn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xlrvsreo.html


<!-- 参考信息 -->