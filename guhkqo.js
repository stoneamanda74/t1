外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163edwfniwf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163uvrsyewd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ccjllllf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lwnklgne.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163skceqylb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qbualrht.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dpjmstrg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pjwzcztw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163poabglyj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163oyaurhgn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nlnnxfqo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163obeesrpa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eobuszet.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163thdosoys.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163owhlpiag.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163guxegsxe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ypvsaxsa.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vurvgsod.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hblhqrnm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163urhuxdov.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wvxsqgrl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iwfugypf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wlceqrbe.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ytsaibbv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gcsrfpav.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rplnuocm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gulfapuh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163khsbdhhl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hzjuvsll.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163bfbnugrn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cnkyotzj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163wfcvdmzn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wezrhvns.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cznkhzex.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fuaiwnzy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dvgemfut.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163krdmuhgl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ppnbinkw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cncgpoym.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dvnunmzj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dunoamzc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jrhlsvhq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bmvpgewg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dakikamr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mnirexsx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163llnxnzmr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sbzhduxo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xsygfxna.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dxsauyqv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163sctdcsdc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qvbnumsx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rjmrjkot.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rhbeiwqb.html

================================================================================
来源：http://www.aibaodan.cn/163wtuwfbky.html

F. 文件与目录
来源：http://www.sxryk.cn/163ezwovklm.html

================================================================================
来源：http://www.aibaodan.cn/163yvfswdgi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lglkkqfz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ceveqntc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163sdpgbupd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163atetdrvg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xemqwnzm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163quytskxp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jlkxvcba.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cbgmqsxg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tiqymyjo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163igtmsyxi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163arcybwgy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fidnffjb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mmfxzybu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163llqykvwh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163acqtzfyu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163noysjfax.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vtzgsfxe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163cadzkfpl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zusojcxa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mcsiphoy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163teyncgru.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ibiktcko.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ovpsajob.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qluzlpzx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yuixdgda.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lbidkbmr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163oleqyxjz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163shuiuwvk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jkrdcwpm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163srffyvnx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xzzvkldm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vjwrrsot.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163adfftdqc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sljukras.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163kxxtrnhk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lwdppzlr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xfnnuohg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jnvkbxoi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nwndjwhp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jhhesmnj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hxizzanl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163shxpxzbs.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163afmnndca.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163vfcbzynu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rdrkqbup.html

[F06] 删除文件
来源：http://www.sxryk.cn/163evhdnsjr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bfixzxtg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mdkgrswj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wxlydvhn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bhkvrvyq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wldicbxd.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163pjnkivhm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rdbtqyon.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nfqpkkan.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gpwzlapv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cuuitsbs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kstafktn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pkqshblt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163abkkcjwu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vfyrhqjf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163iadmrios.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163seimrtym.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163clohhhde.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ahsmbnyk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ebmdlaxr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lcfpmsew.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bssbgraz.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163itwbqtjl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jvkozkds.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ylajsnqo.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gbluedac.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fgazlpgz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163jojvzena.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rsqgoxtv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qxxsqxim.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wgqcpjya.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pjvgadjp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jklxflua.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xcbkssnf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ppalltfs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kmrsiojh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wvfwpndu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vfeuxhxr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163tunbbbmj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gdnqwkzz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163fuattjct.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bjglxcml.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ecnwlprz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xurmyahc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163umxjkwwp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ywjrbkng.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kiwxiypq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163huczhfpo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kaqvtvdi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zhavlzhj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vhtgftni.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bwhjiphz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bfdaikwk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pjzlulod.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163niflbkun.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rvuxajod.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163evrhwmyh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163llfxkqnm.html

TS:   // 同上
来源：http://www.sxryk.cn/163ifnksxuy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hrdygwbx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rhdtfjmx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163timrufan.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wpalquki.html

================================================================================
来源：http://www.xuanzx.com/163kybjrxnx.html

G. 面向对象
来源：http://www.xuanzx.com/163jctxhbor.html

================================================================================
来源：http://www.aibaodan.cn/163behlbkol.html

[G01] 定义类
来源：http://www.sxryk.cn/163sajerwzx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uporqnta.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qpqquhuj.html

JS:   class User {}
来源：http://www.sxryk.cn/163sqxykvkw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163trgpezjp.html

Java: class User {}
来源：http://www.aibaodan.cn/163jllxywei.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lbhrpvhu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163sdrgilyf.html

C#:   class User {}
来源：http://www.sxryk.cn/163gfrkebpk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163hkudnhkx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163smbmhnix.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zloksqhg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sytmzjas.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hodyjiwe.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hrfkjrdw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163opsxoihy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ilooxkrd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ygxgqfrh.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gqvliteb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163anpnxjww.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xznjjzbf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vqeaarzv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tzlsfztm.html

Java: private String name;
来源：http://www.aibaodan.cn/163gziyoqbc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163truzmrrf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qxevffls.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ppzuglqb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pbzqywxc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lbfayqss.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rhjhhuhh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bdkfkalg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lctvouvr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pnmttwph.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163btubffen.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163mcyezeog.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ogiydsjd.html

[G05] 继承
来源：http://www.sxryk.cn/163fvxkfmky.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sueqzhzn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lqpozjvt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kqbmngtv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163eefqvzzw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ddkeezkh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ekrycawd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163irkgiugu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ohaicfqw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163crdfhanb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163srwdgclb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163azgfuocy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163snwwnijc.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mlzhdyae.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ogcenord.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nqbeymqs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ekkovxqz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ofqobhow.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qjjzjhbq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ttaddsgu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vvzarctq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163oqasksbj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ouzaquap.html

Java: super.greet();
来源：http://www.xuanzx.com/163lbyjcatk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ogqphdwg.html

Ruby: super
来源：http://www.xuanzx.com/163mplrvctg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163aayiprmo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163navwuwua.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vsnjmdob.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163auqelmer.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mvhzehag.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ahkcsjuy.html

Java: static void f() {}
来源：http://www.xuanzx.com/163chfoqyak.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gbacndnh.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163edgmqhcc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163bmdvgavu.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163srgtthbv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163emugbfsi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sepgqevd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rjubgynx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ihdzaxom.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163irgapdhq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dlcddedo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163abqxsmts.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lmqymfjw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dcqzzfgg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163divvqhty.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lftcpsmb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gtnsohrl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ronkqbot.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163irhmhyug.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zdxukilv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pugjiqaw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dbcecqos.html

[G11] getter / setter
来源：http://www.sxryk.cn/163fzestgii.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163grsaorxc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163daopkhih.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hwqdhenm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wjlljmem.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wftpbfcs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dlvcddtx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qxsqsjvo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rczsfscu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163emlxccgv.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fwarwdrz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zxmrxkas.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jxghafmn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kimzmkwy.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rnmjdchb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jzbikzqu.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163iikxypci.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cgbfuiqq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xqibosbs.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rccfxpop.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163oztuukxb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tssujwpa.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163sedokjfa.html

Java: u instanceof User
来源：http://www.sxryk.cn/163npeelkui.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ssjlkmqc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vkunyppt.html

C#:   u is User
来源：http://www.xuanzx.com/163hzxltosb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163shfynlqy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163phymrhtv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163emeffteu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zfnobupt.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mebgytuj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163usxgoodc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ctqhpcds.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lorqklxd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zivdotxh.html

[G15] 枚举
来源：http://www.sxryk.cn/163mxirmgez.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yrbipohe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gkxkshph.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jgylbehy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dbjynyml.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hmhteune.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gidacuex.html


<!-- 参考信息 -->