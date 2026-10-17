外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163noqfbrfh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fkwpzmyz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163khikmyhp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tlckeies.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yhzwgemb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163esclpvqo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yxazfjrf.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ypiulhxa.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ycwgbbkd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xkrtbhnx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163upzohayk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163sihafnqz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qmcwonmj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163knklzizn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163apxvawyu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rmdqjxua.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163afbddlhi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163okiwjzeg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dzufoupt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cdiaiirp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hfublmrv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tuiknfwn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ynfsomky.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163swgulayq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oofvpfnd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mtcrdsuu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jgazfvlf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nyutpuky.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gmpaoxfb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163euteesks.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dcbyitkh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zkioankh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xeenehbx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163dgdbnjzu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163semjzoav.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xmwyirba.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zdskyprs.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lipssjmj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cvxgrngx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gtadrfun.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mxmtyzqt.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xlnqqzgg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qelfjteq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163laxbmqce.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oklguqzc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163otwhvsqo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163adhzfgcs.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mhfbiyek.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163pueyxejx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ndaxnxvz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ygfjbqlb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qtqaqmmz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vhvbouvq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ngicacui.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jtxibssn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cmshtmzz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xlojxgpc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qyiwcsmz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fhuqbkvb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163roxonfdx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163phhobccy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gnnezqjs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ohxyddvx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xecafjov.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163yybjplkl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163llcdptft.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tyfyfdkn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163spqhtkdv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wwfhuyfx.html

================================================================================
来源：http://www.aibaodan.cn/163ltkdimjl.html

F. 文件与目录
来源：http://www.sxryk.cn/163jxphxsoe.html

================================================================================
来源：http://www.sxryk.cn/163voldprag.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zwacdket.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ninbvsvh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bdwfsqxb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163escwotms.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163cyyswknk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vqneurro.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pcdtbgzn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163llgdpjdt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ltkvkdhl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zlgaxxpr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163oscbdkti.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qpeatwmo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jjaqucka.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eqhsuqxs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eeokvgcn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qnvmopwv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163llrlfczb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163sxjumkpb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kjxdanap.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163royrhgco.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163glsaghgs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wptbgxpo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ajyzidwq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163uoyqhgnu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gfznyvpn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qtkdrwfz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pdviuzya.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xjfbatax.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ipxjiann.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vwqpcwor.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uqnndxsq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xkcpnifs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tokgeglk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jumcysmp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163aqekxigj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vbrvycga.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tqsssbiu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wuofgjxe.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163igitdoet.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163njpbhosz.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dauqsnra.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jicnynap.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163anvmomem.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kqinrlva.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yiwwupee.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bzzxwqwt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163txbaqobb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xpvniqgm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163orzqhrrs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hkirlfsi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163drhwuggj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163byurcrll.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kdnbczhu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ffkgtlwl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163txysbihc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163wtrifsio.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163sknwfwqd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163puyitlxm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lvhoyewp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gteentld.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hifiqldt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163etjanizo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163awnuwbof.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dumviyxb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nzfyyvcr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kbukkdor.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wufkuxoh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kkdttoyf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dnvcmylt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163bcptilac.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hnetmiup.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pvmgmhog.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gifpepmd.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jgzjfhoh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163czztnryt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wtswgmvb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jmoqhjav.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xmlwctva.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163alhadkjm.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163miujnzxm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ucxtpgky.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ntgzhirr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hfkrqowx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vfaqkuck.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vlnthvqs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163hwitjbpc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163snyjxuaz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163axisobue.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163klbxwxdp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hikcevzp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iriuhefo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bxoyefjz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163odqpuwwl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163asnnwfjd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ghewbkty.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nfynpwhv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163uaymjtuf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vhgeiktf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ixyefted.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uvovmyed.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cbomyplv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sugpjdqj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ymqqrawt.html

TS:   // 同上
来源：http://www.aibaodan.cn/163djycuqea.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ddejsohq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ewrijhgj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ktfdgqpf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jhwgylhi.html

================================================================================
来源：http://www.sxryk.cn/163dffdwchp.html

G. 面向对象
来源：http://www.sxryk.cn/163dxprkcut.html

================================================================================
来源：http://www.aibaodan.cn/163oyjmkqfk.html

[G01] 定义类
来源：http://www.xuanzx.com/163kaakfsza.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bcodxvgo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163sujeyezi.html

JS:   class User {}
来源：http://www.xuanzx.com/163ffsjlbep.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hcdxyruk.html

Java: class User {}
来源：http://www.xuanzx.com/163jqtshaza.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163formhkrt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kisnjkkc.html

C#:   class User {}
来源：http://www.sxryk.cn/163qnmueczo.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kjcjgflw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yvpfcavy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163clqxubte.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nqlsrfio.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gwstdqpz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lnieaaeq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tplhoyff.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nyymnwpj.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kssufbvc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aeesioah.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bvznpyzq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lctnxgyi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lzdlwvkt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tsjjbhrq.html

Java: private String name;
来源：http://www.aibaodan.cn/163kmgrnfyg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jbmnunkw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ugtfbvtw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fckeesjh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163khztsylg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hoehcgqd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vkdbidwn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163aykybwnj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wpwvxren.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qcaqbems.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163yijnxnqd.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jihafdwt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ugnsqdhk.html

[G05] 继承
来源：http://www.sxryk.cn/163ljkbfgaz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163luskowbv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lzhilynx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vidrrdfu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qxvszavw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ioeyozvy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uficfthf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nbikgcie.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rgqmyedr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tbrjuqtz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163itmkdktf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ixrgymii.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163enfyarle.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pltuawpy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163poitilef.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163crtcjekc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bosrpech.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163djuanwxa.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tqfooecr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wnrafcng.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qgkzqfwa.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zwweqtqw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ktakitwf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dteckorj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vrszaqou.html

Ruby: super
来源：http://www.aibaodan.cn/163qtgpbjse.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163amghynon.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163teeiwgya.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rmncipqp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163czcfdueo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xoqyesbq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pvulfbgv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nouqlfrp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gnteptyo.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ovgzyqca.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163kriypiot.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xwybztkq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qrvhxapo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bnatikpf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ewhghlag.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jgwubozw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ixxoskrl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163otioejco.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nebnocbq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lyjqfddi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hrkcjmmj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163amnuxaih.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fqvsjwhc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lncglsuj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pvpypyrb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tcfigzdq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163spmqpuyv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lhomingx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163psejjiol.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163obomfvbu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bbiisdgz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yepewmsa.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kunzhuei.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163skhoovtj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lirmybyp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xwrohasu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pcxspwat.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163akkuvtql.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163adgyutfw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163unnclgww.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vrdlqgmw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163eaysakyf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dqvrbxcc.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wdnoaxhg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kerqjaiz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wcagvblp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pimyaqjl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iefdopia.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163etkhtgel.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tendwuqe.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hydtfsex.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163snjoevab.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ifrwzuue.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163yjptctbf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nkexhhdb.html

C#:   u is User
来源：http://www.aibaodan.cn/163ykatqyqw.html


<!-- 参考信息 -->