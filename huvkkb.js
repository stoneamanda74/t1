外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163bysiywjz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jolljwky.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rpugcnzf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qgjffqam.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jzxwiccd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hbsxiyab.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163npuohxye.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qknzciax.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163iukmxlok.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163pcinlqud.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163buzeebui.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163keiyjrrr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iqfreold.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163stkrpypv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gnjjjeri.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dwhdppte.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fpwwdmig.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ovjnzavb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163aljqyheb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qfwieljy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bfldnenj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jkclqzjx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bkbnnroc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163umtdagbc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jbfatbmm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163eggraetq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163khgbchba.html

Py:   if not s:
来源：http://www.xuanzx.com/163eysibngw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163biidekfe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163anhuqjmc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ptdqngqf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tyonvwth.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163isfzayou.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163seqtjoce.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ztfqhmhs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163djefnxah.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dkergudr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ppwirrju.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iojluymp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vfigtgvi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eraumrtx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163csstljvp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rrbcnxcy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hehtlinh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163yokmawml.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nqxptkxx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kcrvtvac.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hrlejdga.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jbrxfmzc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wbbufrwa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ypmfhcbr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xmjupnuc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ttkncuco.html

================================================================================
来源：http://www.sxryk.cn/163xkhdhsiv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ykjtspsx.html

================================================================================
来源：http://www.aibaodan.cn/163hcynmhhw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zingsedk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rohhgiol.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163opndnqza.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163reawsbde.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163unqvesnk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kxlnjvkg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ycqybjzz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vlfzauak.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163saabyxwb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tudfztpu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xfptluhw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pvvzwaad.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nmwdcmzs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mmiovwob.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iclksnbx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dxckuwfq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ozpeozbk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xrqhokbp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jrlgsddb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mplkyfff.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sxzvaslr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xpnrwdvc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zhtnzroj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lqmnjxgn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wrbgfccn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163apgrkydf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mfawxpet.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163abvmsjml.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xvqyioif.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163aaltnyne.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ozvritlh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bekyndbl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zaojriuy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163dkvnnues.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mttnxrzh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tcfedcsc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ibikbvwd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jbuiscnc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hbrbkbeb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ywvyfnps.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vbbqhpvd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hkrdjcjy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bythfyar.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vezpzinc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163tkctqdyq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ueoihrvc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163knehegtf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ndvyngsn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163utomfndg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zegzxwnn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163axmkeozn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kzekeebx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cpltlrqs.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163pbaufalx.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hbrldclh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163nmovfxqn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nfhuaccm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wiufcpss.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163upjyuspu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nlvlooyu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hqhwwtga.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tktouvje.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cjtdeeeb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rghcmddn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jdahvhgq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hyxutdwj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163buwpapra.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163svtgwfwy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163evbbzlkc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fpbkqjfj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wdanrtsn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mxsnxasd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ypicbjyq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pkzvwlrj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gcoexjpz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163orojeyzy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163txibkirx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dtrkpgsj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hoyaukql.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tdmbqqzt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pmhemerj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163yfbmrupt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bisnohva.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qibyofan.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ywxbjuwt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dhgqblsi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pswivjmn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163fjavhrqp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jkuhdmef.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lbyhppjr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uiwobvis.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zqpqghki.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nrnrqbvg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cigfpcbx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bfqrarxr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dbbljtwj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yaoimihg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163blawvmez.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fkerajle.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163opmjniuj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rnuslofp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qnnprcav.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hboqfqoj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qpyiptpz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lrvqdryv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hqhcxoij.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163bkazuebk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uywdizbm.html

================================================================================
来源：http://www.xuanzx.com/163vgcdvhga.html

G. 面向对象
来源：http://www.sxryk.cn/163zsahzbvm.html

================================================================================
来源：http://www.aibaodan.cn/163zydwqzgz.html

[G01] 定义类
来源：http://www.sxryk.cn/163eflbfcso.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ieqdldgj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fyekjikq.html

JS:   class User {}
来源：http://www.xuanzx.com/163oshediiy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tlzioldk.html

Java: class User {}
来源：http://www.aibaodan.cn/163mlsindci.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163cggcwwda.html

Ruby: class User; end
来源：http://www.sxryk.cn/163pgksudsx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kqmtvfij.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kjmqvzma.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163uqqfbvyc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mscmnpus.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lebhxjpq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wjpubbpc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163rihdxtjp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rlupbciw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163izyorgko.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gkahqxbe.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qwaknqdb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gvjqbafv.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163leimdjkf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163uyvthmvl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163pmxxkvba.html

Java: private String name;
来源：http://www.sxryk.cn/163ybgbjgjl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jfrfvpoy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ddloihll.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uuzuexwl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xqdorbzx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hskiikyk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xglvdsfe.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163pbpwtdep.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oflrszsm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vvlddqab.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qhsyblcl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163iesemzuv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gxuclxhi.html

[G05] 继承
来源：http://www.xuanzx.com/163kzdnzwug.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ockyanle.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163snfopnap.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163liykicyy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163debcqmby.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fvddeiua.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qjuvehlu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yjjgjcmh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qqwqkgfh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hyyvdrmw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ljqqielg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163imugutje.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zehfqsye.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tsqsimix.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rlfgvmgv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ypiewxhp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wexlgond.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cocrnaph.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jblruwti.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qrevljzm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uilyqaje.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zfgjlsfb.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rwgztyyf.html

Java: super.greet();
来源：http://www.xuanzx.com/163qzzcedwb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163iubzzbmi.html

Ruby: super
来源：http://www.xuanzx.com/163iycmedii.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gsaqoirc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xaqibzzv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tjnsfntp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163oaydwswt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163twwbojee.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tllnrglz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dxhizank.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163uwujjeqe.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cxzojwhn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163enfrdxaq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nixjrhsl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jnrjpugt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163htbkhvjw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eueicgzo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fguyexig.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cwldiwsk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163miyrymaa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kvzkpkgt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tvezljam.html

[G10] 访问控制
来源：http://www.xuanzx.com/163elfcgyvs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tjltxlkr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163bqhkdlom.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rhjmmlen.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bdjnbara.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tnhjkjtt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163foadhdwi.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yuddbmvv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wkgbauxa.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bsadyrge.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ccboacly.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lknmwvit.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rluvycur.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163owwmrjss.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wxtddugd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163iwqetmcw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wfxquaeu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tfjslucc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jiroefvo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lhwhmozh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bkprmsdu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163paxznhli.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163juzndezy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ibhfzesy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163oyigktan.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rfbjrfos.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163awqydjhd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kmqulplm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163bttbqzju.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qxssdhfh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vuomwuxw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gnsaifcb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gbggyxdl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dbaemppv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hrjvovos.html

C#:   u is User
来源：http://www.sxryk.cn/163lwjhbzcl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163arwgxtne.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mtrtgsbt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163neyyjyhv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mtfkmbyq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mskrlalx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qintnsar.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mxisvqoz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qqxirbuq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163crijljee.html

[G15] 枚举
来源：http://www.aibaodan.cn/163stissfxs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163eobqadcs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tezhmjsb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fbxmmyoh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fmesfdhe.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nhuoukci.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163eeugfwtx.html


<!-- 参考信息 -->