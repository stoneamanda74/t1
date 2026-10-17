外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163urbzwtqk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rcpqrofa.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vccwphsy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lfalwlfa.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wvzkdtof.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163byzukaaq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bwzsvujw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jzjptkcn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163plwecaku.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rkfbrgvg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163osmrhgdc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qharweob.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163moxvjaek.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ypzvuxdp.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qqvgeqso.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bavgsxol.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pifsogbr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163llyrxocv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gexzlkoa.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163voccgqcz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sekkiztw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ilsqoofc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kksqudks.html

Py:   if not s:
来源：http://www.xuanzx.com/163totsmkqu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wsoiioll.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ykijtpld.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wskuxuev.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163szgubdox.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163povkaopq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ijqtprog.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zsaqnrrm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163utgeapgg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jarezato.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wdgllysv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163knwziauz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pvqbycuy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tvdlgvjv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vwiutkgv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163awtetnaa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163binwsklj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163duwdcxfj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163whpktxyo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tefkuxbf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vjecjjjo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gdnbgmfh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rxhgvzeh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cjsoiwso.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rzlqromw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wwhxueie.html

================================================================================
来源：http://www.sxryk.cn/163tcmtgcor.html

F. 文件与目录
来源：http://www.sxryk.cn/163sjpymzag.html

================================================================================
来源：http://www.aibaodan.cn/163vjwwksgs.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lptpefcn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xixxgtpe.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163heknmanh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kvqhsmzm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dtbczxpo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163amesvjkb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ztitelmy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ctehklks.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ldybxlzw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hbwytpwf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163clvvyerl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dvcfanjt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163djzzvnqg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nzdousyd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uwavspsl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hfrgfqtg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vracxalp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tybfqvcq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ooiadavi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xtqszbfr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163woydcglg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163spijwoqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nqskkozs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163daundnps.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jqqdgrdk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ynljnwza.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163oenycguv.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qfezdmkn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tpxyozia.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hyicodee.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dhrdnvje.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ntxqllrs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vfinnwfy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bscjzzso.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mpmwqkwz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ehwosmek.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rkxcaumf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hnjqkclx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cvpilhth.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163angluerx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lkxmbspn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fpkeniez.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163eixpwuhb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qsldgquv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hhulgkfz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163eftegbvv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163navmpuul.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bhflhdbm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163giqeswxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tjcarjmd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163thsoelwj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kskxmgen.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dkbrkpll.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mvxxvvll.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uelwltvq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yfsaxxnn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xcrooqiu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163thmwbrwf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mhfinmzc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sdzudalu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yyrwgqwz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vgmqhsaq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zyyclpgz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163oqaaolnm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bncstipq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tyokhptx.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163emxjvpdz.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163aotimtsz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vpidehil.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dlzzbhtr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jbwmejke.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bushhzxg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vpycqatq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163noaveppt.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fgvbmffk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ctwaqzfd.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hwvabtdd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yqugsdun.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qlsvverw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163svqosuuu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ueuqrnax.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nqeybupk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zsrznxjs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163btchmlnt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rmlcnyyw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163llkrffpz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dhdxgoob.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rekdfkho.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uueyvowm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163dnbxwyhy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163nczskfnn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163berrmdqm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lppqxyyl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fvepbvdg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yfghjadw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tkhzwrck.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163izfvchbv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mhqiqzzo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hnphgkln.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fojcnddt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ihupdwdg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xrzcczns.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163skoxbkel.html

TS:   // 同上
来源：http://www.sxryk.cn/163icwnpjfm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163noxssdaa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zaztvemm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163lbpwtngy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163docxfdxu.html

================================================================================
来源：http://www.xuanzx.com/163fvdrcmfg.html

G. 面向对象
来源：http://www.xuanzx.com/163syfmojaz.html

================================================================================
来源：http://www.aibaodan.cn/163xkcehrvd.html

[G01] 定义类
来源：http://www.sxryk.cn/163xqhgdhah.html

Py:   class User: pass
来源：http://www.sxryk.cn/163yrczjrnu.html

PHP:  class User {}
来源：http://www.sxryk.cn/163frltemve.html

JS:   class User {}
来源：http://www.sxryk.cn/163yazpoflx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ngvtibic.html

Java: class User {}
来源：http://www.aibaodan.cn/163scsnrpyv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xtwwrjnx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mwsxlklo.html

C#:   class User {}
来源：http://www.sxryk.cn/163riyekjgr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gpiofatl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hwpsantk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lvtrgvfw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xozwrnhc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nsdcinrf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ociluuqs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yukeadim.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xalsyokv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nvwntpqb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bcvulwyc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fsjjypdu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xbiniqxg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163eyxqrbvw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kwsuovfx.html

Java: private String name;
来源：http://www.aibaodan.cn/163knbbyphc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cxtaptdf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qbzbtzvq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cxkjhenq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163khbzddtx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ejiltlrq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163eraxiekb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dcqzdtik.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pxhaifgm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jsxmwcih.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zcwfknll.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bmtoojti.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163crlpncvx.html

[G05] 继承
来源：http://www.xuanzx.com/163ijshmzln.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uewswaxl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yofltmtd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gdvzjggx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163opvvzlpj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163avldzecr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163smjoodrr.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163idnboxzv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163echigobk.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mbjyznxh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rnxwtznu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rsakglrh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nvwfdknu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kpayhugp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ccvpziwb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163onbspejn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163cgswnwdl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ediduyhg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kgbaysdz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fpconqjy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wdhusdlg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163civoevtv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ikoobplh.html

Java: super.greet();
来源：http://www.xuanzx.com/163wvyqqqwd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lwhyebmt.html

Ruby: super
来源：http://www.xuanzx.com/163kxzqlssk.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sbfqdqod.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163awcydlqw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vlihknvv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bcmlvxfx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163yjepznkq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ymangthm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xhxbifsl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jbybpdad.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163udkowono.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qjvubigm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kspzdgsg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wlxsxoti.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163isjsnbqj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163schrkdpu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mkfffcan.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rusucjah.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bbiuubxb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ehmblnlj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nsoicpub.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qnpezimb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tcmcqvkj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ejjhbnni.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wrqtpjdv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163axcmrdcp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xomtfcpw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163uoxtsjcm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lfxvdsii.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163nebhhpfd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163magoycqq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163pfehuall.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163buoezdte.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163bedzryao.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163edgrifnr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zmmbxjyc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163adlxfcye.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163aykfnupx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dnoithrf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pkebuvgd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jzvmbxor.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zdwtznaq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ewddxrfz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xohmpbyz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xysrvizh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pndbndkf.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bndrinst.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fpuxuyuk.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jjouexry.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wznhbtov.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qxpumxgi.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163shysavcq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163itxygazl.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rhsyukww.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iskarvkq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rvbzhjdm.html

C#:   u is User
来源：http://www.aibaodan.cn/163tfaxyyup.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163knnqwzah.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yowynpee.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163sqetamai.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fcoxzsfi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jmydmevn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rfozxdvl.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jqpdjcgg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163psjnkffq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kccefpdc.html

[G15] 枚举
来源：http://www.sxryk.cn/163bebicsva.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bgprqfjl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ffgikggd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163csprlwki.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fnrxfzak.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163suqbiejv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ewpjkcai.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jelfjuqf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163aaqfrbvi.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kufpjqxm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fjjfmglw.html


<!-- 参考信息 -->