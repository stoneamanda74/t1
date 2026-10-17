外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vfrofxyo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dmihmbhi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sdfragcr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ymsisoij.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nnkvmuxp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jypwijgg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163snopahhx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vcjgyste.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163neqrvfas.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163mwrjuvgu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163axaubgos.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zwsdesxf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kchyqdgs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zjosxxzo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rysjemsx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163djgjrzge.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wvtmicjy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ovibhftl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xfcqbzfo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ndrpqqkj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zuxjqdds.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tejskhbf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163iehhucxl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hofxiejf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zrwgksup.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kovovasl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163sutktdze.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gawjmfvu.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163makvzrmd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gvglunee.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ejhtqxbl.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sfxpvcst.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bipupycq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hjwjizgn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bgxtuszx.html

Py:   if not s:
来源：http://www.sxryk.cn/163apilnqzz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yvlsdiqv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163txiwbgwo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pyebinib.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qqthbsgn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tvrqygio.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163nohqlubi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lvbvrxse.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wjckzask.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163khfhqbwc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163yayitsdz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lgzlaxop.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jncgjizt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mnvrfgdm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ytzqllai.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bgfuobta.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cwibavrr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wkcvnyxf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163duijgvyq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163byslnfja.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163paomjxtf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bbbiuune.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kbhpijje.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wxkijhho.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ypykqsct.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xqdercnr.html

================================================================================
来源：http://www.aibaodan.cn/163qnohxbpn.html

F. 文件与目录
来源：http://www.sxryk.cn/163hnzcsors.html

================================================================================
来源：http://www.xuanzx.com/163unlusqom.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rlfmalzz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163eqgpmuci.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ppfzfsrn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ajysmiyy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rsvzfhcm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163amcpoyss.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qyhdqpcp.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xazlciwc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163dkbynrmy.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vqnwffdm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wtomprzb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vxkhyets.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pnmvhqko.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bgsxfhxy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wektmmue.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163sddqbbrb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bvjxvtwc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ucsycith.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yuodyyhu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uxzzeqof.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bhwommzm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gabpnrva.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oiqzkjmc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yxcqyyns.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ycyxjomb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163smzvgdey.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163mauhadhd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nfxyyqdh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pvzpmdwb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163krtcywlu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hjegghdj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gnuzkkqb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xqjjhqpw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rzsqnmur.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qgnhkave.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163oizjfywj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eiqjhzbm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wytgneet.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ypkaxflb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163emwhekit.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163shrzqkpm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163daxcwlgw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cuiiwkob.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kqiowaxc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xzgcwtzt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163tcggvpoe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163srixbhqi.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fwfmuudc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xamgxxpn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jraxgyyh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163slmxqvzr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163oplrdbba.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qnktipay.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163inhibxdc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163sjpwufcj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pwftdora.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cpknnegl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sopzzbvq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163foclvdtj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163hhqpaqrr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163erxwwnbp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dpawkdsc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rweaacui.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163idblrvto.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163skkrytim.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163krpwtmce.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rvfmecun.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sikxopwx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jggxlpbx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zxnbrpvy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163urarbzkk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163diqqbkrv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xckreutp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qqoaokrx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fyhsjzfn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jffpwikq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xlsbmnmg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jvnqqoxt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hjzcujth.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fvmgxcrf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ipwpvyhy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hzpeozzn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163luqwjoln.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vvyenawg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pzkhnwwh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vmpzwbge.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zkwlsrsz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bwtbilyd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kiadogxk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163noityptr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dyeksxna.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yewloidk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ftdlrvev.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aqwqkrmv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kdxdylzv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nckldhun.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zoalmjqq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vbptjsjj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xsmvihwz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163afwjkxkc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163olzivhxc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qhjmnipp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tfukrbqv.html

TS:   // 同上
来源：http://www.sxryk.cn/163nbmtqipc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kkhpfuqq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dngotgqa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zkoiavcu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163henwrosq.html

================================================================================
来源：http://www.xuanzx.com/163xylqqbpp.html

G. 面向对象
来源：http://www.xuanzx.com/163hogrsqby.html

================================================================================
来源：http://www.xuanzx.com/163rehtldbq.html

[G01] 定义类
来源：http://www.sxryk.cn/163qpdcrwmd.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lysntsno.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163tphwbowj.html

JS:   class User {}
来源：http://www.xuanzx.com/163doxyiqwf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163guihqhgm.html

Java: class User {}
来源：http://www.xuanzx.com/163jtodlyom.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dqndmqab.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uckvugkj.html

C#:   class User {}
来源：http://www.xuanzx.com/163ayztayjg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163efrrnfkh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xipxcvyi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163fxeatolg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yhrklkgk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xrmvixep.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hjbqabjl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163kzsubalo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163oqzqnrjd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163euljqyos.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163chzyxsxo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zkgphiqk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fyeqdwak.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dwchpgpp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nyvuazzj.html

Java: private String name;
来源：http://www.sxryk.cn/163ouqqoncw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qhjyxjbi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163uzvulyka.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163iqjdddop.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rsnvfksb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hwqufnmq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163caolbmkn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163flikshnr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uskfpjqn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pfzefogn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rycqpxrv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163taprakzt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jwiuuzkf.html

[G05] 继承
来源：http://www.sxryk.cn/163gvvwuupy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wdhzjtyx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qozikgro.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kciddkkx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lbsijkxa.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163djwldjjs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163duvsihfl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ubzwvzni.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lvbsnaay.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ewcmhecu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vzytdrdl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163clacfrmk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mbkvanwx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jrythacs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wjcpjlmo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163chgoksxu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hlkbfdml.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163frwrtbeq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tdichcny.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gdfwsjew.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kbsftcwp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163uwjscnfh.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yeehhpvr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wpgkhjdn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163iextlzpl.html

Ruby: super
来源：http://www.xuanzx.com/163cfsrrpyc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zenypiyo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rwovuvke.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zkfxaiot.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wuzopxtv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lemtfccz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163julfmnye.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zpgsncjc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mavxjhtz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qailbcze.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163liaajlgb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gpjsacaj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ekabidzz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xnzdqbrt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163otgloyqv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163josoouca.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163axuzugjv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tlbkkvno.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fcdzdowd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wumvhjor.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jfvwecdx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163kafuptcb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qfteikam.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tetpvujh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ybmtqdeq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163yeazawcn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ullqneaz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rflklqwt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xivzbziy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zipghztm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jexsltte.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ydiyhcqh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hiyxpfsr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wqokojbh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dnouacfi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vwxhhjfx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ujsnuswj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nbwqxbku.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pehdzgcg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163arjoecpw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cmqdjgup.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wozntumj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cyezuidv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zvwbtgzb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163dtuflpsr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ocvzarvu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kajomwql.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wuddkwrx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dmrzdggt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163eyoahyvt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cikedmjk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bxijjysw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ynddtgfy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163votjuhug.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163znynssmd.html

C#:   u is User
来源：http://www.sxryk.cn/163cfwnpcxr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163wpsmzoqx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ybmleazi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wxbwdcmm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wlgldaim.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rfpkqkny.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jxefwesu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bqkqrxjz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mwiezkwy.html


<!-- 参考信息 -->