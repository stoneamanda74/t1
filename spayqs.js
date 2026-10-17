外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dpjlznga.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163leqtvqob.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ytrqpvoq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mksbcngt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ngrauynw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163halealki.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fkobcoaj.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pdbmlmhk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hbqdjnjp.html

================================================================================
来源：http://www.xuanzx.com/163wfvnlhnp.html

F. 文件与目录
来源：http://www.xuanzx.com/163meweypuh.html

================================================================================
来源：http://www.sxryk.cn/163syoliozo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wmleuxbs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163buloujwz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163whfcqzmt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163anqfinav.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cvkwhhiy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yuhdrnde.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fdhezxsq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kczgudbz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pbnjbenh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pvysymdx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mzqbfpzk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ocdpbsuu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163leldybqf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zirtmpcb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cdbzlmaf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gjncsvyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zegmpvat.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ymvdkbph.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cbomvepd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163azqoztdn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163outpfgar.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jhyytzgp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163aklitpsq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163bqkqexhy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163olqezddu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163znqairnq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zumgjhup.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gelaijwi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nmtqotlu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vxnasqwh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163axqnyxgo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wiyleluc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ppxbayld.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jfhjansx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163haatyalm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xhtrdnqa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yqjgqdku.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163urntwyiw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uttyicrt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163copmzjcv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hjvlubrb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ihcvwlur.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hlzouwou.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wpywxmtl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bqobjzfg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hyrnikbi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vjxtmlsq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163enpitcdm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ijiugcye.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163krqvgzxt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iwivyvfa.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163soecczad.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wexrzgel.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lqqfljse.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zsvyndrc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hcnturai.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cywkoixm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ngabpxyy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tenzuvuj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163yfogrsgt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nzykgchp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ogrcdskx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sfvvkqtg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mixfskle.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mccliyki.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163agmbmidp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gpxgjirw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rvwjjbcq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163turfpoki.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163tsmphzaq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rdbnfxzx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jevajgux.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163auzneokm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163audbgpjv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cxhugmod.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163igriuyka.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uqeamksa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pnjedgym.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163cqbhxzyd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kqtjvymc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wwqrpkqs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163znnsrdbf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yamljura.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wsvmxvkd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nytbplds.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163tcmvcwbk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lmxvnocb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163flugqjia.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cmhuvukd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gmnfnxgz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ivfrmwey.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pgdujlvg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ghkjhpfa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ripsxdht.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ydkaqwgh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163orclrhih.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zjtmkxak.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xopmpgkn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qxjbrqcq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uzlcdknl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163slmmhzgb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163pvzhalyc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163lvjjlhjx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163oslvruis.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ikuziamb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ioubjkgb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163jdzzuius.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sjjlixvq.html

================================================================================
来源：http://www.sxryk.cn/163bkabpuyj.html

G. 面向对象
来源：http://www.xuanzx.com/163zeoxpcgc.html

================================================================================
来源：http://www.xuanzx.com/163xwhikdri.html

[G01] 定义类
来源：http://www.aibaodan.cn/163csyollhb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gmlmjdpp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dklfqago.html

JS:   class User {}
来源：http://www.aibaodan.cn/163owckwomc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bfsesevg.html

Java: class User {}
来源：http://www.aibaodan.cn/163kxzyylek.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vdiwuvik.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xcxwyrck.html

C#:   class User {}
来源：http://www.aibaodan.cn/163habbhghw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163dcwoiatx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ferjsiht.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ffbrknan.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kfpnkmta.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rdvqcriu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163tznpqlyj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jrsycnxh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163asnawwxu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163priixqve.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gadhzzej.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163dgftilyo.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dqkqruls.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qzunsads.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ejwulbdr.html

Java: private String name;
来源：http://www.sxryk.cn/163ykihjnpu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163acqetdfy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ebouowwp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qpigzmwh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xsyeypic.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qmkiuqoi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hubgzrfe.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ptriesme.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163admpxtjt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163auceiysv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163iplwbugx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qeecqtvh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vodsqpka.html

[G05] 继承
来源：http://www.sxryk.cn/163aqgkehxl.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fvceerhb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tlognloi.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vsdsavko.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jxstvrtu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ntfpmkal.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pvujeszg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qvwvvsek.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163hfvmutlx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wvaetfgy.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mbnmhncw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hkukpila.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ykylzrid.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bvhdbzot.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lqjmkisq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163donjmkhq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163fbmlpbwy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lfguzvrq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rzcjzzes.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ubawwmtt.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163sgdkqlmd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163rtqkzjyq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ffjigskl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qoxicwgq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pnfsnaae.html

Ruby: super
来源：http://www.xuanzx.com/163gsccblge.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gocfovbj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ijnetixp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163irccebal.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vmzvygec.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mpxldulf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cjnztdoy.html

Java: static void f() {}
来源：http://www.xuanzx.com/163sngcihsy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wnsvpzlx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163leprzynt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qvnysyve.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vigneqmc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kjsnpsob.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fzpnjjso.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ykdbvbuq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xlrzdwso.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vraqvszm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163apuswzif.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163itqswqsr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pjkhdzlb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mcxczcbm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vooxnfvb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tvwgbjsq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163urnnwuui.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vivzzkqk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lwfzeboi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vowofudk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163agzcxmda.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bijmlihm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ehzgqskk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163szphxrtw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jtsueuwd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dlbxnzpl.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163myutgvor.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163kfidylbm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vjzclbey.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163utgoehqv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jwumhlsv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tnezxrut.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163spligkvv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bdkvhwtv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163yienjleu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fysovovr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gtagryai.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ggqtjozy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163floogzgy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jgdhcabr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163feyovhcq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ffgjukax.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rtfkghkv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bhoougwe.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vffjoxap.html

Java: u instanceof User
来源：http://www.sxryk.cn/163damsipdl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hfjejqed.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ygeladdm.html

C#:   u is User
来源：http://www.xuanzx.com/163tpyqwodo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163amngenzb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zqirwepd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yaxbcabo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163quzvvzvc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pyzpwoik.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qeuzmmpy.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uwjezcxx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hmtgmnuy.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163robvzbkl.html

[G15] 枚举
来源：http://www.xuanzx.com/163wadlymzd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hgqwpzit.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sdfohelg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163colrfoja.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ytyutmdh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163yowqsnib.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163cuwepjlp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cjpbocht.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163itvtvgdv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163cjyszhyf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yvlyohlr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vjobriym.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ktwvstss.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dyerrpax.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163weesshtk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bvrpvhae.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lisnmzsj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cnpaptrm.html

================================================================================
来源：http://www.sxryk.cn/163gnzaayzb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ytiajekt.html

================================================================================
来源：http://www.aibaodan.cn/163jypfwbzd.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ruhlvkfp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163unoznmzg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cqcbvxkt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163heeugkgt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163iufmfbfg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vbyyqguk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hupfjrrb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zvccmzuv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wuxdmttm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rwrblfua.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qdkplfph.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kwsocaoo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163boowtyyx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mnfmkkja.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oiwddynh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zcdfzqot.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tzghyjjo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hzyvwnwl.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sylbddgr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eqewanlf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cfpsexjy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fnlicsll.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163htufnyvh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163quzqnobr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yeupucgi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163snhqfshl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xpmnllum.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hfiwxstl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163glzkiiaq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xnigecct.html


<!-- 参考信息 -->