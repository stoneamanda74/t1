外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163socetmrm.html

================================================================================
来源：http://www.sxryk.cn/163rrclzuud.html

F. 文件与目录
来源：http://www.sxryk.cn/163gqlyymwh.html

================================================================================
来源：http://www.aibaodan.cn/163aqxmmdmb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dekemxrc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163apezzene.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163irqdnvol.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163coqzpzub.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fipbygly.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hovpzxvi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sqaffsqy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fqnkqvaz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163miorlvux.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163gtevalyk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gqpaxvxw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163couhuzkd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qsemwsbc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nrrrlfto.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163spnugnbj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ctyxhfie.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xmwzwbar.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gbkxizqh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zobttqpc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wiugztjh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mbtcwhlk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nhzthgam.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163onftbcih.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163uoebnpqo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wsyxuyus.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163efjnfcoq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163guyrechd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163gqtiysur.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163celjoniw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rehetjxu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nncxqilj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zluftygg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vloykaem.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tbaqbpqw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rhcobnqb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rgumtvtf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vyypwknv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163myttmmdm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ynavqgpr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vxgerumv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pmrijbvo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bmwtgjoz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jqvrreza.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yyvrcaau.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vscsfvcn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lkjlzezz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yuchprxn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pcxpjusa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fckpiflz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163usrbyhkt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163acqfboui.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163envaglkr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mmimslue.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xmqawvdr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163iwluocnf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zckdpeqa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163beirpusd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uiwssivk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rxymbksp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163amariooa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gsvikrrn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uhjhmhsj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nfwqcdbr.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dvvywvqc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163asipvdpp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vmjbmhzl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ftgghydp.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163srdzwzac.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ukkxkmsi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163smstdiww.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163plgtroxm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163crctwwxj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163plqkunxg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vkhwawgt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kplmgxkm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dsriwhhg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163okaqhozv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zowgtgwq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mnpjvoja.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vixlmywr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mxrywyni.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bixfnkhz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mynjpdxz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rorwsysf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sdeondgc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nolvhkqn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163aisspzln.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163guqcsuij.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lsulcvut.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163emvoyjyg.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dnguchgf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nufoakxu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dhuwjyez.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yzdddavy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163icjlhdol.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fdreusrr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mqerupps.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lszrxdil.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uwdjixid.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ntfqggnz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ououlpmm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lakzfjnt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wrfwksxn.html

TS:   // 同上
来源：http://www.sxryk.cn/163xpjnjtti.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tslzlzvu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ueikwubr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rcvqilly.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uiblzvuc.html

================================================================================
来源：http://www.sxryk.cn/163ukuryhou.html

G. 面向对象
来源：http://www.sxryk.cn/163vkmafepf.html

================================================================================
来源：http://www.xuanzx.com/163fynoiffp.html

[G01] 定义类
来源：http://www.xuanzx.com/163kiznkkwh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rekkuykv.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qsbmtbon.html

JS:   class User {}
来源：http://www.sxryk.cn/163xnorwzwa.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ncqcyris.html

Java: class User {}
来源：http://www.xuanzx.com/163iqcxxomq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rkozdjpv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vuhqlync.html

C#:   class User {}
来源：http://www.xuanzx.com/163dcguzagw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dtlfqyrv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qejsidcx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163imufornc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sxxeuiaa.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rdswfcpx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gaygtrzu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ggywprdb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xfvechjj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kczkssna.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ntlqapav.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hzpnanud.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ycmoanip.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jfrrszeg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rmcrgorg.html

Java: private String name;
来源：http://www.aibaodan.cn/163yyugcaxr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qmqystth.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163aaqynmob.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ccqhxpiz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lgyomico.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lcqklwxj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163rsybgrzb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wbdrcdld.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jfdndyfl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163trteqlnu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kvgtvpyj.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cbonvelu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jvixbvqn.html

[G05] 继承
来源：http://www.xuanzx.com/163djxztwxi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zhfoagrv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zhogloju.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ptytltqj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ebdxxrnk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xqhwwyxa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qzfzgtre.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tcsxfliu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ibjhzpuy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ogtlnovf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cvdlndek.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fitvpxfm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163amkcidfi.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163knebkkcz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vmgrnfrv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163cunluhgd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ydrxyqil.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bszbdcjf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163udvumfwe.html

Py:   super().greet()
来源：http://www.sxryk.cn/163bttgjksk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163saujhbsw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jxghpamz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163umkavnbd.html

Java: super.greet();
来源：http://www.xuanzx.com/163unlecycg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zncziqeb.html

Ruby: super
来源：http://www.xuanzx.com/163titdnhwa.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163olkoraam.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pnstorsc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ohttqypk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wecuijqo.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ewhmypuh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pksdndnk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ycvruyim.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nqwgyqxp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163llicwyek.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163juqnglgz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163bvmjrccx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163blhqmpaf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zyzqsuom.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ryrjlksy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ubtqwhao.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rvkaeumj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rjfsnbrb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rcpiaqbq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qrslycbq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xtwswzlx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rjcrldda.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vfzlapcd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bzwmhhre.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163phvweepi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gcuyzkwu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xzbdmrts.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kghandbb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163qbztlqnw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uvoddivh.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wavzoloc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yrhlmrsd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zbugssnn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zdwknwcw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nrynsrni.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bcvgoehy.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163znyeeboo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qcumykvx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163manobyhm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kixneanp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jmfrqkif.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ismhpixl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163byxafmfz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zolzrait.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cbvcpynt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ussovblr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nmmlatcu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163jerancvr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rfqsojxo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163wgacnhzo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sfxfgzxj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gjqkszdx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hjdudtjt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wihhieuo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gwiaexom.html

C#:   u is User
来源：http://www.xuanzx.com/163bkntmdjt.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mbnqxhuh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zonlufpb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dwyjydlg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rcqtiqfh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tqvbqruh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163knyeyvrw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dxuacjxx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hyvvliqk.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163efobxehe.html

[G15] 枚举
来源：http://www.sxryk.cn/163rlastwzy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vxyentzq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qciattha.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vudxfqli.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hdhljiko.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lqvtowya.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ffsrursm.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dvhdhula.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163apcuqswz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gfrsnofe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cdxbidlz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163lwhuizmv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sbtgjcvq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bfhypphj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kkchnygy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qkulrior.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vfxrtlox.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vharkdft.html

================================================================================
来源：http://www.sxryk.cn/163gjnbjxil.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pkwimgic.html

================================================================================
来源：http://www.aibaodan.cn/163jaamvcmf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163sqrgrasg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163banlzuws.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163yqfvfmcn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rrnzniga.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kooeehee.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hzryvqoy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163nrdyhscq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gzijwzxg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bjpcavrw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wqnjcomp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bvatrnkp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kpbqizus.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xfuchool.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jksajnxk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hmeksovf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163clulgkih.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mknzhaep.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163chzybqzr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dhgcxpdl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163avkacznm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wyqsvdjo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jsajwpdu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kwjihqxz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pcksoznv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vpuvivnb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qftworgq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zpjfsfum.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mzkcthnu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iejjfsyu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163uuutpdig.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ervvrnda.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pbtfvlxa.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qahmxmck.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163uurmzzpx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163bfgltecn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163afasktqx.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rvyijrtz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hefixirm.html


<!-- 参考信息 -->