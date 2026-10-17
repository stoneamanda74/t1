外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ssqdmkfn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kcdnkdpi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tgdrzshs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kbhnyxwh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lsxozeig.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gcygysdn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zivhuity.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uaqxmkss.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yffynscx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rjzbhtbd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zotgrpes.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163edswgqfg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163neeswmwu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163eztbnjcf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163snkxxkwx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pxcrrqlw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hjifycgu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163twkrrnvm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bbvzyywb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jfasinnc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163evbowenw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hltjxtek.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zlbbuwjw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mgmruaim.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jfptgxnk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sajitotd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163racdppdn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fubxvbvh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lvfexiod.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163cieqgqib.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wgufdeal.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163yysivxjl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163cgwmbnjn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lpzpmyjk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rvbxtrtw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bvdqseej.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xgzlcbcy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ohnddpgt.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ajgpqvru.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oppwwlgi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nmbttivc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wmysdktx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sysuxetn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pdijfkau.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pnjbgtkz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qzpbweev.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uebakkmw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tdswinqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qttbegjy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ndcvctiv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mgxtzusi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fsvmalzu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mjdvwqtl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oynnkcnw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163frvjtzrl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lhavtyko.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mungsicq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bavehrxg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pfkctejy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163myjiqclv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lmzbogcx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hnpyyikl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hkhahidn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yptmytnp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ocomsphv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wvesealk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163aqkjugnu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oqvrvluk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fjvkrofd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163sjsvqkuk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nrzenssj.html

TS:   // 同上
来源：http://www.xuanzx.com/163fkojzcrr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mzoqrcrw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zxljwjik.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163noygpskf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hqgjhhvl.html

================================================================================
来源：http://www.xuanzx.com/163wetzchon.html

G. 面向对象
来源：http://www.xuanzx.com/163bwhiwljd.html

================================================================================
来源：http://www.xuanzx.com/163byzshbye.html

[G01] 定义类
来源：http://www.xuanzx.com/163ldfajvxn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hzsmgpit.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ryoepnjk.html

JS:   class User {}
来源：http://www.xuanzx.com/163bszszxun.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163sgjyylua.html

Java: class User {}
来源：http://www.xuanzx.com/163vilucbix.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ryvzzbbp.html

Ruby: class User; end
来源：http://www.sxryk.cn/163maeunewg.html

C#:   class User {}
来源：http://www.xuanzx.com/163pmahmjmz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163szgalvdu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ugcgiiwy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iukyqfil.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163paieecae.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163pehecqjp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jpldoqdb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vzhwqmvz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fsrbsmat.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163tgbciyph.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gsqdjfjt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lakjglut.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163etdbcfha.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zubbtdlf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lwbvcuyt.html

Java: private String name;
来源：http://www.sxryk.cn/163xjlqfnut.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wjzsmizg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yskqvlov.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gxqcqzhc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163bjdladgo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rwifkuut.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163eneckztk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ivoirdng.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nzigotgx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tayjujtz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ltedvmcn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rzalzeov.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mnnncorf.html

[G05] 继承
来源：http://www.aibaodan.cn/163ogobecmn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hdgaqglc.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bgqamdoq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nffuekfm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cgmlkqca.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163tpnnvptq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rzhvsojw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sbdalfvv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163khtlfwaz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163itdvhqse.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gmofzleb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pojvaopg.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163twkbfovq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dinnnysc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163adtfkxha.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qzaqscog.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hjguizsr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lbrwvgpe.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pgnuznxf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gglrcwtg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ddbvgmvj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gaiviolt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vyrndsdu.html

Java: super.greet();
来源：http://www.xuanzx.com/163qapbrnbv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hqtzjfng.html

Ruby: super
来源：http://www.sxryk.cn/163igxfyciu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fexbpfos.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163esaaobdb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163djcbfzmq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xoicmlka.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lzptojjc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hclwydww.html

Java: static void f() {}
来源：http://www.sxryk.cn/163yveizakb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xfnwelrs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hjvrrqni.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ywjgdlcn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fjmbfawc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dmhkxoku.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bkhqhcaf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zotugvjc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163smeyjmpd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vlxbrdrw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kvuzvqty.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cfkqtjsj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163grptfqbk.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ilemlwqz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bvlnfbgn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bhjhcssd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163opxkhozx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zcydbfdw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163okkzxfmz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lpssaxro.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163udfmdnum.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163gulxmdxk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163eazuhrez.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163retozwcm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163grezqfcg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pjejbfjj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163utamgakh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163sjfbdxxh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163enicazxz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hwjpiliv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163viwfjxck.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jzphqals.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kjnzvgbt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163delbjgux.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zzfbijhs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vblpcgnv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ljhmcfzj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163aoulhrxf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hmhkjkxz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ogvvstnj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iqxftjes.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wkcbvmof.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pwvxlnjf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bqsgbidl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cpistblk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ijgkatrs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nmewehwb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oohsrhqp.html

C#:   u is User
来源：http://www.aibaodan.cn/163rreudaty.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ipwodkxd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bvfujegv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gvkduivi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163evdbqlyh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ijxgaxrl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163tghkoccl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mqxmjovm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yyoiopji.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163qpbbvpfh.html

[G15] 枚举
来源：http://www.xuanzx.com/163ccyfkeko.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dgoqzzfw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zdisgiti.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zouqmpyz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qoxhiezu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163sdhbzuhm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hzouyapr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163taaqucdn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qygtlzij.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kgkleimd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sknfcgkn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mkndheth.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cytyiwpy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tkelqulf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ebmaowet.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163xnmfiaih.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xnvdgerm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163drdxizsx.html

================================================================================
来源：http://www.aibaodan.cn/163dqoyucna.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ezpzzstl.html

================================================================================
来源：http://www.aibaodan.cn/163aclwytbm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pmckjifs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xesnfead.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163clollqep.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cilrxkso.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163rrwcvfkh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163wziiemph.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oobvqxmh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163oxmspnnb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lvkhsytp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rhhldtoe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dobqyqbu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aalxnnph.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tubiidsr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xeijwdhg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163czrlbnxw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zukbxzoy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lmoxfbqv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dcosoyhc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pagndhto.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sotqvuob.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kmsfxawl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gvfikwzt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yofixrvz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gzzpeudh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ltogkwlx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oittqumz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zmhkwtkf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163icoymmfp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kjmmpzfh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163sfvawnbj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163svqoqekp.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gqbngldd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163irvpuzbo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pdyhcwbc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rfrhrjzp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163nsdhmkvh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qgnyyref.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xpdurapw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163iukwbwkr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kwijkexe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aqupyxci.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nqflpoze.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hryzyuxs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zzlgxybx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163osjlbkfp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fwnjmtvk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zwswngka.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zdvhvilf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vucqusmp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163evdzvjfs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163efvinmrc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eydqxdsj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nqbpupgk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pdxdpere.html

[H07] 断言
来源：http://www.sxryk.cn/163whloinoe.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vccjoojx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163crzkclzb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163sswjukid.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ypmlwsio.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163usxqyird.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163upkqrrhu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163cvzfuuon.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jgjlfdjd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hotwkyga.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163kmdxgijr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xthxrxcv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yfqjlqtr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gmarydgt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tndtepos.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wukibbgr.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wvhrpdrf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bdaukwpd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ypwnbqtv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163eriwbmzu.html


<!-- 参考信息 -->