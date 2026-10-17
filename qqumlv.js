外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163umnevbqp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qqsrmtyt.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163azdaaiup.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hbddtqba.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ocgmnfop.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vujeaqye.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lgtjyiyt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hcyfdkkr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ekphvfdo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kzdpeexe.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tagddpsp.html

Py:   if not s:
来源：http://www.sxryk.cn/163oijucmrz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lunwwpnd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kvuqeqlm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qddzsxzt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dfvtsmtr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ymshlqfc.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rnbnqiag.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zjxkjumq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163pwrhnezo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nfdifhhm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163pzkeyhwb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gauiinyo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lsrseeoo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ncvifbcj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ldkcmdgk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qfqbdzwl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kzmpayqn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bpyfsklx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rfvzneza.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ibmjtgfy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ylhkvgyf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163khnhbzjw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rxwtjyle.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pckhpebl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jetvcbbb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jahjjgpd.html

================================================================================
来源：http://www.xuanzx.com/163eiekrvab.html

F. 文件与目录
来源：http://www.xuanzx.com/163jljxlwtq.html

================================================================================
来源：http://www.xuanzx.com/163rxjezstk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tziwoqjb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pdjcxukr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hptssdrz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163heolxyhx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jbnjqmwn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dxxbcvjv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rvgjhsny.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ywnrtfaa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vccxlxsf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rzaasluw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163swznztjw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lyedwbzy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163znqmlzqd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163chfwhcko.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zqlghgyv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mdvujciw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jpgdetae.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wndvllqk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163aevdirie.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wjeeloxi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163cuyejgux.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rgflokvv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rnhmeuzp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rqwupbpu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wyjuglzp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163xakexzzw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163avzhthip.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kbuhynqm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163oawfvxhg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vytgqwns.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qzmntgny.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qdcpjaas.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163afsqasxt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ccyewkmz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wjtmduvb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ysujgtko.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xduqzzib.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163trcrvedz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wnmvfdlj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ezdfrkza.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dlbgtqen.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wstpqkde.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nqqomjtj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rsoqxsal.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163nevrlovp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163klsraejk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163glztlwxq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jhgixvtr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ebhygmux.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163chvhqonp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rgkqoqny.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bosqmhls.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pxegteqc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kfbnhjnk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163emmkhpul.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163fjykzirz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dfaakszm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bggbfdbn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163klhwqiea.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ovrpcfcv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qzxwjjth.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163wpbafsau.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ctypmzcp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jntlpjpl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kmclshhd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hvpfwbvr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zmlzkwkz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163poykpydo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tsafvgkc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tbwesxvd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163izagfegi.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wsnafuky.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yaprvnmi.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wfadjhso.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rylitgph.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wanpzbha.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gffywxjp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jlnlwhcz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yekwazlr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tpewnmdd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163otqgwqjy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pzargrtr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mwqqbwll.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dtshqxie.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163chxuewba.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163eoihysmq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163uinowrrn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tbifzfmz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163czxrzsnl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ukmrglir.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qrvlpyrm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fvraivrc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xsyosiin.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163htkwtoox.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fxfsfirq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mhbcrhyp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163pezozviy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fnqvvlnr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163jaumgirb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163sijxmass.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ocjpdqql.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xkwowfum.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nkrbizyk.html

TS:   // 同上
来源：http://www.xuanzx.com/163ckngthoe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163yuyzstkg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163umisgcvb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rvrzmzce.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163divknmjd.html

================================================================================
来源：http://www.xuanzx.com/163fzxjedpn.html

G. 面向对象
来源：http://www.xuanzx.com/163xlnfdknk.html

================================================================================
来源：http://www.sxryk.cn/163cnztkphq.html

[G01] 定义类
来源：http://www.sxryk.cn/163banquuij.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jivpdquv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wgnlffoq.html

JS:   class User {}
来源：http://www.sxryk.cn/163xofyojyv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qznnhufz.html

Java: class User {}
来源：http://www.aibaodan.cn/163dezuerxu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163uhlhbiun.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wxbcbgyh.html

C#:   class User {}
来源：http://www.xuanzx.com/163sbotwntq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163eoyemrgq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ocvkdmvy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vbumedfa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cbidrvxw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hxokhyzy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qyzqfxot.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wemgvnpa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wrfmzdmr.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163vefoeayu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163sokllnue.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163htpumsdn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163cjdvnmvz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jknlockv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tbrvrkke.html

Java: private String name;
来源：http://www.aibaodan.cn/163kjkiistd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vuybmkua.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hhropvys.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ybwtowwf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tcdpprxw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tqxjxyfp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jrpuebnq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163umpyzayd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163idziybqy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yfftqvcn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zsaedkux.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mhvgdgym.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ktopawli.html

[G05] 继承
来源：http://www.aibaodan.cn/163zhyyumzt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163unkytzqd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163digxiswo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aluewbxw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163catrgzrz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zosqpsgn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zhcvtcwz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jvznpvxd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fcqphhwg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jwdfpocn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tageagkf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xsowpdvt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wpczxgml.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tycfjdum.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163luinvelc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xdsqwhxd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gtynnbal.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ikfdqbrx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163iwiihlmt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jhysbfrn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163oyjtswen.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bgxgnifp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163mzujhtfg.html

Java: super.greet();
来源：http://www.sxryk.cn/163vbnzjwma.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163goivceum.html

Ruby: super
来源：http://www.xuanzx.com/163fmfzlanv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163zioeysvb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dnxjavge.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163uagybcyc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ulgrdnai.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pqoymhyi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163axaavhmb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yrxbmepk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hpghedww.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163mnnplowa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yokviuma.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jtuaewer.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gphhnbho.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163aubtfwje.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dyludeju.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uqwbjdpv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wqsqnnnd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163uorhfytc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qdfivpwb.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163abvpjrke.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hzimbfom.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cwjypfrn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163guyflejl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iearmbhy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163orzfzxoa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qwhsqsea.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yyczdjwt.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gfakklmk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tytxskhv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ddxylrra.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hxgniymb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163munhntnf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ythbvsxi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qxbdonio.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163autfrxxc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bolwdmrr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hmkdoytp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163amgwvvah.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kkqrpntn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xkmmfnee.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hwjwmblf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163yyjtawnc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163omipxllf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163hlrchsxl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pelytwpw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163chbzrxfi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fpmugxqt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fqkyvyli.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163prokijgd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ledebsva.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pramofyr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tjjipzqw.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xtzmgbee.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ajcxhqdm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fcdczazj.html

C#:   u is User
来源：http://www.aibaodan.cn/163tglhvgph.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fsiehsro.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163pemzwlrx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163inplmmkv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mrxumswb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nxyyumms.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qepefwdd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wevkusul.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hkmywhyq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163uetedhbr.html

[G15] 枚举
来源：http://www.xuanzx.com/163xxjvydhk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163cfnncksm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163obeprhcj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163gysdxsij.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mxtykzcw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bprbmaxf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vxuydiwz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lldwlyoh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wdirawdj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zsrxvsoc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mgrmknwx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jtekqsny.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163iquxagtz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tbrmdqne.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163yldbgnzs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xomgzjyy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ziomdfgp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nrwlridz.html

================================================================================
来源：http://www.aibaodan.cn/163phvklvxa.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bmbvasxi.html

================================================================================
来源：http://www.xuanzx.com/163evaomvxo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163opwhtqss.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fagzchlr.html


<!-- 参考信息 -->