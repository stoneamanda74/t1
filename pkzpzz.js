外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ydukudct.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xwibqbzh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jvahfkpj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ewpruqtb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gykuizna.html

================================================================================
来源：http://www.aibaodan.cn/163bnimvepy.html

F. 文件与目录
来源：http://www.xuanzx.com/163aoxfenmt.html

================================================================================
来源：http://www.sxryk.cn/163lxnmepot.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fewxaabj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rdtaphku.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ybkkmnwb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tdggmqpw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fcyvjpma.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163obnvtlvu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ezeqosjz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fltfkprp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zxzmcvkn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qglgiiym.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pnrlbnru.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mksuxgcy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xygdxjoy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uzecisit.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iqrdbjpj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yogpxbrh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nnwzmaqo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rzaqepjk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vujprcdn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uejnjyua.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163saqwbrfq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163llahlryh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iglllqjq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ckvvpygm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sqxsvroc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fmwlbkom.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zkyajtxc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ocjjjqit.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163uwxuszhk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163aknqjwgo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gksjaiiv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zvdgrrcc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fcnttvox.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163itehefzo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wxkktvcc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lvimpdeu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dqgqskhb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163vyrfbynw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pxpoijwz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163thzkdzuy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qgutwblf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kocymcqk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mkzuugio.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dbvfgtaj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163csaardma.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kjspdekv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yjtyhczb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163svywtabf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tmmwcktl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wbbsuzja.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bcrwwcrt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163crtsbkcp.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sckjkcff.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163yjmblwkb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jllthjol.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dveohouj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zbisqzvh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163doodwdwm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zmvishqw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nttqvxtc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tcrehqpf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xzwkvqfx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jqthfuuy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163zdasvkzh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ztsccbdo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ggtvadzr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cjwptmkt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wfpsqzlv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cqzqwxbb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163aepyigsv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ryqvnfkn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sopysode.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163esmomtvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rtlyaxai.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sekxeazk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ddlhrrwj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kiabudtc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163odnnjxvv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163phfaxdhd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gfxqrsuq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tongntfz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kagnqniy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mhiuxpdq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yaositil.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163czogldbk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ualvvzvs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163cxnwobqv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mbxcaquy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163afevghfd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163opczgtkq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dqcblbvt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nlnscsce.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163iiusyjvm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vddroggn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cwmgeyqk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ahabltut.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163chyeowhv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sddydeok.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rlsszyub.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mfkuolsz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163haszanjd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yrnkshvx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vbltjrtk.html

TS:   // 同上
来源：http://www.xuanzx.com/163oxsonfze.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kwxamvxq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kmsdzyuv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zajjhhwk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zyhhdopi.html

================================================================================
来源：http://www.xuanzx.com/163hszwseid.html

G. 面向对象
来源：http://www.aibaodan.cn/163khmrpbql.html

================================================================================
来源：http://www.xuanzx.com/163kijvsplf.html

[G01] 定义类
来源：http://www.sxryk.cn/163wfjxswhe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wydkqukm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ubevedjk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163blalneql.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163irjqlsbz.html

Java: class User {}
来源：http://www.sxryk.cn/163kbzbbudf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163weujsjut.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jdapanwh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kovgevin.html

[G02] 构造函数
来源：http://www.sxryk.cn/163uemtjkmd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163umbmuowc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ioxjhnsb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163edbtdzbs.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ooxhlwas.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163toauvxmd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mhpckdnp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qgvdhnct.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xxjhrxgr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163sjlehxgz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mptyslae.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163szuiaxui.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163flrchenn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163osekstvd.html

Java: private String name;
来源：http://www.aibaodan.cn/163fauzzhzk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nsxelrnk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dpifhhnn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ifdwalyj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qymodehm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vfepjyvx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163aawplhpl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zheitvvu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fskvgukw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pdbqavxo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fjywheht.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nmfmqsxl.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zvwpvesm.html

[G05] 继承
来源：http://www.xuanzx.com/163yidpuyub.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rsbtocom.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cidxeuje.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pdvogblb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fhbpjpjq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gpeiopdq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vpugewxw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dfgncfsi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mchzzump.html

[G06] 重写方法
来源：http://www.sxryk.cn/163djzxgwwu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bzfpxspg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163egucasow.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dzhzpubh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bxtqqcgv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163uqsbfgnz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163twckzgjo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163suklwfxt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ektolqfk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lzftuevz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hijedeif.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xyaoplbm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163isppzcfz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hhenmqdv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vslrngrb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fzsubmrw.html

Ruby: super
来源：http://www.aibaodan.cn/163wputkage.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dihvpgwi.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tnmhghqv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163flvpryql.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163oxunlpdr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cxvfshun.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ftmztkmx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xqpdsumx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xhfoimpb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ejrbites.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vuglcxla.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gejhwtmq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rttguxup.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163efkqstzg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163slxlfohs.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163yallnkvh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fxebwfmh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yhgvhowx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ahoihsuz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163igtokzye.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wiwkoqfd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ketpwagl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dwxoeqqw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ennqafyz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163waekjowr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163conkxloq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vvzdjyfs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nbbqqvcq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163twasliox.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jbhxbrzo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uewejfoi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163nqnzmpoa.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wsthozdq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qbizysqw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bscoarui.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163crvqjyea.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lczupqtp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uuqyfamd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vkcwrltk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163eqszuwon.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qbygodeg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163arwtypkb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fqrrjndu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163bijijpuc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163etrlehtj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aktjvduv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163twqboxpr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rslwszpj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163kouazhbo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gzoyxcfi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ehmgmrij.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jbpbksip.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gewmubwt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ovayeevs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ltyifzja.html

C#:   u is User
来源：http://www.aibaodan.cn/163koydwzir.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zizjrizx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163srefjkzb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vgkjtaky.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lulzktxq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kvecyqfw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sgtmqqft.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lrtoatlm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kpexudwf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163neznyzej.html

[G15] 枚举
来源：http://www.sxryk.cn/163vxchaltj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ibhxrvfa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163eotzkqnh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163awdqmxli.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fwkvuqgi.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163aszsapba.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163zkosncaf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ufqwcljp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ypreeqby.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jsbttgzu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pdvnirqd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163arklkqcw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163idjtkzwy.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163efapjapw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hefnrisj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ahttxsqy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gkaqbwzh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rhxxxzec.html

================================================================================
来源：http://www.xuanzx.com/163jxbmulqn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pzmemele.html

================================================================================
来源：http://www.xuanzx.com/163vyfffgwu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nvgovvue.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163csuhmhyp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vmovlabe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jmndbpqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163afaucrws.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dnbmbcoh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mbsgaxoy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yfcejvku.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163aacmnpci.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163eceyjhgx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163puggmkuo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xfneyjsk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163avnwgptt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eiurmyyd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmuvrvnj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163aabjdsad.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fjqttuin.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mowrvlqi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wzfinyox.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wspkkdgb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eoyjgxuy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vochgpxq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lkuwcoyk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pjpucruc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163maimpcef.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163brfibhun.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163esrtsgxt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mydyamlq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xdtupqhw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163blhfoxgj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rbkbhfoh.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qrnrdbvr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bnhvlrdf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bmmaboii.html


<!-- 参考信息 -->