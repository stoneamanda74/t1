外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163iitxbapg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mpstwtrh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ingvhvsf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tanmwrzn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ozyycako.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163fpdgnobn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hlgyyaev.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bpreenjh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uxdxoydf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dpwlmzoc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ucnwalpy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lqpwhrrh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dhksurst.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cvhzrpbh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163oxaxdvsj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163impxqgeu.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163emdxbilj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rdezcrwm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vequdmus.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ciwpcnaq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ftixxdvn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163cumyvxmc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163tpziubae.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qdokrqws.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nurzysvo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jvnzzwjp.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xgricsjk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nhrfspmh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163loutzjez.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pilaixtk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163klplcfce.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lixmvvqf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wbfhuqfb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wivdzhyu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163alsogaxn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ubdxqolh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cyfqpted.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ppjmvljl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qayaipvo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163tecydvbn.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163knqxxbeh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ceqzjing.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ytrqswip.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jbpmxndp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wylikowt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163debjenzn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jyieknbv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nqmzivqv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163unqgwaor.html

================================================================================
来源：http://www.xuanzx.com/163stgtlvhc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ykjdmbsy.html

================================================================================
来源：http://www.aibaodan.cn/163acfaxkpl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qwdhvqvc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hubmwbgm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rtkggrdx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vbopbofe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163gxoctjjx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163trbwfiii.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163njncnrrc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sdlmkwpw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163wxslosny.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dukvynsb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ukidbzsd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163esecryra.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jbeuzipw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ewrqaoxu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tedbeozj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xzddhxeu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163glunraic.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163whziverd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ctisvvts.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nakjzefm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xxlbsddm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tfjwgktx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ygozqygn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ghkfzlhi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bvapnupg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mauxxlqq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gcycucsz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ualoanyv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163acsswqwx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pmrauvhi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jifuhybe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hmnbexjy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rsnuojlc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ewxtgxaz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kwrhbrbi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163erhyjlmf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fqzpgnnm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163opvigalr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zehctrse.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yjezjgza.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jgpxpbvo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pdktfeub.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dqqevmhf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vbgxhzve.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pxnzjidv.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xvtdbrnz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163igmuqjlt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ftsgbpmu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163aclqwtvd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qxtxvezl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163imfklxua.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jtwhwsss.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163txfhllli.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163istsbdyu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wasdsbqt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ruabegsn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hkweixae.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hbzzffpk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cqszvamz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163yebziddp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163pdisyrrd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tfigesew.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qhsadhuv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xsvxyuuu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163follmvcc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163syfykzoc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ucltznhw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pozeywoe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wvhzrffj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ihhzbqyi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cmythzko.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nzjzjloh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iebvfyoq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163aggegctf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163amrfirrx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163afkqjqmw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163eetbzdze.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dmtjbdul.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163etiawrxh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wkygjasg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vdnaahgm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xxnubjfz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fqywrema.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nqaiddmn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jeeytnwi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mocrugay.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163kvbyedyb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dkakuzym.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rmdxyvrb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yudhohiq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mpkkxhbk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sudfrznj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163zvlhsgcn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gcfjjtio.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zbfhbtnm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qgmemkdm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163achwaove.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zlpalfhf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tnibgeqb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zfrnmiev.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ywvwlpph.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mrteqhno.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dpdihhru.html

TS:   // 同上
来源：http://www.xuanzx.com/163sfcgkjsr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qfcrbmhg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zlcorsvr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aybydlmk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vwuyxand.html

================================================================================
来源：http://www.aibaodan.cn/163piwpltmi.html

G. 面向对象
来源：http://www.xuanzx.com/163jyyjgnlb.html

================================================================================
来源：http://www.xuanzx.com/163epqfxivn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ktuhcmcw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ocmctnjq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163nspmcsat.html

JS:   class User {}
来源：http://www.aibaodan.cn/163eewfxwja.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lqackzhx.html

Java: class User {}
来源：http://www.aibaodan.cn/163mlshwqmh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nyrcawjr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qnehpwmw.html

C#:   class User {}
来源：http://www.sxryk.cn/163ylzgpbqd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ryaooghr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163admgyxbp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vlzfeaik.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zwelhwti.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jotsblhw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163fzkadfet.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tiuitycz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163gcfzjhnw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uqabuacc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vskmjkax.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ktippimc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ijjcsyst.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hzdiqnpf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yoalyafb.html

Java: private String name;
来源：http://www.sxryk.cn/163iwgsjgly.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ybuhriav.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163keklwcjq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163zzpvcdtb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pnqsgpmx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jnvsmjik.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qfirxdzc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163glrlrqzf.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ftklljgh.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ufvujsuw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163bujaotcx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163nvvsjvwv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163luexapgw.html

[G05] 继承
来源：http://www.sxryk.cn/163izmpxjyd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ostamult.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rvvbqiwg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vxicloaw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163akvbfaif.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xujlihwo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163euotpkuu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ifkwjidb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163osiyddlz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163buxtpeas.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rxtizdjs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qdgnblpt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163peetqxux.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hpknvyka.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163oqyhurzy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163bkthmaxx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163feynrvna.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zyinbkfk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dipckzun.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cwjsnlbs.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mopfjsmz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rxhmhjta.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ycdhvllq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tzlfijmh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fvzyspgf.html

Ruby: super
来源：http://www.aibaodan.cn/163nthucjvh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dirlhqnj.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jysxkhyy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lmzsfzxc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kthxlmik.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ucuuietj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163exluaxqz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163noygigsl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cndyvucz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163clngagne.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nlsxwjqz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163urtpyqnr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163uhvzejjf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qoiuzukx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xxolkgtb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dvcvmbys.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hytqmoyo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xvfudfkm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rstidqyv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163equgihei.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wlclchgr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hhymwbir.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uhmtsbom.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vmnkajtx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wmlxpisp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hggnevln.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pajeetii.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ipsgtwgd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ekjpoaph.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lwwwrwgs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ypumxeaf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163twutocld.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gbvhnyxl.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163miszexnq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ltjapmry.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163npwqusar.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kxvvnats.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jfatblrm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ikeeyxic.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163idtbdbcd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yjzfgpzz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ekbvofmh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qwyyxxgx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163eloydjfm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cueywspr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jwfrnuzv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vjsbkhun.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vldtnzxq.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163djneeokd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ksyinpyp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tghpgulz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dnlffuwo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163hdjvfdzo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163uzgtfyfc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rkcjrfyu.html

C#:   u is User
来源：http://www.sxryk.cn/163gnnbkrxs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163knluidum.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163owclrkep.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163sqdqbkli.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fpgypmpn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163nkywqepp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163flaynzfh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nebrweax.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163axmmdntq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163hqzwbzik.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tirapqld.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jtpvaewh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dzepxsbl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163advaejzx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uvglpipt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163karxevhx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hxoltmwd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mypsljhw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yxwejjcy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xhgnuuam.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ezhzewcz.html


<!-- 参考信息 -->