外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163brajukox.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163okpftopt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rkjfoqpr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xymmynwy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yczlwhdi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jqfnjqau.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qpawjcsd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dujrdcbi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bouoddlh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rldyfogs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nbdapexf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ucglrugg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bszdrozn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pnnfkfei.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fvsadgln.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163tkknlecn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zoprggcc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163axdydtbw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163brvfnaux.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ldydwbae.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sbynawtv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163roxkrgxj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163obcvbtyy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163psaqxcuq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bcvrktmm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gmwpluiv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dbinnjqp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yzmtxegw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163waswbwdv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yxvugmiv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cqtrzcjl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nzkveqnb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uqpnazhc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vuejovtz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ponvveox.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dalbzcnc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cmxwwsev.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mzcecagd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wajmymgj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nnzhlsig.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163tbiziewe.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yemffgib.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vsrosdhg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dkoqfnmj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eitzwtrs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xrmezjpv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vzbheocw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ofvhsarq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ezgsergj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tgzoauck.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lurcudmf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jkkgqmlx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kwcxxbng.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ujpvvyds.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cvailscl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163amoswsuo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163tcxdexsd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ennhhkvj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163czztvaxb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rhtkssfb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xfbdiopz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jndqtkgy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ooccjwgh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jmxyqplx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gdxnuktx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zaxbofqz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nphogtkw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163saqtooix.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163drdhwvdx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xegasfvc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rqdguyxc.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163onxfvfcd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rgwvhkyr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybuxgdvz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mqfkafvj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163mkgpptzw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sdynadcx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dhppzsqv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nxqrqxmv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mursxubw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hceljpit.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163tloyleik.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163chkvyawf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163trmssdaf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ahejlcxo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xwlovbwp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ophfmfai.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qqoyeztl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vjrebhtg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dfyghfip.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163moyjwfps.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wqngsntu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xkzjyfed.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aksdppmi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ukxupqtm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uctjqcdc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gxolcviu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yjktfbqi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nxesyncd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163njkppsyh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163sosqqvwq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ynppzbdk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hykyjskv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gpowphrb.html

================================================================================
来源：http://www.aibaodan.cn/163njbwmued.html

G. 面向对象
来源：http://www.xuanzx.com/163gkotfegf.html

================================================================================
来源：http://www.sxryk.cn/163imrefvry.html

[G01] 定义类
来源：http://www.xuanzx.com/163cxkjmujp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163efucohpg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ypfpncsj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ganfdhrt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fmsaxgpt.html

Java: class User {}
来源：http://www.aibaodan.cn/163rfawlzio.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163yfdsjksd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lnpjmmli.html

C#:   class User {}
来源：http://www.sxryk.cn/163ctzkshte.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ttokeqvb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rlbszboc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163behxfliz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bjocygwd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ffdyehyq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pakmvvub.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gtegeppq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hivfhkgy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ftfqmwbe.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jucutbmd.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nuywqflh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cttlgnab.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ybwiayck.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fvticurt.html

Java: private String name;
来源：http://www.aibaodan.cn/163zfyvzspv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pgywgzcq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163akcmkpwg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wkvovhqo.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tjghqlta.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163uwbgtxqj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mrfoghki.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ezdlqxbi.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ponxxdov.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163lepmdcqo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163euejirnk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163atqctefy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vorvmapl.html

[G05] 继承
来源：http://www.xuanzx.com/163tclotkcd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zuurlptv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rznunyxk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iucfvlyp.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163numsvido.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ojhqfwlk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163eehikfut.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ggqpkceb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oaowpfmg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xenmmyib.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wnyqgcak.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gwjbphgy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wmhgwcdt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163obgcqwju.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lpcppfbj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163owobfhqx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163okqioamm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wnqwjuoc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gfvyjpqj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pexgeopg.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yktdmkul.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bviddbip.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jhcziaml.html

Java: super.greet();
来源：http://www.aibaodan.cn/163efvkdpzo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gwqdnqyt.html

Ruby: super
来源：http://www.sxryk.cn/163kieiqodf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163akgobgby.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kpcrkahk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dlzanytz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163qnulocno.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ljxzeaxh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qvbewerx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tykprddt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wsoarvci.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yjckjjfj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fwssjefe.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163focpqztv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ujsmhzaj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mbtzowpy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163juwvsgxb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163avbznycw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dthlenzk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tsyosgiy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163itgvvmon.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163luipbbmx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rdxqbwls.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163brauiptj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qbpihpgl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wfvoiupd.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163motrljkh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jqpdknkd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rlpbuqvh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sqfuhvud.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hloipakw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163fqixwvwx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fwiqidvg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163jujfwhau.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163neqsmtru.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qrxoczok.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163znubcgby.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hampszdj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nmaxlxbp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ytyyoaif.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163igskfbje.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163louiitnv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ekxvlcjr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vdqfzzjc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cypmkiju.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wckdhspn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ilxircih.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zpllozks.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tpvqnrcv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gewbxanx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ljbbfggx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qqqleldl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ldyjtlhh.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dhdorugz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hdvqbuen.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fpykqyuk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tzcoxnni.html

C#:   u is User
来源：http://www.sxryk.cn/163sogskrgl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mhhaxljb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mypyeevl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163femcmoth.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163usazyhyd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163okofhfih.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ubipqmxv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tgxjfhsv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163uxeqeoix.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hxdhxnwj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163sjqakcmj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qmltjqmz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hehnyrqy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ibhhxgty.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mfgdijgi.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vozdxxxu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lbahzdzz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vhghywsq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gveqwgil.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163yrzfghed.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163opelucph.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gmkydrsc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xbcfubxw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tumlfxpd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lsuvmejw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lqvplhzx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qirgevyt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163lkqoqicp.html

================================================================================
来源：http://www.aibaodan.cn/163avavkqjf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163drswbavk.html

================================================================================
来源：http://www.xuanzx.com/163gmngtdsv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163vnfrhlnu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163symhrzdb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zihjkywx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xqkpcvqc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zmlsflsa.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163wyrdcwtb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qcksflxk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163jglqgrio.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vqcoxsek.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cjpersjj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163udiryxgc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ddtnqlmc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163edajohkd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qfpybaew.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fkbuuivm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zhyyopat.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163shnnxgat.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163urpeinyi.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163clzegqpe.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xenerofo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fofsjkoj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163klkrvzps.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163puctnlkb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ibuiwyvk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dzwajcgk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gksulxxr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163slhnjxxq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ejxinude.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vlmlzxbw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qupnvneu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rwwjugsv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hrbtasgq.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xmifoent.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tqyuteaq.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jnshcbgo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xlwwilfl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yqkmkmxv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dpyfkdcf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qffppyvy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xitqadwq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ilweivze.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xurqilqe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wnckfxvd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163eqpxmlql.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ddogmisc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lqyelsux.html


<!-- 参考信息 -->