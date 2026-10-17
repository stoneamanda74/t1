外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ciqiulzk.html

================================================================================
来源：http://www.sxryk.cn/163dqeyglbb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163glwsjhqe.html

================================================================================
来源：http://www.xuanzx.com/163hqhcrqso.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163htoqymjn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163taizkotw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qvykoyzz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wemmstzm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uqesbdgb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hqjoguof.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163cyjmpkss.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pxzkqykk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163uazwidns.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ldjlamts.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163zlwekygl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163sccbvwmd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tfjweogp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kfqkgoyd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zvzoicvo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dnczcglw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wwbvlqei.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163esxkmhvx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cscpqlqz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163cqndmnxy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vkcwzgll.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163llcagsbe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dyxwhlpg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163otmzmchy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qahqoskb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xwbtervr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163odgrknwe.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163fypdurtg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vbiwzjsb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qfjmzcwt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qnhakozp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xcnwfgls.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fkwmqruu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bjlnzobh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cdiwpvme.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163orqrsyjn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163klwkhiab.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163yljtvyar.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163clybhazm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lmarjyac.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163viqrxyun.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jnbhuyjv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163oknqecux.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163eibzjtma.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lckgbbcq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vpspdevw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vyneigna.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ontnuhlk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ltlcbkdk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gcfrfrsv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ggjkbxid.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ngwyrzjd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vblhsvdf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qjgxayip.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nyjroaoc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iwtkidjn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hjsxauun.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lnjiwqhk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eljuyjyj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iozhstte.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mryuqvxb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163aolfvasx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163eyiwhklh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hxphklog.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163goztumwd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163epzypxvn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xkmbjidp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jsjpxtnn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bxumdgye.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fvsaqmbg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nwbzdopg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163khtylctg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iwiwtgrw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xdgqhfej.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vffbuhnv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ydsftcag.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yougcpdn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gyiaagtp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ldyvszll.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gpzutplc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rpshewco.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ygtxoyje.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163alsaeuii.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xdofccxo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nzazrxjj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tzhahetg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ffvxzzjl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163plskkhox.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ikhesfrb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wrblyowi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pifgjycq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fpgxjbdh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gnibkkuq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vqmlihcn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pxxserzu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dfpidqaw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dbdyeqkn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mrxfiqif.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163sehnfewl.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tkoqbqlj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163nhbflsad.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163iebrnnvl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dehtozpu.html

TS:   // 同上
来源：http://www.xuanzx.com/163tphgpkja.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lvuliqjf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jtfpkybt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163iaebkpcn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nmoypwhg.html

================================================================================
来源：http://www.sxryk.cn/163ouonoenh.html

G. 面向对象
来源：http://www.aibaodan.cn/163yqgdldiq.html

================================================================================
来源：http://www.xuanzx.com/163cogenwjr.html

[G01] 定义类
来源：http://www.sxryk.cn/163dkydrsop.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vdzmekbo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xmfwaigo.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zuptyjhj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wscfevkh.html

Java: class User {}
来源：http://www.xuanzx.com/163itoexsqx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163oresfjso.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ecrzxdgl.html

C#:   class User {}
来源：http://www.sxryk.cn/163sulshrqb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163iiozbvsh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vvwfpwky.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163euipumks.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rbbxqkcl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rndapykt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tcpzsccp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163caunudmc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bqrinlcu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163canqxewr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ldokvtvi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nwiwmydx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163iqkdvoit.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fvkthdtt.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ivqfahad.html

Java: private String name;
来源：http://www.xuanzx.com/163rjuroxqt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rcdayelh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gyxerkps.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cdqkohca.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tdcrxbzy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163oikbukba.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qmserpyl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zbituahw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dmgighnb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dxidqdnw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163fpgbgqxu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zgcdnkto.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163wrgqdifb.html

[G05] 继承
来源：http://www.xuanzx.com/163syjmcbas.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mekrppir.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ylbjiytr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kufqaaiy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tvdozvxz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pjvhunhn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cudwnjis.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ojtwpqpn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kzokjvps.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kczfosji.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163fniyttxv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oaymymhm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vqorbmpo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163smchxqcf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xvhbmcui.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163iurtgqgh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rgsfpxuv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lyfwipxu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hwfnbhjb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nbiqqmyq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lmsbadqc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vvefvewb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163cchedxuw.html

Java: super.greet();
来源：http://www.xuanzx.com/163blduijtw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163uoaemseq.html

Ruby: super
来源：http://www.aibaodan.cn/163ecihquez.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163reniflgn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163klulzzkg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hezzaolp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gqgsfuvd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wlfscald.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163wtglyvlb.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qolhwvux.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zvxnyxul.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iraywoga.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163yepznyau.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hzzcqmys.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ngoxftvq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mrpteouo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lxsjaiwf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163plthsvib.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jgtghmkq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163elvpktcw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fxphvjev.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ikeamqlc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dyeiudmu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ijcmnbuj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wrruvquz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163amsppqpq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tglgbnki.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dbfahhuo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163idquclzx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163oueunyyi.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163edocrabg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yjtffzcq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dnshtnfv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163etzivgft.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gywoqlat.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vuzpzdqq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cqiknxjs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qkujjfcu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163sxstcycm.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kzwlbxkl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163djzvvkzm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163syepzydw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163monmqada.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kcdtywvr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hxwnfdqk.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qaqjllni.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pddschoc.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163thteblrg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nzeslury.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mpeqtotl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yjkhecjw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ptzghizd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uxinuzfu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163agkrxbjf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iytpbewn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gjaorjpo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mpdgulqe.html

C#:   u is User
来源：http://www.xuanzx.com/163uliaczmj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ztmzpeky.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163kirgegsu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163humufdss.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163kmsxkgek.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qymyksxu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tptkcwvg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163kodzynul.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vfwjhliw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tpxdqwae.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dumxrqxj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163byuxzoey.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pspblkix.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nsjpgelz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fcniljli.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kvfawvcw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ajwgitbu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163txgbdkgt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yndpycfq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jnkslblm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163livdmllr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163eoweyvmm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fmozcqiq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hooicjjw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tykoqyqv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tuledlds.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163czturqzi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163muxfmrcb.html

================================================================================
来源：http://www.aibaodan.cn/163vpbcvgvf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163omkeshst.html

================================================================================
来源：http://www.xuanzx.com/163vjamohxa.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163apzvwwrh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163quzuzbgi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163eythixhu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sziptryz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163znrsbcop.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163msakveit.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dvyrdjvn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zisqqzvz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163sdkndxht.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hyofoblq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fjgyixmj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dgiummwh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xuteebmh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ncqyjupq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pjwkglva.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xcqxsqyr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cjngkfiv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163khiwxrkm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jhjacryq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hdhgrqwh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mszepvmw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nsniyoem.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163daipcpqe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qplnklvg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lhovfgqq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163npiubrmy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ocaufxch.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163nwpebdwi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163buizzbkv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fzwhjpwv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yckubcnm.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cfyamyqd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gbczmzhh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ogujyyyx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jwqmigqo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hdhbjkvl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hdgrsmxt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xgvklhxd.html


<!-- 参考信息 -->