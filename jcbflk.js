外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rvvtjabe.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163evmjbqvw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pwilbvtx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163fwwtouju.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yxwtkojf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163odtouvfo.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163dmkxadfi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163sdivwitq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wfsxgmcg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yiizrhvk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qnxnkdkh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jcwwxnao.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cwakbssm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ybvcmwml.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ckgyirrj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qzcigqdb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yonfhuuv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163libgnyoz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pwnxwxdn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dxsoswgf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mcggjtyn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163byychczg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qaemvhtj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bwftqdjd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oobstnfl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rvkvspcu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163glwmctqf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dgfgjdmn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ohqbuxcc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bxbwrsnh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163djkzzdfm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163helelkzl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nwjrpuiv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163aijcxzvt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163sjohzzjz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163txhgdldj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kdlipait.html

================================================================================
来源：http://www.sxryk.cn/163rjdpmggl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xetskzbw.html

================================================================================
来源：http://www.aibaodan.cn/163inuqljqy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dqkzvokr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ziqsobix.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lszsruxz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qukultoi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rqzwtnin.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wllpsyqw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ojhjxvuh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rfcdanei.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kqrtdpqf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163heiklegy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163oiazamru.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ifrkkfiw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vfdsjefu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zolfojns.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vhepuzer.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xplbvenb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vkhstbiq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xuyzawsh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163avnxsrhn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163scdwkwuj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wddqdjud.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nzgumdxd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jcosrrae.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lijrswxk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ynfillxx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pahltklv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163dryhabwj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xwtzokav.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163djgsmznz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163drwwzrdz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sgahnhvz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rjygcnbm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163evbdooib.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163scdquzug.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vzbxxkat.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qaaddyau.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wxgbuzya.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163aksrifwg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zbyqfwaw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oxnufuai.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kjhyghph.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xtpwjnlt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yghperhy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wqzrmqtd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rdpiaicx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qzleotho.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ozzbygcm.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jnfbhmwa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pucrtogm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pdcngmur.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163arrnuyqn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lsakdslf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163wzjzjgxl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163envthmsf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163iyhcohnt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163urvgltau.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vmsxscvy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nowypyof.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lywsofxq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163prqvkoml.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dwssflnu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wijeylkh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mdcuawrv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163lsllowos.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qjafsdbw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163cwhvubtq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163leumnrah.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pyvhfarp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pjbqqpvn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163etmbpgrk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ucgheezb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163myjqencf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rmbqgnni.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163eogqyjov.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163oglygidq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tyejugvu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kektgtpa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jjsohmoh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163kkrytsaf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cdrobuhv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163bkhaajja.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xnjicxaq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oexfqttj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163sinvkjxt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ahgcgmoj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fczlpbvc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bddocmns.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dopjawgh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bigbkiwn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xrdlemfp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ukoxhwyh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vnkddbmd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ysbrdgot.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rjrimrmb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uymddhfv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163eitvvrtw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mobaejxm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bwtsrdxt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xdxzrtwr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163yzexkbfn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qbmylzwl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zfzhracq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wsatiivx.html

TS:   // 同上
来源：http://www.sxryk.cn/163nskgesuy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bbmxyirg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163eujtzluy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yudhtflb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163btxkxpfm.html

================================================================================
来源：http://www.aibaodan.cn/163hnftxqkk.html

G. 面向对象
来源：http://www.aibaodan.cn/163rlrdkjqu.html

================================================================================
来源：http://www.xuanzx.com/163vgwmrvyk.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ekytykzk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vxnnxyam.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ghfrvkxc.html

JS:   class User {}
来源：http://www.xuanzx.com/163otqybbsg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163slmdrydm.html

Java: class User {}
来源：http://www.xuanzx.com/163ppkwxcwa.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gxymrnha.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vnqmqhbw.html

C#:   class User {}
来源：http://www.xuanzx.com/163bjrugknz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163agxamlmr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dwddderk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gxhwrmux.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mojhbljw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bjcgqadh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163idbnuaxa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163btrjwbjz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ywddqsic.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bzyjjelz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cfuisvty.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lxmhshfh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ygerwkuw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ymgpmeev.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lmmvtbtq.html

Java: private String name;
来源：http://www.sxryk.cn/163ndurhovy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163eluynyil.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hjppattg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uqizhrcc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163govrphpb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hvrtwkpd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163foxccbvz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zkrwfyee.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163eghxzvsi.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163edlkdvre.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mkyvbbwh.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163iqtplncd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163smmneyse.html

[G05] 继承
来源：http://www.sxryk.cn/163qrkpnfuw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hxebrhku.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bmdypxge.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vlojculx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rwdgxrdi.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163funvzxyz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wcrfqexd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dzhddbjn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xnykudjj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jwvleayc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163blixdrck.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hnxlvjft.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fhfpvyii.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rdikyruu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nwxyxegu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wowfabty.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vwxalusm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dsfiitad.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163aemyrysc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163bytlirfz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qhwwoazq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iymeovng.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kmlgujhm.html

Java: super.greet();
来源：http://www.sxryk.cn/163wofvifzt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wpdsveuf.html

Ruby: super
来源：http://www.aibaodan.cn/163uycsarzt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163sbxjboio.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hhnrkrre.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ipehmyhk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vdjbiiwv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lokqyuga.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jvyskfws.html

Java: static void f() {}
来源：http://www.xuanzx.com/163emvmtiie.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163srjkkuvs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mhgvvpej.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fazjydyv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163yovjaaot.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vswitgkf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163cqjyobut.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zegvuynj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ucadmbiz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qlmwjcts.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rnugelhb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gkwpxejy.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bdfsipyl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ytbkmswk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jrfvzrwd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ozzoccug.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163sgmkyewx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163urboqhev.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163navjnyuv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hfzzqimc.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qogqsjbx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mdhctshe.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hpgyxyaa.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163leontzjs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wgekzqvq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hmkefjyo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163kuoemdzo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gksleekj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163puvnjmkv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uekzzybk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163msvogusu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163urpmqfsw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163akdfapct.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tngrkrmy.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tlxxfyjc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163htzyubsp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vopqdilx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163shhjlpcq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cuaquuim.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gukmbyag.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163egcmodcj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163bmqlygrt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ikawsrly.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ctylomjs.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163mtgtnlci.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cdeidfel.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rtgspwgx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gwhzvyuq.html

C#:   u is User
来源：http://www.xuanzx.com/163xgiytucd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163igbagzme.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163dwmrpjkk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dplarfgq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mfxcnwzs.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yunfykho.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ydnesemy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163fuvavqnd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163eyjrssln.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dnjoncjo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bmyatakc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zffalitk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wwmbpnok.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163idaevzui.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lytwjfzl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hnlacuzd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yskbwdfq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lrbvssgw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qzlzyzne.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163oupparkk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qulakoww.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163uvqxihnh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163udbwgjzn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uuzemhsp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zhgiynfa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gycqiwnd.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lmnggath.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wdosthju.html

================================================================================
来源：http://www.sxryk.cn/163eujcrtgt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163eamatufi.html

================================================================================
来源：http://www.sxryk.cn/163mjgluvaj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ryqsemau.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163vbcygjlg.html


<!-- 参考信息 -->