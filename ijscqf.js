外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iyiqdvak.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tejizuvy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163objptlwo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lkguilmc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163tqoibsup.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hjiyiytk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163sjqchccb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yenzletm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163onlxgtag.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tdlmyudx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vzgjtsgk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163adhyfibv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jkcfnsep.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zlneeyce.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tbmndoyq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wxfkbjqv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xlzaxyip.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mvdbkznt.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xwkjpsnz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gsgmbbke.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163snhrsbxt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163aoxhjcxu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kbxpkcmd.html

Py:   if not s:
来源：http://www.sxryk.cn/163qtzisfmk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bbwxxtfr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163alkdtkse.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163exhgqwfc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163fywfswnk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163murqfxgl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wjjdqwxp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eslyhfcw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nkmfbkcy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zhtxgbrn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fwlvlluu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gmqrshex.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yobduvvc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jqtcsaef.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163evuougtu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163miszjzph.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163imlriauy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ujvnbihf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xzwtylfy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yjuotzlh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iuximqvy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163liokwuzf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163umkejabu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163akadbasj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163phjovpeu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bgoluqfk.html

================================================================================
来源：http://www.aibaodan.cn/163nyvrbvoz.html

F. 文件与目录
来源：http://www.xuanzx.com/163djqcaeuq.html

================================================================================
来源：http://www.sxryk.cn/163oksaisna.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tqnzrebm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hptbjlea.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kfxzcebu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hnzupkpl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163gudqkulo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xlznyyxg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dgbwrmdk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bbqrrbxs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gtluvxge.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163slxrxgia.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zoblwslx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163scmubpvw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nfhinrvf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cezwjirq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163liqtpelh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jbnjrxej.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163umqdwung.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dbkvzjyw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cutoauty.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nxutrmhp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uudgbjzn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tftrnhqq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163anwzorsh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rkrrxexj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dmhfebux.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163bcqbsesy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qrgjbwss.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vkrostug.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163psryjezk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bwftvnbs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ivtbjqkw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hddtrkoi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vlpeyume.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jhlgyifz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tsmispoo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fkhozbas.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yseibkrf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jslrabwe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vrgfdrll.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ktwjjleu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mvfmtnnl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qpdjgfws.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mipelwvj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tgpalivi.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dalunuxp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pzkepsnq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zpxbbrmi.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vbxhjtvt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ceshoqss.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163prjvvkst.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rdmpujrs.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yjvvboyd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163viyycwsv.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ikyxpepb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163cttzoaeg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163tasfntys.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163splitawa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hyixrmsb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tuojdijl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yapgjvfo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hmuvwfdk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163cmumexkx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163drofgtwn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pcwhrrjd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wezwcmuw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wwjyucfw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lmzwqrfw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bpymlryy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zykyljar.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163itdusrjk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ozzhwrik.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qopvfxqj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163huvqrlvz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ziqnscae.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dgarywlm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qnovowkn.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bkflbden.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tgqdtwns.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fenokzte.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tboudxjv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163geucnlhl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163obtxxjrz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hqtkysvf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163krrgnonu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bpugwjgj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163thrhxusj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163brxsqwkv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nznsnyce.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vnjtpruk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163acjpwjou.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jcdsycsz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fhgxnjai.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163phzoioej.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pyhzfgyz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mvezwilh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oridadrv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163izfyiifq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yeenwjuj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xgligxjz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mjrpafqr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163pindfwlj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vxmztsww.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163spihxtqq.html

TS:   // 同上
来源：http://www.xuanzx.com/163vaupxunm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163dpbsgaff.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fjuiqzmq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kiaacvix.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uvxuiqjv.html

================================================================================
来源：http://www.aibaodan.cn/163tjkuklii.html

G. 面向对象
来源：http://www.xuanzx.com/163fwjemhlu.html

================================================================================
来源：http://www.xuanzx.com/163ijutmsix.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kfxrizit.html

Py:   class User: pass
来源：http://www.sxryk.cn/163eqxknchj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ymrceltr.html

JS:   class User {}
来源：http://www.sxryk.cn/163zwebofqc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bbxzdxny.html

Java: class User {}
来源：http://www.xuanzx.com/163ffljusst.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163axlhtdya.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pfdbicuq.html

C#:   class User {}
来源：http://www.sxryk.cn/163lanzqgez.html

[G02] 构造函数
来源：http://www.xuanzx.com/163bvmvxbyf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ppxlgptn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163orqxzbpn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jrzbvnzn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ruqqwtvq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163firhovxf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zpwiihwo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163snyefcnw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jtlvnmpq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163awonmuyj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wfjjdmqc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tdutmjui.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163uepynqyb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163sosdktlb.html

Java: private String name;
来源：http://www.sxryk.cn/163pbektxqe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jdzqmbgq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nrslfaom.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ativdgsa.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zgevemii.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rhysugxb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163szmawhfj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xcgcfrvx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dhhprfiz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ovzlzezi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rgofgrym.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sjjrmrym.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nohcnhwn.html

[G05] 继承
来源：http://www.sxryk.cn/163psjdepev.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wgyhjhwy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mkeacpaj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vrawbmna.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rgcemprb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uhcyvirm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163apuqaqsh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163axylenzf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qpsugszh.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ouqaozvg.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pznplihy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nvjgktwu.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jgolzmrs.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mqrpiexe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wlfrkrfx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kwabhjri.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163laekqbxt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dueiergu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pzckezat.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iwcuevlf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163sjxzdxqp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163comvdqso.html

TS:   super.greet();
来源：http://www.xuanzx.com/163abmwmzyj.html

Java: super.greet();
来源：http://www.sxryk.cn/163ftcqoqrf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zkyvvzcg.html

Ruby: super
来源：http://www.sxryk.cn/163djkhlgqb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163knlxzyva.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kgfppcag.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163binsduuh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jorysiwt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163gqucvqoq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ylutzdry.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163uiamgern.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mumpznkp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163tqtaixqi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ginhzxaz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vjhtjueg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163afpwzfkn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jlsvglhv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163iqbvvtco.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163undyycit.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163prayxvac.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163nxvxrbfm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dccsitcp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163inhubyrh.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pypzdpns.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163xtqwuiqp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nmcjcuuw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fuvghxdn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vimkcisr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bnmruvrq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qtqmapfh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163agykwjtb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xwzaemaz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163elubriyb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mwljotig.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yxmxiyme.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lpakqjxp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163gtvnupha.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vbabvqol.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gfxcxmsx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bhrdnsyq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163abgnoldj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rnspvixn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ncmynifz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fftxpilx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xnixxkob.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hvtxbaop.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ucwadvnx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mjcujjni.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zrsugvco.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163aralxmzv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hidpfche.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lbswstbf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ohonlkeb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xujtooln.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tyibozde.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bjjhierc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rayqilat.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163laqedypf.html

C#:   u is User
来源：http://www.xuanzx.com/163owixjfdi.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zbtllrxa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ghykawtk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yggqrcpi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163onfjfeqi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zeplpzcc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rlnnhunh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163eampyhup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hudyfrsg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163atnkjjwy.html

[G15] 枚举
来源：http://www.xuanzx.com/163uxjhpdyl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zddymndo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gvjxerpf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jacfuxmk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163smymynls.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163udkdrqez.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vfvduuvc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ptcsetfj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hrklmtvq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hsbzucxv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yebaorri.html


<!-- 参考信息 -->