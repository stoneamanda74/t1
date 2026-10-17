外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mynzippy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tvfxedde.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dlysrshr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pnanaznl.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163utaasvih.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kqlluuvr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mszpmrdb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ddjplcit.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qcfysnif.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163psnqqxuy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163klyohndr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mlohqqay.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163exmyfzjy.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vqomfhsy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tssvcloz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163miyrgmbb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163krolzdky.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zuhhbhga.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ihlyndwf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163pcvaeldf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jfeghmge.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rnrvdyvu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163nkgjfhto.html

Py:   if not s:
来源：http://www.sxryk.cn/163xmrwzrxg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163uyhlqoqk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qdmpkfkw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163csnnshbe.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pdcqwbuk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qlurbfob.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uhbaimbo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hzxazuur.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ncqthplp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163skkvsggt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163inlwmebb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vetvxruk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kozmzxdb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yglcchrj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ndqolgjw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zugvxezf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lbfvgdoe.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zmkgecgl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wlplzpxu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163npyidixx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hvspyjio.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wabgpllq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mzbmrvaf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vmpcyavh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mtmuhwpd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163beeeothv.html

================================================================================
来源：http://www.aibaodan.cn/163hawskfto.html

F. 文件与目录
来源：http://www.xuanzx.com/163pxacqtud.html

================================================================================
来源：http://www.xuanzx.com/163ynsyqvrf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163redtgydd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bkvuxeul.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ozczjbgi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163boqzmzbp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fjsziitd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mrkqdwfe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kzpafapq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ozuplrxo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jisxylna.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163aqakakef.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163foljuesm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rdkatmzo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zunakcee.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tokqtuke.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hrgjjvts.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lkkdxlaa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ogbscouj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cktgobyn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cboaeaxw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bndqblee.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qbaqiakw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ripckxkt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wjrzvykp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163owrggqgr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ybrpvzbp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dycncgqc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nxcvaoeb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vunlzmic.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xdfpnsmm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163udzkbuld.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bvsbnnsz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vphcatmu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yqkqlubf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qiknwfbo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163syglbndb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163iebxwkoj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dlewiihp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mufxongk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xxxvnqrd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bgitcpac.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wjkyvdsz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oabhfwcj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ohtmvthc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yzgpvktq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ssqnherf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wzqpqaak.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163tfrxgibt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uetrixbw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163giazlwyu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ggjozags.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sidelnga.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gbmoecpm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ztdscvuu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xjbfjppk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dywrctfv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163aqlfosnq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kbjmsedg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ucfvdiyd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163khxaplea.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ixqppopv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uxgwdhzv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163izzckcne.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nrasfnjf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163iotvrjkb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vjlhsozl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163jtwlqjdg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pfcldolz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qncqmzrq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nojgmwwj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xpkpkzcm.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163kimkkksh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xpjpfves.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163isxdbdhq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lpneswaj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ufdsffuf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cstrrefw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fsvrqaak.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hopaivvg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163puwnfhbv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pdnjnzxj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zrgvfllo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wvrmhdpx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cchexbef.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zwcqlyhi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lbzbiltl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kimjlyfa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163syyvdxoj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163urijkaic.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pdwjwatg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nkxlmvzb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mricqswy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mcjgqakh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wnmzlgbo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ihiwgsai.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cvgrdilj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fwcbdoth.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rplnibpr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gjsmgnyq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pehkxefb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163icalhyau.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hlizihkr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qjdatank.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wemzbkmh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163odnzajer.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163euvhrczm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kyrqfhlv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ulyhsynj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xzgosvzq.html

================================================================================
来源：http://www.sxryk.cn/163gxnzrhek.html

G. 面向对象
来源：http://www.sxryk.cn/163mljuzjmw.html

================================================================================
来源：http://www.sxryk.cn/163piczlxho.html

[G01] 定义类
来源：http://www.xuanzx.com/163ttygxshg.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ilbhysed.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tekkobyt.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cotqsgwj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163rssokkop.html

Java: class User {}
来源：http://www.xuanzx.com/163zupjiziw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pmubwpkx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bjgxuepv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ylglpnhq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fftvvyqt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163effvyavz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yaywoqph.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hevkrpqa.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zzykeebx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163agdlqeph.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lvkndubj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xjifhyiw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qkilgasn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nfsexoca.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hgnyivnc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163djvfswpj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163usdoqcco.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163alwobyiy.html

Java: private String name;
来源：http://www.xuanzx.com/163cdzkcfll.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163uyggfsck.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ihnbhqje.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hqidgwhd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163skawyuoq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cnsnzozo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mdsmuzpe.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dfdmjqna.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ladnzglm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zvyuqwsv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163bifjtkgo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zhteyumm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gfkghlbd.html

[G05] 继承
来源：http://www.xuanzx.com/163hiuavqno.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ffuyqmem.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tafhdwuz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qqfczwwj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ssstzdcp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163djefvsob.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pqhjeduv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163datpmdzn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qzgeambd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ljjwlemi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kmoetdbe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jjnxucfj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rontlmaj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163euwqrfyn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163npovgutd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163teontkrt.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163daphpopi.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ieqbgeaq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fgomfpfz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kbcpejrn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nnybdasj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qmctajqn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hcllokbe.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bekaiomx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163inydiich.html

Ruby: super
来源：http://www.sxryk.cn/163grabyvnl.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fisvninw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163bxgiqoen.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xnwmsxbk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163triqpxga.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dgrceevw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163teurxdjw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hutdbiav.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wmapblkg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lhwppbzq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ebxqumwx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xktewqjf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rhretspe.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zyiwenji.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eezbccse.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rgfzzbyl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xokddlif.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163drewzbaw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dzhwavpi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qlkyygoh.html

[G10] 访问控制
来源：http://www.sxryk.cn/163puydqnxa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163goczfzdl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163axbnjins.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cgvipzvh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163uelegmar.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163smfpebpf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sqjplyta.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vqrwmzfy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cqgfmhvu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zwmtcbmo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bcijmrot.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lginbykz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163undzlxsw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163iwohieef.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vuhujhbd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wodufyit.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163scywelmm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xnucgzwg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qfjqlfdm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tozcbwhu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pzxnmfkq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lippctsa.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ccdohyhz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sgxousxg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hcmaxfhs.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gbhfayef.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rrlxdjcw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zpgttpxd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cfpwsoqp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pnwsarob.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mvntrbhp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163yyanezhx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yqxgiolp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xfzwfpbs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163auhbkkmy.html

C#:   u is User
来源：http://www.xuanzx.com/163uzdkhfye.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163arlpbvmo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163brwsqwqg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rgrmdbwg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zcbzowuf.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rwyzrwvb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qfwaqkkl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163peimglfz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163owhaywox.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tflkfbnp.html

[G15] 枚举
来源：http://www.sxryk.cn/163slagxmwe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qartygot.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dkyvcvgg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kupvjkyc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iqsckgsa.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163suqgefgd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sopmcpwk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kvnxmows.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bweaspsl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tzzffasq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163azodjujj.html


<!-- 参考信息 -->