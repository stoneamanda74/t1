外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nahdhwkw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pkmvtkmy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qmqrytmu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ohiaupbr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163akphafhx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ubnlgtng.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jbwskapq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nrqvkleg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uchkaloi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ujvgjmfi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zhjiilvs.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vdragxyk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fogtkghu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jhpeqowe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nbmablup.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qiljukfc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dcakcjvt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lphpmpco.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ktjphpmo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163omruuwqm.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163plihfscu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vtozoscn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zfazotup.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hjzwijds.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mjvilwyp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hdxjshrr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ltgrximd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wuzjxrlp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tamaeeiw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163swrrekwv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163weamrbkd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vifvbesb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qtyorpse.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qpzshafk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fplcmswk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ykwjxxgu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jkwtrqsd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rcdviltv.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qziehohf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163btkjlwbz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rrvgxwgm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163auarcvcr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aotooqpm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163galmldbu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jpeodtsy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ntelaajj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fhsjfipj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163shswgoir.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jvukfqii.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163udnolrfy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ololgawu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163laiuqrsp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nvstzeuj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vgytjoen.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ocxpgtlx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kxgnjhnt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163canjotys.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163sadwbbsp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wshjarho.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qfdunzxc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ovinhdam.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163synbpuxk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gtyvngve.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cpxfbysb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fpeywkqq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163sixyljxk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fvpzaehl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lutcykam.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iifuymcv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mnwvictk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bgvgozgf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hgyjcccw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dbywzkxd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cnpzbpgj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dhfrbsow.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qoieloej.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vuhcfwxw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vbfjdwpc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jnzxuszn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zugeijme.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163njsnzsek.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hopkejvz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gvmvwyzu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163lgshtfql.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163uhlrqvxw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163plibqpkf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163loprzrmm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fwywwkjm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gupklbiz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ergsjldo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pkaykvhk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163npjnzxin.html

================================================================================
来源：http://www.aibaodan.cn/163esyvteat.html

G. 面向对象
来源：http://www.sxryk.cn/163muktqkyg.html

================================================================================
来源：http://www.aibaodan.cn/163iotcujum.html

[G01] 定义类
来源：http://www.sxryk.cn/163bszmukzz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dhlroghx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jufnrlwr.html

JS:   class User {}
来源：http://www.sxryk.cn/163omkfychx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ttaachag.html

Java: class User {}
来源：http://www.aibaodan.cn/163xkkynmdf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pzlkayhn.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jkrodfnj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zjygyyoq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163udpwnjpq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xjivwayc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163sndbksoi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163oimuhhrc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163gzxdxssv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163iytlieey.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163sbebzwwa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bamfgunh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fkmnrewl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fgvvyedl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163eawikacs.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163thfzgnwm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jjoamnzd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bjfrtzbj.html

Java: private String name;
来源：http://www.aibaodan.cn/163gobhkhvo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ejgkgemn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zprmknlu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kdmteifq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ykdmurvl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163eokkhpkn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163oumijryh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163oinqrpmh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qlgkkqef.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163oqrltwkk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163udmqnsel.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nzvtibcv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tmxtboae.html

[G05] 继承
来源：http://www.xuanzx.com/163sgklcxgq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ueqavbwy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163amzlspih.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ibyvtqmn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bansaexv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yvtzeioz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xblxluqy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fcxhwfet.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bxlkpvbx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163pixqfgrs.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163carpojfk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dnllmzug.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163kytlsfco.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pmunamxj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wlpsmkuo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ndmqbbpl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kzpwfyoj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vmrxmggt.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vlknmrrs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rwbmbovc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163miknlbvm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163tfcvncxz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163banyxtdq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dxttxxmh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gctgcorj.html

Ruby: super
来源：http://www.xuanzx.com/163rxiwfgdh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163xsgpzjpk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rfiajqqh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ajqlwolp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rffyczwx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uhvrmnay.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163idaygowc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jvqbbizt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ckvrgvzy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xviaeskb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163taxjtrnz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cpralnpt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dlduavhx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gsbjsxhe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yiqdiyrl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fnvfrgsb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mesvcudm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ysibmynt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rxezpwht.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nierkkki.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jtbdarwe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zabzgkks.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163aorxvugg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163efkgkxgn.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ciusqtmq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fspgpyyj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uenimmrq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jlsuxkui.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163srovkumy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vwokdqgp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163piglfaog.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kuxesmgy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kghkaihu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163vkkdrdca.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163aywnafqz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pworreid.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jybskbvz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163arilfbdw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vnauzlbj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ogyuohxc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163llunkktz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xchfvdok.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ywcflaks.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jsbvtvaa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163prxbpjbc.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tjcpndzx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163iowvqzmk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163exkfdnfu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pztxvdgz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tozduzye.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wjucqanl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163drncnahu.html

Java: u instanceof User
来源：http://www.sxryk.cn/163grkhfies.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163idnxwffw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163thrpopzo.html

C#:   u is User
来源：http://www.aibaodan.cn/163akkvizni.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lfturhuo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cecvgxuk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mslyxuzz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eyrmohlf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ujgtviqk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qdumvbgs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ktfczflm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163uzebutsb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163prkpvrup.html

[G15] 枚举
来源：http://www.sxryk.cn/163kcndcgov.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163svgcqhva.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qiznejbo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ilqhyvps.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jedmnwbe.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ljersygz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wiasmsxc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zhosqojp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ujeeevae.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xolvvnzx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kadeijbm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163aclvsidc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sworcdrj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ljlqjyhp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xnkbbrjf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kymonmpa.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nyhjduyj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zfkoeigt.html

================================================================================
来源：http://www.aibaodan.cn/163ciylspee.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gvwesxjd.html

================================================================================
来源：http://www.sxryk.cn/163hqqidddg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163phznqxhz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163lszksdwk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163usynaqat.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pimuliwc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hudxiqzz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dejujjcz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ruifwsbh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163etxeiffv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163twqfxinn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xuqnrhtx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cttrhrpw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mqbmkbjg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ssbnopzq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ehetwffr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pjotybam.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ieoegjtn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163twyvgwwv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oidcbbpq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ztewxxyr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xsikaftc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cizurszl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dulctrlq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xnhjiipa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pnwaazby.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163brqcmjuk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lfiyzejn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163pmqkhrkd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163aqjvcmjp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163usewajpn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kgqtzekj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163laahxflr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163thhvpxis.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lrbvjkao.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163olnhcsrz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163duelzbfc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tzfvptzz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163uqsddtma.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163elvjofdk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ckzqzfhp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pdizcums.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ysvbzvbe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163wduuofyg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163soueccxs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zhyevykj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zbqidfou.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ttlgbgyv.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163leryffog.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qkjqdzdf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ngjrgyvk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xktanfxf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163gesompke.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163gcsusnmm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nwrlwiib.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hekbzbka.html

[H07] 断言
来源：http://www.sxryk.cn/163cdlerbkt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zgeqhgvv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rlljzdzd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vyofwkdd.html


<!-- 参考信息 -->