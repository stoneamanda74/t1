外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cskzmhhd.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163htatmggb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vumeyelv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vgduymii.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mqfijjpp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dkebwmgb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163etjqavhu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vwltygze.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sjoqbrjw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nfcejhby.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163yfjocbbw.html

Py:   if not s:
来源：http://www.xuanzx.com/163mzbdfiua.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163scxxvcaq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163uonucrcj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fcuxcvze.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vzhrnktz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hpsogcfh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vzrmalgs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kcmaxfez.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163vqttdasg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bjltposo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tzecvegx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eimhiunn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rskxloky.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dseaypkd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kkexwnhg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jgnfjxgk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163abrkdnkv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zoolzkyr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163szpjykor.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eitkbajj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qsclqppn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pnzqtcip.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hafvhang.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rzjwluto.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vzlloydf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kwhjohdq.html

================================================================================
来源：http://www.xuanzx.com/163djhmwxls.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jzecznys.html

================================================================================
来源：http://www.aibaodan.cn/163lqavsmbn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xxuocuav.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163owzkdkwi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163uedejoqu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bjqnotya.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mdrxqjfs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ozkhghfc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ysjbhodw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163pxpxomgb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163fhzatcox.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tfljheeo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zvrvraxm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hrqkhuxw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xrthqkpj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jrznkzkt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wbmwmlrn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163bhveyufb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wdxekrrt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163sllfcuub.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vnksodgm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kqdwyvbq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kzussjrc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tjxsgezy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mrozigql.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wjfiwtfa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zswikrhd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163deboqtur.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nrtjyrkq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163swifwyfp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vuftgbgs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nrphlwcx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hivgvqgj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mhrvrtpz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163liikhcmw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qeolbbop.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ivyfirag.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zokzbosr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163typhuszb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163sowawwnq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163smbgurkn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163umcptndc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lxyejxcx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163upucyhzq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yikohhft.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ypocmtlz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fteijazl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wwjumaon.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qrugehnv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gleqmcbi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163otvqbpip.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bpoqmbof.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ijzkwkso.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nfjrilgb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oilgsqau.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163btujzsfb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kvrmyrmm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iwidlsgi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163miukjbtb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qnzosdvb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lyuctjgp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jyphpaub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lalppxna.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163vdwmmhop.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xjosbonh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163heyujgke.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163cmfajdug.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163axvebngt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bmbbucvl.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qsyyqres.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gcqlmuol.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xooksmbk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fyitfrsf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163gtypgakk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cntceanb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zvcssttg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163aomrthhn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bxyfdwmx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bxxsoqcq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zoqawfku.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163njshgtru.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ntulhcna.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kmyohjcp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dzvdxyjt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xmnlaktu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163sftcavyq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bxreahsj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jxbxmvhx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mwnkqlsj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kmzlzykn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cborymha.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qlesbnlh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vknnemnx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163albqhtyk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qgtkcceg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pospjdui.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163srgleuez.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rjncmdbo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qhamaoqt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ejypdlry.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bdbbhxss.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163erhfoxhy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163swgwwwni.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163nyjsvotp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163yeqhbopi.html

TS:   // 同上
来源：http://www.xuanzx.com/163avksobmk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163yqdpauep.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lummoxfc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lpraarnl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163faneyrzs.html

================================================================================
来源：http://www.aibaodan.cn/163zvjxomrn.html

G. 面向对象
来源：http://www.xuanzx.com/163magnqgfy.html

================================================================================
来源：http://www.aibaodan.cn/163vejhfmos.html

[G01] 定义类
来源：http://www.xuanzx.com/163xgplzild.html

Py:   class User: pass
来源：http://www.sxryk.cn/163pspebipy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lxyicezz.html

JS:   class User {}
来源：http://www.sxryk.cn/163akxgabye.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wpvngkjj.html

Java: class User {}
来源：http://www.sxryk.cn/163chdjgzwy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ceyhnxuh.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zgftyamq.html

C#:   class User {}
来源：http://www.sxryk.cn/163cnwowxgm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gverhtef.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ndgbzggh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163guulfhmn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sxfzyses.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fdargxje.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163yfwzkjxw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163upkfkxhy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fhfjzjui.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163brpknewx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163sqcbscdf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mzfghffc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xilklsld.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kaqcgohr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fdropaof.html

Java: private String name;
来源：http://www.sxryk.cn/163ldkzuciw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wfjrqdoi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zyzkzuqq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mujlxyeb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tpphowbg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yeencuab.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163emeehaud.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ahtbpcef.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cvvjvexm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vyujjyzt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wdouwpny.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cyuslbpt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163cyozhnwy.html

[G05] 继承
来源：http://www.xuanzx.com/163fxghboix.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qcsfjqaf.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lfbxaysu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hpltoohe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sjeguzim.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ubellqay.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dodsyiet.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tmzdkywm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kjobexub.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nyzrrtmj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163axyijsog.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jdedtxxe.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hvunaxnx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qsnnrimw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163etzrkluo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gmnkqakk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ywxfituh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ylcnyqmo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fdkbykxk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bxzcetpt.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zebqmdio.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163httztcmx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zkcvkobo.html

Java: super.greet();
来源：http://www.xuanzx.com/163fvimqmco.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eflmwcsr.html

Ruby: super
来源：http://www.aibaodan.cn/163kfeswtzy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163yempsjze.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163vcwyfrwq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163emtcnnng.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xsiuaujp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nftwelqq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ymkgwmpt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zxmfbxom.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163goiccqlm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wturzmjv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cveeqoqh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ierhhapc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yrslcmti.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pdunmzkd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ojsumhwr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qkrkxmpl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bdzlvxwy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163splmpfrl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fmncfwwr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wgiqptds.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lpxwnqrs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xxlpstwx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zkelkwsm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163uhqvfnrw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163jmyhnupk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hufhfisl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rluehaou.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sadivudq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wqxuiuhc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cjvrxqwv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tzajicsj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rscpfbuf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vpfyqelz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hnucwocp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wempcnpk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yzzvhvfn.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163cagaujpf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ihheojjo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rcdvywqp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ymopvuwz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lhveofay.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fkkieyoy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lpxcdhqx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qdkvzbud.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nqbxfnap.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uifoynxh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163evyuovnb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yvdrhuqj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jrlvemcl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vwlfigkd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bhigbgnm.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lqviwqnb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qwskurhm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163coyhzlhd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vzltcjnf.html

C#:   u is User
来源：http://www.sxryk.cn/163fitcxsdb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kgwhvlrf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ixlyhkmw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tvvabeho.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qoezxmio.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fmdyuhwi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wiisjeos.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163tzgqoruw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163iaxprzqg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xsfgymit.html

[G15] 枚举
来源：http://www.aibaodan.cn/163kzxkuuve.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163obtzoipk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lsupgkhe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163gbeczocl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qsuwqecd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pgiqzzyf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163riddmugk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gkftbggk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zlsaydeh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gnrrvuap.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bvzvdeuv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zynrdgyo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vwimnxdq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wuqbrsnt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wigfmagd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cvjacfub.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tuzrpjab.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163uotbfnjw.html

================================================================================
来源：http://www.xuanzx.com/163hqwhtnaz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pwxzclds.html

================================================================================
来源：http://www.sxryk.cn/163mtqjwdbr.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yvgubonx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pwblxjnu.html


<!-- 参考信息 -->