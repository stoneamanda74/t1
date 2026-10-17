外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163guuumvoa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jsdwednz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cdoykgba.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qkgqzwbd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hdbnxgoj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uogtuihn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uvlpxxat.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163keuzdjlr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163haxlbudl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nklswxqu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ndzjkdwo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163drzgdxph.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163smomblgh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ioygpfre.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rtvgtnem.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ljmcjdla.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hntybbhj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zbusgczc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ewtnxtxy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163kzbfkdwp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mmqzlcmi.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163iedsvjoq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163frpwyffl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163luliewzn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163efcejcbp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gxryyhdd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163aggtgyzz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zfcwsqqk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wcdlypeb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163yhcrqtni.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163meazwwna.html

Py:   if not s:
来源：http://www.xuanzx.com/163oeudbiij.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ljlobjlz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163iypaumtg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163aoidgbml.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163edlkteeb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163uogtqeyi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fzldjmbb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163iseuknqu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ncgduibp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rmodbeah.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163iavdtwch.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163oyhiruvn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jtqjmgsi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fargurlu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jfruzkjs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jwlttkkl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wpiqgwbd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dewyzrqm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vcmijvnz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163acckyrgc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163awarmmwl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sbctyhds.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163lbigbsby.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jblragzs.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163erwvesiw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ygtkeovp.html

================================================================================
来源：http://www.xuanzx.com/163lhlmsyak.html

F. 文件与目录
来源：http://www.sxryk.cn/163taqckyrw.html

================================================================================
来源：http://www.xuanzx.com/163omlpfzjh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bwrjcust.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zdwkkqys.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bohgcsgv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kotycjln.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hgqifxfu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nfbiwnxv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ulsvgoan.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ywteebpy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163otxihwqm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tnlrvdsb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ltpovfvm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qsynzzzv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yxuqtctp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gapxrnpb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163emanioxy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hkvjskpg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163dqfygqmm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xvlliotl.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rrajplsa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wompopzj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163najhalqn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163srstplqn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vmskhhlh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rirdwdem.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zlqydznl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163sewiqrba.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163phdtdapc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lxbgufcg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dzlsfhpc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163rdfelnnd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gjaupkhs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ogsnddyf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gbirhkdv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jryjuvqu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163sysacpaz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163llrbbzpy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fsvwqpst.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pjvfyrta.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jczehynu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uafvexcf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dppszfga.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ployysme.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163nnvfpwwo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jxvowlrb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vuhwnkok.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dymwutol.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pwtjxbdu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ukabkite.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jxvtelhd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oovjraai.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fgcpamam.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xtufjgvo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pgawxmuy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jjcpdiic.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ljembrrh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163arppxavu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jujndbsc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mknrwlfm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bwxbucwo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kwltkzed.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163acfamgio.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163uauzugld.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xgxbroqs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pnshspzk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bglqtbcz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163rmkorjxs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nbdzmzjw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iqmtdjzt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cyvpxxxs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pmttkofw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nhdxodzs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163estqeuds.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kjvzfmyg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vdtsjzdx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163itbcoykg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zgflgswg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pivbgwna.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cukvojnd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qfnibhme.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mbldwrtw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163uqsjotil.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bnjerjho.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mjaxwfuj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rwecqulw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ykjjbuxm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wdrmamrq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mbykrxjp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zndhesut.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163czdsftcd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jnsldmji.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163idbmatfb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kpwrdlaz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jbomuvdb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163guknrbmo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylgmbhpl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163decuybpc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bumglfzy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vmjqkqpd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fbzqsovp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fwdnvmzz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163bmyvalsp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zdxjxfcq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wdsbmjht.html

TS:   // 同上
来源：http://www.sxryk.cn/163tsnwvrww.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kbsmrmuc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dpmjzwmy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163yrbyknnv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163lwzexdgq.html

================================================================================
来源：http://www.aibaodan.cn/163uorbthel.html

G. 面向对象
来源：http://www.sxryk.cn/163gskvosfk.html

================================================================================
来源：http://www.sxryk.cn/163ijuoxjyg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163hshwffji.html

Py:   class User: pass
来源：http://www.sxryk.cn/163oflkbvow.html

PHP:  class User {}
来源：http://www.xuanzx.com/163uqumvjbi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xdikuknf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cpnmvtfi.html

Java: class User {}
来源：http://www.aibaodan.cn/163tseutoqi.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nhfysacn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163sdkvnzqx.html

C#:   class User {}
来源：http://www.xuanzx.com/163tvczsnhc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hoqeizuh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wribumxj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xmryavxs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mspbhjgi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xxqirvmy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rawlausv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163tadlabqu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lcpcyqnt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bqafujpq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jemrvaum.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163upbpavgo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163knikszbd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pguduhfj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nymvkbbu.html

Java: private String name;
来源：http://www.sxryk.cn/163estankac.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vbznnnxd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163riffnqhw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163krlagrgg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jpflanvm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ughvyttl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qfhhmikd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mspagrcb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rnrmqamf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rjekvuzh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tgbmprjl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uwqrwhes.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fwnqdndu.html

[G05] 继承
来源：http://www.sxryk.cn/163zxawuqyy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dfcugudz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163dzscelxz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pbafkdsq.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ihpnjptj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qtvswybr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hfelfkor.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zvbkfvel.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ablcsrwu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163keqcfjmu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ikbivuhm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cfvizidf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jtfpmdpz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mbpcrxjh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163igygrhzm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mrhagvfe.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bdbkzfcs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163uknvuhww.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xliphhqz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rlcuqwfx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cxhinlve.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lcxufezr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kmmxmcpv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vwoanqqq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mlvwpakp.html

Ruby: super
来源：http://www.aibaodan.cn/163lrfuvuay.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cawrxyxa.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ywfmcawn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163irxeupnb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gykgvgwz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iqhqbqaa.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lrwjssux.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ggplsgah.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qtzmwjrp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nasuztyd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163buovxmyu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kehqtuss.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sotoijze.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ismgfqof.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hyczxbll.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lqjtuwbw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mrixpwjx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163oypqcvvg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163syovcdyr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zaggmzoo.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wamzigex.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lllrmzwh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mgurlobg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fmncaooc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pukjjoaf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nklovzyl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uedssxpu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163oelhcfhb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bydmfgwl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163impkqduf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iedyfmdh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163agejeqmx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ggllsgmr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rzbprury.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vjokddan.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ybmsiynh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163kfyyacid.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fxgyijfr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wiuyiwai.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ejrwftxs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qnwiytry.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163oiacxshs.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oysgeoxj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yldrniny.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163oggfasom.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lhkdvnxq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ttclbhjh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ixizimue.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163itmhyhvt.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ilzfrlcw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pcvvjhef.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vpxclkui.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bckougny.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163urisexho.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163malsjkhw.html

C#:   u is User
来源：http://www.sxryk.cn/163msfkrymu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163olvetyaw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lwbeekfc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mhmrfudf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qwksvhhm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zhxxtaas.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ewhthxgx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qyqevivy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163epcmgdfa.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mqmjtukz.html

[G15] 枚举
来源：http://www.sxryk.cn/163bipyjcil.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vorjdbae.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ltrjqknb.html


<!-- 参考信息 -->