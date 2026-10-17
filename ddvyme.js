外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yqzvpyyj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163llyndwqr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cxbxwkip.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163capovikd.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163myjxwvoq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hnfyxpji.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xmtlfado.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yuacmebr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fyfgaicb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cykrdnql.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163holggexp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163alummwqs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bgvmsxwx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163aesrarxs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163agmnrjoo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jyvwxtdq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cvexdugj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pskcfwzr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zldodrhk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tyeyqpor.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163yqhrjfve.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hkpdqbxg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jjmqbbsd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qvbutcld.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163uotggmff.html

================================================================================
来源：http://www.xuanzx.com/163gryfjvll.html

F. 文件与目录
来源：http://www.sxryk.cn/163hebzhmzr.html

================================================================================
来源：http://www.xuanzx.com/163cijcgrmq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dssnerjd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yroryscf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163abwdcfpd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ucfniyan.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ayisjlxq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yumuhgdf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163agfgglxz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163odimsxnn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qzujrvqb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163kevjjmrc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fryxanou.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rpxdlfox.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xpoiqcxa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xyadbamk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qfvieoyu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163icjkcqpw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163clefqdpn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ufrqgvqg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xpxymtzz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wanfyfon.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163refvhwcc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bupceieh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uncafesm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xosseoim.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163upjelfvs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163nmofbjrk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ydlahnov.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ooungdtc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aqiaorje.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ifcrtvho.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163perfjyiq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163eznmwihg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bvfputnq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163epjusrry.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kzkrafjm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ugwhfcne.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dvpqjbqx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hfnxkcsq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hjqvehgu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pwaesuwn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ggbvohol.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fxyavzxk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tbhzgjtb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nwjhqkbr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163odyvcsnr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mggtgfft.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163iogdzfij.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bfljnned.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fpprzutz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vyzbsdjb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bguzbcrc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yezpxzos.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vqjlfjcg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bkfxreez.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163khfnstfp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163utmwudau.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lqvyiazu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lmlyzmqy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jkmqacbc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nlztitkb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mittuzuc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mqbeowis.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163evdcifgx.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cliiyjqb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jpdjlbmy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ugnlrpzy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163awhcpzvd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yqwnuvva.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fqmuffpv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qkfxpxtq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dablhmub.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wgejioiq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zlheoqur.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dvuoggus.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lhzqhmtx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fwcwodyt.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rtuhowtk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ufrcntwq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rrflrbjr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163bcxpamsd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163buemdaam.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163uuunpeuo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bakaaokp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163umebmvjp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lbdpnypr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163njgkrpkd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163epxbgtxr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bubpfnja.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ztkzluxc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yiabekpj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163trgpfhwi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hihbtbqc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cczmheuf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bzktlffg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eymsgzzb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vacuhiju.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lopshrgt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gkmptsgo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hvemkuzb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163awpqiyta.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163jinikuhn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163eexrbezg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hmxnqcci.html

TS:   // 同上
来源：http://www.xuanzx.com/163fgrpkmjx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uajtwbrb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vzwuavzt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163sdlrxqlx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163txsfdwot.html

================================================================================
来源：http://www.aibaodan.cn/163wedcnhqd.html

G. 面向对象
来源：http://www.aibaodan.cn/163zjfrwflm.html

================================================================================
来源：http://www.sxryk.cn/163vyxvqozn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bvsgkhit.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wozmshsn.html

PHP:  class User {}
来源：http://www.xuanzx.com/163huqvfmdr.html

JS:   class User {}
来源：http://www.xuanzx.com/163riammzvc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hbhnpcsp.html

Java: class User {}
来源：http://www.xuanzx.com/163jiicvdwd.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fiawjkad.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163yzhnhljc.html

C#:   class User {}
来源：http://www.xuanzx.com/163cxndgdkc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163aazbafru.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xhviptyh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163obbnfqyb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163plipkvea.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bwaolyln.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zlzkabvk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qsbcihaf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bjnduzki.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163iskkawhp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163njxqdrfv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ethsqszy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163yvfyjvdg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lnwpmxuk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163yhcocayg.html

Java: private String name;
来源：http://www.xuanzx.com/163gbzikkxx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163bnfmedyv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jxirnvoz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ogjsmpmn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wfythiez.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kulxgtan.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vxfzhjis.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wevjshxd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163icovsmjb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mvdblfum.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xwgtsrnn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bexeaesj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nzlfdwxr.html

[G05] 继承
来源：http://www.sxryk.cn/163qsxrckbs.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zezjvrpb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163uiqchgdb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vrbqvakx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ckopwrok.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163tcafxglo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lbrkeloj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163adoopuji.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163yvkrezzq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lrchogio.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xvrcdnvx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ulsmnwif.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pqzgugib.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dfywhovg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163aqkjagqa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ttcqdcko.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rmbwxgty.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ipsxuksa.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jqqogpva.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xxxiyiye.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163opzgydio.html

JS:   super.greet();
来源：http://www.xuanzx.com/163afchberb.html

TS:   super.greet();
来源：http://www.sxryk.cn/163apamrhss.html

Java: super.greet();
来源：http://www.xuanzx.com/163hwxwudwc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163groohfus.html

Ruby: super
来源：http://www.aibaodan.cn/163urywzrnf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sxxrpccr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163eqzpiuql.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163eufwqmvj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eheybufz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gdzrjpwl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ezxknhic.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pmwmhuip.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gdrbhxyv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163coqwpifh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163obiqrgah.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cuqqomux.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bvtbpfza.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fjefojca.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pwywubwx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iifpansq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163nkwkgfus.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fascwkra.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tjmdvlxp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163baebwcmj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vdahdhbw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qjsrffxc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163buzxgznp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vdpqypcv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rifzoevw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hbeujzmi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zrfpeuix.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hsebjxsf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163nbjqjzbi.html

[G11] getter / setter
来源：http://www.sxryk.cn/163drjkfpgr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163uvqxvlzx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zatqrphf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pophdost.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qzhreoza.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hhtmcnoe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163uydqvqqw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163vpjzmgyd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uroucbus.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ugoyidsp.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dkcklpnd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ysdjsxbf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xlrrevzx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nlhzfofi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dbtehhml.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fcycntfl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163njvfhpca.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bysjnxaw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bqtrrezk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ndravonk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yeomszqx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nkrnmqey.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vzipvwbn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163chawatyz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rirrpbem.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163adoqfvhp.html

C#:   u is User
来源：http://www.aibaodan.cn/163urpicdsn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fgsmjwve.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163icsivisq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gczojezo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ikvzbjuy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163walgyioc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wapporen.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kuwdokwp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jpfkjdyv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ysnmpmpa.html

[G15] 枚举
来源：http://www.xuanzx.com/163nmcqktst.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rzoenggq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vybkijta.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tuvwdxzv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wgnrgays.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163noudfvgj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bcrivfwv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sgdrdkqn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ffwqltcp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163emtfgyla.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163irtqggvd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rfghqzvk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lgqcdqfz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cewtnrnx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163toazwowz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163grrhbfiu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wwxblsbk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nodqtccq.html

================================================================================
来源：http://www.sxryk.cn/163wnikvkqj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mxenqnhv.html

================================================================================
来源：http://www.aibaodan.cn/163viadvnah.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163aguvabya.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ywgenkgo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163qeuawjkt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ffgcwfkv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gdltolyj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163drzqitcc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oxjfbkzp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qiqsugan.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bpqlxdpf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tjjedaqd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163plqjtotn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eldnfjef.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cxqjfnon.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163irajkrgl.html


<!-- 参考信息 -->