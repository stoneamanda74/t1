外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pdubtrzq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xnjyapho.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pwlehejf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jmeerhum.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jsnzwscr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nwuqohtu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ymfbbpbg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cxbyolld.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163danbzwyy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163lfijwrbo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hmbnqukz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bqnobnxb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rpvkpfxv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zmkhqneb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fjmcffyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kqjojotn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jqgmkdkt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fppccdkm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lcixlrem.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xtcqcfup.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163juuspcfd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nbexlwmz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vegfmmmv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nsburabl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hpgvzpnl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fvrttihh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tjluwzfs.html

Py:   if not s:
来源：http://www.sxryk.cn/163coilhvbt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163aopppvpl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ekgqowns.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ttqprbvm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163myixsquk.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fdspvksu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nanqzvnd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tkcclrsv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163frixfdii.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rnjpgwbd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fozemhhy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jmsqirjy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qlmgzeta.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163owyovxmt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xppgiogg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fwccrfqg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163jxhdyhfj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163eiwvsvit.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fcsooniu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163iuytpuct.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sodovolz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wjmrirbp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ifqlwevg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iqqkidwv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pfgyklou.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163oosqcrot.html

================================================================================
来源：http://www.aibaodan.cn/163glquntwi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163acmlxkpx.html

================================================================================
来源：http://www.xuanzx.com/163odqzeqwk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gxqmldqf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163pvpllziq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ihpwerzj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ruzgykcz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rbbqlfyx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zcbrbvus.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163azkhyqmk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ryslfxdi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pjztswro.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ghbbrjyp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163agibmgsa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163oabmplcs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pmuovnmd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lckvffrv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cxxmsfli.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163oelxhnuh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ugosqfla.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xlsqvced.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pjnawyax.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163osdvdlfm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ppenzuds.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ixtnkztd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vculzyzd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mivgrqtk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dfvvbngn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163cqwogdui.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hllidvto.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rshizgys.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163dlphtbjx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ukktmuud.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jqikmjwo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163brrulhjp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tgrizluj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163swilnqtl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bjsvkdgk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tfbfxnst.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oejveqvc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163oenwqcyy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fhbqdpci.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mvltyiiz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sxtknlab.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163trsbipkc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hormebuj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163maxqwiyo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163plzdpzfq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xfratefu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lsejtjlk.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163boypdbrt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163trzdghnw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zuwifozi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163azmeodro.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163bigrwnck.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wvyhvxws.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tnorchth.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163arrwxkau.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mljcndte.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dofwhbsu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wwipcqxe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zjitrgok.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gzeofyuk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pgbcopcf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163niizotxm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bywziarq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vmxjldfq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lszkwkcn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jnqymxzd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bunhdxxe.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ytcfvhdp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hpgrkmxl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163okxojryh.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163yeelaqml.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ecepasus.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163alomltbg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163yamdjjmu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ddcxkzxj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mwzhobql.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lzfnhhre.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qeefxwlp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163oipypyop.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yinkvtkh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ctmekdkw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tjzleoao.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vspgpbsr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zfxanlvb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163utavdksc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kjlijkno.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qllqtyhm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ekwhgjbe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ietjuzvl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tgcnaakf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wrswkeoa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ztsbjmof.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wjzwvyrb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rcmhgnoo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mrhjnjuq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zhcwqjin.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kwsylggl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ntaylhfz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pjeufpbf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163bspimcnd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163euhusufp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vrdwfhiv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163evbamjnn.html

TS:   // 同上
来源：http://www.xuanzx.com/163kacqodza.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hodlrdox.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ypkgvaup.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jsemndan.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163faohirgq.html

================================================================================
来源：http://www.sxryk.cn/163agvgpkmq.html

G. 面向对象
来源：http://www.xuanzx.com/163xbrkjshe.html

================================================================================
来源：http://www.xuanzx.com/163rzwcsivk.html

[G01] 定义类
来源：http://www.xuanzx.com/163yqduuzdl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zlprhmrs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rhjqaziy.html

JS:   class User {}
来源：http://www.xuanzx.com/163lowwuuyt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ogklzwiw.html

Java: class User {}
来源：http://www.xuanzx.com/163utcmyyvd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163raabujva.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mqiazhtg.html

C#:   class User {}
来源：http://www.xuanzx.com/163boxryfxf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yuqmtoyp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dmrxlhez.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tfkhbxxa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kqdiaecc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163niulongb.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bpbqtekz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bmxtbdce.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vejvgeva.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fudhtvxs.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ylllrnkw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cgxchdeg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gredqzks.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163btauhups.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163oldhuuhv.html

Java: private String name;
来源：http://www.sxryk.cn/163ksxaafsf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mgidosia.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163abuwxnle.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163selctrhv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jhurdiwi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163flhwutdf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dcrvjebm.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qmbgncor.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xpgciqjy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ccnxghbq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163twnotydo.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qwpjzuza.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vdxrbgqz.html

[G05] 继承
来源：http://www.aibaodan.cn/163ofuakfnz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gvzzgvse.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163puthbwnh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dwddrbhr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wiqyymvt.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163tunzllhz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vgqvrfuo.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163mvdvygly.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163smpyybia.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zkjxhfiz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nvgltxxw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163byaxegla.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163pudzpdnn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rtdrqjks.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163drvvexia.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vaewsvpn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zycevpto.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rikgctda.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163kxesktem.html

Py:   super().greet()
来源：http://www.xuanzx.com/163nxktktbv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uusnxrng.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gciazprb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163etflqdbk.html

Java: super.greet();
来源：http://www.xuanzx.com/163lzhwhene.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fexwuvcl.html

Ruby: super
来源：http://www.aibaodan.cn/163ncwgjjvs.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gxnpuiyp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wtkltezc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kfjuxcij.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163kmoynwpg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rfwnzcay.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163flcshbye.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163otvhujhm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163uhzirlxw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kikwtqno.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nqiaulvf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163aflvkysh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ymyhsdzx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tstrsbgk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pomofdqk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zzggyazi.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jubncdcw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ykvuuhjb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mffqkdha.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pnuwnkdv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163huntwvio.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163styummre.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dcgdohkb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dcjwfnta.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nsfzbitd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wbhpoted.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hnbunjbq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vqzqyxtv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fxjlonzl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uafmtfbf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gvylbaiw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163unuawryi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bmimpfjo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163oelljwxm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cuvopglk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163gymosvhe.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163grzguwue.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vrlrknsw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rvermeuc.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163scqgdvta.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kauisyws.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qtfqxilk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kaiaybln.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tctkkwvx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xaisvwmo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163thwerics.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163licpvxzt.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163osdqnwkt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163yswmjwwi.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uoigdzjw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163madgadha.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163atnombcn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fxlwvlob.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jnjrgydj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ijddxjhg.html

C#:   u is User
来源：http://www.aibaodan.cn/163ctbbadha.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163osmjzgpm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rzouwrhj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dnkdfnfo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ehedsjay.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vkdhmbrp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163chgihbeh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xakoxhuj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gygkampl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163tzaiionf.html

[G15] 枚举
来源：http://www.xuanzx.com/163chisnale.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163enbmbapp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gbksrnxx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kyrtynhg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163umlpxymb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xtoqkvir.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pdfxofnx.html


<!-- 参考信息 -->