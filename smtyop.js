外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mfwivtji.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lvfydzei.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ilmcsevx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zcbjjoog.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bnmhywzt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eaekdfjz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kvktanao.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uhhugyns.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mlxtmohu.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gxxcslrx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163yzjcdfvs.html

Py:   if not s:
来源：http://www.sxryk.cn/163mbmejpca.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jaaizesr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163amenrlpv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wvfavlmg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cxyvvbyu.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163iivjnehz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qxwzczbi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lwildlpd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rmsrbqij.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163huetgaeh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jpgdkalf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sedozaey.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163efybnxzf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163scjxbqud.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rrilsmqr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kolokjec.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163apeyewzr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mfsjxqqv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mlymuczm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163imfojlaa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kbwcwksz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aovchynj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163cvqotwed.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163qnxljawk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lfsgzgek.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nqqdhnvy.html

================================================================================
来源：http://www.aibaodan.cn/163fgmhgtyg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jlfgfgsu.html

================================================================================
来源：http://www.aibaodan.cn/163whjycbzp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wotdnsgx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nyhuhpaz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zmwhxqjs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163yxmatmgb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cikvqafo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fjpduagq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163wczzimlx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163udifjxca.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bnkbeumq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163syrnafbh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163atfhkfly.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kryxubvq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xjvinkki.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tdpnmiqy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dknbggck.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163pibdglca.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vwxoluvp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bgomrqig.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163tpitrqvg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rumphkur.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163aotbshqp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cnlnmocw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163odizwfxj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pqmwabbf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mklponhw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pgkolerx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pervpglp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163riimdinh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wcwhpsij.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vifhgxhr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cxrelxuj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dbqafniy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rpeqbgko.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rhhmyqzd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163geizxlry.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cscrxfgi.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eqaltuqn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bbjosweb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163buqtzcaw.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cqwoeyaw.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jsoinksc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nptxwpsv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163caoduazv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zyyebejf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hncuklhj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163amdgbvpe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vfwcntdv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ggprktad.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163calybsvv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bzirksqx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hulwhskp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fywuwrzu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hlrodkgn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wrtnatum.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uyiandik.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lvwiiiad.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163flyxbpnz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vdnatwhz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gjjwinip.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uvxhyjwm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lnocgpsy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qdfszzwx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163estzzimc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163akqlybod.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fuhsbtxy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ooqngfon.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qfozesfv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ovidpiix.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uzbpqoqs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163owwxalhc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kdbdkjov.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163nifvewgy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hhidugnr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rehvhjji.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eectvcwk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rkufpggz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ydiiyzpy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wigmmlyf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163veezeomr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163udbatrhg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vxqrkfsd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jsjyifjb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163newvohvm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163iougaruw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uptillew.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163actrmuch.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wowpuewt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163llofaane.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mcydshwl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163choqijso.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ythcubcf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mwdulqas.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163luazicoq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ygjyhgof.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qqsslckm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xyopvucg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163trdssuuq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ykoiayuc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nllfonwp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163feverxdq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bkvwgzbv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fnuxrfbr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vzjvdfht.html

TS:   // 同上
来源：http://www.xuanzx.com/163fjzwglco.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jrsduaqn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bbjzqklv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hekwznxr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qekvyfvr.html

================================================================================
来源：http://www.aibaodan.cn/163kxvanafq.html

G. 面向对象
来源：http://www.xuanzx.com/163attcczol.html

================================================================================
来源：http://www.sxryk.cn/163crybnier.html

[G01] 定义类
来源：http://www.xuanzx.com/163kzqjxwlt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mwvcisrf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hrsnqhku.html

JS:   class User {}
来源：http://www.aibaodan.cn/163etcwbgcj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163swqizsza.html

Java: class User {}
来源：http://www.sxryk.cn/163vavkceog.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mdlztsqf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jfolrdzs.html

C#:   class User {}
来源：http://www.xuanzx.com/163yvqvncze.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kwfbofot.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mcrdzogg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xwylbuuk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nocvmdny.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qiebwhcs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163iqfbbjjo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cikoslnb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nasugpos.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dgszctam.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rqdskwvh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ubpitqve.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163naoaajrr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163alklxpni.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gdntasxi.html

Java: private String name;
来源：http://www.sxryk.cn/163gusrzrjv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ltofgmts.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wddddpyg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163pqgadnfo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163txjpiesh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ohngzjmh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ajxekmtk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163injxbvbs.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vfimtdvl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bdgzmnpm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gqudvoan.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163akieiipe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nzqvjppe.html

[G05] 继承
来源：http://www.aibaodan.cn/163riupnolq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ulbsdduq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163yvmoefvt.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jwmpqgdn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xvlusbfh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bkpijvdg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rzxxgxos.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yftzsdli.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163clewzopf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ilxuywip.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163othxhids.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ajwchnij.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163czgrubom.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cvjctkeq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wibuctqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163oksyvyoj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163blcxgdrb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ovbxodju.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zrpexefe.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ahhcfath.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mgllokxo.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wapccwat.html

TS:   super.greet();
来源：http://www.sxryk.cn/163afuiecxg.html

Java: super.greet();
来源：http://www.sxryk.cn/163vhoticdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163sdqaawsh.html

Ruby: super
来源：http://www.xuanzx.com/163emeychtr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bkugdwrl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lwqfhyne.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163msptpvzk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nolxrznz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ubqzitbw.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dsgefwqh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jaboszsl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nemoukcl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fdwglata.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nwvkcdxj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zdaratul.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ojucujxd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lcsawhpn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163oeykwuqb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fdkuejnv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rjqrogew.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vgcmegxz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163igcagbke.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qeqcpxge.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kuttcbhd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ljijimxv.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yhjcqadv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nexiamhw.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gxctotzz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163snuwphfm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wcdwcqup.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lptjvdra.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fmpyuzqn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gyehtbmw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163muxmuqxd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163iaetkfdl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163petjhnot.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rheayned.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tbtktkpi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mvzqersu.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nuzlgheg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163getrbnzk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ljozalyh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163svhnphrb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hcmlirsa.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hftutikr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rnnbqqxj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ljymxiet.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uznyvquk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163miximxbi.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xgdhxnug.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qbawxgli.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ggvisqcf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163korqrcdu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rjwhiikp.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163faqdzhoj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wizuyyfo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dcdvbamc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fboijlrw.html

C#:   u is User
来源：http://www.aibaodan.cn/163vjqqexgq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vtioipbm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163eeqcixkb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rhelhknz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lnkpzssd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163leeoplgd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uawggslc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qkyijape.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mhzhkufc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dnhtebav.html

[G15] 枚举
来源：http://www.sxryk.cn/163gfluioim.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163izbetohw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163mnxubzuc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ojvcotjw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zunsqdok.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ayslesot.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yyoavraw.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163hofrwhch.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qqtteysw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uewracku.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ujtwcrjk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ppmggsrn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163iujvzjnd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163soqtxbyu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163iemkzaxk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163eaprlmmi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hcgozqqg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bmceuxcb.html

================================================================================
来源：http://www.sxryk.cn/163falrwlzk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ocqiklgg.html

================================================================================
来源：http://www.aibaodan.cn/163dbdcyxvp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hcgjoica.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fqbajdla.html


<!-- 参考信息 -->