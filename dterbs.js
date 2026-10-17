外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163glueylce.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163mecvckzy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163zhwiwpho.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zwwsewzm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dawszqrk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yuphxojc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163brnzndxw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zrqltsvf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tzbcujzs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163olzkwsog.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163crxhgtoq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fobuusya.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163luwupjhx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163sfkjrdmx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ldnuwqmq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qbpgmiiz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163eaalkgin.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zlskriuq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tinxknts.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163btcdiddy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zotzvqqs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163sodtcebm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163oohgpjga.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kwprsulr.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xloktvuu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163esmdhezc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dahcfnju.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163natgehxp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ipkrruyh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mqlozrnr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wsdiybxb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qjrbctip.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bgrkupza.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cbfglzyu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kodihukn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163msfatiuh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163saflljdo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163egqpbdzn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bppwiwza.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163takmepmd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uawbtljd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mzxvgrkv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ctzeyaxt.html

Py:   if not s:
来源：http://www.sxryk.cn/163nkomyvnj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nasmwfyv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pefutsdr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ciixkaaa.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nwqapjqa.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mgotnzks.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cgxholyz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hgxcavbi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163pgfxtdln.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ezlcnjaj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mmokbjhw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kuhrcklb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yuhgwdfj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xdbwzwwn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163biommrtv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ymupnvlk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vtqxgzai.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kwkphhqh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vxwaakzi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fsgoiysr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mqqyoqbz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xvdrhhsw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ykldjdty.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fjcbitqr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163atvzdjib.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163famhmsgp.html

================================================================================
来源：http://www.xuanzx.com/163lcgsppnu.html

F. 文件与目录
来源：http://www.sxryk.cn/163mzfltpzs.html

================================================================================
来源：http://www.aibaodan.cn/163yhdgtych.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lqhzubmq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ityhiddb.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wplraiwm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ckntolnt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rhehoons.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vevbczdu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163spjqvelt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kyaltovr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hqeedkzq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gsmfrkgs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163snnjptap.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ffnzlwkh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wxlrbpov.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kfquycre.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kogmnmsu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163iitzjhki.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ipdyepja.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pnwnsyge.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ltqhrxjw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ycdlriie.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qwuaducg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wnwhxmke.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163livifqeb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vjejryme.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pkhvdsua.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163nuwrrjge.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jndpsldu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rarbduex.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pgxedkyu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zeubkfye.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pvxhwhih.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jisznxzx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qarqkefz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wvtggrxs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nftklweh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rpnzfqpc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qgxpswlv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wbcqseqn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163amzmpshx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vvlihqji.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jsokkpmo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wesgmcdf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cvdtkfdw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jibgqhka.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163sjjxpjoe.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ffpzqztx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163flcezsdp.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163owxicxhk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kocphglx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gocnbdbr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dwfpaoao.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163edebrvsr.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kglkfjxe.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163loimgawc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lvnbbzcb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cbzzfzao.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pngjucff.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kzmntsbx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zclxkdzc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ockmfgrf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ipiimdpe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163roetaspr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163clhdsprr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163faldests.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bwjaqkae.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jldkkgzs.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163inbtfpfd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163aezsmqrn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163klikydbw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163eckawlri.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163edllmpts.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bvieaout.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163cxhdalgt.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wuwvjton.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163drctlzui.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dnzoebis.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wbefdadj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dcslsqzn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vddbxvrl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vybpjlvb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163memnhmjw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ohfsfjcr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163beggrpld.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vwklvmsk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rqxwwish.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jgeotfng.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163otyqgexa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nscuighu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nstxctxf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ssbqetsz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hvygnmol.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wsunntqh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gdgebdlj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163akdicogm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ukqrqrdp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163elfedtwj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163eymduznj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kftiwewo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mksxhmmy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vbuoldto.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pxbtzlis.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eapbllxm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hqsdgpkv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zloxlpew.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163umisdpvd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zdzqxeki.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ulveipns.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163axyzyvbo.html

================================================================================
来源：http://www.aibaodan.cn/163wehmvuth.html

G. 面向对象
来源：http://www.aibaodan.cn/163pobubvcq.html

================================================================================
来源：http://www.xuanzx.com/163hzinqxhl.html

[G01] 定义类
来源：http://www.sxryk.cn/163fdanricv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sejerahl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xhudemcl.html

JS:   class User {}
来源：http://www.sxryk.cn/163szndhwou.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163izyoblly.html

Java: class User {}
来源：http://www.xuanzx.com/163tmuzztli.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dkzhapkr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gqarblvb.html

C#:   class User {}
来源：http://www.xuanzx.com/163ltybebcv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ehmyhbbp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163cngkjwdu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rkwrqvos.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mieyrppo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lzfuechc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lkacjgcm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hmmmgguy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qztnslwl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bilvniqc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qzqliact.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mgcerrtm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163pbgptxds.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163twforrwl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wpyzdveq.html

Java: private String name;
来源：http://www.sxryk.cn/163xlhovapt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wvugcbji.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jcgptuym.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ullbsvxs.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uvfxcfcj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163teauehic.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kiuijjwn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dmhcfuqu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ssdyxece.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jnpacyjp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ipksmqkg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wdthtpsz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bvtkdyac.html

[G05] 继承
来源：http://www.aibaodan.cn/163swurbwhx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163newhfihw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mdqsrsjr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ynlpcmll.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pmaahvfb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ttssahuu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ynaavrjc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tiotbmxy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oldwwfgy.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zrchvdps.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gzktfhxu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163adfmjfhp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oszscxna.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dtpbeuzn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wzggieav.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163boauhkmi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nvihhjis.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163aenwcuxw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qibotrsh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lovwgfik.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gcnuduob.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163exuivlbw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163cefumazd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wrnsarvq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hnwtoxet.html

Ruby: super
来源：http://www.xuanzx.com/163htugiemz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163otvfjzci.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hfgqoqnj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dkkiceju.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kxjtokjs.html

JS:   static f() {}
来源：http://www.xuanzx.com/163diabywmm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wfaecabg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163nvaknaju.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vjpjeopx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mbtrgrut.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fvogghvv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ylzbuonz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163trfhwyry.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163efswjuzt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163otfquobx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ugibwypg.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xnviwmzz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hjslrhcn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gztjqueo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163fumlhqrr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hgyfyife.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rocqxslp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xwhcpqtt.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xudywvxi.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oznpbwrh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bivdqttk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yfewlysy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163altaiiks.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163labxqlpx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jbveaaot.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xigkyvph.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xusgvfyw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kniewgqb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nqnefdjx.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pegucggw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xizuwvnx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nngpuxod.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163egjwmtlg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mgwgmtyw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gacircpm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mqqinwrc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163faozpeah.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zajuseic.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qvtcigbo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163agftnthl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uequgdjg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mcucnwyr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iuuheaqc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wilokfqf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163eqicgesw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sjkkctsl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ymobtzkl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163uewpmxfm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163udkwqzbe.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cgsreprc.html

C#:   u is User
来源：http://www.aibaodan.cn/163olbgmfdy.html


<!-- 参考信息 -->