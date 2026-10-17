外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jqorjtei.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163nznlesql.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163siwtmzvq.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163cwbxdfvx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gsmdriaz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zcaaddff.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163heiixwkd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qpjeatvv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163azefbwum.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mygbfewx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lkfpslax.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163autfhgne.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hogkvtbz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ngxpljto.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cgoyvfxl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rmpjqglh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vkfivwzg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lqoutybk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xgkpfoqn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163edgvuqsh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163litxpooz.html

================================================================================
来源：http://www.sxryk.cn/163rwjgzfsu.html

F. 文件与目录
来源：http://www.xuanzx.com/163ieokhzyp.html

================================================================================
来源：http://www.sxryk.cn/163yhtbnuof.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kmjblubf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vgojcptp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pbwfsjhf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fzvbtlwo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163lnoatubm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163feewzama.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163upnixotw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gxsvumgi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ibsrzasx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163beyigduq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bjrqrisb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jjcwfkjw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sdavbenc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wkoznjws.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zkogjqae.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ctuvluoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wcjqyacn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ljpcqbyv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ahmzcznu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qbaidicx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pohjxyac.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yqjkqjwd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163irbykezq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ejhyevps.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ezwpqsrw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ymhlsddo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qdjjbdrr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jlfavruf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hynzkkvn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dstybluy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163smcjlovb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gawgqdlv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xqznjskj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bkawzpcp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mmruisds.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163upchtywc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tieasbyi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pxjdtjgo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wassrgqp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bhufxszb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mezizzwz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163usodsdql.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qnrlvhml.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kqxeenhw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jyjzaere.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vihjwvvl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gwlydmxn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163nokbpuoe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sfvhfeta.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vnjtpjra.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fudxmnyg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163vdplrvui.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163sqhzyvni.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163benvxkdi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163eacydaed.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ruwnqcvt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rhpaxndp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ilfiaulz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ljbeaysu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163loscpsxv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sebepqpp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nkmitnuo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vynwvgdu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rqddemxt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163scdxhrxt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bdadghop.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163upjawioi.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fytmokvx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vlsoqrdt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fhafjdvf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163txatbkyu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bjxhponb.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jacdmcrc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xljcnvkz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sditoxgo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ejelqizd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163okdhroly.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ofjwunxz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yoxbublx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163axnmxlsb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163anvwnwfy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xyrmoxel.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kovleiqk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qdntaghr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163phkvtiyp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sbqrrbla.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163zafdjnhf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163auaacizo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163onwtinmw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163teyyuqtx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zbzvkszj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tmgswonb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hhlrushf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wsfmyvrh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163szbsqkxj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nhqcioug.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wizlqygx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nwiuwzvt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ehpjlumj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bmrgzlri.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ofvcrnqq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ipihounb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zxxcmdrb.html

TS:   // 同上
来源：http://www.sxryk.cn/163wytbkdvs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vmjjzzyw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mridclqs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dgwfjhoc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163eobmxugn.html

================================================================================
来源：http://www.aibaodan.cn/163ahymetoi.html

G. 面向对象
来源：http://www.xuanzx.com/163qlrcdlfn.html

================================================================================
来源：http://www.aibaodan.cn/163evmgblvy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ffyrgjbz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qcimiuys.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xqxedpke.html

JS:   class User {}
来源：http://www.xuanzx.com/163kyacoxkw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jczazqzg.html

Java: class User {}
来源：http://www.xuanzx.com/163zpvwjmog.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qryooxnr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kmqwiase.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qqsphayg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163coeorykv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wxipbgcd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mwsqlxmr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lkpgrtve.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jgoxmrhk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163joxuzmej.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hpkpgght.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163sytxeexa.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163arfigxom.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mlyijhqr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zsmohmmv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cjzrnudw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163awlfujms.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xvhzjsxc.html

Java: private String name;
来源：http://www.aibaodan.cn/163ahwrlwgn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163yolydojq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lcvjltkb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vgbjwkar.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163cnxmeysf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163awgvfbwy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ekglehht.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163iuxhqtqo.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mdcaoxmd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nqpmwwac.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kxxplzeg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163dbczfgpj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ydrpmysj.html

[G05] 继承
来源：http://www.sxryk.cn/163wqfmuzpj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163yxhvvpys.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163owjvawto.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163omyzrdqn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wqkdbzot.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vgduzfno.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rkoumecc.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163njzobimy.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163yrdgknfa.html

[G06] 重写方法
来源：http://www.xuanzx.com/163obrxeifg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ackbinuu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fikfzvyn.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fbvnnnwa.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sqfbnced.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jyctvqyu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163peghqomx.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kheruyqz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163sebognmv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hzcccsut.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dcqmquyw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163iijfbbye.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vndquumr.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dxigirmx.html

Java: super.greet();
来源：http://www.sxryk.cn/163yuyswcit.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hqavcgnl.html

Ruby: super
来源：http://www.aibaodan.cn/163swqfmxhr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163aeksucoo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xebcoduj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ffrjzisu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mjqxgqpi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pzzvqsgb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vhlaypyp.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163chcbmpok.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zgmrflam.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163okimxiix.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bsnrsjqd.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xuciqjjv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ijhfmtjq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163preuqcpt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wurwupij.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xovumlip.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bxjmjeki.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163bsqvatan.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163odrsjeng.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163olngolma.html

[G10] 访问控制
来源：http://www.xuanzx.com/163khjpduiv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163kchmdpva.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zinptxnw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xyuhyfet.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163javynixg.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163lpbajilj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163dwuidpmv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yhbuqlpp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163anropvca.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nnaihbxw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zpwocwmb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kjachprr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ayoxnjrm.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pzlfafub.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mlylrfeh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tyswdpqk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xwopgocm.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mzfejwvh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163oaxdteeg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hgrrbisp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163nrhmkqfp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ciiscoge.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vlmcuhvh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163qoydwedv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rjaahnyv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rxidvhmu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sjilwdhx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kmjkkxpt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tasbsqzo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163blrhpbha.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hkvgxszw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vsmtljtg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hcmmbtzq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wiuupnzw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163anqgbsvp.html

C#:   u is User
来源：http://www.aibaodan.cn/163angthyep.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gdobjdeo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163faoqauvt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lldhecxc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ifbvsqtr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qyjrkghk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tshouawt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163inpnxpfk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kjqdayiv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vqxukcon.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tmvjcgbb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163balzeytv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ckvxuskl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163oaxmjgkc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yqmgvfgm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bbbzolpa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zmvkpfmt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fkyuvhrv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sqktlxjr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163evjselaf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163izqsgyhh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163euajelcd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163luplaldd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vhckbfeh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jwqkkpaz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163dnlywozf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163llytjuuo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ztwiylum.html

================================================================================
来源：http://www.aibaodan.cn/163ldmubcdn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nuqevgfk.html

================================================================================
来源：http://www.aibaodan.cn/163mzmayjyx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xrmvyirs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pkjkxajd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zgqqyrvc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ufpdouok.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163iygvvftw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163idqirvpn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kbjcbozz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wjhvjfoe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163davnvqpl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ewkfxekf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zbytcqgl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tbknrjjg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vubuhwwq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xmwiqppx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pvivoozk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cgtpmpku.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jlkqvvbr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jrohayvp.html


<!-- 参考信息 -->