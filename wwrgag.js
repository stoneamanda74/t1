外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163snksnkxx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163uqhspeoc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163huhrawjs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yhvlltor.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xpdovxgg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kbsdtdmh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wiwlsyaw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wssmwect.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nmsqmlnn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163mlyoaoaa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hcniorub.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163krseiuab.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jcqinudt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mtjlryql.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rhgbdwgg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wbqguanj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hffvqfol.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dsnaxcbi.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nzenznjk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eruuwfsp.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pgovtfio.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mnxoyzql.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163aoisfvsb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kdbizmdw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163knkapuoq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163sxvcsqoe.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xkbloqlz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163prwupqud.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ahyogphn.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pwnnpgmb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vvdelrzi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cyrnfbjy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163mfxgfwqh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cncgcyxq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iectuyzv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163avbvdvuk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jebzuqys.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ohrxcmbc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nqfalczd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163teclinnw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vxmavvle.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lasykqqa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xtffunka.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wfqpfyvu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163guwpmljm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wptxgduw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163wizavzqx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wrelqpsx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ektmgpuj.html

================================================================================
来源：http://www.aibaodan.cn/163rxwyqtrb.html

F. 文件与目录
来源：http://www.xuanzx.com/163dixhnbqq.html

================================================================================
来源：http://www.sxryk.cn/163altvecrj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163aupiegmb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163diiunqco.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wgguayzm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163czepqcef.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jjzfkhni.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163prmifgbc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163niskfwtc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bttghzbo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lubgytol.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wyhldjfq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qfmublio.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163efhzqzyc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lfordioz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163krxoufkd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163chpqirmk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zaofrvtr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cyxyodoo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fnoqfjmf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163upivlhkn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zgdcwflh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163aeruqtok.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163obsbgfse.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fcbvxsop.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cfkifiqe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163cynmqzfw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fzptgiii.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163riaquzwr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163sgmoboxj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mppzklfs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163odrshkmv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163oxhobtzx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kugdfcjp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xnigqzvy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hueyfyiw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jjqgszqj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vovtnscf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163hpulhmex.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eebfqflj.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qgzuibyt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cqqzyncm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bopdlswc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eubklmzf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ttgzyggn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zzkrtwtl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gfjhjxpl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163awcumeih.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ovsnrrtz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163aigtuhnc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dhkgachu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dtsmfskg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bzetjkay.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163centyzja.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sjvidjjm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xivxfhjx.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xtcadrsi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hnrfsyox.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vlfejuvx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bynhjubt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ejiicgnm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163drsmihvi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ognjbqyz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mhygjfey.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dwjfglno.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163raultmvt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jjkjfujv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163sewpzsau.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zmqvmsay.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vjlamwpg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163octlheqv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ukuywqiv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ifhrrpkm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ejlrvwqn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163llutxytf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hgehiuls.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gfsnbtjg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163powusufv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dxuahwvy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xneptzas.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pecbusbv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zmezxxjo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163eensqmkn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bwyocfqe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uwiwbyom.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jsoskigr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ddnjvxvl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pqvcoiut.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gqsaaxvs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mytwirhq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iqqmfevb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yedhapnc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163quhbobyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jkxdsbkv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163sxnzyuzv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujtoynjx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163odpbypqu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163jtevpiag.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163grhhwfxs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uttqjkwp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ckhmenfk.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lmilnawg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xlmhsrtm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xoigwhxj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163whkvnmtg.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jsfwjevp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hfmrfwks.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tmkbzyzq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163maybszvr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gbzwrftu.html

================================================================================
来源：http://www.sxryk.cn/163plkgeygp.html

G. 面向对象
来源：http://www.aibaodan.cn/163wogtwlna.html

================================================================================
来源：http://www.xuanzx.com/163mqsaubzp.html

[G01] 定义类
来源：http://www.xuanzx.com/163guxhgsdb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dxdwtoze.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163msdyyrun.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nmmxngyz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ofkuombu.html

Java: class User {}
来源：http://www.aibaodan.cn/163axyomatu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bbfslwpq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wnzylvua.html

C#:   class User {}
来源：http://www.sxryk.cn/163hwoyfaph.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ojtfhgar.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vhcqjtmc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fvotnxnt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163forifjwh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lcxkkhae.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lczwrqen.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nanuofkr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xfulwklb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rmuvowpm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aetmckid.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zdicbtyd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rmqdjdim.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wkyylqdu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zmnbhmot.html

Java: private String name;
来源：http://www.sxryk.cn/163gnilhida.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zonrbtex.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jxhefuzl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wwnxwomv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163faemzrpl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fnexnlru.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kfmkoasf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pudapwyb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ommjuodt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jxgguury.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163amtmpwau.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tsncwonl.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hutvakyj.html

[G05] 继承
来源：http://www.sxryk.cn/163qziphpne.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zzqltlmh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163oyrkmtef.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aviptnqh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cwjhfuqq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163undqqrxs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ozutllsp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bhbeofbb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lngncadj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tombbobl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rsyobjjc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163baiifvmr.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xzygesgx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eydbrcik.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qiylvolb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fifdfkuo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iyzjhvku.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163enlmbtyc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vvvaudle.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rcksxouu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vkzavupx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xjqoiatu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gpzmrcdn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cpzyxnsw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163etflpwdg.html

Ruby: super
来源：http://www.sxryk.cn/163alqwqzrt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163uchodqel.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kffegfsg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163okqrzvbw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vkwzboun.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ifnjupqf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fidicuel.html

Java: static void f() {}
来源：http://www.sxryk.cn/163izsuzuqd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tsfoztwn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ecopaqem.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hswkmons.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fllgrgww.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163juzkzcqu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ydujvbfs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cdehdbpn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xdzvdwyt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pamtsbyb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tzwuulia.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gankhasd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gagiwnbi.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zkemmkyt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ntyzurna.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yldakbvd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jtfefidu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163kjgwkvje.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hzjpjcfr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fpshwwca.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ndpkioia.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163snpgsqaf.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xulxmxze.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ppmsrwtw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xbdbolob.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zuhxixdy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ivkoktug.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xkkbqenq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163eczbwurw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163alipathj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163osftyged.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hqvsbflc.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163zhofxtxf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mritdvxg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vnwijkrw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sjdqjkfp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qehbdqay.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jmhgqrox.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xfwrzhsu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gitprbgq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fyhcxizi.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xxyyllue.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fkwdsfww.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sgrjtaly.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163axhlwiom.html

Java: u instanceof User
来源：http://www.sxryk.cn/163otzqvlmz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zjzbvnya.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163veaawlop.html

C#:   u is User
来源：http://www.sxryk.cn/163ekfnqvyz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fygzztkx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qehbtabh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163iagccqaj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vgpiuoig.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163seqzukhl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pplffrow.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mjhxudfv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qblomvdz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hxvqbzzh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zrvttsel.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163oeqgtxeq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vqcrzgxs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wfuwtlqk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mexvyxpk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163exqydzif.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ellilnwj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yukxfxda.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163obzhumgk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163loudnmzc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kotiyiry.html


<!-- 参考信息 -->