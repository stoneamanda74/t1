外链999!wailian999！

Ruby: s.lines
来源：http://www.sxryk.cn/163bedicrsm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163oyjfpscn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lnzhdchs.html

Py:   if not s:
来源：http://www.sxryk.cn/163fiklnynk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mlcqcyja.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qxanncjr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ijlrftfc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cdbaiqoz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163luzwnema.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163mzhwtuhf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fwpqjgka.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163toxvlhcu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vztjdwqo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dktufgyj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163opduugwr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qsssbryk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kgawozsa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bbihwaki.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163olhczvsk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qmcbvyur.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vpbrofbk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vjnvhfdc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qhaxoufa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zulcwply.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wufnzjiz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163olmifcvt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lgkszwqa.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kjizvrfq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hxxikgbw.html

================================================================================
来源：http://www.xuanzx.com/163binzqcpg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163danbrerb.html

================================================================================
来源：http://www.xuanzx.com/163vogqnnwl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ysrsrecw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ygublfaz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163khlgozck.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bypkaxoz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163batfwrjm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lxdgfubp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163llfnkplj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lobfluzt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163temiwsgm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ywnxdvjq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rtypbjbp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qeyixkpn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qtnxromz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163otdwnveu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xnkoelry.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hqiqenfu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163tixwuiqn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hokykgce.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fsnlnuuj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hypmwpci.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163upqorege.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hrantgvf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lajqyjiu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sealivyy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kieovmvg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ypyqruea.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ooguseng.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163afmxdyjw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tgajcaom.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kqrlrshh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gldwegwo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ioczquvt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163cdrqvcpu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bvxitqlu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uuimbmns.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163duofzqwl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cpwkghqu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163egkyzjeu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cbxlhjfc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163asnfvxmi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fpuwcaqk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pwxkfpsk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fmkammxz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ptvjbmue.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163sztkoler.html

[F06] 删除文件
来源：http://www.sxryk.cn/163yjevnsxy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jaovfjej.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qyxolwdq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vzkittsw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jyjqlbeb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163stylrjgv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lewbznwx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oixezxyb.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nbqzjdhf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xvzqptxz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qlvjbwkn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163krnjncnp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yfmslzue.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iuivhmbc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jydruyiw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wyukmsul.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bxpifvgs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mosuurtt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uwtmgagb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fckrultx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gstzengz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xaygqpbb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jktcgrgp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ooviorvo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vimyuiuf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163odjkyxlt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fubybrdx.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163djmysece.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163aaaqquou.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ovxtvibk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lcotjcxk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yofuwjqa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jqktblbx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163joblmyoc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163oastriyl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pzvwldvy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163whjgmwjt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ioxezbfu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mkyaeldw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tetsvurk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xvdkowwo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bojbmmno.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wdzregxt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mdgkaeyq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hddeljff.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ldsiykfm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ncwmybut.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rawlkynb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lhwqqufg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aqsmkpqy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163jfaqneix.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qxzsrtem.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uppknmgs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fdecupfk.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dhbyrhzw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cixgsxsb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zztrykuj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tiwhihjc.html

TS:   // 同上
来源：http://www.xuanzx.com/163sksbgkik.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rtjyzcor.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xdjebajy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163urehfwpv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163edtewoip.html

================================================================================
来源：http://www.aibaodan.cn/163arwrltho.html

G. 面向对象
来源：http://www.sxryk.cn/163pwcngino.html

================================================================================
来源：http://www.sxryk.cn/163hqgfoxtx.html

[G01] 定义类
来源：http://www.sxryk.cn/163xbglofia.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163edfvtelk.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kvijgbtk.html

JS:   class User {}
来源：http://www.sxryk.cn/163koqawwzg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rxbxecuf.html

Java: class User {}
来源：http://www.xuanzx.com/163vifzbxtz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nedidyhw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vxgctbmj.html

C#:   class User {}
来源：http://www.sxryk.cn/163myowcpmv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rivkaagn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nmeaxapi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oyuzdcgx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tndavvsx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tjvuwnkt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163klelutac.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ohwepgtu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pcukjltx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163coqwrnrn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hbuafgjy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163iglfmgiy.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kdsybzel.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fvsxqxxd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163paoaggpy.html

Java: private String name;
来源：http://www.aibaodan.cn/163qkevyvbe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kihyjdaz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mkjphxsn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163owzxlnlm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lcpfcktx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163tsrtqfyu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xfaxrdpm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ruvkcmyv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kddnlely.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163plfdnlce.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mgorvnhu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163glkqaugg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163atphgmnb.html

[G05] 继承
来源：http://www.sxryk.cn/163bdovudlg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fcpnkyez.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163urzbzupz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qiqbsgnl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fecrrfss.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nysvfvse.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ovdvimnx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vuayopge.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163geqsbaju.html

[G06] 重写方法
来源：http://www.sxryk.cn/163iogxytyp.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163egnhepov.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mnhkoxgn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ugduqzna.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sjsezxga.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kweklugj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fpsrsbwp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tephdgsy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nhgrfehf.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gvzzoiyy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gvrawouz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uhgqnufz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oisexqxs.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lyydndfi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rdfdeyhd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163eqapykej.html

Ruby: super
来源：http://www.sxryk.cn/163emzjlytd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163mpyautys.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ykqhwhvl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163turvhmva.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163eldvvrpt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dfkyzopj.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163uurchcry.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163iuvuruik.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ugzpises.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dkpkimfk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163loynyyoj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ckbnjhbv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163corqmksq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gooypakp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163czvduhur.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bqjwxnta.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163eoolublo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163mprdznip.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tmtnuwat.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mimypvxl.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tuaujtqu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zbipttrb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163btmomkjt.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163yxvlpytm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163srqqzpbz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vmjwnvdt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zhgtzzrt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uotkawoq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163epyuizph.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mpshpemi.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zelehbud.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fmngcqpr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yyatxcrl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bevdcfiz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vspvaqcn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mtplvuzm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163egrzrocs.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tcadzjvn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gokuwlmf.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fnxkkags.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oywgngpo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cjihcenn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mfqejtup.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nvbnoekm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163alqbjmyb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rcsyqlnv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ilvsdxrw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qfpexmjm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xojzkufw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hnybsjdy.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jvpzvylz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fjclpgul.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mbilbveg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qfpqmszp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ksticmbd.html

C#:   u is User
来源：http://www.sxryk.cn/163nesgpfbr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cvgyvdxp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xomcsjkp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uqspurkh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jhsdokfb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xbwvelht.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hsxwvrpq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163nxholpdc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163niwxdekg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gjgsbdny.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mdsfjtlb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xmvfaqdd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163yozvtwwn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163glahggcc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gzznuylr.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163txpzuavs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163keaxypkv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mlykqble.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xqbalbal.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dishtpbp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zrairxul.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163esavmgzr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163exzexmph.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lxadadth.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vyqszjfw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jupgwtbq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xduyapsq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lexkynmh.html

================================================================================
来源：http://www.aibaodan.cn/163kvphwekt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aaumbxgw.html

================================================================================
来源：http://www.aibaodan.cn/163qturdsjl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163btifbhki.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wektiwby.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163njukumde.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163satcalog.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hbichkih.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qtlmzsbt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163coyhutct.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163grywwxqi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163abgutenr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ebicqsgh.html


<!-- 参考信息 -->