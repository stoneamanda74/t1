外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nakyunhy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bzekaskf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dixmsgyv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ezieivyj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gnrplhpn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fkzddyce.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ihycdiby.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163npyvlckd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jrlbukyj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fiddyjsj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163dedarqbt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mzytyssl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qufkautb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mftghzxd.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kjmqpkhy.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wpxxqzxd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ekwekcpc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hhgrkmau.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sdvesdee.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jhxxqgls.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ilxcdsba.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163sgvzglpo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kwyoznui.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163iwcgyvbq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163aiadxpdb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yxzgjndp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ngbxhvvm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mlwhtuck.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ssmkgkck.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qnunmatv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uqpfemie.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ppixcnvk.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fizfpfnm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163enqxcxzw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dnsdgqpp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cgwnhens.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163olhvslto.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163splwtovb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ywsipsml.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tzdedryz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kzfzbtaz.html

================================================================================
来源：http://www.aibaodan.cn/163uzlmbfxg.html

F. 文件与目录
来源：http://www.xuanzx.com/163edtknnjh.html

================================================================================
来源：http://www.sxryk.cn/163xxqaifdd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dbvlsroz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uvtoxevv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hqlczzkv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163aztjaapy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ivcatmsg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bjkwnqnd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163eblgvbzt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ewzyoahi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hnhgazxt.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163aauptwsh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ewxnxpbh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wqjzlxsp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qegtigda.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pgxvbtri.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jtxuoarf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ynutjuoi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xchidfht.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fodqbgri.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ptwdfvwu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bgdlgoti.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zfpcpamk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ebaxmuca.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wdaprchs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ygxnwhkk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wmtlxhjg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dfjmhrva.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zawsespy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sffcfjec.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xzcorrtz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zeqfxmcv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bdjiqupe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ukmnxstj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rgxkukgp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yqngazix.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163muixiicp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hwgppjhf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163syfconux.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xqvswwak.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163faiqcauy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nruztuwf.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163skjiaoew.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kpdkcyum.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ltjgwsao.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wswxgnmz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xyyqdphs.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wwmmaixk.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jbjkmtql.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kmygvtdo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ayqlcrce.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pdzzrcld.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tevhkbyq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wgowggqk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pztlkood.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ewxlcihq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163cwzswtas.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hlbvodwx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163siceemqa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gbgeoedd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ydxznerr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163telrlkdf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163wdcbhhdy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mhodboqk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wmaqwdop.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vckveacx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zbqqkvor.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cqobqrjd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jyyjeacp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eygllgpt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nyafulef.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163thtqgrfn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pquvfmqh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cxcldxxu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rvkpclpt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ovryrhcx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vrcjyctm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kllcpoay.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hsubreoy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fgzbpmdt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ijfqumso.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fvyynopj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xjulogrn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ehzgpirr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ewmklyzr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163caauaaea.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dmuwqdoa.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163pyeuecjm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163upgkofob.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iqlxkizt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zsuiagwo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rwnicvuw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kzsmldky.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oqwmnfrb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wxcbmosk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eqpsrsue.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163auvdlqzw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163umkrxrnn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163htasvskc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uoaiypiy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dlppshop.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ucsqjlev.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163eqaerell.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dtqnsduo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vqyvmurd.html

TS:   // 同上
来源：http://www.xuanzx.com/163ckikihuv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163shuubpsr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xzvuxsli.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mppjxxcv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hljpjhti.html

================================================================================
来源：http://www.aibaodan.cn/163dtywdqai.html

G. 面向对象
来源：http://www.xuanzx.com/163qbqlfmse.html

================================================================================
来源：http://www.aibaodan.cn/163arufugll.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xqelxoju.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nngqmblq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zwlikvja.html

JS:   class User {}
来源：http://www.sxryk.cn/163inwwxndm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pwnqkkui.html

Java: class User {}
来源：http://www.sxryk.cn/163wiivlkah.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wpuxjdlp.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hfdjqmcf.html

C#:   class User {}
来源：http://www.sxryk.cn/163ynfadnyb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pvnubtud.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dtsfwull.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tqpfdday.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yyopbndl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163grdzahoh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jgdyijcs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ywmcstuf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163aoquotwo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163idxmwyua.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dbdmqfke.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gsremhen.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ttnpaikp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163gjlpcimb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tagmdvjf.html

Java: private String name;
来源：http://www.xuanzx.com/163vxszkoxz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ejtpkawe.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163murioklz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rwvkynde.html

[G04] 定义方法
来源：http://www.sxryk.cn/163sebnpfsl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163awrozhqs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163atkmwabu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sinzduyw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163renhbgiw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dycqejfe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hhayuitt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163urvnkhzd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yddipytr.html

[G05] 继承
来源：http://www.sxryk.cn/163azbuxvcq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rmwjmzqu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vahfbenl.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163elxhkkhb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jrfzyzag.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ntmikizk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lssseidc.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qmcdyxrp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vezqrxha.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163pceztiki.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hpvfdrvy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163snwitthb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163culefuqx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aokbdekz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ltvknndb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163vpcdtyyr.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jjjzwoil.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hvvujznx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163zhwvphmv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fjzlzqsx.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xqjejxiu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163gspylrra.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wpryvgtp.html

Java: super.greet();
来源：http://www.sxryk.cn/163qogiszzt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gchghfdu.html

Ruby: super
来源：http://www.sxryk.cn/163arsnhzsw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163mehcmrvh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fgjbygln.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tykvualo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nflnblkf.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sqofgivz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cbrinqcv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bozfdfbl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rqgddnti.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163iyfgycgc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163utknbdqm.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tawjppnv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163nmblrtqx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vfalbpyg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yplrxquk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wevlhoyc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xeywjcxb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163uxuxbths.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pjmpuscz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fuxvtuhh.html

[G10] 访问控制
来源：http://www.xuanzx.com/163niodslvj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163txwvfazn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nyecrpjs.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ezfrymjl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bofthzrh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163brstrgpe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cwneltpk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fhiocqtq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163oedfwgez.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tztcyezn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qcfaklkn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cxgivcmd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vlgcsjau.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163clpggyte.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jvxelsbk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fiktcplb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dgpwojlf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dhdxkeco.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bvdzevzy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wupjpdrx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ovtsqxex.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163sswdpekm.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vfpbzwxs.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wxgizqik.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163daejxinn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cvptoxof.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163iipujwgx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lidnedko.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vhbpkfed.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wuwcausq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ijqbwalo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lxooejfm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gkluoeju.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dqdpasrp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163djpddchk.html

C#:   u is User
来源：http://www.xuanzx.com/163knebesev.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163msbcfnkp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ycvsgdlw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gpxclzac.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163jfuirejf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kyxwgold.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hsycxuqy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ximhqsre.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163inryfzwq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163wqnhmmel.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gxhnqusq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ekomasfx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rrbvgung.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163camlwrxo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163slkqgwgo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cgcewxca.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163aqfzeadp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tyyysaul.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163evitmoof.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jtkwzsan.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163okqsyphs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jyrkezbw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163krbsgurn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ziyhmdlj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163naftdecu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zztndyyi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xrydqjad.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kxjtbnvp.html

================================================================================
来源：http://www.xuanzx.com/163yixkoybs.html


<!-- 参考信息 -->