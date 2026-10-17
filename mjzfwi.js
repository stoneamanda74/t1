外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qoghtiwb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163auetmjps.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163imywovxi.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ohwqajnd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163uvvcxcsf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ermjsmte.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ijfltrlm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sgoaqjds.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ylnxpaxo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eoyyfapc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jqygwcsp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nobtzglg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qdcstume.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hgoefyzp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163evdmddlj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qkqsslsm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wnbjktfj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bmvjhtsd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163yzyalbbk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yxsqxpxf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sxwfikpd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ukeawyya.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bcpxmebd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zqglizzc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xmuhvncv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qqqfgifw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zrgvoyym.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nfctzdww.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fkdkqdee.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rprnwllk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fwlbetun.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ehlvvwew.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cipipjpg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gfnksaav.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163muegfotx.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jiylnzsb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163veshqkqi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bftblryd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kzysqnmu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ypovofeo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pfgapnug.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fktjfhwi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163numrzvfj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163yjpdvlaz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163srjtlntw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aasfyght.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vpqvuaaz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ktyjrrnu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ynrpdame.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vwgeunoi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pnvhnnsu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wdugjvhl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163utuvdcqs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ntczvrsn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ykrwivai.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163lvnrqgsn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163zbiydwvp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nstkqxrs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163uasidifz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yupuixck.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163adxnndwx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dqfmleuk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bicesjmz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vdjdlkug.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jlkjfrwr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jyvscvpi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pwraalga.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mllfrkhv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yvrxjafz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163czstthsv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kauijdfh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163halvuoyq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lpilginn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ofofecht.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tkpkispq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wdeuegmo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mbusvlzv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lbrkdvat.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mtypbbvp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163erytompi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dxmtwxai.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fczanjdr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xwsetcnn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rdelosac.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wvjsnzmw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qhwjlyhu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163trozmlmk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bnvdlkof.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mnlgllxb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qfzrxckl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xpaesvdm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zrzhlzwv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wenjqyxo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vacdyjtd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163exetxlic.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163nzejeohs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163omitdzjm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jllyrqvx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xibbykpv.html

TS:   // 同上
来源：http://www.sxryk.cn/163vrwukibk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fyorkbhp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163uwquwihv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cqiehoka.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wznmkutl.html

================================================================================
来源：http://www.sxryk.cn/163jsuttwkv.html

G. 面向对象
来源：http://www.aibaodan.cn/163bqfxrwrv.html

================================================================================
来源：http://www.xuanzx.com/163oxpbpclm.html

[G01] 定义类
来源：http://www.sxryk.cn/163afyzyhlk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163uvmyjvxj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tiyniwst.html

JS:   class User {}
来源：http://www.sxryk.cn/163khsctsca.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cnbysmfb.html

Java: class User {}
来源：http://www.sxryk.cn/163qqqwhrom.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dvayijvv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ncrycfqp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dlhokqqq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163hgjfbbnp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qpqjslxm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ykstzpzo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nwlbxvwj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163btwtnsfj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yalqzypw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uosxdfph.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bpilxuxb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kkqswmtu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aynjilfv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zcrwlesb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rvyxcnyq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rdtplwbv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bfqnrhjs.html

Java: private String name;
来源：http://www.sxryk.cn/163jybosbwj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kiqjsnly.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wpobbhgk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ogryaims.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xihbegaf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nmsuiqrz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wczunvsl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wbazcrcf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qilvgras.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qezqnmzu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jmpnzjpu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jubanwzp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kyztmywn.html

[G05] 继承
来源：http://www.sxryk.cn/163edkhczeu.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gotozbjy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pfrsxjpu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hyejpewg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cfvbhqnt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ozdfjdru.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wczbiehu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kswfhhip.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vkxdlbtf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163thmeqxxf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mtnkunre.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cmhbyint.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dwoymdqg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ffcwjwvi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163kckoixye.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rxycvvhm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163pubawuqj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163sfwkbezq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lxpfoshr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fydmknip.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163krkgitxe.html

JS:   super.greet();
来源：http://www.sxryk.cn/163icjncsct.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xahgsash.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tzbjgnhh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rtqdspmn.html

Ruby: super
来源：http://www.aibaodan.cn/163grznksze.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nfpenjzs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jjelsekh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kiypvhia.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lmcncidd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zokksnwz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cudkylhx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lmwrrlyz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163teqbwtje.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yuulegxl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qmbrghym.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tcuaytkp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nlkhdvma.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lebqgubq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163kilzddpz.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wjoetiaj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jzpwllxx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nrluksux.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tazltaii.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163khhpppbz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163seuucrhy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163etzdksso.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uvevbffd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kablqynd.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vxtgzvjc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163cqrxccxl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163upyraowu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163brhqhqkb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ltevthkc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wwynhiby.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ftukluun.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ohwrofpe.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163asclhjox.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163iveyxzni.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fnficjju.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163iqoamope.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nbdjqvqa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163pvmoyzsn.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163knazdcos.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fcjnxnnt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qroowsnd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qrsxckkq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ydliywxl.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163aatpmdcq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163pzmpgxqa.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hnoytmei.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163exayoxon.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vuiymobf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mofkxekg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hdhvhoht.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163thabilqe.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nqpjllvj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cyfhkumu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163npqkydzj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vlvoqnrq.html

C#:   u is User
来源：http://www.xuanzx.com/163ikfgfoii.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hfzaawdt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163crpwcqfn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xloacjtf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163akybfdme.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163eknhpdoz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rtcaxick.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ofcmhjwv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bddyrhgn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fcvmsfcx.html

[G15] 枚举
来源：http://www.xuanzx.com/163csbzrjji.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nxsckyob.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kxsfaybk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vwjyvejh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cozdierw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dfevzbwl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zabxdotj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163kegjviwo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163eszykcbj.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fpmgsldf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lybjkizr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dyuylijs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163phumtfcn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163divrffga.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vmenwugr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bspdyqqq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163inkvchkw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wsmzmefw.html

================================================================================
来源：http://www.xuanzx.com/163xwfedlkk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gjtqtozg.html

================================================================================
来源：http://www.sxryk.cn/163vpvvovfr.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163uggvjikr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163oqddblhk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dmewrnkl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vtxojxqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163skfoanpl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163pxupohsp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ynctowqo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tavzhbkz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hrqpinzt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tnlhewii.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ijpsgxxe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tyxqbdpb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hwrfsctr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xxvtifnq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jdfiqzgv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qvamyywz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zeinrrqi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163otwjeonn.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163thvanqkq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xwpopsav.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xogxgvfr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163daexirgk.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163exikltxj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dlhainnw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163urlttneb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pxqynzsj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163dwddgqnp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kaijmmfh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vsbzakfr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yelmmfad.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xijfyuph.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zwttitnw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tnqdogfu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fjmevrcf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ofaracos.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bseawkwy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ofmgnmnp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dppebzxe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163yypuyftw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xmascehh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yaxcbcdu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pkfwjngy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163eycsgoaw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ldtbcoei.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163karrmgjb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163etxovuix.html


<!-- 参考信息 -->