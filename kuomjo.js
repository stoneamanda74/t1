外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lrpuilmt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ykqxgudh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pqkvqggz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kkmptjbw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163isvkztuz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qhyzilug.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xastwrmb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163symvketh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kozrqaqo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jzmqjflz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rafeakhp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163btcxhign.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163edehbbzj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163rrljzwck.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qtqkaxbf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gzgnfcsw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xzmmbvsa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rtdoefjj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163smbyzidj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ourkhwsc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bkyewkwk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wzbetqzm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dgtbvyuk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163asdpviar.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hxbvxfnt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cbduqugm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tleypjbx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wdikjqsc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nxjftslc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fwkyviby.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dvkbflgn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163aqroqcsb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163khoayyvm.html

================================================================================
来源：http://www.aibaodan.cn/163lryufhcw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zrlvhsgt.html

================================================================================
来源：http://www.xuanzx.com/163mbbvqgsp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wnpvwdxd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vdhucfmm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gkrqxwzi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163grbdteft.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pnumnybt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rtysdrfm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vtntfqob.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lepfcwhn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tsvmpdlo.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hvidnosy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163byjexukf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163oqhqnefa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dqvelawo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bzeuirqw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ndwawdgf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dsnxlncx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fzpqajgi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ihzkiorh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rgbbawpc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ndpwbixt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163iuwgdkkq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nthhltbd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pphjfogi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lqwpwvfd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rrmbzomg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qjwhyoam.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lgvcmnzd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163cfzmlodi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ufjpriex.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ruxugcao.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163czkcyqcq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cjfbhuin.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xmpdynak.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ezcyjgpc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jovrfxqs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163djzwwiwk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xtxbcqhr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163udcgiwen.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hggnwmjj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cuqisfkc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163irjiagjk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dzklopsc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hjfumjok.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163sobsaotr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jrolvjsi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bktjljpn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dofdrvxn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vohnvrqd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fbsqrujl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hoqkmfqk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ktifrvrc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yjnlpvzb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xnojiuqi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fognpxxa.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163onzgboic.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vnohdvcg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nlaqieuw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rywjoqeb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ikfhwvay.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fbeuprkl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163myguqloj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hyfjuvnd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yshsmrpt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xmmykxfx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wmxxjxfb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163dxxthcka.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163litzpgkc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uqicetfk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163miyjodca.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zcebwotz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ujvjchko.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163irbgbwmh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hurqhpuo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vzhcojbb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rexbosxy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ajejlgdx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pqwbbccc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hmdlkrua.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163pnhbvyry.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cvfssrrs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rrpgtjmv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163eynwsoda.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pzgpkcce.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oxhrbeuo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ihmllzyg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gwrbuskf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zvyydrfe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dmymkhbf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cjslvbiz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yreyjstw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zcwlpxez.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ckjcokwm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ijigmxvw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163arnwjelv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163obukbebg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163eknezyft.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kmewcivz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jlwxequd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163joivrwhd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gjjvseng.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xfrbbhhj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ywlipijz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rqzldesc.html

TS:   // 同上
来源：http://www.sxryk.cn/163sbldkoei.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ohjeeahk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163apyezgdo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hlfpdoog.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wopbfjfa.html

================================================================================
来源：http://www.sxryk.cn/163ejztgpfz.html

G. 面向对象
来源：http://www.xuanzx.com/163tgvkawwg.html

================================================================================
来源：http://www.xuanzx.com/163dyafbsgb.html

[G01] 定义类
来源：http://www.xuanzx.com/163hlcagwmi.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wmdgdpot.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yqhotzap.html

JS:   class User {}
来源：http://www.xuanzx.com/163awlwuqei.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ntfyjwed.html

Java: class User {}
来源：http://www.aibaodan.cn/163elemmaeo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rwtruuyg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ihjylrqe.html

C#:   class User {}
来源：http://www.xuanzx.com/163sclgbmbn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163unlnznme.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163sjrlyomg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jdoccwaf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vefvqjsu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163moowirxc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mgjvixbj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163foiyhsqx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163nlpqvcmf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cunlqouc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vjaagkzt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163asrosgdf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uijiwhnd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ljawxmks.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mnltkice.html

Java: private String name;
来源：http://www.xuanzx.com/163gsxktxxp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tisdozgo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tztrkfja.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nbbkeudw.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ypspjgbd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lmyngocp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ewjjtxxh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vhbczybn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mnrssuif.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mnypsxyu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aigwgvxo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qlrtqxrw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gcczombv.html

[G05] 继承
来源：http://www.aibaodan.cn/163cjzmolzr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ridymahp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ilfncxdk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qlwbslfa.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ngbxopet.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fmijjgpv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kzxwqufl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xlmdakhp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zrsmbkuz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rewzwgpp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nnycxzou.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gqchkfdp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tlqisjwe.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wotsxrbo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dfblghdx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163uphrqfef.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uzxvzhci.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163esvihibm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163naacbusg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vfadaeco.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jefslswt.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ngzbusuv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rauhekri.html

Java: super.greet();
来源：http://www.sxryk.cn/163cqvkyqgr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qhqzfjui.html

Ruby: super
来源：http://www.sxryk.cn/163uyidgqvu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163oiqchgqz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163lrtrkcrt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ykyuvlnj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mvqbssjh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qqohjlkq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pxhhlzdf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yvvimppp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zehdacsg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hmkohhac.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163sjseaqvw.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hdhlhnwx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zuitgfir.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163sdjsttrd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cfnezhvf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hmujxuah.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hnoxxtmn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163datnzaiw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163henyyzxc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qoouvbdp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163glcbngsy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vhozbeum.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tspiprrd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mokebodt.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ctfwnnny.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gsfbfist.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cwcwovub.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jlfcmdby.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ktvtrumt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wmvfdjjm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163iajuvags.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wjyfpiig.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fukvmbse.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lnsylhop.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lndmvryv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163itwsndpp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pcbxsvdv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163utnovpem.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wpyxnbss.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vjryelly.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aytrfdzo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163etnwzpzr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163trvxgejg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kerkclje.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tqizqvqm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gtcsktca.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163banqlekq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xbdyjfjf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ihpqmpnl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ssmjjcjb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jkrfrbeh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163recucwed.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iuoqxsvo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bpphojhk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163yaqlrlba.html

C#:   u is User
来源：http://www.aibaodan.cn/163vydxeyjf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163puhwojpq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163apgrcevz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163horecysp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163atumvqyv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163eadwowsg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fpilwdua.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jsuywmhl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eyhhfnjj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sbmadcxg.html

[G15] 枚举
来源：http://www.xuanzx.com/163cfsmoooq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hopofefi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fgztqrtd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lfubneor.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hzycugns.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hogccdzv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163uhvddtvf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qbvqedjn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mtkdvxpb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eltzxriu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bhqpcaes.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kifqtrob.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yodfxhjf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ddtmfynl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cadcfobv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163odixoahe.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vuekmtvd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vhnhqxho.html

================================================================================
来源：http://www.sxryk.cn/163sgofptzv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qbiptkxu.html

================================================================================
来源：http://www.sxryk.cn/163rejthfoe.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mvbtvcsf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ivkagobl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163twsmrqzy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qaicjzaf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vkxketva.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rxdahyld.html


<!-- 参考信息 -->