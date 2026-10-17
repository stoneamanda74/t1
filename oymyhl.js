外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hoavvetg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fjqkhfed.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pfatnoll.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wxndsjqx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163urjsgbas.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wgmhjbzd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rncjyiyq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fxrmtwvm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163flxydrkn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163iyrmvhax.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163iadjpzsi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vlfbuduf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wkqanhyo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163plfsnazy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163veodqdov.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qrvpcoez.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iabgwidz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163yropbalj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163sfveyeee.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hfesgevo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rqwkbydi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nomyqhod.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xiejzevp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163svkfspyl.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rsvseqrh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cdkydvzd.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163opcqxpcn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hjzvospx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163spdfxkzl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sgabijey.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163miyaaycq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163aehtfcjh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mbunxnzf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163titgawaw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ifynbwpu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wrcfshkm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vmnzsywq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vakaascp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wskqqtum.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eakhetiv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163exhsjewy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kofccxzf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163auajduoh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uuzcivfv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mfldhjbm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163enqvogeu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xxowokpw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163aqwciffg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ahulquus.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wqjwtzcn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xjktcowy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163arekfvtw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vxhlwqyk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163evcjhrfc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vxhntgrq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wfqabycl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hmrczvkk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iorwuyni.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163egocsqlh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163btnrxrcn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163thjqpofv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jdycmygx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dragizca.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163biepdbel.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163bqcafrwd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mcouxxxc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ipjrueyg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163togwlksn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vewqgdyp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dcrwzxtv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tatpkgdr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163lssmewau.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vnythzeb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yvygiybn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163pjmtoskh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tlstvred.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nlmxmuzh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163oavlohym.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jofoeacs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163nmcgyosf.html

================================================================================
来源：http://www.sxryk.cn/163ymocuxzt.html

G. 面向对象
来源：http://www.aibaodan.cn/163ybohxyjv.html

================================================================================
来源：http://www.xuanzx.com/163fnvusfma.html

[G01] 定义类
来源：http://www.xuanzx.com/163cewofhky.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wlsgmvov.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vfrjtjsl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qylynedz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mnyjdmdx.html

Java: class User {}
来源：http://www.xuanzx.com/163yayiqxvl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hhuotpad.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fxlqunxy.html

C#:   class User {}
来源：http://www.sxryk.cn/163phhintjt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xfnvwsai.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mcasnifk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tbznblfl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ufzfrbfb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163neyqlznv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163idzsjqsy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163arpggvmj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pulwhcjz.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gnanqewv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163igcgsenh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hykjfjdi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tdgzkmxp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163uczkkoyo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163msqlohhr.html

Java: private String name;
来源：http://www.xuanzx.com/163mlbcruiy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163alfxzqcw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rvueovqf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163oiarwkri.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gubclhuo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pcycghfl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pyedejee.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vzjcjhul.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lmffxewx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yxtsntnr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ooqrdfci.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qsbjirje.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ygpmqwxo.html

[G05] 继承
来源：http://www.sxryk.cn/163ruzfzpbs.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dlsyrwvb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163samiwaqo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dskmwuku.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rcsywvuk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yojifvyz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ssfizlhs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163eedlvrsl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tsodkbbs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pldaqmdi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ftdxgnmp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mctkziqb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163okwsyrfs.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rijrxhaw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163klsykjsz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lenffejy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lbdglwxt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ziwejvks.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nvovmciz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xvkngjbw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vmucqfan.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iatlcwev.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qhzbvxhn.html

Java: super.greet();
来源：http://www.sxryk.cn/163zelskcnn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fwejtqpj.html

Ruby: super
来源：http://www.aibaodan.cn/163nltgkmqo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pbvmvsuu.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163styscvar.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xgittlyx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163imqvciti.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kmplpxbc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sonjonqz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163scygxryo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pqffroqj.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nqckttjs.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qqzciwib.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gorifobc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wijngdby.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dbwwnknj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sucmhpre.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qyetpzdk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rairxqrl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yqprafrx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jpzubzbq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163useituge.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jvfcicza.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ynfrsrvk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163kbofbmar.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163aqkgzgpv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bxwkpruz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pvedieei.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163kouctusa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cbaidzmn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wgfcsqaj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163levoyqsh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ozbyfrdn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163sorfvoiu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hnjpfdxp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163cnidanqi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kwvnyujz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hvsllins.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ppsxmcje.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oxtxlexj.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163cbxbgmqw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xbmpqqgr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wqkigqnh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163uqrnvhsw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wnwzdcoo.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bboqyaor.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gatbymtu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iyadhkjm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ukqbthzu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hktkaftz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fswcxtix.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163eomtfvua.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pxnixhss.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vqrsodno.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163livejljx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mvfegsoa.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wmqgcrtq.html

C#:   u is User
来源：http://www.xuanzx.com/163kdkjxmte.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ixihcaym.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nlcwjxlz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vgehmmbg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ehevegxr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vzcryiyu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163poojxbdu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163phdhasrf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pmwmudjt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vlyosiuo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pqnpazuk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yzvreiau.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cdkciyyi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163koqpoaha.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pnrbnqii.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163opqbndxb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wnqyfxpa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jkopibrq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bwedcnzc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ibaaliwj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sxtgties.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ncpfmhmp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163urbovmmn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163inpoooii.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zgiudffr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vidqfkhy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nbxqupyx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kiwljyif.html

================================================================================
来源：http://www.sxryk.cn/163txzokppj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ellnomgt.html

================================================================================
来源：http://www.xuanzx.com/163blqgfdxq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wqfcxtel.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tpdvifun.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ybidijga.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uzljxwat.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jcmtxsyy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fexspuki.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jdfcimxw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rlewtxwp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gpgdmhfw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fmwovrzr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163aqljnaww.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163snhincqh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vobhfwly.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bplthwni.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wlhekexz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zmbxaeah.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rdprgwuk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163aenzssgy.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mebjnexw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dpfkucjq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163bzgnksww.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vyuijmin.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cmqtvigy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163uantdugo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ioiorjpt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kvzxhpqm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gjwzziep.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vtwyfnds.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163avmdbjsz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jwutcemj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sfrayqzn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163malhvmtf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rscypduj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xispcegd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kmbrqzhn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163glzccdix.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jxpvaaso.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163osnbaidw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ufqwwmem.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ixgcdode.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cnymyzaw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163olemcqjk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fkubtisa.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163azrbzkyq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vmwdcvoi.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kdviejio.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163iyvqgwni.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vzbuzssk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vzmvgvug.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wgteiegd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163nyymgkdu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ipjdthln.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dhaupnzp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jgusdsof.html

[H07] 断言
来源：http://www.aibaodan.cn/163tzwobhks.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tdsconrk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163agqtdmnl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jfivexgy.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163plpvlaik.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ygsbqjks.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qxompxbv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163efhxqlgg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jiejjrjb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zhvpndcl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ocjsjbbg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163sxuklpqi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163drdbduec.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gxrvhsrk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xvthjbtg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kifvewtl.html


<!-- 参考信息 -->