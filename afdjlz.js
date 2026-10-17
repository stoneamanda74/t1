外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163afqqpere.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yhlxnsye.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mdvkgbvu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163cnjzakep.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zxgpquop.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163cdpctcyf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jkhpodns.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hzgcrcqn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ajfixvet.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fedwlmtz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163soivvvvi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dwgejuyf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163tkmuiweo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163putvhwda.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zatecvow.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dheozbly.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yrosmadt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163sdmpbcqm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iyiksumf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oeofltzr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lrwoehgz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ivsqbpom.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jaibulba.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163uxlnbrcz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163emxdvpjy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tmljgbal.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oxearakp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pgkbfgqi.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tfvhumov.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kthxdtno.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163eppacaxn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rlypmwzt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ricmbkpl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xblhmfru.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hrerotrd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rhxjtxgd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vjjfeepa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qhaixmwu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fjxmhpzy.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163phdfcbpj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hyyxpvgl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uksdbwch.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ltjkxtte.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dvaymryc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qfglthtx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uxjnxmqc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wvtsulkp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ektjlaal.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ununixct.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163oepnofpx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163znyqyhye.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xjbxqswz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163debgqlut.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xodyejuf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iwzqbikq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jxpniqcq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163houobrnl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mbgsakfj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jtfvuryy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rkurfwmj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fsnvrfjy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fnymsaik.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fzfcgmfl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zbtxaaor.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rqyudpgg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jzmtneyq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qkeqfodl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dipqefwk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hjnqtzqm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163danmbzoz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163trsuiabe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oicdsqzc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sdkfbaua.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163adcbtptf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fcrwamvq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163csddifjs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gpxfsjlx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jeipjczb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jkhgadda.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mvoufsmp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uuxrbrdf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jngboiie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163syllgryw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163sijqtqjj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ejvidrxz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wuxgzokr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fkybyfkp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163giwemepu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vjoxgrzj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163atxfxhjn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163svbxbwnr.html

TS:   // 同上
来源：http://www.sxryk.cn/163aexhjjoz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163swxgtaah.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163euvlzvqt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aemrzfdm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vuniaurr.html

================================================================================
来源：http://www.aibaodan.cn/163ffnskauf.html

G. 面向对象
来源：http://www.aibaodan.cn/163yfszlzga.html

================================================================================
来源：http://www.xuanzx.com/163xnyyyxsu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163sdoihvfw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zvylnyko.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ystyjmnw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jkwphizw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jerlsftl.html

Java: class User {}
来源：http://www.xuanzx.com/163kwtepzra.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tdfmdogm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ibpojrnh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gmhdckrw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fyulpgmj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163phzqgehz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vcuyjnzr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163venrvjbm.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xjsflejt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163srqamkny.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fyvxqfvq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163swbrxnpm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xkocyyis.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tgindoyy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163swwtppph.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163mqapmxxv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wavfykev.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163myvnvfac.html

Java: private String name;
来源：http://www.sxryk.cn/163mgqwmnxb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rkzeupgv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xsbgktqk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ptciueff.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tofvpdfo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163onwkovls.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mywqtkfl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163erikvenj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xscvctls.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cifsgvlj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rgqovnqp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163goxhixan.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163bjycbgof.html

[G05] 继承
来源：http://www.aibaodan.cn/163vfdzatcr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163yjcugvtb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163chstgyrb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163obiiflfc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tcdodwfm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qlzwtnij.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tpyelcyo.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nivdjbmh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zdeoirvg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vzpunmhq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163nfdmmsqy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nkcuyjlw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iuivnnpl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xjhxjeiw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wippznnz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xcifirbv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vuezokkw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rseidxsd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kxjawegp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zibmqmwm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mothciiv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163dtqjgiel.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xzuhsgnd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kpypflva.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163okcommev.html

Ruby: super
来源：http://www.xuanzx.com/163otgwvleo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qniofojs.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cfleeboc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wtgtzmjm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fqfvzeor.html

JS:   static f() {}
来源：http://www.xuanzx.com/163eolqkrah.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163xrghxjvw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kotegvjj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xzdakyca.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qxufkkto.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wzglkkot.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jtrxhvno.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jmeepziu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163digeiggk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pevxzshh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ijffeycs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vmsauxbv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163peiwpxzo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163iqvxtpmt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163naibfxus.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zyszbioq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gfltvbpj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163afawzxzg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163icainzcf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fuaxaiws.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lsuymcmx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163dgymerce.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yvhivjtw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xwyhbydk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163olmopcuc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ercueiuq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yrwmvhmy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xkhodfys.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bgyhyhpb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mdlhrwfr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nfleavea.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fbcncmuq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vgdybufy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tuqpfyzu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163reydbfkp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163weeisvjj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ivfocfmi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lytzlpca.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jqavzxvy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163otvlbmko.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163iqmndgdi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163muzsznht.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163aaijoqzo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163victbyng.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xifriqfl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163urahhhgv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pdzaywib.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sxjmagnj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163itqlfxnb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fbflmrlj.html

C#:   u is User
来源：http://www.sxryk.cn/163jpapmifr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wumhdgxz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lhsnqybn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xfzgxtls.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163iodlmqto.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ossumspq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cucqeqpr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cwhokgxj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tlwkivny.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qgudbanj.html

[G15] 枚举
来源：http://www.xuanzx.com/163ceclgbzz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163acceppuf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jkwhdswt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163aaronmpk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dpgbxasy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qvomxffh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ndntlymk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iboysgkt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163awrwqehz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tndbdtha.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wuljihwf.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ofsiarpo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sddzvntr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ohsobjcb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163umefeigw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mzpsyvpa.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163scxrerbm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wyfkpghv.html

================================================================================
来源：http://www.sxryk.cn/163pizzuaaj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zjwdrwpm.html

================================================================================
来源：http://www.xuanzx.com/163widaldvi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mjtkzgtq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wyywvenh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ywvtjgky.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hinmpiht.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gdfkmmof.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163everphqc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rhgzdcqp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163uuimpkjh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dqboamaw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hpfbeviy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ywpnoxqa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ivwnsdlr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163auginlka.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163csswnijz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lwxxwpiv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ocxbiggd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163kniacxdp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163iggqlfpc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xqvtdkyo.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fhxwlgsw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ztbndjlt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hortnmcr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fpicuzeu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vfgefjaf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ufkssxvs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ocxgywlb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zlutrhco.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163acmidlez.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tgvcmgbj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ysenfass.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tkniqron.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jacyprbg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163losxaqwa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zfftspbh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gsvwjecb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163cunvhbbg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ohyukqub.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fntacdbm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fojdqscx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zsheagaq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cwnuqfsq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zvodmoih.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ivopcagd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163vhyqgrbk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wyvbuwmx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163jvntnrgj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qolqbzso.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ynygcigr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eqlfryfq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kzhnvllk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163tcinfqgm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163forvrcrb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ekhbofxz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jouozegx.html


<!-- 参考信息 -->