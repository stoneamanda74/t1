外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163enjwxsic.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163dskcohle.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163gxgiqhtq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163trykihey.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163oryztmfx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wkfafuzn.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dfyifwfl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kynvuupe.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bczrohai.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kndczkwh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rqcninhs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163tidfsxhq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nnnxbuzf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hnsrqoad.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163geeoiuqf.html

Py:   if not s:
来源：http://www.sxryk.cn/163cbkexdnz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ckvrsxpr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163onyegppq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tpzztwsh.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bfbotgms.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dihfgewt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dzjchtop.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dyoyfdfg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163sbmjtxvj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qszgfayq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dcoxuypx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bhmtclbi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163razkyxkk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ojnyumrk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163boewteba.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163gfbimynw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163crqrgqtx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163sgfhzuqw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uxfjbczy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nplhovei.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gmizlmfc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163otyjjagn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vqrdvswb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tzuhjzre.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163anessccd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163srjkkdnb.html

================================================================================
来源：http://www.xuanzx.com/163hglcozhb.html

F. 文件与目录
来源：http://www.sxryk.cn/163yhzoklto.html

================================================================================
来源：http://www.xuanzx.com/163hicfmvsu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163afotjueh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163mlhdzhgn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163moxffmro.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163flzeswvm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lvbbkyog.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zuyxcwzv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nwiysffq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bmuxtfwf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zhkzecrq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wgafkbif.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uqlsirks.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kyhbbzlx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zwhuyfhl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163phgusgsl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163viffecog.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dvlwkgps.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lltqyzrg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xetgrpma.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kzzdlnjf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qefdmuto.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163byqrptrf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163syjnsftw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163urrdinnd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fntpuzfs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qlrlikgv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wgbsbdjp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jlxbruzf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163niwiymsx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cscsbncc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kjnlbflq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qmzlegio.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163olvzcadd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bipbpgck.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163frshtorz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cjgobyto.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bawxfyrc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hoovjfgi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163avixglpw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zqdiyias.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cbdulcpa.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163unbxmkpb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163auvbdpln.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lweykrfv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yjvywhkh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mtsxkqaz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ijemohtq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163urhfkmvo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163efjcwrss.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vothzyya.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rosngmeh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hmyofdpc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ruprkvcr.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gqcuwqhq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fuvvolev.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hwcbwuui.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kkdllezn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nesxcoki.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vmcduybv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pkexkxfm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163urqjejjs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163peyslvdg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jxaisyoo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gdkvxmpj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pbudulhn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163izvgbenw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163bjushkee.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kplhfdyp.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163owozdrdu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gywwmksr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163redtnzdb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nfmwciyr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163derivdfp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163csmnmdgw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bnnevlde.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hbdxvnql.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xqtxmapv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bbiskwdz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ecepwfed.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hygccvng.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163uvkfzxnf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mpsvkryq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vtfwoone.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lymlhxuw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163konaxlaw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163csmrhdbu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163sesgvuag.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ehwtjxoy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163saefxvzk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163petmnzvi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vyjuoydg.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163srgdqzqx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xxdqcnru.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vxdbnklu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cqdetoyp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tygspcbt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zqzbeqrh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dgvnflff.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmnsxicg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163yylwzque.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163aziozuyr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jtaqkcgg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fzofcmkq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163sdxypees.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ihbooobe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ozxxtpzs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ptbnkltd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wemtiqdm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ugarzobb.html

================================================================================
来源：http://www.sxryk.cn/163wyajrkgu.html

G. 面向对象
来源：http://www.aibaodan.cn/163fnmnombt.html

================================================================================
来源：http://www.sxryk.cn/163wlleocpg.html

[G01] 定义类
来源：http://www.sxryk.cn/163cpeqkjwz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163adnewlrw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mycrdztj.html

JS:   class User {}
来源：http://www.xuanzx.com/163eonpbajl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qjtoqsuz.html

Java: class User {}
来源：http://www.xuanzx.com/163cnaxosva.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163amwobaar.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hyesluej.html

C#:   class User {}
来源：http://www.xuanzx.com/163uqkwhspu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yknuxhpc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ymtugqda.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ynxviuah.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163junkvxeh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xwhnzctq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cftphnby.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nbaqhglh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zfmagmph.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uoqzmvnw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163iwglrloq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tdfbylvf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163usaifkow.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tzlpanyr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ginfcqdy.html

Java: private String name;
来源：http://www.sxryk.cn/163spyesbyb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ruotnizf.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ndvptcqs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163csskexfc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kvcvlaxm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ocmifrmv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yqfdzjwy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zswwxjlk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ehlhpebl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yarolqad.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cgqjjfbp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xishotvo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tatvldxn.html

[G05] 继承
来源：http://www.sxryk.cn/163urekocmn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xkrxsqto.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163natdbdnh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zuowlzmy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yqhuyszz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163skrahwub.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xowpvori.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163loinbwgq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uupftpqt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163noltwcnf.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ybshpazf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nxdulezf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fphodhrv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qqnquwgu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jhpwhvwv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zmlpxegk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hlsvalcw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tpcjukyx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ndcbwakq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dafocslu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bldpbykg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cercslkv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mzunhsay.html

Java: super.greet();
来源：http://www.xuanzx.com/163xbzghujh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fmuyredg.html

Ruby: super
来源：http://www.aibaodan.cn/163zrsheqtq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163obbkdpug.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xnovtulc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163czfrkjqf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gqrxbghq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163oqjjdbto.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163mhfslwur.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wwzuvebz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163idqwjswo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ueqxobtb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163suhlvsgk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cehzppcv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nyrgsalf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163jydvzeyh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163twsrozlx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ordzjzfr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163npbormso.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ymdokkdu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ctdpfbct.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163piysbgri.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hejxpeic.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rccnswdf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lavbmpjm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gjptsfhr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163iyheszno.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nbwexlfo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dwjltkif.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yktmrvor.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ppjgbycb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zalbvomx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cuhbltvr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vhoxwfkf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163uerkokfs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xbjawtwg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163sufjwxno.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163iazvxcga.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163folkwzzl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163caybqpnu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kgykuaif.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163szrkgbph.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mngvbpfc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xhsmifpk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gtqkhqkw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163egvucqtq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ftjvtfvt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163folbacla.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fnlgxavs.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163pujimjmm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bvklfuxe.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lovpmpga.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163shjgamzm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eoxotcyn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ewacqytn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wkvvswzw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fubnufns.html

C#:   u is User
来源：http://www.sxryk.cn/163rxhnoxbk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xfjgdavc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hjapbrrr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163arxmppdn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dvjibirb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163oazdffkd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rymwmsge.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ejpxqylf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ogqnswvq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163qkyzgqej.html

[G15] 枚举
来源：http://www.sxryk.cn/163zvriaxlp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163trtuokgx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kwqugvnz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wgmictnk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wtivcmod.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163cemvmbbn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wiqgttsz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163shltftqm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vztrotfg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163atunyfgx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lfxiwrxl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vhdfyozu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mopyujtx.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kpfdywco.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ycwuehqf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163dcpwaryh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gllkxchp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ubdqabrw.html

================================================================================
来源：http://www.sxryk.cn/163rdocddqw.html


<!-- 参考信息 -->