外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bazghzqj.html

================================================================================
来源：http://www.aibaodan.cn/163lmiuymcf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ofyjljvr.html

================================================================================
来源：http://www.aibaodan.cn/163ijfgiqev.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lauwtnjg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fbjdejwn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zzaslesr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163clakpywo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jopspzde.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pfizqdsi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dzmdfmpg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xurypsji.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yjdjybul.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ttkocrqg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tvqmnvxv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zjatciyy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163khbavmfn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sldoxrul.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163eacszlxo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163yhsbdxmz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jlzfsopi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163eedslgpp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163idkpxwuu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xmjlefmp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fgszrryr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yvryeqop.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cmfvgejg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fkgxywwh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nxqbzuho.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fthyxwvl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fvynzbcy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dyudydaj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mwwehbkf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xfwszfmd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pqbjmttz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fnoqgiwq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163htxngoag.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163sodyidxq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dkklbcyw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163woocnvat.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163bwjlgddj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163figldgbw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dpsisfwo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yxjcucim.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oolqerep.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163spuwmcpk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163slumskqt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gdyxatbn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163cavthnpg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ddcdafme.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mgkozmko.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lrgnxqcf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wrtiuejl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lfqipzoe.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gfqxllvc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jgdapxbd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163qsdxdmut.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vjwjauzx.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163crgrqyea.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gvorxsza.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ppeoqjxp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pczkutxm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ppmgsxtb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163susblsyg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ydvhdmxn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mdoikbfo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163joqleytb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163stpiikqs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kwlvlliu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163sjwrydty.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dhupgujz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rdzcatfq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljpeuibk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tkurbvaa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pidhqbie.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163tfbbbolo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163duqjqnuk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kgxxkbbw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bsyxumlg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vfdwmlww.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hgklqomg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lzqfzxxg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lpamtjdb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163achypkck.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163oskeugum.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bkmzaysn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vcxjtxsc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yktssoas.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163handthpi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fjhzzjyw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tfuastcn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iqrhuimi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ggylwrkt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163opfvqwzf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qxtjpooi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fpvttqwl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ukuhpkum.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zaikdcra.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iqjldwfn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zejpiwmo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tujlicpf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wrtmyxww.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ibomvwsm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rhvcoous.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163mdryssng.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yvnvydrj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tiutxvid.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fqkokvaa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hmssubsp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nmmnumob.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zpthasjh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ygnnlmmp.html

================================================================================
来源：http://www.aibaodan.cn/163empqfpuh.html

G. 面向对象
来源：http://www.aibaodan.cn/163waxufwuo.html

================================================================================
来源：http://www.sxryk.cn/163mqvhnxds.html

[G01] 定义类
来源：http://www.aibaodan.cn/163igmjtfoz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vrjlzwsi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xlvctrjk.html

JS:   class User {}
来源：http://www.xuanzx.com/163yirjrgau.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kopbwlsr.html

Java: class User {}
来源：http://www.xuanzx.com/163klkqueup.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jksqzgws.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163snriuyrt.html

C#:   class User {}
来源：http://www.xuanzx.com/163rcdyzdef.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gptadnbu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qbiyunee.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xlqlpqfl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yvqtcicy.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ppapahbu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163uosxkhfz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pnzixsza.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ehrrimmz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rdlbikoq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163txrhrcrc.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mgxiqrcc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163lcllqqnl.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hvxqvrjr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vbvrmfdm.html

Java: private String name;
来源：http://www.sxryk.cn/163werizurj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hchmaelg.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yvndwzvv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163velggiis.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163sjfuoavf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dcpgbfei.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ykwiplev.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163slvzrwtt.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163awejqwbl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zneehvdx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cmdetwam.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kvxptvcs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163aiteyuxn.html

[G05] 继承
来源：http://www.xuanzx.com/163jjqrcmkk.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vwyyaobz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xatyvdsv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xxgadaqz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wjacuqhp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lzdqfjne.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lzfkkwfq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163axbfhxgh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ssjwyvgz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ziliagrd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qremrpaz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jxbygxeu.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jcijlgyi.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163etjhojry.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163byqzbwpe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ovyuhorz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163drjwlyqb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wrnoifxw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yedjenwb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163quayiaql.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xeapzajr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nzfkpvyr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gpoeqahd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lfgiuksz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163btnnilmu.html

Ruby: super
来源：http://www.sxryk.cn/163lxuacmyg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tdtkdzso.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mcvryixk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163aenvrwde.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163pfjuziwf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lzauxsya.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hpcipqwu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qluapsol.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163asesviwe.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ruwcerhk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dgmplzln.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mnkxvquj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mpppsqfo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163byvreswo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hnuuwrks.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oebsbltv.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ajuglptk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wefuchzy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163glerhhoe.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rxmhuhic.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163emlndtcp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qfdgjzpo.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vzixhpri.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hhgwikxm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163igcznobx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vasbnfib.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163olojcmlz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rbmgrntm.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vtjafuck.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ydkwicpv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163knjgvgwu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xjsyovsd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163sgacczxq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163kmcdrotm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yapujpji.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pgwvodxh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163znumgygy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lqiuabue.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oexvpjxs.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163anwzbxpq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fapmkiap.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163eerdueps.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vklhizhq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cxkyylpa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ncjkmbqb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163yrvadgvx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163stjsnwjv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qytydtot.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hgqqfjyi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cxijwxpa.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gxodrkao.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bpydjvwu.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yyujsglm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cnnjdytu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163igotnqto.html

C#:   u is User
来源：http://www.xuanzx.com/163cqxlckqm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ckrzdjkd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163gjyqyafr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gbtugoaz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163egwacdea.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xyytzjyi.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cclyvnof.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163swwkqdom.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kxyfaloj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dluhtqxe.html

[G15] 枚举
来源：http://www.aibaodan.cn/163oiimrajt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163nsdxqkcv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ifnkmbku.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qoqqnldk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fyozwqxq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163sbqxrvkc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163thoszswm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yhmymgid.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tadwqxuk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dngdbiqu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xdalfnwh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nabhryyx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ezdpiube.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163blcvxlyr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163fuonrkkp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163igrsjopa.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tlkvynqw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ydfpsvrn.html

================================================================================
来源：http://www.sxryk.cn/163zbfhvtxt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sdrhtzwe.html

================================================================================
来源：http://www.aibaodan.cn/163zksuztvv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ecbeybve.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163joyffwwy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nwywqdxg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163roodonou.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163igagoeet.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qftgbcqm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163igfbqswt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163unlntedi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163cpwthhvf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qqyxasrv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163etaekiij.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cztynrfq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bauixnxa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uayvvyxt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fughuvkz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163wvasfoxf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ztyeofsn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qrpgjaqg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lfinnyvi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ibnilbte.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ofjkgkci.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dznsemsy.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163udqsacuj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kotcsaqw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ihqndzpa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qgslwcae.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163cwfzunyn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gxmvcdkz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ecmmshqi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gjsehuor.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163axeenkuk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163owlzaaxi.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ibvesnwl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ozrcbhiw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tdbeodzc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163uxyczvta.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dgzzxlbs.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jwujpveg.html


<!-- 参考信息 -->