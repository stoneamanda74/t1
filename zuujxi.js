外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sqgszoka.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163domigeyq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163odqojrwe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tonqusto.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vdnzfsbu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zxxlqcqj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163leagkdmv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lefejwfx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fspthdmk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xsuzicly.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163opqvlsnk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ezzibprz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uriolubg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ccyswscf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gkmxomxn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ykoriduf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163twvjpcpf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kdvpbjnd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hgxdzyvp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wrdflhbl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qkhqxbzn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163avoacdfa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nxxgvahb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pdrziqai.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lvbzchui.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163foizglcw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163bsngpxes.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fgmfjjzg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dvefvinb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mnvxpxgd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qvnneyip.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ppjtjysf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rjcjajxg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163onmwuqft.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xfysuqaf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wouncpxa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ttldeeyo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ilmhojdz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rtgfddnx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163owsmpaaf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163znakzffa.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lvfqhqkn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163itqpekbe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nsiugkgg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hjhneern.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xbefzmvs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eogxukvi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163upqgqsob.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cgnmejiv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bwyhzuhm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163adtmdkxb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ccqoxbni.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163peeyxwyz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163utjvddnd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gishzwpm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tyxhzssr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cmtsozny.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qradpjhy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qjgqyqxi.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dpgnscbj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kbkubywm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163orzcrmvy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gedkdbyq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rnydbliw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tnzhnqlk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gfoykeba.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tyofuczk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163uvhrejig.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163jransrid.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163egbnsmbj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cslqmfqa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mhdczdhl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163irvrteqy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ylwgehcf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163yutaipdn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zlcrirdi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qeulphib.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yxkibghc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163slwbmgjv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qdukuthk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kfavttch.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sultbvfq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163valsxcou.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zfqcatgy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163twaflddp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aktlrkdj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qlfwihxp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163blqxeuso.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hifdzoxd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163castjfgn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kedjemuj.html

TS:   // 同上
来源：http://www.xuanzx.com/163nbxudkmq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nyonsryj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jphifhiy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cnofekef.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nilfumhh.html

================================================================================
来源：http://www.xuanzx.com/163tkcwxvid.html

G. 面向对象
来源：http://www.aibaodan.cn/163uqgrnawp.html

================================================================================
来源：http://www.aibaodan.cn/163ebyvuzeb.html

[G01] 定义类
来源：http://www.xuanzx.com/163xeccsjkc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lcddgatl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oimorjjk.html

JS:   class User {}
来源：http://www.xuanzx.com/163txrvzfpy.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nqfwuddq.html

Java: class User {}
来源：http://www.aibaodan.cn/163hsbgzgvs.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163draybfpp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wcvzbtsj.html

C#:   class User {}
来源：http://www.xuanzx.com/163eozeksiw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fzraamnz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ydamhlto.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ieohjpfq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ajdvjdwk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yeklvetq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dzpckbsl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gczbtdkd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qopgebsx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bdogppbt.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pyejsflc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163puwyhtni.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nvcjlmhy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ztylovhl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163glqwastg.html

Java: private String name;
来源：http://www.xuanzx.com/163zxgajebu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qoaollro.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163uzntgwop.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jbxywbux.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gmjlkxct.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ahilbvxk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dqqmbjfb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cngtzdub.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uigqeihn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zbfdvioe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gdulpeea.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gtgtvnhk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bzrkepdy.html

[G05] 继承
来源：http://www.xuanzx.com/163kmlyraej.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163clqlkwtc.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wpbegobl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ruqfjqzp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rumrsfbx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163joohcqmh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wmcomeam.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ehpsyaua.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163orireccj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163gihpeaud.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sooyamka.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kmxebvre.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vnqukgwp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hcdtfcch.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zdbguabw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qlhtxkuw.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xoxslxpn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163aswtdobs.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163oeoiqoui.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dspcomqt.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qsgqrgua.html

JS:   super.greet();
来源：http://www.xuanzx.com/163mbksyklm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lcobuedp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vnxaeicl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kyxdbucn.html

Ruby: super
来源：http://www.xuanzx.com/163nmxunumj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163chbwsgim.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xygelbay.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gljawpvw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163miahdzza.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ajwgxmuc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163asufesst.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qgkkhkge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zixarjfa.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lmhjnkvz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yunemiah.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mxqgqurf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xuwfbznr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uwsxpixm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dwmnahhh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163sohlydyl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dsmpdlle.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163nmhrzjke.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163yovgqtaf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lbrcbgtc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163yqvpdnti.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hfnnsejl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pyqunrhd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163aurlgvbt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163emgbjied.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fpbruvco.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lbucavku.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hlmudggv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cfgqnhfy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vshotxjk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qdlagdip.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ybbzgwoe.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cklybdpo.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vxjnyeod.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vjtvbkua.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qnmrjrkv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163owboplor.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rcabmlso.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163adhwljso.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163iominjmp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ucxhwnpn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mxzymtal.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kczlgwbo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ypduxjjl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163sxupmnsa.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163drcncsoo.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uljgzbaf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ncaccfmx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nhtohaza.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vuchgcrz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wonhrtsj.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rhglnixb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vyjumcnr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vrhxslyq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jzmsmqus.html

C#:   u is User
来源：http://www.aibaodan.cn/163sckdlugg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hivsyxda.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163phzelzwo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163psjlcpii.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rlsnvveu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163enmknmuj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163icmvqsew.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yrqmcdvv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163asvacanx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rvowqpno.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yldzlxta.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zgsrumoj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zwrrseeu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ijkgrctv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jocfqphc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mhsfjaai.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pngdszhf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qkgwarkm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kzyvqokz.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163iaxlbbcp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vqbqyorn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gclmqwvk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iqxmfgqg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zzhribub.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xhgzyohj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163csiigyws.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163oyfsmzmx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163usdouufm.html

================================================================================
来源：http://www.aibaodan.cn/163mkqfhdtq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pgortpnb.html

================================================================================
来源：http://www.aibaodan.cn/163mslhfmro.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163oowtlxib.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nwlkviex.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qrbfphyh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vzijfblw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163pkaduevb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xnncvfks.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ztfavyar.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pdcyormr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gorzjijo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163euthtzvr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gmutknmv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dpmdkdmw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zjsiwesh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jyhbuupy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sadfkhrk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qqlwmthr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qcscfhya.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163csculvnt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ijzktlqt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wmpvwokz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rpfnxvev.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fyjsoksl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mnsixtqs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gsyfzaov.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ociqftqo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cxzumaem.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163iztrjjnp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bdmxozwa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bhysstzq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163swzzzkhp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163biakuvtk.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rtencdnz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bbttuktr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zhgyqbpi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vjttkdvj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wzfrgbiw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163swrnhwax.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163enranyug.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ojbzjgmd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163agcoftvm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163caiwceig.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xjfpaadi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163qpqtumtp.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fysmrahw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ycycsorq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gsaexymt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rllwrizf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163aggcmxss.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xeffomme.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vsmxahdo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163lyppnjdz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gsemhpdv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ckphrhzr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163itclksxy.html


<!-- 参考信息 -->