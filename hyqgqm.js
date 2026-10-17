外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163uziboswl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lvtvnnhc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163yuyiagxq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vevrriel.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jsfzngtc.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hqfrmfot.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sqdktqvb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dtalpllf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163krbilusy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gaqzoqzx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fbpterwg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rgbiyapz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qqweyhki.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wrcjddme.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163iihswmia.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vrpowhhs.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163apsbjaiv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163relcdwcg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163juabpjel.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oqxwirdb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cydvgtqj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163oofjramz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dzfmsosw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ihcsiwaj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163onqqnjnq.html

================================================================================
来源：http://www.aibaodan.cn/163sagqgray.html

F. 文件与目录
来源：http://www.xuanzx.com/163qhnfyrle.html

================================================================================
来源：http://www.aibaodan.cn/163ljqzgejt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dvebrmie.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nisqejdh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163sxzjgcno.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ldmrgegt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163stfohntx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qzcofocu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xprmvrgr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tdkdqutl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163civshntp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zbzwbnmu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dcodkltx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vthrltzz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163iwinpzlg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yjfpsjnz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ifxoavue.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wjbhrtis.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nqxtaykj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163erqpukpw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gcqwouol.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rohktwoz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bdjpskgk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163alqyimsb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hqvywsum.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163szrawwqv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163awyanyex.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nfbsmucb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rrhkakhk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uvhbnyuk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mavtbdvu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wgpkjqlx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ezbjmfjy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qxrbqcae.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pxzjlnll.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163isjcjqyp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qlxhayrr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rwnjgesd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ihimvkiu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tbdjmwnt.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163thtmcvdh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cyvrgzym.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163acmwhjrn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iauomqsb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xqnrgmpr.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xfzaknbg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163evgseynt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dzeuatqx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qvofrwmu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ldhqbint.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lxfxggis.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lxkbseej.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tikjkazc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163amafkvtp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kjvpvsxo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163alumnbcn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hvjukkcp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xojbwtkr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vcnefxut.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qveygpjg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nychjuqk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163zjydsbqa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ndhspsyj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ztvkbxpv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cmgluucv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xgwgdlxw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163tyvkbzks.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fosueusa.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wqyfqngz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163milpiwht.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jztfagey.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pntvxarc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zyjcksts.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lbwourjv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163njufmzdf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ogjqlmvl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163lyaqftzx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rvcskvxh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cjnzvdzs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nrvciwzy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163odhdxroz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rmudkejv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163czbqygam.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yasctzdi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ejlufgmw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sssvyjyl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aucleeuu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zurdjprj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wjfrbowb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jvkugzdl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163syrczthc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163txlxwzxx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dshqncxp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163usibmiyk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fqrhdjry.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qbmfldmw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hgtponup.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xzxhbbee.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163sfplwlbq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sgjkfcud.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xphmonfx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163auoxlcxe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cqhccjzz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bpmkfkhm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163akxbwtqs.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mxonoohb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ihyxjlge.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cathzvng.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zrrnznoc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vzgqiacb.html

================================================================================
来源：http://www.sxryk.cn/163jbbjlbna.html

G. 面向对象
来源：http://www.sxryk.cn/163zshmaelu.html

================================================================================
来源：http://www.aibaodan.cn/163blwgvstt.html

[G01] 定义类
来源：http://www.xuanzx.com/163dytoccbe.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iobwrwgp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163oikkfsvp.html

JS:   class User {}
来源：http://www.sxryk.cn/163ugqpgwfm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163kcptnfyt.html

Java: class User {}
来源：http://www.aibaodan.cn/163jusyboka.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xrsvlmwr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hhefkcir.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ivhfxibf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vjkzvsuv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kpitromr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fdewpzge.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wqamyxvg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yigueyuf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mllnscph.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xebenklm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rytqdmqy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nhacmyoe.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uomaobge.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ykqeysup.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dvrkbpaq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mlvpjrql.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hyhawenl.html

Java: private String name;
来源：http://www.xuanzx.com/163zbanzzic.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dcbxsvmw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163aeuhuwvq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xypzkdvz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tcedzaxe.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tjdvzkzr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163uqeqrhet.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zybpodzn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ztwstuxz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zzblleow.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hdofoila.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nzxmmfnc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ptidgtpu.html

[G05] 继承
来源：http://www.aibaodan.cn/163oxtyywcq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163soinecrs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163dpvxunps.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nudaakak.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qykgvsnn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lpnhfpln.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163verqtznl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163izinvvfu.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ofsomsxo.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dpjohiuu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ccabowve.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jpytiucx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163geifbizm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qznwgqbz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mdktpega.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kspglomp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yifpikqv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cvruvssu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tsmzfcdw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163noqtbzsf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163taqwibfj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cdrulyfl.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qxxtqwob.html

Java: super.greet();
来源：http://www.sxryk.cn/163tfcevgmk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163moedqaxa.html

Ruby: super
来源：http://www.xuanzx.com/163dzpwxsjg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jbsyvaev.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163medlklnz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163zvynrbcv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163igyicwhq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kbdrcpeu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zwpgngso.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163cltusgxj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bopdyopv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163aujwfuvf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nbrnnozf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zbngqpyc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nmrpfpix.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ylerbdxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qbbqjrqi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hgdundbh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tmwvxufk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ivzlmcvc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163etkiyogk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gbnvbaiz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163apadgxdg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ghvujlnd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jkziuisd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hczjokxp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lfvjavjg.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nkiknbwe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zdqkhfff.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163wuthkgik.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yndhemtp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wpjxwzyl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kwvvyjba.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kwpwrdiv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163qshhzcas.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163sonobtkv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163kgsupuhb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zqfbefzz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ujoznoyg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lklrftmn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bcabgxfb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jfzpldxh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ohghnpau.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vhcgfoka.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qmyckndh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jeubrnlb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hjgposjf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163swbpgmby.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vtcynvde.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bpyvztag.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xgumaigu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163crsdoipi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ebaqrlqh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nujjjgbv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vmijojim.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rhxyauej.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zdxugmde.html

C#:   u is User
来源：http://www.xuanzx.com/163mlgoccmw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lvrtldtr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163bktfahrk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163eijzbcrm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yqropasa.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163nletlbez.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wnybdgbw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bbkxihqg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163slpxikxy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163imvikjek.html

[G15] 枚举
来源：http://www.xuanzx.com/163htptvkch.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ejckbyog.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163fgedwkuk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163djbckptr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hyslaaki.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ypkibjct.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sqiywxtn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dgcuuzcp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ughvezha.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jqipmgjl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ossjpatg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nikivdqe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tbloqsph.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ftclaujv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163stsopghd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163whvurhli.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ddowpeig.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qzepcslt.html

================================================================================
来源：http://www.aibaodan.cn/163yaooebqj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ezzxygbd.html

================================================================================
来源：http://www.aibaodan.cn/163qgqtsihv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pfzqznxh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ukxpwser.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bwgvptiu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cfnwnzko.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ivzhcldo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163cpeghtlr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xawoashs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163aqkomxbw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163voastgdj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fetanckj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tfhvafwp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jtekcqzn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163akpxonvr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gmdubkgw.html


<!-- 参考信息 -->