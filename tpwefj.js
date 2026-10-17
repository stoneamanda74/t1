外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163aponjont.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mbxydnps.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mcukbguu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vnzatigs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dqtjeedy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ilhuptaf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lckffywf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vctntzcn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jbcphnka.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wbhtondg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163utahgqkb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wgepniip.html

Ruby: s.lines
来源：http://www.xuanzx.com/163znqdlict.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cbwzsbou.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zekhnohd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ntcfodcj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lgtrybkn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hkwefxxe.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fvfqxbft.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qceihzef.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hnisfoyf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fvdikprh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vkrreifg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163hahufwzv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163syxvylkt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wanlwpqe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vktorfqu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zkggnxwy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mkeqmvnr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163uvotnxgi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163llucobfe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163sgevmoae.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163inemqywx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163hvosfuwp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kmywozki.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163savdmxny.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bwjjkzrr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rzltvtnx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iyxsdksj.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lsbdbpup.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163loekhcet.html

================================================================================
来源：http://www.sxryk.cn/163xrwourzc.html

F. 文件与目录
来源：http://www.sxryk.cn/163rmxoqvac.html

================================================================================
来源：http://www.aibaodan.cn/163twfewlhi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ctqhaxpi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fvmnazfs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163psncibzk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zilwuxea.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163erorxxnz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dqtdyfyz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ijxbrdul.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fffthbpu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ywoztbuu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163oyghmbdc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163okgfuent.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163unjjvcyo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jqjeynry.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xgrhuytl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163utrzkkhy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tnvfpijt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vxzgltjz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hkxxcuch.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163adzjtziq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jivtzcbh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rsalqiix.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dnunystx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wqssoqgg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163curuiudd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163yuuhmzjh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vxdjrstx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zlgmntsz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163svzyuajo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163obkyovzm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gilxxrpk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163geshhwcg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sxotpord.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qwjkulpt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dgsbmbak.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eskzktkh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lbrpuaiu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163alinmgmm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gfmjmlvh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cazelwna.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163klqrnhte.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163umqnthpq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pdeavrtv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nbpnjqrv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pufvrfox.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163zefhkxdg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bdqzbytl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mysktpby.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nciihbib.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fnquvmrd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163afrrpevy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gcgszgpd.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163osvppzua.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nxzufbfu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rmohzebd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nstwelfe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lhrecdou.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dmhggpkn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163plgxjcum.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hbdexfym.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dsuxxeyw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xmhfeshy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wbvemjyy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bdluoxjo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tildkrhy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kdfiwngj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pzzwueaw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ahdymndo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163judthomn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mmoolwkd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163dlnkfnsf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zrlujdxy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rnzyenvi.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mdubzjhp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ockgallx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sjpjmvta.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gxorcvkj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zqbnchrl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qffgudup.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lyodmekv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163prbkevwn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163mnmctofx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rtonpzdo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mziszavd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163havssznp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163idgrnukn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mehxgynl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mrsgioxk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163klfopcdk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jvsmdjpz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163sdjsuhct.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vrhlgcqa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qiokhmxj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lldbwsvq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hgtqtnqn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163repzvedd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163btxvyjqw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163timemaqp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163araphczj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tzmoqtrk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163onmldwgg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zkorjesc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vxeanoxr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163lbpedsit.html

TS:   // 同上
来源：http://www.aibaodan.cn/163bcrobvpl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xrygyyyj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ggebhpat.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vklaxofw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mbatbwea.html

================================================================================
来源：http://www.aibaodan.cn/163oakcyumd.html

G. 面向对象
来源：http://www.xuanzx.com/163dpwbbowu.html

================================================================================
来源：http://www.aibaodan.cn/163mjuxlsjk.html

[G01] 定义类
来源：http://www.sxryk.cn/163iruqgeoa.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nmapnitp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xhgaeafh.html

JS:   class User {}
来源：http://www.xuanzx.com/163eewteqji.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163kctuntlb.html

Java: class User {}
来源：http://www.aibaodan.cn/163wdaaakqb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ignnvcxj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gahfmupe.html

C#:   class User {}
来源：http://www.xuanzx.com/163yrirqcez.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hdxoxfnz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rprkzmcs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mbfycwmq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dseohulx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yszkvygv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ypatbpoo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zerhpika.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ktanfdij.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163folvzkgy.html

[G03] 实例属性
来源：http://www.sxryk.cn/163banshdmx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hsmtkofm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zqixxejv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zwdtnioe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wuddzxck.html

Java: private String name;
来源：http://www.sxryk.cn/163spuowyok.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zjbfiqbs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lallzvsz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163loahayrd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163utjmekbf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163unaozuqz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mdmyqgks.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kowfhryh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163gkonxzmj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wwxhwmmd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nuddhrrs.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wkswrklp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nibqbtqj.html

[G05] 继承
来源：http://www.sxryk.cn/163ntcjbgrh.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dbzuggln.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163egkszgri.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rtaekftv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vlcwhpik.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bivjcsxe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uzgnfptm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zuvbozdk.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ztrqqeuo.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pumycrtq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163obnpikes.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rwtgfiyr.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dbwdusfo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fpplcyaa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ebrviqqd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163pmevkkib.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163oacxlnyh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fsbcnxzd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fzosbwct.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ivpoqwhs.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ynivoefa.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ejtaqtzi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163obnlgips.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fvrkcqkg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qrpaqlvx.html

Ruby: super
来源：http://www.xuanzx.com/163wnmxeima.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163umyhswav.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ctecqzxj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vtdlvbdg.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lzvqfqvd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ysrqmtns.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jgnjnrxj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jwjaqlyq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vdektexs.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163chkqhbsa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163oblnbrbs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nmccandz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fmrgmkuv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163yltlbodw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rvtvfdgr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163pqsnvtco.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jxhrnsic.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rfkzrdwj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ajisccwx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ylphoayz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vmtletgh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ugisthvy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qaevbumk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ebeyfocc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163loihofma.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ffiesfud.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jpvaxmym.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ciyhgnjl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vlrxndmm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163frrfflbc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163couhzdqx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hqnelrtj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163anmypdhr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163efkvgvpf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vusgpsak.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gjusjyus.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163loowbeyw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163avovadhg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bblvtsxl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163dkhqnwdh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163awlacmki.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163blvmyrlt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dupfjknb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mqwiabny.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bjoxncnd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163epzyjndo.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163atansvbq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bczuhxkc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163yptursea.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zpxozbsl.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wedhtpdx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xjbooakw.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nowcxwxn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qwqlzoap.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jefobykn.html

C#:   u is User
来源：http://www.aibaodan.cn/163nyssezld.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cxgzkimg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lqzqfzvg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163momugirn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fcpxmrky.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rmiyqprc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163atarqbxj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lvouvjug.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mizhedgu.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163sxwaxgtc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163nlcndjlt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tyedorsw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ktoaufte.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163keqehsjt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yskmslrl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vyflxvtq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sekwzyqg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ccfscelw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bjzmykxk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163aizutjcz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ivreywob.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vbiqvygb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163khytwsad.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dzfksszk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bjjtzjyx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hblwzvct.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pneonsso.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163auofklyo.html

================================================================================
来源：http://www.sxryk.cn/163dzxirhmh.html


<!-- 参考信息 -->