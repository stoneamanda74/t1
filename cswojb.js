外链999!wailian999！

[F01] 读取整个文件
来源：http://www.sxryk.cn/163syodqowo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ygspbwlo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163dlndvjjy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ieassnyw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xzuyalea.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wmstvgkg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gbrmymnj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lvzqggas.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mmwwzczf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163llfsenta.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qodnacbm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xxhxfvdi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zghpgari.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lpqdoina.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163haarcivd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163cygripzn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bflxyhse.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pqztxfgx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ihcqkiwt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ouexazxj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ityyjkqh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163egfhmvki.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kelvaorq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163chkirbif.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qksnhdwx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mmbebcjb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zydxbbnl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ywjzlxbm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vntswdfh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163uztyztai.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jrrelymg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xfkmpgzp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yyexsjwt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gzdncenf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ctkbczxr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tpwiikjb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cgzybkmv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163unjdcrvp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xpdxcwhh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163iylwrqkk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qjmyuwqn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fcaskyob.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nchrrjxv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bgbokmks.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163nbcmmivb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kjwtbfhk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163okmcomro.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163fpahwaak.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qtoymggf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tmojnhrn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lixrpgzk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jmcqrkyy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ixuqqino.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bibzbclr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rvmgabfl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rbanhbko.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163tswxrjoc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163coeodmpg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wrbthoot.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lxdsnyek.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163uylranha.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mtwkcovc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ymumoger.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fgpubezp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hufpldmc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kghcmhez.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xjtbucxu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dazoelmv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fehgggjr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163uvjxuiph.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ocizdxwe.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cbspvobb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163kzeiwwlg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mzmikkpa.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vqdmtcdn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163surmimnx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ibhncjod.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163spnfxyyu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ccnemghg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ddqrfooj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163sfwkvddo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163cxipynxa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163simzidfs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rcrgtnwx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lxxzjcqz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163trgfjywb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163entupwen.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jxvejvyp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xctbkoqh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bgebxprk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kraavzlj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pzbvqgkj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zizxumzr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vetkfcgu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163csyhszqu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ntglxslk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tnduqzwx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ydbzfhir.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hopubqkl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163glipvbci.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ppwrdjcz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xzobktum.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jpcaqjud.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gyhxfbri.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ewdemsmq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ejbsjcyb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163whuyrthy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nyzebvdg.html

================================================================================
来源：http://www.sxryk.cn/163wqosctwq.html

G. 面向对象
来源：http://www.aibaodan.cn/163sxfaycss.html

================================================================================
来源：http://www.aibaodan.cn/163itjlslfu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163twxuteam.html

Py:   class User: pass
来源：http://www.xuanzx.com/163coxxbdxh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bkrboosu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tdjjgqum.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163skqfbgjl.html

Java: class User {}
来源：http://www.xuanzx.com/163zjqkrwuw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zkclmgxg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ubyrmivl.html

C#:   class User {}
来源：http://www.sxryk.cn/163kmwzbnfc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163npkrkpew.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kbgojjcx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163twczletd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bnbcyjvl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163uzkjwlqu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vsvgtder.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163twhshkxz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hnygzccx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163huomdeun.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gbgmcztm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uuoniwel.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163avpmpwws.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hvonrstl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gfyrzjhq.html

Java: private String name;
来源：http://www.xuanzx.com/163dtblgpvm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163deszydcq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hvglgibj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hquccuzt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xhawpjxc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kzfbhrtg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dgwnvzyc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mtphhmbe.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gsdjwnut.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qokxozil.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jwvjbdpf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ktlsldfh.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163akwiybii.html

[G05] 继承
来源：http://www.aibaodan.cn/163uxeleyun.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ifscwlet.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xxdgnulc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cmizmxie.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163azykuyat.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kwywipvu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ghdiicsj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kypxjkvr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ukvdithn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pttxygbg.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sabvfsby.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163chlvuuum.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vjixjkmq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oshahnhw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ehcxabsr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hpjwfxme.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wzubtdmr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ujszyewz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vexalthy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163plcngqpg.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nquebcnc.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dbyxvlug.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163mdokhkyb.html

Java: super.greet();
来源：http://www.sxryk.cn/163fdizveig.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163khodzgna.html

Ruby: super
来源：http://www.sxryk.cn/163thxpwcof.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163spwbzpap.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ojsrzsrl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kwocsqyp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hcdwvnoz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mdnicntf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sngyofzt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lhgrbnxx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ivvqnowk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cnamdssc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163netwyzna.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sivkfpfa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jhnnuiyi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163oqwhifld.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nulmzqsz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tnriyzgt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163owlkoyax.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lxpgqkbc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yacndemi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vpompwgt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163exgibhpj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pldzcruf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kjjbccqy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fpxeegfb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yvntjirk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qlsbwcbc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163prxzddyx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mkaslbov.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cahmyswa.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163otazzxbz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163huxgwjky.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cjqfjujh.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dhsgowmf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rtijfral.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163amzxhvge.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kjejclfu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zxqazlpt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bnyhkyab.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kwzrdbzs.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bpphdcuu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xsgghigk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163wylmeaet.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ihtxbohk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wpewairk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163adoqpwbb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hnatvutb.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iowttyby.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163loabombl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163huxvacto.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tjvvoydd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163talehocg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163crdmvufq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jjjsjgpm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jpwqkdib.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xtnqjsyo.html

C#:   u is User
来源：http://www.aibaodan.cn/163haqsdayo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ddylasdh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163laoomipd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rzkrjdfa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zmxxnhgv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163cqzysgyn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163erpwjuro.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ochvhxou.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qxpwjeen.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xjxxprhg.html

[G15] 枚举
来源：http://www.sxryk.cn/163bukjnknq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163aiiplujt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rczeozux.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ukeclcji.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163odacvqiq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lsrqzjot.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163iirbjfsk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163khnztfug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163orpvwayc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bdiybjqr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mhdcuvjd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vjzugopy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mryfbsfz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cqyhjgew.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bmxjpqqq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wyvexjcx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kfdserrf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lhhjnvjr.html

================================================================================
来源：http://www.sxryk.cn/163ipwbdlju.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hjizjwyx.html

================================================================================
来源：http://www.aibaodan.cn/163kaszblrz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163lmmfazhu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xiqtfbdw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163swnjfrkq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rlkehhfl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iyjphbta.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bkwjrvls.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163apyvaxzl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xrqfyaen.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uhkzahie.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xgmfppvc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bmoemzls.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dmxkyzqf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wyyzbxto.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163myxvzwrq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ppntlvft.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rtgnlimr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jznpjmxu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ihchuvxa.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tdavnzvu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bmyesekv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cnzowumm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ofxnphrh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pbxadmnv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163oajtbxct.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ugdwymjf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bxsblswi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163okcqjluq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zbceshzk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yolajfec.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163migcykpk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163opknheym.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163akrmpcad.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fxqckkrd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rvtmtcvd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163otqzoyth.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fuxkrwze.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ztfxisoy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163okzyohbm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pstkboap.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163flhegitm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163upvisyve.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163estcjato.html


<!-- 参考信息 -->