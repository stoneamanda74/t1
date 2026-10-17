外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xwfmpfrp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kuesoggq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163yaatoxue.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ltzfnuhd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qtgdlvuh.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xsrttsbc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xoenlgjg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dyysfrku.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gxbhsxcg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163srruepkx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xhubjbao.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nupgbvtx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jbshebfl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cgjfmwbd.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gvihfwra.html

Py:   if not s:
来源：http://www.xuanzx.com/163qqobalzu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mgnhfqem.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jctofiap.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163juypzazw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ufomhprq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zkaadbpp.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163isjfwqij.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163isgstxfk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rxlafrxc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163dhgdvfyo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wyjnggwb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tpguysee.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mmiiabxo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163btsqxsqx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nahfivxu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mvlcpuyy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fybjixxe.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tzgpgouv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163twzcbday.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mawjokts.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lmfgswde.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tmxataht.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xviqllfk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rdzybozh.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tkqosgns.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163oglrqkzo.html

================================================================================
来源：http://www.xuanzx.com/163dperelhg.html

F. 文件与目录
来源：http://www.xuanzx.com/163wgekttmm.html

================================================================================
来源：http://www.sxryk.cn/163vzetplsq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ewvnjzql.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163loxfibdn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163gpkxfsfu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163trkhlpvq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163nqjcizwt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oumohbfk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rjxjwfal.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qrgakcwk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gwekahdi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zhvfyxhf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qquphjfz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wdqrcqut.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fpcyzlzj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jjgrdwuh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vwvuqplw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fdjidpna.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nfohdkdg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mghbceeh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sitkhqyg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hgyodwah.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lkagkwnv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zsdwukev.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ufxmzxor.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tljcehho.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ygczxten.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163jbbjjdjj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ucvgpuwx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gwihpnsa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zhxidftb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163mipqdrsk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163psjkzuza.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vxthbtui.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ddpeppoh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hmpgbpmk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ubeqdxag.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ymwzxryl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163laajxzoo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wzqichnl.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tttirmac.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ijctnjsw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qzslrkma.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163urnrynjx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nuimfzky.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oswpzezm.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xuvervao.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qvymeafj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ezdadfpd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163egabadpv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zhruhuvq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bnvbgjsu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kkrzvjvy.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yvufnatz.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163knoojuki.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nlolvlri.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163agtewsix.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163myexcgco.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163miarjauo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rmovrfgb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gokthksc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xplhrtuq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lwewmwlm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163oevufjlc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fmnbjsmy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dgvqkgzt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163psddqnwv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kvnnupmh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wycxqfay.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163acvynyrr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ckhnyoic.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bazelctj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fauinloi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163geevhllo.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zooipwci.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mxfbbavu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kezuhoow.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163inzeongj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mxtfwtjt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163khybzehp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163appngevy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163whsudraa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163snknjgnf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rtutgule.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rbctkzam.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ywswquyw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zmbhxkja.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pjeabrjt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ksnkwlfq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163byqyurxo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ggkapdlz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163dpiydseg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163cdwwccgo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fjhbrltk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kaamucud.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qjxzfqwb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tdegjmjk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ruqnirlt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kzlrvjmp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163erplcqrl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rnlvtmjq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xboqppph.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ifxzemxv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tskmbtbs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ujdhpilg.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ottwrlfn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gwioopsp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lotsfxjy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163sjrktihy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163csghmyxk.html

================================================================================
来源：http://www.xuanzx.com/163ztjmedyc.html

G. 面向对象
来源：http://www.xuanzx.com/163aedjsbcy.html

================================================================================
来源：http://www.aibaodan.cn/163liyskioi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ehcflnga.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lckxnkeh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vmkairth.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zsteiedt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uwmdelcn.html

Java: class User {}
来源：http://www.sxryk.cn/163dotievdv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xtubvbmw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163detdhgxt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163oxulztrh.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zmvrecim.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163prrdlkmy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hubpopkg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163iwautvmm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aovzafzg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qtgcdlal.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163sgthnspk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lkdhbapu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xcdgswlw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uwiynnfv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rrcvvbpb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iqzvcmik.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lmgpfccj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lnjuvxaj.html

Java: private String name;
来源：http://www.sxryk.cn/163dxepcofh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163odaoslof.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ttosaqvu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bgainxdt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nsnkeqtq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ebskkonq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kwiuexrz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mhtjtewm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ituygnzp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163dzxolbar.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163nlkiooms.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wdzdwekl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163frsxkcfy.html

[G05] 继承
来源：http://www.sxryk.cn/163rmlobnqa.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qzfcwdld.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ofjymmyw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163smgtuqnh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163swjvihrv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cyqhuoea.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kbokjujf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nelhbakl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ewzptddl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nrqknyfk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xomcjvwu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ovpjpliv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163flgrande.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vkxqtxnk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163caaekftk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163tcixtjmu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163latiljtd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vvofgbex.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163aetnfdig.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xjcvijfb.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ckxzmrxb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lxhqfefw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dblyfdvd.html

Java: super.greet();
来源：http://www.xuanzx.com/163rczrhvsr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fnfkzxdq.html

Ruby: super
来源：http://www.sxryk.cn/163gdhybsqw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ebkqnoku.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wcgdovcx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gevejrdm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jcsdwwli.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ffzyqojg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qxcxtkid.html

Java: static void f() {}
来源：http://www.sxryk.cn/163czsaaoqb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kohshqel.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ngisbaiu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ifafoqpg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163igaydlmj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ywnmtgxk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ceaagpch.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ryjghrtx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cyuaywhx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fsqwovkv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163faabhfpq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zixduczm.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163etnhexbs.html

[G10] 访问控制
来源：http://www.xuanzx.com/163sjkwoszc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jezzrbcr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qaykfmaw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hiadfief.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hzxwsxap.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gemhtutc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163neoocbyk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163pxmdfwle.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vxigroyz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163fvyhxnnu.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ajoxhwxd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oresmfcu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qcermrad.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cyzqjstl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fepekxph.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dbpjkttc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hgrnwgxz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xgdarrvq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163yfgjgoln.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163orbpkens.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lrtlnfdp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163atucrmbr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163exnxizxl.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bqqmshek.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mwtkpsed.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wyizhjhe.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gpqttfgy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hvfzehbd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163akweudjs.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163avurgouv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163haikgwtu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163chahewdl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tsuhuwrj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tczdenes.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xuudhqew.html

C#:   u is User
来源：http://www.xuanzx.com/163nlivxkip.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rtronncq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tjtnhkmx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qbwlraoe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ftuhzfbp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163omgrvqna.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ozeqcfsg.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uiovgmvj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163eihzvodb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kxeglglo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cldakdla.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163uqnxgfje.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cplgwwhe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163raxsntwj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ujffdxpt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mchzufmg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163izafwdkz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kemorxzi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mybchkwg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163pebquksg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qdmuxpls.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163efvoaokc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qytxlxor.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ygroccif.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163psokzffy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xqujprof.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nwxgcheg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lisgayja.html

================================================================================
来源：http://www.sxryk.cn/163qcbrcztx.html


<!-- 参考信息 -->