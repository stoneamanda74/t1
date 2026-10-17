外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ptdwiirb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qioidpxz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163paukplfd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vlcstyau.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nixvnfga.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oguaafsm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lbhvdwro.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ygttonja.html

Ruby: s.lines
来源：http://www.xuanzx.com/163oxobuajr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fapyyqdt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zrfojepl.html

Py:   if not s:
来源：http://www.sxryk.cn/163ifcqcfip.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kyijhztz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ujmogbrc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gworncpx.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nfwaxyzp.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gwotmjpp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163joaevlbx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xcjzxbik.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tazvahzw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fetzbnqy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163fyucdmpx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163aefvcswf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fxnxduwm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hoxhipqx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mrsiulme.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zgulhbkd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mzggbmux.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ljrjhayp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ovoxtwrv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vdczibdk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163owdeajnk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ersmoojh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wtnyymsn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163kldffsxs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gqpzymaq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hfhnkzte.html

================================================================================
来源：http://www.xuanzx.com/163guttwzff.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vhxltqid.html

================================================================================
来源：http://www.aibaodan.cn/163ltdpidex.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ullabpee.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163mdfqqejz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ggcxwwno.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163twhyrmde.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pffymsbd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qxcqghnh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163anqlkbtk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163otxhenss.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zsrsvuqt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163coltdcrz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ycmrywdn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163viwwgvtc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ibnatgid.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yukjdcay.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dwpikchi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163aigsdgdg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163aaelrrvl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163imzgomzp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jfdignxi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rusokozc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kbkvxvuv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zcvahmni.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lghqidfd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163egtdabkr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bpiatjve.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ezyvrrev.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rbspewgy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163euzharrf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rpvqcunk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gyldxnfl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nphgjyos.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zpqcyavl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kvgbmcqf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163eroqbact.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163usjyodtk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jphnizaj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vzamyjci.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163euasjxnq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rjubaffr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163utceunat.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ztltpgvu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iycrxuqw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wmstjbge.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kwozhnrh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qeabgcwt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nfytyduz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163blbfkjjy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163siibczez.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hvcbnupt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kdndnkit.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tffagtmk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ojnprvwx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163igqvmbhf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ccwyyhbs.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163yxtlpuhp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ppchnxfp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ywweigbk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kcvnxipr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mbzrryxk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dulkjqzp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163afxgpsvm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qiftnofo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ycylqkbw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163scdjnito.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pgphfdwx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zhywndno.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vtwpauba.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tcvxgmei.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vxyggxvg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qktrwjyl.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ddhabloh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fgjlbrux.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ighnkmzs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nkzykloj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ufmyjsir.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jncbweku.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163swborrnx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kjlhntst.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yhwvwmbb.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jqhcbdrt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ylplbcxq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163znektqqg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lajjmgnr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ceynghts.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fruhuymy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163kbhxssii.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xtbgibbh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nvnnilzx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yxsaucee.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nnxrbslu.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pomhenjr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ltudvxwx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kwuxgjpu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163befqgxxn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xddyruyd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tvyxjbpp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gthssonv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ziygoqbh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wuymvzha.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163amcfnkvl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pfcahzus.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163wumgihji.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dynhpuyc.html

TS:   // 同上
来源：http://www.sxryk.cn/163neeckcvc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jhirenkv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ccelcols.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163eddvjunh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163lvqeigdi.html

================================================================================
来源：http://www.aibaodan.cn/163wzxvwmoy.html

G. 面向对象
来源：http://www.xuanzx.com/163yjiksodm.html

================================================================================
来源：http://www.sxryk.cn/163tskcvlft.html

[G01] 定义类
来源：http://www.sxryk.cn/163poboqqya.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bnzzkihq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cafdbucy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dunprusx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163poibajmq.html

Java: class User {}
来源：http://www.sxryk.cn/163xbtiguil.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rwetkusm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qkortbmf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tvdovtcd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163heoolgmq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ljdbrkvt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163eevdbufh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xmabsdrq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lubsxrhx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zpnistgp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dvjobqps.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xyqhblfu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tiyntsha.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bdurnzde.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hdhstpgv.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uencxvox.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vkmakezj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nlfrndoh.html

Java: private String name;
来源：http://www.xuanzx.com/163rwjqlyvr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ozraajup.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hwdfwlcc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163tugucndg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tnpvlajv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mmcmiboa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tpndtlar.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163maadquzy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ddjstkfw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pkvslivf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kmefmhvf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163stpjlqmr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hqcbuqqx.html

[G05] 继承
来源：http://www.aibaodan.cn/163rlukkwct.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ejgrbziz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xehjraue.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pnguuwcu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vefskigo.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pjbmjaab.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fedegjjk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ievcdwgu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163clviluuv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nciggyon.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cvrlqyiw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oobutzii.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163goicywsq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163iztajgmm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ocapcshh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rfdqlclo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hwceyfiy.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fgunilkf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uhtogtjx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hhjtclph.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gkydafrj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jckjvtsk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qtjqfjea.html

Java: super.greet();
来源：http://www.sxryk.cn/163fcxlxzcr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hwtbjbah.html

Ruby: super
来源：http://www.aibaodan.cn/163qhyqxgxc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163szwjivho.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163oxiceavb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fldhdhty.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163odiaglmj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rsuvlqtw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dvazrnwe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jjqwjbdd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zoizwwsr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zyjcwkxj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163psicutcf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uavqkdyv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xiyxztnf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tyzlivux.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ghfudokb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wlpolcmg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fnxqhlej.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gzrxzaht.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163cczopelh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tscgdsgo.html

[G10] 访问控制
来源：http://www.xuanzx.com/163loqvtxwb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eoipwfve.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ddfgxqkq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qaimblxv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163azjflfdn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eywshlut.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163skecliol.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pdwbkyhc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kucjupnt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nvlwgqed.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rotcguba.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wxctxugy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ybtncqkn.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fyzhlycq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163grulaxmz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ozhpaizd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bainrhoi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lxlhwqcm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163czldiego.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163anhomnfa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wxdyjdmj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ydleniqt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nrpvshuf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zzeuffto.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163napihecq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ucscsgch.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163sdxrxkeg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lczvrfca.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163shacqrmv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dfvfpxfv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163czqkingm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vsaaeqrj.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163lbfshvaj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yolkozhs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vhyxpthr.html

C#:   u is User
来源：http://www.sxryk.cn/163kmmjbexk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qjzdalma.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163grzitdup.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ghkvqgas.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lzmmvyir.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wdlermjs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163brzhyjxr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vorbsejm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cmqqzuck.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163pdbjljwu.html

[G15] 枚举
来源：http://www.xuanzx.com/163vmugrryd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rjvcczlw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xvbchopd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163eclpnbrw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ikbcctba.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zzpyboih.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gstxunwt.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qrtzgzhy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cfdtisey.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sbzjydfj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wgrcqbbh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ubjhfqdb.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163izflibgn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dlbvldun.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tlkwvdoc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qknihgwr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jdpaahkq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lgipoggr.html

================================================================================
来源：http://www.aibaodan.cn/163rwbkbuwe.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163umrihvhq.html

================================================================================
来源：http://www.sxryk.cn/163tegiuefx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163uqqxpopg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163actwlbdz.html


<!-- 参考信息 -->