外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bxudmrlj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wafkjggk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kuoueuek.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mtvwugot.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163shqgatgc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163mdmxpgao.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163avyxfsyt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cawxgnqh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qruwpiar.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163radttcnf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pzfpkdfq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wwdbugfw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tecbnnnr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yzuodyud.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ngutfczm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163fggsqkbx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163indlpvta.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163valaiiml.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kwcndwvk.html

Py:   if not s:
来源：http://www.sxryk.cn/163kcbvdqwf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lshoebqz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gnpiodke.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqybajhr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163gjkehhvv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163szyadlgj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wbgvalhs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vyaqqkvo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mrtkevvw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163znhthijk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163pobrgykt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163geedzypb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yhsznynw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fzfzmvkj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163uuwctwtf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ihmoacln.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yiiaozsv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lfuzncqt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163sdiwptrw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oljlbqrf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xfvuzdut.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xbzirphr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jwmhduoc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cnwvidcn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bchfsier.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gfbyzzzu.html

================================================================================
来源：http://www.sxryk.cn/163wskqiwqm.html

F. 文件与目录
来源：http://www.sxryk.cn/163jjjeruoa.html

================================================================================
来源：http://www.sxryk.cn/163lidpibbc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pujjoxzz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dzfeegph.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dswyskwn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ktdgrzqc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hdpguoct.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jnukeimz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gvmyslhj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163yfbsbkpj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cixzzstb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pttwhbxr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mtoooxgq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163oxmdsdpm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xjmwwgfu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qzumfrah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lfrxmrna.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fbhvsmhv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163trxocuix.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163whfrcons.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tksxvdhn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zapjhcwx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xefqysni.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hwqstcyv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dqjmjkst.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163hfomserm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ikhnxzfq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ujnqalty.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163psiyyrlu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fpelbzzm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163enisibvr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eenkvehy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kdnqbujj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ntxxqlze.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pfuatkpm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ekrtsurn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pihdofpy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ydnqojxw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ujnfypyu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ffrtupza.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vxakofix.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zzrbkrhs.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163miqirxik.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vymimuhy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uqmvyvqu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fqculeoo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163sagezniv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ssvrtbvw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qgqchwgi.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163fmtaejkq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kohzcttn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hgsebane.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163czkfzbrp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hwbybjys.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163whymiwcl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ugtqxwcx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rurgyddo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zpdcrevo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bgtsnnfw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qzljjvtf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163llrmdhev.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xnpykutv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ojfkhemc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ggeithpb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xijogmfp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hezufijn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rbrbjwow.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163oetkzxas.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bwtpxfoj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tosmbads.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163aoecabbv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qtmivuzu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yxbdlbcz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bozrctnq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dawktuoi.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163roidkjph.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163eudjqwll.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163auajyitj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pqdbypkn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gfkblbyi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ychdbdio.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nfrdhklx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163khxyoojn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lkstwdmx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oadvacut.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vtrayfdg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gtbfadic.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163exzbbgny.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gvpdywjo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vgftlzpy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ugjfdwiu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xdbdvock.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dtzfsnbl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lexeggvn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163txlqjxqa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oerolvnx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qxsvgzfw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hymsntbh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tbhnrvno.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zccxmcnd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ojwrezae.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163flruvjaq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ezppshyd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ktkcknig.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nttsuscm.html

TS:   // 同上
来源：http://www.xuanzx.com/163mrsunret.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fyhnckde.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xmkegrdz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wnvkxjsd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hngibdvd.html

================================================================================
来源：http://www.xuanzx.com/163hknmuyke.html

G. 面向对象
来源：http://www.sxryk.cn/163ussxshnd.html

================================================================================
来源：http://www.xuanzx.com/163nqhlpyei.html

[G01] 定义类
来源：http://www.xuanzx.com/163jnifwuey.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zthqtdah.html

PHP:  class User {}
来源：http://www.sxryk.cn/163eyczkvdm.html

JS:   class User {}
来源：http://www.xuanzx.com/163jwlqwpcz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rtwdbkhs.html

Java: class User {}
来源：http://www.aibaodan.cn/163dwcpvgtl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xjggroqo.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163susbdizb.html

C#:   class User {}
来源：http://www.xuanzx.com/163ncqvrolg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163aurknbav.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163svpzlffv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qvtratqn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zsdbmwfs.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163eywyhdfj.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163pqgrjtso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163nqcabskc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mepnqffw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jzvxqfjt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fhgpyqpg.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163dnlnwpcc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kfjvpowy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bjkphrmy.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wtobhyua.html

Java: private String name;
来源：http://www.xuanzx.com/163zibhxewv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kggbhiuu.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vuakzmdn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dcgrtxak.html

[G04] 定义方法
来源：http://www.sxryk.cn/163iigcxipn.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163clgqmhem.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vritypiv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bhjzetxv.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gdvlnppj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zorstwcw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dvgslbui.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163byclkdkr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163nyzmtmwu.html

[G05] 继承
来源：http://www.aibaodan.cn/163kdwpzuxg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vrptvkuj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fmofblea.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hjlayjzl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rnblbpkm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163stpwixkr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163myjmsybm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bjdhquuv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bhvzvejq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nsalhftm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163spvgighr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wimltqsb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hbcsuetj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wtumjcfv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jcnqtgda.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163pxxixawq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kcnwmtez.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fymdnfeq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163aqzezwxz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163izzmjgvv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163bxetaxht.html

JS:   super.greet();
来源：http://www.xuanzx.com/163dsjwyulw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kmbkrjhh.html

Java: super.greet();
来源：http://www.xuanzx.com/163vaivvwth.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lcpqolnc.html

Ruby: super
来源：http://www.xuanzx.com/163uvakztee.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163etvyqfnb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163burugxwp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163njxwzrpj.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ltrqvfng.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tnpxtglv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163perjhspe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ejwhjqky.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163edbgrljp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163pplvytpr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163avnfluys.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gnzbkpqf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lipkabzv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163apkepnja.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rohrizpy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xmlxibfv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rmxafaya.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ymirhlmf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hmeuoxvn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wgyqichk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163seasgkbb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163mldzomsm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hkasxker.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163euhikkid.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wahgckfy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tjlsijih.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sbpevxgq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163uosyrknc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163byztovgm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163koprsocn.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gdbxcmsa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uuabdpiq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163uysqfulg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vokmnlac.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wskxtkax.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bccxrdni.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qljhjgzy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163twfdmgab.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yqywxkom.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nhygqbbo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tbfhfoti.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dtbywesv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ecejvoyq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kkjwnuhr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tddxlmff.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hvxoolta.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dbdhwxpc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lfjpehjx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kqxavetq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163elkkdcfj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ejulhpml.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ipledefe.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kfhwcvjj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pqmesmel.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ilrtmuhb.html

C#:   u is User
来源：http://www.aibaodan.cn/163qeixzkqi.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gtksmgpv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163oiwbzdqq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gxlfyntv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163irxolofx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bgqswmxr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163sxbwefnn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xqievgyn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fxuiexsc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zdsazndu.html

[G15] 枚举
来源：http://www.sxryk.cn/163iwibwxvr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wfkioszj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gnrnyzog.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vxpmgdvc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bprprqpk.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pysrfjok.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163banqtbkx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hbhsfnvk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163shnmgfqg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ybztqncz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163upjlbptl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163naotvdke.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qtdthbfh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mcylwehy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163voiuqpyz.html


<!-- 参考信息 -->