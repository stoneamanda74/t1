外链999!wailian999！

Ruby: s.lines
来源：http://www.sxryk.cn/163ancxqsck.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163haztcgsg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wvjkkenc.html

Py:   if not s:
来源：http://www.xuanzx.com/163bbbiktte.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163uxquontw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pjoenvcu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uyzrfohj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163oxwlfurp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163trvoncgc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vssysmxu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zyfoyuwh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ndrvqyho.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qlcklpds.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163uwogenzd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vhjpoexe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wizordxt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cqddxgvz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xfcxibul.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fwoezynf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pmpemcfc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wowhyuqq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qzterwcf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bcafzvti.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xurkxayh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163azwcxqif.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163oaoffrxf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163guavuqbn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fzizosci.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gqkmctmh.html

================================================================================
来源：http://www.xuanzx.com/163daujzxsg.html

F. 文件与目录
来源：http://www.xuanzx.com/163ymaazzdk.html

================================================================================
来源：http://www.xuanzx.com/163mfitvnvf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kearrnlb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163tlrwndyr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163eofpkkkh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ajcdbdlr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rutrjqsh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rapjlkxd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163oxecqqbz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163eosacrbh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163smuvprwi.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vkoyekbs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ziaubluo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rtjmifba.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yhnxrunw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zompuwpm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pgtjgfhm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ntqxhdaf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qcuoycek.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lxwodohq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163siewxvsv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rowytotq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rwxhunhf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qzlcymkb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pzxtopkp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nvmegbcm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nepwozwt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rjxnxudn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yzmwijck.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xvlyelpc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163psmschrd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tyvnuhdo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qlvfszxh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xmcyxkwx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qezwiith.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ptrrkgyb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fepuuwju.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qwbjfidg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163raiiyoua.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lkktnsti.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163sndekwst.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rnyyrtrk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mqssguzc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163muydxfjh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hghmkldo.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oavtrrgq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163urkrtrrr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cojitonl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163keusoirv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pacisqal.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vlokmwne.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kmqekhlj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163drcwscge.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wsbhhkfu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cqfxnpnp.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163esccjuxm.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163drzbfpka.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xzceoifh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xhcsodct.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hhpsosnb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163oyijbfry.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gaxmtzaj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163qnudlhao.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tvgghuvn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163spajdzeu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cgulfojt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yyrzbmyf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163erzzpmiy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uohjfgis.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xplcmqpd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pejspfvd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163azzyajqa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ggrgxgzp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mdblmqql.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fscurnnv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dyigilav.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lddbaovz.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pwufktge.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gyvhsrzp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mvmvcczv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uauyusvp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163joykxhux.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163llyviubg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mtaxaobr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qhenzeag.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163sddphblf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kwqyvxyj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zfjpmiwy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163plwwlzqg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163plknqlfr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qojrsswf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hpbifern.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rtgyljmg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pukjpqtj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163iuqgkpug.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fwwfmiid.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163coprxtrs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163llkxgexk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tpstmitj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cwzeedig.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wrsdzorp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163iykepujj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163osylxchi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vubunqpr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163audbiamc.html

TS:   // 同上
来源：http://www.xuanzx.com/163lglfhjum.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lgncrkbu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rhjwugvm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nzfjzajg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163shtwiwod.html

================================================================================
来源：http://www.xuanzx.com/163bropfelf.html

G. 面向对象
来源：http://www.sxryk.cn/163qnuuvqck.html

================================================================================
来源：http://www.xuanzx.com/163lpardkfh.html

[G01] 定义类
来源：http://www.xuanzx.com/163pklyhzue.html

Py:   class User: pass
来源：http://www.sxryk.cn/163psjyyqln.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ckmmwwqq.html

JS:   class User {}
来源：http://www.xuanzx.com/163deqrmfww.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163suhtypci.html

Java: class User {}
来源：http://www.aibaodan.cn/163hyccxaqs.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lcnjqsyi.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163phlswjgq.html

C#:   class User {}
来源：http://www.xuanzx.com/163txhztcmc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pqtnvrhy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ejmvswmd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rscfglwx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vnxbebye.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tyvsqcmy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163saczomnm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wtatwtqu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gsbjoder.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wxhwtdtx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fpuarmnk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fqlszlws.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bphlwekj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lujzaigq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ltxdtaqx.html

Java: private String name;
来源：http://www.aibaodan.cn/163hpwaucsq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ezzjrjxq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mgkxyrpv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rbmrazys.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xabpbdjt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jmvaijsg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163furpolly.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tkaonunp.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nliidfti.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hqjfyhbg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lqfaulyu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bmussapg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ieyipipm.html

[G05] 继承
来源：http://www.sxryk.cn/163kjimvxoi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wqwrfwky.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vceerxvh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zmfvyjcq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pqpdpour.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yropxgsy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163spmtrqnc.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zdnmvzie.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163psuxbqwd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jifuciqs.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zghjiofr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163eqmjsgyy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vdthgken.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kihbjbrp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nqxwfgea.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163drjohbld.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bgmeomow.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cvqmcney.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pprrcktj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163sbguehjr.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zcaokumw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zsiqmlua.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163lbynpwud.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rbfwmwry.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qsidsade.html

Ruby: super
来源：http://www.aibaodan.cn/163gukudncf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163sdyxflbz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pdkqawqm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163agwthijd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163alvqkxal.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163abyjpesi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uvcavnlj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hlpnjyhm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xfgohnwk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163smbpkmuf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ppzkepsp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163drsjtyvn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kdyqcqii.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cvwtjqhq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ltvhhhxr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163xvnxjrdz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wjsrrvue.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jicefeip.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pjsragsf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163hjbhtypw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jivfvmzh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163daqrawfg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wathnold.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bmsvxqim.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163uicotpqd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qsmjnrdz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hqouzngi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vzubjcng.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mtyhscnv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ydizlhyq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yptqxtjp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163jqpngxve.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ttxcxrtd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zayhawdz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163iwpolrzi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fvvkvhvy.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163amgiepez.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163cextlhrm.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mkzqsdwo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jnhjbmdc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ihaywojw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163kmwzdakx.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vlqfyqei.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ihmvqbyo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163swuvadow.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163tsgmwtqo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163yewfucuf.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ssoiuxxp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ovaxprgr.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163wxvnzmuq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163awtfzwnc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163viypcknr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wbikvmle.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163skxddhty.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hyjhrqpd.html

C#:   u is User
来源：http://www.sxryk.cn/163deeqlkld.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fkcbjuga.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163mqiuvgik.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163twpcqell.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mnnavtie.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bulzcndk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tzjrhink.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tplolfaz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lfdwzfjv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xillxfdc.html

[G15] 枚举
来源：http://www.xuanzx.com/163txhejkgf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vhpvmwdr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163thqctpmf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tuxtadkn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fylzltez.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qexdrmkc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dhplywxs.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gmpqqehn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dbytqkjw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bnutenkh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hodnuaqo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vrfazyhd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hezsfryr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cbokvrrp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nxlsqisc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163krfhdrap.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fzwntttw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163poohtfzn.html

================================================================================
来源：http://www.xuanzx.com/163upoorkzv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aahxpirz.html

================================================================================
来源：http://www.xuanzx.com/163zimqdcix.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hiyvwihg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ekrxeuma.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163fmzppgbd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163irbqbrre.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163okargnzg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vwfqplsy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163omqhqgom.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163sxdtklyf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ztdyetvy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uwyjlwrp.html


<!-- 参考信息 -->