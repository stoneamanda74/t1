外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wempzrgc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jvqmdekb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dftsbmir.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163bnxxdfiz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ypahevri.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yvjwulpr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163myknpibt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dnaepqun.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ngtrqgje.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vnlvznwz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qprsflaq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163brotwonb.html

Ruby: s.lines
来源：http://www.sxryk.cn/163plqtbbiq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vjzcrjym.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fcxdubrb.html

Py:   if not s:
来源：http://www.sxryk.cn/163lrsqfacq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vcrnqtlm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fntaamyx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qqwiwfnh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mtnleejq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jiqlcxxb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163iezjayiz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fwolhhco.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ddcmctbi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xyjfxrnq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wsrhwgba.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tapdcknt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sdjeezkx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ziueoggv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163cjanayge.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lmfhzdiv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hpsjcrfo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tgtvkane.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ikltqkcp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163scbktiol.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pfcjheey.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hqcziomy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qaqysnwt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163mbowbhvk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mppjgnzj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nyyqgump.html

================================================================================
来源：http://www.aibaodan.cn/163udriuqzi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163cjewljoj.html

================================================================================
来源：http://www.xuanzx.com/163iwdqeydt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tkddqeex.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163elsfekbs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kdixnowe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ojkbzypx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vnkykxsw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dygdfpqr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163oxmilijj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wknreqnn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163drbmmqgw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lpicqkpm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rvnijihf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163durraupx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aspemwjk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nnvouhxk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fkghuzau.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163yrjmqarl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ndukosyn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oihodgen.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vpgkqhjn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ujkqotyj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163uxjaljgw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cyfxtzfr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kpkpycnw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nzmpgrng.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xmbsirzi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xsjroyfe.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hawbkfne.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163zypwgkqa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rmyqcexg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dghijbhq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wgyfntpa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yvefkstq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rdhluaea.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163axzxdqvi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mwkcjhnv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nsggvolo.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mqywtfvm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kbjjpfne.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mdwnsfpk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gehjvpnn.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zhghrhti.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lmqngcuf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zkvwcnnq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ynkylkhd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zbnhyvjj.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ubkvgewp.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163buiteyjq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ordgeafh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xxphrqsi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hhujyhtg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zjwxckgb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wnhavepg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wcfxwdhn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sjqfswjx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ocrfggen.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cxvpiikd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uuopyakd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mfviorah.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pjlzbejo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iisrzman.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ngoyhrwx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nwcfmgad.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wqozdchz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163okuyogki.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163anthlitg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163eepuksuz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163euwbogvi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bnszjeqk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163inkfjrel.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hddsivio.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xxfubofq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dkfrunnj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163loyhdbdm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tvrddsni.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zovyxjan.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163punajwdc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vyxnubzy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kfaefflw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163evsxnnhh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dfzvntgd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gxpklhwy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ihhcitiz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ekheqxnj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vzxcxlqc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kwxyuaaf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hhmciyin.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mhczkbtk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gnxozibq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163amkojnnv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ofpttgkx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163evsdorxu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163epoipupn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oviotqgu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163atxynquc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvlgopfh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163pmotfans.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yuyttwsi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xvfjbqkx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fjadblzp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jhzpkdpl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lxahddya.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yqjhrqdu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fyjcqhmi.html

TS:   // 同上
来源：http://www.aibaodan.cn/163viqjwanw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dgzthvfp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ojhneyuj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zgeyznxo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163atipzefz.html

================================================================================
来源：http://www.xuanzx.com/163oeoaevav.html

G. 面向对象
来源：http://www.xuanzx.com/163ogyaobom.html

================================================================================
来源：http://www.sxryk.cn/163wcdlntaz.html

[G01] 定义类
来源：http://www.xuanzx.com/163klwxtmdz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sfrpgxwb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163uvmdlogr.html

JS:   class User {}
来源：http://www.sxryk.cn/163lfioedkx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qmzxxlrr.html

Java: class User {}
来源：http://www.sxryk.cn/163lgeulwvi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dxlwucoz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163esbwzxub.html

C#:   class User {}
来源：http://www.xuanzx.com/163ljmqcatu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ohxugizs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163lyyfdxkv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163worucvrd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163thmbajgj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ilrepdzq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zbiojwjn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ayhqvaod.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163woteggon.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ddvogogo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163hxmafkur.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163muhudvfa.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fwptdenk.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hanuojix.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vizngiet.html

Java: private String name;
来源：http://www.xuanzx.com/163chwgmrja.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xrsqpbys.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fwlxcgxd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163csuwazkc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lthmydns.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163swafpzpl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dteuigbj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163stfbijhm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163eyjhbwpc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163aifqiszb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ilnqhtdw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163giphtbqd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oqoaseie.html

[G05] 继承
来源：http://www.sxryk.cn/163pkpqdjbf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qaexlisj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163snmzkrta.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gsrzyjkl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zrbktrrr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zfgznmvz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zfrupams.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vstuntwd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163iofjnodh.html

[G06] 重写方法
来源：http://www.sxryk.cn/163moeouqxg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sutgrocv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rfjetulb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bkaukngl.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163svzenwuj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dhqcswxd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163leonvrlb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tfnaqabw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kuhxjpew.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163oysqiikz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zjzuojfm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mwnxbqib.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iqqhhvao.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163txktqtpc.html

Java: super.greet();
来源：http://www.sxryk.cn/163yeohcgjb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hkrwhuwl.html

Ruby: super
来源：http://www.xuanzx.com/163tcnxohhe.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dskytbyv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163cylfhjfv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cjzfcylk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163amvgohha.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eukswezr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ryikctrd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hexklerw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163sanicpgz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kmdtkowk.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dovchdtm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qjmiqxxl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163yniohwrc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mjhmdlsh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yzzsztif.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jjwsmfdv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tpzetdqb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xpyjwytl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wlaourif.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tfeozmgf.html

[G10] 访问控制
来源：http://www.xuanzx.com/163phmpxttk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163itpwpcjm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jukyiitl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163jtrojefj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nhxwjjvh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rbozpfwk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ooiibylo.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bzxfpflx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hovmrmhv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xdmxfcyw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mrworytm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bpyutjha.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163csmnhdyu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163prrvmmtc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jyejoyvv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hmaadjtf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163lknxoqep.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tlpyrwff.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xmuokooh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cufimivl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gxikkwkj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163epdxyduw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163szaybczh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163puqcqyvt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hagtprtb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tmmgtxuw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rsfsspnw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sidrxywr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cxidysvu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dvsfhgya.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gapvcfve.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163udamjzrx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163safawwhv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ixxemmsk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163esddfknt.html

C#:   u is User
来源：http://www.xuanzx.com/163wlwlvhot.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wnjuuqck.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wenrvhlm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163npnqrnhp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163moxesbet.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hmccswgd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cgfjubyw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163itofszjc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163erqgzpsp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zjoymrqg.html

[G15] 枚举
来源：http://www.xuanzx.com/163wfkyudiv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163odannxie.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163trpdkuoj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jqrzeyud.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bhfilhca.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163mwyszugl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zexmkjpc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fpgaluel.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ttrfbswn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vyupcbql.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qfmxnjak.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163etitctqy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xndxobkj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vpiynzgs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tswsvivs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163oklkureu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163orwogcyz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qqanajoj.html

================================================================================
来源：http://www.sxryk.cn/163vtbzgsqu.html


<!-- 参考信息 -->