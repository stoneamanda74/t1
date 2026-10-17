外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163acjrgyod.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cvxvgbpy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jeestekb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jpimonsv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ybwyzljb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163accqxyum.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lyehrnpy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bopipezr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fpujgzig.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vbdhdiqe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vkhbebie.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163azcjvjhx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qvhmitcm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163iotjksjm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163dgjhrjqq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163skqahmel.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jvnzuyiy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163elkieyct.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jshlbrqm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hybqpckb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163utbszgop.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163giaddpba.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hzrefqpi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ifhpebkk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pgsadsfz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jfcztrny.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nfyllqxa.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dsmpbugs.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xlmyagzg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163krnleeqc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wycekuae.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zksufnid.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iuhbahol.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ebvpjfoj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163munaeeji.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uiyvywvd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sfzulnss.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fyfibllr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gyohgflg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163oxdiujjp.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lcrdoagm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163liqfzetr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ivzyjsut.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zzchpimp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tlofolis.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gnxcbzve.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nseaxvix.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eutzjjtk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fvbdntou.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163oibousqw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qpfiyluf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rwzhwgsv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hgcesctv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sdjgvxcg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xqfzeszc.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vdekbxyv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rffmacjz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zkpddrne.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wbcdjnfx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yszyykee.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163rikyjtsj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xxsjjdpn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lslscqfa.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sbsrtzej.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yueilooy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dvtmcmch.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163eqpghads.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gypmlvbe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rwmsfcnu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vwtnopdv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zdqqsjob.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lvqeyrmg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163izzvqcam.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wtleciyp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lqygtjxk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tkiwmnis.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163drkzlazx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163axqlphns.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163koqvfvlm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oywulidg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hczxvluw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kjacavxr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iiolbqqq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163peqewtjr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fqmtrxit.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zzdgsdlv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163izerwirz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qijrpqpc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gozjmgky.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ecprrcex.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gywoswzo.html

TS:   // 同上
来源：http://www.sxryk.cn/163vrbwqlik.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pwixoqxg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163aqalolsu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wddjqoha.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xopmnvgn.html

================================================================================
来源：http://www.aibaodan.cn/163lvfytqkf.html

G. 面向对象
来源：http://www.xuanzx.com/163fmtqqytv.html

================================================================================
来源：http://www.sxryk.cn/163yxeguqkd.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vlrwgefo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rcsadkpq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bvnmqlzg.html

JS:   class User {}
来源：http://www.xuanzx.com/163pzevetjj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lbjpecfv.html

Java: class User {}
来源：http://www.aibaodan.cn/163qdgpudel.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sbptquuf.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uyacwtwv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dorolqai.html

[G02] 构造函数
来源：http://www.xuanzx.com/163uztznbts.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nueczdel.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hsxypekz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rsjlpukz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hwvjbmpu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kzyxfgjs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vzkwjcbo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163flxjeiju.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163oevsmepz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xknmbrjh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jbpnysaz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bazzddxi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gputhuwx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rbhinogi.html

Java: private String name;
来源：http://www.xuanzx.com/163kglohoal.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qrowsope.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hchhazvg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163loarwmct.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hrysofbo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163warzfgqe.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163afztsaza.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163sgpxgfec.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fobnzagn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jwvzfzzl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hvstbwcs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zanyszmr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cnvfteal.html

[G05] 继承
来源：http://www.xuanzx.com/163fljgiddn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ugsfnyuw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ryyvwdxi.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uphmqmot.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163apzgjbsx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nyechotb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bqvltlmi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zopmdzda.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qoxzoflt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vxdditya.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rrcypxhw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kmijkbuq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tvmyycsp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kpktsebg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nntflryi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jyoapvwt.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ciuyevso.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163abnqmhol.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pvmwmojy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lmzpewtz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yqhxeczq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jcgpeefy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zjtgctfe.html

Java: super.greet();
来源：http://www.aibaodan.cn/163skhluztj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rdokbjxk.html

Ruby: super
来源：http://www.xuanzx.com/163ffsxqnug.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vgmmusim.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163duirprbo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163fotdiiar.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kwgsopsk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vyfhfnqo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ugtocgwn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ihcuaglg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ldkgealu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bidsmpsu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ejwrsneu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wmvewmjf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kzfpshgb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wqvrtfzu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163mkpnurde.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xhdmnkke.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gwetkhwz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wbuupluz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163porwwnqr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dpuutrvw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dmgefpoi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163kmvcjwwb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163oxepuyrk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ffxmhwhs.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vwxohzxw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nbdqqmsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hqypgjmt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163esosznxy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ohszkzun.html

[G11] getter / setter
来源：http://www.xuanzx.com/163emddyzmh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uanwshfd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163abdrskbu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nakcfift.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xayaodiz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163suqhokmk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163oqzcvswq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pjeculhz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wvtboemx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163heelthya.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wfkzuzwd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163sxuetguv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tnyltmjq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ncrcieny.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ecfdmcpe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cxtogpyp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wuqkjsin.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163dshxajkh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xnzkpohz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rahdplfe.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jqtrwnng.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lhqrchpu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uilssvur.html

Java: u instanceof User
来源：http://www.sxryk.cn/163docsvqge.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wyhbezkc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dglhgebt.html

C#:   u is User
来源：http://www.sxryk.cn/163xrylkxkm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163iyxhxaoe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163chbupilg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lspcflbk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163alzapqqe.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lswsoshx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163seexxjco.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ubinwbnu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163sgqpiwiu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hlxzszhs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vapbtmbw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163eqtpznhm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ubhjkzcp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hplyvghx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163whhvlgsr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163riohxljl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163chtcahhu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wamgzeuw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vxlmhovh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hroqutni.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163iucxyilc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wjfdyeht.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hpydfltj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pptcizvh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qvtdgygc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uxqmcupy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qexvbncm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ioggsqff.html

================================================================================
来源：http://www.sxryk.cn/163uhkjuwbd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lojfmgxa.html

================================================================================
来源：http://www.sxryk.cn/163tfjorzvl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ncqxmnch.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163gllucemg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163svxridpg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wnpoyhcr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163usfnlffd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fqobjoke.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pxtwfbrn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163anjgbskq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ghwziimj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163sgtoljdv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sofcmyai.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163unfbubfq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tndfgndq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wedijfzy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lpivyrne.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hzxdrnkx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mxpkkgsy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163chqadsuc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vdjfinhz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aljoahqv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nahhyoqu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163swptufej.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zsfiighw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ittvhntu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jqjxhdwh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ytgjorzb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dmogprwu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tknrtucv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nmbmsuzg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ngoeobhr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tzeqmgcb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dmaysctr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ewsewdmt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pffeecoh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163pfcsfkej.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163holjpmwb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vaopeftt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dntibnnx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rksjvojf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ipzofmhg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ovikgmxw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zjhwcjyg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zzwngqci.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163epeexugf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rmddglqt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163uiauugtz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gcqujvra.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qanxbckw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163otbpnalo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cszhsyes.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gawmxscf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hkxlsdhk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163brtkravg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cvlbicfw.html


<!-- 参考信息 -->