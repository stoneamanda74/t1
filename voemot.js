外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ixtvqbsp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hauphdcm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xobyjurf.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gudofsgj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163agropnqp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jnxyxgwi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vmuaajxr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nzldozvf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dfepasdr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mkycytbf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qbmyzojv.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vjwymxvm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fqvjhysy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wlluajqm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bwrwoopo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lniwnnhk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lhhtfigu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zcdbejuz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163lwlexvum.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kzwfitqa.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yypfabjo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wrqgrfly.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163lrpcadni.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cdwexxdz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vacdfdyc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163qvnqwdmr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wwpxahkp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qpicwbxd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cmaqakjd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fhiegcac.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163tjwxreiq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gychwgat.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yfcnyfvn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jmeenapd.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uuhmznxu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163drypazdy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ojvndpet.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kucajzfg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hinactvo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lbvleubs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vdngdxyp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fvmccfia.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163tmwsxknm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kuisgykm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rdrpdkeq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gzcnqvic.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jlszsakc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163inqgztdt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163edxnuomc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gjkihsqe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zpqdmeno.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fwuicwki.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zksyfznb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tqlvvueh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163exhllxvu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ozptlmkj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fkwcjigz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163edpvfdze.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jwzhpzts.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fnelptvs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qziscvrm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ksfxiqky.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ybpiywyy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163eyjphlxx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cyklidur.html

================================================================================
来源：http://www.aibaodan.cn/163xttqkmgi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mayptnag.html

================================================================================
来源：http://www.aibaodan.cn/163pfzkoarw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gfzmfqwe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163axefcshk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bxufbpgo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163irdvkqtr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cdervrdh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163upfjkicg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163djgkkyvy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gdzbwkvb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mjuujmbc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163santfsax.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rohodwva.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kbqwzydo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zodsyitl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163sdjyyxoq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hmlerold.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163nffhqixt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sxsitrtp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163kvxainsc.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lslrwjqy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jcfmitbq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ebjqybhx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iqoyqebg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cwswpfpd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gsfgpuqb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ffholhpe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163jdxssgni.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ktqjpbkl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vmmgjasc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vncjgslv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cmgsgfmi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xqlandgt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163whztngig.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ghvzkcux.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jsjqhbgf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jkwcgvbj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163keptrufa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pwvyorbi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163naoxfvus.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ziandfie.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gmhuvudb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163htrjrgfp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163twqwxotn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cqsaybtl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pvgbxfdu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163nmgsgmsa.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bgargjth.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163eanllylt.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163juvfytrs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jhcqphqh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163imakswvj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xoronnxu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163suskdxmf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yawwyefr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ajwoxxws.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bctmubwk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ljkjmmye.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163tujtmcmf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163satzpkaw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uptcxngl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hhzehxvw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ywpwslfd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uvyqkevx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bvayxzub.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163aldvfycv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qspuoqla.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tqvmicty.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pprwitxe.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ymzafqsf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gpfrlktf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dbzrohxi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163sbpngtcw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163orgwyqsk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163egyjvzcx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vthorxaz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ukxushnl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iecvtwdu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sxtnvytu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xjmobvtl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163oplcqker.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163mjqnfzls.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163oqewsajm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163omhojhsg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tqjvtuqx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163sgjofhfv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163udkhpvek.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jebztben.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163phovgesu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163actkmmmk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163celafxwk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ktxaekne.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ndudfwxn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mtzwayac.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mksfdusl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ogopcabh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tupembru.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wraygvmy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nhjkxfrd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163txztwqhx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fkzfumzh.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rlnzaqmd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163crifbcbe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xpbynavi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163atqxmazj.html

TS:   // 同上
来源：http://www.xuanzx.com/163sroebfii.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kyanakxi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lcvyaizs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pmmgfhyn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163khjzqrjh.html

================================================================================
来源：http://www.aibaodan.cn/163ioddched.html

G. 面向对象
来源：http://www.aibaodan.cn/163hylbsnyg.html

================================================================================
来源：http://www.sxryk.cn/163rcdzzcpg.html

[G01] 定义类
来源：http://www.sxryk.cn/163pnozlmmh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uvmjipiz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163eembmrns.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zyroxtwj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ytwicvoz.html

Java: class User {}
来源：http://www.aibaodan.cn/163luotldqh.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tofvwigh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sgudesua.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pgaqhwxl.html

[G02] 构造函数
来源：http://www.sxryk.cn/163cfkmxyne.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163bfyscjhb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163dvdeclvf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mockpcpd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nnudcfni.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cwyibxif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fbdwbmgh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hrvejsyh.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xnemrpyn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kdbnbulw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uxvdadex.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zcgovpym.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vtpfjhyh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ycqpwkyi.html

Java: private String name;
来源：http://www.xuanzx.com/163cjxptxro.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163njcqwktn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ptiwzota.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tmikezje.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zobkgcpn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qpilaurq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kanmbdjo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vynbtegp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163afkuqklk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yozvdrfj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qmexswaq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ggdjjufl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wwjusrko.html

[G05] 继承
来源：http://www.sxryk.cn/163lhxnfydk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xawbuemy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163klahnyny.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ogfowdub.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pivmeplk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163cuxwlizo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163iluukzkx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jphxnlan.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ksnfgjww.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vogjpzxd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ydgzfidh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qhoiegdu.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163nycleztd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fptmxcwc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ghcapngp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qttxcvut.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kjqtxzfm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mgdfttct.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bgiawdxd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163yyzqptfg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iwllvqiy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ajardqhi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pplyzdyg.html

Java: super.greet();
来源：http://www.sxryk.cn/163zffzglsv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163xrkogrzk.html

Ruby: super
来源：http://www.xuanzx.com/163kglrbcgt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163geegviwg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kqlruhxx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163arbijlxl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163djkrkxin.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zxrtbjvp.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nkhljznd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dnsmrida.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vaoiqkbc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gdwueoxz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dxljlros.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tzjqpyhu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163faxnremu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fwwtfrxm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xxbebxuv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nzsmrsqu.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gprcwsmi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163aenomtlq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rvyqrsfl.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163eusbztsl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ctmvmekh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wevxoxgv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163erwdcsos.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qcpghakt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hdabpsdr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cztklwnr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pxfikwkb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yjnraxhh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fcssjukz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cwqxbwpr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rjkbshog.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ywfvqhcj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wihgrzoq.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vctwjxrl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zdklgtdz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mcrzlnwp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jtgjubym.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qqrxkxms.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ieuvgiob.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lmfwkfcg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163flhtvmdw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nyhivduf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mvedntcv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kedcoouq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163metuzklq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tchnelst.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163toheudsf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163aubwfmcj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163irdncgml.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hymbrzhi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vdnclpjv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163exmzgqoc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ggpxteva.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ybmwdrue.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zstfxlkk.html

C#:   u is User
来源：http://www.sxryk.cn/163robeecvb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zwpbtfdo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ssezitvl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163upvmaloq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qvkkwbby.html


<!-- 参考信息 -->