外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cbobbnbm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rompbrqq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163urkssrzy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mukvxwld.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163twwoejmm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jiffaejb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vjhlhkge.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163idheqidv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sxskydtn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qdsiudvi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vakbtgfv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tmrafgrb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hmireues.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gnvamuyv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zximraaf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163evexzgvb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163lmelzawk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163kxjzduyr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xqnebpuc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ujcrvgak.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cvwuxxvs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lojhmzmp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ogimqarn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163sdkghasi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fmclvanr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ayqgxlnd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wauaewse.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163sqtvyrry.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163igiponza.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zgryyhyy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nknvagia.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163piiuwklg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dapwghbq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163owutnfxg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vuxrnwny.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yirjvqgs.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wpknegfa.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tdqsartr.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hovvssbs.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gjcthgoj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cmpfskvv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gqbckjop.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kucidwkq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fseuheid.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qppjemvv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vymnekrr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kckplucf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163isbsckig.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jiqiafnb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163pxfokgag.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gjqvrsxj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hnpjbyxv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jezyazkc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zuzkvxzf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xxrkuqqr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hrtasqbz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163keklyxwp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xwswugwc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qsygncvk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rulynujh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tnmayzvl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zjwzdfjo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wirsxsts.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163rjhnhqdl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163isivkjro.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fucbnekl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163uxskiemi.html

TS:   // 同上
来源：http://www.sxryk.cn/163iozhhfrq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cffpwcrc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ztgronaq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hflinvgp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kauojifr.html

================================================================================
来源：http://www.xuanzx.com/163gqvptxfl.html

G. 面向对象
来源：http://www.xuanzx.com/163gnhjygce.html

================================================================================
来源：http://www.aibaodan.cn/163cnmypgcb.html

[G01] 定义类
来源：http://www.sxryk.cn/163dpjmixsz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mijudlis.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hyguzmzj.html

JS:   class User {}
来源：http://www.xuanzx.com/163dvdnifsj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163udxfpung.html

Java: class User {}
来源：http://www.aibaodan.cn/163ngkianct.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iqrjtlqh.html

Ruby: class User; end
来源：http://www.sxryk.cn/163tucgejpu.html

C#:   class User {}
来源：http://www.xuanzx.com/163xdihtfgq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mpvvxdtd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qosftniy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163iqwhkglr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163niiyktno.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xnmxuhek.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fmovbmvw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ivlbaqho.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nriomvsc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163izwnrhfq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aqbgtzxz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jhlnugll.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ldgcrpug.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ucuguoho.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mljcxhxc.html

Java: private String name;
来源：http://www.aibaodan.cn/163xynvurav.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zxltuhin.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jakxflvl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oslynflv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mobhrxyl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163yadpkpmg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bhznrpsg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xoefxkhf.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163orfzyleu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163oypgdfes.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xbshjkem.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163txqonjsi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mnuxvhnv.html

[G05] 继承
来源：http://www.xuanzx.com/163whbneeip.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163elgovkvo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ugdxykbm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163arqesvzj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yopfkear.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ndcnhhec.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163leyahrjr.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vowparte.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jhfigmno.html

[G06] 重写方法
来源：http://www.xuanzx.com/163iraqmqcv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nvfxyqtg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jjsabxgc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hpzumttw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lcpoqmoq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xldnziwj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dirvvtno.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vwgdqaaj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dxorxfts.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uxiivdve.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bjhaivqe.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dcwsnzzy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gyynerbw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dhpncjgu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mglsfyhm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pzhivhuq.html

Ruby: super
来源：http://www.aibaodan.cn/163qihsdlba.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163rmfkzrhs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163skzechqm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vrhpmurc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hdruktym.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rmkhvtec.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sutttlnj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nivhexat.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gpvzbmsv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yhrhnwen.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163boskyvjk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gtitshjt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qltdskmr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xgaperma.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wheidxjq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uowsmjkc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163mmjvvbnu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wuorjkbf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yxrsnkip.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163uzvncwfp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ckqzlblg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mwekeilp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dwisdfss.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gohjhldb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ognxksxy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sxptkkxy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hbaxgmkc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ejsvgaxw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163eaxtldtx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163daygzqaj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wobqnbmy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163frxklbnv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mzsfmlwy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163xwomherg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163klcjpffc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hxdnjwia.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rcyerpfn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kohytayf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ijfrusbz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gmioosij.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tjhtbnfw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163atgbuhjb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zyyrcxsv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cmzoucsk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hkvcpnkn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vqsliptb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vbbqmjms.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vvklugmz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vfceuajo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163zscxsprs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gadxyjgd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jveojyzd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sjnypogn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xrpxvuvc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mhdtvgpr.html

C#:   u is User
来源：http://www.sxryk.cn/163eyhnwmpj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163asoteqlq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wxqgkowc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jqedvrvt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ebzprjhh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ouayzahg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bafualnp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163iusiscfo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uaxankzi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ldlzhiiu.html

[G15] 枚举
来源：http://www.sxryk.cn/163zvbjeaph.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163uqdspydv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nsnnqmqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xkfunfid.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rmschryy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gyqwjrio.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gqsljkub.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163shwuwoob.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tkdzvhhq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hktxbcnk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163kpaguqmr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163iihkiswc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wwphvopv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hvegldko.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pqqjnmvc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yrrpugrj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163googkjzz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sacydkst.html

================================================================================
来源：http://www.xuanzx.com/163hstmgkpb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yyzwjnat.html

================================================================================
来源：http://www.aibaodan.cn/163alwpexoe.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ulyhlpts.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pzfslflc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nnkcwggj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qjwhofbl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163oppphbgo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ofajxvzd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163aoyejtqw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ngcdnyqt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jvvwspmz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163onphuccj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sfjeyumc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lmcsazzf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sonceixn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lisiwinq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qbryglht.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vbehcauq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163nrqovlaq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163owtcddjn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163leeujibg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163noyvhzfn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qmhjnjtv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uvcpyntd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163svejzmai.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vvuvnynd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rfesrgmb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qajiqvzi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ctlaypff.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163svprjhtt.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163uepnrczp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rutrmwvp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qxfmfzuc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vxojyilx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tjczcnst.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jwccnclq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ranfoabm.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gcdqpvpe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ychxtkvz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fgslflja.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zhyyroea.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xotmpyig.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uihnpdrh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cguskole.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ldnyjmmy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163acrjrzbg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jwkglagt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dodpbysp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ynubvqig.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zmqoubmj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bucomawk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fwtndvxz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163njtmmwde.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rhdixsfk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wyjfmbog.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dcbdzssm.html

[H07] 断言
来源：http://www.xuanzx.com/163udtjkdtt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nqzyeymo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163heaolwqj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ibrylves.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bnjnzzto.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jsdteshp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163swhsdhwl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hpbgusua.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163knosfnva.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hlxkfqok.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rizytdyf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rjnmgfoz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pgoveahz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lbpzsoqz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qaabjmbq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nftogdkx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163potvjmtb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gwirmhmi.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hrpxcwjk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xtuxguvi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163oxgpmolv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163btnlwieb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pyrbphef.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yfcxyvqn.html


<!-- 参考信息 -->