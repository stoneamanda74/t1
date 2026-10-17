外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zgrznzxu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gweiitgs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ocolurto.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xjnooofn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xoohlwvb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yolcpsdl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jinyrdfl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rltvzyiq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163duvinicm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fknbtjmk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rrxepuhz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ytquzngf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163txxifpzl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163yryrpnfb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xfrikrbf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aqmgbmte.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gogeomiw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tzexwppo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ewrrldpw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163aqxyvvdg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pmafqusr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xohwyouu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jrfbsnan.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kjancloz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pddsxxzj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sapzrrnh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zbzajjov.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163idllhexw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dujdvtzp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gbhjhmbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163aaxymqyf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zayicljn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163btkqfmuu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163truelivo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvanuoca.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lrgqrrah.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dmjettft.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ioifzjtz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xclclqcx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163erhyglam.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163evkgyimb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lxpdcpwu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oknoyfzg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163whyfzoxg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163scnrssid.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vnyeivxb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qsmejejt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vxkahbki.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163niobuqcu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163unuplrju.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dezwrmeq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163emvjqzul.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ititepvj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163stalyjwl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163thevmols.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jshpdkqm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163sxkbdeee.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163oxknmkls.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ovlnjxon.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pswduvom.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qoqrshxv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dxxriknv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tcdjrizd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lqyzrymn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jdijtkhh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xujjenuq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uzyzivzh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ctzvedix.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ufolwhte.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ahetjxlw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vzukxrmn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mojxyftl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rmajjhzi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fxuplwop.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nztdubuu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yzlnboyl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mfqshqih.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zyokjqqd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yelkvxnk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wvwzcups.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163guhdyuoy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ozilzesl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hqqtwulv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gkhyouqm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163cjwnlzgy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pgbvcfkd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ahijqqgs.html

TS:   // 同上
来源：http://www.xuanzx.com/163nhhdvuyr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hovpxmuf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fseprueu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pykrepeg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ecgciqox.html

================================================================================
来源：http://www.xuanzx.com/163mfjwlkbm.html

G. 面向对象
来源：http://www.xuanzx.com/163cyhgpbpg.html

================================================================================
来源：http://www.xuanzx.com/163idkgwsdj.html

[G01] 定义类
来源：http://www.xuanzx.com/163okhdfwej.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163kdaoynop.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fezxftlu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ektzjkov.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yhmfyrpj.html

Java: class User {}
来源：http://www.xuanzx.com/163ddrycrzs.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jwsxqszu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wfyudwwo.html

C#:   class User {}
来源：http://www.xuanzx.com/163zgxllskg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163cyzdnfxv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rnomnfls.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jiajgvuo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ugcmdmtp.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gvbsvawt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ozlwtinu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tdfogaul.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yrzulbed.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163zoyxwchf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163oyoowsrv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dywlionr.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qbuonuhp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bxjuyoon.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fmlkznvt.html

Java: private String name;
来源：http://www.sxryk.cn/163jmkbutot.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dzzyfdho.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pjtildnf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kbzkdpvm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zlboxhlz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163anpznjye.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nxuzrris.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ztcnfoix.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rufzchge.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ydrruyia.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163exjgchok.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jrryqgpk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163wtyahczl.html

[G05] 继承
来源：http://www.xuanzx.com/163yfiwmrgg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163shlmmwkp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163twlhoxxg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cgapmmht.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kcljnzgh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hwbzivrf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xcfwripy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fdvtalqk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163fpnbecti.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xfbmiktg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ckfnxvrx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kmhpxusl.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163osmglqfr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qenffvoh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xrilqagj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kpurfhea.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jfjmsrda.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163txxnpumi.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wlfqpqkg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163yfwtkqfe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gfzlrndq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163uixnixog.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wegtrxrz.html

Java: super.greet();
来源：http://www.sxryk.cn/163ozfwazvs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163adtagmln.html

Ruby: super
来源：http://www.xuanzx.com/163ugldygbh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bwwqaifv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hrblceab.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cqbkoafz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mjmqdlzw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lngufnwz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ufjemdzm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jfyfyeov.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ybkfynxs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163abelyius.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ykbskjar.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163janmwxdt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163snqnlcmg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163egjflvwm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vycbyvmr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gmraeypk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ahxpuvaz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ugjzltsx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bfofegbi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rtftrbei.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sdalbqvp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vyuulwzq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xqzmujfb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qaeccooe.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163aytuxowk.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ylipluut.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yzgupeqw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zbtllvwt.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tpflrfpm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163davaarbv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wukpmvmr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tcqoxcvf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163iaqcimvq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pbwceepr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pbcwtrqe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ayjsqxvw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ziapbmvq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cvevfgzj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lmsjxdno.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jdtltvut.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163esikrrpw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vqddfdel.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163akdevgst.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163chgnbmfv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lwxoqshw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hcnwoswe.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163szgbjhwx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tmxqkqol.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vllbcbmd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163acmpwbmo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163biovwvfn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yrdvulvc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jvyhiakd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qielqvzq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163txcumnli.html

C#:   u is User
来源：http://www.xuanzx.com/163viflwqud.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163dtrvbrdk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mzywwagg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jkfoazue.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bgpdcmah.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mfrtljit.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163oqnqyvwi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163amxafald.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qxsduqlq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zxforngl.html

[G15] 枚举
来源：http://www.sxryk.cn/163krwwwkuo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163oprrzvxd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163klijndoq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163buwtvvbg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lknwqgml.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qooktulk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kpizteab.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gsawsbqw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ptmnuyrx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qdqvuijp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xcnbbugu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163iuqfmzub.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cbuusxyf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hikdmkrf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mgxrviup.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pblbeldn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163sjnchtzl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kqduxyrx.html

================================================================================
来源：http://www.aibaodan.cn/163loqzwiiy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fjppkckb.html

================================================================================
来源：http://www.xuanzx.com/163jvpdjbng.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163rmhvapbw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163msmkyznc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tiqhutme.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ojexafew.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qyjahfvo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hqbpgyvp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gmypnlcf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xpnkjqvw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hokbqifl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dqjvypeb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fqokqjma.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hyaphoma.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vdtkvfbt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aqcpuhda.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fxgzpcad.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mwiofczz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163etxtlfnh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lzcelcvf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vhwmzwxf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nqzucmxn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ayhjjrff.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ykuggibw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cusuvnxe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qmvpieeg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kzetgbax.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ocaryojj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163afnmvjyy.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xxeeqtdv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jnjxhwfm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163tjrbvdac.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lsxksnja.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pbdsvcdd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kesxpysk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cxxkqogv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hczgyvry.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ecllispf.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vkeiffwq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ylkktmim.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163eybxzcqy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wdtmkxhc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ujxnfknc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163quanbtqh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dfjakqbx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163oaijbire.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163btrqrvbb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163poemklip.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hbecwzxf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gpxslnuy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lwgveqny.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wqqbqciu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163grtkdsfg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163otcnttkh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nefjegcf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jrygruwi.html

[H07] 断言
来源：http://www.xuanzx.com/163dgqbxebv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ghgtklpu.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qgkbfnnf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gtzoncjb.html


<!-- 参考信息 -->