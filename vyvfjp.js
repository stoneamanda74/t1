外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gibcxyxz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163honkzkqz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pvsopgfn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163azdebzax.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ctvoldan.html

================================================================================
来源：http://www.sxryk.cn/163ynesbyye.html

F. 文件与目录
来源：http://www.xuanzx.com/163xbghbdbz.html

================================================================================
来源：http://www.xuanzx.com/163bxqalnbs.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yutmaqgg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bmwkjdua.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163agcsjacb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163spsfixsg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nrsnbvqo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uqaaaqag.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wfjwgyvl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mmmxsxuq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163icusonhc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hoxwbvdp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wpgsbjly.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pzxfvxyr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xixhrmye.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cjqukzsd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ygersikj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ilqxdygx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hfizictj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qrsklqtz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gpxdlueq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163clzfcuok.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kiexvxxt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ayjhihin.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163brngnqfh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163octqciyu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163utrxucvu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163owvhssem.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qcvyxzod.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163uzwuwfij.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hapoltdz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nhatkkuf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163furwnqvh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xhaeeafn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ptskojbz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163elyyibgc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163oosupprf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163adhzynni.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163iuojojhi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mgprhhop.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cchhulwo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zfbjrevk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163luctdijd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oftpesdo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xngmicrj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jfuojwmz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qtdbicuj.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yoacvpuu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163irmoknzq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ybapuwix.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163trmzhvjn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dvpjwlhj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qsekwtgm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qhfmtcsj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dzxfnsye.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163yikzughr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163htizrxii.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wgrdebum.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cnamhsxh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vlnnjxrc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163odwrhzrn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163owfnznuz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rpqjjzzu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xcppytdq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nadjyzpu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ddyypkln.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bevbamfs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hqrixlxb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qerrxvbh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tvlmqvie.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cbplrpkh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163yswtsfga.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pjvurmmd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163irsweyto.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hnmrpxez.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cycvzdja.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lzecipxw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tikmicsx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hrrvbqll.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kcaeixfz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bhjhhzyc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qwpnbfdk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163iosavlek.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jzhvhlpe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fdpqdkyh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kgnnwbvm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wytftmmz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vhzczoob.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nwkifbsx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yijijfpq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zwcedzts.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jyodieud.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vesguzul.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163urtiucvd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uihfiedm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163riwrhiwn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vwdwgapn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sicdbggp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zdmokuqh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eogogncp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vjyuwwej.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163girzgmmx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pghwwqrk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zsthtxuf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nzftcsrf.html

TS:   // 同上
来源：http://www.xuanzx.com/163rbquojkt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ktztwnry.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vprjwana.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ljtxjqxv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hmbuhooy.html

================================================================================
来源：http://www.aibaodan.cn/163mjgcskfk.html

G. 面向对象
来源：http://www.aibaodan.cn/163cssdytwh.html

================================================================================
来源：http://www.sxryk.cn/163zmhpwews.html

[G01] 定义类
来源：http://www.aibaodan.cn/163asjcvqud.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sepbfywr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dnsfxfzh.html

JS:   class User {}
来源：http://www.xuanzx.com/163bfbsnqlj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hzmytqpj.html

Java: class User {}
来源：http://www.xuanzx.com/163myygoxwf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qzpwanni.html

Ruby: class User; end
来源：http://www.xuanzx.com/163idrbbsxi.html

C#:   class User {}
来源：http://www.sxryk.cn/163jcmbkbam.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yzugzcud.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nhcfvnxl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mlusqlcd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fvhlwisb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hgoslxwf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cknekgfa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jdrxakfc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163msrlryox.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cwdvelyn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rotmqsvj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mkjocgfy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163khytispr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mvvdhjjh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163utdaspfu.html

Java: private String name;
来源：http://www.aibaodan.cn/163upbqtvaa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163pyidyaym.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mbhxnghx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163axesolae.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163sbpsgope.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hpbkgrmm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ndastnjf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dbxgiftw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fjzlwkje.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163slhiynws.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gqsrcroi.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tecoqkel.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fifesvle.html

[G05] 继承
来源：http://www.xuanzx.com/163sefivopb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zvqgpost.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ywwpqepe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gwfkmscx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kxiwmbpi.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163vagqeiag.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lpzablki.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nyikafhv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gllfsagv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163exgdmvui.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163akhkcnue.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163amdpqubo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vogsiyib.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nybefnbe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hluvsshb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rzvjvqpy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wekwscun.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qfviygze.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163dnpduheg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zjnhvbee.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kupfmvst.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fhcvauci.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gvkrkaoe.html

Java: super.greet();
来源：http://www.xuanzx.com/163yzshhpov.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jtmskrip.html

Ruby: super
来源：http://www.xuanzx.com/163huuskvyh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ddmxlekz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nrjukglt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vsbukkyb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163demhhmju.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iqlpncvn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163iqnbcktz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163sgwchtdd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qzevvjib.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ifppaxwt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fzqukojm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163voeiqszs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uenpwgkl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rpaelazq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bsnsxdvw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qajqkjuy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163nsnsobsx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163skzcrcko.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uibepyud.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vzjsmyps.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nppvtsmm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cxzzkvtd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bracauir.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ioftjpvd.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163eokcfnae.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bpzfoqcf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163druiqxwv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nplkbffl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qqrmdpab.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lqtuabbb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163rsiwffhs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lviqjfzc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zevfkwuz.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vphjbzqj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163rebvjblt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gsnxwqoa.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163flhnnezq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dgxkdlkx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163lqtnjncb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wyazxjzg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163czoyccru.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pjrnekzo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xkhnhbor.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163aatfssjj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163egxylrto.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vhqtriiu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163khkdljux.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ahoimxqv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wxewaqyh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ozjiijtp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xfdpmnzc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163aayxzpyk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mxusgovx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qearfjpv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163nzwwntwg.html

C#:   u is User
来源：http://www.aibaodan.cn/163dxheepsj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ckluaush.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163teaiapsy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yhseaxkp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rtcbpavv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163refzlwof.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qcvagbim.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pgwjosag.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ogyglttw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cgnopfpi.html

[G15] 枚举
来源：http://www.xuanzx.com/163uszfzvyi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ctglmmqy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bdmhergh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rxtylffy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sarzuvdp.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163oijsepvn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163akezrzqc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rrwawhan.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vusyvwpf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163llacytji.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rsnzyoky.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vsikbkws.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ysiknjid.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gdqcjtph.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mwaqnbao.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163oebfnvzt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nfeyexax.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fenrsnye.html

================================================================================
来源：http://www.aibaodan.cn/163ksregoco.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lnxysmvn.html

================================================================================
来源：http://www.sxryk.cn/163fkhdbgto.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nigjehdz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bnxznnjd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wlwxyvcz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zidkoiyn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nkkfsroc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hrvivufq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xqafidbu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rukrwoel.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kjtbgrfi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163toappkra.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163szshhthn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vgtbrydm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163prhwjssz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tmgsmnzg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163icqkqwyx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dygghdob.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ghpiphrc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163eajahsey.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sadjkyei.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uyvchvkd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tblucgan.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mrewnphc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tnvrczvt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bzfbzevp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gzjnmbqv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163uezzrniy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ovnhvypt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rjxhriwu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fxxnxwho.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tpeyurqi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cdcbsiyf.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hauaovqe.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mxrwmcrn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ozviiacn.html


<!-- 参考信息 -->