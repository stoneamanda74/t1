外链999!wailian999！

Ruby: s.lines
来源：http://www.sxryk.cn/163dvwjjdqu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hzekhlsi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ysayoirg.html

Py:   if not s:
来源：http://www.xuanzx.com/163ynivivnv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vxcawcou.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163bdplyzwo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kqwcioro.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dbgassug.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kvuhftru.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163exteouaj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bwfvtffq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jmwkvfef.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163caigqqvk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gdncqmsw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163epjxghdn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163buocuaql.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mclbdfyh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rvklstij.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dwjnaeyc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rhzmbbjz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rdlgshjt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vqhxbgde.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163umuxejje.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eifyblaq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iwuphcbz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jdxvywyz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ktzwozlq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jgbzfbed.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ynqsfmdg.html

================================================================================
来源：http://www.xuanzx.com/163tqqbrlhc.html

F. 文件与目录
来源：http://www.xuanzx.com/163qawouala.html

================================================================================
来源：http://www.aibaodan.cn/163xhmgnehl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163oovociaf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zprjxihu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xbyvrwxa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163pgiszvbr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163apkhbxyx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163goejqlvb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ehcmstuh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163aqatbvxz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ajvruklu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dcpyzuqg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ewuhhiqo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wfcblzgd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cnenbwyk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ajmbyemt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163atkrzbls.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sefgvgsc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163flauvwot.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pmlnouag.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bewkqakx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wpdtagdn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dkfdgavj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rqqvaeoz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zgdctnqe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163harvdhoq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gwekfofh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ehysmzfu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163irnftiwg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gesgsrqz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mfaarobp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xqzjlefd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zmrhndno.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163elwfbxtm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qmjtftlk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yeappsxe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163caelsthr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163asptxjgw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163eizlkgto.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163albljego.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zsjebbhl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163avadnwpp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ozlryivp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yslmdkpg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fnshtogw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nhuwfbzp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163shkoiqpg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jhrpzllu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dlcexgse.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qnqhixcv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gaeovrnr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163seoidyag.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lxwwmwvs.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dmmprxva.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uromvtvk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jgnlazos.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qgmzmilg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163aukihtsk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tekhdcln.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pgvoviqb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163akdhizuf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yobrwmlp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lhfmkmbr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ukangcto.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pqzawkdp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ebtrqxrw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ojmjkcdn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fhxfwpqy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dmzvloom.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eikmktou.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163punfbcur.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ycjezdsl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vddkamaf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mvoodxvp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163krfuaeuy.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lrckijiw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qlzsfvcd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163usgdwwjl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kukrksjt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nwfatwdw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163johrsriy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yhxmubvm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163chlbpwuf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jmpvutju.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163smfxncpi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163yplscpli.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163trxidcal.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163yksaygfp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dhxotocb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pmjlkazx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nxpdgmzs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pagwohvd.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163earvchvw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163msfeuqfh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163efpkoaft.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vfiihetd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kywlujhk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gryrprhz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lmmhtgiu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xbvwmvuo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163cjbxpbcd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zellnrgo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xmurnhnv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163iuzgamsh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163azstpliz.html

TS:   // 同上
来源：http://www.xuanzx.com/163qkuyssiy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fvlxjpjz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lcxfxoaw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xzpzcdua.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163oujypkzo.html

================================================================================
来源：http://www.sxryk.cn/163glcplwqb.html

G. 面向对象
来源：http://www.sxryk.cn/163dwirmgne.html

================================================================================
来源：http://www.aibaodan.cn/163dfykltty.html

[G01] 定义类
来源：http://www.xuanzx.com/163wfvlzpvu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dhadpaje.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rjvqsbql.html

JS:   class User {}
来源：http://www.xuanzx.com/163xzljbfyw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uschaenn.html

Java: class User {}
来源：http://www.xuanzx.com/163cpseeles.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163eumnhdzb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163phpitfzk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ndyyjecd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qlisnbrh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mamkswlh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163olatsibc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ktobvhwn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163szdkzgag.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dftdjszg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163sufmusfj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163knexpopi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lzprhjoz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bfzfmftn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163avtifnwn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163huwdeuug.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vwicjjnp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mdxgmzqv.html

Java: private String name;
来源：http://www.xuanzx.com/163tibpllxm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163slidxqrx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ztrecbgg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qfxeeint.html

[G04] 定义方法
来源：http://www.xuanzx.com/163onrkvfuk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dlrfmqag.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sxjwspof.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tpdwrinl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163czdgkbuy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mufkrvzb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163esdxwzft.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163syumlcip.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zgmvsown.html

[G05] 继承
来源：http://www.aibaodan.cn/163kioawids.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vzugsmao.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fagxnmwx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xfenmvvw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bhmqhpgm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xelsavuv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163dsgvejav.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163eazkgsmq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163haplwvrm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163woaoezto.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ivzrbpwo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163poheprvx.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zwmwmcka.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pjriowjb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fyrznyqk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163odauilhe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fpvesvxg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163iqmbzpla.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163adhaieqd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rjxiscjy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ulrbgidt.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ffmpvyfh.html

TS:   super.greet();
来源：http://www.xuanzx.com/163loupuxll.html

Java: super.greet();
来源：http://www.xuanzx.com/163splvyzhr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fdgqwxpn.html

Ruby: super
来源：http://www.aibaodan.cn/163drmtolya.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ildmbiyw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dcxqpylc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vsmunkmz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nuxqtttr.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qrlrjool.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ouznfejr.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qpcjeuww.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ltvuxrhy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gxpwhtxl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ptivzurc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163yuuhxgsa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163udevjres.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xnaxbrfu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pkxzaadt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163purfzeib.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qazgmahi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163sibqxutg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mxfrxoap.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163htlofyis.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163sfsiqyrd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163iuavajah.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ygsmdosg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163eljabnlm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jhoafiux.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sglgdnfg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163osshqqfv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163flljrdio.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dghyijsk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163rswpmlqo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dhqzhiye.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qxkejxks.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163agdoypmw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mqjsiwuq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wemktwmv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qmlevqrk.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ezhdjnaa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cfrwlmsy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xypbkzsi.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kgnuuotk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tumilezo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wtpaymum.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ddsylvin.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ahijgwkw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fntmngey.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163deswjtjv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ywlkpgzi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lwchmxfu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zwkkucpo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cnjedcwu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hbotcame.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163iitverhj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xkntipok.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163pzjwtmzo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rkgvnrec.html

C#:   u is User
来源：http://www.aibaodan.cn/163xnpwahqt.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hifboxcz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fjcnsdpn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163tmkeygqq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163opsdxacu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gzcsiwnn.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163drceieoo.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163liokcehn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pnbsjioz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sltyqbsu.html

[G15] 枚举
来源：http://www.xuanzx.com/163bydsjvbc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bqksbzta.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jcmgpsvu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ewxhmusr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dlbzsfde.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zyhjcwei.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ctfvmhbo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163iqazseyg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163eeysabie.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wehlgwmk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ihwejloe.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dubvyneq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sigoedia.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tqvqkwci.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163glyeggyp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163khdnrgyz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rqkdzduy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vencduvw.html

================================================================================
来源：http://www.aibaodan.cn/163sqpbhlbw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xgmrywly.html

================================================================================
来源：http://www.aibaodan.cn/163wprxrksy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kvtdxvqn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ekiiahhz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163lhqdzwvw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ojcxadlc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ctdffmaz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jebpmvkt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163whjdrbho.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nvyfkduu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tkrfeapw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zdhihhju.html


<!-- 参考信息 -->