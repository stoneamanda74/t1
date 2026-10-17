外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hhusqvri.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bmmznzez.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tigbpchk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fiuawvhv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sjcavhqg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zfyvsiaz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163duuvveyi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163demckqsn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163uzlcjgkq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vqyhljng.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vjzrkgqv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163owbypvby.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ozdtsese.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163btgiwmus.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xdimygym.html

Py:   if not s:
来源：http://www.xuanzx.com/163kgnwxfvt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163boyxemet.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pnxobjav.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vvoscruz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nogqcgnp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163eawlbjro.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bthwyfxv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hjcmqrsc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zixqtgwa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vzacxswv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163curmtloy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yzkdigux.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nfeokayf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mxjxdzzz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kbdmrwvq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rhdditrz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vpxhqcku.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163govbsepd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wiuhbnmj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kamkqlvx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tfhcxeyx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163osbpsjsi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tfwlgnxl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jvpkupby.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gpusuqot.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xbtpubhu.html

================================================================================
来源：http://www.sxryk.cn/163kdslqbyl.html

F. 文件与目录
来源：http://www.sxryk.cn/163ykfqhprd.html

================================================================================
来源：http://www.sxryk.cn/163sbcedhgq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163boilyrnk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163eimqtnqd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ledfmors.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163zqwmhxcc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oqgfbnjo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jccfsobo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fstadsrc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163skwskshw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gsgbtefv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163grzmxrvr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lodtdtkz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163nzizckcl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wrehitia.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hwvffphn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163unejbycm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163aacwdfoh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fzqlbqdo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ihiyxqhb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bwmgoatu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163pofacind.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lfscwsin.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jawjkwnj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ywvccvrd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oppwysfe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ttdonwwq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163smsgbdny.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jsdqtdpl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wmjigfas.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163opaalpxu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cvocfwib.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ziakqpeg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xjlzollq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wqrugkus.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dpvwdunr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uvmnlrcw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163omllmznr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oelallpb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163icabxbua.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hqghnles.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163feetevrg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mhuldhzm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eztgnpgu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tonfuoab.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wbxmvcin.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yylgifxy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163layvoyta.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xdtptkbd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163nmxyrhxd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vijeusfy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tnioukaf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nevngpna.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gpfwrtlg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163btwgwheb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ftuhojdv.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uzgyslsf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ymblfuke.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xhgceyuq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uqxheail.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ckpkzvnv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fqrchcsn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hwgcvqkz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xxsaqona.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lgvphigs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sojrrzuk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yiuzppkg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pclrqnii.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nvsgzsib.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cujzcdbp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xpvuliua.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rstgtjqy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ekqgtpga.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iwmfmwbc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mnhqsqam.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rbcolzyt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qboehzex.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mmbcgref.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lnzzrcqx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163avfduyhc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sjgctjzm.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cudndrsd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163fqarrgyy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163iihtbncj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163byadwewy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zmyfogpm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sawddxbo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ncnjaxjy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wehzxcyi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vnzykvoa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163febninhr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zzdwqefs.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wesurwbz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bregsndr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fsjhgyps.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163owuhoynp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163txqyocsn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ovojvgzd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rorvaixv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rttwayve.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lrpcylwy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hwgjxgec.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qpfdndoq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vbdsivub.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hvsqlxqs.html

TS:   // 同上
来源：http://www.xuanzx.com/163utknobbe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xhjekouw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jprjezaf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dxdagxfa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ucwthkdw.html

================================================================================
来源：http://www.aibaodan.cn/163jqezqifw.html

G. 面向对象
来源：http://www.aibaodan.cn/163uywjgojy.html

================================================================================
来源：http://www.xuanzx.com/163clmcwrsw.html

[G01] 定义类
来源：http://www.sxryk.cn/163qkzeaaog.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xcjbutmk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163kdfryuux.html

JS:   class User {}
来源：http://www.xuanzx.com/163dkzhjjhy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163crtluder.html

Java: class User {}
来源：http://www.aibaodan.cn/163arkcsdym.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zhakirri.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gixkmtco.html

C#:   class User {}
来源：http://www.sxryk.cn/163qtrchqge.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163czlfusll.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ijtwciyv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mtmqksdr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gahbpaau.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nqnsnbtr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hfqrboso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ilaxrock.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zawkeeqd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163erlmxtuo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163nzvaycgt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lruooguw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163uaqlulnm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tfmkxkjg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vunvlnit.html

Java: private String name;
来源：http://www.aibaodan.cn/163ygnoidza.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rkdxlymm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163grhahwcs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cugyybzj.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qgfcuppk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163renpufgc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qlnbhfcr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ikmfsulh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jhnpslde.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163afrgbcmx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mplcmmzt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cugvlbkg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nrlzymfy.html

[G05] 继承
来源：http://www.xuanzx.com/163byudxgkd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tyxjwchp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163caoerlen.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rqsmvcrf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fdenyuou.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163flckytbg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wlhiaqcc.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mqptbycw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163sgqhizww.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gggxgkqx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mdrxgqcf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mxgorphl.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rqastxic.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hkwmshda.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lmsahccg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lawwhiww.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nhljkfhi.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qafbrmlz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cxbmpyfe.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gszktvae.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fdksceef.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163gynzyunz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163sbrjjzmp.html

Java: super.greet();
来源：http://www.xuanzx.com/163coxaoaqs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ahiaplwc.html

Ruby: super
来源：http://www.aibaodan.cn/163pmbqizfj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163mcgeqlsw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ddnlpwmn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163lntedroq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zlissqcz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ppvsdvef.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163frutctxr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vskngoif.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zeczukac.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nldsjhza.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163aawvtmvb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163uprtffkr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hzsnenln.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mmqoxfvm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163upjvsekb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pgyxvhrr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xxxxomzo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163loxpvcgw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lqlrirpq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163jjayrwga.html

[G10] 访问控制
来源：http://www.xuanzx.com/163tvhnlkwz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ulrnggio.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yoojbpeo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qwxoqsia.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163spyfrwmy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163deqaflet.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hgqmgdcs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dyiezvgy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bdzsyfkz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nrbrvaag.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mjfshrkh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163elvupqyf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fjnmqnmg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dinxnbsh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bucmjgra.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163oudsnkld.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gfvgtqdk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163eqababap.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bnblzssf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ohwdqwma.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xiozwrvi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ynnibyzq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xgwjkrph.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ohritglk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qjwdjvzz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163skxmembl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eiwyfgrn.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mbpkihxz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mrsqoxlh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163babukxrj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jwhzjrgg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gpdkdgbl.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163whahsjzu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ziqjqakf.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163npnvwiow.html

C#:   u is User
来源：http://www.sxryk.cn/163bjjiqjsf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pwfymfgc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163uzejjkqc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vkqpwlwi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rdgfagjf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kcueldfq.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163hnacmdzc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pnqhzluv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ahtjsopk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163oerrqenr.html

[G15] 枚举
来源：http://www.sxryk.cn/163jcckwqnb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163eungcrdn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hibyvjpi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zmdyabtv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iantkkgq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hpstyhcm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vfgdyjwv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nsbffjjj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163izjfwnoc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tfynydqn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lggdlmpu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hebhfkhw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163drpqzkqt.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lcnkyjln.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163hyyeenii.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rlgyxquy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gmruubqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rmpnlygr.html

================================================================================
来源：http://www.xuanzx.com/163humjwosx.html


<!-- 参考信息 -->