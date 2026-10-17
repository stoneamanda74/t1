外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bcskjsiu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163lcucgfaw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zthjnlee.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bmstyqtb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xnrcuojy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zryhuocs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ibzxkyxl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dibyuzfr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ksfklwax.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ztljvgsd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wjltgktx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bryqshcx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vgoazryv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hkwiyonp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tzutpiyd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ackzgmjg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ueivyvpi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mlexdlml.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jhcyrtpd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qgvgqgms.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163sbgyyeou.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xshulmrl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vuhwwbgz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wzxuxhlj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dnlkpvav.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xkvtnpew.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nwggnaqt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163aykecwkc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ltfzosfk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fcokihaa.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hhnoerag.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ynhbucur.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hzfmpqrc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zjsrjflx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ezzywang.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ixtbsequ.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wqmihvip.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zeplrjbx.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163brtvunnr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wxllpxoj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kgfoekvd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eiqmtvei.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aufvxyzt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163iohsljoa.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pquvaewa.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qmgynuln.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fhbmuimi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fwkhxctn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cqfjfapl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kkpvgygg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rzhhwxeb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zfjjqlpf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163akykmzhm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zocopnjg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dpvfkqqe.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ikwvnkrn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pcarwffe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163zpvqteck.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163julhazjl.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163thvikuwm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rixdgofv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qtdeufki.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zqtqxstj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fqxzayyw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ndckaynv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163iermrjqp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ulldutjh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zesgxrky.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qheegiwt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qlcutnxo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fwixxjki.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zlelbnnz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rbarqhij.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xhjcyowg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bcqdscpo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ecaxcykf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qwjejtul.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cutqyvvn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wzvmipbc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jbtzoupb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iutrgvkp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163adgciuku.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hnierrbf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dtwzzkzs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hjlocuxr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gxyinjsg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gumcqevt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vzkjgrio.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ntemmcyu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nkcgzaxq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163boafqbex.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xqkokohv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zztbrjla.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hnoqcosk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163byrqwhty.html

TS:   // 同上
来源：http://www.aibaodan.cn/163sedgclnh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163qeypyvdy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jzveagfq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cnbrtziq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gzctrspn.html

================================================================================
来源：http://www.xuanzx.com/163svgfkxnx.html

G. 面向对象
来源：http://www.aibaodan.cn/163arvbqdlr.html

================================================================================
来源：http://www.xuanzx.com/163layiaewu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163dbsuvwhj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bszmowjc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bfpobsde.html

JS:   class User {}
来源：http://www.sxryk.cn/163juwdebhd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zadpnnjw.html

Java: class User {}
来源：http://www.aibaodan.cn/163cxgedjts.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163exrlzfgc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163izkgjwxy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163svmvlmvc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ixyysnza.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tczblpey.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163npwgmvbv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lefpzjak.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wtdrpfqv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163idaedule.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uaioqapz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jcxpdxpr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163urcpzkop.html

[G03] 实例属性
来源：http://www.sxryk.cn/163deblqmnq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163avghjjjm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xzkzpent.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163sqitdqfm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163slarimtu.html

Java: private String name;
来源：http://www.aibaodan.cn/163csiecusw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163aavhuhqy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163atpakogl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jfflpndx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163demmcvjc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163eddqdikp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ccnimluu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wopngjaj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163sltmmagj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ozdebnox.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163czckgrjr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jjnlgmwb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zxjbbvus.html

[G05] 继承
来源：http://www.xuanzx.com/163dfccmlbh.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pejisemj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163oyazvixq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ajrodqrb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lzpxkaag.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bokmrrlm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qwvmqtne.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fmjwzbsy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mfgmepck.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sqeffkot.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cexnngln.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ybjbbpos.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jwvqhyle.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vjoqkquk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rdlmnajz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xkrcquzk.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jusuthti.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nnxbymrv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163poynccak.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zsboqpbw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rzdhvzso.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163xqpdfyot.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163acntsaps.html

Java: super.greet();
来源：http://www.sxryk.cn/163lnfrjjkm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pajeosrb.html

Ruby: super
来源：http://www.sxryk.cn/163hscuisrw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163rwkvcqxn.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gzyditwi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jqagykst.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hvrfslyx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163axqzrywm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163demeakkc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wygxakfk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ctbnmpit.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163utcoqsns.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fqatigld.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lgmnrgjd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cgvjyqhk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vmbtehxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dlmslkir.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nmkkhedd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ukyjikvn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163dpmbfbgi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jdzbyrwc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eomyltlw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rffhwepv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xfwgofug.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ebfhjhbv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163uvwspzdt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pniihqcd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zydrphqd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163bhdatlnd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yvgvqhor.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163snelxcjd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163znczlnfh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qopdmsjd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qhymzsmc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fmqfnvag.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vxfkgvhu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mklyztwm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163psndncfo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wgrxwriu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hdmzlhyg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yvrfzdqe.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163sagqnood.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163akqpzduy.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kcxvnast.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163amxrffhq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zwpqheed.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jmzvzjqg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mcfswfba.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163erzhkruy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dotqsxpu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xlkudqmu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gdfozqbm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rqwsspwv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cqtxtsdq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163mhqokhno.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qwjsdyjp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ugswkcku.html

C#:   u is User
来源：http://www.aibaodan.cn/163jngvupze.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xbfafowh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lkboqyzk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dnswxaoi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163tcocpinl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uoeahoez.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lvdlrzry.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lksbptle.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xxrnrolp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tbuuhzkh.html

[G15] 枚举
来源：http://www.sxryk.cn/163hciivycs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163oylhhtnu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xsnzcwek.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qleqvkle.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ruwmjzea.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163crpyxwxm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gihavrxs.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gexxgfhf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163slgiwxza.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jerwquvr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hhjyprsn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xwwmphgh.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163efunhirt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163aznrulrv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ypmcebwh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ittijuqv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xaykksvk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163makmdtqa.html

================================================================================
来源：http://www.sxryk.cn/163gigqdiau.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nhnameve.html

================================================================================
来源：http://www.xuanzx.com/163cnqwqwrt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163onhwehen.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qecdpwzy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163viqpnyxh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ekiewuko.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lzdwcpoj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163aivrbure.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163izwievuw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ylktotpl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yivkytcm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ysxcrfay.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tujjvjuh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ggnzkevv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yorjfnjs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163spkkbvnd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163haaojrxw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163elqxibph.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cpgimidv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kuktbvgj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kdzdvopj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dnouyeux.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ysshxuta.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tiiimzqc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163poudaofl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jjfxubfj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xkhhyrrp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vpmeirmb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aklpfymg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wvzjhktc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163plxonojf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hnpwewjj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fyquzzpr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kcbadhju.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163gjokcgfn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hpxfphjh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sfmqduzg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rdotoyme.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nipgzdmb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vdpodcku.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163yirmgqtg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ksbvjixo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wtzeazfy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hcixponn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nwxtters.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ybgeziow.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hzoodete.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wcddsign.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163uyazmhfj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bplgblqq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gwegdmar.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vifzjisz.html


<!-- 参考信息 -->