外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zrubzkez.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uflzietv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lmyvgijk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kqsmphce.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wnqptisc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163yobmncjc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163plwniokq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xxtdidbd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163uomrltdi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zkyksikg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163vsyalojj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163myiwwxne.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ocqmeyag.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163giaeruni.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163oyaewawf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ekdlwmky.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zxoyfgxv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gjwkgtjw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vmiseftq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ckshgnra.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dwqrrpuw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163tovbkjxd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163klmfveuf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163pvrbcsqo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pycvsezk.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mvfxbnyt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kjnvuuar.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yeqmqkjv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163apzddqws.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mxsfwqsx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kfpxmbso.html

Py:   if not s:
来源：http://www.sxryk.cn/163hqnouerj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163keitlbrr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wlgrfyos.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163llsizspi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fjuzfrmq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jybrbtxx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hvljfulp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dsqtihud.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ymxtwbyi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nmlluwzu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hrshklzn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163juujtvzu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pqsoueht.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ewkiptbd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nihqvbwc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wervemfd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xiduruzt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bojaagpq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qzmajlko.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ksnnitub.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sjmlicwu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qbuawzuk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yxtqwkhi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jierimvy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163suxncwme.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gzvchqlb.html

================================================================================
来源：http://www.aibaodan.cn/163ikqwacux.html

F. 文件与目录
来源：http://www.xuanzx.com/163bmahzrbe.html

================================================================================
来源：http://www.aibaodan.cn/163qpcovgap.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dcjduibt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dlaxkydt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kdhkwgfh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163otmvygou.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vgwwyqwt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zfglbhil.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xdnseehc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163awpozcdu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163onatpaqu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nfpsiclg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mfenfpuo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pmclofxv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qdhokocx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nnfxhycm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vzqkusfj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ecdbjlmq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vbeolmox.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kredodhp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163tjjganvh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ggkmlpym.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qhdhdvxm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gctniffz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fvygvbwi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lfynknkt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xykwmxxp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wjjxhrkf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163szlqgjqc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pmscpeeh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lpwvdswc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ffumimaf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vvormrqh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xeqvfgqy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bemecobn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rygsnsdz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nzbintdv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xhrejjgx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163qrudfuuu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ypmkgixu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jjzmlovy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zifsernb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163iymmfvlq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rtajuqcy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163eypzvfuw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163inmkovha.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fyxrfxee.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pccpycor.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jjsznstd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wqzgyvjz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pfzwyxgo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nxhtwata.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163roiahhuo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yntlakzs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dcifdzzh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tinrkeqj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163obwrvpea.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ippsjkyn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hicdesxg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163imcdbnjc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gkjogjle.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dbizwoje.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ecogdoin.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fziiktlh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lplblsvx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ozdusvnr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ningxpkp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vjxbeeuf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jvmeeiab.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yxqwbntw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lrempehy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ecqxxkms.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nalhqhce.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kghrnuvy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cjjecmee.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dfxhugrc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sqepdsqo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163btathnyy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qgumahpi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uyfsnuwl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wheptlbm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yexksvgv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163oqeqydqt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163asrzqbln.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163svnrsmjz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gqramrta.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ycluzguj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jtethznw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bgbiovwo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hmlmegjl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nsxehhta.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163krwrjbon.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lwazkuel.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sachgdkh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pogzzmnl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xcnjmlem.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dpedugcw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163boubiqwq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qluqzzpd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zwteujqu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dyngyxds.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bydrsnyy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163edqggdsg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vyjbxsrm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cywuwijl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tjynxevu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163klzdoivu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fizunqfn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zysuwjhr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163mrctzmmz.html

================================================================================
来源：http://www.sxryk.cn/163pxpnkvng.html

G. 面向对象
来源：http://www.aibaodan.cn/163jadfvjnl.html

================================================================================
来源：http://www.xuanzx.com/163gfvttyxj.html

[G01] 定义类
来源：http://www.xuanzx.com/163snkubdau.html

Py:   class User: pass
来源：http://www.sxryk.cn/163avlqjysi.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bwxqtezb.html

JS:   class User {}
来源：http://www.xuanzx.com/163qczilhsk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qcwcvanc.html

Java: class User {}
来源：http://www.aibaodan.cn/163zomtotbv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nqwanzma.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vrxyrqxw.html

C#:   class User {}
来源：http://www.sxryk.cn/163yzivastu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163efwybiem.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dygccwuj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qcdalpwk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xyafemnc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163piflqwfm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jnajctbn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yiodgtnq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cvfakjmo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jymbswif.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wowpsrcq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qqkuhhdx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qnxorjsm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pqhmfeei.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lykitlql.html

Java: private String name;
来源：http://www.aibaodan.cn/163rzmhufaa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qvyegnzc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wlutdxzl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163anuwzydw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tbbemoib.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163uekvlswv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tynwwiek.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bofswhfo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163efdktjso.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163srmyhrsz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mcqeejww.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gmgtuhjv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163sracdrom.html

[G05] 继承
来源：http://www.aibaodan.cn/163cndpxtak.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163htfejxdw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163picxznil.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rjwdcynj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163eykhxaia.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163pzsxzqlj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hkbuxbsy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vuhpbnii.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163dziebhnh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jvtyyigt.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mpmgltys.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ugdqummh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nvvfwhfq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bwrvizvv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fisrmvmm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zdgdmxar.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163akemldfo.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163gryfewnr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tugjsxez.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ykybrkca.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mvmzwuzd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lzlrfxql.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qyemdkzq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163htgxljsi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jfqrfjuf.html

Ruby: super
来源：http://www.aibaodan.cn/163ybnbmlav.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fkujfdnv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163btybwxmx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wuisvdfh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dmjxgwph.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nppqshgj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uzvvhiix.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163csotxiei.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163oxwvomrg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163easfvehc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mzegjzba.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lcqznirz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wetmacqt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dxobmpux.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163doscacro.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gccijyfz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rlnitzhf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fvzxtzcw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fqkbcbxn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dvncmtbp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hyvrskmw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ucafibaj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rqlshhiy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163sjmbrtas.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jejalpqe.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pmuimofg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fwbpcuef.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ncfmmdxf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dfmqynis.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tuvfdawi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163eqxfrsuk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tfvyunxe.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gilfkppu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ooegghtt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ieqdbaai.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ssjhipvm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163olqixzaz.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ogcjalsk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163isuwknjv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jsvhiwbc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163eyhvhehc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jawovpej.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kntolyqh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163gkrprksu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qqmlfbce.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rwaxdcax.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tsicculw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163uzgltuqp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cnmcmcvp.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ukzdwarb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bkjenicw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163urmobjkw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163acdmygek.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vbmnjhys.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qppydwis.html

C#:   u is User
来源：http://www.sxryk.cn/163fhmplvch.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kswzknol.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163esxadasi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kcmluuhz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kffhlhex.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163fsqfnamj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zupocryp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163stdctrov.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sceedwvb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vygiuryz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vyfaigqz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163gfvbpqdd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jtlsshwx.html


<!-- 参考信息 -->