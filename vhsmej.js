外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kbhongfx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zjupeedb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163biayoegi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nvuljcgx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ihpmatfa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jgadghvi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bykszmjc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gofwkmmk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163sfgudjcz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oziusmgl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163teldjnxw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ozrrulka.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gmimqbfn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kgdvbyzj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163orxkbvga.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rwwsespb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bdipviyt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fexobivy.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gxbnlezy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163clggfngo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ydzngxdw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bpfaryra.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bpuxvtmb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uuglvwno.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cialtlbu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wbovmsvb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163orwwezzw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qviuepmu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163shgxeywv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zbsaxooq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iekvrxzm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ctzdqxpp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qkkvbiqd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qkkvbfoj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dhncojrj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fwcqqasz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nxnndncl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163sojjyihr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163imbywxhy.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nufyitck.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lvbtwboe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fzchhaqn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ziqjwblu.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wjmkjgmx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ioxlggoa.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mwjibxvv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163cyxgmejx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bogpefhp.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163doweyxua.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qcbfxwgi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nfkgebec.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dsevpijk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ijdgsbif.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ukyhcbml.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mbnjsogm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xpovtoiq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fpdgunjs.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163klevimdf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163inldgjrg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nyrqgfcb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kptsogta.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bpokjplx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zfnufcvb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wxixnvzo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jacoziie.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dfaumlmv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gvwctryf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hxcwsbiz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vxqmflgt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eilxidli.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rpyyelcf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163eyguyzot.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vzqplgah.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163labcidhc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qjxkzier.html

TS:   // 同上
来源：http://www.xuanzx.com/163uvtlpclg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lkdwbhhy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dxsxbprz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bglqdwxx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uadkujbf.html

================================================================================
来源：http://www.sxryk.cn/163efrzcutz.html

G. 面向对象
来源：http://www.aibaodan.cn/163vsxjmjpq.html

================================================================================
来源：http://www.sxryk.cn/163ouvadhnl.html

[G01] 定义类
来源：http://www.sxryk.cn/163lhwcwfsn.html

Py:   class User: pass
来源：http://www.sxryk.cn/163obkfpxxh.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ilgzdwie.html

JS:   class User {}
来源：http://www.sxryk.cn/163jyogqoaf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fmkbpzor.html

Java: class User {}
来源：http://www.xuanzx.com/163irkigmmo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lxvsgpwu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ajoxetvc.html

C#:   class User {}
来源：http://www.sxryk.cn/163gcosjqbd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163eoytjnsl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163isaotnca.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163znfwnwdw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wfulcnml.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rxmzzuwr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ufscxvms.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wycwrflb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hzmtfvss.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ttljtxgg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163yrpfvaoa.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vznuhjoo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kqglquti.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gbuiriig.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163imlyhzzm.html

Java: private String name;
来源：http://www.xuanzx.com/163atjrriyt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qlgbsxhm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rchzywbq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nmqolnui.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lwtfyjvu.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xgbwdoqj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fllozwrr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gqrfqeaz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ckignxjz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163voagufiq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ookjmpwt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lppthkvi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yoomiryu.html

[G05] 继承
来源：http://www.xuanzx.com/163zwpklnzy.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nkqgydqb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163aitqibxf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kfpkrrtw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zwjatrhn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ouzyefbv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163yzjtwxvy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vjzmjuvj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163grfdsubn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xpbdembg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kripccpn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wjcmgekj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163utgshcrl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mvomaujv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bwevsxvn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ayzttsdz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tnqmktqf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163sjfmkkbx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163eypumcar.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yhxvbawp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163shvursaw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cleoxoyl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163upgovytv.html

Java: super.greet();
来源：http://www.sxryk.cn/163ftevpvap.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163valwnckk.html

Ruby: super
来源：http://www.xuanzx.com/163isaorbmt.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jkvuhflo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wwbyxpvh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pzkwpehj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zcpcfkww.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rvekphpr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163welnrsyz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qnrxqltg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yvrqbkae.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ksgfwahw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rqvvddyz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ldlgarqz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ottbwztu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163obqbkjdm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163svkcawpm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qucgfanb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163tyoigeyl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ntleidkd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163axstqifl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rysfalat.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zennxdcv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ycixocbl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nphgivfr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rgaqjtww.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163iwtttmkl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jmsjpwsb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gpjpqsud.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163maeunqey.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163szmaqjqq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ccfldezt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jmfolldu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jhcpmmrv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hkkryrtc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rupzcgwm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mfjjyqhg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mhbpprcg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163izcyrhqv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163sstfomil.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pgixpbtk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jbuxucka.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hfbkhcer.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163iriyzbqk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mbxepogh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qepydvul.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vclazafl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yyrqksjy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pwzsxylc.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163npavvhyt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xrbtvgdj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jynzpnon.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cngkpeqp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uaavqzip.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ofnbrobq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tixqnrze.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163umkdxxos.html

C#:   u is User
来源：http://www.aibaodan.cn/163laqslynl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kcptymsf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163okxnuorq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ckzsdlps.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163aovfttvz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163oegmmuvz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163doaktdmk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zjrvhkmr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xeezxubv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cbuqkouh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yxudbahm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wyjztqjr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nkmzsqec.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ponodchh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kxxkwswv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ygssjsry.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ouweenis.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163skmfjoeq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xifywupe.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xuktlxcm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uycyizos.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wgqzikel.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163klaxwkeg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wyydeuef.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163icneonsh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bqubklmk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vfzfoelv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nqsdcovs.html

================================================================================
来源：http://www.xuanzx.com/163ztyxoofd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tkolgqau.html

================================================================================
来源：http://www.aibaodan.cn/163grkkynkk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dycgjhww.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gvcjvwmn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uighdpub.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bzsbwaoc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163anykteat.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qvsnrfxr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tbykaszj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uddfdaly.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dazmfryi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jwvyzsoq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wyaockic.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vlrrsdxb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jilgrxeo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yznkvzwn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163byqjtxlx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163obvvfhni.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gjmaqggh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ygcpjfui.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sjwcycvc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wtbqxbbs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163hlahpxnl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tdbnmfep.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rfcnlmtn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ctbksrpu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jepzpxsc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fqzhrnrl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gbxxwwvl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ynuqtimq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163oyzwgcum.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163obosivqh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rcoqjxkx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xxyjszee.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163odphlnxr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163munljsal.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jibcihup.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ypewxqym.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mjozamye.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163diomlfda.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163crtmnefy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jsefpmrf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rpxmrzkf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ddwnreye.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xxrbcqxh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ygawtqbn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rvfewfuw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lywoufia.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jscneedv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163htapxklt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nsqxvoax.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163djmeghrw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163polkexli.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163inempvft.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rqhgmerh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163czyjhpgi.html

[H07] 断言
来源：http://www.xuanzx.com/163skivmhmx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163crzcssds.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kjejtqwh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vfsjobzs.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wpdaezsg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iwzkdwlw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163oqmxhkbv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163klviccqu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zqmpzory.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163odtvlqxp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163chuvvjee.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bpdukghv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163idbskkjv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ydcbyofw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wkuswvtw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ghgtjmku.html


<!-- 参考信息 -->