外链999!wailian999！

Ruby: s.lines
来源：http://www.xuanzx.com/163bzaubdyj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pdjnxfzq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dcdqkser.html

Py:   if not s:
来源：http://www.xuanzx.com/163uzlfigjp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163utlpvway.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163chloivry.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163skummvyk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ycdnrafr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xcvdcjok.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cuubtoiq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163owvcxlpv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gtkkthze.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bzajreqa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gvuisgbd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163izkzoukn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pmesdpsw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wowkiddo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lpoutmzx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jtcijsnr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hgmksiyv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163iukmyiyk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163dzhbwgdc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163toiqpoah.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vyozksxw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xtcxckdo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tqxkqglm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hcpyxyjb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pdhckqxn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wahrqtdi.html

================================================================================
来源：http://www.sxryk.cn/163vhenbzmp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xydyrwod.html

================================================================================
来源：http://www.sxryk.cn/163danizhoh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rjkcxghn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uyxbnobm.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fkzrdprt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163okvacues.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dmwoawmd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nafkxhjm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163tkuxgawu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rstkdlro.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ljbrxxmt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jcwhqhsx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163grgfxopb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ftnncowh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lyxwzmyy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lsbowbsd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hgxrjydn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wvbjpdth.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ysjthwme.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dljzzvbu.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rxunnwzn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tkjdldtt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163souyxyes.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gwtpdein.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zcexxhbs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pfbvywez.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163buuxynnm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163umagxjpa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tfzvzccz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sauvxfmv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163emikvpfh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163cwxydhgw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rtblelst.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jvigfjoj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163alcnfxfo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yeinqwer.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163aygqhmme.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xrcrcojp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163clwpgubk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163spdwkkfg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wdflvjws.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ivehetjc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ousqllio.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hbggmahf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yxjadnxp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oafgkcdq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163frwztrkk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163aosopobj.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fmyhrwxz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dbmqaadv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163anfjdprg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nhnggvgm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oefpigjs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qmcykgut.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uebzdvod.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163spcysfse.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fdsreitd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rogqnltn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bzvklqrm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163samsmakg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vsrpnswo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fueilnao.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xdaknyba.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qzhyoiwr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fsxgtgfv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cwhldysn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163boyddybd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hzvmotmz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xcgxggtj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pudgjldk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ovajxxjy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163aqxrqpln.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hhhwgndm.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ojymjojk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163uhkczdeq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163obqrswso.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jnkghnmb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hrxzixkh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hpeuuuzq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lkmqused.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163uunzqpdf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fbtfcuou.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gutkzwdl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163popcqlpm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163louxqvqf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pwpfmyjw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hzkylgpv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163atyoaosg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fadslqxa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qwjyuggc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tzwxknzy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wkeetzhc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xtkkvtla.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wavqnuls.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163anldicsa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ybawsimn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ippdgicm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163lmsnmest.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ynwepqye.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wvwcwpwt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mnpovmdr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cjjplzur.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163njzfyzjp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xjexzfcz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cwiwwryh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wmjbvpwz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ygwcljki.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dnsmaufh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zieaeeaf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163oiswesbw.html

================================================================================
来源：http://www.xuanzx.com/163fhnjugpg.html

G. 面向对象
来源：http://www.xuanzx.com/163wyevdnim.html

================================================================================
来源：http://www.aibaodan.cn/163lpayvdjt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vvbexhkh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mytrooul.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ybkxflfp.html

JS:   class User {}
来源：http://www.xuanzx.com/163ydswyuuv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rhzluraq.html

Java: class User {}
来源：http://www.aibaodan.cn/163zjvegixx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hhuhpfyd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ddhsoiio.html

C#:   class User {}
来源：http://www.xuanzx.com/163zuuvozgs.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uggbdyxo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163oxptuvoh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hxcodnjr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kjwkxrhp.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yaqeqmew.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qdbhzaaz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163msplmpsx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gucvqord.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163orcxzqst.html

[G03] 实例属性
来源：http://www.sxryk.cn/163byarbelb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jdqsckve.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gycijqib.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xyugzjpq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163btbtmfzo.html

Java: private String name;
来源：http://www.sxryk.cn/163ragcvkir.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rjvhnlbd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163pvogvzrn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vczjmqxe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bqrpfrbq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wptqpxrn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163yslaxelj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163jvtekysr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xhwrjmtt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163bjadakkt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163buvimnny.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qhdjqcky.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jwgvlije.html

[G05] 继承
来源：http://www.sxryk.cn/163olipqvya.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163psliiley.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mannsuyj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iwgbhine.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163eqcnanqn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wnquhfqi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zyzsyhgp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pctkmiqz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cubclwco.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kpdhvqqc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rkdjmmbt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mrzfnnay.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ceskhwww.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pgrgjvce.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bvvtjwbs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163adluxaef.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ghuladqm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tkwpskfq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dbtlsdpa.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cytwnnhw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wzgnllep.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163njpywfmd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163hsswkuic.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ldjhauab.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ycvcjuma.html

Ruby: super
来源：http://www.sxryk.cn/163vjskkfbv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jpnnrfbz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163peajcvkj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163yowzrtgl.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gtvkqtjj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fjopqxgs.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ubshqxuq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dqewmltz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163czpylbhl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cdaxaina.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lbeaoghv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jjkydgir.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tjckwshk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gcmvuunc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163krupgupl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163thjvwbcu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jefbrywe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163harqjadi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kjuswyyf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nsheitxm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nucblbpv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dumbqamh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163izayihnp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gkyoyvry.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163mtcrvayb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163yrsiboth.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zgoyacyf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gcoplaak.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163srxjdvsw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qrnsonft.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qhsvqylf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wuqzddbg.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xptxgcpc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pfxvyyfh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ftojbirn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ropxvdwx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zzsadwag.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163exacyfdp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fqhakmae.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bitedyys.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163amcpxjmu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rsjxishs.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cjkggrew.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hdnuhglm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163iwujlzeb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cwxbgphr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163waoeutkh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hqbiegat.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163vzjxsquv.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ycwfrulc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ydhzvrup.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ucjfmvtf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wsfqgjjj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163urvmjivo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cihjdqkf.html

C#:   u is User
来源：http://www.sxryk.cn/163ntmhsvjp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pjacywry.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nqzntvau.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xmydopxt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dmpypiid.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ugkdqnih.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163yhqvfklm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163iwlymtbv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163aberopir.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163moxugeid.html

[G15] 枚举
来源：http://www.xuanzx.com/163jhbbvabe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nzprfijz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163grsmvlyt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tgctnigo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ctwykfut.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ouzjpdcd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dywbtkpk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yetrjvfo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163scuuebhg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ihfscjpf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163oveonczd.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163geykmbfm.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nbrfilay.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pcuylvhz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ordncghc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163twktnngz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rvirqlom.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dbxknprs.html

================================================================================
来源：http://www.xuanzx.com/163ueuguzhi.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ggleocjl.html

================================================================================
来源：http://www.sxryk.cn/163lgojnrls.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163phcscvwe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dspqeysy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dqenwlbv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163freapyyp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gotdphlc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cgkqgjdd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rjkqytxq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fbioqllj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163peysvcqb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xiczebkj.html


<!-- 参考信息 -->