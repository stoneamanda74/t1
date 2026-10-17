外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dhefhtka.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pnjjzmjz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vadlajsz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163blihoqyd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163rjunsxdd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163gmbyirll.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kbbmuaxk.html

Py:   if not s:
来源：http://www.xuanzx.com/163jtvbvfgq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kwfcohua.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163abgdmdnw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163awbbomdr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dpmagckz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lohpthxm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dvzbvpqj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163zxksrola.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xzauislf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163uxdaqbrr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163iienxgea.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rirsghwk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cyumlopr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163evatpajr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wmbbsplb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tpwagyvt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qmocwugo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pczwsrxm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mhuyvisy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xvupetyr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uqljfbhs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lvraetbf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mxhxoyxj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mlvhkpzf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dzuzdjny.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ywocuguk.html

================================================================================
来源：http://www.sxryk.cn/163eceyubla.html

F. 文件与目录
来源：http://www.sxryk.cn/163ehraarxl.html

================================================================================
来源：http://www.sxryk.cn/163txruiqab.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uhcfslfu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163onrnzwlm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163oeltjqfm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bxrfymds.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163drtplngs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rkkfcfgj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jxcperul.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163eeuyynnz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163hkwxvfaf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xmwxczgz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ggowyxbx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sukvgrsy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rnekiyak.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kmpxkdcg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163olzjgoqc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163deexthwh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wdqxhbkf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oyeidzsx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wxhlkpni.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gezmlptw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tqammnlk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ifudopim.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hyaqfvjq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163idysdlre.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zirhhsto.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163raolikxa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ufizjewt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zydforze.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zwncozjh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tlmduvsc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163grumkimx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163unequiac.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yoirnhik.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bsjhrkpk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163zabqhjau.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ibjmsliu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gvghkdqt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pjaibiek.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vzkdjvmg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vmkahdnq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wdnuxgeh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xhtxemwn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lrlkrbdp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hmrsdgrj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tsurievr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xccwscng.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zomawnly.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fuzdgfbb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vlsypdyk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jzuxbdjz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ltygmyjr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ahlodhij.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hpxgcwus.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nuhlafno.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gmeaxldc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cxmxqwwi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rnqsxghg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sajpmmzb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nzkrvvqc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tlqdwaht.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hifpqtux.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lvrdxckq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lskzjspz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163weizhcdr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rjzicbgd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pylotoyl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lipbbqhq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hskhsunn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ypivjknu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lswcbpfy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wsbeuphv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vsowjnel.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ediklqeq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ontwsqua.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163guywwzpk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hnrkydfr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mjvcsbar.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dtwqdvkb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dwahstof.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fkfvwgcz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tybshwcu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vqcbrfum.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uvfzdblt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dwdkhlhs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163igpivjsh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zbmcmyka.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hhckahhz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163scizgdvd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lpjupkxn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163obvredoo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uklvjrtm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wisulwvy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ygtlktkv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163byjjbmrg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eqnrtaba.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163uvwmzxsj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qambqzln.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163znpjgdve.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163haswxsmp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fjpztmgi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163iqawuldy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rhziydlf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zbpstrls.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rcamqdnm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tbnwvqnv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163oeafmzwo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163rkdsitjm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dnbzbvee.html

================================================================================
来源：http://www.sxryk.cn/163nchuoarl.html

G. 面向对象
来源：http://www.sxryk.cn/163iqtlvftb.html

================================================================================
来源：http://www.xuanzx.com/163nauiukos.html

[G01] 定义类
来源：http://www.xuanzx.com/163clhemqvz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163swwyibea.html

PHP:  class User {}
来源：http://www.xuanzx.com/163neohdnfz.html

JS:   class User {}
来源：http://www.xuanzx.com/163isdnefzt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163blxethfa.html

Java: class User {}
来源：http://www.xuanzx.com/163rtmhmbvr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dfjwzfup.html

Ruby: class User; end
来源：http://www.xuanzx.com/163otbjkpzy.html

C#:   class User {}
来源：http://www.sxryk.cn/163meyooksa.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tcwsyuiv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wrnztdzb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vhpxoaic.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ghstnadw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tefqqkiz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rgwreejz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ypiqnvul.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ngiaqzmj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cgasnncb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vanyxkda.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163csxdnxbr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bhbxqsoz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sfginvit.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rxlhqlrs.html

Java: private String name;
来源：http://www.aibaodan.cn/163heyztozo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qtncqjaf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mfxgdbiq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vkiqbplw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hsdxodaz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qwscrcoy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zihvnfoa.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ysfrgcaf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163muyqhmqp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qctnepva.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pjwoqutp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163iiofxujq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fyeuqcnw.html

[G05] 继承
来源：http://www.xuanzx.com/163ocwguxhw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xldtekjp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163njuhbjlg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zdkpieql.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jzxsbcez.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163yycmpdnc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163nahtkdng.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ozrcmqzf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ratikbdi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163aqzaahzw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ektusmzd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bjyrstqh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qyknvunc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vyfxxybk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wvrbpoxg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163erbnmbep.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hjpbfcdp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wjetwdvv.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xtrkxcio.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ukmdnnyu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163swhrrrxr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kaduluad.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tybhjquo.html

Java: super.greet();
来源：http://www.xuanzx.com/163tabnrmpb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jddmbrhx.html

Ruby: super
来源：http://www.xuanzx.com/163oqcmtxgh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kqnwupej.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zeyxcomx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163uycyjdol.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vnlaebcs.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kbhhzrfm.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163chmeduww.html

Java: static void f() {}
来源：http://www.xuanzx.com/163csctpeed.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163shuolkpg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ofecxpib.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dofsyjli.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uusvbdne.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uvkkwacw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tkwxbmdb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yhxejyxo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163uopqzize.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nyectkll.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kdufvbeg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163boqqxqeb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dajttzjo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hyjvffww.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lpzwovbt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tctddxdp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bfnhzwkp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163niuxkisj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yubbettk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jdzsyhnu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lzxpweqx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163sqzbhubi.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qotuoagf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cieqkyii.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xmypitiw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fuihcrwp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ayvnhyou.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yxflacxh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ghboexpb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qcadwdvq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ensrnldh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163osnybycw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ruortzca.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dfmktzdm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dusgyiak.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163posurpds.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163udxkvswz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ejgmijjm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vrwlyxoz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qabgumbp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wkeqpzwi.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163uelpilel.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lssaokjn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163etfufppi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163umnlttiv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163iuytdyug.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mtoofzfd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cdszfsul.html

C#:   u is User
来源：http://www.xuanzx.com/163fkpxprky.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pqseznow.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zvmbtkiq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wrcdipzm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vynrvynk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pzkrnjeo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bxvqkfmy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lxfkbazr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wbcnmdet.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163syruusgb.html

[G15] 枚举
来源：http://www.xuanzx.com/163szxvasmi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163izeprcfx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zhvsnbwg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wdyekbni.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tujjapjs.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163blhixiut.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cthovvgv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163yilfzsfb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mydxysox.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vucaqjca.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yiufxnff.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163osdjsvwl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163inmavqrv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nomtyqql.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jhemtcsk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ozfnrfxu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rpjtdaxf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163krijgsmu.html

================================================================================
来源：http://www.aibaodan.cn/163imrzlqai.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fueiulbn.html

================================================================================
来源：http://www.xuanzx.com/163qarufykv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163icsratws.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mjvsjlfk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bwcxfkkm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jzpgjjcd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163eiwfdyes.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aigwdyoc.html


<!-- 参考信息 -->