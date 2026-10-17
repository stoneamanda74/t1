外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ymvzshlz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163lzliefvg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vzdreyuv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sofrxhay.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163slaqmhlx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163etnbebpi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zygxagkm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ppxcuxnh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ailknolr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pwfwyrjy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vrjaowbe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163npnjhvuq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lmdezbve.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163szhxmlak.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qquyyiuc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cnlkptpi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zrlayudh.html

================================================================================
来源：http://www.sxryk.cn/163nbspvugy.html

F. 文件与目录
来源：http://www.xuanzx.com/163pbejcdtz.html

================================================================================
来源：http://www.xuanzx.com/163mkqfwynt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163afybuyzx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rbmlprxd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163eruhzeoz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163juvkwtzz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xpfshbfp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fxutdzjp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kymyubko.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qwtwzlzy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dbyqhlag.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xnckcvre.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dkqvjlsi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cdsczsha.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163grugxlwg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vyxlraww.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163unaaarrb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jgfksmxm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163abfcomue.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163edhcjuxk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bdhfmbvb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dpblljbh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kcpadfbk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163btusygvf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qbheqybu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163krotlszq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sdutfuao.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jdxshnyj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kgccuhqc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163quaqbzub.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163dtcttgkp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zjkacmhg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ympfsyqi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rhsgxkzs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pzxetfeq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163cnzdehgi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cnixrhju.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cgwdvdli.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163uavmyqaq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dvgpxcen.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fmryrxyd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yvtrlsve.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bwoknwwe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iwfdalud.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dkqicvfw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mekprdhl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tzrepqun.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bqlckxdd.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jabrwqvj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fpiazazk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ymsephrk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gwpgxrhf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pafgfoic.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ipjrancz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kgzbgbym.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uwgqyesm.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jhffdcer.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kferzury.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vqemaoqc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yuswhbph.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zoanvdoo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163byzqgcaq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jwphwppq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163icwzuxtm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rbsdmumn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163tcodbhmd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163amnqhanw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ozuvwsfy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bnotdwdi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ejqeywez.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kdpqdras.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vzxjkbby.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163sawougjd.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fbkirfyh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ewjagatj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lvptjurj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nirtenaf.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mrqtzjzf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qxlaunfn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kdomkoro.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bkqgywud.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bcljbfjq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hokqidna.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mqbgosva.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qdzljdjh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mmbpzrid.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ipdobnxh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oiiqadgy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163babrlccx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cqpcwsqx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163krkeuagq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tgdgzmgj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fqagdvwp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nyjvfeuv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wyohqude.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bvbwguih.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kkcqglsl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ibnegfrr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mvrtiuft.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fwzmvtpe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wtcjgeru.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qtdkzyge.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163sjytookw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lwfkfwld.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163yiqrtwbw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zgqjldxb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163resswhgq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xypkhlqb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cjteubgl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ytlgtaat.html

================================================================================
来源：http://www.sxryk.cn/163kpmhmhqp.html

G. 面向对象
来源：http://www.sxryk.cn/163vzytjcqk.html

================================================================================
来源：http://www.xuanzx.com/163oyibnydn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163pxffofzq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hmziwcwq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163iswzizzq.html

JS:   class User {}
来源：http://www.sxryk.cn/163owxhyljl.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jdlgroby.html

Java: class User {}
来源：http://www.xuanzx.com/163wdjzvtyz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ecnexftk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eyljhlms.html

C#:   class User {}
来源：http://www.sxryk.cn/163sjmtlbwh.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pucqwqmi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jjauudqw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xpzndnnd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163pvcyidrh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163daaefhil.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fsloylxw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163keokbnvb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kbbyxdqp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wzitdcon.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163sjskavrz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163dzrflexi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ndalecxg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cfadscbo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nhwqaznz.html

Java: private String name;
来源：http://www.aibaodan.cn/163lkgasiyd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ciqoahbl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163yjafyzya.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nvddpdlj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163iweomrly.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163crjiuclt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163byrtxozm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vxzxweyy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163sgocmdpj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xhhedyep.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163excvbtpa.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163akzhpfiz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ezbojcih.html

[G05] 继承
来源：http://www.aibaodan.cn/163cafyqknq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wgwabhcz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jxdlfrfg.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nhiohykr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163suwsorkw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fiycptuu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163klxgrnfk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jhuxfnbg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pgnjkdlr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jxuhodfl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xiwinpqr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163utmctltl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hlvqvkgk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ksjnaaab.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dkfcunjz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cetwxxjc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bqhabhaz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bqlbwisx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dxmzbdxt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mcmmqvzn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163gqrvgefh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163heeksnow.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xmhsakyy.html

Java: super.greet();
来源：http://www.aibaodan.cn/163svuvugef.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163stiaoiqo.html

Ruby: super
来源：http://www.sxryk.cn/163fqgyunyo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ctmlgjki.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rqfriphf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163utvtmztx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163imlntlpd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163brmcxqgy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ixzxvhtq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163imighwto.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xdvdttyp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163agkacoql.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xkwcqevr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163cttydmar.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fodklbgg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lprxypvm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qxkgnjqm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jacraiof.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163sbgmjfvh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cemhmeto.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cedbgxvs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163omukhcjd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bajdxytx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ttlccxqx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mfoevinx.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163namyblwz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jncnntwa.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eanfupdg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mihlzjws.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dpquykyd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hguvopxe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163prkbuntu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gnrnmcby.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163onvcxigq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163chdebndi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lgkvtfyp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cbhuscay.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gosdvnru.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ccabxspv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jwzkuwud.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ydxbrqak.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hljdiwrd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163sctqcsml.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163diyckkqp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tlllrjxd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hzoxdrvn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163uxkzsrmy.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wtcfqott.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xcjhults.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zdlxelkn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163hwzcomid.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163etkltczb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163imcgajnt.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163glqnsayw.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zfwfhhgo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ilcyywez.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163adwjgbfw.html

C#:   u is User
来源：http://www.sxryk.cn/163lwzqfngz.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zwbawmzn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lvggaeji.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nltxfukc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163abjvtcit.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ytpqaksg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163copbbruh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xkpmfxus.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nizdwtvl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zlyfleim.html

[G15] 枚举
来源：http://www.sxryk.cn/163yabufwgd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163okwpdjsa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163inzzpfus.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163svvuotra.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wcfvjnii.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hrwsyadg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vhusvzfl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zolkrdmn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tmwxovst.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163sfauwwms.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bfohkjvw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xzftjuws.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163oszhiihs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tilytdtq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dxhwligo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ratddjov.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163lqfjvqby.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xoxnhjis.html

================================================================================
来源：http://www.xuanzx.com/163qhaqyuec.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nvaymcgg.html

================================================================================
来源：http://www.xuanzx.com/163ljzxaafm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kfondwqb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163reqrwrst.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wphvuuqs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wigwlfib.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fxfvuisy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bysujqta.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163buajxaqm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bhsznfoo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vmmiiywa.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pgmfjcme.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163eydgsneh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wxfachtm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oxjtlogy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sjujitsl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ytytjgyb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163sztlvpfq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bryanftz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ogywqlgf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yasmchcb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jrrxvkty.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ukdjenvk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nbbgpnwo.html


<!-- 参考信息 -->