外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zjjhnfed.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jlfmqbnr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rklyxxfe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163raomenga.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163vnhogerw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fdbofhvh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163nzmcgoaj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mgxyzmgv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nkedmzby.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163usqclvpd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bqsbkmux.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xjgccfxm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tjkvlkle.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ywiizlcr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tltbqfeh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tlpnhkag.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163patgemwl.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163lcgyxnub.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cyzouvjz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163iybkrciw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fzkocgnl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ihydqsjw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yhpinizb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xqpcuogv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163dqerbzsw.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rxeizzmh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vtkjjjou.html

Py:   if not s:
来源：http://www.sxryk.cn/163flqjflgf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fovdzkya.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vixnpgvm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fpkosgqt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vnghsxcq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fokqjkbg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gqgfzyhh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163udtbveiy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163miywebjp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fvzmpqii.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bdycqllh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163psphsars.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qsunmajr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163thaagztn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kcmcstzs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ptzivrvw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mdaapuyc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dhitvelm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rwjimiqe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oiqrmwvq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nqkzznvp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xekqkayn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163edubeayq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163vhumpfqv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vutugyrn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mnsozpge.html

================================================================================
来源：http://www.sxryk.cn/163xzolpdne.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wbtunfli.html

================================================================================
来源：http://www.xuanzx.com/163ixpcbmvy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hfhqulgc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163mxobytkr.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163sunhmlli.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pjhyymhs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lkhgcrzi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hkzafutj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uudkhjvf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163eykejutl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ctxzlphs.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163shznzzwi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tnihbzol.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163azndhgqy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hbsuusvi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163klcrggsz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163melfrxiv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wwpjainl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qhzbtxvb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163nodsvyrh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dqnrclkv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mccxvaqq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qzgekchq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bssffboz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163figbgdcz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ytptrsrk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kkenxewf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163cbzvpiep.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hpbgggoa.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dfxetxhn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163sbsjihbk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vydxydsl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163otgckout.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jyjwrura.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gaosmtii.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xuaqnoxf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zmxwndqf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163udiljing.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eupvguyn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lflnrmaz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rbjsggks.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kilozfze.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rqtmcjso.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eriblywm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hedwfijt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rbbmzpyr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ayjxxyvi.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vzonfrsd.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qcnorzzl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pgbldmwa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kgakahtg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cwpxcrwp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iurlfqqk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163osozvptx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ditfjsmm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ortuxtcr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qvzuvvco.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163crbayrwz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fbtemajn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rfaaffrd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jtoujjbn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163gxjniqtr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qcbxsmzv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yqowdrxd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bnzkowqa.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163iqmaqied.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mvydpjat.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cuovpvik.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uudjomac.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jvwlyepy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kwcwbntd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163sulqqmqn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lvfyflno.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xklstjba.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163kceoeght.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yvvlbpza.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163aldhmcph.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uycblwmy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hqthtzjq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163raeqzcvz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163vobfivnc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uvlkzjfy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163avqwtcaa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163aenaxcmv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163blujuglb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pjfruimf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sibndzvp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qbnyfomq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rnatblpb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dpyhirya.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gjufmkfb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tkiiiktd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163sulrhfio.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163geprfwgs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163utusvzsp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bldeuefc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qzhpqhjp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mycxnful.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163avpbyfcl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jfuodcdx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fyyhhayv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163axoseukk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cxwctksx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qtdxqeef.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ilkvnkcn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163funfjcmg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hqguppuz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tcptschk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gotfxiwa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163eivtrzpv.html

================================================================================
来源：http://www.aibaodan.cn/163bjigssrr.html

G. 面向对象
来源：http://www.sxryk.cn/163cqzrmgwq.html

================================================================================
来源：http://www.aibaodan.cn/163iuabvnik.html

[G01] 定义类
来源：http://www.sxryk.cn/163uwcrqrhm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iyirwoua.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gjqlrlfk.html

JS:   class User {}
来源：http://www.sxryk.cn/163vfkcpkup.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yjbkpaox.html

Java: class User {}
来源：http://www.aibaodan.cn/163omiiwzjv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jjvcrrts.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ixprkmzb.html

C#:   class User {}
来源：http://www.sxryk.cn/163cfykbwiu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yfrhqdfr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mxnpyflr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ustcgeal.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yingjygi.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yxvhwvtp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sbaxzrdc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fppaelhc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tnfmmbqf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163clhrrwsf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aevtbvta.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vcoenixt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163azaywkyq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qigihhxo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dkvxqoyr.html

Java: private String name;
来源：http://www.aibaodan.cn/163wxrwckrp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hbvabmip.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ftjklrhz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bdbohyep.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hbbrydai.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wmuqkjlu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163burpupvc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gwnbvqcg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wshtjaly.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163quunyvxm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qisqicfc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xecdhqqr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zvknetbm.html

[G05] 继承
来源：http://www.xuanzx.com/163ensosvbf.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qwexfkab.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zdhqajjz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hfobbwpu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ppyamrvu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nmagnnhs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tekxogbb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163gymdplre.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163epjjerav.html

[G06] 重写方法
来源：http://www.sxryk.cn/163osybppwx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ohfolvwj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uohqcsbz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163peahbtud.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163unmvuuvu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mfpuuqrq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zhncvfrt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ikaubfgi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dcyqogyo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zrrtmjag.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jjqiewvu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jiwgijcz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163sovqvuzb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163feihidjm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mxiovgmw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qaiaijdw.html

Ruby: super
来源：http://www.aibaodan.cn/163gixsxpyf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163sllmkbcy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zgbkzwze.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ssckibyb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mbfhwtuo.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gbeovkkl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jswgsvoq.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kxdwjnxy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163klunakmc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yfmpaxgo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vkcedwqm.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163oofsgfot.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rlbxmcxn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163suwxuxgi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vfwzakxp.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ttgmxgwq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ozlwqlpv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qcifezwv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163quzxkxii.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163intlkgre.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hxdbopvs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163xnylavun.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bxzwrjqh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uybwmlpl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163doogoycn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uoktysoc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163truwswhj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mhwogfqo.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gvxxzbuv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vqcljumw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xfkmajrq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tgyahian.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qfhovsko.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ppywgbgh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zxycvgop.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163haxhjmah.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qqkgfzxj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xtzyujfj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fduthxqe.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163akxwcsgq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eaggwxva.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dwqctwzu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163uzvuyxrz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pohmfyoa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tyojfalz.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rxizebpp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hrviwfob.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163afoulvic.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ictfuwbk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163khrbdpid.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ihdrgnps.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tvbmrxjl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163uqyilwsp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nvjjcoif.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mcpaxffb.html

C#:   u is User
来源：http://www.sxryk.cn/163lucugnel.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ybcqmeqw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rdlszffo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163phvjmxmx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ekwouzbz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qzishpba.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163sjvphnav.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vbsaomfj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wkkaiekp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kyxntytt.html

[G15] 枚举
来源：http://www.sxryk.cn/163pzcvyqrb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xtqwdidu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163azdiebqm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163adwlwgjb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bztudtcz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ycbaesxh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gsnmkhdv.html


<!-- 参考信息 -->