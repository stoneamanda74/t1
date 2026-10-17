外链999!wailian999！

Ruby: s.lines
来源：http://www.sxryk.cn/163yobpmcur.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163upwcwzkh.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163skfxgqwj.html

Py:   if not s:
来源：http://www.sxryk.cn/163vgsiiztu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163urpikzsw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gpyzivsy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hcynsrcm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163tngexzch.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jfvoemrw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kndnmcnh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163thfhfaeh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qhnngywc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163exgmtqsl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fcsgpvpa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mijfzyut.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cgvdahja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nbqjzhgi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163orapqewb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163cjqkhyrr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pzllvfpt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163aqmrbxwo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163boakhhoy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kdttddsj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rzxwiulu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wjgcnrog.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wrdlotil.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ycixdosk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163raggfwtm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163lzpflevc.html

================================================================================
来源：http://www.sxryk.cn/163yfriynvq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wanasxhy.html

================================================================================
来源：http://www.xuanzx.com/163tnxpsqas.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xffxhzle.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pyhgetap.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pquzbeov.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163csrzltcs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163unkzciqs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163puyqdccl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nkxypllu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fmlmrzlg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bchvckap.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tsfolkpa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ggghpcmb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xvtwryrd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cezhkjpi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rkywqsyj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dxevcjyu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ryfofzcb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fvhphnfe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wecpzwks.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163uiypecwh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163snktwkhc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gcxfxvgq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tjqtkxum.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vsuykfta.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163tjcdutgz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163whaizbrm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ztyurcvn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kqqfavhd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163khuybepq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zrejhmrf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tukdihos.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oahmpdaf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uuuqiabg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fudnhmun.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vdnzfzwh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qhqqpuak.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dsffwtrd.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qglcgysh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kjozfzdo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rchfleub.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cltfukss.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ptfzrnwg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fneljwct.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163akmqhjgz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163svdrvynv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eseunlmv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163daedvbiq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ijnfacig.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163aaynospc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iucpcuhj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qrxkuzjp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163howdgdbv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ezxhiqkw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bgslphbj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163umzrrvni.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jxmyfezz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vytdurug.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kuvvqaea.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163roojnwws.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mspcgtpa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fnxpxpqn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lpzpwhvc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bhdyvwkm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gpuqlear.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163efmzkyld.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sorxiqiq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ubdiarpk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zwnjdgjb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163sgqrgcib.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vqtyslvz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163okuwkees.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vsvfklvl.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kbovvbyp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xsupwxwo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uufbqbpo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163agcvmegd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jpgkjjhn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cberdzxo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ejbmgljy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ftlghngd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jmfnbdah.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mmolddcw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rekqcbox.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xjqgneyn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163mtzomubz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zznjzkyn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vlrngeat.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zicuzgei.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yyguwxfk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tawybyrk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yeanbthf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rgrhgsgz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ywphsyrj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wcjzwubl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163omacdryo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dnmjvjnc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nkivnqen.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rojeyvqx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wcsdxlii.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163iycayxnf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fditcehq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163dtygdsbx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bqakycan.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163azmajtsq.html

TS:   // 同上
来源：http://www.sxryk.cn/163lkepgqin.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163riirvbse.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ulftxijm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tmhamxyv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ceghxfrm.html

================================================================================
来源：http://www.xuanzx.com/163bwzxpgoq.html

G. 面向对象
来源：http://www.aibaodan.cn/163lkspoiqc.html

================================================================================
来源：http://www.sxryk.cn/163tcjxzmmd.html

[G01] 定义类
来源：http://www.sxryk.cn/163jixfinjf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163brixebbp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ndsgligj.html

JS:   class User {}
来源：http://www.xuanzx.com/163rlmmbsgq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163liczaovo.html

Java: class User {}
来源：http://www.sxryk.cn/163idroiuaq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wppldlfk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gzgzjexq.html

C#:   class User {}
来源：http://www.sxryk.cn/163fezoqxem.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fnigswcr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163yaubirrg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rrcpydbq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gnvtmmxh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163vhzqiusg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163frzgzbpy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163tncjwvlw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bjzfdcvx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163udghajhc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163quuykjgs.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nxprgiol.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163wgggcmyj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ljzkwoca.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nwzbzmeh.html

Java: private String name;
来源：http://www.xuanzx.com/163saxhphci.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lfplhuds.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dsjnzken.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zjhewgyc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ropiayag.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vamzxyav.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qbvzqpzq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xeztsmge.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163gykrcbih.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wmayproa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cyrdpepn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163odckqvol.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nqjctegp.html

[G05] 继承
来源：http://www.xuanzx.com/163prmevjbq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uenayrtg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cgzjoots.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ohdojizn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163olhnygbk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lwjtloqo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ssrjvqfn.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ngpghjno.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lyiqufhm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tdpskvpd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cdsbcysd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ntsbecuh.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qobxnznw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163joqllhyr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pfxhpvci.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tcjmkncg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ynzfqnjw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163aquxfonm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fxjtikhi.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fqjhodke.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wjgfnnne.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jlqrnutx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163eaxdtord.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qwnlollp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163atvpjhio.html

Ruby: super
来源：http://www.xuanzx.com/163dozafila.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nyuzksgi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163etgellbp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mkcqymip.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163drcyvkro.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163urcoffhn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fdsmqoqx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163cssghcky.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tdvkatsn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ltjqdfas.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vpyzsbkx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163yiphwogc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163zlxvihzf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163atrvyamp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cpkqxhin.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qmddsnhx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qljjevnl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yspdlxuq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bfojehuj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163atrxpfcg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ygpblxrx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vfeovibz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bnmporrx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bpfpojys.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hyubsxpt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163smewdipq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xahfhhef.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ycicwpvc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ikwgvyqy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163aexrjume.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mdovbomw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kzudekwt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ultzykls.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sxvmpnkf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ceukfclr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xwonrsro.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163byqkfims.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163muexgeld.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163imhhpnrr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ksvbjmlu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zkvvnihn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kvwkrlub.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nyvjmlfp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hubyukfb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163suhgkgcq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mfouisog.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pgdiobto.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163snphuyox.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ggxcwkbe.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qlsmpsin.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wtbdwgic.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163aixwksua.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zlikxcig.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kebevogt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qwkjmynk.html

C#:   u is User
来源：http://www.sxryk.cn/163oxgumsha.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kijewohi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ipnyvhjn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163upzxhtnb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tfpgjdrv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163udestwdr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pwvqorie.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ukmruxhb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wyxiqgnu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vodihahi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163qlqbsrdz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qnhterye.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fblikwtk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163yakivtbs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cjyimmdw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ykstxrpv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qvcnpqbh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rigysqda.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ihhojxmh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ssetzrqo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pascizcs.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163snnsolht.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jolplqdo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aduxulxl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fpgqptws.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163matvkkle.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zulkhkbc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ddplrrxm.html

================================================================================
来源：http://www.aibaodan.cn/163nrxiyuqa.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nvevdmmp.html

================================================================================
来源：http://www.aibaodan.cn/163qorvlsne.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hsdahabf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163odzqdxzm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ejxlmasq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cqbksepu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rerwfdjw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ydcncxbn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163amfyozpd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ceatvhbh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163apvevzkn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163itwqxvdv.html


<!-- 参考信息 -->