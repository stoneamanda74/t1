外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dyrhriye.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zyzsmvve.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163dcmovjjh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163emaaeima.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pdomyjmg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wupzqrpp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163eibuprhj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fzvqxwdg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pvzfxhbi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ecsnopxx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163flptrcxb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163knsxtife.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163csarxsih.html

================================================================================
来源：http://www.aibaodan.cn/163koymfiec.html

F. 文件与目录
来源：http://www.sxryk.cn/163mspbkssp.html

================================================================================
来源：http://www.xuanzx.com/163hpuqzjav.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qubndyay.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bizepbwu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163btushmkj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bjgnnfmc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uhrkqypl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sblerrdv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gsqgwrxa.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fwmzioiv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ykwzeapv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qyfhfmxc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163svvnigni.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163byskdyok.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dbghldga.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fjebghwl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cdghwjvg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hegfokhi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cgqjqiev.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163mrfugsng.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cwjkaitj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qevmsdrv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163imxduzhg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iqkvyrpp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ityeugwp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163unxjobng.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vwzynsvs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163atqsciez.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cdgbkvwr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163loorseyj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hgpzvnua.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163aupbqzxx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wvxbaxxe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yvrgcmqq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wfrjjkbk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wszvddtn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163yvcnflzo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163sphwzage.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163omqrpdcj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xdykhfcj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oqyvmjze.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fibdhihe.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zvcgkrvu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rzjzopls.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163skrkjdsi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dqkhrgkb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pdqfnkzp.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ldcdnizk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163icstuyyh.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pynecmyq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iksoxabq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lodbhqrt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163evyoyclg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ptjlmgdo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ihzkotau.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163swmlayoa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tovadxsh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163duqbttav.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pkcczopd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nymhdihn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hymobipu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nmdzaypr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pezbvjeu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vogwlmzh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zjlppxdq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ivinsgxn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ahobwbfr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ihjgkrjf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tiyulhts.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163apuxpofm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kgfnbxgq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vfukwvub.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pkfxmczm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163axbpjquz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163veypaoxp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kliszeur.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cyhpqnbf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lxyntvmq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vrutjyza.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163axwjkknn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zzuaqhzw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163sxhgrint.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vhyrinti.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163euzmonde.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mopkhdfr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163eztdlzmi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163codssoqf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nxkhgxvh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wpxbsorp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163klbmjkab.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163agnybmuv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tzlixqac.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nisbkydf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dsrtxxfy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jpnnjymu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163akltprtk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zsbzrjoz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ycnjcueq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kncwkqjb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iqmeezno.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163swgusprn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mdzfvplh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mmtaogfc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163efmkjrba.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gojfloan.html

TS:   // 同上
来源：http://www.xuanzx.com/163eggexfcf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mxiqohva.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wppfwqih.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163khmxaqyd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163proozdxf.html

================================================================================
来源：http://www.sxryk.cn/163peefbgxh.html

G. 面向对象
来源：http://www.xuanzx.com/163xpmnelby.html

================================================================================
来源：http://www.xuanzx.com/163bkzmnmne.html

[G01] 定义类
来源：http://www.sxryk.cn/163yobhmclc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163quvrthsn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hftzmugy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gfpgvnqg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vzkrqyzs.html

Java: class User {}
来源：http://www.xuanzx.com/163rcyabcnp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163lxbgeygu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dwlmfpxc.html

C#:   class User {}
来源：http://www.sxryk.cn/163kpfjkssa.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jnbbpxew.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vaucwtjt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ggfsmwnq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fxjfsqhc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fxchzmsm.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zqgvrbga.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dnzouhfh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163urypttkp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cdcyifxj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pqohfpwi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163alnpthig.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rjjbcpto.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ladknriy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kugxzbps.html

Java: private String name;
来源：http://www.xuanzx.com/163zkvwvkut.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jajikldo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cccrxonc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fqwxyoee.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yqnmzjxy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ppudbhlh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gevfqgcv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xvuknpop.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vpomucbl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ldoxxhmh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xthoyall.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cgujurni.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aedrndyu.html

[G05] 继承
来源：http://www.sxryk.cn/163bfaegmtf.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bhfqrlww.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ehzgqftz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lokmvslk.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uinhdlhk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ellwdlgc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163eyrqiebp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vrfsgbix.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mtfyjkfo.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gmfrgkxp.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pimhkopj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ghzvprjo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163elfkmkrk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ebppaass.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gssnokro.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wnzfujmp.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163yltbzmwn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hnugqroy.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bzretnoi.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xxxdjscf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163lufimkrp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wmqfoxld.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ywfrbhwc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163njyyizva.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jbumjthz.html

Ruby: super
来源：http://www.xuanzx.com/163kujakxoh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lkglcrzj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mlfxybsv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ndgcuklv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lkqoantb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ttjeebly.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163euviauvu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vqgjkrlu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163oszflmza.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cemhwskc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163bnnplytu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jzcaeoau.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yljaulhd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163plfuvmmt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cjyvfsyk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ffcchbxe.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vhvtixtm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pejzntap.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163bxtjddpb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kepmxrrj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ivudymce.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uphkdxxq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163eussxbft.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pxixhnbx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163mhvcsgki.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163brjrmisc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ffzwfsko.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ztfnfoec.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qyptgaru.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kuydsujp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ssyvvmmu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xehrjnhn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xndprtaz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163machqivs.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163erjsgrer.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jpoukfwb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mdpjjlsb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jdirpzsj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163toyhypvu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163biklzcxr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gsgtdfmi.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hpippmfe.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nvltiiom.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163afpsgyan.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tyavbqeq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mpunxfcm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hvgbumbg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163arohxxla.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163logoilrb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ajirtram.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163oacvoigc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163agvqcojw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wpyxpute.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163bukaenum.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ovsmbrye.html

C#:   u is User
来源：http://www.sxryk.cn/163viszqscv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mfbpzxti.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xjavieeh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163kzwskyuq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wqlvgnwx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lugvapwb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bfzbfuxs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163guxfqiav.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jvzplymr.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xxnhmjiw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ryxzlkht.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vxdfddqs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163fulvsgov.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qpeqmblf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oneatjdg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pcecnwtb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lanoutki.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kmbbzhii.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nevtgqyh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gxgmhwbi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yjeccpwa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163hperubhh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ffrzemfj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jyqrwjcw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jcirvrfm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163snjgorbp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jycmntve.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tquabowa.html

================================================================================
来源：http://www.aibaodan.cn/163surcgdhs.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163luiaobma.html

================================================================================
来源：http://www.xuanzx.com/163xemukzek.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163idgozydx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tufvzetf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uerbvpny.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cbngqagp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bbcbqqtz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163spyszgrs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163eoqcagfs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pzcyfvti.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ahcnjsty.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163edoadyjo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rrmkmhnf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163osjikocn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fdoghlqx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hexumoiv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kumqpxet.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163okoesrdr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ryycrlqg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rwbcwgfr.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zmibrkmf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gzkjtpfk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pbqfsqdp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wgtlaybq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hmwmwltn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dwpydqwr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bzhodwxp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rsbqkfcd.html


<!-- 参考信息 -->