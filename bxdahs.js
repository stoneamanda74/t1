外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rlvnvdbh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tyndsrug.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ixfowfsw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163owormsmf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bagxqjvf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163zuuakyly.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hnofuepj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rviddeut.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xcjeijog.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ieognaza.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bekhbatf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rzcwqgux.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xjkogdwv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pzetbmhi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dcncwixx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163trhacjku.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163taaejqyj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cmzhfbpe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kizyldvc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ghqioshl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163orrnqqbu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ggxlllmv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163etorzlmr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ugmatlpl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pzkhgxbq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oosagayl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vifmfjaz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uaipoech.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ewiujykg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163irjrknjl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163czkxydok.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163huojeafg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lgolhasl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kqgfrbgc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163uwfsciwr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hyrggoxc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dpoghhwz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hbmgcznu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163beicqohj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qbxfnbzy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163izqrtejz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kxnfetep.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vmkwzayc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163opldpjyx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wtbbqott.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lrmfleky.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pjptsiql.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pbdsoqgx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nwxbjkbw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gzfhmmbu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nirqdeep.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163tgvzyzvr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ppwqihod.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kkkdkgjk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uqevcfgi.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163itavlqwi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zlwvsomw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fveeqbwa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gaeeeqax.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tkwuogcc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lsrayczq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163srmacxps.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sssyxjkm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163exjptvjl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ibfxxzeu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jscvmqsc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163babdgyme.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163calgquix.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163autmyled.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ndxbgeqy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yjsghmeh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yjhtzwrr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vcjqhvxf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163bxzuguvl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163upubemwx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dgunjjtd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fsxlzgil.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sgivsihv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rxgpuygd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163modvjrou.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163cfczxtlf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fpdeswaj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uupyuauq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nytjjqig.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163epgnwgbe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pitmtlgu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163owatufrb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163clxplcfm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nlzobhru.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bxgkabzv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hqdxbtmg.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hvbveeqm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wvueedmr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tnhnlpxq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163njleiqpj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163emprkxec.html

================================================================================
来源：http://www.aibaodan.cn/163drholfmh.html

G. 面向对象
来源：http://www.xuanzx.com/163rnxeokts.html

================================================================================
来源：http://www.sxryk.cn/163vzwuhozk.html

[G01] 定义类
来源：http://www.sxryk.cn/163lnokwbyu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rgkeusqv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163imsrvseb.html

JS:   class User {}
来源：http://www.xuanzx.com/163bniorvdc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163prxvqlvb.html

Java: class User {}
来源：http://www.xuanzx.com/163okyblcow.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zfkhlfsx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zmhljltq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kacmpqbh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163znukapma.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wnzingsw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163okgwtwbx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163npydjdlg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jtyttfbm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zyxemxws.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163eorhffuf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163dqlqoqob.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dcussdcz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163skadbdpy.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163izqmtpbq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163etmogkaj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qdvbzneb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zvynjfyp.html

Java: private String name;
来源：http://www.xuanzx.com/163pgrxvskd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rojooafs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163eoofymes.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163snyjxtgw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jmodmeem.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163rthbfspa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zgquaxfu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fjiybzpi.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xifswtay.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163uyrndwjp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lzbmvpkt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jpmntbsj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oqexnobv.html

[G05] 继承
来源：http://www.sxryk.cn/163qjfovnvk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163irkdaxst.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jfdqnjql.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ranyncdz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gfmrbsgs.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xiwrlhmt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163chpqsmlh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ikqkgypm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cufrenal.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rkzhtjyn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jxnidlaf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163deubxmrb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pnfbuvjk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163okvphftx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lkjrubae.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ulkwutzn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ejlhsagw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fzapwmee.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qjnqvxgt.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jhiwfpmp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wgiiznjx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bkjxovrn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kvneqfrq.html

Java: super.greet();
来源：http://www.sxryk.cn/163dpzvvjku.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mhuokwqv.html

Ruby: super
来源：http://www.aibaodan.cn/163lnomqgvm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kcnpyrjq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163eghpctju.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163smuqwohq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nczaljft.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hpmppjbt.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163igjonqge.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xbzlxpwd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mwfvzwfc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qipuihki.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tqsxtxxm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163joynvcbd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163amyhexvn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mckvlozm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xqmfkxvj.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163xnmbqaaw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ovosutin.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ahwcoohq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dgsmphno.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163curbnbqz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tzfaecic.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ifuphfsn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jbsfedrx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163lendlniu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163mwtkvwmq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163cofktttn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gxodrgez.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163atuxltkt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163luznspiq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zzzrutbd.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qpurfece.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dhvuuyua.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vtnpseka.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163omdccpmq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vbhcbele.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sahrtkvk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163auocgbbo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163aygwqobk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ykwcemai.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163duchaxnj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163upfekmuc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163tbcxlxgf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163griernav.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dvkuqfqo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lwfzkrgq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zmgyyutz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cdauckwh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163auqaupdt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163essdkjas.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163okwfoysd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163oyrqnrxn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gcffpidy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gtegjgga.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rfizbkgv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tacprkeb.html

C#:   u is User
来源：http://www.sxryk.cn/163shqwjana.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fdhklbdu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wfpsakmf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163avoorznq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163cnppiffc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cldcwslj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bgzdrjsk.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wfabuzsk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sjiaunxb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fpyeholf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ildprqcc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163afmruqeb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xmezooyn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uduxstzl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vtseitqm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163adpynavw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163geunlaku.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nknywqgl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mbhzjpqu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tgoenkqd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oecjtkrc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kfoyptqo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163htmuhcjl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cgkzyzmy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xxkvfead.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tsrqoixi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163klywzjfg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vhlbqfbs.html

================================================================================
来源：http://www.sxryk.cn/163blbdbwql.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jnkghtxb.html

================================================================================
来源：http://www.sxryk.cn/163wpihfxug.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163aptjwekf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vziqncrl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vtqnhezm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fzyctkhm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163awhampmb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qhtmqaqv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ufqrcdsq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fqglhkur.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pnefkcsf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ijbtmxmi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pwpqqufk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nnqqtwfu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jbfuztrs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ufyhetbk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dklkgzyf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rdirgnia.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rlohebnh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oktgayxm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fphksxpw.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163slyusmvr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xecyyqbq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hdlbtlkb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163chiinqbc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fgidngxt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pbjcamcc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dwbvfrns.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dqmmgnll.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nipgcwwg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jxpebimd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dupuyjpk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iptegxre.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163invjggad.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vqtvqyoq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xszeppos.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jxxjvtjc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rlzjqjnh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163descacnm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cfmvjphq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hzaeneuf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bfcqoaop.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163koosrpia.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zdilzfsd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gtgjwmnc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gjuuvvbq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163znezdlhd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mppplnld.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sqhxgugk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rreddnfv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fpuiyyic.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xcqeybtp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jtlkhdbk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zqxybryv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xndsclvd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bopqfbmj.html


<!-- 参考信息 -->