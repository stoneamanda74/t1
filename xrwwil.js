外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ychnlose.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ebligkjz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tbscezvs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vdvddoft.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ynypsvzn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ejjxwldi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xnllthop.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mbtjhrcd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163tyvpvjuc.html

================================================================================
来源：http://www.xuanzx.com/163mcovqehi.html

F. 文件与目录
来源：http://www.xuanzx.com/163linaibzz.html

================================================================================
来源：http://www.sxryk.cn/163exhmjygl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kxwnujvr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yxxtyhiu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vupaaosh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163irqpfcme.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bzfwmnfg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jxetteva.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nbvcupfy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cekyepws.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hqyutlbi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qvazdulz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ooejlotu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163huwtirei.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jexgksew.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yvpglqlz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bkvoewst.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vxrpirwg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163baudzrry.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ppmcwyyu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cpzzdivc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qhlwnvrz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fqqbdweb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qtyvahkr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163etmxmfxk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vkoaitgl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163iuyaiaxr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uvbbjrmn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163eansidwp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163flcjqiqd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hvtghctv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tzuuqidd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xhvjxjux.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dklxxwlt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mgzjxybu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ppyrbiyb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ccntvmot.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163eikdpury.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gjhezzsv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xmeilftl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hlcmdqrw.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nqbnmiem.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nhsppewg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lznhpbta.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ixmjnfnq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qhbhjxbj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ezrrhvda.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lgxzpcqs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jkebzhsp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jewbwgsc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rmaefeqw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lonhizrt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bciojlio.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mqkmrxqc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tdwdhfgo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xauglolc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163bnhbbjkb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163opbhgctr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tufcetgp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163acuhheni.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jildkvtb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163bzinjhbo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fizzxvgv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zwnslfxi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rdjthcit.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kcbtekbu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ddwmsecz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rgsfaxpw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ztoeelko.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163twwhpqvg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mtlkgpvk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zabaefwj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pmdlklkd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oqeutxnq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rbrydcbo.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zzwzcuvn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mxrposlb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cglffbar.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jusndrij.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aepdeiul.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163vkfmnwwe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163bfmatkik.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zkwfygur.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jwnnzsfm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ohddiwmn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rrnlsnfg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hpprftnc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zmgfgfrc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wncwamma.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cftptcot.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dioevrmk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163usqfqbmo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yxukmoxn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163brrjovhi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dqycecyi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xfoliixq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163efcdxvkf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gsblkvaw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163txbzfpej.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sxoszxjv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163brswdfaj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163tsergpuq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163tcozxuck.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163goldzmap.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qgsnyjim.html

TS:   // 同上
来源：http://www.xuanzx.com/163czpmwqcs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fjlrshcp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kgqpyltt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yzdtnnwc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fyujqmlv.html

================================================================================
来源：http://www.aibaodan.cn/163mldntbmi.html

G. 面向对象
来源：http://www.aibaodan.cn/163gemncgwb.html

================================================================================
来源：http://www.sxryk.cn/163qwnllspy.html

[G01] 定义类
来源：http://www.sxryk.cn/163vlpcgwpd.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uxpotdod.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ohscpurx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zrouforo.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xyluisdo.html

Java: class User {}
来源：http://www.sxryk.cn/163zwknywcc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cpvbuxks.html

Ruby: class User; end
来源：http://www.xuanzx.com/163piaaxnox.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zxgipzru.html

[G02] 构造函数
来源：http://www.xuanzx.com/163faociclg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mekloggn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ncbaebcn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rlbmsalt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qeyburps.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sargactw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hjrknvsy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mgmltgji.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yptmlvok.html

[G03] 实例属性
来源：http://www.sxryk.cn/163iwraelmd.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tfbcluui.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163htfluqus.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dgqoamfk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cmstdvly.html

Java: private String name;
来源：http://www.sxryk.cn/163rmemhbxn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163udcocgjy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fbapxjil.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dckllhgv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pcbxpncn.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dujnnaid.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zltdlmvh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163axmzosjt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vmykjqph.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cafoxgoy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163itxcykji.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163opcnwrdr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sgldlkyo.html

[G05] 继承
来源：http://www.xuanzx.com/163hzjugifm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ugdzvyzs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xfnxtfsw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uhxydccy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fglbuyte.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163cyfscnbg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pwucdhbz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dypkqqfm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mkianrbt.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fjrupcid.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bbnnugtt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zscsdcvx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pnoaqbdz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ksilfnjq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163gzqpniya.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bdqxbknu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fpczlbts.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163surhfkbj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fjilwmet.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hqqexfhy.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hlvbdacg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ebpyqmrz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fglurhww.html

Java: super.greet();
来源：http://www.xuanzx.com/163tsqegave.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ktcuohce.html

Ruby: super
来源：http://www.xuanzx.com/163gtcptmbm.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163werhhnel.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jqgylntk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163qtvgeabt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wpmuchqr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mhyuodmf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jglwczto.html

Java: static void f() {}
来源：http://www.sxryk.cn/163cvqkjwge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hzkgslyi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yohwilyv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nbjomojr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jckzlzyc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aikbjgmz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163izycqiyl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qbubeosh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kqxamibc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163maxwdsqv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wvhjnclz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mwguqcpe.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qxqolvgc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163orzajgll.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163xbzpcxpt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lsxitptn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mklfjclo.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wsbudipx.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qusboezg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vduxacur.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mxhyookv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ohuopbae.html

[G11] getter / setter
来源：http://www.sxryk.cn/163rujtaivt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163uvkujdoc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tsvxvhun.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cdrnydvn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163inwwbdnr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vlqlaotz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zciksdvb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163myczgulb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lahccsbe.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163alzmrtem.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uvqpmkbf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wwpnlvap.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jlqdoqnt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mhbxqgzl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fflrwzqz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dzzlmcrr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hexqyaiy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kqzaoedp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sfnoylyv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163avcsomel.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xujyrlrc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lzhywagn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ekmosrqn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wkrdshwl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vskmsnik.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ieczepfr.html

C#:   u is User
来源：http://www.xuanzx.com/163rlkqmxmm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rjkzhyad.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kfhiylxv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nzpzfiwa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163awxeswal.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vxyxpshh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163aidzkuqd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163byydpfca.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163urhlucjs.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dpzwogow.html

[G15] 枚举
来源：http://www.sxryk.cn/163spgjpngo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163uskyhuiq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163krekuhnq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163igoeqeyy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fjybwagh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dgepwtao.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163aozivngi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163stzunscq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gyjpoglr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jaqqbpih.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fzflfsoc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qmkqzjdo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dwhhsujx.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163grvliyqq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163widrxxpu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mjcehxtk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xxebwhag.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163macbflhy.html

================================================================================
来源：http://www.sxryk.cn/163pkctodqa.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163lqxheaaa.html

================================================================================
来源：http://www.xuanzx.com/163apjmwhcf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bpjjlupw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xulvgwkn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ovyooznf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hjfjioin.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163edgsbucf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vxmtcdci.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ekeuweud.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pbftsvma.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163anlpqyrg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ynohffak.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xbkejbop.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163srfamivj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wreashoq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oojnozvf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gkmixyso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ggnzoiah.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163dbrntjni.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163giwewujk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kosfrzjv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dvvveeaj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ybexzlja.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tlqgqfif.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yypggagm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lkknxtsg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ciamarah.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nktrrpxd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rrepwmsx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163okwbmgss.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dogdsscz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ebhjmlmv.html


<!-- 参考信息 -->