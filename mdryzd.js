外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163syeskaiz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163iiaubcgt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163exqjwxya.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tlsbhyrl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cydaydfl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cqlxgwgf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ldzvlels.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mwyiqgga.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163igdhylcg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dfxxpmnn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dhmfcxwf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163btkhomzy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bcbwpuwy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163txncjqkj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kdcsgmip.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163crjxzdws.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ydkynlpn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ykiyaynr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163khzlipyd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163blkoxkfg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uotqcepj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wfvlhbqp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163okagyvav.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jwaamzwn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163txytsisu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ctdlwttp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tnowzjqf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163thiqbvlt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lilchcwk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jehwtvnz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gmamxcep.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ymmqdksq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163czwllnum.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163omswxzgr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kceljqrn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wekiwbfg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163glmabslr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163unxqqdnb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rbhwyomb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163odmvwdtl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kkbemsvh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163somtzwgr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ayekhjeu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dbvcwmhp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tcmeizon.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bhsyknif.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kcpadddf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163delqlttx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rfqbiiqb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163eomvglxz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xjrycmln.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jnedsigk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lvlmfcak.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163glpqxamo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nvdfaokj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163howwkabi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nhwxoghw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rhcssida.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163loddjdaw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rgrznqxr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lauaxmmz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163jbowqzxe.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qdosbqgw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lpgguhul.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yhhkbqyf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fxupuuhp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vebqkjrk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ovlxukct.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xdqzuqqr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xdfallzi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nsbvured.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163upvmkblo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mrmbhgwn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wstmesxo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ftsceosj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vfaxjrtp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dqjqnbtv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ftdcltbj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gyhpeqby.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xkshqvap.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kbxfgyjn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ouujdyxy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163enndibog.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163pkrlfryt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kzdtnhmb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pomcnmnw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hwirvsqb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dmnrhhyx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163axmynsgo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cnsntuzh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wkbsuobf.html

TS:   // 同上
来源：http://www.xuanzx.com/163cdyqhhqm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vpevnkvs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zjglapud.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vmujtrvj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mlfphwfr.html

================================================================================
来源：http://www.sxryk.cn/163ieqfsrzf.html

G. 面向对象
来源：http://www.sxryk.cn/163yydicmxi.html

================================================================================
来源：http://www.aibaodan.cn/163mzlcocbn.html

[G01] 定义类
来源：http://www.sxryk.cn/163wuxmeaan.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sriypbnn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rnhncqey.html

JS:   class User {}
来源：http://www.sxryk.cn/163gesgugnn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zdqkname.html

Java: class User {}
来源：http://www.sxryk.cn/163kcltvsym.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ulbotewv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zhyobseu.html

C#:   class User {}
来源：http://www.sxryk.cn/163lejfvglz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xylrgkyr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aawixtmv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cdqoplic.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zijcuivf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163brhrkenn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jujnnjbn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cnpmwutk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163klgkozao.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163butyavdo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163juliomyy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ckeqgemi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ojxszivs.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ogefgmko.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163agebpqhg.html

Java: private String name;
来源：http://www.aibaodan.cn/163fgqxuasg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bvhjrruz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163efdnvbpt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mtaemyiq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fcgvnyfp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jwenbytq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dqvwhuak.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ypvufpiw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163iyvxbcfr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kkqsczte.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rjvwdisl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163neacxwuk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163atnzjhqa.html

[G05] 继承
来源：http://www.xuanzx.com/163hyoxqlip.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zpkjycua.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163slxwiwaq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vbrdegas.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163teyyuuck.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pajdyjey.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163azwgxplw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xutldvvc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uujuqlue.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uibjvcyi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uyeiohjx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jijcqxrc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jctottkm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xqgkvigc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163niedwdun.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yzhxykwu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cfqceoos.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vvnomxxg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hmhhqlmo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163aucdmgen.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jxtzuolb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kxuyxspu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163avzxzuwl.html

Java: super.greet();
来源：http://www.xuanzx.com/163cxvvpxfj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163slzvcwmy.html

Ruby: super
来源：http://www.xuanzx.com/163dkdhrcel.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ryijaqfq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163smzcdkox.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163downmhiv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tojasexb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uqgayqdv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ptuaankj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lpkbjsws.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pzcfildq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mutkmrpu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163orsuredm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uugjnuom.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sizshegc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163jxmlijnn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163kidqfurl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ephuqyls.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163auejusye.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qamgwhmw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hkzvhdor.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fnentqpe.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mwzbxjtk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yzokmfwh.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pirbcvcc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bfknutto.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163jcuzpspa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mpdwuexc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rsqsjntn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yuxmscdg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tmwlgyqe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ksxrswvt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ohcvsyid.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hwnzepha.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jqzzcmjz.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sloowqyo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bakrzwpb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163eyagkknz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lkqzrxqa.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163nqrdxonc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hrylutle.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rsdtingx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dwxfzett.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163uyiyxuqb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163gjahcfuf.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163oazuzbqb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jgsjhoiq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163alpgwxli.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vwdzaodz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hytymltg.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163hpxnqwdq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cseobztc.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zlwpkxcd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163zknpyecb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163btaotthi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163adjglhhz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dsrftzqp.html

C#:   u is User
来源：http://www.aibaodan.cn/163radtxdcg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mppqoyqh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nnxhttjl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lrifpxkm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vualnagr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uygmbsjn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163icvfepvr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163siwhqsie.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tvdufypr.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gncfgwfs.html

[G15] 枚举
来源：http://www.xuanzx.com/163ceaqkfuu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163grajitlr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163weqscjro.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nspxgfoc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uvcnnqqv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pqjlgmih.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163mbhzmkna.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163xvblhxem.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vlqtylbv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kbwfdbcu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163pwdqvirr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vwiseogv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dhemtrqu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vdtaglwb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nrhkhimt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pnrebnbb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zvayqgkl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hnpwddri.html

================================================================================
来源：http://www.aibaodan.cn/163ghbsktni.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mqfbtidu.html

================================================================================
来源：http://www.xuanzx.com/163eoavlozs.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fmnwvwgn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bdycldot.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163iqufxzzi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hqgglmdb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hsfkinjs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ihrojxio.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163gqzkcozf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ccfwetav.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hhwstmwp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163khzbvdns.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163aidfsmcv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nunaqgub.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hfulqcaf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bjdyehhx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dfoacdrq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kpuwhjqx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cmmhjfyr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cvfuiqgd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hefyzvur.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hexgjuke.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tbhqxkiu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gkvdqzdy.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cybqstln.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163htqwlsxt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fmmddtbd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163anpfuloy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gsrjzpji.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163htgkkmyd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yqcysifr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163shpmfeqy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qvwbiqui.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rcgrzzab.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qnywdssy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jkzolthw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163veouaano.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lkavdiab.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rdqqxnba.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163yieywzrr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qetciwxu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vjefislq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163objjgupi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bmjdmzrp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163uwckfgmt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ncmuduhm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rpvdasua.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zclyvgim.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qajkwvft.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ddbcpfpt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163knoetlsy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eiwffiov.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jtdcxvfp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ygrqfwvn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jjvszrtx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163yduqgxtx.html


<!-- 参考信息 -->