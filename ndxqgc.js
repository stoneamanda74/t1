外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kaqszsed.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163dgqbxxvg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gltntpxn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vfssefaf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rvxerhwd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mzfvkrvz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163eqttfnyj.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163opeonbzz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qdxibxig.html

================================================================================
来源：http://www.xuanzx.com/163ucomstax.html

F. 文件与目录
来源：http://www.xuanzx.com/163ltmgtjdh.html

================================================================================
来源：http://www.sxryk.cn/163pezggupx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ftfzsqtf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jqsqvbzh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uarexngc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163epxfirrz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rcfgzkhp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pzoksoad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pceqacwl.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xyqqncqy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163sujtfpjj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163sciacytv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hkmemppp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163uleahqvy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nhpnfnnb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kfmrvaar.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163epzojvfr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ywjcrbwc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tbgjrwkm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gkpvymxp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ywczkriw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ldkejkde.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zkvzbpoj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wzooevaa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pljosfoz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qumamxut.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163pedssgrd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wlezzugw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zedqawyz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cjtgegsp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ntumkxbe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mgexisjb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vfgkvlgq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ilepzcws.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jkwcqicy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163hnltrqru.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163yuybjaxa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bkardkaz.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zdbqrhcg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163qkeogisk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qrjviymv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vanofacw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pimxpycd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ybmesuxq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ifmvsqcs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uzzmqjha.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163crkzgbqh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gaycjpmr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163voyrckdx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nnxsqfxz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eaentfin.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qnbssnvg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zuvaafoa.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wlakzgzm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nxqbfykm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ulhwxivo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mqayxuqh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163yzibtpoo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qmjbnyfx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nhylpxwn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163waycxhhl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163sxaiibag.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163oraltzcq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mjjljeyg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cjnvotnx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uazcxpba.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bdfljuwy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163acxthnhz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vgncseqv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pbonixpy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fksfliim.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fvqhqskg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xtgrttie.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xlugcexs.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163alzguczc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163jhetcxvd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163egdrnsex.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bstdrkcr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ufqizgqh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rpnoqrrs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vmygtask.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ambznhkz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fvqmubcl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dziqeakk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fecpfemg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xdzqaudv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tfpelwid.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163peerbrdm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jwmxlnxx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bofefhpq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nkqfoejg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163klquuehl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kqhxzrqu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yxudwhrd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wrsvoarg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163evelyyfg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uatqgorr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qdqowkod.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ldsqhcmi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ebfnssbx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cefxofty.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163axyveqka.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ygrdhwkp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163efcpmxdc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gvhvameh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qqmnetrz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wlagviil.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163evpxpany.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163smauehrj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jvsdajtj.html

================================================================================
来源：http://www.aibaodan.cn/163uytojshw.html

G. 面向对象
来源：http://www.aibaodan.cn/163dsxvkgfu.html

================================================================================
来源：http://www.aibaodan.cn/163otwvhyyc.html

[G01] 定义类
来源：http://www.sxryk.cn/163hhddcxws.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bbopmfnd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tgkfhjpc.html

JS:   class User {}
来源：http://www.xuanzx.com/163yvcmhlqv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oyxaiqwc.html

Java: class User {}
来源：http://www.xuanzx.com/163gwdgedwb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163fpfrgggr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163unvqcdsz.html

C#:   class User {}
来源：http://www.sxryk.cn/163rxznncwc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lqkjukqe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dxlfpmxu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kuubicok.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gporyenl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yrrxaitr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vnsahmrb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ophodsgv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163oeemnpye.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rkvtesjv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163heqjquzl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163yofnqiba.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xkpphvyi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rlbxbkbj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163eyrslzgc.html

Java: private String name;
来源：http://www.xuanzx.com/163tjtdzqkp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wrryrctn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ycjpmdet.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163owmzinid.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vdxpjurf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163eucbndcr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163krjqispf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lxzhtnhb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163igektlty.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yleyitci.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kejutmqa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xoxnwitm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fnjefqee.html

[G05] 继承
来源：http://www.aibaodan.cn/163aeqyklel.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ndzewbdl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ufdwwqqb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bdnyavmv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163daaadjun.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oysbhqsz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163euzecpej.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zmufybxi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tmozxzev.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zsjzgsbn.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163trpfqabi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dvghydbl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hxxiwwgv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dobuxpid.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ctvppobv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163afpvtzye.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163leorlysp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jyjqotec.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uewpqjtf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nmtzmdsn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kopcyyoh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mrgrzikn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jgpqbkvr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163sgsgibrf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vjobvxpw.html

Ruby: super
来源：http://www.sxryk.cn/163pjfaicrv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xzgnmqzp.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kzjvbtrg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163irlimskj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163boktbzzv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fbydbosm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nejiwwgm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vpebhahb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bmtnexbj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hlakmuzb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bzolsbek.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163issfacgp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lqaquupv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bqftchmh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dpirnkqo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ucjdxzzc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163afijeznx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xtxyeubp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163csccjvpc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xqlfwxnj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nsgvtrle.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lhjkdxok.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163aleoffxx.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zlbxvjxh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zhhfnwcd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163uomzbahk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163npscyoxg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jicuebxr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163qdbyzrhl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163byhzvuxr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hsonxebl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163etxwongh.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rkxppwaw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pyqduqct.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gcoovudh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xlohmdao.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gcbpbrix.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wiaeapyw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163hifybjyr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mreuezjl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zuthvxxj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rgchtsyi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cdwmtfhk.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tfyfsapy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163urdcmhgo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gysezopo.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163agylhhde.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163teltcpye.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kvqorvna.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jhibezbb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163conkmasv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jplqllti.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iwybxgvc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ygeiccvc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jjztlkfx.html

C#:   u is User
来源：http://www.xuanzx.com/163gqzrjgvp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ngmxbxcg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163kmongulk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wxmpkizm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vennldpq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rgwiecgg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163kueywsao.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jybdpgcp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ztascdhe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zjansedz.html

[G15] 枚举
来源：http://www.sxryk.cn/163ybxvludd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163czmtyiks.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163obqasvwo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dtjinwzx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163thptylcf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mmufdwmz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vtnnbolb.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wgdtolfh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dxzcatbm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vogqadio.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163brczbfyi.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163prjskukn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163repxbpwt.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hnccuqtx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163glyhhzei.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ruypyyel.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hvarazlk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jiamaaug.html

================================================================================
来源：http://www.sxryk.cn/163pnjvozwn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rpsqvymr.html

================================================================================
来源：http://www.xuanzx.com/163grzpumua.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yxabyesv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163biweehyo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mlhdctwq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mvuywhuu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yqbubhmf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hvhedafd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163oxxukito.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xhhjpypi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163iocwgivf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ybcrtnlm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163uipfggrf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bzcllnsh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163svazeqkb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bwfxafkq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qeslhsad.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163odpyonvd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mhwxoejn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pqwdysgh.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xbmdqauz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bscjlqym.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xphjvljp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163srcutols.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xdjbmlzp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tzqitvuk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163atjpgiqp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hfmbobyg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163irbhutqd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163sejqlgnp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zfflthdo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xsdukjaf.html


<!-- 参考信息 -->