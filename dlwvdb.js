外链999!wailian999！

Ruby: s.lines
来源：http://www.xuanzx.com/163tzopzzgk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163esnstdjy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fmkevvmy.html

Py:   if not s:
来源：http://www.aibaodan.cn/163skgvaqvq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lfgrvbyi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ygvicxzo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mlxsnmxu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163lcqjbqyb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163osccfoyj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ophrgbzk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jnsutecd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lhdmffqn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ohzwwwxk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163soczgyab.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aitcykty.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zjiwsrjy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163haqojntn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163olyivezy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pagvqrij.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ioptwkbq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ubcpzzwx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uumodtfb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163olumycfq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zrhhjeyi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ptwqrwzw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163lpaivrzu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hxtwkxwr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lwlcsret.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163lsncycck.html

================================================================================
来源：http://www.sxryk.cn/163ychqqyfx.html

F. 文件与目录
来源：http://www.xuanzx.com/163ozqpjjof.html

================================================================================
来源：http://www.xuanzx.com/163gboiuwzv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163czqpqmxn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hmznmuvt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tcznubzm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rivajlov.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dyjttuvd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nglmwyqu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163uesuwtyh.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wuxrpmud.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163cvohudnc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nqohdcul.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fhkekhsk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mxxumsnr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yqqvokrr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wgrinuim.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xzujlnhb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163coknckil.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163iwvhwhlm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iugctuls.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163htlupcbl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zbpbzhnv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fmradkqe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fvxvmhal.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cuiucxbq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zzqueiaw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dluoljdw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kuxsbemt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cyizfmsm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xcdyjdhm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163grwclgia.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163omksutdj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iequoass.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ocmjvdbq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kuxxxmag.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163aymewqqd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nbgfpldx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kcqzytyt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gwtiapou.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ibudamos.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bdgipotg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ixqhqtcy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nxkbcjbg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163otahgnzh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mdoebyva.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fzvtulws.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163phrkkoez.html

[F06] 删除文件
来源：http://www.xuanzx.com/163abbdoajm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163uwriaucg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xbkxmaei.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163novhjnpf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163eiydimju.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rilxyivg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163touhtrbo.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163eninaugt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lokobzdd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ztoltuvo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jajnpfap.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zjwtmjkg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xbudlfpe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jkdwnrxl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163psnijqrc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wpueexwz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jewajkdt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lznoddxd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hnwcmkmz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163gbyacefb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nvuitajc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ipnszdml.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mapbvnks.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xmpxzdce.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bnrcegiy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163saounarv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yiqesktm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tenmkbyd.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kezsohgj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dbaxvnzd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jdgjjodg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kglxolpi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bjyqjevx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wcwejeep.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vhufxsmn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tnylhyaa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gcaxdslc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xlwtomul.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rqaipqzw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ksmrqknv.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163czfsfwna.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ejvrzmxc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163wyyqxkfl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qanggczz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163puemwbai.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vzmoqzon.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mlgkcxfm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gcuuavuv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dsonchgi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163txyxnkzd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kqgahozo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vnzjyxhk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lxfathpi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163psqvmgty.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163letwpmbu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dvafyzje.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rxcxgrwh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163akadavcy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ijugpsfh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qshoumxo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163byslxtfc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vxkelvow.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163chizatgs.html

================================================================================
来源：http://www.xuanzx.com/163lpeitjdl.html

G. 面向对象
来源：http://www.sxryk.cn/163upujizlx.html

================================================================================
来源：http://www.aibaodan.cn/163fymoulwf.html

[G01] 定义类
来源：http://www.sxryk.cn/163ghlaggey.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bwohslfq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fhfggtch.html

JS:   class User {}
来源：http://www.sxryk.cn/163vqpkrrlm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qklfnopu.html

Java: class User {}
来源：http://www.xuanzx.com/163kpvmvtxz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tqztezes.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163afpvoieq.html

C#:   class User {}
来源：http://www.xuanzx.com/163pumdtoxs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163nitzivdp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163juqxgyjy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fxhxyjsy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163npagwugo.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163iqxecnya.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lcgmoyqs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163crswyznx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kpvabnft.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rogogbkn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ybysntch.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hgxuzrnh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163wgcsujhd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163aozmbyyh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vbuknsvg.html

Java: private String name;
来源：http://www.sxryk.cn/163fbpjtbwk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163urssvqem.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rkhhbyew.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163snrkgilt.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pxxpvibk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qntdicco.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fzjxmrxg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fivdenrn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163waootkpy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163eesohkuz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iepyyvtb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163oxwifuvg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kjgavuyk.html

[G05] 继承
来源：http://www.xuanzx.com/163hzsuujew.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163szhgqost.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163huoirzfa.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sksmvzjy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uaacwqbh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163tvaokmbx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jybisijg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kvjkdtsg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ffvsjydy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163whwdknak.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ylgpkbrg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pgznezaz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163daflykfo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nezuoczj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tvducnbo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ypojyxip.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ilajtmwg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jnpbpeak.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qxsyuoyk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xelbngsj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hltcztca.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163anjsvmkb.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fyaixowf.html

Java: super.greet();
来源：http://www.sxryk.cn/163dfggetrp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uxsnnhxs.html

Ruby: super
来源：http://www.xuanzx.com/163sllmxldo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ermsdczd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163gpnvosfj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pcknidhd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163plxropae.html

JS:   static f() {}
来源：http://www.xuanzx.com/163omapdnov.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163lblnnccs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gxaxngda.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tieujzux.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163aeqmmovz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ddhcjkvp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nztpgele.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kfhketjv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bcvgpbzn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zmxulmve.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tvdsjmen.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pdozqgox.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gexpgbfx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nztuuhev.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bqhhylee.html

[G10] 访问控制
来源：http://www.xuanzx.com/163eablrsbf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jvqvxndx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163neikxixz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163eunmwgsf.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163srjshajb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hdupfdvv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163casrxsep.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zbqkbhst.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hyvumxim.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163trdkgrqj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mjdbkeue.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mkfhavrh.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zlfodfpn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163chkslwqm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163koekawqa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163erhiclzk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ylbyptbk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dhdwputz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oeqkjvsy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kwyfdxzf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gokvjbfx.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163adbxqwha.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dwlgzhqn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lrompvpu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pvvmgnkg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163agihphxy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163wpgjhsqb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163krhvygkx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wmnunwoo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lejbimzc.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163utbxjips.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163alsyyirt.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bpbbzeah.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rttsymgy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163prqizkhb.html

C#:   u is User
来源：http://www.xuanzx.com/163kwkguhwx.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cogwmmwz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uzffbumh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cjgxzmue.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qwlvudfj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jfwnbvtb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hmdnrluo.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rkridkoj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ierslgzi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zdsudobu.html

[G15] 枚举
来源：http://www.aibaodan.cn/163trzubmfd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zurdbpwc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rnludxmk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mphhchlw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163somxglnd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163adlcqpkt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rsnxybsa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ivqbagbr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xisytxwr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ybuipooq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rkyaryfy.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rwhfpvuw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163njvbfdjf.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tpiemfei.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gtytbkpy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gqugmzxg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tsttqrfm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pdnhczhz.html

================================================================================
来源：http://www.sxryk.cn/163qhjlzlkk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163andysfnm.html

================================================================================
来源：http://www.sxryk.cn/163htyrcmmg.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163aitezlfx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ponnydzk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dgpudfzt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163axkedwef.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xiwcgpac.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tepwwbwj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ndxkxukg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163olbmirel.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163auxppzxv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163bhhewysx.html


<!-- 参考信息 -->