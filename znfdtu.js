外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163onrqnelw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tnabeznr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163szgwlrcd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cagylsyo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tnmziemw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163unhpokcz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mmqaikws.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mftntvdt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nzqdupre.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hziobyxb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kdcqyrnw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wrohqygf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ookjxkxz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lcahxetp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nutcdart.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zcjizvfl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jygicnee.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wmyqvnlz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pfzyoogp.html

Py:   if not s:
来源：http://www.sxryk.cn/163ufeljatw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qkvvygvz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xouoxfbg.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qvcmlcin.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mupuofmm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163niuyqseg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pvjsawzk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163uwomjlsp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ukqmivlq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vpqmjwyl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163csaaawhs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163estshxwb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wnsdpfkv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163shykvxiy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163giiynvuf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wlrgbcem.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vvrxggls.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ssmrcljp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bxhfufak.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bajqffha.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qfhvrpcc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iyfonqjk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hhovozpu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gblubipd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jozpdvxr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163bjkezzsq.html

================================================================================
来源：http://www.xuanzx.com/163gesvcuxi.html

F. 文件与目录
来源：http://www.xuanzx.com/163qimuxdqw.html

================================================================================
来源：http://www.aibaodan.cn/163nvyjgfrd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ktricgey.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xpdydsrn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zlhhehsw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wrksurvm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dzxutkgs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xrkgdegq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dnlldedq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dxvofaxa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qehfziab.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163axkeicmz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kizhgshs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ackpzdco.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163trvampho.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163blfehdah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zcqrwpfj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163csxksaes.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cqyqmvox.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oeokytex.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163eaekydgm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163fykcqxjs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tnhhousy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wxzpuapl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lltmmyli.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163obsnzroy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ymwygoiv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hhkwling.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kowlqxuq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163aoeticfp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jsgykhip.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163alyfkclf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jramfvre.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nowoczsz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uurydfqy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zjizrvnu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163odxfvwyp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163swqburfv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ymaeyxks.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ktgahpnh.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xxwwedgr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163skjsjpfn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nsfizthr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vbyzvrtx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cvbvomtx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163vacdeqzk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163havpcezl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hgvynsjl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wdabucdg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wsiwflde.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jpwmhtil.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lvqhlupi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163whajdalg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163pmiwfhqn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gnoincdu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163oxlydbms.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ygbvoemh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pucltdzg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mmhfczgu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wqilrhce.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fzoozktw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lqabosnr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qygsrxns.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hbdjupxn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163swzgphuy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163lnselnnv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163iazxjpuv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163jxhmmmxg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pqzdxukf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lksfuknn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lujegirr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hjuldahj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dkbaeamh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zdliaftn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wqhtjmto.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nmskqwee.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163witknlsl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xwkowngv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gwlxxqnj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wegtbkwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uqhjruaq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jpdlbgtp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ygsbmqha.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163syctqyfa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tafibbee.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hymmrzhp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163krcmxakg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163irdcpldw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uidkosyd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kmsczfzl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jntcuixz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tngjuqmz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163upkzubbw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rroeuxji.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163enpfnaxk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kmbcjwsv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163csrdbaoj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yzihgzir.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wrucphfe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kvtuvqbv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163okhadcid.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ogaxmgix.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163sjxsjvuw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xeaeswro.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xbjckovk.html

TS:   // 同上
来源：http://www.xuanzx.com/163pwyfstqc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gkfbersx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163etofdzqu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fdnfjtom.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rjsdihup.html

================================================================================
来源：http://www.aibaodan.cn/163cuhbhfwx.html

G. 面向对象
来源：http://www.sxryk.cn/163ftiuehwm.html

================================================================================
来源：http://www.sxryk.cn/163pamocrxa.html

[G01] 定义类
来源：http://www.sxryk.cn/163uigitprp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jbiwjkma.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ripelxgz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dxouxvuv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kburmzpo.html

Java: class User {}
来源：http://www.xuanzx.com/163heapotxr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163grqbwadf.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jneexgrt.html

C#:   class User {}
来源：http://www.xuanzx.com/163jvhzuxaz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tnixmdmn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zyoudchf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zrncxoni.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qryogiqs.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163avbcttyf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vgonczgx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gkbdqunk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163spvngmpj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lnlcjzjw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rqtoprfv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ciipkjnt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rkrgyxmj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163eybqhxrr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163auumqjit.html

Java: private String name;
来源：http://www.aibaodan.cn/163szthxehz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wcudbqyo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iwfjiohs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163veasisrh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163scjbiixx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cjtnkavz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bfoxhopk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163znddonem.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eqdtliit.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163reoclcku.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163egeqdwws.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wfoixqpm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dhzcvltn.html

[G05] 继承
来源：http://www.sxryk.cn/163ipupifxl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wcdkavfo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163huwvukfc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cpyfwild.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iolmqlvc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gngvlvce.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fldatqeb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cvgvipmn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ctbolxmg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ubifjjvk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nnmuvdrc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163efvkjebs.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ssgsleva.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gqqcpjye.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kmnzctbx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mbetjjyy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qkdobzeu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wtfvmesp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gdwlyhju.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hhxenwnn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163odrbpfzy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wsbbcwpw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yywxnrdr.html

Java: super.greet();
来源：http://www.sxryk.cn/163ivqksxzq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zbgxmwng.html

Ruby: super
来源：http://www.sxryk.cn/163wvejtbji.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zjogtaqn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163epurhstq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rujoctbc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ribpeylj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nsmtyooz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cyssviyg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163fiaijasj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lnwxdftf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qhoweoey.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163prjcmntf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163otaxfcvc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pcsugpyc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cogkganv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163muwpromr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bjjacubo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ekxcsgxv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163oddeebdq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yqzndurb.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163aeaveqpa.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zcgtgvdk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rwsdcpsd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zjpzenip.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fgrhxyxh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kubexmzb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qlkehdhb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163nnnammfw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wmcdlfxj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ajsgkoqw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tcpdfnje.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lfyhmvmz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163igubgkua.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mnfapxhb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ddfavpgq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163iqvyychm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nmfbkiwc.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qrejfuat.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dtghfqgw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vozutrlm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yzlooltj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qjcqhmti.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nqqjlzjf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mroifqwp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163usmazadm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qxmtdrzd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rzvnsfsq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ynlprhsj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hakejfgt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163uhaomijd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pskcjfbq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ivoquqzu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163agdjmjai.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bgoduqar.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gwurxgqd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163avrvgnha.html

C#:   u is User
来源：http://www.xuanzx.com/163kdlinsof.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163badxqyyv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163elkvrlvb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fmrjiwgo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163iouredxl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163flsblkkr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163psmruzof.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163twayxkcw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xfosohkr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ascrfeit.html

[G15] 枚举
来源：http://www.aibaodan.cn/163aibvaicf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nlqhiztx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163imgcwhps.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qotggwgj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ijykvdkl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163akdzrxax.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qarmbipn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163thoqnylg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tpqlkkbu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eduhxkam.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vepqvprn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163holntvmt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mbpvxmny.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163abuwmmcm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163axskvecm.html


<!-- 参考信息 -->