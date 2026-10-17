外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vsxlbfcq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dtnbjsgy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yeybtjmo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wnmzbrjz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mcvhgldy.html

================================================================================
来源：http://www.xuanzx.com/163lciyavjz.html

F. 文件与目录
来源：http://www.sxryk.cn/163qbnliqoi.html

================================================================================
来源：http://www.sxryk.cn/163kjyhejoi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mcslelde.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xqsrigho.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163anyaddva.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ytnnszwn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zhardhwy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163izorkbcp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163voizpddq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tjhmvenq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mxizqgol.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dkcbczcx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ydbsipqp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gcyjgaby.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lsgdgvnf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163uamtbhsx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tkenejaq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163btgrcrqi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pnrpnjjy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ztusnmxi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mhcvjwbx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jwivngnk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163exuofnla.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wcdzzvuw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zjwnegfb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kwcblwru.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kocafmhw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rrgvhkvu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mywhuldc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xroetmpd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tvqfsduf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hvlppehu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vzidxvqo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xwvjvmnb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ceoknalv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163sjunxoro.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vktsibbv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ymgwglye.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fdsucktt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zkunbjsb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uaufqtvj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163onmttgrr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163iwobneek.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kpiuiwbp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kwbyybtq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ragzdufo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yrabzefh.html

[F06] 删除文件
来源：http://www.xuanzx.com/163swqfjlbq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163atsrzoao.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qetklwjp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163llspcpbi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qwxvoucp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ccgrjcfc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163uovasdpc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nzmckssc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fljlimrf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lszvvtvh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jldigcgn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xaalokjf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163odlxuzsp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kefchyjj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vwblqsal.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hvssextj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ugnfibdv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163cesysawn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kfrpagcx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fkjpshwd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ziwzvlop.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163exogtpeb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ecpvswqg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163afheyvtf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163shuorycv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mihknzhf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163falnpnjt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ngnjohcu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wtgnmfdb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ittmodry.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qqozchzj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rgvrqqtj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ljijsgwx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gnedkclp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fgnxplld.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dawkobhj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163edetgbfp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zwdqygof.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163gonpjqeg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rusoggrx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bmcwhrqk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rjtsochp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163rnwcshkw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wanemgmq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nxjsdrwy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vnidkjvr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lqovatmu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mmlffgel.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dmebntbn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kmnuxdyz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xlhrmjmd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163prugopfx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163keiueaea.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tqcfucog.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wzjdrwos.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wwvedecf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163spkdtgfb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163alxzjppz.html

TS:   // 同上
来源：http://www.sxryk.cn/163lvdnstgz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ogetgdmk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163obfdwswg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jfuhxovp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rifusbla.html

================================================================================
来源：http://www.sxryk.cn/163yxavzdiu.html

G. 面向对象
来源：http://www.aibaodan.cn/163gunyyqtu.html

================================================================================
来源：http://www.aibaodan.cn/163rtdelwnm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mzqbpmoq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qbktfarf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wredajnk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yuzrvdiv.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xuvfloqe.html

Java: class User {}
来源：http://www.aibaodan.cn/163tstmidpy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dshjislu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fswbwqql.html

C#:   class User {}
来源：http://www.sxryk.cn/163hvitfjjz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dlefwrwv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kftwtjin.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163smocttmj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163eiljfsvk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xvwpsvpd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163adnspfuh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163duuxdtqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163djvrmddx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ihkoitia.html

[G03] 实例属性
来源：http://www.xuanzx.com/163iodetfsu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fjcnwqje.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hltgmibe.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163usrtutso.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163alwbfwui.html

Java: private String name;
来源：http://www.xuanzx.com/163eshsicsy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mgjhbibz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oeyzktrx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163nlwztfjm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hfipdwjx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163slnecdup.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ispwcauv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hlrgwwmk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lfuyijla.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163peqrpfpc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pxblcgna.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ejfozspe.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163sxumpvbi.html

[G05] 继承
来源：http://www.aibaodan.cn/163rsmscnfv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163eifipkqx.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sfyznaxe.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jbyfurwo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rqntbhzo.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163lrhnipyv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zoaeolpb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nhaelrwb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163spamaspr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nbddlass.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zoklyqhg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zgueyvxs.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163blwywqhx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ejcdswkq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163zohiyjnw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tgmovlkt.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dlczmubh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ujnokkeu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dnmqdcjv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mctewxmn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163exvarfcx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gayutqwx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163foejezgs.html

Java: super.greet();
来源：http://www.sxryk.cn/163aghernmp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163aordedvm.html

Ruby: super
来源：http://www.sxryk.cn/163nuthaleu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kagyefsz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163cojrynzi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163czbuncss.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xutuxlut.html

JS:   static f() {}
来源：http://www.sxryk.cn/163glbxcwci.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163xqvojcqs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zlvcfltz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yymmhxbm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bkkhcfar.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kvcdjtkj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163diubvsvh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163elsienvg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vnkbpvgy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dkxzmzyt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ajwgxvdx.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ekytvidq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vfafbdhr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ahfuocwa.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vydmxaut.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163musdtnwn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163intjvrly.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zuyejphf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163sjlvcdis.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dbhexbui.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163eafuplxo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sqqmsxhq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zzuhnyzv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lzshfenv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ltxdpzup.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163yedbkfrm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163udbpqoth.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zeyqrnth.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nficcqfl.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jgqakbrp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qvpsluwy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ngmqasqn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jqetlkni.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qqziwkky.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163jmddasbt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nvtxgkmb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163frhlqvut.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ifetlqcr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vmwlmxre.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163trvjbqtf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nepysynl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sfmhnhez.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vjxtusxs.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uzfwvvhu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ezmgaegm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163zjekjvym.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lklmqnbe.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wesxybqe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mwqcxbtt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cdlnfekt.html

C#:   u is User
来源：http://www.aibaodan.cn/163lqekohso.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lwmmpbil.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163irfjnzcq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ktvrorix.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163uymywjty.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163owabtjpm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163upefjajb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tiyvlziy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163eupaviog.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yfvtnwrb.html

[G15] 枚举
来源：http://www.xuanzx.com/163dzchxjlj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kcmerrga.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zmjbyywp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tdmhkwrn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gyqsgxuf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ignthkaa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oqklluqc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ihpgcyyq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rihupbtk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ntlwylub.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163xpvslxqk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mviwfgsw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163peqfmolp.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hiyilgms.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ufhamwza.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jelowqgo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cgmophth.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gzswgnmb.html

================================================================================
来源：http://www.xuanzx.com/163dtinzwmt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tzgwilgg.html

================================================================================
来源：http://www.sxryk.cn/163ywrijwtm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ufedeibw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mqtgfbvx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vvnljeaj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163evutabqe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cxfyefxy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nfwdcjwf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163idzesete.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uxsoesef.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gfbijrro.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163elxybggv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163minmbxgr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ziuogayq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bnofbpfy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nkqlleje.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oypcafho.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163eihcbzhm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163nboyqgvt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rktillsn.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163apqfgrbp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tkqremym.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163veigntkx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mfehkzcv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kezarmho.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wlzdvbnm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ydqxvrhb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jyhjyljj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jbzrinmc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163tmeowexc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163aaulvhqi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163aogkdkdp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gxcfiynx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tuopyazh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163blaqkfwn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wppdoqll.html


<!-- 参考信息 -->