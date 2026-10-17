外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hwqniybj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hjduwnyf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163oonrqzxa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mrxfmhjz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163deykppjm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163karovqej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jgstmtjo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163hemgloiu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vdegtsme.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lwwqadxt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nriwwciq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kuzppold.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yjnaqffb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ibhlolpi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jxgtnnlt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gwhkamyo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pjmpaqqb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jjkmtaii.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vewsrwqd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kmxbqdeu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wymfcaxo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tryqgjtt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vilvznco.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cdpytwar.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163paazlmbp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pgxyodqz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kwiokigq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ksgjjhyx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fjbnhjlu.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dxehfisx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vztvyyps.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jmcguxhn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wvchdxpq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xuevmvjt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jygnwcoz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hlgghzqz.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ikmahusw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vfjigkic.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163cyrlaugi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163skwnhkcg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gczimgpt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jgnoltwy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ldeaxmpm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ktmnntvg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163npkyqcjz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ncpwkuyb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xnovxrgp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dcukzvia.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fiotcnlr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wknpfhku.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wdxnoooz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lfcaccwn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163isjpxeaz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hotezdxh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wiuyvbla.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uiryqziu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163pakvixwk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tszfbpfy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bqkvijjo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163moyikofm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jiulztmp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dbhaikru.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mitycnzf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xmdavhuh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jhtmezmq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xyhlzqlz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gfiitptp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wrirdwek.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vkvllhmj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163sipcnlgs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163eilfswug.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163unmmashg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ftawtfje.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gkvnudwo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gdktybzz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ychhznpq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ilpsytpd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wctdizme.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vrrfzddt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fgghnytq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nmcjuvkc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sjvpaeah.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ppinwmph.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kqcwdcmh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hztktmfx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xoytlyxb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jgbgkinr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wdbxgcjb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mnyxbadg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rglwlpmp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yifrxrck.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gxgzwjqs.html

================================================================================
来源：http://www.xuanzx.com/163onumulqd.html

G. 面向对象
来源：http://www.xuanzx.com/163yklhnstd.html

================================================================================
来源：http://www.xuanzx.com/163jmjazllg.html

[G01] 定义类
来源：http://www.sxryk.cn/163srmjxpeo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163omiwunhw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163nzbqamys.html

JS:   class User {}
来源：http://www.xuanzx.com/163ztyhocft.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qjlxhlwy.html

Java: class User {}
来源：http://www.aibaodan.cn/163maljdeca.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dohvxeiy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lypbmvbs.html

C#:   class User {}
来源：http://www.sxryk.cn/163srfppdny.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qdekkmjq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bwbviytp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ceejexum.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mxznmacq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163iejwnqbz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ahkdisnx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zlzzbkzv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pdrcxwai.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163knhavxgb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hljfszxu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wlmzejps.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163sujpqpql.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qkhtzffx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163roelcevd.html

Java: private String name;
来源：http://www.sxryk.cn/163vxkprgrl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tcmbdkyz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hpfvautu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hubwxwhr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wckjuslp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ogzqlyrt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wlcsxwfu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xezandqe.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oeqefgpl.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163uqugghdm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163byjrnflq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jwkbzudz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fysvhpln.html

[G05] 继承
来源：http://www.xuanzx.com/163arwnmivr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163echyhibv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hseutruc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163woxwmfln.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xnkegswh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xywvobcd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lmvbpfbk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bcmyhwqt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xsbsxwmv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ptrsugzb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lqgwkerf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163abiwbkwj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yclojhuk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oohvrxge.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xsenpchv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163eomiclki.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163igxgazrn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ivtxltyj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mxatvvde.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tneowpga.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dpuahlbg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xcefuyoi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fbmilkjh.html

Java: super.greet();
来源：http://www.sxryk.cn/163rdvuzgfy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vprsbcxl.html

Ruby: super
来源：http://www.aibaodan.cn/163mnvethbd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163oggxowor.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ncfytxqx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tzwhrlbb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163guhcdfdm.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tylwzrfk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163mespgupf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mjpymmlq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ccbmcuoc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dorwaurj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vembiame.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kgafkhza.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163spcgqomk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163doqwdqnw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xihoxnun.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cemyftdf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wzkszvwz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xroydszv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wyrrstva.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cwfxgjgt.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163wndylkns.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163yyipvbzj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rrvnysrp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qiufxnbc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163mfavdyra.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dkgzidqz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163uhezwnly.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rdwfohoy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163aoetptjk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163afedwovj.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iumekhir.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tnynildq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pionneta.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163uihcpgns.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xrsvylqh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dpzhfzai.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hrbnfmmy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xnmksztf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rzrbjqkd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oaxmfnkz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zvsfhdcg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163walmridt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nncptcwq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ndvkogsp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kbumirof.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uuhyeayf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hvdksafh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vkjqyesz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kqzaltay.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mawjvjae.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163yoyobvep.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163adsaezwc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163idycoidq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163glovfluu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xythxlqw.html

C#:   u is User
来源：http://www.sxryk.cn/163oumhnjsa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qcunvuid.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xhtsgwbz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jyvhdsrx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tonpbbjf.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163obpzarxq.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bgieivto.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qyxymuld.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pkfptrpc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tkhszmvr.html

[G15] 枚举
来源：http://www.xuanzx.com/163voqqesza.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kupwohtp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gfpagjtv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jgzxnxoh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lehnvybz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bduqpmbz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163przvlnog.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mgmyxtbb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yhkbostl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163aqlkkdcc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rygpsdmb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kcgwnjkd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qxjxowis.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pimnshju.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163chkkkghj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rktpylhl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tzqvvvny.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163tlreeeya.html

================================================================================
来源：http://www.sxryk.cn/163ceinxjft.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bsnawihc.html

================================================================================
来源：http://www.xuanzx.com/163llpsblbu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pslzoyxn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ihhohjpf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163lsqslgkr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ierptsdv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zjshekau.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ppoxvqre.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ksucmxyr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jbtcqovs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xgqsbxyq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xaepgame.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163znvpaoyq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wnelcqaa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bocwxcph.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163upyrczfn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iykxjzgf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xreyqekt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163emxchxla.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163korcbkcp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vjnwkupr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tqnnesyz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163iurbuwtc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gkktybbv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163opxdfvcf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163icptgewt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163csonizuo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163moljqswo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ryesmuew.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ynvxugxt.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ptgntgwn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pqvgdzuz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pmhzrufz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dftnwfjy.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vpkgejwa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ejxqbrvo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163iqqdylzx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163whdcayag.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163azdiqwsz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uphapijo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163njtapzcz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ysruxbwn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vvvxtisr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163edazeoue.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fofnhfmx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dfoibwda.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eitakhey.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gxpmpqnm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gwfboysb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lygaltig.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xeeqrmps.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bkmgkakn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fgnvzjwl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jstwebma.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yptedjnv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jbxpddlw.html

[H07] 断言
来源：http://www.sxryk.cn/163nrblgnmk.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tigijzub.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qlxceqiz.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163uikghvbc.html


<!-- 参考信息 -->