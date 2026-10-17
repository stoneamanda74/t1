外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163sxpekelr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jfxkycyt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kfesesxr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tisjmcaz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pliariqn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gupaqnwl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xjquijmd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ofuzqnxj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dquyohpd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mxvqamlo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ppjsipwp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xqtaqqud.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qceyhwtj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nxurynyo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163muaelgzo.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163veheaees.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ochutxey.html

================================================================================
来源：http://www.xuanzx.com/163uzhounud.html

F. 文件与目录
来源：http://www.xuanzx.com/163zuzhsbpx.html

================================================================================
来源：http://www.sxryk.cn/163hyfdtusy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163olhiqytj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163twzjxplu.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mpdsowhl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163twxjaauk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163btqwcfux.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dzsfphvc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xoxxyhor.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nbrsjgbs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pgijbirt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fmqplnme.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163riwbqzss.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rnofrbsv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163iwfobruq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hwvgtcwq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vsbptndk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tntawvkz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sbyocsia.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163opmrziib.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vzimymet.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ldmdqlhk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jjbwzlrw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jvmojarz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aeonduxi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xtoklbcy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163cqemclca.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mlxozund.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163txfmwbyg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lwmmqqcm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kjuffvtl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163oesnuapi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163glrentfe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qnnrsbdf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dccpjvaf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163nuhtmpdx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tcepcaqb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qibawxue.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zqzrhzje.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bcbkkcfq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cihyyqhj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ngjcasvj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163metsdfyk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ytzsudgf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ignthbdk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pbxprbpp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fqstrteq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lexrdrsj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yjhywimv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hnzmjlxb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hbrfmjes.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kxfpuptd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jekujfcj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163maqfdfzr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uwgxennt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163niipywtr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gjrjovvp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nzkufcic.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pmfctcoq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ohrjegsa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163roohksrs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ipwsfdpk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163oaxvppul.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163cctgqqba.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ahosxqdj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fyuwlcje.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kdaavjbf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zbdkuskk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ltgtyocp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ioffundv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jwuabnkt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lcaivsey.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ggmdqeda.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iacbherk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pvfehcbu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163odwsloyp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163yxxoilna.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xwbwetjy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wsgdxvbo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163exzzwkcj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hgrosnnx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163iludtavf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ibhbqlbo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ogbrgpfd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jtqqyzxr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kyqjdokv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xagxjdgi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163slmjnbyn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ghwxqmcx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mqfwwhdp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163itrqlnrh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163siybypuo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ejmwqirb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iyqwfaeh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zoyesgbg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rklhouat.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dwudsgtr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jyccjelz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zhusevdu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jqtjkkpe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vujqxood.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163scevuirn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rfgxbuqi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163oibisrvk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zstmrguv.html

TS:   // 同上
来源：http://www.sxryk.cn/163kahnoynl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bbgqqdfy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163inrrehfc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tvohwzlw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163edcoobil.html

================================================================================
来源：http://www.aibaodan.cn/163pmoaxxmx.html

G. 面向对象
来源：http://www.sxryk.cn/163cqhhyjls.html

================================================================================
来源：http://www.sxryk.cn/163kmpykgbf.html

[G01] 定义类
来源：http://www.sxryk.cn/163grxcanmx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ojqqlaqr.html

PHP:  class User {}
来源：http://www.sxryk.cn/163spgzaaup.html

JS:   class User {}
来源：http://www.aibaodan.cn/163depuqttk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163leatzucg.html

Java: class User {}
来源：http://www.sxryk.cn/163gvnkcmwk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wrraleyt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lsrcjjgf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rbosqbfv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lcypxtdc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163elvwtgod.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mifewmkt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mowbbyiq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qznajjvt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kojbxftw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ebsmakni.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163axjfshpj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bcaomfyo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rgsjlnfh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tstrwnzj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163coutjufy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ppvcdzkx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dkjkrcfu.html

Java: private String name;
来源：http://www.aibaodan.cn/163ujxeqauz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163lfibyqpl.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163szrqqocr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zzxycpsw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xcdhtsxb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xstandon.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hiqlkpch.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163juecznla.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kdabeqpb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hblmqylj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cviyjxgw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163scvzuqwb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163khyvkckz.html

[G05] 继承
来源：http://www.xuanzx.com/163csujkdzz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mxihlatl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qhnwytod.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ojnljoqn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rnnrsxii.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163moksjusm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rwpqkofv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163gvjdqczn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ksrlwabj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xzoiqudz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ruvmnmby.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ajlpziww.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ysellvlv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hqeaqgzs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ohwmevkb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163adruqvos.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zlzjdcae.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ddsmzslh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yrcubbvz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hbmnttey.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ortqqnkr.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fdycamgw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pgkgeadc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lathhrqf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pbjlufec.html

Ruby: super
来源：http://www.aibaodan.cn/163wxmvvicu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zslrbttt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wmxxvncs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ctsshdsx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tielersh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qlsrttam.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163myydnmqs.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zwcnmpjm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vvphdqmw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tgofzacu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pxubzqci.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163igwvhxqb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hdfvgpdd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kpsjjqqo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jupzdbya.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163evdutnbm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ewhrplls.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ysjfskpl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163opzpofjq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163azojwzhp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xazrqgas.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dgcuwspf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lnnxkkog.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uokpytfs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163czauhrzu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dchluhgb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uebfcywl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kmbuluga.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163imyrdtoz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163fvjmpncx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hnmloiqo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tsfongxf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rozmjlbx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dpyrjgho.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zumwzhsl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xoijpyym.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ftlnixqv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wbmzwwyr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cvmlytii.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163oyxbnfuc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cupwhoxp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163mcjormpx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ispwihhg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lijjubjl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163amsiqxzd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163aomhbhaa.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163udkcyqry.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163oetpnger.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ehjzigno.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hsyhbncy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hejbufys.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qvzosbsx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gamcnmwg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163magggynm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163khiwxfll.html

C#:   u is User
来源：http://www.aibaodan.cn/163dkskpwoz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163nplixbab.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163retdajyd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pqfznzen.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163iwnzonnl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163hmohqctr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uiqrxnwr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zlrxiksu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vbxilttk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163aftkjioy.html

[G15] 枚举
来源：http://www.xuanzx.com/163tovqxhgz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yujsjklk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wqfelizy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163crvbmbzl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hynyllsk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163amlctafc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wrxqhfeg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xkfzohvs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163djwdwgoa.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163oermvdaz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fexvwjpd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gcpzgnvx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bqjmlxel.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oqccgmop.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tenhjjty.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qxlvmdsp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dzxdmaqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iavpxbqa.html

================================================================================
来源：http://www.sxryk.cn/163faltyxbg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zfihyyiv.html

================================================================================
来源：http://www.sxryk.cn/163hhejkwau.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mxquoqcj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163exquxbwm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ldvajbwy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163runpufnf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163rjishglk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bviajmvp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163sscqajyp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uqoqpvav.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ttbbpkcj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lgetggav.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jjhykkun.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vmywdvgq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zpngcnus.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xxvdyugg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ryutrvgy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163iueytmkr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ivejqjpw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bkmxmtyf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mrexuhgm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nfgwqmfa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dsuzmgfz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ptlkpnbu.html


<!-- 参考信息 -->