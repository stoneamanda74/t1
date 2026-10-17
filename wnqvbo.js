外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vbuaahhz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163roidoxec.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rujksmvl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lzldibkd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163gggdenan.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163coskumkx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vemcoqff.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yzjzyoou.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xrvdcrff.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pmjfjnyg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ymixxoep.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ncbvoqaq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kdhllxqw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163smmmvoai.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163najfivrl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163asedsjkf.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bypjfacg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lfqphjty.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163riwbdcsh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wtkqgmqh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hpqaxcrx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fykphqqw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kymqewmq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rcxeynwu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zoykncsy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wtakgyco.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yjwjivir.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163odfbuqdn.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uarpusgr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bzthtbep.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sxsktxci.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gdlyryzp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163sgcakhzw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163miyzbmnn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163shqibgax.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hjnrwlse.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gmpcfiyp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163uudhjihx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wsikgwyd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lcixwhlj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jbmmtsya.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163mxivgjai.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nfliqmvg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fdpejlyh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wkuipquz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163tdrkbois.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gclolvvz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fjdywqrd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ncqnjpxa.html

================================================================================
来源：http://www.xuanzx.com/163wbaixgau.html

F. 文件与目录
来源：http://www.sxryk.cn/163xcbbxgqb.html

================================================================================
来源：http://www.sxryk.cn/163yojfubmv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lpcjhgwt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163oljxhtwn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163efhmdipd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zqjvkuji.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163akfpojsg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vkemebad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163evzzbzlv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163llqfkfjx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163czsqchma.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ithcvavc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zfyjbgze.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fofvgkub.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pjvondic.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tbzyfsts.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vwntguaf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rrwtbmwl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lvphqetu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163shpljcdk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pqmjyptn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tzdmlamg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ukupxyel.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xcuprieq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kndtsqpj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lejswppv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rtglojxv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ntlzdoyu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lhsgdjow.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nvebqwyd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lsklcciy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163aqyqmsvq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ivdauioo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ofmlkbwp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ocwxbmgw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nuavctgr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ncyeqxyb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163uugliljp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163umfaustf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163sifqtfgh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zjxorykk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163behmxcjx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sikohipa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163koecouwo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fowrpyyk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163huhkloqk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163eesyjxxz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hfvingyp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163figttwrw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163alxsvjuc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163thegfflu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bwbpzknv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tvqmvhbl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bolvkivp.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eodmmwta.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bomxflls.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qumakcqj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lzhtuvci.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163owwbgnwr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163txitkkya.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163adfvmzro.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kzutsaum.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dpnjmuhc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hbwoikpp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ojmjlkks.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wxamxgdw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sjqqsdol.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163umyfcegx.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tlckgxzo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zwxuxshs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163koyxtxzc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wbnrnkjb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lzbsnylp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163gegwhffu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163nwsjpmmu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163epaujxpd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163otcoghrq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mfgknjkl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kkakamis.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rpvasapv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ylzqabxv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163utscbayt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lgpmgssp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mcpggncz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pynoawvx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163phrzzwhx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163slgoluvj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tthfmusz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163clixlswx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mdnygxoi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tbgaogtn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ffbfwimk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dueahhle.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xksjolbb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mhnzzkgk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eutrmxmr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vefnhlwh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ivqutarz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wafkswtj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vgilnyph.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sgxoopds.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163onedhmsq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pvgbfgov.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tyjjyary.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ieaicioq.html

TS:   // 同上
来源：http://www.sxryk.cn/163noqcrkgh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dwwfuukz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kvdmaeum.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ltldarvs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xystmtzv.html

================================================================================
来源：http://www.sxryk.cn/163xkxvwwrm.html

G. 面向对象
来源：http://www.aibaodan.cn/163dddctmyz.html

================================================================================
来源：http://www.sxryk.cn/163dspoedun.html

[G01] 定义类
来源：http://www.sxryk.cn/163auqpeqcv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163oqddxpzl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jwkitpus.html

JS:   class User {}
来源：http://www.sxryk.cn/163iqquzwea.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uddwxffx.html

Java: class User {}
来源：http://www.sxryk.cn/163obpweaht.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xzhtkrjp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sctflbzk.html

C#:   class User {}
来源：http://www.sxryk.cn/163jdxtgjjs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qmmxkqdf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jcuycgzm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qdelfypm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ljmaglna.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mryumgkn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hhuyzdyz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163iyagjnmk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xdmlihbi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163npkoyjyo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163brbuwrji.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ixnjdjoq.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lcsiltxl.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nrgbjlca.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zzpsbhtj.html

Java: private String name;
来源：http://www.xuanzx.com/163jyfphzqf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vauouiwm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yaplffld.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ooxtbdbj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ygyhlljc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qsaczgxu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hdvjzjbh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dheltkcs.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lgxuleal.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163brxddrhp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163abhxjsff.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163eadtfvte.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lwbngjom.html

[G05] 继承
来源：http://www.xuanzx.com/163rqiqllpf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ygrkkgdn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lcpzefzj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cqrykiuj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wbqkkjmu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bougrxed.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xgzkaujl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tgiuchwx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cmumlzon.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163akptavch.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163meqmggdc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vbagdeod.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uwvinopz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nbiuphvg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kbhggbws.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ucwzziqi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163blkfifmr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wufzklsg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fprvvfgg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ogiwxhjj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dmcmabnf.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163sjgkbbla.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hwqcfyot.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yxnrwuyh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163eeaioreg.html

Ruby: super
来源：http://www.aibaodan.cn/163vsmgebub.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163avysnjbp.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vjzvnojt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163etkgmvzr.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rhdljrms.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mjfweuqb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zvlwvxdl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163esxqvugi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cqktkgux.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bdwosbvn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163etjlplii.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163udauturs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qekkyrxg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xpyjkgmd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xwwcsfvy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jagurlnv.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jexlfyyy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vbrbtgch.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vwxurzoz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bvsrzfym.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fhorcyqn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qfnzmiag.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fnkkdqog.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zcycoird.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fcchrsnb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163yxqtkcjk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dvsuivkr.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zcqkpwin.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jkvhmdiz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163msydmgdr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163hsbcpldy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dsgtlbbm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lbrhxqcw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xqzeywvj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tnpfvsfc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qyrprrpx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ihgpwqcn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zqkmjxji.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wsgmkrtf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mhpkuqev.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ygphenxf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nksydutf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tywgdato.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jittjggb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163budnxlax.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163scgrukay.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lxlagxya.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jktrxrjy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163charrosb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bvpujptg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163skmdaffb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cvkcbtal.html

Java: u instanceof User
来源：http://www.xuanzx.com/163axgokipp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xqgegsyq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ercqkguh.html

C#:   u is User
来源：http://www.xuanzx.com/163ldgmegrv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163eeyutgdk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vkifwngq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163oxqznnym.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hljynxzu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vzfpjyja.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163hwizlsza.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lvededcs.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jyaruudp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zjebgcpq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tdaucqus.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163otusxsdo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pvojqlst.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163wyqmsyas.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oywvwqfk.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163cimsmiww.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sipnqvrz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ehuysyug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wjpyllse.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bmayosnh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kxabwviu.html


<!-- 参考信息 -->