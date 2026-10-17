外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fvropuli.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vjlmiyih.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ebgerdnp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jzcqiwds.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163edsxghof.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hxtsumwu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hsityhto.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163psafenoe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lowhbezm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wnatroic.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ohvnrias.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hcacqoxy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163verinkrn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xlpeeoem.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tatykcxb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gumxrdtg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tkcdvuee.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ntkwmlko.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wvmhycws.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vtolhpgp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163btkfizaf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gqjgrvwx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163tbeotzbs.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fkqjlhbl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qxscdoic.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163umyfyxih.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jqqiwbqs.html

Py:   if not s:
来源：http://www.xuanzx.com/163kjtbrhho.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fimlyffx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163aqkcicrt.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jvfbnqvu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ljaxmhko.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fzpixddo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bdpoghrj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hswserpu.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mihzwxsk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pqgqoiun.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vqvjxjkg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kkihgesl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zxjzloqk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fuukzvjr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163crkfnzxl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ummxbykr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163swykasdt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zshfzyww.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tisdaqwe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gdenjxhy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pengqshk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cnpalmgd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163oafjhagj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hrinsomg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ylpxrroe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iyjrdknz.html

================================================================================
来源：http://www.aibaodan.cn/163mrbguwaj.html

F. 文件与目录
来源：http://www.xuanzx.com/163tujnbfgu.html

================================================================================
来源：http://www.sxryk.cn/163lkizgtjz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163bnloeudo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dkburjwj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nkfkjlju.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bidzjvua.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fvkvzwiz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uyamsrvv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gdanlfzw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kswmooly.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hvmkcivu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163snpftndi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ueyffoqm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163nyvyfqnh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qdidzmef.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163esfnekuw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ethtuolg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163funiwnsn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hzztqjyk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ezxknybg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zvuatisd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yyxncgvl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pcuozaaj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xlbncllc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kefyymgg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163liegdzgh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163cccaykxx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163txvfplyt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kfdpnnwv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163inzqcsol.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xduffydu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hnrasewc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ylujvqbb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wfkqpafo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yhzrmizf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jorliegi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mfwnpfzh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fznvwndh.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gwdalncz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bdbrinuc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163atbkbguw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nkzwjfmw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uqkxcocu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gozyilnm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vnmxadev.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dvdclhbn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163oimssnnc.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wqfwjtwt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ecfegohb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uugkbjpi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nhpbjplm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dfzwdfpk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163phmsntzs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ddvrydnu.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163axpzxjzo.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tuqlccbf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163djtlbdtr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ikglcsei.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qnqymzho.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ordgunch.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tsddzstw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jetyllff.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hgqvaaxy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fsxrehpi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sbdjsela.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163quqqudnr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nsjcfubw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163spsmxbfm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xhawfhpi.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yicpswfy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kohnwnke.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jyzmtisb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pzodmvmg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vxocgduv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ohmuwrsx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163evsfbevc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kwwsxxcm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hrgzlxmu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kkucqebb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xjjzigyo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163liyzvnvi.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163idzyeulu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163swhkqfdk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ahjzmzxw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wfdldxdm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yrtzkgak.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zqfuvmrs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dffwgkxg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mmwmyvup.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vegczuof.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nipohwwi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hrtphzsi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xqwistwo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163skakbxdo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163adogcnag.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163atfdcadq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pzwjvkny.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163srizswpe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wltisvis.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163abgqtyhn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163erlbmupf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oqujeykm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163aurqnqai.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uzopvxwy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163emseubzm.html

TS:   // 同上
来源：http://www.sxryk.cn/163afyqvelc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ivylyhny.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163iokbcysz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ogqfgkfm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wdxmzbcp.html

================================================================================
来源：http://www.aibaodan.cn/163pxqoulbu.html

G. 面向对象
来源：http://www.aibaodan.cn/163uvongwhq.html

================================================================================
来源：http://www.xuanzx.com/163xwdnnuhm.html

[G01] 定义类
来源：http://www.sxryk.cn/163kofssqmu.html

Py:   class User: pass
来源：http://www.sxryk.cn/163owifzwnm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pcndjsdu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cifbqbvc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163btwixivd.html

Java: class User {}
来源：http://www.aibaodan.cn/163uzdjhjog.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lctbizpt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zieqgrma.html

C#:   class User {}
来源：http://www.xuanzx.com/163heyughpi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bvrnqfze.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163pekhebsf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wumritnd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hcgztqhu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163afggfplr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ldzacpxl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mgyxhwtw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ugwdegxy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163clmchkac.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xscsaaie.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ssdomyxe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rdyljtik.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163bnrnjnoc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tbfyudbu.html

Java: private String name;
来源：http://www.aibaodan.cn/163ishpqqhb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163emdupgrm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gqwxqntl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uoabryde.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xxzeezmj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163yxwrmbwn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wqydptje.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pffqzvyd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163omuivahv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rsxdglbl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qlrwgmjq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163crhzcnph.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hkyhkiqf.html

[G05] 继承
来源：http://www.sxryk.cn/163yygtdnlo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hgxlpdgc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kpylliyj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fbtrpktj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ditfodll.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163rprephmi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bgkztikl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163szhqcagg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vaypiiyr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mlhwwvgl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uoizzzlx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163brhdhkxc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dazqevut.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dszcbynp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163msimgnvd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163upotnjul.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vahuhpik.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kstjjxtf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163shechgid.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fmutjgqc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163tlvqhxgp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gwqqsykv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wyobytnx.html

Java: super.greet();
来源：http://www.sxryk.cn/163itnwucip.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ulnghofi.html

Ruby: super
来源：http://www.aibaodan.cn/163wriavqrp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163twbeygdf.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163umjnfnja.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kjvtusif.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dnlstmel.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dudmplhj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bqxuyczh.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ejxphmtn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lcrduzhl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qgjwqicg.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mnmqluyc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rtmulymu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tkagoxmt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lxxuovfz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gnpcjxzt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cypxtbct.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ulbizikj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qhhpbbdu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lulhetiw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rgvcpjij.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pdhznswo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ytcihyht.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vywfdqpv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163offlnjrz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uppxswbg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gonvqgom.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ynissskg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vttjswsg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tfsfrrai.html

[G11] getter / setter
来源：http://www.sxryk.cn/163amubpmag.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ucjrvrsi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qobpvxak.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rwcvafbq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163oxovjbxj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xqnghbge.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163vmwwkokh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ayhbgypq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rcrwykai.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163euebxizy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qdkutydh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zfyroxpo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hzdmyise.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wehfmigq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rtaaeygv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hpvedrwk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qjvsmprx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163itegqpfm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hlymrexh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163noozppmd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163owugfbno.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tsiyptlx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xabedtfz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163noexlrue.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zrycziqe.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ejigigyy.html

C#:   u is User
来源：http://www.xuanzx.com/163rolipwlq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wivylejf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xyoyozlv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ycthbijt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ujfxamyc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jqingyxh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wsuomvxv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tvokecqe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163abvoainy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163akyjcsxx.html

[G15] 枚举
来源：http://www.sxryk.cn/163qpuwocmc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163spvqvwjj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gwyvnxmr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vvndmced.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bxyybjzl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ovcjrndn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uarkhvzo.html


<!-- 参考信息 -->