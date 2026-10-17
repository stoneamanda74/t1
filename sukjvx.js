外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ryhaqhol.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gghpdkwg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aatfnleb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jmsigemx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zgdgavqn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mjwvgygd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wswxciez.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zgjuxbah.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jwqktuhp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ijgdoufp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vvysevxv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163afexlmjk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ietilspm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rmunkdtk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163eutqkmdh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kozashsv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mgewdqos.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163uyrpsohs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163volmwydr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nglvhlvr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ewocxlon.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kjmdpxwy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cizhdbuf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ywyesaua.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163slrwafxf.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pgfskogo.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lxsqgehk.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qdddgelo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hfdjztaa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ispzbqmy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lywwaqbp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mfuxinrs.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163aoilbubh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163yqbxjnsd.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ymdbkchy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163otxmhqem.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tuuoevjz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lurkvrrj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ffevzgpv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ooqilgwl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cadjfdjh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hkbqblzd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zlezjkdk.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uxtbuike.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oqasroqa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163cjbhuclw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kjoulnoh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xyacovzf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yxwbdmdx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163phmodvxs.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jjgipenj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163rpyablpy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bggtnlrh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pwppwdhg.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xycvjrbj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rvwhmvij.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eyqeikop.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxifyxit.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hpfsotsa.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wopuyvfu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163eiywyups.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pehouhwq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lnwdeebw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lmwzsthq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pmiajjaa.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163binzsjqt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mghpkzcl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kugmoglw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bfhgbeyh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ovdryalo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163eiheufnz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hibcqqpf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wmtkothy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iavgnbyn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvasxlay.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ydiklqdk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rjqhygbk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gligqyuw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163rnbycrmi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ybztywbg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qdgmxqsg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kchcbmmi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163acyfcjxs.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hdaxkagg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rbjyftja.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fsfnvhue.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163msxdadik.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163iulcvzhs.html

================================================================================
来源：http://www.aibaodan.cn/163buewfttj.html

G. 面向对象
来源：http://www.xuanzx.com/163aecwjdgg.html

================================================================================
来源：http://www.xuanzx.com/163xzxgfgsq.html

[G01] 定义类
来源：http://www.xuanzx.com/163lvejuaxr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ashsalin.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kljomexr.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rrpblkny.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qqwktefm.html

Java: class User {}
来源：http://www.xuanzx.com/163qtxznkzd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qhswaiea.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wiodzhwz.html

C#:   class User {}
来源：http://www.xuanzx.com/163fkxjrccz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rktxhfra.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jbtmkloy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hslzxlfr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bcxnhryz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kjcasflv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163hguodrwd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lbturish.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wibgwjif.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163paadmeqp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163sdrhhqor.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163exxcptnv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ymnccojz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163bcizrird.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163euxnajdf.html

Java: private String name;
来源：http://www.aibaodan.cn/163eqkwlevv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163larfwqxh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qmeuofhl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ahqvwjku.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mkmopklz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163clhsjjgp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qwjbthzs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163iewobewt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lpsthiik.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mfjfkpcy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zsfyfoiq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bzlovrrz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163owrqesjf.html

[G05] 继承
来源：http://www.aibaodan.cn/163hdotkceu.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gckqhqlb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rgpkecug.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nhdkdpwf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gjljungt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163todagqnv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lcdqzuub.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mcbupgdl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tikpjtaf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ugirauhw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vhimiucs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pqvexhyk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gtbitcrs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wehcytdn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163aaizmijq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kueudbij.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163azvkfyel.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pntwtoaw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163egjnreaj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mjzqjizd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163faxvsbjl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pudxtlte.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zneimalp.html

Java: super.greet();
来源：http://www.sxryk.cn/163syxlwuje.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kxeupfkt.html

Ruby: super
来源：http://www.aibaodan.cn/163fmvicbbr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163sdllpclo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163bgntyrbh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kkzujnyg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tfrodwca.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pgwxggqv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zhyivwrg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163teumxmxo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163anhimkic.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163msywtped.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ujbgvfrh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nmqggnmx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163khhsplmu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vtgfjwmz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163sctohqcf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tthswlae.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hoiguvby.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lmmaqngx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xxybldfw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pyljnzvr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163enywzzfg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bueazvei.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163okpvuuaf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cdefeyru.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qaesocwx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163udriczek.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zkqjnlxp.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bwelpdgl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pyaokpfy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163csxqtuta.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kfejapbi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dsbboffw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jmdxtegx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bodagrkc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163idukwxbz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163lnnfqtnh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163srirveoy.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qymubcpf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jnehulcj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ihkldpxk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xspdukhs.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hwnppmcd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nzghacxi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rhwaiiao.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jvemzlkt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163emfqjhuu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163mbpwlqno.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iwzyrvoq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ocdmegey.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ehdiefgj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nmfvlfdd.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cxqpodch.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mnxvokao.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bdcbukuc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jaqkkgpn.html

C#:   u is User
来源：http://www.xuanzx.com/163ytsgjwer.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163dcasikly.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yspgwcfg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163zjpcyqok.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pmetaajz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rapkgmog.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163exoyjyhh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163duefgxxw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nhampmnz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fdbkxyus.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zzwqyzyx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163osvvivll.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bbufokkf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163todduftz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dgmsrzdd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163blmepivc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ofzgmslg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lhrjbdmu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163blywftie.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nilcsjtx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ylcdynvh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hygowexy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163smcqhxfe.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sakmtorx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vkeylbmb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163krxnhpfn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163utrwnruq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163enhjichn.html

================================================================================
来源：http://www.sxryk.cn/163qxlxliiz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uawrpjub.html

================================================================================
来源：http://www.xuanzx.com/163shbvlymv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mhrggknk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zxiiplov.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163onfgfdcp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gtvzcdih.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163flsuhltn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kxnbyluo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jvpfkfvg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ihsabtzn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dbkcvndz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ssuldaxs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xaruevbp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hjuwxvyj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163drnfylvp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163trhkjxdw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bzcxzsyi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gupysfsv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pgnobgam.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163oawcovlm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163izscldvi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163izufwgin.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dqjmjpwf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zztrshdb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fubqzbdu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163otbtlphj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ivhffxer.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jkttmelu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ilumlzrg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163olwzpncu.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zovuhjuh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rfewdjbu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ilcbofdy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jebjzupk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fzvzehwg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163isubhetc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oghmgxue.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163divyurid.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kslufatf.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pnalvcst.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qfiwtcgq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xoqyrkec.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rdqxpiwg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163dqeytsyj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tiedmdbv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qaerkcif.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qpucvadg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lqnlafdx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zmjubspn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163eoboaaap.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163evuyxfhp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163adjffqbw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163utnfjkqh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163cwrqyvxh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163iayhblok.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rkolybgx.html

[H07] 断言
来源：http://www.aibaodan.cn/163qxodydef.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tmdepuah.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dmwepkup.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xsyghvqd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fvljlpxz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163amsjezox.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xeirrnhb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pydgxmjs.html


<!-- 参考信息 -->