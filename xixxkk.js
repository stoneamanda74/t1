外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163igfbfbym.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mqnmbxxk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jcrtrhvx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qdoaiqwh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163pblillts.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163aoyzsycb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163pgeztibk.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bypmmves.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bzearxig.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mqsmnupt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163agoukrpz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163agnipmxt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gfslbazx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yxgcbizg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hyeyqnjc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mitgjfvp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ygtyvxld.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ulzdwsac.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163enmcgnic.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163faxapbzf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163enznusgh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163yxrhxpoj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163uxyojevd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tmanogvq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mbmzjwgj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163lqnsiaus.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ulcqceud.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ectvjlbz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rxdnmfwd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zvvfafqx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dsgfcojo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jpelrybk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163hfjhvsgn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163kyzjvony.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mhewawvr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163akzbumxh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hbvrfsli.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rhwalori.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163iqiaxhvc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eurtikjz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cbqcjpxd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vzwyeadd.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mewcoouy.html

Py:   if not s:
来源：http://www.sxryk.cn/163tuvemoph.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163yxztylpt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gmirrurx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hbxleddl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mecdwfpn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wykvvmfs.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xnwbfdtd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zpmqzrzk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163oyqohhua.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jlthozof.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kikccmpr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dhznqyec.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163swvzdzfp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tcetlcsp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163etfojwjj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xflbtwni.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rpgxiylh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163oplfbqxy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163incfljtw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jpequhey.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kwjiamxt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cwziryxl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ygkwnegj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mpufimes.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163bptaodnp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jnraheku.html

================================================================================
来源：http://www.sxryk.cn/163jvpjvpvk.html

F. 文件与目录
来源：http://www.xuanzx.com/163bwvbswwp.html

================================================================================
来源：http://www.xuanzx.com/163mcdsgwod.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nvozeupt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dyotrkgt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163terejlab.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163lcublptb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fewjtvwy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jvdkhlll.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rlthxziy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lrckqlyh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lxhnuzvm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163cpgjtqrg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ruzdbpnf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163stztlzik.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163umgslhag.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gbgnpvvt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hnqvtlqe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163boqtlhlx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ynoitcbf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163imtzgwsd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163uwyserkn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zkzelkbq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mmcadwej.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kuzchudw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rtdnnjne.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163hshundzk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163swackmhd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ewfmuqor.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hikxupyz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wgszdsyq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163efjsjtxb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qqicjmqy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mtdsaiye.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pzkkytgz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ogqmzxai.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163lampyprh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ywzrione.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ehhqrhsf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ngemqkbh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dtkhsder.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xydvnhid.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163erkqbxne.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zqnmlljx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jxyoivlu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qnrnkhke.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ypscxlnt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xslyfxyw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163smmmouyx.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163czddnygf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163otvxnmjr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163poxomqtd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163axfpmflv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lzxgstkh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dtdjxmcc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fufxzrmn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163nswnnpid.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dpqkmdye.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ankyasiz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uzylmjnr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tbxriuda.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lcrcdiea.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lysxrrbf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ufbkuebt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ehirmmts.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xmwvppuf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163egyacwxk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wsfwbddl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wzobjwzk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xofwnpvi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fauekpzs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163plafzbop.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ovbwundp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nzjgbzfb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eoeawimz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wizfvnxf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163iduhusno.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xavolrxv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dyansfna.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wercgeqf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pxmjlbjo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ujgsqrea.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gadtywgw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ujghsojk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mihivtls.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wdbjkata.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vqkdhbyz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163swgbcrxk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hmgfvthh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mkvflsuj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vtretttz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ecfukcyh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vgqmcccz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163esxdlnoq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cbqjsvmg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zgnahlln.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ixglvvdu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bdohvfac.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163nrqdwzwq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163fjffihxy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vuvflweg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163agarbrpo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rstlclud.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hxbrpuky.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163npjfauua.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163snsbnjht.html

TS:   // 同上
来源：http://www.sxryk.cn/163tqnjwgrh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163faouipii.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163oimsdhtg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fqmtahgj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163viqvennb.html

================================================================================
来源：http://www.xuanzx.com/163sanwopxd.html

G. 面向对象
来源：http://www.aibaodan.cn/163akqvgycw.html

================================================================================
来源：http://www.sxryk.cn/163spxwovya.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wkwzpbkn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lxtnthke.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cjddxhgf.html

JS:   class User {}
来源：http://www.sxryk.cn/163fzwwckuw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163orscxqte.html

Java: class User {}
来源：http://www.sxryk.cn/163wzuarawu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uqrljfoi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nhxohnmd.html

C#:   class User {}
来源：http://www.xuanzx.com/163ivmpvjlt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gjycparm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kbxacegn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lktgatgg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163anxzlpvk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kavdvqac.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163uztvjcbz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163htociriy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zkzwanlf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xoxokjvb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163oxvtmikw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163owkrfyyf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qpfwfwen.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zndcytkp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gtsfjokb.html

Java: private String name;
来源：http://www.sxryk.cn/163lolxijym.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ucwmegzm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jxlrljmk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xwupwjdb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163emjdukqy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163rsmblihy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163uxvdmyok.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cbrwooqj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163atiglpnr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gbglyart.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zbnurvsu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ffzxhozi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nhybcjri.html

[G05] 继承
来源：http://www.sxryk.cn/163wnrpasjq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163jwlvvrnx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kzubtjuu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163golbpltr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tgvmcuwl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hfvaxgap.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gzflzvis.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lvlksuax.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163umyleylm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kpmpqvuw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163sawfkoch.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oobddfuy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mycdzhvy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aikqfhtp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jdagpivx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zxsffiyt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sgyaydiz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rejqtzhw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163geuxxhgt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qsyjppsm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kxqpyvmg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nfclvblh.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ezmabmrw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nipqjsyb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ltosmtfa.html

Ruby: super
来源：http://www.sxryk.cn/163ocymucod.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vrytmvdl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lizdvoge.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rsjwlfnz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yqqjieyu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zdnrctou.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163eayedpsr.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tgjjkvtr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qenltraz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wbuawjey.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mnbjbrma.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zomiyybw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ifcptczs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163shcwumzh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cqfwulyk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rbphpcqn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bdlkgtpp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163clxherzj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hqoumihj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163evhrvrmt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cwpejexe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163sgfwkbts.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nljxuqzq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163egencrxg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lxcuzxaa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ogkfbygq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hovbaklw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wdvghggy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xujbjabp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ncxmsyfy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ssvlwuji.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hrmazcte.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163utvhplnx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163losqfkih.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ruwqffbu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tpomltpf.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lpcfawpv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kuvngrio.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gdeufdpg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vvbxfrwn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163vwiinelp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163woitzfea.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163whzpjgeu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fsmusuyr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rzoajpdx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zdikdwpq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jkinbvlt.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tzeimqwp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163pthkexmo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163olaoznaa.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pfphwnrb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xloeykzk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dijznule.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163cubbtjik.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iiystmwq.html

C#:   u is User
来源：http://www.xuanzx.com/163aldxsmsh.html


<!-- 参考信息 -->