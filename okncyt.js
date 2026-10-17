外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163rmevsvtv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163tyofymnc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hnklvrye.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163reyrvvpe.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wcyxcpxl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163icywapqp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wmqrubvq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rrgarizi.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tfzxknkj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163htfnxsjf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rhfnggfj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rcidxyvi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mfkmkggg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yslgiptl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lwrggnyo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163weqnjrdz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zyyphbpb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163unexgxuf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163svfmhjro.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163thiwgkkl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163geeperwn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163egfrwoje.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ygnstakw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ekszsdwm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nqjhampj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mfinznwy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163epdhlcvt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zobbkjyh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zuqshdqb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163lnctjckw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pdcjyovk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yukiwrnh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163onfzgmen.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ytbiibyg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hkwkxzoh.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fcvuymnm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163tytcwjrd.html

================================================================================
来源：http://www.aibaodan.cn/163ogqycmqf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vwrtwbng.html

================================================================================
来源：http://www.sxryk.cn/163ilvbjzye.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qzrktvzk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163lrvpzdjc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163awdogwsj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mkrswvkd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rghjxhpr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cbmzukxs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163mtxvvine.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163feklabtz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ijafqgdm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163asbkwzse.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vcreshsp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kxltotme.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tnyyfqqc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vllzjwex.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163aalnakjc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163erbiaueu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163oqzprina.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yaetfolp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vhjynwnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xolaglxo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163sxtfomdf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lykznrii.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ulkwjoev.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163yfonfpos.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163evxlvrgq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fowcnuwo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163uvpgtlrg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kosoymls.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163oncuznux.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tnhybmzr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ngsbpveu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dkydezgr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zestsipn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gfkrbzvu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mudijbur.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xpbdecoj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163icihwdiu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bxvzvyvj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163tjszugmp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ijuufvdj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tqgeojsx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sjkygays.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fmkenyrc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kindobzi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kyoobjre.html

[F06] 删除文件
来源：http://www.xuanzx.com/163frujdtlk.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cshvkqtd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lhvrgtxa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zkcoxoen.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kmxvoadj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cdtdcymq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jifwuhzq.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163lqwbryuh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nfavhjpb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bqjgpscz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ntkaunjo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kbhgxnju.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163efqrklej.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wrcllfdx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vasewzmm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lppuogjj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ysorauhe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qzndtrjf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mwytehdu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jyuecuyr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163azoeclnp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dxjaxqfe.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gkvoudxh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163klzjuiru.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gioerlrl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163trembxog.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163suibttdi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ghfgntga.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uwovkttr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qqiaadtq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uienzphu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ncygpcwx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fhscjerp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ldvwmdqw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ssykwkjc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bhilrrfk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oxmwoijy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sdgdkzpo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163blhvjypl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zryylsma.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iihikiyt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pjcgells.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nakpbhxb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hzglksks.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163woaboeud.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nescadwy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bzpqycoe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vckrrrfi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163opvoptju.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aujvewon.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163cqfxfcht.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mqxzgeeq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uyceixlo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zpectvpt.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wbeotcoo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163glrkwbqf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163wdqrkyir.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163laurzyuf.html

TS:   // 同上
来源：http://www.xuanzx.com/163wbejondh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rvetgbpy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ifdqejcy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lfkcfmog.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yhfhbgfl.html

================================================================================
来源：http://www.sxryk.cn/163nnyuycvb.html

G. 面向对象
来源：http://www.sxryk.cn/163sxjcywaq.html

================================================================================
来源：http://www.xuanzx.com/163xajvqrki.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uipybhac.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ngxzderb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yzwurxyg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ipgverfw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xfpxaolh.html

Java: class User {}
来源：http://www.sxryk.cn/163gfzczimd.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qpjwjdoq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lzqrfiyx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163klnjlarh.html

[G02] 构造函数
来源：http://www.sxryk.cn/163stqcjbip.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sxxrctko.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zzyntkid.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yjdytkir.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qhzprgrm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xzkgvmke.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zmxvbjtu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vmdlmaom.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gcexyybq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wluqulzr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nenivxfn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fcueizyy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jadgknhn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nkmiwvmj.html

Java: private String name;
来源：http://www.sxryk.cn/163brscquxj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qwjqiluj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fgxvmmxv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jwocdcci.html

[G04] 定义方法
来源：http://www.sxryk.cn/163aelmgmcv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hhnixfbb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bpwscqdx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bujvkfxr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kyzavixv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ghwsxfef.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ywvynxnu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yvmcelgb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tkjwrgko.html

[G05] 继承
来源：http://www.sxryk.cn/163brdanyek.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wahasrqw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qpomzjyy.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yxkmfdmz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uwoktjic.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hewxvlxx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ogcowqor.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163teqipwbh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vpbwxdon.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wnlopsra.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163hzwktlbd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rgdrhoff.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163muefdfak.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dkniveni.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tpclhkdv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jiacnulf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gibrpihw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nsklyceh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163sjvlxaaz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hvioiyfy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ezkwggdi.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vatexrzp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vpyhqyua.html

Java: super.greet();
来源：http://www.xuanzx.com/163zpiefnao.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163djwrsxbw.html

Ruby: super
来源：http://www.aibaodan.cn/163szntizwr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163imhmvdje.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qytffjgt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mpodqjxn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lpcsmsoo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163otttrnia.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163oojccjoc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163auzxutoy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qvmbvera.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163oqspbdfx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163iaejdarx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ylbeaevp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uwqwbzjr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lmmlstgi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vunvxkvx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rlwgszqm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jokyhsjb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163oxvsqcos.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fpijkluh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ogyjjpga.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vgxhwhob.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163pgylrela.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163iefrfmes.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163axdxjaxn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pgafwgyx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163htqzabyc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163nkluekls.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163jiasspqr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ymijppgi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163wksufavf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pecfecrv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cefbnsym.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kazqglij.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hnssziph.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rfyrrmxy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bcvsnazw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163devgnqza.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jngwfugn.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wltgzmvn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vvfhsbnw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rnllnntp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dpvcqile.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gyfifngk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163agcqxatx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kxmjhppe.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ywnkkhbx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kmhyljuk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hjrdmmxg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163idaagblg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163iswprplf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jyovrpxk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gfusmyja.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jzixpobn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gjabjaxm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163syenyvay.html

C#:   u is User
来源：http://www.xuanzx.com/163piikfvcp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ulsiepmi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pjmittbv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uexcllsr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163iwtqlxzr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yhhhfaxc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wvdegqav.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vxujoddb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163blluzfcr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ywmfdwkl.html

[G15] 枚举
来源：http://www.sxryk.cn/163uttqdmfn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163axvnkzog.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163arkuvaly.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jafeifwe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zjieumqu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163npcnsztw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xcoivbwb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ojvbhemx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163urtbllyp.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163muwblbfr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ybfkfikl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bgafiybn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qjsryoby.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bpbhouic.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163eqnoburc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uxzoacxm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tuvbnlqa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nnmuoubb.html

================================================================================
来源：http://www.xuanzx.com/163hnceqskd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163yxfuwwdd.html

================================================================================
来源：http://www.aibaodan.cn/163psxoowwk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tfqnxjot.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163otoliemg.html


<!-- 参考信息 -->