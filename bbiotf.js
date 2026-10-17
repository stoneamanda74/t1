外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163spjmygur.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ycfdilrl.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rphiuwev.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163diahvkwf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163shiozhae.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163heuekkub.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163atfcepxn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fxpqbnje.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ihvlabyu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nkgtanrf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ffzpgsrf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163sdwxgbhg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bwdybxhs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163eaveemtl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163uozfgwgc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163usvosekm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dnuljgdr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163noedzfry.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ytnahprc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ncvoazal.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zqswvhfc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ctzsndzz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qqrjxhqg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ojwwynkg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163itfsuenl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pzipxgqj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163htqapcgt.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jhrnpsgg.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dpbpnpby.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xweeczbz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hxhjywuz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163fbvlunyv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zvkwrnuq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lpfbzeaf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fjrovslu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uglrbsqd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gyhijbhq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cyrqhgoh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dyqnoezh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bgmanvcj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163auahmnky.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xigzqhfx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wotyhfjm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163psqfxkaq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ayheeezi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nzcvsuyv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163witxhiad.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163sjyvhgoi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gbusuvpc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ilkkvvks.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ynedmodk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lxiggokz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pflupgwr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cadmzfaw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xragblhd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dzjzkqjk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xuhfwiiy.html

================================================================================
来源：http://www.aibaodan.cn/163khxbyidr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163czkdsjbl.html

================================================================================
来源：http://www.sxryk.cn/163cfrsddfd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lbngnsyf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pnipofkq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163covfxgyr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qoslodrb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uvnsjhbd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nkinxbqm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163egyhobka.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ilgmecmv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163aahmeeaz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wltulrin.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fbkpddcx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jiqiivex.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hvyohhnz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ejhryzlp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163entbmnrf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163grhiykjo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nwbnhyxh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163krepmwfd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xkmtgvrz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vztswhkp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fuguduyg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iolcslpq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163snckyevj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tkvxxyzq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rxpmowuf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pwidkjee.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163asufqpzl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pmkkaegb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fwcgvhpu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uxpfozmt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163azuzpjhz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xwwnznys.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vedzxhpm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pdxvvpzm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tjthnfug.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lfqmudnt.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vruffxab.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wsjmgodw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163dokmqvyo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zfxhjtju.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pgpllzpx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zcqpvakg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kumakuyx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163urmykndx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ekrpachm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kfwjvyye.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163grjdfjmg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xmiibpza.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163idvxucvi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lzhuctyf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tzrkalcy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wwkywxdb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163iydavazk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dttnaliv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oludzkml.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ljtjqnje.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ktheqtdt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lbahpbrz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ewyuoich.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163swoecgqy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vybffhmt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hdjjbelj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xjjteysp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ezxideju.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163owfmouhk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163jflzmumz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uhnevghd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lkjqaypf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163aswnzbxk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ctbbwdet.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ysuqnnhr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jtprbrew.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ewlptpxi.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pcrzqlqv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gkyvssko.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tynnzfor.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jcatzhjm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ajnzrhkh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ikpexuec.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lgyqifai.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163tksgxptr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rcnsibkj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ooypykyk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163azgabbto.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vjzzzize.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163bknclitg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ssxgfvyn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tsruiaus.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zxxktell.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pdcrahjq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zehgvjyt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tkczpqgp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163cnrgiikr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xwzhoqdb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dvnjwszm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163uicgxevi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jzlgqzpo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rmehsbwo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yaejlemb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mfxbgbnn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bzlumbug.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ebawwjsd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cjbacmdo.html

TS:   // 同上
来源：http://www.aibaodan.cn/163bcvvefud.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tupnidnp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kwjrkmxj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jgwowzrq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vqcwqhvv.html

================================================================================
来源：http://www.xuanzx.com/163ukukapfa.html

G. 面向对象
来源：http://www.aibaodan.cn/163aeipmuyh.html

================================================================================
来源：http://www.xuanzx.com/163bbhodomw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kmywgtwk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hjzwceat.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gemijdya.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cuvpcrbf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163oerjzgiv.html

Java: class User {}
来源：http://www.aibaodan.cn/163lyhtgcnt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xydxwuxb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163eskzlhjh.html

C#:   class User {}
来源：http://www.sxryk.cn/163fbfmfwwn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wvkvvenu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fbgnnonz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ufyfjggw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163aehiixwa.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pjudclye.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lptqyyhf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tzfxkmmd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lzaahjan.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fzyqitbd.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vdbzxyln.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yoigswcg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wtspwekg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dctzvnme.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tabezjfm.html

Java: private String name;
来源：http://www.aibaodan.cn/163nvyozpdq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nswniaol.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163syvpryel.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qxeznuxu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hcjftfce.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lhisfmyw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vqskhzrk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zukgqpmy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yzvelavg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tbhgwgcv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rbtwfhsj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163aifxljct.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nqychkfd.html

[G05] 继承
来源：http://www.sxryk.cn/163ojkihhzz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163iblcwijk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mafbadag.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wsypvyeo.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qvlubbri.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163duxtwlgo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163atnkedhc.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163glmuxqax.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ncduedgl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wwhhzoob.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163aqamzwfq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ompohbmp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dlwpmnao.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uvndhgjk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nkbgeiqo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zmilbsdm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zjjuvfaz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xcsyuhjp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zgttlreg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xnslgdow.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163nwjqsdji.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gfwyggsp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pyfhncuh.html

Java: super.greet();
来源：http://www.xuanzx.com/163hxzgqrka.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ybvlysag.html

Ruby: super
来源：http://www.xuanzx.com/163mxeyaomw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163edsomawb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wrymxxjo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ttqkiqlq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fpbugmpk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rhllglkj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zcazumaw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oomgplsz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yzjmsfih.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gmobrjtc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mbwwvumm.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ykcugslz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rgroqvfn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xlfsccns.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rtvprhvp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gxhgxgyb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ggaqxvkf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lcxdalfg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ugmzpopy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yovjlkik.html

[G10] 访问控制
来源：http://www.xuanzx.com/163umiwuage.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wktzydqz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ffgdmsgf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zpriidax.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fczqmskw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163axoyjart.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163teihxnhs.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163oolnjnjx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qpzgrwty.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ajijqljn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qgfzcsod.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163owpqcbhs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xmktquel.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pfuewkic.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ylueewmh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163swykqlit.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163kjffcdgb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gwdjsedo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xyhfcthq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mrszrloj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ocvmbtxd.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163bguhrnpj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163lyxtwdhx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163coyepkqq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wimstuni.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163adhahjph.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xggdgaru.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wtcxahmn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zuzsolfp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163demdpscq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zjjejkjl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kkmodnag.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jduyrdln.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vloxzutd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lzgwivyo.html

C#:   u is User
来源：http://www.xuanzx.com/163hjeaxskx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163txwuftbf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163picoahof.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pqtezugs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gkrbasdv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ginztaty.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163aggixsjm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gckqpwya.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xfcnoyid.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rmwrivwh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vmniqqnn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yfohaitv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163cqdhfdyb.html


<!-- 参考信息 -->