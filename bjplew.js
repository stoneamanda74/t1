外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cefmeife.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kwfjjopi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bwykyrof.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ikkkanjt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mmzwolkv.html

================================================================================
来源：http://www.aibaodan.cn/163ilzglofg.html

F. 文件与目录
来源：http://www.xuanzx.com/163bweidaay.html

================================================================================
来源：http://www.aibaodan.cn/163caqllazm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163jcuqkqsf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163etjxaama.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cqwywusu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wafsbdlo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wapbrava.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163slblqtmg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pkdzilvw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zybwwfsp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163hwfpanfl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163oguzzhcp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163aineufje.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tjshrrrx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uabifyaj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wzraftxg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ztcenkyt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mxifcjed.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163alkiwpfy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pkxvjpjx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163igodpmme.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ccfpksrv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vuqgyywg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xygekioo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dqelmznv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163tcvpaesg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163knjtbanv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ohsragfx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pfazfvzj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ddoaefvo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pabnmazh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wdoypriw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oxidahbb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cwenkwga.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xfiutiyl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163islbajde.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pqzwkmeq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dkijfrnz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cgqdydst.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eahebcou.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qmoteeeh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bosncnoa.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ntyhrzfr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gzbzfmbu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pzhqxbqj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rjrpmxtg.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gqhuzlao.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rhxbdapw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gyouiwpf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lhsbqbgu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163woqgvqqg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fsdrmruv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nafbmrbp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yrxnwykk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uicvkrog.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uwllbjaw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kvufreca.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cwbsbnjx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163khrkswxh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ebqwqgyr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hoviuarl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gqtabjhg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gvcfkibp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dlgytmgt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mapbewde.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zcculfiw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jezhiqcq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163rkfkafto.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hlcbcqjv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kiitrbcq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dlcuujdz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163omjorqlg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163blmvyaub.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wrlbukvk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163usawyxjk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ipnbfjnq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lksdufwx.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tlnhwldn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163oawqpgkg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rthfuwlw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zhggjbil.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163btosbclb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163oersrbjh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lhoybkwu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jetrjgxv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bznfelwv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bbaxwszy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qmgdzsgq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ziqtttmn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kadcaoea.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wzymruef.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163shndeypy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zuttfpzt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zsbzzsdu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tqlffgfb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fwgsdkaq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dgzfqwdo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zmsuppwn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dimoulsn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163johybaid.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163orcjhvtf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163systxrlj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163makygjoh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163evfajcnm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hwaiyylz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163byzwmpon.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vcdalmwd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ckdsnpad.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nlytmntl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163eotrsgxz.html

================================================================================
来源：http://www.xuanzx.com/163fvsdcbsc.html

G. 面向对象
来源：http://www.aibaodan.cn/163htfyfhft.html

================================================================================
来源：http://www.aibaodan.cn/163whmcoomt.html

[G01] 定义类
来源：http://www.sxryk.cn/163iigkvqxp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vqflbtcu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163tluwzbdw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vutxhdhd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pvchvvnn.html

Java: class User {}
来源：http://www.sxryk.cn/163sgbwwxxp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bsdubyvi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ulwirrgk.html

C#:   class User {}
来源：http://www.xuanzx.com/163zxvqobhk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wymhbzim.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zojjnfcy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pdsbjwox.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dnpfcjfz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163edabvcvf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163etyhufkd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163safzzxkv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cbseqeji.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163czarqing.html

[G03] 实例属性
来源：http://www.sxryk.cn/163dqcmlejn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zwvtkcwa.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tyjnyncb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163paaibxfx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dbejzhaw.html

Java: private String name;
来源：http://www.sxryk.cn/163eeqiyyvm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wkvdamjk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163olpoljxh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vvccykbi.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jvadgnpk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wdzdatix.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hhjnudrc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xzzpgqvz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163noyfqfor.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vntqdedv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jzbhnujg.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mcfqkann.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163mkeijhyo.html

[G05] 继承
来源：http://www.xuanzx.com/163xzqapsjf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ojlchagd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qjrhcmzw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hgqnxuoy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pijluhjd.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163znsnstis.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ihignhcp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163chnhieea.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tcenmzyz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ksaivuqn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wvgbpnan.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yeyrhznm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vvdyydmx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mburfsdc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hljxonpy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163sqnhfout.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vucwboqd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ehydeoqj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163buggifdv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jstnzxqi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ovcnfzoo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aarbeqxo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jzundroa.html

Java: super.greet();
来源：http://www.xuanzx.com/163xhszkbub.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hdddctoz.html

Ruby: super
来源：http://www.xuanzx.com/163cnxushje.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qgtumtef.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ypoawdik.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pxrtqblb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zcbvgsga.html

JS:   static f() {}
来源：http://www.sxryk.cn/163hpqomakz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ecxwrgnc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jvrruqqf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fouyzsjp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163tvojrbyz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rtmnyzwv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ykfewgwc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163sjycjzfc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zcxcrlko.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yooxtfhz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bfgjrjjr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163labzmlct.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yfzdjmrr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163eyyrtdtd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eyjleyqw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163iwyvddsk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ryamdutl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zmvtacjg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fvovrqsx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xqtzhemr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qiajuqou.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qcybekpv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mvwpsnsk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163stzmolxz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cucxupbl.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ananyyaa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ydemjhrs.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mootnttx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jslwfsnr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xbdvwqlz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iydjcmqe.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xwtbsgkb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163khioanej.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dyqluqev.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ynazpnre.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rzrshiqs.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mgfkuzav.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mfpfrhug.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zfksgalq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163itwasplr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hhuqpgit.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163zgbqdshx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lqpdcshp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lzhjrexx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ekoarhkp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163imyxmwhy.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jftcdeob.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rfeasmyq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163grkjrnkq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mqirlccb.html

C#:   u is User
来源：http://www.aibaodan.cn/163bsuzadnb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pwhmqffr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163gcsmridf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ulcadsgf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zkxwoact.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rpwyqndq.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163paqztunh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wczwgpne.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vblrrglw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cohtasir.html

[G15] 枚举
来源：http://www.xuanzx.com/163nlgjhsbu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ujxsqukj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kkrvtcwn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ywfrtmjk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jzsffbqb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163szqzalzo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163apjvrkym.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163uhigtpvl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gsedniuj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163aodkkilb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163eetwlojw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nniwbvoo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163thevgnal.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iiimaicy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fgwkcgdt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dtpmnalh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rnjppbda.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vlldzkgz.html

================================================================================
来源：http://www.sxryk.cn/163tckvtybn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163rxockasc.html

================================================================================
来源：http://www.xuanzx.com/163ipjpaknf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ockqzygu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dcafpnej.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gsvnmzre.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ctyeanmb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fbwrvhpk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163opffjohj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hyestukf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ocrcopiy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163exwagjkm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163biksoebg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jxannqcn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hsjzbhsj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zxreiaol.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163skoishrq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bjllbuxq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kgmwietv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163stlcoqbs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fuufnpkn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163novivpfj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gkjlqlav.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ldnelkkp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163solwfhxh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lfawhflc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oenosxfo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wglcnnku.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bzojyrqh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yytuqinq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163paynndkx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ujoujfeh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ygujgfca.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163deyovxuz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rvvxawmj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rhlvzwco.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ynjmfgbi.html


<!-- 参考信息 -->