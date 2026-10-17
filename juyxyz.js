外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qarkcjeh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163canhwvmn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bwcqiumu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lkpvnseo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ozvbxbck.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163siupafso.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163srhnbuiw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163crunsfqt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ztmhoelf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tavnwvob.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hqqtfadn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qtvqoqzk.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163nqsoxiom.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ptgfiyew.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mkckafvn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163esxjuryp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163enmpmhse.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vljxztnn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163efqeerio.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tcvhxiwz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163rmmxftcl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wgynrcnv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bbooryqt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ubdiymfs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dbsjfevk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mghclxhr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zzeqocve.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ryrynwuw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bvlfhzzp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163phiarvva.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ttpgnzue.html

Py:   if not s:
来源：http://www.xuanzx.com/163snqkqref.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hgnkcwvo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rciithzv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163azwfdyqh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zvjhgzko.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163aqpgxyzs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qtctwzaa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yagbjxnj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163iqkzhqxx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nnwmpwdn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ajqirmit.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bjcobhpx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mvxxuuid.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bfafcsxe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rqjnisul.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163btrlhnpa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dgfowarh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vtjeqgtm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163iljdydje.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kuizbdwi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hyswryik.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ttlmqrcu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163litqyqgs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163spgrilso.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gnlmtlyp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mtihogiy.html

================================================================================
来源：http://www.xuanzx.com/163ccjiecsj.html

F. 文件与目录
来源：http://www.xuanzx.com/163sglyrjty.html

================================================================================
来源：http://www.aibaodan.cn/163gyuyeljz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163focpjtuz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ettbxvcu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dcinlafx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163grphummj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jwejpbda.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lebxpwzz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jczjbsth.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163svkmnxna.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163goecashj.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pyleqdvb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gumcabuc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gcuhfrvd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hftsdfqk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jtyllral.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lkbqxnnn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lpzljths.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163puojeyqa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tglisdek.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163beqfcber.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ngxtfkpo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ptfkricf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ahgipexl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163plcjeiao.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163yowebjlv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qyoeaceb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ljvkkaax.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163sesphclx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ebadqaof.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vjaqlfot.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fesugnxi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fxvzrppk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ubivssbg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uvinrkir.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tlenlsai.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ouiwxjqh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wgnynjeu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163guvrgdyr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jlqoodim.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kkjfbhex.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mrntrcjf.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wbbcghgg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ptfkiitx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kfpsqhoj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163aaegtqkd.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gtgsrzku.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ghemprvu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xwxdwkyn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xqzoobdr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gysioekx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wmvwyklm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163veblxnep.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kdojedms.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yhxdmyek.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ayipegna.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163cosenjbq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kwlwsswj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nnafxawe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163osvhdric.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cnnoisot.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163hwqqjvrb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wkdjbeim.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163wkjecbhi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fgmufdyn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vrbzdmkm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163cwpxbxpo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rshazcqg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163numowzlo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wsdzwpwn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tqciwvpc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lmeluqlv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hzksahch.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163unhokscu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sqciysri.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qnchcolk.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nuibpoua.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ssqohkiq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rxogamfy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kqfatefp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163inoojhek.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pmngrufa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qgrjiuir.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163twlbadxi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nnikyjvj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ybfnwlbg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cncbsrou.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163iusknvtw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163oyckjcyw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163utmrixgm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nygzvjuo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yebkxdey.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cnjibczm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jjuhvgwt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wttisgtr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rjxbvdaw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tdekzaht.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ozljrhwg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163uqzlclzn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvijoqdg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wjjfzwlm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rdfzakov.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163sspvlxjd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dzcdqycv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kulvheas.html

TS:   // 同上
来源：http://www.sxryk.cn/163tfphijvf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hukktyxa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163auvwxsxh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lpjjskaw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uoelpnas.html

================================================================================
来源：http://www.xuanzx.com/163xekxrcoy.html

G. 面向对象
来源：http://www.xuanzx.com/163yqgexapa.html

================================================================================
来源：http://www.sxryk.cn/163gtrpbhxg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vkkczoew.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nklasajj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163upwlykxg.html

JS:   class User {}
来源：http://www.xuanzx.com/163ptcbdwzu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163dinvomig.html

Java: class User {}
来源：http://www.xuanzx.com/163nizjmwym.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jurwiqna.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163okuviits.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ucvsuiez.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jccmjaao.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ftcyhudo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gmrlbbeh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163modrzcnh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163egmwfpxj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163utoslhtu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ribwxugn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hgzjrbhx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163estnrexy.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163dluiktuz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nabwfxbx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gcyudkdz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cenyfeoj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tmckruha.html

Java: private String name;
来源：http://www.aibaodan.cn/163xdidyngx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163armiuywz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163txbasjlr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fyumdmbe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rcdgagsl.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bneejwua.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mmczojvs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163lmcakhez.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fpjnqztf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163whtjzemm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163adzcwlkr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163trujpdsv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gwpplupx.html

[G05] 继承
来源：http://www.xuanzx.com/163rbnudewl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qecnzvao.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dnplprxg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163duwadjuf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pgwvzukv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bklrpnzw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163helpfuyw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163avbbqgys.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kygrrezz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163pmwqatpg.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pidhhdtf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kuwndntd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rqwoakfv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fjabqgig.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163sunoteyi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gikylvqs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163urwlrntl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ohoeoxbh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ueggaepg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xrppjzid.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rqijfwgt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jlqvztrp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163zcjcqsqe.html

Java: super.greet();
来源：http://www.xuanzx.com/163moapkwsy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163scupzlsa.html

Ruby: super
来源：http://www.xuanzx.com/163fjbcjaxh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xqccqvws.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163cktwnezs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hwdqshlh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zbgblggc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163doozgnyy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zdxxlgtu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zqcfxldr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163okgtejdk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qprecmzi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163igdldhht.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bznirfuf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ruumwzlf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163qiikjmdg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pnmkrkof.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163itijnnsj.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lsxykbvi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yibjchch.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kwugiltm.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vfnvftcd.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gknsyvkp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163aditticu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bhsvvegi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jrqoxndz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ibfnrbqd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ykdelsxz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hvgmwodg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uiyvccki.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hyqcqddj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163jeolugzj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lrkjrjpx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bbuoaqap.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zmrkmxyb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vcyzlzhn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163iyekdhrm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qhrrnavw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ajjbudca.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hktlghtp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rwhlfoub.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163opkblbxr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uhdgbkvb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163owwrljah.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ddcgrwjt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tqaoskoy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tbwwvrio.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cvebzues.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mvzkwvhu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vsytbfsp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fojgxppp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163loemeyry.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qoimkjgh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163esmgxghd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vyyqovlp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ujraazmw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163nggrjiso.html

C#:   u is User
来源：http://www.xuanzx.com/163uoicituq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hcftjsvs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wlymeilr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lrdkzeeh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eknurkxq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163denzuhgm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ltimqtfy.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tnhqbnuu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hzmnhelr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zrezqxpz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163hscqpjoi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163imiejxmy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ykllyvwt.html


<!-- 参考信息 -->