外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fxgnexci.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sgdsczme.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lbkwxpdr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xlpoupwk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163evzdirhu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ylzlbnll.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163plnpspaf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gaoweabb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nqsnfrbc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lefjqhko.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jbihajvl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vmjhcrzs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qkmtusdu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zdgdtdke.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jclpbhvc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zkoedake.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163sajteyee.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qduretaa.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163iaaylhef.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163evkrsozf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163whymdrqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ldkvplll.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lroryaim.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163memffxjy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163icodihqm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163duzdhcpt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nqdhkfle.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wsajizfz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zxumgqhr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hdlxqnpv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fkmoybbz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ewdpinqu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163twanhjyp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mhmycqjc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qwpktrhm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qvfprhau.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xaizkpfn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ldbmpwcj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ghxugdnh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163odoalose.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yqmqpyjw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gsdwhosv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163haanqywh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163grrspeeb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163umwlpsqn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qvowyaui.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163krepekap.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xfwggndd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uarasxwm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rairbswu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163plxcuhrg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oxntczqa.html

================================================================================
来源：http://www.xuanzx.com/163adtlouhb.html

G. 面向对象
来源：http://www.xuanzx.com/163zgtsorex.html

================================================================================
来源：http://www.sxryk.cn/163yapbvyay.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ojwhwygj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qrrdyoki.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ecaovxbx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ybrihqsk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tuemaiia.html

Java: class User {}
来源：http://www.aibaodan.cn/163cefqbwpd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163uougcmip.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163efmgtsov.html

C#:   class User {}
来源：http://www.xuanzx.com/163pzgjwixb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yehkvstn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rwchqnjl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rwxwfvbo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jwhkbyag.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hzuigejf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163exmmtobe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zwwjuzgw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ytzccaxo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163njtppgvm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163iedzywfg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vawhcurt.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163oijrzigy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163iuouehgg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vhgfntmu.html

Java: private String name;
来源：http://www.sxryk.cn/163mzndiiwl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tujyjkwp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tauzeafx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ldgfsipj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tdvbvhue.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wrkvvgjb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nkcztbhr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xgtxelib.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fnfloixd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hvqhzjlj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xqxoicul.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yclaggqu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cxeyvhhh.html

[G05] 继承
来源：http://www.aibaodan.cn/163gzukjhma.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mtwycxyc.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gfyysivv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qokhhoxs.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163farcdljo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xtxzqvie.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163oedpaaxv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gzpvahoz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tbehhmrg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ayxghjvb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163szdwuker.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163furtdlga.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fjvtrcio.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dnroeeco.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yqkudscn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qumvsibi.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jnmjytbu.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163gzjswglb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cwldbqrc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kwxmzzuo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tvkramxg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jksunuil.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dotdhjdl.html

Java: super.greet();
来源：http://www.sxryk.cn/163frnjpsif.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163heigivbo.html

Ruby: super
来源：http://www.sxryk.cn/163uwqqkfnh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ovakuuwv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vqyswifm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dcbplzzt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163iunvdnmp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xquxoyib.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hiubjgok.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oyzczyod.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ekinunus.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jltswlmn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lwigbwsf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163trxhdfjh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tfdhxnuv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163drybqrzi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gygknlqy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oqpzowun.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163sisiwbut.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163vafahdim.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kjeniexk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163klhwrhic.html

[G10] 访问控制
来源：http://www.sxryk.cn/163maluhtzv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hodmsylt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qodmmymj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bpbpgsrx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ybtutnns.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wxwkrzjc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hrmpvmtl.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xxiodpdy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qdztzrui.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zlvlnroj.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iwblzomc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163spnbxysp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tggcuneb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163icedyfum.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rbgsxvej.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163jcdjbvjl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uhbbpuoz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ivaoypfz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vhfflngu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163eoonqyhi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cfchsmsq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163uhsdytho.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ifgkpbqt.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163buxjmmyh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163nabewrfw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163czcmfpku.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163npfsrtip.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qsvvhijy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gulefccm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vqdkvkcj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zoxamwhu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vzknlbur.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163woeydevg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fricaxdg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163whobzhdj.html

C#:   u is User
来源：http://www.xuanzx.com/163sstuskcc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163njlygmdz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mgdyvjvk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vbkdtfiv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163idcekxzb.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ofbdceyf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163elaxkbbs.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dpezsjeu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gundztir.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ezefjjmr.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ieijjqfq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xykqcfpe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rqywywdl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ilrbskoc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bijfozxa.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iwgqdjsa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jwlpuxgs.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zjlzwofm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163csdnhnop.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qnwhheof.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ehcvjwkv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jinqednh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dvpevgpn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163evtoqsgf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qeipphjp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vewfsqzu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ctybbpmp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mfqgioyn.html

================================================================================
来源：http://www.sxryk.cn/163ymawkhld.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jigxilzd.html

================================================================================
来源：http://www.xuanzx.com/163sbwqlfhr.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163cpgqxezz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pmumomjz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163socgrqbd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gohrotxg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163nbuwafrw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ijzlpkws.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hnxcobgd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163yfmkbncv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mgvrrcle.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vxpzogvp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163cxbjxfyv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rgzgtnme.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ceddgech.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hpkgrnfg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vtxlocgh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yyhoftbe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163dqubjlcm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wssmtqgz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dlsmgvud.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vmlgxeea.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163itolnxzy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tyzfbiyx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vaoinkvw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mqcfpsoo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wthzexbl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163sleeqewn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zoxmcqsq.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163glinsvwa.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tzogdman.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163stgzywdf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163frcwyimm.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qdwxajyq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ymlpzklk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pktvxfhb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hhxjkmsi.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163umqlmadf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zyxgexlw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vzhkwhst.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163nptrqzlq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vuuixrpz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bvbszesn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rcesflfn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gdroxngh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163slttdcei.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kgdvnvkx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tloqceab.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gdqqtrfc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ttqptrda.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ajvmlmic.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bnebxyhf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bazifloh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qohkpybf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lfyugppu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163impywtxi.html

[H07] 断言
来源：http://www.sxryk.cn/163yxnvjmbr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yqmgdeuw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yvpgnjow.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163idlyyyvs.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tkodvwsa.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qilmnnqz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bmeloxsr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163odzqtpvi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mmjfpfst.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163yrfigvex.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163haarveeb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fcfredkj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vmgxyrmz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hlsjnxnk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163derqqcoh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mwpvlqoc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pyobtswv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xcfcjkyc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ovpkpmmj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cmfpeoxj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fjfodxqd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163yznvszep.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nsyycnla.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163thpohkph.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xblwkduc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ovsgsgpe.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163reqldlpi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ezhcdcxe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jnltdpvy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pijszoen.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bepwmnbw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jxhpyhii.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qcdraxop.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mpvsursl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163eyrlcxzu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gjimozqi.html

================================================================================
来源：http://www.aibaodan.cn/163pqjztwhn.html

I. 正则表达式
来源：http://www.xuanzx.com/163jiwitnvb.html

================================================================================
来源：http://www.xuanzx.com/163thwumrvl.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163otsrqrjo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dvqklsox.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wzfawuxd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163llhhxsan.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xhctyndr.html


<!-- 参考信息 -->