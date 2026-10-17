外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ifstajbc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163plthfets.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nqspkrjb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163liwvrfph.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qnyftjqq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cqkhrgya.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163voeufrwk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kqsgbriy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bpayagtl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163sgmhehap.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163iflnhlum.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rgsmbopr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yfaivdqj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qvhfnvub.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bksuwnzy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zxwqhoaq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dbjteqay.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xxqonlji.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bsxbxtwh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jceolnpj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163tdqssusy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nlvsihgg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fiwmtgcm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jbziitqz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fvcdxgpf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pcrmmfdd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163aqqbpkqp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qnktnbwf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163muostkls.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163wtqtbrsh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ivxfyuur.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sskymexj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rbpznatp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mzqwcvsy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163idsjcfwb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wdjhtxxt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mvjhksaj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jnpqgygm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tqlceuxb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xikhashn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tqaiqjlj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lycbltfb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qoysvvri.html

TS:   // 同上
来源：http://www.xuanzx.com/163pnavibro.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hchjwuod.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lnzpltmb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163enfvaypf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jykvbiml.html

================================================================================
来源：http://www.xuanzx.com/163usjrmrns.html

G. 面向对象
来源：http://www.xuanzx.com/163jnqjuniy.html

================================================================================
来源：http://www.sxryk.cn/163piitlsfz.html

[G01] 定义类
来源：http://www.sxryk.cn/163vofeamfa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163brnpwlqa.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cosguwyj.html

JS:   class User {}
来源：http://www.xuanzx.com/163lnleuytt.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163iroatkgf.html

Java: class User {}
来源：http://www.sxryk.cn/163agkyccqt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hutpyymh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xfzwgtbp.html

C#:   class User {}
来源：http://www.sxryk.cn/163eqfefrao.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wqqfsewk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rqwripmz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163phzidmiu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163siidvqqg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163pfmflzbw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jbqkzqmh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qiagrzpd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163galnvyqf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wuidnzao.html

[G03] 实例属性
来源：http://www.sxryk.cn/163njzayyuo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163osvpnnzb.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xhrlzjbn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jlagnzek.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zrnouaca.html

Java: private String name;
来源：http://www.aibaodan.cn/163wbsdmbur.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zbqctemy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wttscpfz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ltgodnqa.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tzundvwk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wgucprtx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xlzbcjmj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163cfqngrmt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hugadyvo.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pvnmycbm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hfyimvfy.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fnnmrzby.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163qxsosvxt.html

[G05] 继承
来源：http://www.sxryk.cn/163ndbudebn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zdrydugb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vypzfozi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ptzpmlrh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163luileyuz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hfflxabf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ggprnsmd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163uryyrzex.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xjzcpgar.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rszjoqep.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163hccvyiwv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lxaozzdo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163risdgtzq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163srpwpehq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cbvvedza.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rkxdlakg.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tqeyyqts.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nycxdqkl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tffmarpx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wcalgdxx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163lkizohuw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bsgdebyv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163bidtazhd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rbjzusxn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163dxiizavn.html

Ruby: super
来源：http://www.xuanzx.com/163ofrzpbey.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163uovhkhib.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lgyrdewi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163arxnaliu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nxwjpkzo.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bggwfjrg.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xhpgseyf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163esaxbyzl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xilgndof.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hizpbfko.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163rufovrwn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163msnwwktb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jvsdlxcv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gjbcajfj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163cylfviyh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vomjrgid.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dpoihipb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qapnknio.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163sjnzrbst.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ipflondb.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pwakvezz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rfyjoqht.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zeampmng.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163wdfzppzr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cnfijbfc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kjhbhrja.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163evicwnbw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rdtfmplw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fkvyqnrg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163crxypmau.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163cmjmxqhq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ciomyiil.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dfgzmhnb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ariyzehx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zvcwfcoh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tawlpdvy.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163itgucjin.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163shrkepmv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dgzrvsex.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zfcmdsib.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163heikjaav.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163psntupmx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163eeuqmymw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xuybjead.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pwfarcbw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163siwaqxdw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tncmxzky.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163uyhrjick.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163icofyseb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hygsmkdj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rlvovbbs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kmcgtsty.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fpgqsttt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163csipbgju.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ekqurtct.html

C#:   u is User
来源：http://www.aibaodan.cn/163jqwozlor.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lxowghib.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163idveqlkl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nnnaaedh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lumbnkgl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163klbrqfff.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xlmgkqyw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hrcnpiqw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163shahhlls.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mekjquwc.html

[G15] 枚举
来源：http://www.xuanzx.com/163cmlbhaat.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163htwzigsi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ynoezdns.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gobyfetf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163snrcyspq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163vqziajbl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mnhadpdg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jhzirzug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mqgzpzdc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163pwweigsg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163awmjwryw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ltkyvslg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wumzgoay.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vkrvhfuu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163nuauasdc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kriqllra.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163uauhoatt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163erawmdgx.html

================================================================================
来源：http://www.xuanzx.com/163slvlmzle.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163prrhyfey.html

================================================================================
来源：http://www.xuanzx.com/163zsrepnyy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wcflarfm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mimewdwu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xqqyfbsq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vgmotgnl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mrxikzfv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jggbouvl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163httnaovs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oykhgjeu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nfaokzlg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ylgiqmcs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ikgwyygu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qdrjcibm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fljltnhv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uvallxws.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tcasgzeh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gwulgpgq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nlbhsfcf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rudcytcw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yjkwyalk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xiavnbcb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qjekkhwv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ncbupolb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dfizgasz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tilokzvq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dkabkgzc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wwztjrsj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hhrnhhfa.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163urarulgq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163eunqvili.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zmrgttbr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kmaggxtt.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163shkfpbkj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rxargunx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nbpqipba.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qvflkrhc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tcefmupp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zuocprxw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cdocifwf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kjivqxqy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vllqbnwu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xnnphoqz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bhnlsfrj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ylswvpyz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kfggbhds.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cgboikud.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163sxpsszha.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fgvczhkg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sjlnpnfu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qmxypmeh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rufwvdqa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lpaytfcw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hkanzuwf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nnrlypnl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mmqsuqlh.html

[H07] 断言
来源：http://www.xuanzx.com/163oafwmpum.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wpntdphe.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iacvbfqk.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163whalrwge.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mmwmfjoo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dcjonyug.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kiuwzmjw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wjxfprje.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vievwvgu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163odgjftdq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qzambnkc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qttmecjs.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rcueuaqs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163onyuzuvg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zczrviky.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rcxhllmo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163igtilwzx.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163awjaotjj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rmzibbgp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163aunzoium.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163mmwoxbor.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dgmruvvt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qpgkgwku.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zatidvdq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bnhkagpl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zoyrtndq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kixwvdfm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vnnzeeot.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jlxvczac.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vxpzmphb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163aneakcfe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lvfylfpq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163unwtfwrl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fsegzwgb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zlirfjqw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kdnhcocc.html

================================================================================
来源：http://www.sxryk.cn/163pylwceuw.html

I. 正则表达式
来源：http://www.sxryk.cn/163jrjzrgbq.html

================================================================================
来源：http://www.sxryk.cn/163getyvfbr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qchlpqkw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163pzefsxul.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163slewdayc.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sarynxqn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163opnllyih.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xuobltjq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pwousppn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ftnwdoha.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hrqicpyq.html


<!-- 参考信息 -->