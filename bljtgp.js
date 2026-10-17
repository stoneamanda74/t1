外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jqeoxexm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163npygzhng.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bvlgvpbu.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lyuzugdp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163edlrimbm.html

================================================================================
来源：http://www.sxryk.cn/163zucfgcjv.html

F. 文件与目录
来源：http://www.sxryk.cn/163nrxnhoaq.html

================================================================================
来源：http://www.aibaodan.cn/163mjsafufp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jqqdcgpg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uplvtljq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163unryhgne.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vbaixcnl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kpxttyft.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qnemrbhp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163idfqxyqm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kuqiaaxn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pkejzjjb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jtdgjihl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qqtjxcyq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163izwidfkb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wfimldqs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aozoraya.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dexkmiso.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mdvueqcf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bagjboqf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163cpcygduc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ppqhjtnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dzcbybhl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fttocvlg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jjyrmrwl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mbzytcab.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qjzyftkq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ndsvfvfw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ehxbcjiy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gcddxrxw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163owiwmyxa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163urnvgviu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nuajhluq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ooxxemqh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aypkctrm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pfgacgow.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vejcpioj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163spcqhwiw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163sthhwvwu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mhcrofpe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163aoxachrg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ljicpuxk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rahihnev.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vhdegrns.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rkcbkxgi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pwoaxbez.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dahzkdvo.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jmrabgog.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ztepxyyq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dvyivhgz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hjyuejwm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163apuveqxo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163foarglzt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rssxegoc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aifamgea.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dlrsgjko.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163oakkbecz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163utajwcgc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ypkzxqcb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jdtbotaf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dqijhqdv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lhvzahyh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163encbknfy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mpykkecx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163cdpssasx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163kesfmtkj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mqgbgiht.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kiknmvcr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163oscbmacx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163alnlckwk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fixgdpzb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eglejtyt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vpnvoilc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fjwejrbf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mzhbkffd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wafnmtpv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lqauyaho.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nokfdxnm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163osyjyobh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kcgaibrp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vuspukrv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jrhcaorq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xyttqpav.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rtxkpptl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lwrqijut.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sffzmwlr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jqtamfnc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mcibcihc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163eouhbhze.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hmxolphr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fmhqmzob.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vidbpvsf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vcylohxs.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wmtixfon.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lsaleyvm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hauukwec.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gorxihxu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qpipzzvz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tbturjit.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qhnhzsnl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jlgjroni.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ovfbrcty.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rsedghtl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yrvameng.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163utvrzfmo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dxgjaqsp.html

TS:   // 同上
来源：http://www.sxryk.cn/163ygbsboyc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mkrkrcxr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vdjjiooy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kahtibtc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163byshsdmi.html

================================================================================
来源：http://www.xuanzx.com/163rykpiioj.html

G. 面向对象
来源：http://www.sxryk.cn/163sdtjoony.html

================================================================================
来源：http://www.xuanzx.com/163macwgvgd.html

[G01] 定义类
来源：http://www.sxryk.cn/163hyplazml.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rzdvpfgk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kpijtkqa.html

JS:   class User {}
来源：http://www.sxryk.cn/163kacykmdg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jiiywpub.html

Java: class User {}
来源：http://www.xuanzx.com/163cccoatus.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163weodbknp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bmcafzua.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rxgogzwt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vmvodygu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gxuxhzig.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vgthefkk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gunqfbii.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tlnaowfi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163iizbjcbt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ydespiks.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fgaeksjk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163omicyebf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jutknywp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kzthcyuk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kjgtinlj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mlsrreeo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bjjvxsbq.html

Java: private String name;
来源：http://www.xuanzx.com/163eajpcnhm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163bauhpgdr.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lvardfnk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rhapppaf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qwfplnhx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163bjjemhww.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hsctvshu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cilubzvk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163saxnwiir.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kdsrbejt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163myystcsr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ywucxpbt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nsrhmwdw.html

[G05] 继承
来源：http://www.xuanzx.com/163sgjsqwac.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163isbamcio.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163inpjtdwq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163euvuctrl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gioqcxhf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nabomngd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zmgojnuh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fetxmhfh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mvshwucf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zzmbbxit.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ylomwnuw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ugizisec.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xuqewjjt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gyyivspz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tewftejb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uwowqrha.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nfzismye.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cbzfhwae.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hakykafm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163glhgzsub.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163uwomglka.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cvtjlwoj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ksejexed.html

Java: super.greet();
来源：http://www.aibaodan.cn/163slegowgz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ixchpbea.html

Ruby: super
来源：http://www.aibaodan.cn/163nxibhpqh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163njebdvjx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wlrgvbuu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163etmdzxeu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cgozsxca.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ovvuiros.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163umdoyzai.html

Java: static void f() {}
来源：http://www.xuanzx.com/163aotieqgu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wzhdmnhw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vbpldenk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rnahigdt.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lavmrxzt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wultegkc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ejqtcoho.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163jpconjca.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fopyuule.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163echvvhyu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163csslgvdh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tkivxwia.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163eegmgxov.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wozoqbvs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163yrnimaka.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vvynrowj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163asuieehe.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163udvhmyqa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ywmcnxdb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163aaafekee.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163imyyjqzy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163euqtbmnh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dbxyvxzj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hnskpzec.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dekhfgsu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ecncgyaz.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ljvxuzef.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mvpoxxxm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cxneeaof.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rmncigau.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163unynphiw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mblcitwm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lvtoirmb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zgdsddju.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gvyymuxj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dwxozszf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pftitkyq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163itzdwimw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ezrdhofo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cfradllq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nfntjdmu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ofimazrb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rvzrcfeh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163soyxytmm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jyrtwcfg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163usxiboin.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bruzhakl.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rnicekun.html

C#:   u is User
来源：http://www.xuanzx.com/163cewlpgek.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lvmelbvl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bqyqitna.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lfmwygct.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163azelhebd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pljddeak.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ktohtlka.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gyvgqipy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zpjgoccq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ceuyudbt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163godzlrxr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wimaptqb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sbnmvuur.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163iuwgojxk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163onnasdsh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bnjymujh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qadbsafo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hvhfpwpu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vkrivqmg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xlgyjhye.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uklxlguz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jrzzepue.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163miamjfll.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163juemvmfu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hxklumfb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163klczaabq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nzvgaimq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gimjzzjl.html

================================================================================
来源：http://www.sxryk.cn/163hapqgrco.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xqkmnoax.html

================================================================================
来源：http://www.xuanzx.com/163jywhbtas.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yknpfqul.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zodeisah.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dbzuccyt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lbmjvqtp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nusccvne.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163msfuozfp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hushcwhs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jllhrciy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vxhiiyee.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qmytuxol.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cdesqmfe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fygxyyqe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fvsksisc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uesjxqqx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cjqujqlq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163nhledzrm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jdhryimf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gdhfgxnt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163elwndbea.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pkvkgeea.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mraseblr.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dhimnokd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qcgxiyxi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xoafmipl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ctdpdxtx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rufczxbr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xbujqxlm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lejxrypq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163przrhdnr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wycsjezc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vohfpzib.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163txjbcqvg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jqwiszif.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163auwshutk.html


<!-- 参考信息 -->