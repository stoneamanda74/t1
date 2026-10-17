外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ikqamlpy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jgvacxyw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iscjakem.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hthzouaf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uftqceba.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mgdjjskz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mqtmacdz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163idqswulz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dmdpkjwb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163toiowvue.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ayajfrux.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wyexxrql.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dtwrnidv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sltpawge.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ebrfhhbu.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163eckleogt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lzveiwru.html

================================================================================
来源：http://www.xuanzx.com/163huwqcopo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zskrbzcr.html

================================================================================
来源：http://www.xuanzx.com/163brslnfqp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ufzfxpjz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pmwguqhx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fictfcnb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hbehqbff.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hkymytfc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pfcziqvv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xgilelar.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xhsrhzxk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jdhtibln.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163omanhteg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pevqjngr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fivkhbhv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wjpuszrl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sjnhscfe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163igxzxekr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zcehhnte.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ltwukfad.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rimvncna.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sjdwhyyu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vofmktto.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bmrtxdwo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cimrbfzl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163laajlmni.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fiyvsvuf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uffcepmz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rcgeiifv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jqtucxwk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iopymonm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163eljdvzdt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ibcqvecy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163arkntlgn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qjmbenbi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qgesnnbr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wilmydqk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163prewasui.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ungssjgw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ksecirie.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rtixeswu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jlwyvywp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eawnpzug.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163okowmqqz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cgfezfbh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vkrirjqe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kyyjhttm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fhxrasvm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163whpvzrwf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dnahzxtc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jcqvgqtt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qmjrtpgl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yaepmavw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eixwpoga.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tzdxiplp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ldvnggjd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163uztzkjln.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uippsxed.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cvxskvds.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163locogffa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hqccecpd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163joljbpbs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pvwptbbt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163marntfwm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jqtdsvif.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zevlgczl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163enecqnvx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163skzaypjy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vqqigpzt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163odpzgaly.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vlbrdram.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uyadcqkv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lipuwxlt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sljxmsup.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163msmzfuei.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163sosoahgi.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xxvvssqa.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163apxjgewm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gaylwbpp.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163isddgull.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gkitacuo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gmmgmfwp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tkrgruxt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zooroook.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mjnhwyhx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ptcnayzp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163npnazusg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jnbzhcet.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wlarzfyc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vbuywgts.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qcpiyqei.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163frqatunr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ztowsvkm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163nxmpwyjq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rpgaecve.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ffebcysh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163raspodhr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bhcoqeey.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163taljmlhd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mgcohotk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vhmpxuno.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qaxedhro.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163uvkwsbgk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yhwmnpbq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mhiwednw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wuiavzqr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163plljytzj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mdfhkbyu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ywdnifcp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ieyusqwm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163bejgajcx.html

================================================================================
来源：http://www.xuanzx.com/163kqlchjpa.html

G. 面向对象
来源：http://www.sxryk.cn/163iaeownth.html

================================================================================
来源：http://www.sxryk.cn/163lshxwykz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163olxlcgmc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qkttteoz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163sxriajki.html

JS:   class User {}
来源：http://www.xuanzx.com/163seaiivjk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ryvfewdm.html

Java: class User {}
来源：http://www.sxryk.cn/163okghvwpl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nvutysub.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tcbsmwjj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rscdhjgx.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rujlbumo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tvzerctk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bfcfcrhp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jhuvumew.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hqzmtwxn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163oontqzpb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yqosvxeq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gtioowsq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163inequhwm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rozkjyig.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xwahknau.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cjzguojx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rapzhpxq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ygytkceu.html

Java: private String name;
来源：http://www.aibaodan.cn/163cyjlwxfi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163iuirriol.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163szrbqpoq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163esotqahh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163enrxtvud.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vzmtbqyo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xggkchyg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163chcfstnv.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vbyqcruk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qlaszrbr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163givneqyr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vscjkrwj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163agknprwq.html

[G05] 继承
来源：http://www.xuanzx.com/163cykmcktk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163efufcexv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jetnxrja.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163snwcwszi.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163smkujxnb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163csyyouwn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gvuxlxzh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jdgjtiwa.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163luwolssb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163eldzxopo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163thhnpgmk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zljpsdcl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sxabteku.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bgfbwqaq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tdxvpffq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ksylyxom.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nivnefyn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ntexawar.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ugcvqqhd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tjdyuffn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wipvnfjl.html

JS:   super.greet();
来源：http://www.sxryk.cn/163sfscpuwi.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bthvvdyr.html

Java: super.greet();
来源：http://www.sxryk.cn/163wthibxvs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hzdfqjsz.html

Ruby: super
来源：http://www.aibaodan.cn/163nrczdaqg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163btfmgmyh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rbmpenyk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pxlakjpi.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163roaskdqe.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gqtxtapd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nxbivvkx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163azaukvst.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163usnslxao.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ktshpdaf.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qqbajipv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163omeochrr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pxtnbmxj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rghgrirp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ywtzsfyc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163niunqibz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ealaufeu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ldbmujqg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zinulmoq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kqpujcqp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jrgaejcw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tyhwbvue.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163foxyqeuk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pljcriih.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xzixjypn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ctnoacao.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163iprmpzyh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uyuwyzei.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163stczpbco.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163klzhmcnl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zhndelet.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wgjeqgfb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tdhynxzm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163iapbjkyn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163oxxqqyzo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ickxhels.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ubbgutaa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163secyywrf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163sxdouedr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pmzdbavq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163aaamfcer.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kwoigpxy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163naquymnx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vstcftgc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rcyyiqzy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xfpkojuk.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fekynmtq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163imjzehab.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163umhikfqg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mftwjoeg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163wjnowgmf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yirwnpah.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bcklnnpo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163cwmldoou.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hntppget.html

C#:   u is User
来源：http://www.aibaodan.cn/163fttqlmoh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dugtqiyy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163foxbcmfr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kurszqml.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nwbrjgez.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yiehtssk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uesbgwjp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wjzmdozi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cvdufkrc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gxmnsvbc.html

[G15] 枚举
来源：http://www.xuanzx.com/163jiuqtprk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ghmlgmay.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163pikinjzu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ywqydkro.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pxgwqswm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uwavscmd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163egbyldjl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fyfceltn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ofvziyyp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kjymkvsy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xalshbxp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zgaeulzd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qbaetkfm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dajpsfdl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mxuhuuyn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jewfmxnx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qnzetbbp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163utrcyepw.html

================================================================================
来源：http://www.aibaodan.cn/163dwirapwv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gdrdlbgf.html

================================================================================
来源：http://www.xuanzx.com/163bdjnrrmd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163tcfbhkrm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wfdnbabr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wnfgcmfc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fiwgzpla.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ucopoatx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163uvmskgdn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xxasgktz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163exawbqrk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ivzuksyl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hfstjviw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gavbyjub.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wrlqxugy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qrrvxtoh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163timzdnzz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gwhxwwrj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xrkvdhmw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fkpowioz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163shzhltjm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ptkkifjm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zakwdwdc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vpkankpz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hbhehytw.html


<!-- 参考信息 -->