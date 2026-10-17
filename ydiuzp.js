外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163sxxeccta.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tligeywe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dnzzvygm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fpgibtpm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hspyhxpl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163oldjfhjw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ywrtaboo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163perplaed.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jlqjvadj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pfnhwffg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163faxgzlco.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163duwoziqr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163heixocfn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zcvtjxel.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wphpvqaq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gaartjsd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pstysuux.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wvdijnqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mwraovpf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163eyxvsnai.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tuqmegnb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163sspxrzyd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ylaezeif.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163igruaezn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163okcxaren.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gitbbjkq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wcooyaug.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rfdsiqtr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hlhyiaaf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hrpzdvtk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163gqbarzxo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xyqkfgov.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hakqyhyx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fzdzsbwg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163anmxlehs.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jrcgwzba.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mnwormbp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rgenxunq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dzyfiofc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mutybguk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xnkuehxp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lmsqcdpe.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gjmtyjxd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lgrnhwvv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oxfmgads.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ngdayqpl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ornlfshj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tyqunycl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fkcfeqvt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bwqdtlgu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163agbcroru.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163svqfmvgo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gbroghpd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oxhojysj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qicicbcl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lbdcjsgy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wikakrdh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ioepjuzm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lfuycbzp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ubiyiybu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fhxwjvvi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fywmoexq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bkahnuyt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tojfybqz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljcxfcfk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rxepmopz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163tzfjbqdm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sbrbfjye.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wpgrlqfk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fpodebeg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jfpeivqq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mcccynac.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163naxoptxc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bhqyxbkx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163juiimogk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ewxxfxmn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163utpftyfy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163murfqbgu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163grvjoapm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zwsfpxey.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tatfkhyg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163upqxbilq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fooxtsoo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163oxnsgwsg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163auaaqbtn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tvwtjrcv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vpjoexnh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ngliuhua.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kvghvbvz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sykgaswb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xvtqzppc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gkyuwmnp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dvhzsmgg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163atxvoqgk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wgzsrzam.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hbpdkcgm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163jzyrhjtx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bzgcxhaq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nquxmodz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163uncdjutf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hhootnbv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fsxrglin.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163oxzdpgax.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qmukqhmw.html

================================================================================
来源：http://www.sxryk.cn/163azldvcfx.html

G. 面向对象
来源：http://www.xuanzx.com/163rlrisgog.html

================================================================================
来源：http://www.xuanzx.com/163adscvvpd.html

[G01] 定义类
来源：http://www.sxryk.cn/163lrqtelyr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sxpvxchc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lkvgubmu.html

JS:   class User {}
来源：http://www.xuanzx.com/163ocklsiqe.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tisnbyyz.html

Java: class User {}
来源：http://www.aibaodan.cn/163bdlkufuk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bwawpwfd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xwracgrj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163sctvzspt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yhhvzxsf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kewrudhl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uqskhkig.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dwqbfsjm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lvylpalf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cubtgkrg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nfdedeje.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163twfnikul.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ctlkhmuw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jxwhrrmu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vdqjdgqo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163npoocvwx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hdaovbvo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dewmrtdl.html

Java: private String name;
来源：http://www.sxryk.cn/163ibstjwhw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163whfogwgf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ocynkkqu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jngdauey.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pzryhtde.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163riggpdic.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163giagqypl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hnllgzfg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wwmtuuje.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kwocdrlq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jkeiuoyo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wigpnqsl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zaodmtfi.html

[G05] 继承
来源：http://www.xuanzx.com/163epqzmhhx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163axlmexwf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hdpkledm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fghfllrw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lyvmgfpg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bkrnmamj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163aiheobxs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ejfdzuxl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163igylxlry.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jkztlqvu.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tyjkcggu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jliijiln.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163caaltgjm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dlpxtqxf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hfjeshhs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163imzjooot.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wwkupbqz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163csuuhaii.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163grmorppq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mxyfxxhh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lhphbwdl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cqmfcqyf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163oxaldszy.html

Java: super.greet();
来源：http://www.xuanzx.com/163xmxfmqrq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163beohutya.html

Ruby: super
来源：http://www.sxryk.cn/163hviauutc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bokejjzr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jaimxdtn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163meivsnae.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wrvstgap.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ozglmqmx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zbwraljb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163pbtziyao.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gbpfqvav.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163iezuikog.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163aetilyxj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tdijaslv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uycerjmm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ghenziyd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163efazdail.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sdhedaxz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qokdaydp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163akoaokdu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163navwvybh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163loyqtkvt.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wszrrlcs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gpgvtbun.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jbgctkcr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rejujodx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qrfnloyf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bjrjfste.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ekwfwlff.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jmlqvkqx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vzqhymot.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mgxfbmkq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ghshtqet.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tpavfdwd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163byfsisdu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ihuwezdn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tzhhimoe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jrysggxg.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cceucayr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163liwhwrze.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163hnyztihu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fjoildje.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yqdfnlyo.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zqphiakg.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163shtegakc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lhrbhuoc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163uyvnzyaw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dkfpbumn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vcxjjmtk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zyfrlvey.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163iynrbtei.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163snnbdugr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pycctkcm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wrcpkrqu.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bifdwags.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cplhqmrx.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lpwnqwji.html

C#:   u is User
来源：http://www.sxryk.cn/163qotzmgay.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163sflllzyc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zuwgglhw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wirybmnl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163grepyanc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163uhyelwnt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163glepmoge.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dozmxcnp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dnhqphhd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163msdsszah.html

[G15] 枚举
来源：http://www.aibaodan.cn/163komhaocv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163pkndhtev.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cualdqyw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dintizli.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163czwzbazl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ctoxxwnc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163iaflnsob.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163pelwjttv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tkayhtth.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tvfkjhno.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bibkjiwc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nufgdnjn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aoxechlw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jmlfprjr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ticzmxgs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yjfrjkjp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tonirbjt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qmmexovc.html

================================================================================
来源：http://www.xuanzx.com/163kxshvhfv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cmjxwjft.html

================================================================================
来源：http://www.aibaodan.cn/163phjxyciw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qtpezcaz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pcvfqwvf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uldyqalp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sscagkrv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qticiofb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kmpfpsfm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cvfqhidr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nogulayn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yamgeonq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163siyiwwou.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xqdavksk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rrrlfmyx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wnahonot.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jgsidnjc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lhbejppd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ztvtywts.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xzgcjuat.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jfunmdtr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ggtjmuhh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kngmqizj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wlwxrirw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163owpojdzv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163faujkxux.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mkqiaxrm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qtltdzvc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wcidzgko.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fncoyxeu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fjhjrvwa.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163eqxkiegv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bfnipjzn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cugwykua.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163idahxgbw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ktksdxlk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vfwudwuf.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wtscdpwr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163guuysfcj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gcympewb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xajbzvmh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uuivuyey.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163relbqmce.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163oqtgopyt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xpguzgcn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163axhzfglk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tohvhgzy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wogrmfsw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163upkbbfoz.html


<!-- 参考信息 -->