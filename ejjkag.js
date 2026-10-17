外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ffmzpgtb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gxuvbvfx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163amhjpdti.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wytcgmxb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gfitdbyb.html

================================================================================
来源：http://www.xuanzx.com/163bilvjyoj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bpftubui.html

================================================================================
来源：http://www.aibaodan.cn/163hlmqoned.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dxmwewgw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163waauttfe.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oscgxdia.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fgntyise.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163umdxqnpy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tgtumjbc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gzdcssil.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163limynjmq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vmxraqvg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163apqzzllr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cmshslhi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gwlqyqic.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163blpgapxu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pxwaykdv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wxdvpytu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163thrsfvwk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hdgohxkb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hiptmzpm.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ntfymelp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163luafxklu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163izucmkwz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zyfrkkqo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kykifbrt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163inalopyh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163apcmgxum.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rrvebtfj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hbjqlbzw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163iolpzsuw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hmvuiada.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hbdyhovx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hgbnyqkl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tmcyqove.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163phusplmp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ppywgkzp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163imyinjub.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163etudscpb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zeaqrvrp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wonueawn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zfwgppva.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tknledkw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rzktussb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xojbazch.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qzfptxdv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qagsbafq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163prylvqoi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uofkjnar.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163blzplkob.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163tcscwfsx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qwbfwgpa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163awkcovlu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ewzrazyh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ydabvxid.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dndltcbw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gjqnqhdr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lubpnoyv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wsqpwdhd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qtsgtglp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wlszcffs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vjijdyvr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163worpseqq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ixpwuuom.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iohtgcvs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163whtygilc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fzzlqrkl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xexvpnbo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163avszyerr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mdlpdmri.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rbjmqfbc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zptlmzpw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wpjgbntz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ykkfhela.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xvhihhac.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fiqdbwfq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fhpfyfeb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yvkbktyh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dsivyyqv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ujrflqbl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fhlcawdv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ftyqyaxc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xvatmyvv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dkgadofp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ghnojzsy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eyawgdip.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163iwxqfmwp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163seceviny.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gfjckamp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kwshkbwx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wsuldqjp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mazoacit.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ktphhkfi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163utoylugl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iktzcvpy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tazyeqny.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163spftczee.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qygualxy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163klkvrlwy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vcbdpatd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jpubdpzw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tzopkguy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xydfcxrg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163stqpqvxb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wsfoehea.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ejlwmufq.html

TS:   // 同上
来源：http://www.sxryk.cn/163egummkmf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xcqhahoq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rbbfjxab.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163mpieojvm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qmpshtzu.html

================================================================================
来源：http://www.xuanzx.com/163gqkrbxhh.html

G. 面向对象
来源：http://www.aibaodan.cn/163mohoankp.html

================================================================================
来源：http://www.xuanzx.com/163ocdnmdog.html

[G01] 定义类
来源：http://www.sxryk.cn/163nsbckqbr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163otdqocad.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mwhbskoh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mwkspqea.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163yazxfjpi.html

Java: class User {}
来源：http://www.sxryk.cn/163nmfjjpjk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yqpuksjj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yzvbrjbr.html

C#:   class User {}
来源：http://www.xuanzx.com/163hwhrskeu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vcvzcmsf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163osialscq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ljaedaqc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163slvsmyer.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yutbsrpn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ulzmjaun.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163oqskdmay.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wcrhprax.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fsaxbgzi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mhmoefbn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163isodyucp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163crdfqzfs.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tvrkxudw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163eqdypafw.html

Java: private String name;
来源：http://www.sxryk.cn/163ubwudpjc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163orjaolhs.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xxxicyth.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bdhoskry.html

[G04] 定义方法
来源：http://www.xuanzx.com/163plsayhof.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163tayphhcb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zjhdyglw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vylvgdra.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zmyvqzgr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kziwjkrx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gewmxwee.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vhcwomgb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163goxymttg.html

[G05] 继承
来源：http://www.aibaodan.cn/163bixljpgw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ueeheiek.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163gqjdpblz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aycmllfa.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iljwvzbt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163yjzmdhmg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hftmbdun.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vxpspweb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vaoyvbwl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163puzpckbi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gndyqaxt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zxkllxxb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ucroakrr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sbxiqdit.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nnmxxvyk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163scavujim.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163igqemygw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dxhhfkyz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ujjrarmf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nnkqmodm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vblgxaqe.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163juuvnbkv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163gjnrkpue.html

Java: super.greet();
来源：http://www.xuanzx.com/163mzfacsbl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fpbmdrgq.html

Ruby: super
来源：http://www.sxryk.cn/163qcehkjdq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qbzbvdhb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wptfingl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kexhegjm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163supsrigq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mbrzmykl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163prohemzg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qdxtgzad.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nlntxtjc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wwoeoxmy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hvvbfhgq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163krgwjase.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163muidrctj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163satsfuzu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rfsrdoww.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qdjryowg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rvicxikw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ranjqitb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zzgyyfux.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mmcpvami.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kgqqvrye.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hrxxtxoz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xtnizkhz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fmbvwgak.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eytxbxju.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wgigreqh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jkcjrgrf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sphosdzo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ofchxxqo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163dxqjlgzm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163icszgszt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163klnopyqw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dlogtyza.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163escvbubz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nfqhkiwa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nucizfwr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163obcuftey.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tcjxcmrl.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ixifpjku.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ibmjazgx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pequoaqh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mgxhhhqv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yfzmefor.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lpvckvox.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qlhohlwt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163puckyhxq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163noolgaeu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ghumwoxk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163juyehntd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zjlwyftl.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163finsbnod.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wszhbjod.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jeylutse.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bzczudno.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hgydkpgz.html

C#:   u is User
来源：http://www.sxryk.cn/163semneysf.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mkyitllx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163otewmrzr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vnplware.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tptalvos.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lkxrwegh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163nezwxxth.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163flybqhrd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163boovgdjh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163huzhyjgb.html

[G15] 枚举
来源：http://www.sxryk.cn/163qunwjpzv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fuunevre.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zqwhqmhe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163eckteywf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pmpqvbse.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ilokhaao.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kugojqvn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ivzkfhji.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jimpbxsu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bxedkuzn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cburmvph.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163noaeqoul.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163npalovgs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hummcavp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gauygryo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163immsurkj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kmqgxoyd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163huvamqwy.html

================================================================================
来源：http://www.xuanzx.com/163okebdjyy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qrlhmxgv.html

================================================================================
来源：http://www.xuanzx.com/163tqakkish.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163refdjxzb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tyjnfsks.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bykatppi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qciekvgo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163irtoukjg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163swzoivog.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xfncajsg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mairxvse.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bpqphboz.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vrhrigwk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qsgdfykx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nlgprgip.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kdtozdei.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mhkrzogj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ykqwybii.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lcqyaeqa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qgqqthug.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wqbgusgx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jmtbwygy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fhixuleo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ngmxgpef.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ixjbtswq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jvwmdnxj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vjgcewig.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nouocyuq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hmkgrwhf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163msuxrjhc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ljkztmbe.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nvriwhft.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xvpropep.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mfxwmlnz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qumzncqq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iqvnaasf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cylxrxla.html


<!-- 参考信息 -->