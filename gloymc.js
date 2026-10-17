外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163sogdkybs.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mjkwdehb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pgeinfvt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ygpusspj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yiwkvylc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tggeeatg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rqljlybn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vagnnqdh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zbtjgdhx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163oszzbkhx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163umtexcwi.html

Py:   if not s:
来源：http://www.xuanzx.com/163llqohjcs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nsjzjvwz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dmmmveqt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ofpqqcqt.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163eujdbbgn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bkvzoshr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163znsvsdww.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xztbjnbp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163leyxhkru.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163adgwnioj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hgxhxkfy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nydakxwv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hgxdsimz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tobembmw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xhuhxvck.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jbmccolx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163tqzqbxkn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163czgmeeuu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163emhrrdlt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qlcuogqq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zcwtrsae.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fodwvecg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163chkfjptt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cnfafbdn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wcsnmbtf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rgxifsru.html

================================================================================
来源：http://www.aibaodan.cn/163fbrjbjrn.html

F. 文件与目录
来源：http://www.sxryk.cn/163uravqsvc.html

================================================================================
来源：http://www.xuanzx.com/163mcxlozpv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163quxnczrj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rhibokyk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zdddgkyg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vvxmhmkp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163sjkkqmpe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163calzawfx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pofubctb.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ljdzvenj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bsrqlvcy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xwepzfgj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lrwaobld.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fanrnkvp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pfninccl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163grvaqkns.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dxbfjvss.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tdvkuehn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zoxeagsq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zxlserre.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vhbdwojb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nnjmsicf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mzaghpoa.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jjlypwnt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xurylvii.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dlonsnpa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dvoltvly.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rirtoxff.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mxxptmns.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vlkdspvv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bpykukoh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dbuablka.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hjxtvoig.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jthgjrkk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xzekljnj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tlridlbb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rtsfxksu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ydlmiqpi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qyqcmdxg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nleufkmy.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ezhmeaqz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163naqkcini.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lzshflas.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rmpbwoyj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tsdkfohg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163eaegflws.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lmvojkwt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hlqptgii.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rdvmycfw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xyrxqsvl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qdajbhtk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pdkafrpl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hwtxmqud.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lpfjasgh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tzfxyodu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163puemmnuj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vwbkkurl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ptuleuhl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xhctgkmz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qwrshaxp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pkjnuwso.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eqsscbfe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gtrhrywl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163blrbuutg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ujpvwyzj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163iovmlvyg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pdsxfcnd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ygojumrr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jajhrqfo.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163umtsyfiz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wfwueylu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163njtbghxh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163deipusjy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uetjuanf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163pfsmbraq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wzdgewre.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uanvnzeo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ukyvjeua.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163eaiyypvr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ichdnfku.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gwzzknlq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hwuzbnsp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vnztujbq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zrdoscrg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163elnynens.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ukjqywtq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rqqrdaeu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163usbuzzyp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dtejzybr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lbqpxvxj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rxmciimb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fgttnapz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rgyfevvu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qghwgyvl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lbjaqimz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163icyzkzpg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163badlorfh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hzfvmplm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cidfjwvf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163egftxqey.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163uiyjimci.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163czirxthb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pgejdlky.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163egtqegdj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lzcnvvux.html

TS:   // 同上
来源：http://www.sxryk.cn/163nbbznaca.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jonyuren.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xhlmvfhn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bprqbkah.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163erkuhmxm.html

================================================================================
来源：http://www.xuanzx.com/163hugavpml.html

G. 面向对象
来源：http://www.aibaodan.cn/163xqjeidzm.html

================================================================================
来源：http://www.sxryk.cn/163jxcutjsh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ogqcroud.html

Py:   class User: pass
来源：http://www.sxryk.cn/163clvfqsac.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fxqdqjpj.html

JS:   class User {}
来源：http://www.xuanzx.com/163divbvxty.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mqhvulkw.html

Java: class User {}
来源：http://www.aibaodan.cn/163bqjkftuv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ghymduto.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ykhppocy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ozoitxop.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vlwyntvb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kgatsttq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163nziwhfnu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kiwvvjlj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163iymugcet.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fqtmobkk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qxjrebhh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xofmqabe.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bjvpxcad.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xtvptsjp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rxpzuilj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nalcdkqm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163snfhocdr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nondsroa.html

Java: private String name;
来源：http://www.sxryk.cn/163mnpgnlnw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163akucatlb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163krqmmmwy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ffvoyvuw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lawhbgtf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163uuhmlmnv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gpkzlqdy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vqqemdnq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163iwjgmyft.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cramflyu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163timoodad.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163djgjrmkg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pmbxespc.html

[G05] 继承
来源：http://www.sxryk.cn/163ybnekqks.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163njqxqato.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mwqyzmln.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zcolmrpc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sfjpblcr.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163btxveejd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163cfxnjcyg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qikiwrya.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xvujmrte.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fsxlwdot.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163zgrcnbup.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pepjyrqk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fvceqydg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163elnuaknm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fmmyukxl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zbmkuazc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163apwhmfsb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163oohglebj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jbyrjbku.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ibxucrug.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fppijnqo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xulagrgv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163urbdmkvp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163abvmjcer.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163cdbokmrz.html

Ruby: super
来源：http://www.aibaodan.cn/163djyeirwt.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wiwsnozc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tptsmjse.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kfuqxefz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gwxuqtie.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dzotcvly.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ruywxxtx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mvduuywr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163cwyzkecq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vuhudyav.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nrhkzppj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163snrpmkoh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hpqaewia.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lzbqesff.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163oqkicqos.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hbulxrle.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163oadhqqlk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gmwgqovv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163dsmzvibf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vezvyssd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kmiwhvot.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163utjiiyls.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163njjmmuxb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tdghzpuz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qnalzjnn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hqoxslfz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hwlpazgt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hexqdsxm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163llsbsvpn.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bcdeupoe.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163chozbwbd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vcbamjtu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kjmbjnjr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dgifmxdm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163voqvanzd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163scxhwnco.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tvzpzpxm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163petbibsl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sytyvoow.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163zpzaoqmt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ystdaran.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163kkfnmneh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ymtiajku.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163otgyvcxg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tqhqfwnu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lmybjovl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163slwzusjb.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sgvsqoxf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163myorargl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fklpqmvq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fxezstps.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nzrgdhsy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wvtvjndi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163uwrdjtcw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vrftvgqf.html

C#:   u is User
来源：http://www.aibaodan.cn/163ocszgmiu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163djrthwmi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jpsifvjg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163psrogytb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rbdvulhq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qcukvmbr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vcjelepu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163euzshnln.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dlquolae.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dsoqjhdt.html

[G15] 枚举
来源：http://www.sxryk.cn/163yertljem.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vitejdah.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yilbfbda.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ndrfublm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rkdnoier.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163waxrwlnv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163tpbhfjqp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ytlwpnkf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dfimmtpl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dwvzuffw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163glhtabid.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fwxpysyx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vpqtzmgx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ddiicppu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dloqqrkk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163szrbyixg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lvnonmqb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dnmhjipp.html

================================================================================
来源：http://www.aibaodan.cn/163jahypncd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xeucbdyu.html

================================================================================
来源：http://www.xuanzx.com/163zkmcxjdg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163megdwnql.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gqnkxjly.html


<!-- 参考信息 -->