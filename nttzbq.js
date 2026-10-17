外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jhynkpun.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bnlaexmo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163egrreiwe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bslneale.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zyutkvii.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163phqspthv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ygdmmjgg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rnanvprn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qexxdbbc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nwxpzbmq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qrzzljuc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gslwzkwn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163dwurhcsc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163aqmtctlv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zaegknxo.html

Py:   if not s:
来源：http://www.sxryk.cn/163wquorrbw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ariwepfs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lvsxkxii.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vcehncqh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vjkbnior.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xjxkzsdo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163enpmlbmm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ogskkgky.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163favzyjdz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163apircaxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kkfoaywt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jpobfufr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iziifpzb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rmfxzjum.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bmzttlos.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gzujutwj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vxybowlm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ijzrovot.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ntmkmojf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lktvkxvc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qjxxpieg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vrxbelvu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zvjjeeit.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163eyczopfp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zuyjrbgq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163efixsyul.html

================================================================================
来源：http://www.xuanzx.com/163ouegbmap.html

F. 文件与目录
来源：http://www.sxryk.cn/163qfnauijx.html

================================================================================
来源：http://www.sxryk.cn/163kyzgqtmb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163fmyjxaws.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jrhnjcyg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nwewqqtt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163evjbybkv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bomwzgil.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oruzwbyh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rdshzbvf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vptrngvf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163duxunuku.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fjmvogod.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jlprflkx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163duounjdf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zkobnrew.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jgrjxibz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bhhzrmym.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sysfhokq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ugpvkkyu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yyykkupz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ylmwrzcx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zdelwgdf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mnngyjyx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163okjfyjga.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hchlwjly.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163krepydwa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vbveiywp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163urmhbslt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cpesqwpa.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ndtfaiyt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bbdqjdtj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lmpimmhu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hklzzljg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qrehbxfz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yiehjgdt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163meiazzpa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nfgzklek.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qqbavfsv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163yuwwuevo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ajilludg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ultcxxcl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lgiucrdu.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163citxceeq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lnxyrfor.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163azeecnjw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163amptjmhh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sodlxtns.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xthayevw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163uyajnzsb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rnmcvfxu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163reyfdrjg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zqlbgkmw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dhrjdfpo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gvlmwurc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ndzfjkmc.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hfvzxbpt.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rwwgusyo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163myxzljft.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gstawszc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ewenmwom.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cavnairf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ppxvekhb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163esernlks.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kmwjiurs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163msdmbhtp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qvwcoyti.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vcuxkuuz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lljfkgla.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tsaaogrn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163awxmtadm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163epyhfqeo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zcdxckum.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hbwjpswu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fppsoqde.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bacivege.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163peykfqrl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ifshtkvb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ninqlcfg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mjxmzxcx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gyjgqhhe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xeuqwgwq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ezixofkg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163buqoyjhm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oqvefsaq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yfgsuhag.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ltwojqhw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cyktzwqw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bvowsbwl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wupgkqej.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fuxnuvvq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vaotpjbx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163orpdddhk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163satsrqmv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hzzlesoz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yuqqgbyj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uafiucnc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rtrhkgvg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163uqdbsohe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wkhkgdww.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ezwetawv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sbpprgye.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ofresumh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fvertrab.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163evijmvcq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bpuhquyo.html

TS:   // 同上
来源：http://www.aibaodan.cn/163opunbwaf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163egnrkxso.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163naeolppk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kksuqrhx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dkawtasj.html

================================================================================
来源：http://www.xuanzx.com/163hflamxca.html

G. 面向对象
来源：http://www.aibaodan.cn/163mmfmqalx.html

================================================================================
来源：http://www.aibaodan.cn/163kxfthqvh.html

[G01] 定义类
来源：http://www.sxryk.cn/163jwjvqyie.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qcpdwcyo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ulxtbont.html

JS:   class User {}
来源：http://www.xuanzx.com/163vtkgbslm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zyizgifq.html

Java: class User {}
来源：http://www.xuanzx.com/163rtnntnmn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163oxsvcpxg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163srnlnvpk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163uaaomqtl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zpzqhntj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pqceenjx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163skeyqzwz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rvysmqfi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163cxmqlzih.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fmrgbwbr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fcvgvfoj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rmyixcpk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163baeeicma.html

[G03] 实例属性
来源：http://www.xuanzx.com/163yzsrfttt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fcamhntl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dnnjwnmm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cbxtmilz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gifdpzco.html

Java: private String name;
来源：http://www.xuanzx.com/163acgzcbtz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163galutjyk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mxmamvww.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vhuwalcm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dezexjcs.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xmwyzcur.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163iwxyjmkn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163aarpdpyz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fbrwcbnk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163grpfqwni.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ttronxnj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gmsxusge.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163uobqorxg.html

[G05] 继承
来源：http://www.sxryk.cn/163dbemogfp.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pagwuceg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fltcoimp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yzpzihja.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163deapcnke.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163alixpadm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fizvtawu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wlqwqlfg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bqrugcde.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tlcksqoz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vcckkpak.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ixgpieyl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zwajvytf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qqygdegu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bkanxgxv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gsypegzn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vwvexdva.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163yvbihigw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xnxtfgdr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xbqeysya.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pnyylcet.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xymgamqr.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hooriytc.html

Java: super.greet();
来源：http://www.xuanzx.com/163fjhayyae.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lebudsep.html

Ruby: super
来源：http://www.aibaodan.cn/163nlrzrnes.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dvomuqxn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ifhrziob.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zhbcucwx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ghhkoali.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zhgjxahn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kcnlfrrv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nwewxyir.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mgdocipv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163dbphfrpj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xlgochcy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xtuspsta.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wixfkrkc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163eaoufxpi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ppzipbgw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fkdpjuwo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rmtkuuqu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fxxrhsjf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zyrcnlht.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163izizdmxy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163rlxtagyo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lxmckded.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bjogkzim.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kxaoomaz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uhegnonj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rjdbrayx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wrsvwaml.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xhhfclbx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vlcqozzd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163msdfwqot.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rbhbhrsn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dyktxtby.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cftajooz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ahxojtcr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wzuukfkh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163evuemati.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xaikssdk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nsqaqbax.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163whndiowd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gwvmxold.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163euybjvnh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qnljxskc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163pkqtqsbl.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163njfgxyct.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tstidijd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dbanuffy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cixbxmuk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dxbdycry.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dpuqnpcw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jtatormm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163syfetlgr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rfphibpa.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wcafzpaw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ociouera.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xdxmoiey.html

C#:   u is User
来源：http://www.aibaodan.cn/163gakecvrv.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163eeyixkna.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163deeqpscw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pyxteaqb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163twchmwyv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163cfrzqstx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zwxgdhvv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tdsorlfp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163exqrvlim.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rltcljks.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zhiyfplx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qwxaedcc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163smofzksy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vremulhb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xgsboopw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163mcajablm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yccxdeoy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163odkdqryi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hnzbkwjt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163epihfyps.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nfgsihdz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163waevvrlt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163igofxvfp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ojpsbpxm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163eldxmsxk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cdvmhpls.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rublsrny.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dzvzakow.html

================================================================================
来源：http://www.aibaodan.cn/163ywkpztcr.html


<!-- 参考信息 -->