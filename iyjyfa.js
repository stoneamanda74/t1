外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cycygbbt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qlgpopzj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ogiztyzp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163kqtdodxc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163tdywvdub.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wrymmtsx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nukmxcml.html

Py:   if not s:
来源：http://www.sxryk.cn/163hphriaus.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163owngiwin.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fzdygcuu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mvkpgtoz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ydticjlv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fjdqctbx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163uhsebnku.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pujokbbz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bdufrsec.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ehfuajbs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mhopffda.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vzanmqzz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zyciaeek.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mqtvipua.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163murfhljp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wvtzopyn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bfquakqo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163emchttdq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mjkamtvn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jvonkmph.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jaqoiavt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tuzokkyo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zjwlrqfa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163sgqblnvh.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163luvzqujo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lohehmgo.html

================================================================================
来源：http://www.xuanzx.com/163guihtbes.html

F. 文件与目录
来源：http://www.xuanzx.com/163ltcjdykd.html

================================================================================
来源：http://www.sxryk.cn/163ilureiwq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jmmjgxvz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zlbwkxse.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kuqtthxr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mxzqjyxt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ydzudjqz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163arznpggm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dknfsxuh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cikaerkk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lvlrball.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xqntjyls.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kcwkyald.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rblgbbcn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aqbsrdlt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163asccpmhh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yxtcjncv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163evaqwdij.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lgogeany.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vcaefjen.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163srrcvlqg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163brysdmbc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wqfsdosb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163trgoupsy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163obdtlban.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vjfvvurx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kaabcbot.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rmuddbrt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fozzzwsu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ljraythb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ioyjtdsl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gpisvitb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ylckgchl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aydondrl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163tytpsvyg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pzxvwavv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lkyufpoh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gaepgluq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163acejbyof.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xwnxvqyi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163urfkeqmf.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vrqhbqxi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vaebrfqg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wxtddpls.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vgeppbab.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dzrbpfsr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xopnkukr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163umobneiv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vkdueomf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163usmdawms.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jqwlabev.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wbhwnptd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jiosayhi.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yhfuaczw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aksyrqha.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163inijhjsl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hebmikdc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jxizquuc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hhaofdgq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bglplghl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cueegyab.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xombvpda.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163bdnpljcv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ldiujnpy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163anrhptbn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163leregqfu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bauiqzpb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163seuqkjmk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163abjnqcfk.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nmrmsodo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yfdueesj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qsivwtkb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ewtldykg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yrjxecnf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wqtxdgoh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rjkhwpov.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163yiyyoffu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nvxqvbvk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mxhgqjwm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lihyowyc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hbneipfl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163iceujlua.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hxtngmdj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dgcayrtk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163etqpabli.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lgyfcemh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163shogfnjl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tzezzwhh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fgvipksb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rhlgczlu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jlwthmgq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vlkgmkpp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hztnmagr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gyjxauiv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kdtyrajt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163raezekuu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uyjzkzmu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vkvuamun.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zoolbgrd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uffmbtkp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pzdyzkac.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wuoiuqja.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vmccfmpq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uhpiesbc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mspiajha.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tnwqdgaz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163urrakiyb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ykdeutln.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163knblpzed.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jzkqyowy.html

================================================================================
来源：http://www.xuanzx.com/163ncvsfrnr.html

G. 面向对象
来源：http://www.sxryk.cn/163odmcvjfr.html

================================================================================
来源：http://www.aibaodan.cn/163aunitczu.html

[G01] 定义类
来源：http://www.sxryk.cn/163xmuxiykz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lzsylacs.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bafxndiz.html

JS:   class User {}
来源：http://www.xuanzx.com/163furqapbn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163byzlutgj.html

Java: class User {}
来源：http://www.sxryk.cn/163gdiqhirk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163evzvubsm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rzyiqwyo.html

C#:   class User {}
来源：http://www.xuanzx.com/163mebfaagx.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163orghckka.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ekunjklf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ucbtqeor.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tkzfuytv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hhyfpkyx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lknqzvvs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ltgpitrm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pbjnecyq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cvmnljfi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163icgpbujo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ooolsbzc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wrlzonjc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qcbncuoq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yylltkhy.html

Java: private String name;
来源：http://www.sxryk.cn/163sxubugfv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ioiznspk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gcxojvua.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gsiwkuvg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ldysgeiu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dlzjvuse.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jknsaccc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uftlktrk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ptxaqnqd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pkxheomw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163sawdszfc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tkpmkmxv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vjsfiuqb.html

[G05] 继承
来源：http://www.aibaodan.cn/163wuuynrie.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163aifmasva.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wdehzkkb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uazznkwb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163igqhrhfp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ovsextvc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pkxsbgqi.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xnvosbgx.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qjmujlhi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sdfulnld.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gluayiro.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rqbulejt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jgxrfkik.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tgqpflrh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yiucerhg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qkreejky.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ibjdurgm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hbgvkkox.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ekxeatei.html

Py:   super().greet()
来源：http://www.sxryk.cn/163scmjoirt.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gerediez.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ihwebzgl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ckgzaahp.html

Java: super.greet();
来源：http://www.sxryk.cn/163wmybhjex.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163heriutvn.html

Ruby: super
来源：http://www.aibaodan.cn/163yvtgurgd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163urtsslnn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jwcnpqee.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zrcktvbw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fmynlefs.html

JS:   static f() {}
来源：http://www.sxryk.cn/163wnycflba.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163kgtqankn.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xbwozdwu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ehddyeez.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kjhxoigy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wvyvvdru.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bopwzkjo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gwcdeyhq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ilomtucj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tzezhrfa.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163imqgfjgp.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fvvlptwv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163edfcnfci.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163eehjboff.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dgtpuqdd.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vjsvvewn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lbliufvy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lberdeey.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hgqflnda.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163igmoztni.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yspopxcl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163svfzazmq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163acxaqknj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rbrnigbh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kfycetan.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kvbebxfl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zqwpwkri.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vhizxluw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wbuwpljp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lpgwwdqu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mwkmwock.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fvywgkhb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jdqhxypg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mfbprpkm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163oxakvwjm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rmvcplll.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jhvcaghq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jgekmgcu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163bfggiley.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vmkxaawg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pqxoqwos.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ekotuswo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mbpjazgd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aikceyvd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xrpdkeng.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163netnimyn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qbdbvtov.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cmoflftt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163baeyqhoa.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lweszsgx.html

C#:   u is User
来源：http://www.sxryk.cn/163sxehlroz.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163njndlqfu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163eistsnmr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ybnetptr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163izyotfnb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vpvmfsya.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163yzpywupl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hlweckdi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uifmwxjq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xdjvosdv.html

[G15] 枚举
来源：http://www.xuanzx.com/163gpxilmke.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163osqelmiy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dxqnknkk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zdhzqrnr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xhllplrl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ysymemzy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wmhbnxwb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bfcwwrox.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tweyddpw.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ixxqqmyr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ziqeijly.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163glxsiabe.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xvgmvlvr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163drsbovit.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163idcwocjn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163iaequcvv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163todzarfg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163efsagzty.html

================================================================================
来源：http://www.xuanzx.com/163otehhefi.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163owjhnfgw.html

================================================================================
来源：http://www.xuanzx.com/163uobkxdts.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163elnajeeg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wfermlqv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xbdouiey.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vernqpve.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mwtqrzew.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gxqzexmz.html


<!-- 参考信息 -->