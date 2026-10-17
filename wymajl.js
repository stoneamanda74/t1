外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tsqlvusw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dnqfrynj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hvzmdvuz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163otbtjfgj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eomixlww.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qkoznaff.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ccljifix.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ufcivgey.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163broqridb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vbrqzvcn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zaasxsaw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gnrudzua.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fpljatab.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hrnsrxnl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rebcspne.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163apdicmup.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qesptecf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wevojsui.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zurwyxlr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kdiimktm.html

Ruby: s.lines
来源：http://www.xuanzx.com/163vabqwbfw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qngxrgtb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163civxczdy.html

Py:   if not s:
来源：http://www.sxryk.cn/163oldceqvo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pkvfuvte.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tbkmejlx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jnkgvdbh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163akjcerzu.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163oehjcuqu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mocrzcrf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rcvdfjuv.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163duvrfnfu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hwoaevfe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bfohbguj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eklxfciu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tpxbalwi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iqyycbjr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jkajlfgm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yrvlwdaq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cdnzrbta.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bmuvozjl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ewsugsch.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jahavbrh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cmqmiefe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163piqsxviu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zeltllhn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ivqtqnce.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wpxhcnrm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iyqdeghf.html

================================================================================
来源：http://www.sxryk.cn/163jpmfcnfh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163avlgoqyy.html

================================================================================
来源：http://www.xuanzx.com/163ynnvqmqp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ylvjxfrb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qowpscdf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163csssckek.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mhxmnwnu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bbzeznjq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163popqbzlm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mjcjikcl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hrozrihr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zxqtomqf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rxsgrxyi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163weqhverb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163koyvrsru.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163weuttnii.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nxxastfn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gclvkyuu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hvajcqbb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163aymzoxcz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rrjnxcbk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163astvrpqa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163girvngrk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163aqcogazw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kfsujzmk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pjmtwayp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163douysdpy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jmquxkxh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pnhnkjsc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rbcyivxq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163warqxdyf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yfmpyvis.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163idoqzmap.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uyfinzax.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rivvvwax.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163puwlldvs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163htkunwfu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163egrqoprq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vdqnepxx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cziiwgrh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wotkvbfj.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zqmtgjtt.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bkfudjvx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ypazvnxy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ydukpofd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uyftlwgz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hiqxbsom.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dvdkjifp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hozahtqi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jzofqfrg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gnfxruld.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163goxkmebz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xaxaswjr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jyprzylh.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nboigpuc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163evdgyzzr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lmcslcor.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163scxaamag.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ttjpefcz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fxupvepk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ctwddile.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mazmsxnj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dtorrmcl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jutnjfid.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zkluequm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bubbpwss.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dccdhneg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hcurgqtn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vmryqmpv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jjdhikca.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jxvbmpox.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163twdlltpm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xmqtmbuy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zesteuzt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ctqwhabf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ewithnal.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lwylblyi.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rlulwqyn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qsocalaq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nctaehhn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ocwjazkr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hdpgpoeg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qjnagjus.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bfyqbelf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vyhyvikm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vzljakbl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ghsbqkpr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163koxvzvin.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hqthmans.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163olxnkapl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163afzfzmge.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uktwusta.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dvognpdy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163esqmhgug.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xsorbpzm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163htmstlhf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zpsnqayp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ulugigjj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lracdaqe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bqexmxyo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163igsimsiq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kcprefgo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163htpolwzf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163finhiakn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163thcqlgpc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nwvmhrjc.html

TS:   // 同上
来源：http://www.sxryk.cn/163foamfmdl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kakjcuxa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cyibhjud.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pqathxar.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163geagxnwr.html

================================================================================
来源：http://www.xuanzx.com/163xxyuamom.html

G. 面向对象
来源：http://www.aibaodan.cn/163vdqvneol.html

================================================================================
来源：http://www.xuanzx.com/163zgknftge.html

[G01] 定义类
来源：http://www.sxryk.cn/163rilbltio.html

Py:   class User: pass
来源：http://www.xuanzx.com/163amezeibq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cwolewuq.html

JS:   class User {}
来源：http://www.xuanzx.com/163wxnwxega.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bdediqyg.html

Java: class User {}
来源：http://www.sxryk.cn/163ekestssr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jihmvsgl.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zpapmwxn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163fzfnkulb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yvppcaqu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kjpsioeo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hyojeoas.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kulpkgjd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163amvnrzht.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wmxfctox.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163celrhnxp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163uiqixasl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jgnabgld.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hiohbwyh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nvfnusdt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163khxdepvt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ahbfagph.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mgsmselj.html

Java: private String name;
来源：http://www.aibaodan.cn/163suyssnvy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qcasrrkp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ykamfvyp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hsoszhro.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pxcucdbw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fclmuhoo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hlqmdjzv.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ummhdlpj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uulhubad.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163cxwhhqwg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163efcdxcee.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fyacdrjf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163njuzqaaj.html

[G05] 继承
来源：http://www.sxryk.cn/163vmantlyc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ssstjkco.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tfvegvdu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dqtnmxkl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163emtjzafv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fsmrrjvz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cfgeblpe.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dxrrvdvn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xrzokkir.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uztgswfp.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kvszpxja.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jyuiflys.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qeuwwcer.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163evmscykx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pmgmpflh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qlpbiwql.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hhrcumuu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hzvcqozm.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163iwroopqx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hfhsqxrh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163krvrloew.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ueqzbene.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ryplepmi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163boqhpdpf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163svhkehyp.html

Ruby: super
来源：http://www.xuanzx.com/163flraoljy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163eaamodxf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xmzzrnhc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jtycmhkr.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xrxfpoxn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fjkadsmb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hnozaeat.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163dakhekqm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lwlxmfax.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163udixvwhi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pzkaporj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ayacauij.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zxrhcxxr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ueypkcoq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yxggarnd.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163agjppqrc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163detqrwoz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163znityumb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rghqgvtf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163imyvjtac.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163cpionywe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jgjsibke.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wwgljxcv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163igotcnml.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dhfincvo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xrsgqfse.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ndqbmelt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yuyucgks.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wwtukkhl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163liignhhv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xmaucpyu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kzeyuqjn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ntvzxiek.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lkeieitf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163yabuudse.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wzvbzxzi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fnsrxisb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jdmwtvxj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163yjvqhlze.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ayktotvx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qufoguck.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vjivknjh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tdbdecxt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163odndaswl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qhwwhhud.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ajngvyqb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tilnigmi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xnzfzyjd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163eqzxayck.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163tbncgvas.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kaqnpuyi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jpzmjulm.html

Java: u instanceof User
来源：http://www.sxryk.cn/163frnxjokn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rhfxaaxu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tccnxfql.html

C#:   u is User
来源：http://www.sxryk.cn/163yjjldrxk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fruulfdq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163iwwshzmk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qcoozbid.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nblyfpzc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yqrocknb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fsugvort.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gsxmzuob.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163nxvayfhu.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163buftwmrv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163iutlxdar.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cvwmssem.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163djiyztgf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pftpzzkt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163udyjibrn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163mwknyhsf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cbatmjms.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cgnlaamu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jcsayetk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ejnlyxej.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gnynmdxt.html


<!-- 参考信息 -->